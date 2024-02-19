const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const productroute = require("./Routes/product")
const categoryroute = require("./Routes/category")
const userroute = require("./Routes/auth")
const orderroute = require("./Routes/order")

const session = require("express-session");
// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL).then(console.log("DATABASE CONNECTED")).catch(err => {console.log(err)})
const conn = mongoose.connection;

// Initialize GridFS stream
let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Create storage engine for GridFS
const storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  file: (req, file) => {
    return {
      bucketName: "uploads", // Name of the bucket where the files will be stored
      filename: file.originalname, // Use the original file name as the filename
    };
  },
});

app.use(session({
  secret: 'your-secret-key', // Change this to your own secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Change this to true if using HTTPS
}));


const upload = multer({ storage });
app.use("/uploads",express.static("./uploads"))
// Upload route
app.post("/upload", upload.array("images", 10), (req, res) => {
  res.json({ message: "Images uploaded successfully" });
});

app.use("/api/product" ,productroute)
app.use("/api/category" ,categoryroute)
app.use("/api/auth" ,userroute)
app.use("/api/order" ,orderroute)

// Root route
app.get("/", async function (req, res) {
  res.send("Server is running...");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
