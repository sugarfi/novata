const f = new SuperGif({ gif :document.getElementById('f')});
const f2 = new SuperGif({ gif :document.getElementById('f2')});
const i =document.getElementById('x');

f.load(() => {
    f2.load(() => {
        f.play();
        f2.play();
        const g = () => {
            i.src = f.get_canvas().toDataURL();
            setTimeout(() => {
            i.src = f2.get_canvas().toDataURL();
            }, 2);
            requestAnimationFrame(g);
        };
        g();
    });
});
