import { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import OpenRoutes from '../components/OpenRoutes';
import ProtectedRoutes from '../components/ProtectedRoutes';
import { UserContext } from '../contexts/UserContext';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => {
  const { passwordView } = useContext(UserContext);

  useEffect(() => {
    const viewPassword = () => {
      const inputPassword = document.querySelector('#password');
      if (inputPassword) {
        if (passwordView) {
          inputPassword.type = 'text';
        } else {
          inputPassword.type = 'password';
        }
      }
    };
    viewPassword();
  }, [passwordView]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      <Route element={<OpenRoutes />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default RoutesMain;
