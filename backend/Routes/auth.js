const router = require("express").Router();
const User = require("../Models/User");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Product = require('../Models/Product');



// Registration endpoint
router.post('/register', async (req, res) => {
  try {
      const { username, password, email } = req.body;

      // Check if user already exists
      const userExist = await User.findOne({ email: email });
      if (userExist) {
          return res.status(400).json({ error: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
          username: username,
          password: hashedPassword,
          email: email,
      });

      // Save user to the database
      await newUser.save();

      // Generate JWT token

      // Send token in response
      res.status(200).json({ message: "Account Created" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      // Find user in "database"
      const user = await User.findOne({ email: email });
      if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign({ email: email }, 'your-secret-key', { expiresIn: '24h' }); // Change 'your-secret-key' to your actual secret key
      user.token = token
      await user.save();

      // Send token in response
      res.json({ token: token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/logout', (req, res) => {
  try {
      req.session.destroy((err) => {
          if (err) {
              console.error('Error destroying session:', err);
              return res.status(500).json({ error: 'Internal Server Error' });
          }
          res.json({ message: 'Logout successful' });
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/profile', async (req, res) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (token) {
        try {
            // Find the user in the database using the token
            const user = await User.findOne({ token: token });
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            // If user is found, send the user information in the response
            return res.json({ message: 'Profile accessed successfully', user: user });
        } catch (error) {
            // Handle token verification errors
            console.error('Token verification failed:', error);
            return res.status(401).json({ error: 'Unauthorized' });
        }
    } else {
        // Token not found in headers
        return res.status(401).json({ error: 'Unauthorized' });
    }
});


router.put('/update', async (req, res) => {
    try {
        const { id, username, email, password } = req.body;
        
        // You may want to add validation logic for username, email, and password here

        // Update email and password in the database
        const user = await User.findById(id); // Use findById without object
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        // Update user fields
        user.username = username;
        user.email = email;
        user.password = await bcrypt.hash(password, 10); // Hash the new password

        // Save the updated user object
        await user.save();

        // If the email and password are successfully updated, send success response
        res.json({ message: 'Email and password updated successfully' });
    } catch (error) {
        console.error('Error updating email and password:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});












// Get cart by user ID
router.get('/:userId/cart', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user.cart);
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Add item to cart
router.post('/:userId/cart/add', async (req, res) => {
    const { quantity, _id } = req.body.item; // Extract productId and quantity from req.body.item
    console.log(req.body);
    try {
        // Check if product exists
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Find or create user
        let user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if item already exists in cart
        const existingItem = user.cart.products.find(item => String(item._id) === String(_id));
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            user.cart.products.push({ _id, name: product.name, price: product.price, quantity , image:product.images[0] });
        }

        // Recalculate total quantity and total price based on the items in the cart
        user.cart.totalQuantity = user.cart.products.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        
        user.cart.totalPrice = user.cart.products.reduce((total, item) => {
            const itemPrice = item.quantity * item.price;
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

        // Find index of item in cart products array
        const itemIndex = user.cart.products.findIndex(item => String(item._id) === req.params.itemId);
        if (itemIndex === -1) {
            return res.status(404).json({ error: 'Item not found in cart' });
        }

        // Remove item from cart
        user.cart.products.splice(itemIndex, 1);

        // Recalculate total quantity and total price based on the items in the cart
        user.cart.totalQuantity = user.cart.products.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        
        user.cart.totalPrice = user.cart.products.reduce((total, item) => {
            const itemPrice = item.quantity * item.price;
            return total + itemPrice;
        }, 0);

        // Save user
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await User.find({})
        res.json(user);
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




module.exports = router;