import { ToastContainer } from 'material-react-toastify';
import { UserContextProvider } from './context/userContext';
import UserData from './components/UserData';
import 'material-react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <UserData />
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
    </UserContextProvider>
  );
}

export default App;
