// Станція з продажу ремонтних дроїдів.
//     Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
//
//     Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
//     quantity— кількість замовлених дроїдів
// pricePerDroid— ціна одного дроїда
// customerCredits— сума коштів на рахунку клієнта
// Доповни функцію таким чином:
//     Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
//     Додай перевірку, чи зможе клієнт оплатити замовлення:
//     якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок"Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.
let quantity = Number(prompt('Кількість дроїдів'));
let pricePerDroid = Number(prompt('Ціна'));
let customerCredits = Number(prompt('Кількість кредитів на рахунку'));

if((quantity == Number.NaN) || (pricePerDroid == Number.NaN || customerCredits == Number.NaN))
    console.log('quantity or pricePerDroid or customerCredits not a number');
else
    console.log(makeTransaction(quantity, pricePerDroid, customerCredits));

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid;
    if(totalPrice > customerCredits)
        return `Insufficient funds!`;

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

