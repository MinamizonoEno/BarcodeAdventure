import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from '../pages/Title';
import { MainMenu } from '../pages/MainMenu';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Title />} />
        <Route path={'/MainMenu'} element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
};
