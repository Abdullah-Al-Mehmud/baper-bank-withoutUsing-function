document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get the value of withdraw
  let withdrawField = document.getElementById("withdraw-filed");
  let newWithdrawAmountString = withdrawField.value;
  let newWithdrawAmount = parseFloat(newWithdrawAmountString);

  if (isNaN(newWithdrawAmount)) {
    alert("please provide valid number");
    return;
  }
  // set the value of withdraw in withdraw box
  let withdrawTotalElement = document.getElementById("withdraw-total");
  let previousWithdrawString = withdrawTotalElement.innerText;
  let previousWithdraw = parseFloat(previousWithdrawString);

  // clear the withdraw field
  withdrawField.value = "";

  if (newWithdrawAmount > previousWithdraw) {
    alert("hello");
    return;
  }

  // get total withdraw
  let currentTotalWithdraw = previousWithdraw + newWithdrawAmount;
  withdrawTotalElement.innerText = currentTotalWithdraw;

  // get the total balance and reduce amount from total withdraw
  let balanceTotalElement = document.getElementById("balance-total");
  let previousBalanceTotalString = balanceTotalElement.innerText;
  let previousBalanceTotal = parseFloat(previousBalanceTotalString);

  let currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentTotalBalance;
});
