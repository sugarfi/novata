const canvas = document.getElementById('c');
const { width, height } = canvas;
const c = canvas.getContext('2d');
const rate = document.getElementById('rate');
const p = document.getElementById('pause');

const SIZE = 300;
const OFF = 2;
const NEAR = 1.4;
let RATE = 1;
let pause = false;

let run = 0;

rate.onchange = rate.onmousemove = () => {
    RATE = parseFloat(rate.value);
};

p.onclick = () => {
    pause = !pause;
};

canvas.onclick = () => {
    let on = Math.random();
    run = on;

    const vertices =
        '0'.repeat(SIZE - 4).split('').map(() => [ 
            Math.random() * width, 
            Math.random() * height 
        ]);
    const tri = Delaunay.triangulate(vertices);

    c.clearRect(0, 0, width, height);
    c.strokeStyle = 'black';
    c.resetTransform();

    let i;
    let start = new Array(tri.length);
    let val = new Array(tri.length);

    c.restore();
    for (i = 0; i < tri.length; i += 3) {
        start[i] = [ (Math.random() - 0.5) / 10, (Math.random() - 0.5) / 10 ];
        val[i] = [ 0, 0 ];
        c.beginPath();
        c.moveTo(...vertices[tri[i]]);
        c.lineTo(...vertices[tri[i + 1]]);
        c.lineTo(...vertices[tri[i + 2]]);
        c.closePath();
        c.stroke();
    }

    const acc = RATE / 10000;
    let speed = 0.0;
    let y = 0;

    let scale = 1;

    const loop = () => {
        if (!pause) {
            if (run != on) return;
            c.clearRect(0, 0, width, height);
            for (i = 0; i < tri.length; i += 3) {
                const v1 = vertices[tri[i]];
                const v2 = vertices[tri[i + 1]];
                const v3 = vertices[tri[i + 2]];

                c.transform(
                    scale, 
                    v1[1] / height / 10 + val[i][0] / 100, 
                    val[i][0] / 100, 
                    scale, 
                    (1 - scale) * width / 2 + (v1[0] - height / 2) * val[i][0] / 15, 
                    ((1 - scale) * height / 2) + y
                );
                y += speed * RATE;
                c.rotate(Math.PI / 180 * val[i][0]);

                c.beginPath();
                c.moveTo(...v1);
                c.lineTo(...v2);
                c.lineTo(...v3);
                c.closePath();
                c.stroke();

                c.resetTransform();
                val[i][0] += start[i][0] * RATE;
                val[i][1] += start[i][1] * RATE;
            }

            scale -= RATE / 1000;
            speed += acc;
        }
        if (run == on) window.requestAnimationFrame(loop);
    };

    c.save();
    loop();
};
