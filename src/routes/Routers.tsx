import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from '../pages/Title';
import { MainMenu } from '../pages/MainMenu';
import { BeginnerDungeon01 } from '../pages/BeginnerDungeon/BeginnerDungeon01';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Title />} />
        <Route path={'/MainMenu'} element={<MainMenu />} />
        <Route path={'BeginnerDungeon01'} element={<BeginnerDungeon01 />} />
      </Routes>
    </BrowserRouter>
  );
};
