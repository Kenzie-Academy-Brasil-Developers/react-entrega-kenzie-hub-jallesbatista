import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { toast } from 'react-toastify';
import { useContext } from 'react';
import { Container } from '../../components/Container';
import FormStyled from '../../components/Form/styles';
import ButtonStyled from '../../components/Button/styles';
import { UserContext } from '../../contexts/UserContext';
// import { api } from '../../services/api';

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('O email é obrigatório'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'No mínimo 8 dígitos')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'A confirmação deve ser igual a senha'),
  bio: yup.string().required('A bio é obrigatória'),
  contact: yup
    .string()
    .required('O contato é obrigatório')
    .matches(/[0-9]{11}/, 'Deve conter o DDD+9+seunumero, somente números.'),
  course_module: yup.string().required('Você deve escolher um módulo'),
});

const Register = () => {
  const navigate = useNavigate();
  const { userRegister, passwordView, setPasswordView } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginRedirect = () => {
    setPasswordView(false);
    navigate('/login');
  };

  return (
    <Container variant='register'>
      <div className='title'>
        <h1>Kenzie Hub</h1>
        <ButtonStyled type='button' variant='secondary' onClick={loginRedirect}>
          Voltar
        </ButtonStyled>
      </div>

      <FormStyled variant='register' onSubmit={handleSubmit(userRegister)}>
        <div className='form__title'>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>

        <label>
          Nome
          <input
            type='text'
            id='name'
            placeholder='Digite aqui seu nome'
            {...register('name')}
          />
          <span>{errors.name?.message}</span>
        </label>
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
        <label>
          Confirmar Senha
          <input
            type='password'
            placeholder='Digite novamente sua senha'
            {...register('confirmPassword')}
          />
          <span>{errors.confirmPassword?.message}</span>
        </label>
        <label>
          Bio
          <input
            type='text'
            id='bio'
            placeholder='Fale sobre você'
            {...register('bio')}
          />
          <span>{errors.bio?.message}</span>
        </label>
        <label>
          Contato
          <input
            type='tel'
            id='phone-number'
            placeholder='Digite seu contato ex: 219XXXXXXXX'
            maxLength={11}
            {...register('contact')}
          />
          <span>{errors.contact?.message}</span>
        </label>
        <label>
          Selecionar módulo
          <select id='module' {...register('course_module')}>
            <option value='Primeiro Módulo (Introdução ao Front-End)'>
              Primeiro Módulo
            </option>
            <option value='Segundo Módulo (Avançado Front-End)'>
              Segundo Módulo
            </option>
            <option value='Terceiro Módulo (Finalização Front-End)'>
              Terceiro Módulo
            </option>
            <option value='Quarto Módulo (Introdução ao Back-End)'>
              Quarto Módulo
            </option>
            <option value='Quinto Módulo (Avançado Back-End)'>
              Quinto Módulo
            </option>
            <option value='Sexto Módulo (Introdução ao mercado de trabalho)'>
              Sexto Módulo
            </option>
          </select>
        </label>

        <ButtonStyled
          type='submit'
          onClick={() => setPasswordView(false)}
          variant='negative'
        >
          Cadastrar
        </ButtonStyled>
      </FormStyled>
    </Container>
  );
};

export default Register;
