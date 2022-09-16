import { Box, Typography } from "@mui/material";
import SignUpForm from "../components/signUpForm";

const SignUp = () => {
	return (
		<Box sx={{ width: '50%', margin: '50px auto' }}>
			<Typography variant="h3" sx={{ margin: '30px auto' }}>Sign Up</Typography>
			<SignUpForm />
		</Box>
	)
}

export default SignUp;