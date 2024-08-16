const { model, Schema } = require("mongoose");

module.exports = model(
  "bye",
  new Schema({
    id: String,
    webhook: {
      id: String,
      token: String,
    },
    message: String,
    timeout: Number,
  })
);
