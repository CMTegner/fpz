var browserify = require("browserify");
var fs = require("fs");

var modules = browserify("./test.js");

var output = fs.createWriteStream("bundle.js", { encoding: "UTF-8" });
modules.bundle().pipe(output);
