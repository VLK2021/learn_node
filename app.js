// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson

const fs = require('fs').promises;
// const fs = require('fs');
const path = require("path");

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



// const foo = async () => {
//     try {
//         await fs.mkdir(path.join(__dirname, 'mainNew'));
//         await fs.mkdir(path.join(__dirname, 'mainNew', 'onlineNew'));
//         await fs.mkdir(path.join(__dirname, 'mainNew', 'inPersonNew'));
//     } catch (e) {
//         console.log(e);
//     }
// }
// foo();


// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами
// user ({. name: "Andrii", age: 22, city: "Lviv" }), відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

const onlineUsers = [
    {name: "Vova", age: 25, city: "Lviv"},
    {name: "Vitya", age: 35, city: "Kyiv"},
    { name: "Maksym", age: 22, city: "Kyiv" },
    { name: "Alina", age: 22, city: "Lviv" },
    { name: "Olena", age: 22, city: "Odessa" },
    { name: "Alex", age: 22, city: "Lviv" },
    { name: "Tamara", age: 22, city: "Kyiv" }
]

const inPersonsUsers = [
    {name: "Valya", age: 29, city: "Lviv"},
    {name: "Vita", age: 20, city: "Kyiv"},
    { name: "Dina", age: 22, city: "Lviv" },
    { name: "Olya", age: 22, city: "Lviv" },
    { name: "Andrii", age: 22, city: "Kyiv" },
    { name: "Oksana", age: 22, city: "Odessa" },
    { name: "Panas", age: 22, city: "Odessa" }
]
//===========================================================
// for (const element of onlineUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//         `\nName:${element.name}  age:${element.age}  city:${element.city}`, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         })
// }
//
// for (const element of inPersonsUsers) {
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonsUsers.txt'),
//         `\nName:${element.name}  age:${element.age}  city:${element.city}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }
//======================================================
// const func = async (arr, folder) => {
//     await Promise.all(arr.map(async user => {
//             await fs.writeFile(path.join(__dirname, 'mainNew', folder, `${user.name}.txt`), `${user.name}\n${user.age}\n${user.city}\n`)
//         })
//     );
// }
// func(onlineUsers, 'onlineNew');
// func(inPersonsUsers, 'inPersonNew');

//==========================================================
// fs.truncate(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), (err) => {
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.truncate(path.join(__dirname, 'main', 'inPerson', 'inPersonsUsers.txt'), (err) => {
//     if(err) {
//         console.log(err);
//         throw err;
//     }
// })


// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

//=====================================================
// fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonsUsers.txt'),
//     path.join(__dirname, 'main', 'online', 'inPersonsUsers.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     })

// fs.rename(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
//     path.join(__dirname, 'main', 'inPerson', 'onlineUsers.txt'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     })

// fs.readdir(path.join(__dirname, 'main', 'inPerson'), (err,data) => {
//     console.log(data);
// })


//=======================================================
const foo = async (moveFrom, moveTo) => {
    const pathToDir = path.join(__dirname, 'mainNew', moveFrom);
    const arrFileNames = await fs.readdir(pathToDir);

    arrFileNames.map(fileName => {
        if (!fileName.includes('new_')) {
            fs.rename(path.join(pathToDir, fileName), path.join(__dirname, 'mainNew', moveTo, `new_${fileName}`));
        }
    });
}
foo('inPersonNew', 'onlineNew');
foo('onlineNew', 'inPersonNew');


