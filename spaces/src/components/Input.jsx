const Input = ({ name, register, validation, className, inputProps }) => {
	return (
		<div className={`inputCont${className ? ` ${className}` : ''}`}>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<input id={name} {...(register && register(name, validation))} {...inputProps} />
		</div>
	);
};

export default Input;
