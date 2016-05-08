"use strict";
var os_1 = require('os');
process.stdin.setEncoding('utf8');
function getFormattedTime() {
    var now = new Date();
    var hours = ('0' + now.getHours()).substr(-2);
    var minutes = ('0' + now.getMinutes()).substr(-2);
    var seconds = ('0' + now.getSeconds()).substr(-2);
    var milliseconds = ('00' + now.getMilliseconds()).substr(-3);
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    var time = getFormattedTime();
    if (chunk !== null) {
        var lines = chunk.split(os_1.EOL);
        for (var i = 0; i < lines.length; i++) {
            process.stdout.write(time + " " + lines[i] + os_1.EOL);
        }
    }
});
process.stdin.on('end', function () {
    process.stdout.write(getFormattedTime() + " END " + os_1.EOL);
});
process.stdout.write(getFormattedTime() + " START " + os_1.EOL);
// usage >npm run-script build:watch:hash:dev | node time
//# sourceMappingURL=index.js.map