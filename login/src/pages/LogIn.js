import { Box, Typography } from "@mui/material";
import LogInForm from "../components/LogInForm";

const LogIn = () => {
	return (
		<Box sx={{ width: '50%', margin: '50px auto' }}>
			<Typography variant="h3" sx={{ margin: '20px auto' }}>Log In</Typography>
			<LogInForm />
		</Box>
	)
}

export default LogIn;
