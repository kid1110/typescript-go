//// [tests/cases/compiler/alwaysStrictModule6.ts] ////

//// [alwaysStrictModule6.ts]
// Targeting ES5
export const a = 1; 

//// [alwaysStrictModule6.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 1;
