"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = 'http://localhost:3000/';
const client = axios_1.default.create({
    baseURL: url,
});
exports.default = client;
//# sourceMappingURL=client-service.js.map