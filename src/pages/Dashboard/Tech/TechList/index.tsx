import { useContext } from 'react';
import { TechContext } from '../../../../contexts/TechContext';
import Message from '../../Message';
import TechListStyled from './styles';
import TechItem from './TechItem';

const TechList = () => {
  const { techsList } = useContext(TechContext);

  return techsList.length ? (
    <TechListStyled>
      {techsList.map((tech) => {
        const { id, status, title } = tech;
        return <TechItem key={id} id={id} status={status} title={title} />;
      })}
    </TechListStyled>
  ) : (
    <Message />
  );
};

export default TechList;
