// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonStyled from '../../components/Button/styles';
import ContainerStyled from '../../components/Container/styles';
import { api } from '../../services/api';
import { Header } from './Header/styles';
import { Message } from './Message/styles';
import { Profile } from './Profile/styles';

const Dashboard = ({ user, setUser, setAuth }) => {
  const id = localStorage.getItem('@kenzieHub:userId');
  const navigate = useNavigate();
  useEffect(() => {
    const userData = () => {
      api
        .get(`/users/${id}`)
        .then((resp) => {
          setUser(resp.data);
        })
        .catch((err) => {
          toast.error('Ops! Algo deu errado');
          console.log(err);
        });
    };
    userData();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    setUser('');
    setAuth(false);
    toast.success('Usuário deslogado', {
      autoClose: 1000,
    });
  };

  return (
    <>
      <Header>
        <ContainerStyled variant='dashboard'>
          <nav>
            <h1>Kenzie Hub</h1>
            <ButtonStyled variant='secondary' onClick={logout}>
              Sair
            </ButtonStyled>
          </nav>
        </ContainerStyled>
      </Header>
      <Profile>
        <ContainerStyled variant='dashboard'>
          <div className='profile'>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </div>
        </ContainerStyled>
      </Profile>

      <ContainerStyled variant='dashboard'>
        <Message>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Message>
      </ContainerStyled>
    </>
  );
};

export default Dashboard;
