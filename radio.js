document.getElementById('a').onclick=()=>{
document.querySelectorAll('audio').forEach(o => {
    o.volume = 0.1;
    o.loop=  true;
    o.play();
});
}
