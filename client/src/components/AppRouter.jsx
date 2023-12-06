import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Error from '../pages/Error';
import Catalog from '../pages/Catalog';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/parking-catalog" element={<Catalog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}

export default AppRouter;