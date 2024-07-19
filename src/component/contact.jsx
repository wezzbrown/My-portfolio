import React from 'react';
import { useState } from 'react';
// import './App.css';
import emailjs from 'emailjs-com';
import Logo from "../assets/image/logo1.png"
import Lottie from "lottie-react";
import Tiktok from "./tiktok.json"
import Whatsapp from "./what'sapp.json"
import Linkdin from "./linkdin.json"
import Github from "./github.json"


const Contact = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      message,
    };

    // Send email using EmailJS
    emailjs.send('service_kjqm056', 'template_k7o4l08', templateParams, 'eR9Avu5X9LydpfZen')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setMessage(''); // Clear the textarea
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-div">
      <div className='contact-images'>
      <img src={Logo} alt="" className='contact-logo'/>
      <span className='contact-anime'>
        <a href="https://www.tiktok.com/@wezzdev?is_from_webapp=1&sender_device=pc"><Lottie animationData={Tiktok} /></a>
        <a href="https://wa.me/2347026830463"><Lottie animationData={Whatsapp} /></a>
        <a href="https://www.linkedin.com/in/sunday-wisdom-ifiok-8559782a9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BgBioYAfDR%2FmeWdQafb9nBg%3D%3D"><Lottie animationData={Linkdin} /></a>
        <a href="https://github.com/wezzbrown"><Lottie animationData={Github} /></a>
      </span>
      <p>If you'd like to get in touch, feel free to reach out:</p>
      <p>Email: sundaywisdomifok@gmail.com</p>
      <p>Drive: I'll keep trying and never stop searching and learning new things till the clock stops</p>
      </div>
      <div className='footer'>
      <div className='message'>
      <h2>Send a Message</h2>
      <form onSubmit={sendEmail}>
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={handleInputChange}
        //   rows={10}
        //   cols={70}
          className='message-box'

        />
        <br />
        {/* <button type="submit" className='btn-message'>Send Message</button> */}

        <button className="animated-button btn-message">
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <span className="text">Submit Button</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
    </button>
      </form>
    </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
