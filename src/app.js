const express = require("express");

const app = express();
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const userRoutes = require("./routes/user.route");
// const roleRoutes = require("./routes/role.route");

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get("/", logger, errorHandler, (req, res) => {
  res.status(200).json({
    "status": "success",
    "message": "Welcome, API is running"
  });  

});

app.use("/user", logger, errorHandler, userRoutes)
// app.use("/role", logger, roleRoutes)



module.exports = app;