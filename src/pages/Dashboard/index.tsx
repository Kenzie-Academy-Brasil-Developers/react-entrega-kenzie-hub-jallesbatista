import Profile from './Profile';
import Header from './Header';
import Tech from './Tech';
import { TechProvider } from '../../contexts/TechContext';
import TechModal from '../../components/Modal/TechModal';

const Dashboard = () => (
  <>
    <Header />
    <Profile />
    <TechProvider>
      <Tech />
      <TechModal />
    </TechProvider>
  </>
);

export default Dashboard;
