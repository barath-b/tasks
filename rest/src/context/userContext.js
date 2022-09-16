import { createContext, useState, useEffect } from "react";
import dummyData from "../utils/dummyData";

const UserContext = createContext({
	allUsers: [],
	curUsers: [],
	editUser: {},
	isLoading: false,
	error: null,
	filterValue: '',
	filterNewUsers: () => { },
	addUsers: () => { },
	updateUser: () => { },
	deleteUser: () => { },
	reset: () => { },
});

export const UserContextProvider = (props) => {
	const [allUsers, setAllUsers] = useState([]);
	const [curUsers, setCurUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
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
		// loadData();
		// Dummy Data
		setAllUsers(dummyData);
		setCurUsers(dummyData);
	}, []);

	useEffect(() => {
		// console.log(allUsers);
		filterNewUsers(filterValue);
	}, [allUsers]);

	const filterNewUsers = (newFilter) => {
		if (newFilter === '') { reset(); return; }

		let filteredUser = allUsers.filter((user) => {
			// console.log(user)
			return user.fname.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1 || user.lname.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
		});
		setFilterValue(newFilter);
		setCurUsers(filteredUser);
	}

	const reset = () => {
		setFilterValue('');
		setCurUsers([...allUsers]);
	}

	const addUsers = (newUser) => {
		newUser.id = Math.random().toString(30).slice(-11);
		filterNewUsers('');
		setCurUsers((oldUsers) => [...oldUsers, newUser]);
		setAllUsers((oldUsers) => [...oldUsers, newUser]);
	}

	const updateUser = (updatedData) => {
		let allIndex = allUsers.findIndex((user) => user.id === updatedData.id);
		const updatedUsers = [...allUsers];
		updatedUsers[allIndex] = updatedData;
		setAllUsers(updatedUsers);
	}

	const deleteUser = (toDelete) => {
		let allIndex = allUsers.findIndex((user) => user.id === toDelete.id);
		setAllUsers((oldUsers) => {
			let deleted = oldUsers.splice(allIndex, 1);
			return [...oldUsers];
		});
	}

	return (
		<UserContext.Provider value={{
			allUsers,
			curUsers,
			isLoading,
			error,
			filterValue,
			filterNewUsers,
			addUsers,
			updateUser,
			deleteUser,
			reset
		}}>
			{props.children}
		</UserContext.Provider>
	)
}

export default UserContext;
