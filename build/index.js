"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//install @types/express or you will have an error
const express_1 = __importDefault(require("express"));
//importing routes
const songRoutes_1 = __importDefault(require("./src/routes/songRoutes"));
//NPM RUN DEV TO START //////
//Initializations
const app = (0, express_1.default)();
//Settings
const PORT = 3000; // declare PORT for the localhost
app.set('port', process.env.PORT || PORT);
//Middlewares
app.use(express_1.default.json()); // middleware to transform req.body into a json
app.use(express_1.default.urlencoded({ extended: false }));
//Routes
app.get('/ping', (_req, res) => {
    //To soluce the NoUnusualParameters: true use "_" behind of req 
    console.log('someone ping here!!!');
    res.send('pong');
});
app.use('/api/songs', songRoutes_1.default);
//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
