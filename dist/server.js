"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, 'public')));
}
else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
        credentials: true
    };
    app.use((0, cors_1.default)(corsOptions));
}
const cars_router_1 = __importDefault(require("./routers/cars.router"));
const users_router_1 = __importDefault(require("./routers/users.router"));
app.use('/api/cars', cars_router_1.default);
app.use('/api/users', users_router_1.default);
app.get('/', (rea, res) => {
    res.send('Hello from Express! Our cars and users apis are available for you at "api/cars" and "api/users"');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
