const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware.js");
const {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controllers/habitController");

router.post("/", protect, createHabit);
router.get("/", protect, getHabits);
router.put("/:id", protect, updateHabit);
router.delete("/:id", protect, deleteHabit);

module.exports = router;
