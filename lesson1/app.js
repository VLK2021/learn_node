// const {greeting} = require('./helper');
// greeting('Vova');
//=================================================================================================
// console.log(__filename);
// console.log(__dirname);

//===================================================================================================
// const {test} = require('./helper');
//
// test();
// console.log(process.cwd(), 'process')
// console.log(__dirname, 'app dirname')
//==========================================================================================

// require('./helper');
// console.log(name);
//================================================================================================

// const path = require('path');

// const joinedPath = path.join('test', 'test2', 'files', 'public', 'text.txt');
// console.log(joinedPath);

// let normalizePath = path.normalize('test///files//\\public//text.txt');
// console.log(normalizePath);

// let resolvePath = path.resolve('test///files\\/public/\//text.txt');
// console.log(resolvePath);
//=================================================================================================
//  const os = require('os');

// console.log(os.cpus());
// console.log(os.cpus().length);

// console.log(os.arch());
//==========================================================================================

const fs = require('fs');
const path = require("path");

// fs.writeFileSync(path.join(__dirname, 'files', 'file.txt'), 'SOME DATA');

// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'SOME DATA', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'files', 'file2.txt'), (err, data) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     console.log(data.toString());
// })
// або можнаотак написати
// fs.readFile(path.join(__dirname, 'files', 'file2.txt'), 'utf8', (err, data) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     console.log(data.toString());
// })
//==============================================================================================
// for (let i = 0; i < 100; i++) {
// fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNEW DATA', (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
// }

// for (let i = 0; i < 100; i++) {
// fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNEW DATA', {flag: 'w'}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
// }
//================================================================================
//видаляє усе з папки file2
// fs.truncate(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//======================================================
//видаляє файл file2.txt
// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//================================
// fs.mkdir(path.join(__dirname, 'public2', 'files2', 'test2'), {recursive: true}, (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//============================================================================
//  fs.readdir(path.join(__dirname, 'test'), (err, data) => {
//      console.log(data);
//  })
//====================================================================================

// fs.rename(path.join(__dirname, 'test', 'test.txt'), path.join(__dirname, 'test', 'test2.txt'), (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// })
//===========================================================================================

fs.rename(path.join(__dirname, 'test', 'test3.txt'),
    path.join(__dirname, 'public2', 'files2', 'test3.txt'), (err) => {
        if (err) {
            console.log(err);
        }
    })





