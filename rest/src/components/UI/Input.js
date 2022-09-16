import { TextField } from "@mui/material";

const Input = (props) => {
	const { isValid, touched, errorMsg, ...inputProps } = props;

	return (
		<TextField
			error={touched && !isValid}
			variant={inputProps.variant || "outlined"}
			helperText={touched && !isValid ? errorMsg : ' '}
			fullWidth={inputProps.width || true}
			{...inputProps}
		/>
	)
}

export default Input;