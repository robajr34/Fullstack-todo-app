const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  getTasks,
  createNewTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/", auth, getTasks);
router.post("/new", auth, createNewTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;
