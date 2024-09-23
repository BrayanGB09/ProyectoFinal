import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import ImageGallery from "../components/Historial";
import FormProyectos from "../components/FormProyectos"


function Proyectos() {
    return (
        <div>
            <Header />
                
            <ImageGallery />

            <FormProyectos />
                
            <Footer />
        </div>
    )
}

export default Proyectos