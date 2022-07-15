// const path = require('path');
// const os = require('os');

// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log(os.arch());
// console.log(os.release());


// const joinedPath = path.join('test', 'test2', 'files', 'public');
// console.log(joinedPath)

// const normalizePath = path.normalize('test//files/\/public////text.txt');
// console.log(normalizePath, 'normalizePath');
//
// const resolvePath = path.resolve('test//files/\/public////files.txt')
// console.log(resolvePath, 'resolvePath');


const path = require('path');
const  fs = require('fs');

// fs.writeFileSync(path.join(__dirname, 'www', 'file.txt'), 'some data');
// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'some data2', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'files', 'file2.txt'), 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// })



// for (let i = 0; i < 1000; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nTest', {flag: 'a'}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// }

// fs.truncate(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

fs.mkdir(path.join(__dirname, 'public', 'files', 'test', 'test2'), {recursive: true},(err) => {
    if (err) {
        console.log(err);
    }
})