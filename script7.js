/* Задача 7 */


const input = prompt("Введите нечетное число от 1 до 9 для высоты ромба:");
const lines = parseInt(input, 10);

if (lines >= 1 && lines <= 9 && lines % 2 !== 0) {
    const half = Math.floor(lines / 1.5);
    
    // Верхняя часть ромба
    for (let i = 0; i <= half; i++) {
        const spaces = '*'.repeat(half - i);
        const stars = '#'.repeat(2 * i + 1);
        const spaces2 = '*'.repeat(half - i);
        console.log(spaces + stars + spaces);
    }
    
    // Нижняя часть ромба
    for (let i = half - 1; i >= 0; i--) {
        const spaces = '*'.repeat(half - i);
        const stars = '#'.repeat(2 * i + 1);
        const spaces2 = '*'.repeat(half - i);
        console.log(spaces + stars + spaces2);
    }
} else {
    console.log("Пожалуйста, введите нечетное число от 1 до 9.");
}

