// backend/server.js

const express = require('express');
const apiRouter = require('./api');
const cors = require('cors');

const app = express();
const PORT = 5000; // Choisissez le port que vous souhaitez utiliser pour votre backend

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Middleware CORS pour autoriser les requêtes provenant de votre frontend
app.use(cors());

// Utilisation de l'API router
app.use('/api', apiRouter);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
