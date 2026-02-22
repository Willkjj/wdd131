const theForm = document.querySelector("#creditCardInfo")


function displayMsg(msg) {
    document.querySelector('.output').textContent = msg
}

function isCardNumberValid(number) {
	return number === '1234123412341234'
}

function submitHandler(event) {
	event.preventDefault();
    let errorMsg = '';
	displayMsg('');

    let cardNumber = document.querySelector('#cardNumbers');
    const cardNum = cardNumber.value.trim();

    
    if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
    }
    
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }


    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayMsg(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.getElementById('creditCardInfo');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';
}
document.querySelector('#creditCardInfo').addEventListener('submit', submitHandler)
          