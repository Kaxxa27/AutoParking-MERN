import React from 'react';
import GeneralForm from './UI/GeneralForm/GeneralForm';

const CreateParkingForm = ({ visible, setVisible }) => {
    
    const form = {
        fields: 
        [
            { name: 'number', label: 'Номер:', type: 'number', required: true },
            { name: 'price', label: 'Цена:', type: 'number', required: true },
        ],
        modelURL: 'parkingspots',
        title:"Создать парковку",
    };

  return (
    <GeneralForm form={form} visible={visible} setVisible={setVisible} />
  );
};

export default CreateParkingForm;
