import { Navigate, Route, Routes } from 'react-router-dom';
import OpenRoutes from '../components/OpenRoutes';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => {
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
