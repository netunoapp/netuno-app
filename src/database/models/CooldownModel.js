"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("cooldown", new mongoose_1.Schema({
    id: String,
    cooldown: {
        type: Map,
        of: Date,
        default: new Map()
    }
}));
