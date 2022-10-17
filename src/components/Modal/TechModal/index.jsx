import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import * as yup from 'yup';
import { TechContext } from '../../../contexts/TechContext';
import ButtonStyled from '../../Button/styles';
import TechModalStyled from './styles';

const schema = yup.object({
  title: yup.string().required('O nome é obrigatório'),
});

const TechModal = () => {
  const { modalAuth, setModalAuth, techCreate } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const closeModal = () => {
    setModalAuth(false);
    reset();
  };
  const onSubmit = (data) => {
    console.log(data);
    techCreate(data);

    closeModal();
  };
  return (
    modalAuth && (
      <TechModalStyled>
        <div className='modal'>
          <div className='modal__title'>
            <p>Cadastrar Tecnologia</p>
            <button type='button' onClick={() => closeModal()}>
              <IoMdClose />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Nome
              <input
                placeholder='Digite o nome da tecnologia'
                {...register('title')}
              />
              <span>{errors.title?.message}</span>
            </label>
            <label>
              Selecionar status
              <select name='' id='tech-status' {...register('status')}>
                <option value='Iniciante'>Iniciante</option>
                <option value='Intermediário'>Intermediário</option>
                <option value='Avançado'>Avançado</option>
              </select>
            </label>

            <div>
              <ButtonStyled type='submit'>Cadastrar Tecnologia</ButtonStyled>
            </div>
          </form>
        </div>
      </TechModalStyled>
    )
  );
};

export default TechModal;
