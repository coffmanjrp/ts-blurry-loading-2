"use strict";
var loadText = document.querySelector('.loading-text');
var bg = document.querySelector('.bg');
var load = 0;
var int = setInterval(loading, 30);
function loading() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = "".concat(load, "%");
    loadText.style.opacity = "".concat(scale(load, 0, 100, 1, 0));
    bg.style.filter = "blur(".concat(scale(load, 0, 100, 30, 0), "px)");
}
var scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
