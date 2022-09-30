import { useContext } from "react";
import UserContext from "../context/userContext";
import CustomTable from "./UI/CustomTable";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import SearchBar from "./UI/SearchBar";
import CustomButton from "./UI/CustomButton";
import { Typography } from "@mui/material";
import useSearchBar from "../hooks/useSearchBar";
import Validation from "../utils/validation";
import { CSVLink } from "react-csv";
import { useCSVReader } from "react-papaparse";
import { toast } from "material-react-toastify";

const columns = [
	{ id: 'fname', label: 'First Name' },
	{ id: 'lname', label: 'Last Name' },
	{ id: 'age', label: 'Age' },
	{ id: 'username', label: 'User Name' },
	{ id: 'email', label: 'Email' }
];

const UserData = () => {
	const userCtx = useContext(UserContext);
	const { CSVReader } = useCSVReader();

	const checkFilter = (filterValue) => {
		if (filterValue === '') { userCtx.reset(); return; }

		let filteredData = userCtx.allUsers.filter((user) => {
			return user.username.indexOf(filterValue) !== -1
		});
		userCtx.filterNewUsers(filterValue, filteredData);
	}

	const { value: searchValue, ...searchProps } = useSearchBar(Validation.validSearchChar, checkFilter);

	return (
		<Paper elevation={3} sx={{ padding: '30px' }}>
			<Typography variant='h3' sx={{ padding: '20px 0' }}>User List</Typography>
			<SearchBar
				placeholder='At least 3 characters required'
				label='Search User by User Nmae'
				value={searchValue}
				{...searchProps}
			/>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={userCtx.allUsers.length > 0 ? 2 : 0}
				justifyContent='center'
				alignItems='center'
				sx={{ padding: '20px 0' }}
			>
				{userCtx.allUsers.length > 0 &&
					<CustomButton>
						<CSVLink data={userCtx.allUsers} headers={userCtx.headersExport} filename={'UsersList'} onClick={() => { toast.success('Your download will start shortly') }}>Export&nbsp;All</CSVLink>
					</CustomButton>
				}
				<CSVReader
					config={{ header: true, skipEmptyLines: 'greedy', transformHeader: (header) => userCtx.headersParse[header] }}
					onUploadAccepted={(results) => {
						console.log(results)
						if (results.data.length > 0) {
							userCtx.addUsers(results.data);
							toast.success('Users Added');
						} else {
							toast.warn('No data found');
						}
						if (results.errors.length > 0) {
							toast.error('Some error occurred' + results.error);
						}
						if (results.meta.length > 0) {
							toast.warn('Some date might be missing' + results.meta);
						}
					}}
				>
					{({ getRootProps }) => (
						<CustomButton type='button' {...getRootProps()} >Import&nbsp;Data</CustomButton>
					)}
				</CSVReader>
			</Stack>
			{userCtx.curUsers.length > 0 && <CustomTable data={userCtx.curUsers} columns={columns} />}
			{userCtx.isLoading && <Typography variant='subtitle' component={'p'} sx={{ padding: '20px 0' }}>Loading...</Typography>}
			{(!userCtx.isLoading && userCtx.curUsers.length === 0) &&
				<Typography variant='subtitle' component={'p'} sx={{ padding: '20px 0' }}>No data avaiable</Typography>
			}
		</Paper>
	)
}

export default UserData;
