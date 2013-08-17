var _ = require("lodash");
var fps = require("./index.js")();

function initButtons() {
    document.querySelector("[data-role=pause]").addEventListener("click", function () {
        fps.pause();
    });
    document.querySelector("[data-role=resume]").addEventListener("click", function () {
        fps.resume();
    });
}

try {
    initButtons();
} catch (e) {}

fps.on("data", _.throttle(function (fps) {
    console.log(fps);
    try {
        document.querySelector("span").innerHTML = parseInt(fps);
    } catch (e) {}
}, 100));
