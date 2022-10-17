import { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import ButtonStyled from '../../../components/Button/styles';
import ContainerStyled from '../../../components/Container/styles';
import { TechContext } from '../../../contexts/TechContext';
import TechStyled from './styles';
import TechList from './TechList';

const Tech = () => {
  const { setModalAuth } = useContext(TechContext);
  return (
    <ContainerStyled variant='dashboard'>
      <TechStyled>
        <div className='tech__title'>
          <h3>Tecnologias</h3>
          <ButtonStyled
            variant='secondaryPlus'
            onClick={() => setModalAuth(true)}
          >
            <GoPlus />
          </ButtonStyled>
        </div>

        <TechList />
      </TechStyled>
    </ContainerStyled>
  );
};
export default Tech;
