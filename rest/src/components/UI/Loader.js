import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = (prop) => {
	const { open } = prop;

	return (
		<Backdrop
			sx={{ backgroundColor: '#000000cc' }}
			open={open}
		>
			<CircularProgress color='warning' />
			{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<circle cx="30" cy="50" fill="#e90c59" r="20">
					<animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
				</circle>
				<circle cx="70" cy="50" fill="#46dff0" r="20">
					<animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="0s"></animate>
				</circle>
				<circle cx="30" cy="50" fill="#e90c59" r="20">
					<animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5s"></animate>
					<animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
				</circle>
			</svg> */}
		</Backdrop>

	);
};

export default Loader;
