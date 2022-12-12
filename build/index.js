"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//install @types/express or you will have an error
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware to transform req.body into a json
const PORT = 3000; // declare PORT for the localhost
app.get('/ping', (_req, res) => {
    //To soluce the NoUnusualParameters: true use "_" behind of req 
    console.log('someone ping here!!!');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
