/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api, token } from '../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [passwordView, setPasswordView] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  async function userRegister(data) {
    console.log(data);
    try {
      await api.post('/users', data);

      toast.success('Conta criada com sucesso');
      navigate('/login');
      setPasswordView(false);
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  }

  async function userLogin(data) {
    // Com o then normal da pra colocar um "loading" pelo toast.promise
    // const login = api
    //   .post('/sessions', data)
    //   .then((resp) => {
    //     setAuth(() => true);
    //     localStorage.setItem('@kenzieHub:token', resp.data.token);
    //     localStorage.setItem('@kenzieHub:userId', resp.data.user.id);
    //     setUser(() => resp.data.user);
    //     toast.success('Login realizado com sucesso', {
    //       autoClose: 1250,
    //     });
    //     setPasswordView(false);
    //     navigate('/dashboard');
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });

    // toast.promise(login, {
    //   pending: 'Por favor, aguarde',
    // });

    try {
      const response = await api.post('/sessions', data);

      const { user: userResponse, token: tokenResponse } = response.data;
      localStorage.setItem('@kenzieHub:token', tokenResponse);
      localStorage.setItem('@kenzieHub:userId', userResponse.id);
      setUser(userResponse);
      const toNavigate = location.state?.from?.pathname || '/dashboard';
      navigate(toNavigate, { replace: true });
      toast.success('Login realizado com sucesso');
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      toast.error(message);
    }
  }

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          const { data } = await api.get('/profile');
          setUser(data);
        } catch (error) {
          console.log(error);
          localStorage.removeItem('@kenzieHub:token');
          localStorage.removeItem('@kenzieHub:userId');
        }
      }

      setLoading(false);
    }
    loadUser();
  }, []);

  //   const registerMemo = useMemo(() => userRegister, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        userRegister,
        userLogin,
        passwordView,
        setPasswordView,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
