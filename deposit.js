// added eventlistener to deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // called deposit field and got the value of deposit and stored into depositAmount
  let depositField = document.getElementById("deposit-field");
  let newDepositAmountString = depositField.value;
  let newDepositAmount = parseFloat(newDepositAmountString);

  // called the deposit total in js and added the total deposit amount on it
  let depositTotalElement = document.getElementById("deposit-total");
  let previousTotalDepositString = depositTotalElement.innerText;
  let previousTotalDeposit = parseFloat(previousTotalDepositString);
  // get total deposit
  let totalDeposit = previousTotalDeposit + newDepositAmount;
  depositTotalElement.innerText = totalDeposit;

  // get balance current total
  let balanceTotalElement = document.getElementById("balance-total");
  let previousBalanceTotalString = balanceTotalElement.innerText;
  let previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // calculate current total balance
  let currentTotalBalance = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentTotalBalance;

  // clear the deposit field
  depositField.value = "";
});
