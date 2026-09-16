const express = require("express");
const router = express.Router();
const {finalRegister, login} = require("../controllers/user");
const {validate} = require("../middleware/validate")
const {registerSchema} = require("../validators/reg")
const {loginSchema} = require("../validators/login")
// const {validateRegister} = require("../validators/reg")
// const {validateLogin} = require("../validators/login")
// const {validateRegister} = require("../validators/reg")
// const {validateLogin} = require("../validators/login")

router.post("/register", validate(registerSchema), finalRegister);
router.post("/login", validate(loginSchema), login);



module.exports = router;