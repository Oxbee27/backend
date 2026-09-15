// const register = require("../middleware/validation");

const emailSent = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Congratulations! Your account has been created successfully. Please check your email to verify your account.",
  });
};



module.exports = {emailSent};