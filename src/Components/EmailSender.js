import React from 'react';
import axios from 'axios';

function EmailSender() {
  const handleSendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-email', {
        to: '2022.shravani.rasam@ves.ac.in',
        subject: 'Hello from your app',
        text: 'This is the body of the email.'
      });

      console.log(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <button onClick={handleSendEmail}>
      Send Email
    </button>
  );
}

export default EmailSender;
