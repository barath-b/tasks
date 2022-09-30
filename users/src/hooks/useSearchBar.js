import debounce from "lodash.debounce";
import { useMemo, useState } from "react";

const useSearchBar = (keypress, change = null) => {
	const [value, setValue] = useState('');


	const onKeyPress = (e) => {
		if (!keypress(e.key)) e.preventDefault();
	}

	const onChange = (e) => {
		setValue(e.target.value);
		change && (e.target.value.length > 2 || e.target.value === '') && setFilter(e.target.value);
	}

	const setFilter = useMemo(() => debounce(val => change(val), 500), [change]);

	return { value, onChange, onKeyPress }
}

export default useSearchBar;
