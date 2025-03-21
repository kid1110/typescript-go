//// [tests/cases/compiler/hidingCallSignatures.ts] ////

//// [hidingCallSignatures.ts]
interface C {
    new (a: string): string;
}

interface D extends C {
    (a: string): number; // Should be ok
}

interface E {
    (a: string): {};
}

interface F extends E {
    (a: string): string;
}

var d: D;
d(""); // number
new d(""); // should be string

var f: F;
f(""); // string

var e: E;
e(""); // {}

//// [hidingCallSignatures.js]
var d;
d("");
new d("");
var f;
f("");
var e;
e("");
