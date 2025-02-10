function isCardNumberValid(number) {
    return true;
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(event.target.cardNumber.value)
	// clear any previous errors
	displayError('')
	// check credit card number
    const cardYear = document.querySelector('#card-year').value;
    const cardMonth = document.querySelector('#card-month').value;
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(event.target.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
    const expDate = new Date(`20${cardYear}`, cardMonth - 1);
    if (expDate < new Date()) {
        errorMsg += 'Card date is not a valid date\n';
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)