const { model, Schema } = require("mongoose");

exports.default = model(
  "ban",
  new Schema({
    id: String,
    reason: String,
  })
);
