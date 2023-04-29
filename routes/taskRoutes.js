const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { addTask, deleteTask } = require("../controllers/taskController");

router.post("/", addTask)
router.delete("/", deleteTask)

module.exports = router;
