const audio = Array.from(document.querySelectorAll('audio'));

const DIV = 5;

audio.map(x => {
    const rate = (Math.random() / DIV) + (1 - (1 / DIV));
    console.log(rate);
    x.playbackRate = rate;
});

const setSrc = arg => {
    audio.map(x => {
        x.querySelector('source').src = arg
        x.load()
audio.map(x => {
    const rate = (Math.random() / 2) + 0.75;
    console.log(rate);
    x.playbackRate = rate;
});
    });
};
document.getElementById('b').onclick = () => {
    audio.map(x => x.play());
};
