// 03:40:40
// MODULES - another file with functions or variables
// OS - operation system
// PATH - path to another file
// FS - file system sync or async
// Async function with promises
// EventEmitter - .on listening  .emit emiting, have to be last

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', name => {
  console.log('data recived ' + name);
});
customEmitter.on('response', () => {
  console.log('some');
});

customEmitter.emit('response', 'asd');
