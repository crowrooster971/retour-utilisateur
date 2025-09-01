const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB database
// Default connection string: 'mongodb://localhost:27017/retour-utilisateur' (make sure it's running)
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retour-utilisateur';
mongoose.connect(mongoURI, { 
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.error('Connection error to MongoDB:', err);
  console.error('Make sure your MongoDB server is running and the URI is correct.');
  process.exit(1);
});

// Routes
app.get('/', (req, res) => {
  res.send('User Feedback API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});