let totalPrice = 5000;
const accountBalance = 4000;
let isVip = false;
if (isVip === true)
    console.log("У вас есть ВИП статус, вам предоставлена скидка в 10%")
    totalPrice = totalPrice * 0.9;
if (accountBalance >= totalPrice)
    console.log("Успешно! Покупка сделана")
else 
    console.log("Недостаточно средств");