import { useContext, useState } from "react";
import useInput from "../hooks/useInput";
import Validation from "../utils/validation";
import CustomButton from "./UI/CustomButton";
import Form from "./UI/Form";
import Input from "./UI/Input";
import PasswordInput from "./UI/PasswordInput";
import { toast } from "material-react-toastify";
import AuthContext from "../context/authContext";

const LogInForm = () => {
	const authCtx = useContext(AuthContext);

	const { value: enteredUsername, ...usernameProps } = useInput(Validation.validName, Validation.validNameChar);
	const { value: enteredPassword, ...passwordProps } = useInput(Validation.validPasswordLogin);
	const [validLogIn, setValidLogIn] = useState({ valid: false, msg: '' });

	// Validate the form data on submit and log the user in
	const formSubmit = (e) => {
		// console.log(usernameProps.isValid, passwordProps.isValid)
		if (usernameProps.isValid && passwordProps.isValid) {
			const result = authCtx.checkUserLogIn({
				username: enteredUsername,
				password: enteredPassword
			});

			if (!result.valid) {
				toast.error(result.msg);
			} else {
				toast.success(result.msg);
			}
			setValidLogIn(result);
			// navigate('/')
		} else {
			setValidLogIn({ valid: false, msg: 'Enter User Name and Password' });
			toast.error('Enter User Name and Password');
		}
	}

	return (
		<Form onSubmit={formSubmit}>
			<Input
				label='User Name'
				id='username'
				name='username'
				type='text'
				value={enteredUsername}
				errorMsg='Enter your First Name (Alphabets Only)'
				{...usernameProps}
			/>
			<PasswordInput
				label='Password'
				id='password'
				name='password'
				value={enteredPassword}
				errorMsg='Enter your Password (Should contain at least 8 characters)'
				{...passwordProps}
			/>

			{/* {validLogIn.valid && <Typography variant='subtitle1' component='p' sx={{ color: '#2e7d32' }} gutterBottom>{validLogIn.msg}</Typography>}
			{!validLogIn.valid && <Typography variant='subtitle1' component='p' sx={{ color: '#d32f2f' }} gutterBottom>{validLogIn.msg}</Typography>} */}

			<CustomButton type='submit' disabled={validLogIn.valid}>Log In </CustomButton>
		</Form>
	);
}

export default LogInForm;
