let totalPrice = 5000;
let accountBalance = 4900;
let isVip = false;

if (isVip === true) {
  console.log("У вас есть ВИП статус, вам предоставлена скидка в 10%");
  totalPrice = totalPrice * 0.9;
} else {
  console.log("У вас нет ВИП статуса, вам не предоставлена скидка в 10%");
}

if (accountBalance >= totalPrice) {
  console.log("Успешно! Покупка сделана");
} else {
  console.log("Недостаточно средств");
}