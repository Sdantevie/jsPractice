const prompt = require('prompt');

prompt.start()

prompt.get(['yourName', 'loverName'], function (err, result) {
    var loveVariable = Math.random() * 100
    loveVariable = Math.floor(n) + 1

    if (loveVariable > 100) {
        console.log('your love score is ' + loveVariable + 'love is strong');
    } else {
        console.log('no love');
    }
})