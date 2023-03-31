const mongoose = require('mongoose');
const ReactFormDataSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;