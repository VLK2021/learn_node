// require('./test/helper');

//==============================================================================================================
// const {greeting} = require('./helper');
// greeting('Vova');

// console.log(__filename);
// console.log(__dirname);

// const {test} = require('./test/helper');
// test()
// console.log(process.cwd(), 'process.cwd()');
// console.log(__dirname, '__dirname');

// console.log(name);

// const path = require('path');
// const joinepath = path.join('test', 'test2', 'files', 'public', 'text.txt');
// console.log(joinepath);

// const normalizedPath = path.normalize('test///\\files///public//text.txt');
// console.log(normalizedPath);

// const resolvedPath = path.resolve('test///files///public///file.txt');
// console.log(resolvedPath);


// const os = require('os');
// console.log(os.cpus());
// console.log(os.cpus().length);

// console.log(os.arch());


const path = require('path');
const fs = require('fs');

// fs.writeFileSync(path.join(__dirname, 'files', 'file.txt'), 'some data');

// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'some data 2', (err)=>{
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readFile(path.join(__dirname, 'files', 'file2.txt'), 'utf8', (err, data)=>{
//     if(err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
//     // console.log(data.toString());
// })


// fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNew data', (err)=>{
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// })

// for(let i = 0; i< 1000; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNew data', (err)=>{
//         if(err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }

// for(let i = 0; i< 1000; i++) {
//     fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nTest', {flag: 'a'}, (err)=>{
//         if(err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }


// fs.truncate(path.join(__dirname, 'files', 'file2.txt'), (err) =>{
//     if(err) {
//             console.log(err);
//             throw err;
//         }
// })
//
//
// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//     if(err) {
//             console.log(err);
//             throw err;
//         }
// })
//
//


// fs.mkdir(path.join(__dirname, 'public'), err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


// fs.mkdir(path.join(__dirname, 'public', 'files', 'test', 'test2'), {recursive: true}, err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


// fs.rmdir(path.join(__dirname, 'fffff'), err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readdir(path.join(__dirname, 'test1'), (err, data) => {
//     console.log(data);
// })


fs.rename(path.join(__dirname, 'test1', 'test2.txt'),
    path.join(__dirname, 'public','files', 'test', 'test2', 'test3.txt'), err => {
    if (err) {
        console.log(err);
        throw err;
    }
})




