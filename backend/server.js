const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS) for all routes

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mlb_fan_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define User Schema and Model (for MongoDB)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetch the first user from the database (adjust as needed)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Send the user data to the frontend
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user data', error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
