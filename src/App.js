import { Menu } from './components/Menu';

import { Slider } from './components/Slider';
import { VehicleManagement } from './components/VehicleManagement';
import GlobalStyle from './styles/globlaStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Slider />
      <VehicleManagement />
    </>
  );
};
