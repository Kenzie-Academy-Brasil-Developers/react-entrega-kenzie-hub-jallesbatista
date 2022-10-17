/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [modalAuth, setModalAuth] = useState(false);
  const [techsList, setTechsList] = useState(user.techs);

  async function techCreate(data) {
    try {
      const response = await api.post('/users/techs', data);
      setTechsList([...techsList, response.data]);
      toast.success('Tecnologia adicionada com sucesso', {
        autoClose: 1250,
      });
    } catch (error) {
      console.log(error);
      toast.error('Ops! Algo deu errado.', {
        autoClose: 1250,
      });
    }
  }

  async function techDelete(id) {
    try {
      api.delete(`/users/techs/${id}`);
      toast.success('Tecnologia removida com sucesso', {
        autoClose: 1250,
      });
      const li = document.getElementById(id);
      li.classList.add('removed');

      setTimeout(() => {
        setTechsList(techsList.filter((tech) => tech.id !== id));
      }, 800);
    } catch (error) {
      console.log(error);
      toast.error('Ops! Algo deu errado com a remoção', {
        autoClose: 1250,
      });
    }
  }
  return (
    <TechContext.Provider
      value={{
        techCreate,
        techDelete,
        techsList,
        setTechsList,
        modalAuth,
        setModalAuth,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
