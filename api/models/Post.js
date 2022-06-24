const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    Desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    authorid: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mogoose.model("posts", PostSchema);
