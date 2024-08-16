const { model, Schema } = require("mongoose");

module.exports = model("welcome", new Schema({
    id: String,
    webhook: {
        id: String,
        token: String,
    },
    message: String,
    timeout: Number,
}));
