import { useContext } from 'react';
import ContainerStyled from '../../../components/Container/styles';
import { UserContext } from '../../../contexts/UserContext';
import { ProfileStyled } from './styles';

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <ProfileStyled>
      <ContainerStyled variant='dashboard'>
        <div className='profile__info'>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </ContainerStyled>
    </ProfileStyled>
  );
};

export default Profile;
