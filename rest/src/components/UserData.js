import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { toast } from "material-react-toastify";
import CustomTable from "./UI/CustomTable";
import SearchBar from "./UI/SearchBar";
import CustomButton from "./UI/CustomButton";
import AlertDialog from "./UI/AlertDialog";
import useSearchBar from "../hooks/useSearchBar";
import Validation from "../utils/validation";
import { userActions } from "../app/userStore";

const columns = [
	{ id: 'fname', label: 'First Name' },
	{ id: 'lname', label: 'Last Name' },
	{ id: 'dob', label: 'DoB' },
	{ id: 'gender', label: 'Gender' },
	{ id: 'address', label: 'Address' },
	{ id: 'designation', label: 'Designation' },
	{ id: 'phone', label: 'Phone' },
	{ id: 'actions', label: 'Actions' },
];

const UserData = () => {
	const [deleteData, setDeleteData] = useState(null);
	const userState = useSelector(state => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const checkFilter = (filterValue) => {
		dispatch(userActions.filterNewUsers(filterValue));
	}

	const { value: searchValue, ...searchProps } = useSearchBar(Validation.validSearchChar, checkFilter);

	const confirmDelete = (userData) => {
		setDeleteData(userData);
	}

	const closeDialog = () => {
		setDeleteData(null);
	}

	const addNewUser = () => {
		navigate('/addUser', { state: {} });
	}

	const editUserHandler = (userData, index) => {
		navigate('/editUser', { state: { edit: userData, index } });
	}

	const deleteUserHandler = () => {
		const data = { ...deleteData };
		closeDialog();
		toast.info('Deleting User...', { toastId: 'delete' });
		dispatch(userActions.deleteUser(data));
	}

	return (
		<Paper elevation={3} sx={{ padding: '30px' }}>
			<Typography variant='h3' sx={{ padding: '20px 0' }}>User List</Typography>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
			>
				<SearchBar
					placeholder='At least 3 characters required'
					label='Search User by Name'
					value={searchValue}
					{...searchProps}
				/>
				<CustomButton variant={'outlined'} onClick={addNewUser}
					sx={{ margin: '10px', whiteSpace: 'nowrap', padding: '15px 25px', ':hover': { color: 'white', backgroundColor: 'primary.main' } }}
				>Add&nbsp;new&nbsp;User</CustomButton>
			</Stack>
			{userState.curUsers.length > 0 && <CustomTable data={userState.curUsers} columns={columns} editUser={editUserHandler} deleteUser={confirmDelete} />}
			{(!userState.isLoading && userState.curUsers.length === 0) &&
				<Typography variant='subtitle' component={'p'} sx={{ padding: '20px 0' }}>No data avaiable</Typography>
			}
			{!!deleteData &&
				<AlertDialog open={!!deleteData} close={closeDialog} confirm={deleteUserHandler}
					titleText='Do you want to delete the user?'
					contentText={`User name: ${deleteData.fname} ${deleteData.lname}`}
					closeText='Cancel'
					confirmText='Delete'
					// closeButtonStyles={{':hover': { color: 'white', backgroundColor: 'primary.main' } }}
					confirmButtonStyles={{ color: 'error.light', borderColor: 'error.main', ':hover': { color: 'white', backgroundColor: 'error.main' } }}
				/>
			}
		</Paper>
	)
}

export default UserData;
