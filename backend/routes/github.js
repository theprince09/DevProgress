const express = require("express");
const router = express.Router();
const axios = require("axios");

<<<<<<< HEAD
// Simple cache
const cache = {};
const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

router.get("/:username", async (req, res) => {
  const { username } = req.params;

  // Cache check
  if (cache[username] && Date.now() - cache[username].time < CACHE_TIME) {
    return res.json(cache[username].data);
  }

  try {
    const headers = {};
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      { headers }
    );

    cache[username] = { data: response.data, time: Date.now() };
    res.json(response.data);

  } catch (error) {
    if (cache[username]) return res.json(cache[username].data);
    console.error("GitHub error:", error.response?.status, error.response?.data?.message);
    res.status(500).json({ message: "GitHub fetch failed" });
=======
router.get("/:username", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${req.params.username}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching GitHub data" });
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
  }
});

module.exports = router;