var util = require("util");
var raf = require("raf");
var now = require("performance-now");
var EventEmitter = require("events").EventEmitter;

var MS_PER_FRAME = 1000 / 60; // 16.66666...

function FPS() {
    if (!(this instanceof FPS)) {
        return new FPS();
    }
    var self = this;
    self.last = now();
    // TODO: lodash modularize => _.bind
    self.raf = raf().on("data", function () {
        self.tick();
    });
    EventEmitter.call(self);
}

util.inherits(FPS, EventEmitter);

FPS.prototype.tick = function () {
    var _now = now();
    var delta = _now - this.last;
    var fps = (MS_PER_FRAME / delta) * 60;
    this.emit("data", fps);
    this.last = _now;
};

FPS.prototype.pause = function () {
    this.raf.pause();
};

FPS.prototype.resume = function () {
    this.last = now();
    this.raf.resume();
};

module.exports = FPS;
