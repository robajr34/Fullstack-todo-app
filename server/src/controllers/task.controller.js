const Task = require("../models/task.schema");
//for get all Tasks request
const getTasks = async (req, res) => {
  const userId = req.user.userId
  try {
    const tasks = await Task.find({user:userId});
    res.status(200).json({
      sucess: true,
      tasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//for create a task request
const createNewTask = async (req, res) => {
  const { title, description, dueDate, user } = req.body;
  try {
    if (!title || !dueDate) {
      return res.status(400).json({
        sucess: false,
        message: "Title & Due date cannot be empty",
      });
    }
    const newTask = await Task.create({
      title,
      description,
      dueDate,
      user,
    });
    res.status(200).json({
      sucess: true,
      task: newTask,
      message: "Task created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//edit task
const updateTask = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data, id);
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      sucess: true,
      task: updatedTask,
      message: "Task Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({
      sucess: true,
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getTasks,
  createNewTask,
  updateTask,
  deleteTask,
};
