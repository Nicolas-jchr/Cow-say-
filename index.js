const userInfo = require('./information');
const cowsay = require('cowsay');

console.log (cowsay.say ({
    text: 'Hello mon nom est ' + (userInfo.name) + "from " + (userInfo.campus),
    e : "oO" , 
    T : "U " 
}));