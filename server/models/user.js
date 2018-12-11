const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true}
}, {timestamps: true});

mongoose.model('User', UserSchema);
const User = mongoose.model('User');

module.exports = User;