//// [tests/cases/conformance/types/typeRelationships/typeInference/genericCallWithObjectTypeArgs.ts] ////

//// [genericCallWithObjectTypeArgs.ts]
class C {
    private x: string;
}

class D {
    private x: string;
}

class X<T> {
    x: T;
}

function foo<T>(t: X<T>, t2: X<T>) {
    var x: T;
    return x;
}

var c1 = new X<C>();
var d1 = new X<D>();
var r = foo(c1, d1); // error
var r2 = foo(c1, c1); // ok

//// [genericCallWithObjectTypeArgs.js]
class C {
    x;
}
class D {
    x;
}
class X {
    x;
}
function foo(t, t2) {
    var x;
    return x;
}
var c1 = new X();
var d1 = new X();
var r = foo(c1, d1);
var r2 = foo(c1, c1);
