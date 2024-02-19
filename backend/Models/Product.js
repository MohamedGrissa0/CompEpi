const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        price: {
            type: Number, 
        },
        weight: {
            type: Number, 
        },
        orders: {
            type: Number, 
        },
        priced: {
            type: String,
        },
        visibility: {
            type: Boolean,
        },
        qte: {
            type: Number, 
        },
        orders: {
            type: Number, 
        },
        creationdate	: {
            type: Date, 
        },
        categories: { 
            type: String,
        },
            variants: { 
                type: [],
            },
            images: { 
                type: [],
            },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
