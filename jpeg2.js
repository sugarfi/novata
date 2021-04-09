const canvas = document.getElementById('c');
const { width, height } = canvas;
const c = canvas.getContext('2d');

let image = new Image();
const low =() => {
let m2 = new Image();
    console.log('lower');
    m2.src = canvas.toDataURL('image/jpeg', Math.random() / 10);
    c.drawImage(m2, 1, 0, width, height);
    setTimeout(low, 20);
};

image.onload = () => {
    c.drawImage(image, 0, 0, width, height);
    low();
};

image.src = 'buddy.png';

