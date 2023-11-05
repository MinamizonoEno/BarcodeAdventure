import { CssBaseline } from '@mui/material';
import { Routers } from './routes/Routers';
import { Providers } from './provider/Providers';

export const App = () => {
  return (
    <Providers>
      <CssBaseline />
      <Routers />
    </Providers>
  );
};
