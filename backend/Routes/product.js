const router = require("express").Router();
const Product = require("../Models/Product");
const multer = require('multer');


const upload = multer({ dest: 'uploads/' }); 
router.get("/", async (req, res) => {
  try {
    const all = await Product.find();
    if (all.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving products", error: err });
  }
});


router.get("/category/:id", async (req, res) => {
  try {
    const all = await Product.find({ categories: { $in: [req.params.id] } });
    if (!all || all.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving products", error: err });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "No product found" });
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving product", error: err });
  }
});





router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id

    const product = await Product.findById({_id:id});
    if(product!= null)
    {
      return res.status(404).json({ message: "No products found" });

    }
   else
   {
    product = req.body
    const updatedPost = await product.save();

    res.status(200).json(product);

   }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving products", error: err });
  }
});


// Assuming `Product` is your Mongoose model
router.post("/", upload.array('images', 5), async (req, res) => {
  try {
      const productNew = req.body;
      const productImages = req.files.map(file => file.path); // Assuming Multer saves the uploaded images to req.files

      // Create a new product object with both product details and image paths
      const newProduct = new Product({
          ...productNew,
          images: productImages
      });

      // Save the new product to the database
      const savedProduct = await newProduct.save();

      res.status(200).json(savedProduct);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error creating product", error: err });
  }
}); 

router.delete('/:id', async (req, res ) => {
  console.log(req.params.id)
  try {
    const post = await Product.deleteOne({ _id: req.params.id });
    if (!post) {
      return res.status(404).json({ message: ' Product not found' });
    }

   else
   {
    await post.delete();
   }
    
    
    
  } catch (err) {
    console.error(`Error deleting review with ID ${req.params.id}: ${err}`);
  }
});


module.exports = router;
