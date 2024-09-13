import React from 'react';
import '../styles/GloboWhatsapp.css'  // Importa el archivo CSS

const WhatsAppButton = () => {
  const phoneNumber = "50662477920";  // Tu número de WhatsApp
  const message = "¡Hola! Me gustaría obtener más información.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <button className="whatsapp-button" onClick={openWhatsApp}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;