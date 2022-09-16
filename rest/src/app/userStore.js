import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'material-react-toastify';
import api from '../api/api';
import dummyData from "../utils/dummyData";

const initialState = {
	allUsers: [],
	curUsers: [],
	filterValue: '',
	isLoading: false,
	error: null,
}

const promisePending = (state, action) => {
	state.isLoading = action.meta.requestId;
	state.error = null;
}

const promiseRejected = (state, action) => {
	console.log(action)
	state.isLoading = null;
	state.error = action.payload?.response?.statusText ? action.payload.response.statusText : action.error.message;
	toast.dismiss();
	toast.error('Something went wrong...');
}

const filterUsers = (allUsers, filter) => {
	return allUsers.filter((user) => {
		return user.fname.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || user.lname.toLowerCase().indexOf(filter.toLowerCase()) !== -1
	});
}

const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
	try {
		const data = await api.apiGet();
		// const data = dummyData;
		return thunkAPI.fulfillWithValue(data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const addUser = createAsyncThunk('users/addUser', async (newUser, thunkAPI) => {
	try {
		// // newUser.id = Math.random().toString(30).slice(-11);
		const id = nanoid();
		const response = await api.apiSend(id, newUser);
		newUser.id = id;
		return thunkAPI.fulfillWithValue(newUser);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const updateUser = createAsyncThunk('users/updateUser', async (userData, thunkAPI) => {
	const { id, ...data } = userData;
	try {
		const response = await api.apiUpdate(id, data);
		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const deleteUser = createAsyncThunk('users/deleteUser', async (userData, thunkAPI) => {
	try {
		const response = await api.apiDelete(userData.id);
		// const response = await Promise.resolve(1);
		return thunkAPI.fulfillWithValue(response);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const userSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		filterNewUsers: (state, action) => {
			if (action.payload === '') {
				state.filterValue = '';
				state.curUsers = [...state.allUsers];
			}
			state.filterValue = action.payload;
			state.curUsers = state.curUsers = filterUsers(state.allUsers, action.payload);
		},
	},
	extraReducers: {
		// Get all Users
		[getUsers.pending]: promisePending,
		[getUsers.rejected]: promiseRejected,
		[getUsers.fulfilled]: (state, action) => {
			const users = [];
			for (const id in action.payload) {
				if (Object.hasOwnProperty.call(action.payload, id)) {
					users.push({ ...action.payload[id], id });
				}
			}
			state.allUsers = users;
			state.curUsers = users;
			state.isLoading = null;
		},
		// Add New
		[addUser.pending]: promisePending,
		[addUser.rejected]: promiseRejected,
		[addUser.fulfilled]: (state, action) => {
			state.filterValue = '';
			state.allUsers.push(action.payload);
			state.curUsers = [...state.allUsers];
			state.isLoading = null;
			toast.dismiss('create');
			toast.success('User Added!');
		},
		// Update
		[updateUser.pending]: promisePending,
		[updateUser.rejected]: promiseRejected,
		[updateUser.fulfilled]: (state, action) => {
			let userIndex = state.allUsers.findIndex((user) => user.id === action.payload.id);
			state.allUsers[userIndex] = action.payload;
			state.curUsers = filterUsers(state.allUsers, state.filterValue);
			state.isLoading = null;
			toast.dismiss('update');
			toast.success('User Updated!');
		},
		// Delete
		[deleteUser.pending]: promisePending,
		[deleteUser.rejected]: promiseRejected,
		[deleteUser.fulfilled]: (state, action) => {
			let userIndex = state.allUsers.findIndex((user) => user.id === action.meta.arg.id);
			state.allUsers.splice(userIndex, 1);
			state.curUsers = filterUsers(state.allUsers, state.filterValue);
			state.isLoading = null;
			toast.dismiss('delete');
			toast.success('User Deleted!');
		},
	}
});

export const userActions = { ...userSlice.actions, getUsers, addUser, updateUser, deleteUser };

export default userSlice.reducer;