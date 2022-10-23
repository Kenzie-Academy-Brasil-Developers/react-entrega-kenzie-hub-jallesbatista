import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api, token } from '../services/api';

// INTERFACES GERAIS
interface iUserProviderProps {
  children: ReactNode;
}

interface iUserContext {
  userRegister(data: iRegister): Promise<void>;
  userLogin(data: iLogin): Promise<void>;
  passwordView: boolean;
  setPasswordView: React.Dispatch<React.SetStateAction<boolean>>;
  user: iUser | null;
  setUser: React.Dispatch<iUser>;
  loading: boolean;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

// INTERFACE DE ESTADOS

interface iUser {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: [];
  updated_at: string;
  works: [];
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [passwordView, setPasswordView] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  async function userRegister(data: iRegister): Promise<void> {
    console.log(data);
    try {
      await api.post('/users', data);

      toast.success('Conta criada com sucesso');
      navigate('/login');
      setPasswordView(false);
    } catch (error: any | unknown) {
      const message: string = error.response.data.message;
      toast.error(message);
    }
  }

  async function userLogin(data: iLogin): Promise<void> {
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
      const tipedUserResponse: iUser = userResponse;

      localStorage.setItem('@kenzieHub:token', tokenResponse);
      localStorage.setItem('@kenzieHub:userId', tipedUserResponse.id);
      setUser(tipedUserResponse);
      const toNavigate = location.state?.from?.pathname || '/dashboard';
      navigate(toNavigate, { replace: true });
      toast.success('Login realizado com sucesso');
    } catch (error: any | unknown) {
      console.log(error);
      const message: string = error.response.data.message;
      toast.error(message);
    }
  }

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          const response = await api.get('/profile');
          const data: iUser = response.data;
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

  useEffect(() => {
    const viewPassword = () => {
      const inputPassword = document.querySelector(
        '#password'
      ) as HTMLInputElement;
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
