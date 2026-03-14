const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    const response = await axios.get(
      `https://leetcode-api-faisalshohag.vercel.app/${username}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "LeetCode fetch failed" });
  }
});

module.exports = router;