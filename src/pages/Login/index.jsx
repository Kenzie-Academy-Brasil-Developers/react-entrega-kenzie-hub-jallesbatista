import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import * as yup from 'yup';
import { useContext } from 'react';
import FormStyled from '../../components/Form/styles';
import ButtonStyled from '../../components/Button/styles';
import { UserContext } from '../../contexts/UserContext';
import ContainerStyled from '../../components/Container/styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('O email é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

const Login = () => {
  const { userLogin, passwordView, setPasswordView } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const registerRedirect = () => {
    setPasswordView(false);
    navigate('/register');
  };

  return (
    <ContainerStyled variant='login'>
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
              <button
                onClick={() => setPasswordView(!passwordView)}
                type='button'
              >
                <IoMdEyeOff />
              </button>
            ) : (
              <button
                onClick={() => setPasswordView(!passwordView)}
                type='button'
              >
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
    </ContainerStyled>
  );
};

export default Login;
