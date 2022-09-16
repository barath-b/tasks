import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = (props) => {
	const { isValid, touched, errorMsg, id, label, sx, items, value, ...selectProps } = props;

	return (
		<FormControl>
			<InputLabel id={id + 'Label'}>{label}</InputLabel>
			<Select
				sx={{ sx }}
				label={label}
				labelId={id + 'Label'}
				id={id}
				value={value}
				error={touched && !isValid}
				variant={selectProps.variant || "outlined"}
				fullWidth={selectProps.width || true}
				{...selectProps}
			>
				{items.map((item) => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>)}
			</Select>
			<FormHelperText>{touched && !isValid ? errorMsg : ' '}</FormHelperText>
		</FormControl>
	)
}

export default CustomSelect;