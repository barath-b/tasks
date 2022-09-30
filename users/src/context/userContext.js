import { createContext, useState, useEffect } from "react";
// import dummyData from "../utils/dummyData";

const UserContext = createContext({
	allUsers: [],
	curUsers: [],
	isLoading: false,
	error: null,
	filterValue: '',
	headers: [],
	headersExport: {},
	filterNewUsers: () => { },
	addUsers: () => { },
	reset: () => { },
});

const headersExport = [
	{ label: 'First Name', key: 'fname' },
	{ label: 'Last Name', key: 'lname' },
	{ label: 'Age', key: 'age' },
	{ label: 'User Name', key: 'username' },
	{ label: 'Email', key: 'email' },
	{ label: 'Gender', key: 'gender' },
];

const headersParse = {
	'First Name': 'fname',
	'Last Name': 'lname',
	'Age': 'age',
	'User Name': 'username',
	'Email': 'email',
	'Gender': 'gender'
}

export const UserContextProvider = (props) => {
	const [allUsers, setAllUsers] = useState([]);
	const [curUsers, setCurUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [filterValue, setFilterValue] = useState('');

	const loadData = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://randomuser.me/api/?results=50');
			if (!response.ok) {
				throw new Error('Couldn\'t fetch the user, something went Wrong!')
			}

			const resData = await response.json();
			const cleanedData = resData.results.map((user) => {
				return {
					username: user.login.username,
					gender: user.gender,
					fname: user.name.first,
					lname: user.name.last,
					email: user.email,
					age: user.dob.age
				}
			});

			setAllUsers(cleanedData);
			setCurUsers(cleanedData);
		} catch (error) {
			alert(error);
			setError(error.message)
		}
		setIsLoading(false);
	}

	useEffect(() => {
		loadData();
		// Dummy Data
		// setAllUsers(dummyData);
		// setCurUsers(dummyData);
	}, []);

	const filterNewUsers = (newFilter) => {
		if (newFilter === '') { reset(); return; }

		let filteredUser = allUsers.filter((user) => {
			return user.username.indexOf(newFilter) !== -1
		});
		setFilterValue(newFilter);
		setCurUsers(filteredUser);
	}

	const reset = () => {
		setFilterValue('');
		setCurUsers(allUsers);
	}

	const addUsers = (newUsers) => {
		filterNewUsers('');
		setAllUsers((oldUsers) => [...oldUsers, ...newUsers]);
		setCurUsers((oldUsers) => [...oldUsers, ...newUsers]);
	}

	return (
		<UserContext.Provider value={{
			allUsers,
			curUsers,
			isLoading,
			error,
			filterValue,
			headersExport,
			headersParse,
			filterNewUsers,
			addUsers,
			reset
		}}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContext;
