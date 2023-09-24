"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DAY: () => DAY,
  HOUR: () => HOUR,
  MINUTE: () => MINUTE,
  SECOND: () => SECOND,
  WEEK: () => WEEK,
  isNotNumber: () => isNotNumber
});
module.exports = __toCommonJS(src_exports);

// src/constants/TimeStamp.ts
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;

// src/index.ts
var isNotNumber = (val) => {
  return typeof val !== "number" || isNaN(val);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DAY,
  HOUR,
  MINUTE,
  SECOND,
  WEEK,
  isNotNumber
});
