import { useContext } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TechContext } from '../../../../../contexts/TechContext';
import TechItemStyled from './styles';

const TechItem = ({ id, title, status }) => {
  console.log();
  const { techDelete } = useContext(TechContext);
  return (
    <TechItemStyled id={id}>
      <div className='title'>
        <p>{title}</p>
        <span>{status}</span>
      </div>

      <button type='button' onClick={() => techDelete(id)}>
        <FaRegTrashAlt />
      </button>
    </TechItemStyled>
  );
};
export default TechItem;
