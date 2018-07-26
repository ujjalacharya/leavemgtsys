const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bloodgroup: {
        type: String
    }
})

module.exports = User = mongoose.model('users', UserSchema);