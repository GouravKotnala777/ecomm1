"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./Amazaun/routes/userRouter"));
const PORT = 8000;
const app = (0, express_1.default)();
// app.use(express.urlencoded({extended:true}));
app.use(express_1.default.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(JSON.parse())
app.use("/api/v1/user/", userRouter_1.default);
app.listen(PORT, () => {
    console.log("listening....");
});
