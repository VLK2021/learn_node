// const {EventEmitter} = require('events');
//
// const ee = new EventEmitter();

// ee.on('Log', ()=>{
//     console.log('Log is working!!!');
// })
//
// ee.emit('Log');

// ee.on('Log', (name)=>{
//     console.log(`Log is working!!! ${name}`);
// })
//
// ee.emit('Log', 'Vova');

// ee.once('Test', ()=>{
//     console.log(`Once is working!!!`);
// })
// //
// ee.emit('Test');
// ee.emit('Test');
// ee.emit('Test');
// ee.emit('Test');
// ee.emit('Test');
// ee.emit('Test');

// console.log(ee.eventNames());

//=================================================================================================================
// const fs = require('fs');
// const path = require('path');

// const readStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
//
// readStream.on('data', (chunc)=>{
//     console.log(chunc);
//     // console.log(chunc.toString());
// })


// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));

// writeStream.write('new some data', err => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })

// for (let i = 0; i < 5000; i++) {
//     writeStream.write('new some data\n', err => {
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
// }
//
// writeStream.end();

// fs.appendFile(path.join(__dirname, 'test.txt'), 'Hello!', {flag: 'w'}, err => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//====================================================================================================
// const readStream = fs.createReadStream(path.join(__dirname, 'test2.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
// readStream.on('data', (chunc)=>{
//     writeStream.write(chunc, err => {
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
//     writeStream.end();
// })
//================================================================================================
// const readStream = fs.createReadStream(path.join(__dirname, 'test2.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
// readStream.pipe(writeStream);

//================================================================================================













































