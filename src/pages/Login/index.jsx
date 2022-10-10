import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Container } from '../../components/Container';
import FormStyled from '../../components/Form/styles';
import ButtonStyled from '../../components/Button/styles';
import { api } from '../../services/api';

const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('O email é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

const Login = ({
  passwordView,
  setPasswordView,
  viewToggle,
  setUser,
  setAuth,
}) => {
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const userLogin = (data) => {
    const login = api
      .post('/sessions', data)
      .then((resp) => {
        setAuth(() => true);
        localStorage.setItem('@kenzieHub:token', resp.data.token);
        localStorage.setItem('@kenzieHub:userId', resp.data.user.id);
        setUser(() => resp.data.user);
        reset();
        toast.success('Login realizado com sucesso', {
          autoClose: 1250,
        });
        setPasswordView(false);
        navigate('/dashboard');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    toast.promise(login, {
      pending: 'Por favor, aguarde',
    });
  };

  const registerRedirect = () => {
    setPasswordView(false);
    navigate('/register');
  };

  return (
    <Container variant='login'>
      <h1>Kenzie Hub</h1>
      <FormStyled variant='login' onSubmit={handleSubmit(userLogin)}>
        <h2>Login</h2>

        <label>
          Email
          <input
            type='email'
            placeholder='Digite aqui seu email'
            {...register('email')}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label>
          Senha
          <div className='input-password'>
            <input
              type='password'
              id='password'
              placeholder='Digite aqui sua senha'
              {...register('password')}
            />

            {passwordView ? (
              <button onClick={viewToggle} type='button'>
                <IoMdEyeOff />
              </button>
            ) : (
              <button onClick={viewToggle} type='button'>
                <IoIosEye />
              </button>
            )}
          </div>
          <span>{errors.password?.message}</span>
        </label>
        <ButtonStyled id='login' type='submit'>
          Entrar
        </ButtonStyled>

        <p>Ainda não possui uma conta?</p>

        <ButtonStyled
          type='button'
          variant='disable'
          onClick={registerRedirect}
        >
          Cadastre-se
        </ButtonStyled>
      </FormStyled>
    </Container>
  );
};

export default Login;
