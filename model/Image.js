const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    img: {
      fileName: String,
      filePath: String
    }
  },
  { timestamps: true }
);

module.exports = Image = mongoose.model("Image", imageSchema);
