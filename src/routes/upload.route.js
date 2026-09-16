const express = require("express");
const upload = require("../middleware/upload");

const router = express.Router();

router.post(
  "/upload",
  upload.single("file"),
  (req, res) => {
    console.log(req.file);

    res.json({
      message: "File uploaded successfully"
    });
  }
);

module.exports = router;