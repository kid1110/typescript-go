//// [tests/cases/compiler/noDefaultLib.ts] ////

//// [noDefaultLib.ts]
/// <reference no-default-lib="true"/>
var x;

interface Array {}
interface String {}
interface Number {}
interface Object {}
interface Date {}
interface Function {}
interface RegExp {}

//// [noDefaultLib.js]
var x;
