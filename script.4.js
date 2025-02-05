/* Задача 4 */

// let num = +prompt('Введите число от 1 до 9: ');
// let index = 1;
// let lines = '';

// for (; index <= num; index++) {
//     if (num <= 9) {
//         lines += '#';
//         console.log(lines);
//     };
// };




let num = +prompt('Введите число от 1 до 9: ');
let index = 1;
let lines = '';


while (index <= num) {
    if (num <= 9) {
        lines += '#';
        console.log(lines);
        index++;
    };
};