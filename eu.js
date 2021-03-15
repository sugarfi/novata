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

document.getElementById('g').onclick = () => {
    setSrc('eu.wav');
};
document.getElementById('f').onclick = () => {
    setSrc('step.wav');
};
document.getElementById('c').onclick = () => {
    setSrc('ceremony.wav');
};
document.getElementById('p').onclick = () => {
    setSrc('piano.wav');
};
document.getElementById('i').onclick = () => {
    setSrc('idk.wav');
};
document.getElementById('d').onclick = () => {
    setSrc('die.wav');
};
document.getElementById('y').onclick = () => {
    setSrc('day.wav');
};
document.getElementById('s').onclick = () => {
    setsrc('sun.wav');
};
document.getElementById('n').onclick = () => {
    setSrc('noise.wav');
};
document.getElementById('r').onclick = () => {
    setSrc('radio.wav');
};

document.getElementById('b').onclick = () => {
    audio.map(x => x.play());
};
