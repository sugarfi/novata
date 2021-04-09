const canvas = document.getElementById('c');
const { width, height } = canvas;
const c = canvas.getContext('2d');

let image = new Image();
let i = 1;
const low =() => {
let m2 = new Image();
    m2.src = canvas.toDataURL('image/jpeg', Math.random() / 10);
    c.rotate(1);
    c.drawImage(m2, 0, 0, width, height);
    setTimeout(low, 2);
};

image.onload = () => {
    c.drawImage(image, 0, 0, width, height);
    low();
};

image.src = 'buddy.png';

