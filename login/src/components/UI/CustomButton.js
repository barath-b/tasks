import { Button } from '@mui/material';
import React from 'react';

const CustomButton = (props) => {
	const { buttonText, variant, ...buttonProps } = props;

	return (
		<Button
			variant={variant || "contained"}
			// onClick={onClick}
			{...buttonProps}
		>
			{props.children}
		</Button>
	);
}

export default CustomButton;
