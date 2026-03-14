const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const githubRoutes = require("./routes/github");
const leetcodeRoutes = require("./routes/leetcode");
const certificateRoutes = require("./routes/certificate");

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

/* ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/leetcode", leetcodeRoutes);
app.use("/api/certificate", certificateRoutes);

/* SERVER */

app.listen(5000, () => {
console.log("🚀 Server running on port 5000");
});