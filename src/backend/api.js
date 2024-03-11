// backend/api.js

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Endpoint pour gérer les soumissions de formulaire de contact
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configuration du transporter pour l'envoi d'e-mail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'radeladandedjan@gmail.com', // Adresse e-mail de l'expéditeur
      pass: 'h a v m x t l r x f a p n x m c',
       // Mot de passe de l'expéditeur
    },
  });

  // Options de l'e-mail
  const mailOptions = {
    from: email, // L'adresse e-mail de l'expéditeur
    to: 'deodatadandedjan2000@gmail.com', // Adresse e-mail du destinataire
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.sendStatus(200); // Répondre au frontend avec un statut 200 pour indiquer que l'envoi de l'e-mail a réussi
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email.'); // Répondre avec un statut 500 en cas d'erreur
  }
});

module.exports = router;
