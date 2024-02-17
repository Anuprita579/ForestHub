const express = require('express');
const { createTransport } = require('nodemailer');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(json());

// Enable CORS for all routes
app.use(cors());

app.use((req, res, next) => {
  console.log("hello"+`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


// Route to handle sending emails
app.post('/sendemail', async (req, res) => {
  const { to, subject, text } = req.body;

  // Create a nodemailer transporter using your email provider's settings
  const transporter = createTransport({
    service: 'yahoo',
    auth: {
      user: 'codesurfers6@yahoo.com', // Replace with your email
      pass: 'GdscChallenge@99' // Replace with your email password or an app-specific password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'codesurfers6@yahoo.com', // Sender's email address
    to:'codesurfers6@yahoo.com', // Recipient's email address
    subject:'hello test mail',
    text:'this is text'
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

