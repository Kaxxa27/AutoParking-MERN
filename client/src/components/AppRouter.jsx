import React from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
// import Catalog from './components/Catalog';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Error from '../pages/Error';
import Catalog from '../pages/Catalog';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}

export default AppRouter;