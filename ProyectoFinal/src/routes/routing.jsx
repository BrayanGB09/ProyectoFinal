import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../pages/prueba';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={ "" } />
       <Route path='/Home' element={<Home />} />
       <Route path='/Contact' element={<Contact/>} />
       <Route path='/Prueba' element={<Prueba />} />
     </Routes>
    </Router>
   );
};
export default Routing;