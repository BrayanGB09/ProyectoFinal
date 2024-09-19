import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import WhatsAppButton from "../components/GloboWhatssap";
import PageMarcas from "../components/PageMarcas";


function Marcas() {
    return (
        <div>
            <Header />
                
            <PageMarcas />

            <WhatsAppButton />
                
            <Footer />
        </div>
    )
}

export default Marcas