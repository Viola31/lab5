// Напиши функцію під назвою makeArray, яка приймає три параметри:firstArray(масив),secondArray(масив) і maxLength(число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
//     Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
//     В іншому випадку функція повинна повернути весь новий масив.
let firstArrayString = prompt('Напишіть перший масив');
let firstArray = firstArrayString.split(' ');
console.log(`Перший масив: ${firstArray}`);

let secondArrayString = prompt('Напишіть другий масив');
let secondArray = secondArrayString.split(' ');
console.log(`Другий масив: ${secondArray}`);

let maxLength = Number(prompt('Максимальна довжина масиву '));

if ((maxLength == Number.NaN))
    console.log('maxLength not a number');
else
    console.log(makeArray(firstArray, secondArray, maxLength));

function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);

    if(newArray.length > maxLength)
        newArray = newArray.slice(0, maxLength);

    return `Новий масив: ${newArray}`;
}


