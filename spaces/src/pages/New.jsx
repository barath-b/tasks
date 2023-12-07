import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import './New.scss';

const New = () => {
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
			<h4>
				Create new <i>Space</i>
			</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					register={register}
					name='name'
					validation={{ required: true, minLength: 3, maxLength: 20 }}
					inputProps={{ placeholder: 'Name' }}
					label='Name'
				/>
				<p className='label'>{!errors?.name?.type && '\u00A0'}</p>
				<p className='label'>{errors?.name?.type === 'required' && 'Enter the name for new Space'}</p>
				<p className='label'>{errors?.name?.type === 'minLength' && 'Enter the name with minimum 3 characters'}</p>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default New;
