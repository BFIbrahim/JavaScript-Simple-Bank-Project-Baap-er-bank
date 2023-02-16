// ================ Make a login Form for enter main bapp er bank account ============
// step 1: Add click Event hundller with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit btn click')

    // step 2: Get the email filed value
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // console.log(email);

    // Step 3: Get the password
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(password);

    // ===== Now We do the work easyly but somedays later we do that more professionally=======
    // step 4: 
    if(email === 'ibrahim36194@gmail.com' && password === 'bbp'){
        // console.log('welcome to baap er bank')

        window.location.href= 'bank.html'
    }else{
        alert('You are not valid user')
    }
})

// 

