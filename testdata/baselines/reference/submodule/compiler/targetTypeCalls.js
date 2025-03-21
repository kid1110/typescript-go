//// [tests/cases/compiler/targetTypeCalls.ts] ////

//// [targetTypeCalls.ts]
var fra1: (v:any)=>string = function() { return function (v:string) {return v;}; }() // should work
var fra2: (v:any)=>number = function() { return function () { return 0; } }() // should work

var fra3: (v:any)=>string = function() { return function() { return function(v) {return v;};}(); }() // should work
var fra4: (v:any)=>void = function() { return function() { return function(v) {return v;};}(); }() // should work

//// [targetTypeCalls.js]
var fra1 = function () { return function (v) { return v; }; }();
var fra2 = function () { return function () { return 0; }; }();
var fra3 = function () { return function () { return function (v) { return v; }; }(); }();
var fra4 = function () { return function () { return function (v) { return v; }; }(); }();
