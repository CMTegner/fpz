var _ = require("lodash");
var fps = require("./index.js");

fps().on("fps", _.throttle(function (fps) {
    console.log(fps);
    try {
        document.body.innerHTML = parseInt(fps);
    } catch (e) {}
}, 100));
