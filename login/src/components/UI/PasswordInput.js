import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const PasswordInput = (props) => {
	const { isValid, touched, errorMsg, onChange, passwordCheck, ...inputProps } = props;
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(prev => !prev);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onChangeHandler = (event) => {
		onChange(event, passwordCheck)
	};

	return (
		<FormControl sx={{ mt: 1, mb: 1, width: '100%' }} variant="outlined" error={touched && !isValid}>
			<InputLabel htmlFor={inputProps.id}>{inputProps.label}</InputLabel>
			<OutlinedInput
				type={showPassword ? 'text' : 'password'}
				onChange={onChangeHandler}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				{...inputProps}
			/>
			<FormHelperText id={inputProps.id + 'ErrorText'}>{touched && !isValid ? errorMsg : ' '}</FormHelperText>
		</FormControl>
	);
}

export default PasswordInput;
