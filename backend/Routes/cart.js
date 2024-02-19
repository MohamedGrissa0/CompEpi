const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const Product = require('../Models/Product');

// Get cart by user ID
router.get('/:userId/cart', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user.cart);
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add item to cart
router.post('/:userId/cart/add', async (req, res) => {
    const productId = req.body.item._id;
    const quantity = req.body.item.quantity;
    console.log(req.body);
    try {
        // Check if product exists
        const product = await Product.findById(productId);
        console.log(product);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Find or create user
        let user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if item already exists in cart
        const existingItemIndex = user.cart.items.findIndex(item => String(item.productId) === productId);
        if (existingItemIndex !== -1) {
            user.cart.items[existingItemIndex].quantity += quantity;
        } else {
            user.cart.items.push({ productId, quantity });
        }

        // Recalculate total price based on the items in the cart
        user.cart.totalPrice = user.cart.items.reduce((total, item) => {
            const itemPrice = item.quantity * product.price;
            return total + itemPrice;
        }, 0);

        // Save user
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Remove item from cart
router.delete('/:userId/cart/remove/:itemId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Find index of item in cart items array
        const itemIndex = user.cart.items.findIndex(item => String(item._id) === req.params.itemId);
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Item not found in cart' });
        }

        // Remove item from cart
        const removedItem = user.cart.items.splice(itemIndex, 1)[0];

        // Update total price
        const product = await Product.findById(removedItem.productId);
        user.cart.totalPrice -= product.price * removedItem.quantity;

        // Save user
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
