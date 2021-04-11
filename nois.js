const base = document.querySelectorAll('.base');
const other = document.querySelectorAll('audio:not(#base)');

const factor = Math.random() * 5000;
document.getElementById('go').onclick = () => {
    base.forEach(b => {
b.loop = true;
b.play();
    });

other.forEach(o => {
    console.log(o);
    o.currentTime = 0;
    o.play();
    setInterval(() => {
        o.currentTime = 0;
        o.play();
    }, o.duration * 1000 + (Math.random() * factor));
});
}
