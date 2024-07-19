import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Install with `npm install emailjs-com`

const MessageSender = () => {
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
  );
};

export default MessageSender;
