import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import PageHome from "../components/PageHome";
import WhatsAppButton from "../components/GloboWhatssap";

function Home() {
    return (
        <div>
            <Header />
                
            <PageHome />

            <WhatsAppButton />

                <br />
                
            <Footer />
        </div>
    )
}

export default Home