/* Задача 8 */

// let input = +prompt('Введите число от 1 до 10: ');

// let fibos = [];

// if (input >= 1 && input <= 10) {
//     for (let i = 0; i < input; i++) {
//         if (fibos[i - 2] && fibos[i - 1]) {
//             let add = fibos[i - 2] + fibos[i - 1];
//             fibos.push(add);
//         } else {
//             fibos.push(i);
//         }
//     }
// } else {
//     console.log('error!');
// }

// console.log(fibos);



let input = +prompt('Введите число от 1 до 10: ');

let number1 = 0;
let number2 = 1;

for (let i = 0; i < input; i++) {
    if (input >= 1 && input <= 10) {
        let sum = number1 + number2;
        number1 = number2;
        number2 = sum;
        console.log(sum);
    } else {
        console.log('error!');
    };
};

