import { createContext, useState } from "react";
import Helpers from "../utils/helpers";


const AuthContext = createContext({
	isLoggedIn: false,
	user: {},
	setLogIn: () => { },
	setLogOut: () => { },
	createUser: () => { },
	checkUserLogIn: () => { }
});

export const AuthContextProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	const setLogIn = (newUser) => {
		setLoggedIn(true);
		delete newUser.password;
		setUser(newUser);
		Helpers.setSessionStorage('user', newUser)
	}

	const setLogOut = () => {
		setLoggedIn(false);
		setUser({});
	}

	const createUser = (username, user) => {
		Helpers.setLocalStorage(username, user);
	}

	const checkUserLogIn = (creds) => {
		const curUser = Helpers.getLocalStorage(creds.username)

		// Check if user exists
		if (!curUser) return { valid: false, msg: 'Username does not Exist' };

		// Check if password is right
		if (curUser.password !== creds.password) return { valid: false, msg: 'Wrong Password' }

		// Log the user in
		setLogIn(curUser);
		return { valid: true, msg: 'Logged In' };
	}

	return (
		<AuthContext.Provider value={{
			isLoggedIn: loggedIn,
			user: user,
			setLogIn,
			setLogOut,
			createUser,
			checkUserLogIn
		}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContext;
