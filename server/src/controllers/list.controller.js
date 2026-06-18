const List = require("../models/list.schema");
//for get all list request
const getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json({
      sucess: true,
      lists: lists,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//for create a list request
const createNewList = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({
        sucess: true,
        message: "name is required",
      });
    }
    const newList = await List.create({
      name: name,
    });
    res.status(200).json({
      sucess: true,
      list: list,
      message: "List created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//edit task
const updateList = async (req, res) => {
  const { name } = req.body;
  const id = req.params.id;
  try {
    const updatedList = await List.findByIdAndUpdate(id, {
      name: name,
    });

    res.status(200).json({
      sucess: true,
      list: updatedList,
      message: "List Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteList = async (req, res) => {
  const id = req.params.id;
  try {
    await List.findByIdAndDelete(id);
    res.status(200).json({
      sucess: true,
      message: "List Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getLists,
  createNewList,
  updateList,
  deleteList,
};
