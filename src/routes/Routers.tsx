import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from '../pages/Title';
import { MainMenu } from '../pages/MainMenu';
import { BeginnerDungeon01 } from '../pages/BeginnerDungeon/BeginnerDungeon01';
import { BeginnerDungeon02 } from '../pages/BeginnerDungeon/BeginnerDungeon02';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Title />} />
        <Route path={'/MainMenu'} element={<MainMenu />} />
        <Route path={'/BeginnerDungeon01'} element={<BeginnerDungeon01 />} />{' '}
        <Route path={'/BeginnerDungeon02'} element={<BeginnerDungeon02 />} />
      </Routes>
    </BrowserRouter>
  );
};
