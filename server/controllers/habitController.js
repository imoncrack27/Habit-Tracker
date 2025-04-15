const Habit = require("../models/Habit");

exports.createHabit = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newHabit = new Habit({ title, description, user: req.user });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    if (!habit) return res.status(404).json({ message: "Habit not found" });
    res.json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });
    if (!habit) return res.status(404).json({ message: "Habit not found" });
    res.json({ message: "Habit deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
