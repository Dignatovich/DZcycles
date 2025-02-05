/* Задача 6 */


let input = +prompt('Введите число от 1 до 10: ');




if (input >= 1 && input <= 10) {
    let factorial = 1;
    for (let i = 1; i <= input; i++) {
        factorial *= i;
    }
    console.log(input);
    console.log(factorial);
} else {
    console.log('error!');
};



// let input = +prompt('Введите число от 1 до 10: ');

// let factorial = 1;



// for (let i = 1; i <= input; i++) {
//     factorial *= i;
//     if (input >= 1 && input <= 10) {
//         console.log(factorial);
//     } else {
//         console.log('error!');
//     };
// };

