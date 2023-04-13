// var url = 'http://mylogger.io/log';

// function log(message) {
//     // Send an HTTP request
//     console.log(message);
// }

// module.exports.log = log;

const EventEmitter = require('events');
const uuid = require('uuid');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(msg){
        // Send an HTTP request
        console.log(msg);
         // Call event
        this.emit('message', {id: uuid.v4(), msg});
        // this.emit('messageLogged', {id: 1, url: 'http://'});
    }   
}

module.exports = Logger;