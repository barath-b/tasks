const validName = (name) => {
	return name.trim() !== '';
}

const validNameChar = (char) => {
	// return /[a-z]/i.test(char)
	return (char >= 65 && char <= 90) || (char >= 97 && char <= 122)
}

const validAddress = (address) => {
	return /^[#.0-9a-zA-Z\s,-]{10,}$/.test(address)
}

const validPhone = (phone) => {
	return /^\d{10}$/.test(phone)
}

const validEmail = (email) => {
	return /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(email)
}

const validPassword = (password) => {
	// console.log({ password, valid: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) })
	return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
}

const validPasswordLogin = (password) => {
	// console.log({ password, valid: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) })
	return /^[0-9a-zA-Z !@\#\$%\^&\*\(\)\-\=\_\+]{8,}$/.test(password)
}

const Validation = {
	validName,
	validNameChar,
	validAddress,
	validPhone,
	validEmail,
	validPassword,
	validPasswordLogin
}

export default Validation;