import { Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<LogIn />} />
				<Route path="/" element={<Navigate to="/signup" replace />} />
			</Routes>
			<ToastContainer
				position='top-right'
				containerId='toasts'
				autoClose={4000}
				closeButton={true}
				pauseOnFocusLoss={true}
				newestOnTop={true}
				toastClassName='toast'
				draggable={false}
				hideProgressBar={false}
				closeOnClick={false}
			/>
		</div>
	);
}

export default App;


// TODO: 
// Toast
// Home page
// redirects
// Firebase
// Style



// Check:
// DOB in Sign up default
