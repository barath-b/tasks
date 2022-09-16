import { useState } from "react";

const useInput = (check, keypress = null) => {
	const [value, setValue] = useState('');
	const [touched, setTouched] = useState(false);
	const [isValid, setIsValid] = useState(false);

	const onBlur = (e) => {
		setTouched(true);
	}

	const onKeyPress = (e) => {
		let charCode = (typeof e.which == "number") ? e.which : e.keyCode;
		if (!keypress(charCode)) e.preventDefault();
	}

	const onChange = (e, passwordCheck = null) => {
		setTouched(true);
		setValue(e.target.value);
		let valid = check(e.target.value);
		if (passwordCheck && valid) {
			valid = valid && e.target.value === passwordCheck
		}
		setIsValid(valid);
		// setIsValid(check(e.target.value) && passwordCheck ? e.target.value === passwordCheck : true);
	}

	// const reset = () => {
	// 	setValue("");
	// 	setTouched(false);
	// };

	return { value, isValid, touched, onBlur, onChange, ...(keypress !== null) && { onKeyPress } }
}

export default useInput;
