const canvas = document.getElementById('c');
const c = canvas.getContext('2d');

const canvas2 = document.getElementById('c2');
const c2 = canvas2.getContext('2d');

const file = document.getElementById('file');

const RADIUS = 0.5;
const SCALE = RADIUS * 6;

const circle = (c, x, y, xs, ys) => {
    c.beginPath();
    c.arc(SCALE * xs + x + RADIUS, SCALE * ys + y + RADIUS, RADIUS, 0, 2 * Math.PI);
    c.fill();
};

const matrix = (c, m, x, y, xs, ys) => {
    let y2;
    for (y2 = 0; y2 < 3; ++y2) {
        let x2;
        for (x2 = 0; x2 < 3; ++x2) {
            const bit = ((m & (0b111 << y2)) >> y2) & x2;
            if (bit != 0) {
                circle(c, x2 * RADIUS, y2 * RADIUS, xs, ys);
            }
        }
    }
};

file.onchange = () => {
    const reader = new FileReader();

    reader.onload = (e) => {
        const im = new Image();
        im.src = e.target.result;

        im.onload = () => {
            canvas2.width = im.width / SCALE;
            canvas2.height = im.height / SCALE;
            canvas2.style.width = `${canvas2.width}px`;
            canvas2.style.height = `${canvas2.height}px`;
            canvas.width = im.width;
            canvas.height = im.height;
            canvas.style.width = `${canvas.width}px`;
            canvas.style.height = `${canvas.height}px`;

            c2.drawImage(im, 0, 0, canvas2.width, canvas2.height);

            c.clearRect(0, 0, canvas.width, canvas.height);
            let y;
            for (y = 0; y < canvas2.height; ++y) {
                let x;
                for (x = 0; x < canvas2.width; ++x) {
                    const px = c2.getImageData(x, y, 1, 1).data[0];
                    c.fillStyle = 'black';
                    matrix(c, px / 4, 0, 0, x, y);
                }
            }
        }
    };

    reader.readAsDataURL(file.files[0]);
};
