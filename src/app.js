"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var main_1 = __importDefault(require("./main"));
require("./index.css");
var rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
client_1.default.createRoot(rootElement).render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(main_1.default, null)));
