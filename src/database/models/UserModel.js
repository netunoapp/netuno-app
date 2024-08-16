const { model, Schema } = require("mongoose");

module.exports = model(
  "user",
  new Schema({
    id: String,
    lang: String,
  })
);
