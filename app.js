const http = require('http');
const fs = require('fs');
const Person = require('./person');
const URL = require('./url_demo');
var Logger = require('./logger');
const EventEmitter = require('events');

const person1 = new Person('Emmanuel', 30);
const logger = new Logger();
const emitter = new EventEmitter;
const hostname = '127.0.0.1';
const port = 3000;

// Register a Listener
emitter.on('messageLogged', function(arg){
    console.log('Listener Called', arg);
});

logger.on('message', data => console.log('Called Listener', data));

fs.readFile('index.html', (err, html) => {
    if(err){
        return err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html)
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log('Server stated on port '+port);
        // person1.greetings();
        // URL;
        // logger.log('I am a boy oooo.....');
        // logger.log('Hello World');
        // logger.log('Hi');

        // Raise a event
        emitter.emit('messageLogged');
        logger.log('message');

    })
});

