const express = require("express");

const app = express();
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");
const userRoutes = require("./routes/user.route");
const roleRoutes = require("./routes/role.route");
const uploadRoutes = require("./routes/upload.route");

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get("/", logger, (req, res) => {
  res.status(200).json({
    "status": "success",
    "message": "Welcome, API is running"
  });  

});

app.use("/user", logger, userRoutes)
app.use("/role", logger, roleRoutes)
app.use("/file", logger, uploadRoutes)


// Error handler (must be last, 4-arg middleware)
app.use(errorHandler)

module.exports = app;