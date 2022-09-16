import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Validation from '../utils/validation';
import DatePick from "./UI/DatePick";
import CustomButton from "./UI/CustomButton";
import CustomSelect from "./UI/CustomSelect";
import useInput from "../hooks/useInput";
import useDatePick from "../hooks/useDatePick";
import { userActions } from "../app/userStore";

const UserForm = (props) => {
	const { action, buttonText } = props;
	const [validData, setValidData] = useState({ valid: false, msg: '' });
	const awaitingRequest = useRef(false);
	const { isLoading, error } = useSelector(state => ({ isLoading: state.isLoading, error: state.error }));

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const { state } = useLocation();

	useEffect(() => {
		if (awaitingRequest.current && !isLoading && !error) {
			navigate('/', { state: {} });
		}
	}, [error, isLoading, navigate]);

	let defaultValue = { fname: '', lname: '', address: '', designation: '', phone: '', dob: null, gender: '' };

	if (action === 'edit') {
		if (state.edit) {
			defaultValue = { ...(state.edit) };
			let date = defaultValue.dob.split('-');
			defaultValue.dob = new Date(date[2], date[1] - 1, date[0]);
		} else {
			navigate('/', { state: {} });
		}
	}

	const { value: enteredFname, ...fnameProps } = useInput(defaultValue.fname, Validation.validValueNotEmpty, Validation.validNameChar);
	const { value: enteredLname, ...lnameProps } = useInput(defaultValue.lname, Validation.validValueNotEmpty, Validation.validNameChar);
	const { value: enteredAddress, ...addressProps } = useInput(defaultValue.address, Validation.validAddress);
	const { value: enteredPhone, ...phoneProps } = useInput(defaultValue.phone, Validation.validPhone);
	const { value: enteredDesignation, ...designationProps } = useInput(defaultValue.designation, Validation.validValueNotEmpty);
	const { value: enteredGender, ...genderProps } = useInput(defaultValue.gender, Validation.validValueNotEmpty);
	const { value: enteredDob, ...dobProps } = useDatePick(defaultValue.dob);

	// Validate the form data on submit and create user
	const formSubmit = (e) => {
		// console.log(fnameProps.isValid, lnameProps.isValid, addressProps.isValid, phoneProps.isValid, dobProps.isValid, designationProps.isValid, genderProps.isValid)
		if (fnameProps.isValid && lnameProps.isValid && addressProps.isValid && phoneProps.isValid && dobProps.isValid && designationProps.isValid && genderProps.isValid) {
			setValidData({ valid: true, msg: 'User created' });
			const values = {
				fname: enteredFname,
				lname: enteredLname,
				address: enteredAddress,
				designation: enteredDesignation,
				phone: Number(enteredPhone),
				dob: enteredDob.toLocaleDateString('en-IN').replaceAll('/', '-'),
				gender: enteredGender
			};

			awaitingRequest.current = true;

			if (action === 'add') {
				dispatch(userActions.addUser(values));
				toast.info('Creating User...', { toastId: 'create' });
			} else if (action === 'edit') {
				values.id = defaultValue.id;
				dispatch(userActions.updateUser(values));
				toast.info('Updating User...', { toastId: 'update' });
			}
		} else {
			setValidData({ valid: false, msg: 'Complete all fields' });
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
				label='Designation'
				id='designation'
				name='Designation'
				type='text'
				value={enteredDesignation}
				errorMsg='Enter your Designation'
				{...designationProps}
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
			<CustomSelect
				label='Gender'
				id='gender'
				name='gender'
				value={enteredGender}
				items={[{ value: 'Male', text: 'Male' }, { value: 'Female', text: 'Female' }]}
				errorMsg='Select your Gender'
				sx={{ textAlign: 'left' }}
				{...genderProps}
			/>

			<CustomButton type='submit'
			// disabled={validData.valid}
			>{buttonText}</CustomButton>
		</Form>
	)
}

export default UserForm;
