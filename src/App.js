import { Menu } from './components/Menu';
import { VehicleManagement } from './components/VehicleManagement';
import GlobalStyle from './styles/globlaStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <VehicleManagement />
    </>
  );
};
