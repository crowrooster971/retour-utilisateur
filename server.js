const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB database
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retour-utilisateur';
mongoose.connect(mongoURI, { 
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.error('Connection error to MongoDB:', err);
  process.exit(1);
});

// Routes
app.get('/', (req, res) => {
  res.send('User Feedback API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});