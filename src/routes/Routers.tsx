import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from '../pages/Title';
import { MainMenu } from '../pages/MainMenu';
import { BeginnerDungeon } from '../pages/BeginnerDungeon';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Title />} />
        <Route path={'/MainMenu'} element={<MainMenu />} />
        <Route path={'BeginnerDungeon'} element={<BeginnerDungeon />} />
      </Routes>
    </BrowserRouter>
  );
};
