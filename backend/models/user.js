const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Otros campos que desees para el modelo de usuario
});

const User = mongoose.model('User', userSchema);

module.exports = User;
