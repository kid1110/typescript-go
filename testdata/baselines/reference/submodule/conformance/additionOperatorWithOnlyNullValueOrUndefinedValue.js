//// [tests/cases/conformance/expressions/binaryOperators/additionOperator/additionOperatorWithOnlyNullValueOrUndefinedValue.ts] ////

//// [additionOperatorWithOnlyNullValueOrUndefinedValue.ts]
// bug 819721
var r1 = null + null;
var r2 = null + undefined;
var r3 = undefined + null;
var r4 = undefined + undefined;

//// [additionOperatorWithOnlyNullValueOrUndefinedValue.js]
var r1 = null + null;
var r2 = null + undefined;
var r3 = undefined + null;
var r4 = undefined + undefined;
