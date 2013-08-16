var util = require("util");
var raf = require("raf");
var now = require("performance-now");
var EventEmitter = require("events").EventEmitter;

var msPerFrame = 1000 / 60; // 16.66666...

function FPS() {
    if (!(this instanceof FPS)) {
        return new FPS();
    }
    var self = this;
    var last = now();
    EventEmitter.call(self);
    raf().on("data", function () {
        var _now = now();
        var delta = _now - last;
        var fps = (msPerFrame / delta) * 60;
        self.emit("fps", fps);
        last = _now;
    });
}
// TODO: Pause

util.inherits(FPS, EventEmitter);

module.exports = FPS;
