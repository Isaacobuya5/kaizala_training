const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        required: true 
    },
    last_name: {
        type: String,
        trim: true,
        required: true 
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    long: {
        type: String,
        required: true,
    },
}
);

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;