import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'material-react-toastify';
import { userActions } from './app/userStore';
import Loader from './components/UI/Loader';
import Home from './pages/Home';
import User from './pages/User';
import './App.css';
import 'material-react-toastify/dist/ReactToastify.min.css';

let isInitial = false;

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    if (isInitial) return;
    isInitial = true;
    dispatch(userActions.getUsers());
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addUser' element={<User action='add' />} />
        <Route path='/editUser' element={<User action='edit' />} />
      </Routes>
      <Loader open={!!isLoading} />
      <ToastContainer
        position='top-right'
        containerId='toasts'
        autoClose={2000}
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
