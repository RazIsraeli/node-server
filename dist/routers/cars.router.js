"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cars_controller_1 = require("../controllers/cars.controller");
const router = express_1.default.Router();
router.get('/', cars_controller_1.getCars);
router.get('/:id', cars_controller_1.getCarById);
exports.default = router;
