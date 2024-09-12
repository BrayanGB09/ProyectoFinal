import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8u8dmgj', 'template_oliuspm', form.current, {
        publicKey: 'kEfn_MiJxalKeYhcc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='contact' type="text" name="user_name" />
      <label>Email</label>
      <input className='contact' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='contact' name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

