// step 1: Add event with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2: Get the withdraw ammount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    // step 7: clear the withdraw field: 
    withdrawField.value = ''
    
    if (isNaN(newWithdrawAmmount)) {
        alert('Please Enter a Valid Number');
        return
    }

    // step 3:
    const previousWithdrawTotalElements = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawTotalElements.innerText;
    const previousWithdrawtTotal = parseFloat(previousWithdrawTotalString);




    // step 5: Get the balance privious total: 
    const balanceTotalElements = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotalString)


    if (newWithdrawAmmount > currentBalanceTotal) {
        alert('Not enough money')
        return;
    }

    // step 4: calculate total withdraw ammount
    const currentWithdrawTotal = previousWithdrawtTotal + newWithdrawAmmount;
    previousWithdrawTotalElements.innerText = currentWithdrawTotal

    // step 6: calculate new balance total
    const newBalanceTotal = currentBalanceTotal - newWithdrawAmmount;
    balanceTotalElements.innerText = newBalanceTotal


})