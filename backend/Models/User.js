// models/User.js
const mongoose = require('mongoose');
const Product = require("./Product")
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    address: String,
    cart: {
        products: [{
            name: { type: String, required: true }, // Name of the product
            image: { type: String, required: true }, // Name of the product
            price: { type: Number, required: true }, // Price of the product
            quantity: { type: Number, default: 1 }
        }],
        totalQuantity: { type: Number, default: 0 },
        totalPrice: { type: Number, default: 0 }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
    