"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const colors_1 = require("colors");
const mongoose_1 = require("mongoose");
(0, mongoose_1.connect)(`${process.env.URI}`)
    .then(() => console.log((0, colors_1.bgMagenta)("MongoDB Connected!")))
    .catch(console.log);
