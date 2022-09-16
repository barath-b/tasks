import { useState } from "react";

const useDatePick = (defaultValue, validate) => {
	const [value, setValue] = useState(defaultValue);
	const [touched, setTouched] = useState(false);
	const [error, setError] = useState(false);

	const onBlur = () => {
		setTouched(true);
	}

	const onError = (err) => {
		// console.log({ err })
		setError(!!err);
	}

	const onChange = (newDate) => {
		if (newDate === null) {
			setError(true)
		}
		setTouched(true);
		setValue(newDate);
		// console.log(error, value)
	}

	// const reset = () => {
	// 	setValue("");
	// 	setTouched(false);
	// };

	return { value, isValid: !error, touched, error, onBlur, onChange, onError }
}

export default useDatePick;
