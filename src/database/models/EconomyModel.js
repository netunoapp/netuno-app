"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("economy", new mongoose_1.Schema({
    id: String,
    currency: String,
    startBalance: Number,
    maximumBalance: Number,
}));
