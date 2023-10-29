import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TitlePage } from '../pages/TitlePage';
import { SelectStagePage } from '../pages/SelectStagePage';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TitlePage />} />
        <Route path={'/SelectStage'} element={<SelectStagePage />} />
      </Routes>
    </BrowserRouter>
  );
};
