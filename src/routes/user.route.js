const express = require("express");
const router = express.Router();
const {emailSent} = require("../controllers/user");
const {register, login} = require("../middleware/validation");

router.post("/register", register,  emailSent);
router.post("/login", login);



module.exports = router;