const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, default: "" },
  email: { type: String, unique: true },
  password: String,

  role: { type: String, default: "Aspiring Software Developer" },
  location: { type: String, default: "" },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "" },

  github: { type: String, default: "" },
  leetcode: { type: String, default: "" },

  skills: { type: [String], default: [] },
  goals: { type: [String], default: [] },
  learning: { type: [String], default: [] },

  // Education Journey
  education: [{
    school: String,
    degree: String,
    field: String,
    startYear: String,
    endYear: String,
    grade: String,
    description: String,
  }],

  // Internships & Training
  experience: [{
    company: String,
    role: String,
    type: { type: String, enum: ["Internship", "Training", "Full-time", "Part-time", "Freelance"] },
    startDate: String,
    endDate: String,
    current: Boolean,
    description: String,
  }],

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
=======

name:String,
email:{
type:String,
unique:true
},
password:String

});

module.exports =
mongoose.model("User",userSchema);
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
