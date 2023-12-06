import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import AuthProvider from './components/AuthProvider';


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <div>
                    <Navbar />
                    <AppRouter />
                </div>
            </AuthProvider>
        </Router>
    );
};

export default App;

