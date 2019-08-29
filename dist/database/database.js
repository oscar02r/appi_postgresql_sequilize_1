"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelise = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelise = new _sequelize["default"]('prostgres', 'prostgres', '112401', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idlel: 1000
  },
  logging: false
});
exports.sequelise = sequelise;