import React, { useState, useEffect, useContext } from 'react';
import $api from '../../http/index';
import AuthContext from '../../context/authcontext';
import CreateParkingForm from '../../components/CreateParkingForm';
import UpdateParkingForm from '../../components/UpdateParkingForm';

const ParkingCatalogs = () => {
    const { isAuth } = useContext(AuthContext);
    const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
    const [selectedParkingSpot, setSelectedParkingSpot] = useState(null);  // Добавлено состояние

    const [parkingSpots, setParkingSpots] = useState([]);
    const [newParkingSpot, setNewParkingSpot] = useState({
        number: '',
        price: '',
    });

    useEffect(() => {
        loadParkingSpots();
    }, []);

    const loadParkingSpots = async () => {
        try {
            const response = await $api.get('/parkingSpots');
            setParkingSpots(response.data);
        } catch (error) {
            console.error('Error loading parking spots:', error);
        }
    };

    const createParkingSpot = async () => {
        try {
            const response = await $api.post('/parkingSpots', newParkingSpot);
            setParkingSpots([...parkingSpots, response.data]);
            setNewParkingSpot({
                number: '',
                price: '',
            });
        } catch (error) {
            console.error('Error creating parking spot:', error);
        }
    };

    const deleteParkingSpot = async (id) => {
        try {
            await $api.delete(`/parkingSpots/${id}`);
            setParkingSpots(parkingSpots.filter((spot) => spot._id !== id));
        } catch (error) {
            console.error('Error deleting parking spot:', error);
        }
    };

    const editParkingSpot = (spot) => {
        setSelectedParkingSpot(spot);
        setisUpdateModalOpen(true);
    };

    return (
        <div>
            <h1>Parking Catalog</h1>
            {parkingSpots.map((spot) => (
                <div key={spot._id}>
                    <p>Number: {spot.number}</p>
                    <p>Price: {spot.price}</p>
                    <button onClick={() => editParkingSpot(spot)}>Edit</button>
                    <button onClick={() => deleteParkingSpot(spot._id)}>Delete</button>
                </div>
            ))}

            {isAuth && (
                <>
                    <button onClick={() => setisCreateModalOpen(true)}>Добавить новую парковку</button>
                    {isCreateModalOpen && (
                        <CreateParkingForm 
                            visible={isCreateModalOpen} 
                            loadParkingSpots = {() => loadParkingSpots()} 
                            setVisible={setisCreateModalOpen} 
                        />
                    )}
                    {selectedParkingSpot && (
                        <UpdateParkingForm
                            loadParkingSpots = {() => loadParkingSpots()} 
                            parkingSpot={selectedParkingSpot}
                            visible={isUpdateModalOpen}
                            setVisible={setisUpdateModalOpen}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default ParkingCatalogs;
