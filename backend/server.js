<<<<<<< HEAD
require("dotenv").config();
=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const githubRoutes = require("./routes/github");
const leetcodeRoutes = require("./routes/leetcode");
const certificateRoutes = require("./routes/certificate");
<<<<<<< HEAD
const aiRoutes = require("./routes/ai");
const profileRoutes = require("./routes/profile");

=======
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1

const app = express();

app.use(cors());
<<<<<<< HEAD
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

/* ROUTES */
=======
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

/* ROUTES */

>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/certificate", certificateRoutes);
<<<<<<< HEAD
app.use("/api/ai", aiRoutes);
app.use("/api/profile", profileRoutes);

/* SERVER */
app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Server running on port 5000");
=======

/* SERVER */

app.listen(5000, () => {
console.log("🚀 Server running on port 5000");
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
});