const bgHero = document.querySelector('.bg-hero'),
	breakpoint = matchMedia('(min-width: 991px)'),
	form = document.querySelector('.form-group'),
	emailInput = document.querySelector('#input-email'),
	errorIcon = document.querySelector('.error-icon'),
	errorMessage = document.querySelector('.error-message')

//Event Listener
form.addEventListener('submit', (e) => {
	e.preventDefault()
	checkEmail(emailInput)
})
//Shpw error input
const showError = (input, message) => {
	const formControl = input
	formControl.className = 'input-email error'
	errorIcon.style.display = 'block'
	errorMessage.style.display = 'block'
	errorMessage.innerText = message
	errorMessage.className = 'error-message errorMessage'
	setTimeout(() => {
		errorIcon.style.display = 'none'
		errorMessage.style.display = 'none'
		formControl.className = 'input-email'
	}, 3000)
}

//Show success outline
const showSuccess = (input, message) => {
	const formControl = input
	formControl.className = 'input-email success'
	errorMessage.innerText = message
	errorMessage.className = 'error-message successMessage'
	errorMessage.style.display = 'block'
}

//Check Email
const checkEmail = (input) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(input.value.trim())) {
		showSuccess(input, 'Email Valid')
	} else {
		showError(input, 'Please provide a valid email')
	}
}
/* Funcion Resize */
const changeSize = (mql) => {
	if (mql.matches) {
		bgHero.removeAttribute('src', './img/hero-mobile.jpg')
		bgHero.setAttribute('src', './img/hero-desktop.jpg')
	} else {
		bgHero.removeAttribute('src', './img/hero-desktop.jpg')
		bgHero.setAttribute('src', './img/hero-mobile.jpg')
	}
}
breakpoint.addListener(changeSize)
changeSize(breakpoint)
