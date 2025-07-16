** start of script.js **
/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

*/
function checkCashRegister(price, cash, cid) {
  let change={};
  change["status"]="";change["change"]=[];
  const currencyValues = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  let tienthua=[];
  for (let i = 0; i<cid.length; i++){
    let soLuong=Math.round(cid[i][1]/currencyValues[i][1]);
    tienthua.push([currencyValues[i][0],currencyValues[i][1],soLuong,cid[i][1]]);
  }
  let ton = 0;
  for (let i = 0; i<tienthua.length; i++){
    ton += tienthua[i][3];
  }
  let tong = parseFloat(ton.toFixed(2));
  //let tong = Math.round(ton * 100) / 100;  
  //console.log(tienthua);
  //console.log(tong);
  let changeMoney = cash - price;
  if (tong === changeMoney){
    change["status"]="CLOSED";
    for (let i = 0;i<cid.length;i++){
        let sl = Math.floor((changeMoney/tienthua[i][1]));
        if(sl>tienthua[i][2]){sl=tienthua[i][2];}
        change["change"].push([tienthua[i][0],sl*tienthua[i][1]]);
        changeMoney -= sl*tienthua[i][1];
        changeMoney = parseFloat(changeMoney.toFixed(2));
    }
    //change["change"].reverse();
  }else{
    for (let i = cid.length-1;i>-1;i--){
    if (changeMoney >= tienthua[i][1]){
      let sl = Math.floor((changeMoney/tienthua[i][1]));
      if(sl>tienthua[i][2]){sl=tienthua[i][2];}
      change["change"].push([tienthua[i][0],sl*tienthua[i][1]]);
      changeMoney -= sl*tienthua[i][1];
      changeMoney = parseFloat(changeMoney.toFixed(2));
    }
  }
  if(changeMoney !== 0){
    change["status"]="INSUFFICIENT_FUNDS";
    change["change"]=[];
  }else{
    change["status"]="OPEN";
  }
}
  
  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


** end of script.js **

