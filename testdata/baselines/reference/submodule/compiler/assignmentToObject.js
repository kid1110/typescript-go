//// [tests/cases/compiler/assignmentToObject.ts] ////

//// [assignmentToObject.ts]
var a = { toString: 5 };
var b: {} = a;  // ok
var c: Object = a;  // should be error


//// [assignmentToObject.js]
var a = { toString: 5 };
var b = a;
var c = a;
