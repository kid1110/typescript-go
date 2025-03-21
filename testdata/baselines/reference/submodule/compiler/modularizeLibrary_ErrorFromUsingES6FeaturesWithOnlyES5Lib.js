//// [tests/cases/compiler/modularizeLibrary_ErrorFromUsingES6FeaturesWithOnlyES5Lib.ts] ////

//// [modularizeLibrary_ErrorFromUsingES6FeaturesWithOnlyES5Lib.ts]
// All will be error from using ES6 features but only include ES5 library
// Using Es6 array
function f(x: number, y: number, z: number) {
    return Array.from(arguments);
}

f(1, 2, 3);  // no error

// Using ES6 collection
var m = new Map<string, number>();
m.clear();
// Using ES6 iterable
m.keys();

// Using ES6 function
function Baz() { }
Baz.name;

// Using ES6 math
Math.sign(1);

// Using ES6 object
var o = {
    a: 2,
    [Symbol.hasInstance](value: any) {
        return false;
    }
};
o.hasOwnProperty(Symbol.hasInstance);

// Using Es6 proxy
var t = {}
var p = new Proxy(t, {});

// Using ES6 reflect
Reflect.isExtensible({});

// Using Es6 regexp
var reg = new RegExp("/s");
reg.flags;

// Using ES6 string
var str = "Hello world";
str.includes("hello", 0);

// Using ES6 symbol
var s = Symbol();

// Using ES6 wellknown-symbol
const o1 = {
    [Symbol.hasInstance](value: any) {
        return false;
    }
}

//// [modularizeLibrary_ErrorFromUsingES6FeaturesWithOnlyES5Lib.js]
function f(x, y, z) {
    return Array.from(arguments);
}
f(1, 2, 3);
var m = new Map();
m.clear();
m.keys();
function Baz() { }
Baz.name;
Math.sign(1);
var o = {
    a: 2,
    [Symbol.hasInstance](value) {
        return false;
    }
};
o.hasOwnProperty(Symbol.hasInstance);
var t = {};
var p = new Proxy(t, {});
Reflect.isExtensible({});
var reg = new RegExp("/s");
reg.flags;
var str = "Hello world";
str.includes("hello", 0);
var s = Symbol();
const o1 = {
    [Symbol.hasInstance](value) {
        return false;
    }
};
