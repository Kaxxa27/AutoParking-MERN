import React, { useState, useEffect, useContext } from 'react';
import $api from '../../http/index';
import AuthContext from '../../context/authcontext';
import CreateCarForm from '../../components/UI/Forms/CarForm/CreateCarForm';
import UpdateCarForm from '../../components/UI/Forms/CarForm/UpdateCarForm';

import cl from '../../styles/Catalogs/Catalog.module.css';

const CarCatalog = () => {
    const { isAuth } = useContext(AuthContext);
    const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
    const [selectedCars, setselectedCars] = useState(null); 

    const [Cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({
        model: '',
        mark: '',
        license_plate: ''
    });

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        try {
            const response = await $api.get('/cars');
            setCars(response.data);
        } catch (error) {
            console.error('Error loading parking Cars:', error);
        }
    };

    const createParkingCar = async () => {
        try {
            const response = await $api.post('/Cars', newCar);
            setCars([...Cars, response.data]);
            setNewCar({
                number: '',
                price: '',
            });
        } catch (error) {
            console.error('Error creating parking Car:', error);
        }
    };

    const deleteCar = async (id) => {
        try {
            await $api.delete(`/cars/${id}`);
            setCars(Cars.filter((Car) => Car._id !== id));
        } catch (error) {
            console.error('Error deleting parking Car:', error);
        }
    };

    const editCar = (Car) => {
        setselectedCars(Car);
        setisUpdateModalOpen(true);
    };

    return (
        <div className={cl.mainContainer}>
            <h1>Cars Catalog</h1>
            {isAuth && (
                <>
                    <button onClick={() => setisCreateModalOpen(true)}>Добавить машину</button>
                    {isCreateModalOpen && (
                        <CreateCarForm
                            visible={isCreateModalOpen}
                            loadCars={() => loadCars()}
                            setVisible={setisCreateModalOpen}
                        />
                    )}
                    {selectedCars && (
                        <UpdateCarForm
                            loadCars={() => loadCars()}
                            Car={selectedCars}
                            visible={isUpdateModalOpen}
                            setVisible={setisUpdateModalOpen}
                        />
                    )}
                </>
            )}
            {Cars.map((Car) => (
                <div key={Car._id} className={cl.Block}>
                    <div className={cl.infoBlock}>
                        <div>Model: {Car.model}</div>
                        <div>Mark: {Car.mark}</div>
                        <div>License Plat: {Car.license_plate}</div>
                    </div>
                    <button onClick={() => editCar(Car)}>Edit</button>
                    <button onClick={() => deleteCar(Car._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CarCatalog;
