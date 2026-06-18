const express = require("express");
const router = express.Router();
const { login, signup, logout, dashboard } = require("../controllers/auth.controller");
const auth = require("../middleware/auth.middleware")

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("/dashboard",auth,  dashboard);

module.exports = router;
