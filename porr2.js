const canv = document.getElementById('c');
const ctx = canv.getContext('2d');

const { width, height } = canv;

const porr = new Image();
porr.src = 'boring.png';
const satan = new Image();
satan.src = 'satan.png';
const fire = new Image();
fire.src = 'fire.png';

const dist = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

let points = [
    [ width / 2, height / 2 ],
    [ width / 2, height / 2 ],
    [ width / 2, height / 2 ],
    [ width / 2, height / 2 ],
    [ width / 2, height / 2 ],
];

let speed = [ 1, 1, 1, 1, 1];
let dir = [ 0.2, 0.4, 0.6, 0.8, 1 ].map(x => Math.PI * 2 * x);
let dir2 = [ 1, 1, 1, 1,1];
let rot = [0, 0, 0, 0, 0];
let fx = 0;

porr.onload = () => {
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'red';


const loop = () => {
    ctx.clearRect(0, 0, width, height);

    fx += fire.width / 59;
    fx %= fire.width;

    ctx.drawImage(fire, fx, 0, fire.width / 59, fire.height, 0, 0, width, height);
    ctx.drawImage(porr, width / 4, height / 4, width / 2, height / 2);

    points.forEach((point, i) => {
        let [ x, y ] = point;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot[i]);
        ctx.drawImage(porr, - 50, - 50, 100, 100);
        ctx.restore();
    });

    
    points.forEach((point, i) => {
        let [ x, y ] = point;
        const [ x2, y2 ] = [ width / 2, width / 2 ];

        speed[i] = 1 + dist(x,y,x2,y2) / 50;

        if (dist(x,y,x2,y2) >= (width / 2 - 50)) {
            dir2[i] *= -1;
        }

        points.forEach(([x3,y3], i2) => {
            if (i2 != i) {
                ctx.strokeStyle = 'red'
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x3, y3);
                ctx.stroke();
                ctx.closePath();
            }
        });
        rot[i] += 0.2;


        if (dist(x,y,x2,y2) >= (width / 4)) {
            ctx.drawImage(satan, width / 2 - satan.width / 2, height / 2 - satan.height / 2);
        }
        x = x + (dir2[i] * speed[i] * Math.cos(dir[i]));
        y = y + (dir2[i] * speed[i] * Math.sin(dir[i]));
        points[i] = [x,y];

    });

    window.requestAnimationFrame(loop);
};

loop();
}
