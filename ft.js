const ft = document.getElementById('ft');
const root = document.getElementById('root');

const renderDir = (elem, nest, last) => {
    const prefix = nest.map(x => !x ? '│  ' : '   ').join('');
    const name = elem.querySelector('span').textContent;
    ft.innerHTML += `${name}\n`;
    const children = elem.childNodes;
    let i = 0;
    children.forEach(c => {
        let l2 = (i >= (children.length - 2));
        if (c.tagName == 'A') {
            ft.innerHTML += `${prefix}${l2 ? '└' : '├'}──`;
            ft.innerHTML += `<a href=${c.href}>${c.textContent}</a>\n`;
        } else if (c.tagName == 'DIV') {
            ft.innerHTML += `${prefix}${l2 ? '└' : '├'}──`;
            renderDir(c, [...nest, l2], l2);
        }
        ++i;
    });
}

renderDir(document.getElementById('root'), [], false);
