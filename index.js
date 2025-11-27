require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

// Middleware
app.use(express.json());

const cors = require("cors");
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)  
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err)); 

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
