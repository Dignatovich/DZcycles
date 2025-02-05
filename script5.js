/* Задача 5 */

let input = +prompt('Введите число от 1 до 10: ');

if (input >= 1 && input <= 10) {
    for (; input >= 1; input--) {
        console.log(input ** 2);
    }
} else {
    console.log('error!');
}
