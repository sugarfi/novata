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

let f = document.getElementById('i')
    f.onchange = () => {
    setSrc(URL.createObjectURL(f.files[0]));
};

document.getElementById('b').onclick = () => {
    audio.map(x => x.play());
};
