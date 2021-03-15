const pre = document.querySelector('pre');
let lines = [];
let n = 0;

fetch('results.txt').then(r => r.text()).then(data => {
    lines = data.split('\n');
    pre.textContent = lines.slice(0, 42).join('\n');
    setInterval(() => {
        pre.textContent = lines.slice(n, n + 42).join('\n');
        n += 41;
        if (n >= lines.length)
            n = 0;
    }, 95);
});
