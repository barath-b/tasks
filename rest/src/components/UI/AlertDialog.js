import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from './CustomButton';

export default function AlertDialog(props) {
	const { open, close, confirm, titleText, contentText, closeText, confirmText, closeButtonStyles, confirmButtonStyles } = props;

	const handleConfirm = () => {
		confirm();
	};

	const handleClose = () => {
		close();
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ padding: '25px' }}
			fullWidth={true}
			maxWidth='xs'
		>
			<DialogTitle id="alert-dialog-title" sx={{ paddingTop: '25px' }}>
				{titleText}
			</DialogTitle>
			{contentText && <DialogContent>
				<DialogContentText id="alert-dialog-description">{contentText}</DialogContentText>
			</DialogContent>}
			<DialogActions sx={{ padding: '25px', paddingTop: '10px' }}>
				<CustomButton variant='text' onClick={handleClose} sx={closeButtonStyles}>
					{closeText}
				</CustomButton>
				<CustomButton variant='outlined' onClick={handleConfirm} autoFocus sx={confirmButtonStyles}>
					{confirmText}
				</CustomButton>
			</DialogActions>
		</Dialog>
	);
}