const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:username", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${req.params.username}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching GitHub data" });
  }
});

module.exports = router;