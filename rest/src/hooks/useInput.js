import { useState } from "react";

const useInput = (defaultValue = '', check, keypress = null) => {
	const [value, setValue] = useState(defaultValue);
	const [touched, setTouched] = useState(defaultValue ? true : false);
	const [isValid, setIsValid] = useState(defaultValue ? true : false);

	const onBlur = (e) => {
		setTouched(true);
	}

	const onKeyPress = (e) => {
		let charCode = (typeof e.which == "number") ? e.which : e.keyCode;
		if (!keypress(charCode)) e.preventDefault();
	}

	const onChange = (e) => {
		setTouched(true);
		setValue(e.target.value);
		let valid = check(e.target.value);
		setIsValid(valid);
	}

	// const reset = () => {
	// 	setValue("");
	// 	setTouched(false);
	// };

	return { value, isValid, touched, onBlur, onChange, ...(keypress !== null) && { onKeyPress } }
}

export default useInput;
