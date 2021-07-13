const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function(arg) { // e, eventArg
//     console.log('Listener called', arg);
// });

// arrow function
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
