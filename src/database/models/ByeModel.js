"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("bye", new mongoose_1.Schema({
    id: String,
    webhook: {
        id: String,
        token: String,
    },
    message: String,
    timeout: Number,
}));
