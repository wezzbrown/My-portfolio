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
        <button type="submit" className='btn-message'>Send Message</button>
      </form>
    </div>
  );
};

export default MessageSender;
