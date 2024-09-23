import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../pages/prueba';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Servicios from '../pages/Servicios';
import AboutUs from '../pages/AboutUs';
import Reseñas from '../pages/Reseñas';
import Administrador from '../pages/Administrador';
import Proyectos from '../pages/Proyectos';
import Register from '../pages/Register';
import Marcas from '../pages/Marcas';
import ProtectedRoute from '../routes/ProtectedRoutes'; 

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={ "" } />
       <Route path='/Login' element={<Login />} />
       <Route path="/Register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
       <Route path='/Home' element={<Home />} />
       <Route path="/Administrador" element={<ProtectedRoute><Administrador /></ProtectedRoute>} />
       <Route path="/Servicios" element={<Servicios />} />
       <Route path="/Proyectos" element={<Proyectos />} />
       <Route path="/Marcas" element={<Marcas />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Reseñas" element={<Reseñas />} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/Prueba' element={<Prueba />} />
     </Routes>
    </Router>
   );
};
export default Routing;