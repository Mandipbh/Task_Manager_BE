const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require('dotenv');
const authRoutes =require("./routes/authRoutes")
const taskRoutes =require("./routes/taskRoutes")


const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.use("/auth", authRoutes);
app.use("/tasks",taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
