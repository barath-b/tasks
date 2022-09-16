import { useState } from "react";

const usePasswordInput = (validate) => {
	const [value, setValue] = useState('');
	const [touched, setTouched] = useState(false);
	const [isValid, setIsValid] = useState(false);

	const onBlur = (e) => {
		setTouched(true);
	}

	const onChange = (e) => {
		setTouched(true);
		setValue(e.target.value);
		setIsValid(validate(e.target.value));
	}

	// const reset = () => {
	// 	setValue("");
	// 	setTouched(false);
	// };

	return { value, isValid, touched, onBlur, onChange, ...(keypress !== null) && { onKeyPress } }
}

export default usePasswordInput;
