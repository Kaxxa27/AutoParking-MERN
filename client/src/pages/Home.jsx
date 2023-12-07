import React, { useState, useEffect } from 'react';

const Home = () => {
    const [ip, setIp] = useState('');
    const [catFact, setCatFact] = useState('');
    const [errorIp, setErrorIp] = useState(null);
    const [errorCatFact, setErrorCatFact] = useState(null);

    useEffect(() => {

        const getIp = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');

                if (response.ok) {
                    const data = await response.json();
                    setIp(data.ip);
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            } catch (error) {
                setErrorIp(`Failed to fetch IP: ${error.message}`);
            }
        };

        const getCatFact = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (response.ok) {
                    const data = await response.json();
                    setCatFact(data.fact);
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            } catch (error) {
                setErrorCatFact(`Failed to fetch cat fact: ${error.message}`);
            }
        };

        getIp();
        getCatFact();
    }, []);

    return (
        <div>
            <div>
                Главная страница
            </div>
            <div>
                <h2>IP Address:</h2>
                {errorIp ? (
                    <p>{errorIp}</p>
                ) : (
                    <p>{ip}</p>
                )}
            </div>
            <div>
                <h2>Random Cat Fact:</h2>
                {errorCatFact ? (
                    <p>{errorCatFact}</p>
                ) : (
                    <p>{catFact}</p>
                )}
            </div>
        </div>
    );
};

export default Home;
