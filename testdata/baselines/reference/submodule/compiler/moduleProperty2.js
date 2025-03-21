//// [tests/cases/compiler/moduleProperty2.ts] ////

//// [moduleProperty2.ts]
module M {
    function f() {
        var x;
    }
    var y;
    export var z;
    var test1=x;
    var test2=y; // y visible because same module
}

module N {
    var test3=M.y; // nope y private property of M
    var test4=M.z; // ok public property of M
}

//// [moduleProperty2.js]
var M;
(function (M) {
    function f() {
        var x;
    }
    var y;
    var test1 = x;
    var test2 = y;
})(M || (M = {}));
var N;
(function (N) {
    var test3 = M.y;
    var test4 = M.z;
})(N || (N = {}));
