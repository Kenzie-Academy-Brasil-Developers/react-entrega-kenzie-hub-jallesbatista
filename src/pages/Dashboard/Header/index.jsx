import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonStyled from '../../../components/Button/styles';
import ContainerStyled from '../../../components/Container/styles';
import { UserContext } from '../../../contexts/UserContext';
import { HeaderStyled } from './styles';

const Header = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('@kenzieHub:token');
    localStorage.removeItem('@kenzieHub:userId');
    navigate('/login', { replace: true });
    setUser(null);
    toast.success('Usuário deslogado', {
      autoClose: 1000,
    });
  };

  return (
    <HeaderStyled>
      <ContainerStyled variant='dashboard'>
        <nav>
          <h1>Kenzie Hub</h1>
          <ButtonStyled variant='secondary' onClick={logout}>
            Sair
          </ButtonStyled>
        </nav>
      </ContainerStyled>
    </HeaderStyled>
  );
};
export default Header;
