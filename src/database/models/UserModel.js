const { model, Schema } = require("mongoose");

module.exports = model(
    "user",
    new Schema({
      userdata: {
        id: { type: string, required: true }
      },
      economydata: {
        dailycooldown:{ type: string },
        money: { type: string }
      }
    })
  );
  