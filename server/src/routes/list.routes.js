const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");

const {
  getLists,
  createNewList,
  updateList,
  deleteList,
} = require("../controllers/list.controller");

router.get("/", auth, getLists);
router.post("/", auth, createNewList);
router.patch("/:id", auth, updateList);
router.delete("/:id", auth, deleteList);

module.exports = router;
