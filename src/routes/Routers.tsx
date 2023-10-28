import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TitlePage } from '../pages/TitlePage';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TitlePage />} />
      </Routes>
    </BrowserRouter>
  );
};
