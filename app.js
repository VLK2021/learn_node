const fs = require('fs');
const path = require("path");

const onlineUsers = [
    {name: "Vova", age: 25, city: "Lviv"},
    {name: "Vitya", age: 35, city: "Kyiv"},
]

const inPersonsUsers = [
    {name: "Valya", age: 29, city: "Lviv"},
    {name: "Vita", age: 20, city: "Kyiv"},
]

// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.writeFileSync(path.join(__dirname, 'main', 'inPerson', 'InPerson.txt'), `NAME: ${inPersonsUsers[0].name}`, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.writeFileSync(path.join(__dirname, 'main', 'online', 'online.txt'), '', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// for (const element of onlineUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//         `\nName:${element.name}  age:${element.age}  city:${element.city}`, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         })
// }

// for (const element of inPersonsUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonsUsers.txt'),
//         `\nName:${element.name}  age:${element.age}  city:${element.city}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }