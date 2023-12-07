import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import New from './pages/New';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Home />} />
			<Route path='new' element={<New />} />
			<Route path='signup' element={<SignUp />} />
		</>
	)
);

const App = () => {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
