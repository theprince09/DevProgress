const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://prince:prince123@cluster0.q1rfj9m.mongodb.net/devprogress"
)
.then(() => {
  console.log("✅ MongoDB Atlas connected");
})
.catch((err) => {
  console.log("❌ MongoDB connection error:", err);
});
app.use("/api/auth",authRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});