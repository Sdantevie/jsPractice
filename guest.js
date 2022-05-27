const prompt = require('prompt');

const guestList = [ 'peace', 'emmanuel', 'steven' ];
prompt.start()

prompt.get(['guest'], function(err, result) {
    if(guestList.includes(result.guest)){
        console.log('Welcome');
    } else {
        console.log('Commot')
    }
  });