const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { Timestamp: true }
); // Automatically add createdAt and updatedAt fields)

module.exports = mongoose.model("Habit", habitSchema);
