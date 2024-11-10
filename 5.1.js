
//Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:

 //   • country — перший параметр, рядок, що містить країну доставки
 //• price— другий параметр, число, що містить загальну вартість товару
 //• deliveryFee— третій параметр, число, що містить вартість доставки товару

//Напиши  код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:

//• <country> — це країни доставки
 //   • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

let country = prompt('Введіть країну');
let price = Number(prompt('Вартість продукту'));
let deliveryFee = Number(prompt('Вартість доставки'));

if((price == Number.NaN) || (deliveryFee == Number.NaN))
    console.log('price or deliveryFee not a number');
else
    console.log(getShippingMessage(country, price, deliveryFee));

function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits.`;
}


