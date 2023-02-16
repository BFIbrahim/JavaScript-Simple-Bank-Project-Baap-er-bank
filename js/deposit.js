// step 1:  Add Event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('beta clicked')

    // Step 2: Get the deposit ammount from the deposit input field:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    
    // Step 3: Get the current deposit total: 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // Step 4: Add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmmount
    depositTotalElement.innerText = currentDepositTotal

    // step 5: Get balance current total
    const balanceTotalElements = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    // Step 6: Culculate the current balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElements.innerText = currentBalanceTotal


    // step 7: Clear the input field: 
    depositField.value = ''
    
})