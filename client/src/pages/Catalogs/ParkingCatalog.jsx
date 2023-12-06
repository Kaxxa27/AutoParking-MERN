import React from 'react';
import GeneralCatalog from '../../components/Catalogs/GeneralCatalog/GeneralCatalog';
import CreateParkingForm from '../../components/CreateParkingForm';

const ParkingsCatalog = () => {
  const tableFields = [
    { name: 'number', label: 'Номер' },
    { name: 'price', label: 'Цена' },
  ];

  return (
    <GeneralCatalog
      catalogTitle="Каталог парковок"
      catalogURL="parkingspots"
      tableFields={tableFields}
      CreateFormComponent={CreateParkingForm}
    />
  );
};

export default ParkingsCatalog;
