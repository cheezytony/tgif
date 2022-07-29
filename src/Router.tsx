import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import IndexPage from './pages/IndexPage';
import NameACountry from './pages/NameACountry';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/name-a-country" element={<NameACountry />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
