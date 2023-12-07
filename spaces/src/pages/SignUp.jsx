import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import './New.scss';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className='new'>
			<h4>Let&apos;s Create an Admin account</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name='email'
					validation={{ required: true, pattern: /^\S+@\S+$/i }}
					inputProps={{ placeholder: 'Email' }}
					label='Email'
				/>
				<Input
					register={register}
					name='password'
					validation={{ required: true, minLength: 8 }}
					inputProps={{ placeholder: 'Password' }}
					label='Password'
				/>
				<p className='label'>{!errors?.email?.type && '\u00A0'}</p>
				<p className='label'>{errors?.email?.type === 'required' && 'Enter your email address'}</p>
				<p className='label'>{errors?.email?.type === 'pattern' && 'Enter valid email address'}</p>
				<p className='label'>{!errors?.password?.type && '\u00A0'}</p>
				<p className='label'>{errors?.password?.type === 'required' && 'Enter your password'}</p>
				<p className='label'>{errors?.password?.type === 'minLength' && 'Enter valid password with min 8 characters'}</p>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default SignUp;
