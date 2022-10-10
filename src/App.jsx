import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './routes';
import Global from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log();
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer
        theme='dark'
        limit={2}
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        pauseOnFocusLoss={false}
      />
    </>
  );
}

export default App;
