const Form = (props) => {
	const formSubmitHandler = (e) => {
		e.preventDefault();
		props.onSubmit(e)
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{props.children}
		</form>
	)
}

export default Form;