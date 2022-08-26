// const {EventEmitter} = require('events');
//
// const ee = new EventEmitter;
//
// ee.on('Loc', (name) => {
//     console.log(`Loc is working ${name}`);
// })
// // ee.emit('Loc', 'Oleg');
// // ee.emit('Loc', 'Oleg');
// // ee.emit('Loc', 'Oleg');
// // ee.emit('Loc', 'Oleg');
// // ee.emit('Loc', 'Oleg');
//
// ee.once('test', () => {
//     console.log('once is working');
// })
// ee.emit('test');
// ee.emit('test');
// ee.emit('test');
// ee.emit('test');
// ee.emit('test');
// ee.emit('test');

// console.log(ee.eventNames());
//================================================================================================================

const fs = require('fs');
const path = require('path');

// const readStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
// readStream.on('data', (chunk) => {
//     console.log(chunk);
// })


// const writeStream = fs.createWriteStream(path.join(__dirname, 'test2.txt'));
// writeStream.write('payp', (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })


// for (let i=0; i < 5000; i++) {
//     writeStream.write('NEW SOME DATA\n', (err) => {
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
// }
// writeStream.end()


// const readStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
//
// readStream.pipe(writeStream);



