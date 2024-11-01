document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount>previousBalanceTotal){
        alert('Insuficient Balance');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    

    const currentBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})