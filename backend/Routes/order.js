const express = require('express');
const router = express.Router();
const Order = require('../Models/Order');

// Create a new order
router.post('/', async (req, res) => {
  try {
    const existingOrder = await Order.findOne({
      products: req.body.products,
      userId: req.body.userId,
      shippingAddress: req.body.shippingAddress,
      phoneNumber: req.body.phoneNumber
    });

    if (existingOrder) {
      // If an order with the same criteria exists, return an error
      return res.status(400).json({ error: "Order already exists" });
    }

    // If no existing order found, create a new one
    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:orderId/status', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
console.log(status)
  try {
      // Find the order by ID
      const order = await Order.findById(orderId);
      if (!order) {
          return res.status(404).json({ error: 'Order not found' });
      }

      // Update the status
      order.status = status;
      await order.save();

      // Return the updated order
      res.json(order);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all orders
router.get('/:id', async (req, res) => {
  try {
    const orders = await Order.find({status:req.params.id});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single order by ID
router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const order = await Order.find({});
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Update an order status
router.patch('/:orderId', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, { status: req.body.status }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an order
router.delete('/:orderId', async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
