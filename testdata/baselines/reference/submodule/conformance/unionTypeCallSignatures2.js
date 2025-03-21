//// [tests/cases/conformance/types/union/unionTypeCallSignatures2.ts] ////

//// [unionTypeCallSignatures2.ts]
interface A {
    (x: number): number;
    (x: string, y?: string): boolean;
    (x: Date): void;
    <T>(x: T[]): T[];
}

interface B {
    (x: number): number;
    (x: string): string;
    (x: Date): void;
    <T>(x: T[]): T[];
}

interface C {
    (x: string, ...y: string[]): number;
    (x: number, s?: string): number;
    <T>(x: T[]): T[];
}

var f1: A | B | C;
var n1 = f1(42);             // number
var s1 = f1("abc");          // boolean | string | number
var a1 = f1([true, false]);  // boolean[]

var f2: C | B | A;
var n2 = f2(42);             // number
var s2 = f2("abc");          // number | string | boolean
var a2 = f2([true, false]);  // boolean[]

var f3: B | A | C;
var n3 = f3(42);             // number
var s3 = f3("abc");          // string | boolean | number
var a3 = f3([true, false]);  // boolean[]



//// [unionTypeCallSignatures2.js]
var f1;
var n1 = f1(42);
var s1 = f1("abc");
var a1 = f1([true, false]);
var f2;
var n2 = f2(42);
var s2 = f2("abc");
var a2 = f2([true, false]);
var f3;
var n3 = f3(42);
var s3 = f3("abc");
var a3 = f3([true, false]);
