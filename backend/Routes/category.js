const router = require("express").Router();
const Category = require("../Models/Category");
const multer = require('multer');


const upload = multer({ dest: 'uploads/' }); 
router.get("/", async (req, res) => {
  try {
    const all = await Category.find();
    if (all.length === 0) {
      return res.status(404).json({ message: "No Categorys found" });
    }
    res.status(200).json(all);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving Categorys", error: err });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id

    const all = await Category.find({_id:id});
    if (all!=null) {
      return res.status(404).json({ message: "No Categorys found" });
    }
    else
{
      res.status(200).json(all);

}
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving Categorys", error: err });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id

    const Category = await Category.findById({_id:id});
    if(Category!= null)
    {
      return res.status(404).json({ message: "No Categorys found" });

    }
   else
   {
    Category = req.body
    const updatedPost = await Category.save();

    res.status(200).json(Category);

   }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving Categorys", error: err });
  }
});


// Assuming `Category` is your Mongoose model
router.post("/", upload.array('images', 5), async (req, res) => {
    try {
        const CategoryNew = req.body;
        const CategoryImages = req.files.map(file => file.path); // Assuming Multer saves the uploaded images to req.files
console.log(CategoryNew)
        // Create a new Categocry object with both Category details and image paths
        const newCategory = new Category({
            ...CategoryNew,
            images: CategoryImages
        });

        // Save the new Category to the database
        const savedCategory = await newCategory.save();

        res.status(200).json(savedCategory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating Category", error: err });
    }
});

router.delete('/:id', async (req, res ) => {
  console.log(req.params.id)
  try {
    const post = await Category.deleteOne({ _id: req.params.id });
    if (!post) {
      return res.status(404).json({ message: ' Category not found' });
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
