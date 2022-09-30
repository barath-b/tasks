import { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

const CustomTable = (props) => {
	const { data } = props;
	const [page, setPage] = useState(0);
	const rowsPerPage = 10;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		if (data.length < 10) setPage(0);
	}, [data]);

	return (
		<>
			<TableContainer>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{props.columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{data
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((user) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={user.username}>
										{props.columns.map((column) => <TableCell key={column.id} align={column.align}>{user[column.id]}</TableCell>)}
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
