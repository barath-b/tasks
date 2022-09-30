const validSearchChar = (char) => {
	return !/[ `!@#$%^&*()_+\-=[]{};':"\\|,.<>\/?~]/.test(char);
}


const Validation = {
	validSearchChar,
}

export default Validation;