import React from 'react';
import IpComponent from '../components/API/IpAPI';
import CatFactComponent from '../components/API/FactAboutCatsAPI';

const Home = () => {
  return (
    <div>
      <div>
        Главная страница
      </div>
      <IpComponent />
      <CatFactComponent />
    </div>
  );
};

export default Home;
