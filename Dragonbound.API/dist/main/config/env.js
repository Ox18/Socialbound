"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv").config();

var _default = {
  port: process.env.PORT || 9001
};
exports.default = _default;