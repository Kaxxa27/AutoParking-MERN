import React from 'react';
import Select from 'react-select';

const Home = () => {

    return (
        <div>
            <div>
                Главная страница
            </div>
            <div>
                <Select>
                    <option value="number">Номеру</option>
                    <option value="price">Цене</option>
                </Select>
            </div>

        </div>

    )
}

export default Home;
