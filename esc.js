/*
document.addEventListener('contextmenu', e => {
    e.preventDefault();
});
document.addEventListener('keydown', e => {
    e.preventDefault();
});
document.addEventListener('keyup', e => {
    e.preventDefault();
});
document.addEventListener('keypress', e => {
    e.preventDefault();
});
*/

window.onbeforeunload = () => { return false; }
window.onclose = () => { return false; }

function openFullScreen(elem) {
      if (elem.requestFullscreen) {
              elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                    elem.webkitRequestFullscreen();
                  } else if (elem.msRequestFullscreen) { /* IE11 */
                          elem.msRequestFullscreen();
                        }
}

document.onmousedown = document.onmouseup = () => {
openFullScreen(document.querySelector('h1'));
}

const a = () => {
    document.body.appendChild(document.createElement('hr'));
    window.requestAnimationFrame(a);
    window.requestAnimationFrame(a);
    window.requestAnimationFrame(a);
};

setTimeout(a, 5000);

