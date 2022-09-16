import { useId, useState } from "react";

const List = () => {
	const inputId = useId();
	const [inputValue, setInputValue] = useState('');
	const [listData, setListData] = useState([]);

	const onInputChangeHandler = (e) => {
		setInputValue(e.target.value);
	}

	const onAddHandler = () => {
		setInputValue('');
		setListData(prevListData => [...prevListData, inputValue]);
	}

	let list = 'No data available...';

	if (listData.length > 0) {
		list = listData.map((data, index) => {
			return <p key={'data' + index}>{data}</p>
		});
	}

	console.log(list);

	return (
		<section>
			<div className="form">
				<input id={inputId + 'Input'} type="text" onChange={onInputChangeHandler} value={inputValue} />
				<button id={inputId + 'Button'} onClick={onAddHandler}>Add to List</button>
			</div>
			<p></p>
			<div className="List">
				{list}
			</div>
		</section>
	);
}

export default List;
