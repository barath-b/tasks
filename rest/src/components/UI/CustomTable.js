import { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const CustomTable = (props) => {
	const { data, editUser, deleteUser } = props;
	const [page, setPage] = useState(0);
	const rowsPerPage = 10;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		if (data.length < rowsPerPage) setPage(0);
		if (data.length >= rowsPerPage && data.length % rowsPerPage === 0) {
			setPage(page => Math.max(page - 1, 0));
		}
	}, [data, setPage]);


	return (
		<>
			<TableContainer>
				<Table aria-label="sticky table">
					<TableHead>
						<TableRow>
							{props.columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									<b>{column.label}</b>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((user, idx) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
										{props.columns.map((column) => {
											if (column.id === 'actions') {
												return (
													<TableCell key={user.id + column.id}>
														<IconButton aria-label="edit" color="primary" onClick={(e) => { editUser(user, idx + (rowsPerPage * page)) }}>
															<EditRoundedIcon />
														</IconButton>
														<IconButton aria-label="delete" color="error" onClick={(e) => { deleteUser(user, idx + (rowsPerPage * page)) }}>
															<DeleteRoundedIcon />
														</IconButton>
													</TableCell>
												)
											}
											return <TableCell key={user.id + column.id} align={column.align}>{user[column.id]}</TableCell>
										})}
										{

										}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[-1]}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
			/>
		</>
	)
};

export default CustomTable;
