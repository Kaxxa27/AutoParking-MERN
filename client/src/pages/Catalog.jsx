import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authcontext';
import ParkingTable from '../components/ParkingTable';
import $api from '../http/index';

const Catalog = () => {
  const { isAuth } = useContext(AuthContext);
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    const fetchParkings = async () => {
      try {
        const response = await $api.get('/parkingspots');
        setParkings(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке парковок:', error.message);
      }
    };
    fetchParkings();
  }, []);

  return (
    <div>
      <h1>Каталог парковок</h1>
      {/* {isAuth && <button onClick={handleCreate}>Создать</button>} */}
      {isAuth && <button>Создать</button>}
      <ParkingTable parkings={parkings} />
    </div>
  );
};

export default Catalog;


