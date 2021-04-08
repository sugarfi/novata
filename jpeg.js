const o = document.getElementById('o');
const ca = document.getElementById('c');
const c = ca.getContext('2d');
const ca2 = document.getElementById('c2');
const c2 = ca2.getContext('2d');
const ca3 = document.getElementById('c3');
const c3 = ca3.getContext('2d');
const ca4 = document.getElementById('c4');
const c4 = ca4.getContext('2d');
const im = new Image();
im.src = 'buddy.png';
im.onload = () => {
c.drawImage(im, 0, 0, ca.width, ca.height);

let alpha = 1/ 100;
    let ims = [];
    for (let i  =100; i >= 0; --i) {
    ims.push(new Image());
    ims[100 - i].onload=()=>{

        //c2.globalCompositeOperation = "screen";;
        c2.globalAlpha = 1/10;
        c3.globalCompositeOperation = "screen";
        c3.globalAlpha = 1/100;
        c4.globalCompositeOperation = "screen";
    c2.drawImage(ims[100 - i], i ,i);
    c3.drawImage(ims[100-i], 0,0);
    c4.drawImage(ims[100-i], Math.random()*ca.width,Math.random()*ca.width);
        let imageData = c3.getImageData(0,0,ca.width,ca.width);
          let data = imageData.data;
                  for (let n = 0; n < data.length; n += 4) {
                            if(data[n]+ data[n + 1] + data[n + 2]<10){ 
                                        data[n + 3] = 0; // alpha
                                       }
                          }
                  c3.putImageData(imageData, 0, 0);
        imageData = c2.getImageData(0,0,ca.width,ca.width);
           data = imageData.data;
                  for ( n = 0; n < data.length; n += 4) {
                            if(data[n]+ data[n + 1] + data[n + 2]<10){ 
                                        data[n + 3] = 0; // alpha
                                       }
                          }
                  c2.putImageData(imageData, 0, 0);
        imageData = c4.getImageData(0,0,ca.width,ca.width);
           data = imageData.data;
                  for ( n = 0; n < data.length; n += 4) {
                            if(data[n]+ data[n + 1] + data[n + 2]<10){ 
                                        data[n + 3] = 0; // alpha
                                       }
                          }
                  c4.putImageData(imageData, 0, 0);
}
    ims[100- i].src = ca.toDataURL('image/jpeg', (i/100));
}
}
