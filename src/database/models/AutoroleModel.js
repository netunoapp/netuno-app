"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = (0, mongoose_1.model)("autorole", new mongoose_1.Schema({
    id: String,
    apps: Array,
    users: Array,
}));
