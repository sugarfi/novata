const canvas = document.getElementById('c');
const { width, height } = canvas;
const c = canvas.getContext('2d');
    c.translate(width / 2, height / 2);

let image = new Image();
let i = 1;
const low =() => {
let m2 = new Image();
    m2.src = canvas.toDataURL('image/jpeg', Math.random() / 10);
    c.rotate(Math.PI);
    c.drawImage(m2, -width / 2, -height / 2, width, height);
    setTimeout(low, 2);
};

image.onload = () => {
    c.drawImage(image, -width / 2, -height / 2, width, height);
    low();
};

image.src = 'buddy.png';

