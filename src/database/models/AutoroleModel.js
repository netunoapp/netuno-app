const { model, Schema } = require("mongoose");

module.exports = model(
  "autorole",
  new Schema({
    id: String,
    apps: Array,
    users: Array,
  })
);
