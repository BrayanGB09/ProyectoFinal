import React from "react";
import { FormContact } from "../components/FormContact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/GloboWhatssap";
import Banner from "../components/Banner";

function Contact() {
    return (
        <div>
            <Header />
                <br /><br /><br /><br /><br /><br />
            <FormContact />
                <br /><br /><br />  
            <WhatsAppButton />             
            <Footer />
        </div>
    )
}

export default Contact