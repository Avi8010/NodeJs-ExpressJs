const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('run', () => {
//     console.log("y so serious ?");
// });

// event.emit('run');

event.on('run', (sc, msg) => {
    console.log(sc, msg);
});

event.emit('run', 200, "ok");
