import React from "react";
import { PageContact } from "../components/PageContact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/GloboWhatssap";

function Contact() {
    return (
        <div>
            <Header />
                <br /><br /><br /><br /><br /><br /><br />
            <PageContact />
                <br /><br /><br />  
            <WhatsAppButton />             
            <Footer />
        </div>
    )
}

export default Contact