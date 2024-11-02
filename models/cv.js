// models/cv.js
const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Ajoutez d'autres champs nécessaires
});

module.exports = mongoose.model('CV', cvSchema);
