import { Container, Paper, Typography } from "@mui/material";
import UserForm from "../components/UserForm";

const User = (props) => {
	const { action } = props;
	const headerText = action === 'add' ? 'Add User' : 'Edit User';
	const buttonText = action === 'add' ? 'Add User' : 'Update User';
	return (
		<Container maxWidth="sm">
			<Paper elevation={3} sx={{ padding: '30px' }}>
				<Typography variant="h3" sx={{ margin: '30px auto' }}>
					{headerText}
				</Typography>
				<UserForm action={action} buttonText={buttonText} />
			</Paper>
		</Container>
	)
}

export default User;