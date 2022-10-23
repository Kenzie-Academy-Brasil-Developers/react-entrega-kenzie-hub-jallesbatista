import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const OpenRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? <Navigate to='/dashboard' replace /> : <Outlet />;
};

export default OpenRoutes;
