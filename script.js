let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

document.getElementById("purchase-btn").addEventListener("click", function() {
  let cash = parseFloat(document.getElementById("cash").value);
  let changeDue = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
    return;
  }

  if (parseFloat(totalCid) === parseFloat(changeDue.toFixed(2))) {
    document.getElementById("change-due").innerText = "Status: CLOSED " + cid.map(curr => curr[1] > 0 ? `${curr[0]}: $${curr[1].toFixed(2)}` : '').filter(Boolean).join(" ");
    return;
  }

  let changeArray = [];
  let changeAvailable = true;
  let currencyUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  for (let [unit, value] of currencyUnits) {
    let amountInDrawer = cid.find(item => item[0] === unit)[1];
    if (changeDue >= value && amountInDrawer > 0) {
      let amountToReturn = Math.min(Math.floor(changeDue / value) * value, amountInDrawer);
      changeDue -= amountToReturn;
      changeDue = Math.round(changeDue * 100) / 100;
      if (amountToReturn > 0) {
        changeArray.push([unit, amountToReturn]);
      }
    }
  }

  if (changeDue > 0) {
    changeAvailable = false;
  }

  if (changeAvailable) {
    document.getElementById("change-due").innerText = "Status: OPEN " + changeArray.map(curr => `${curr[0]}: $${curr[1].toFixed(2)}`).join(" ");
  } else {
    document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
  }
});
