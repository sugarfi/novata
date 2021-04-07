const srcs = ['polarf1.jpg','polarf2.jpg',
    'polarf3.jpg'






    ,





    'polarf4.jpg'];

const i =document.getElementById('x');

i.src = srcs[0];
let ind = 0;

setInterval(() => {
    i.src = srcs[ind++];
    ind %= srcs.length;
}, 150);
