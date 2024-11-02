// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const CV = require('./models/cv'); 
// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-cv-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Get CV data
app.get('/api/cv', async (req, res) => {
    try {
        const cv = await CV.findOne(); // Trouver un CV dans la base de données
        if (cv) {
            res.json(cv);
        } else {
            res.status(404).json({ message: 'CV not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
