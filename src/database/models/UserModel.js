const { model, Schema } = require("mongoose");

module.exports = model(
  "user",
  new Schema({
    userdata: {
      id: { type: String, required: true },
    },
    economydata: {
      dailycooldown: { type: String },
      money: { type: Number },
    },
  })
);
