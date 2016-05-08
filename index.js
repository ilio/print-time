process.stdin.setEncoding('utf8');
process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    var now = new Date();
    var hours = ('0' + now.getHours()).substr(-2);
    var minutes = ('0' + now.getMinutes()).substr(-2);
    var seconds = ('0' + now.getSeconds()).substr(-2);
    var milliseconds = ('00' + now.getMilliseconds()).substr(-3);
    if (chunk !== null) {
        var lines = chunk.split(/[\r\n]+/);
        for (var i = 0; i < lines.length; i++) {
            process.stdout.write(hours + ':' + minutes + ':' + seconds + '.' + milliseconds + ' | ' + lines[i] + '\r\n');
        }
    }
});
process.stdin.on('end', function () {
    process.stdout.write('end');
});
process.stdout.write('start');
// usage >npm run-script build:watch:hash:dev | node time
//# sourceMappingURL=index.js.map