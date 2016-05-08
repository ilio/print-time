import {EOL} from 'os';

process.stdin.setEncoding('utf8');

function getFormattedTime() {
    var now = new Date();
    var hours = ('0' + now.getHours()).substr(-2);
    var minutes = ('0' + now.getMinutes()).substr(-2);
    var seconds = ('0' + now.getSeconds()).substr(-2);
    var milliseconds = ('00' + now.getMilliseconds()).substr(-3);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

process.stdin.on('readable', () => {
    var chunk = process.stdin.read() as string;

    var time = getFormattedTime();
    
    if (chunk !== null) {
        var lines = chunk.split(EOL);
        for (var i = 0; i < lines.length; i++) {
            process.stdout.write(`${time} ${lines[i]}${EOL}`);
        }
    }
});

process.stdin.on('end', function () {
    process.stdout.write(`${getFormattedTime()} END ${EOL}`);
});

process.stdout.write(`${getFormattedTime()} START ${EOL}`);

// usage >npm run-script build:watch:hash:dev | node time
