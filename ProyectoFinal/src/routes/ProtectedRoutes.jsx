import React from 'react';
import { Navigate } from 'react-router-dom';
import GetAutenticados from '../services/GetAutenticados';

const ProtectedRoute = ({ children }) => {
    
    const estaAutenticado =  GetAutenticados(); 

    if (!estaAutenticado) {
       
        return <Navigate to="/AccesoDenegado" />;

    }

    return children;
};

export default ProtectedRoute;