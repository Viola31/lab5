// Створити одновимірний масив, кількість елементів якого задана користувачем.
// Обчислити суму елементів між максимальним та мінімальними значеннями масиву. Застосувати функції
// 2.Упорядкувати масив у порядку зростання.(метод Швидкого сортування)Надрукувати вхідний та вихідний масив. Застосувати функції
let arrayString = prompt('Напишіть масив');
let array = arrayString.split(' ').map(Number);
console.log(`Масив: ${array}`);
console.log(sum(array));
console.log(`Відсортований масив: ${quickSort(array)}`);
function sum(array) {
    let minElement = Math.min(...array);
    let maxElement = Math.max(...array);
    let sum = minElement + maxElement;

    console.log(`Мін елемент: ${minElement}`);
    console.log(`Макс елемент: ${maxElement}`);

    return `Сума мін та макс елементів: ${sum}`;
}
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot)
            left.push(array[i]);
        else
            right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}





