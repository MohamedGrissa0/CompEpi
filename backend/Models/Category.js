const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
    
        visibility: {
            type: Boolean,
        },
       
        products: { 
            type: [],
        },
           
        images: { 
            type: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
