//// [tests/cases/conformance/types/typeRelationships/typeInference/genericCallWithConstructorTypedArguments5.ts] ////

//// [genericCallWithConstructorTypedArguments5.ts]
// Generic call with parameter of object type with member of function type of n args passed object whose associated member is call signature with n+1 args

function foo<T, U>(arg: { cb: new(t: T) => U }) {
    return new arg.cb(null);
}

var arg: { cb: new<T>(x: T) => string };
var r = foo(arg); // {}
// more args not allowed
var arg2: { cb: new <T>(x: T, y: T) => string };
var r2 = foo(arg2); // error
var arg3: { cb: new (x: string, y: number) => string };
var r3 = foo(arg3); // error

function foo2<T, U>(arg: { cb: new(t: T, t2: T) => U }) {
    return new arg.cb(null, null);
}

// fewer args ok
var r4 = foo(arg); // {}
var arg4: { cb: new (x: string) => string };
var r6 = foo(arg4); // string
var arg5: { cb: new () => string };
var r7 = foo(arg5); // string


//// [genericCallWithConstructorTypedArguments5.js]
function foo(arg) {
    return new arg.cb(null);
}
var arg;
var r = foo(arg);
var arg2;
var r2 = foo(arg2);
var arg3;
var r3 = foo(arg3);
function foo2(arg) {
    return new arg.cb(null, null);
}
var r4 = foo(arg);
var arg4;
var r6 = foo(arg4);
var arg5;
var r7 = foo(arg5);
