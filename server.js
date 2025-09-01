const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connexion à la base de données MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retour-utilisateur';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connecté à la base de données')
}).catch(err => {
  console.error('Erreur de connexion à MongoDB', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('API de Retour Utilisateur');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});