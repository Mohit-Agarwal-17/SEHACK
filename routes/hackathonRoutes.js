const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getHackathons, getOneHackathon, postHackathons } = require("../controllers/hackathonController");

router.post("/postHack", postHackathons)
router.get("/", getHackathons);
router.get("/:id", getOneHackathon);

module.exports = router