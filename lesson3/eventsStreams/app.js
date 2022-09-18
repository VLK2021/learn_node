// const {EventEmitter} = require('events');
// const ee = new EventEmitter();
//
// ee.on('Log', (name) => {
//     console.log(`Log is working!!! ${name}!!!`)
// })
//
// ee.on('Test', () => {
//     console.log('Test working');
// })
// ee.emit('Log', 'Vova');
//
// console.log(ee.eventNames());
//===========================================================================================

// const fs = require('fs');
// const path = require('path');
//
// const readStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
//
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     // console.log(chunk.toString());
// })
//
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
// for (let i = 0; i < 1000; i++) {
//     writeStream.write('new some data\n', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }
// writeStream.end();
//=====================================================================

// const fs = require('fs');
// const path = require('path');
//
// const readStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
//
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// writeStream.end();
// });
//=================================================================

// readStream.pipe(writeStream);
//=================================================================


