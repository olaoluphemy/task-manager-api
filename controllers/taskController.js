const factory = require("./handlerFactory");
const Task = require("../models/taskModel");

exports.createTask = factory.createOne(Task);
exports.getTask = factory.getOne(Task);
exports.getAllTasks = factory.getAll(Task, (req) => {
  createdBy: {
    $eq: req.user.id;
  }
});
exports.updateTask = factory.updateOne(Task);
exports.deleteTask = factory.deleteOne(Task);
