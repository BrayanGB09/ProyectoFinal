import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prueba from '../pages/prueba';

const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/" element={ "" } />
       <Route path='/Prueba' element={<Prueba />} />
     </Routes>
    </Router>
   );
};
export default Routing;