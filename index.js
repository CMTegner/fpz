var raf = require("raf");
var now = require("performance-now");

var MS_PER_FRAME = 1000 / 60; // 16.66666...

module.exports = function fpz(onTick) {
    var id;
    var last;

    function tick() {
        id = raf(tick);
        var _now = now();
        if (last) {
            var delta = _now - last;
            var fps = Math.round((MS_PER_FRAME / delta) * 60);
            onTick(fps);
        }
        last = _now;
    };

    function cancel() {
      raf.cancel(id);
    };

    tick();
    return cancel;
}
