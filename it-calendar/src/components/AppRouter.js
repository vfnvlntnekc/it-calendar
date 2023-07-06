import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<MainPage />} />
            <Route path="/" element={<MainPage />} />

            
        </Routes>
    );
};

export default AppRouter;