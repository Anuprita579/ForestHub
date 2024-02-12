const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Route to handle sending emails
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  // Create a nodemailer transporter using your email provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codesurfers92@gmail.com', // Replace with your email
      pass: 'Codesurfers@2092' // Replace with your email password or an app-specific password
    }
  });

  // Define the email options
  const mailOptions = {
    from: 'codesurfers92@gmail.com', // Sender's email address
    to, // Recipient's email address
    subject,
    text
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