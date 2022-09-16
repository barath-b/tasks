import Form from "./UI/Form";
import Input from "./UI/Input";
import Validation from '../utils/validation';
import useInput from "../hooks/useInput";
import useDatePick from "../hooks/useDatePick";
import DatePick from "./UI/DatePick";
import CustomButton from "./UI/CustomButton";
import PasswordInput from "./UI/PasswordInput";
import { useContext, useState } from "react";
import { toast } from "material-react-toastify";
import AuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
	const authCtx = useContext(AuthContext);
	const [validSignUp, setValidSignUp] = useState({ valid: false, msg: '' });
	const navigate = useNavigate();

	const { value: enteredFname, ...fnameProps } = useInput(Validation.validName, Validation.validNameChar);
	const { value: enteredLname, ...lnameProps } = useInput(Validation.validName, Validation.validNameChar);
	const { value: enteredUsername, ...usernameProps } = useInput(Validation.validName, Validation.validNameChar);
	const { value: enteredAddress, ...addressProps } = useInput(Validation.validAddress);
	const { value: enteredPhone, ...phoneProps } = useInput(Validation.validPhone);
	const { value: enteredEmail, ...emailProps } = useInput(Validation.validEmail);
	const { value: enteredDob, ...dobProps } = useDatePick();
	const { value: enteredPassword, ...passwordProps } = useInput(Validation.validPassword);
	const { value: enteredConPassword, ...conPasswordProps } = useInput(Validation.validPassword);


	// const values = {enteredFname, enteredLname, enteredAddress, enteredPassword, enteredEmail, enteredDob, enteredPassword, enteredConPassword};

	// Validate the form data on submit and create user
	const formSubmit = (e) => {

		// console.log(fnameProps.isValid, lnameProps.isValid, usernameProps.isValid, addressProps.isValid, phoneProps.isValid, emailProps.isValid, dobProps.isValid, passwordProps.isValid, conPasswordProps.isValid)
		if (fnameProps.isValid && lnameProps.isValid && usernameProps.isValid && addressProps.isValid && phoneProps.isValid && emailProps.isValid && dobProps.isValid && passwordProps.isValid && conPasswordProps.isValid) {
			const values = {
				fname: enteredFname,
				lname: enteredLname,
				username: enteredUsername,
				address: enteredAddress,
				phone: enteredPhone,
				email: enteredEmail,
				dob: enteredDob,
				password: enteredPassword,
				conPassword: enteredConPassword
			};
			authCtx.createUser(enteredUsername, values);
			setValidSignUp({ valid: true, msg: 'User created' });
			toast.success('User created');
			navigate('/login')
		} else {
			// console.log('Not completed');
			setValidSignUp({ valid: false, msg: 'Complete all fields' });
			toast.error('Complete all fields');
		}
	}

	return (
		<Form onSubmit={formSubmit}>
			<Input
				label='First Name'
				id='fname'
				name='fname'
				type='text'
				value={enteredFname}
				errorMsg='Enter your First Name (Alphabets Only)'
				{...fnameProps}
			/>
			<Input
				label='Last Name'
				id='lname'
				name='lname'
				type='text'
				value={enteredLname}
				errorMsg='Enter your last Name (Alphabets Only)'
				{...lnameProps}
			/>
			<Input
				label='Address'
				id='address'
				name='address'
				type='text'
				value={enteredAddress}
				errorMsg='Enter your address'
				{...addressProps}
			/>
			<Input
				label='Phone'
				id='phone'
				name='phone'
				type='number'
				value={enteredPhone}
				errorMsg='Enter valid 10 digit phone number'
				{...phoneProps}
			/>
			<DatePick
				label='Date of Birth'
				id='dob'
				name='dob'
				value={enteredDob}
				closeOnSelect
				{...dobProps}
			/>
			<Input
				label='Email'
				id='email'
				name='email'
				type='text'
				value={enteredEmail}
				errorMsg='Enter valid Email address'
				{...emailProps}
			/>
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
				errorMsg='Enter valid Password (Should contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 special character)'
				{...passwordProps}
			/>
			<PasswordInput
				label='Confirm Password'
				id='confirmPassword'
				name='confirmPassword'
				value={enteredConPassword}
				errorMsg='Does not match the password'
				passwordCheck={enteredPassword}
				{...conPasswordProps}
			/>

			{/* {validSignUp.valid && <Typography variant='subtitle1' component='p' sx={{ color: '#2e7d32' }} gutterBottom>{validSignUp.msg}</Typography>}
			{!validSignUp.valid && <Typography variant='subtitle1' component='p' sx={{ color: '#d32f2f' }} gutterBottom>{validSignUp.msg}</Typography>} */}

			<CustomButton type='submit' disabled={validSignUp.valid}>Sign Up</CustomButton>
		</Form>
	)
}

export default SignUpForm;
