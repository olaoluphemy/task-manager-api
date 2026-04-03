const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a task title!"],
    },
    description: {
      type: String,
      required: [true, "Please provide a task description!"],
    },
    dueDate: {
      type: Date,
      required: [true, "Please provide the task due date!"],
    },
    priority: {
      type: String,
      required: [true, "Please provide the task priority level!"],
      enum: {
        values: ["low", "medium", "high"],
        message: "Difficulty is either: low, medium, high",
      },
    },
    status: {
      type: String,
      required: [true, "Please provide the task status!"],
      enum: {
        values: ["todo", "in-progress", "done"],
        message: "Status is either: todo, in-progress, done",
      },
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
