import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { UserContext } from './UserContext';

// INTERFACES GERAIS
interface iTechProviderProps {
  children: ReactNode;
}

interface iTechContext {
  techCreate(data: iTechCreate): Promise<void>;
  techDelete(id: string): Promise<void>;
  modalAuth: boolean;
  setModalAuth: React.Dispatch<React.SetStateAction<boolean>>;
  techsList: iTech[];
  setTechsList: React.Dispatch<React.SetStateAction<iTech[]>>;
}

export interface iTechCreate {
  title: string;
  status: string;
}

export interface iTech {
  id: string;
  title: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

export const TechContext = createContext<iTechContext>({} as iTechContext);

export const TechProvider = ({ children }: iTechProviderProps) => {
  const { user } = useContext(UserContext);
  const [modalAuth, setModalAuth] = useState<boolean>(false);
  const [techsList, setTechsList] = useState<iTech[]>(user?.techs as iTech[]);

  async function techCreate(data: iTechCreate): Promise<void> {
    try {
      const response = await api.post('/users/techs', data);
      const tech: iTech = response.data;
      setTechsList([...techsList, tech]);
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

  async function techDelete(id: string): Promise<void> {
    try {
      api.delete(`/users/techs/${id}`);
      toast.success('Tecnologia removida com sucesso', {
        autoClose: 1250,
      });
      const li = document.getElementById(id) as HTMLElement;
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
