import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DatePick = (props) => {
	const { error, ...datePickProps } = props;

	return (
		<LocalizationProvider style={{ width: "100%" }} dateAdapter={AdapterDateFns}>
			<DatePicker
				style={{ width: "100%" }}
				error={error}
				inputFormat={'dd/MM/yyyy'}
				fullWidth={true}
				renderInput={(params) => <TextField {...params} error={error} helperText={error ? 'Enter Date of Birth in ' + params?.inputProps?.placeholder : ' '} />}
				{...datePickProps}
			/>
		</LocalizationProvider>
	);
}

export default DatePick;
