const express = require("express");

const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const habitRoutes = require("./routes/habits");
app.use("/api/habits", habitRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("API is running...!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
