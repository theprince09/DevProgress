const express = require("express");
const router = express.Router();
const axios = require("axios");

<<<<<<< HEAD
// Simple in-memory cache
const cache = {};
const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

router.get("/:username", async (req, res) => {
  const { username } = req.params;

  // Cache check
  if (cache[username] && Date.now() - cache[username].time < CACHE_TIME) {
    return res.json(cache[username].data);
  }

  try {
=======
router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
    const response = await axios.get(
      `https://leetcode-api-faisalshohag.vercel.app/${username}`
    );

<<<<<<< HEAD
    // Cache mein save karo
    cache[username] = { data: response.data, time: Date.now() };

    res.json(response.data);
  } catch (error) {
    // Cache purana data de do agar hai
    if (cache[username]) return res.json(cache[username].data);
=======
    res.json(response.data);
  } catch (error) {
    console.error(error);
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
    res.status(500).json({ message: "LeetCode fetch failed" });
  }
});

module.exports = router;