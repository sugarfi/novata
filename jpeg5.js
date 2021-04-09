const canvas = document.getElementById('c');
const { width, height } = canvas;
const c = canvas.getContext('2d');

let image = new Image();
let i = 1;
const low =() => {
let m2 = new Image();
    m2.src = canvas.toDataURL('image/jpeg', Math.random() / 10);
    c.drawImage(m2, i, i, width, height);
    if (i == 1) {
        i = -1;
    } else {
        i = 1;
    }
    setTimeout(low, 2);
};

image.onload = () => {
    c.drawImage(image, 0, 0, width, height);
    low();
};

image.src = 'buddy.png';

