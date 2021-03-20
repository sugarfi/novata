const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');

const p = document.querySelector('pre');
let last = 'a';

const OPTIONS = {
    'a': [
        ['a', 3],
        ['b', 5],
        ['c', 5]
    ],
    'b': [
        ['b', 3],
        ['a', 5],
        ['c', 5]
    ],
    'c': [
        ['c', 3],
        ['b', 5],
        ['a', 5]
    ]
};

let n = 1;
setInterval(() => {
    p.textContent += last;
    if (n == 19) {
        p.textContent += '\n';
        n = 0;
    }
    let options = [];
    OPTIONS[last].forEach(x => {
        for (let i = 0; i < x[1]; i++) {
            options.push(x[0]);
        }
    });
    a.className = 'blob';
    b.className = 'blob';
    c.className = 'blob';
    if (last == 'a') {
        a.className = 'blob act';
    } else if (last == 'b') {
        b.className = 'blob act';
    } else {
        c.className = 'blob act'
    }
    last = options[Math.floor(Math.random() * options.length)];
    ++n;
}, 200);
