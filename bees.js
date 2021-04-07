const gif = new SuperGif({ gif: document.querySelector('.frank') ,progressbar_height: 600});
gif.load(() => {
        document.querySelector('.frank2').src = gif.get_canvas().toDataURL();
    setInterval(() => {
        document.querySelector('.frank2').src = gif.get_canvas().toDataURL();
    }, 1000);
});
