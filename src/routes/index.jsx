import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { token } from '../services/api';
// import { token } from '../services/api';

const RoutesMain = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(token);
  const viewToggle = () => {
    setPasswordView(!passwordView);
  };

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

  return auth ? (
    <Routes>
      <Route
        path='/dashboard'
        element={<Dashboard user={user} setUser={setUser} setAuth={setAuth} />}
      />

      <Route path='/login' element={<Navigate to='/dashboard' />} />
      <Route path='/register' element={<Navigate to='/dashboard' />} />
    </Routes>
  ) : (
    <Routes>
      <Route path='/dashboard' element={<Navigate to='/login' />} />
      <Route
        path='/login'
        element={
          <Login
            setPasswordView={setPasswordView}
            passwordView={passwordView}
            viewToggle={viewToggle}
            setUser={setUser}
            setAuth={setAuth}
          />
        }
      />
      <Route
        path='/register'
        element={
          <Register
            setPasswordView={setPasswordView}
            passwordView={passwordView}
            viewToggle={viewToggle}
          />
        }
      />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
};

export default RoutesMain;
