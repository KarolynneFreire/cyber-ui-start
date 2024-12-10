import { ToastContainer } from 'react-toastify';
import Router from './routes/routes.jsx';
import './styles/global.css';

function App() {
  return (
    <>
      <Router/>
      <ToastContainer/>
    </>
  );
}

export default App;
