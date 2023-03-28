// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

const path = require('path');
const fs = require('fs');
// const fs = require('fs').promises;

// fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

//====== або===================================================================================

// const func = async () => {
//     try {
//         await fs.mkdir(path.join(__dirname, 'main'));
//         await fs.mkdir(path.join(__dirname, 'main', 'online'));
//         await fs.mkdir(path.join(__dirname, 'main', 'inPerson'));
//     } catch (e) {
//         console.log(e);
//     }
// }
// func();


// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з
// обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }), відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.


const onlineUsers = [
    {name: "Max", age: 26, city: "Lviv"},
    {name: "Vova", age: 32, city: "Odessa"},
    {name: "Alina", age: 42, city: "Lytck"},
    {name: "Vitya", age: 12, city: "Boruslav"},
    {name: "Tom", age: 28, city: "Boston"}
]
const inPersonUsers = [
    {name: "Valya", age: 21, city: "Odessa"},
    {name: "Vita", age: 22, city: "Lviv"},
    {name: "Andrii", age: 23, city: "Toronto"},
    {name: "Oksana", age: 24, city: "Lviv"},
    {name: "Taras", age: 25, city: "Kyiv"}
]

// for (const element of onlineUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'online', `${element.name}.txt`), `Name:${element.name}\nAge:${element.age}\nCity:${element.city}`,
//         err => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }
//
// for (const element of inPersonUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', `${element.name}.txt`), `Name:${element.name}\nAge:${element.age}\nCity:${element.city}`,
//         err => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }


// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)


