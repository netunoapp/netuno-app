const { model, Schema } = require("mongoose");

exports.default = model(
  "messagerole",
  new Schema({
    id: String,
    users: Array,
  })
);
