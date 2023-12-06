import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/privacy-policy">Политика Конфиденциальности</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
