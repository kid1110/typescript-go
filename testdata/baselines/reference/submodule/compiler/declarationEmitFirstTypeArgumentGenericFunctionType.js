//// [tests/cases/compiler/declarationEmitFirstTypeArgumentGenericFunctionType.ts] ////

//// [declarationEmitFirstTypeArgumentGenericFunctionType.ts]
class X<A> {
}
var prop11: X< <Tany>() => Tany >; // spaces before the first type argument
var prop12: X<(<Tany>() => Tany)>; // spaces before the first type argument
function f1() { // Inferred return type
    return prop11;
}
function f2() { // Inferred return type
    return prop12;
}
function f3(): X< <Tany>() => Tany> { // written with space before type argument
    return prop11;
}
function f4(): X<(<Tany>() => Tany)> { // written type with parenthesis
    return prop12;
}
class Y<A, B> {
}
var prop2: Y<string[], <Tany>() => Tany>; // No space after second type argument
var prop2: Y<string[], <Tany>() => Tany>; // space after second type argument
var prop3: Y< <Tany>() => Tany, <Tany>() => Tany>; // space before first type argument
var prop4: Y<(<Tany>() => Tany), <Tany>() => Tany>; // parenthesized first type argument


//// [declarationEmitFirstTypeArgumentGenericFunctionType.js]
class X {
}
var prop11;
var prop12;
function f1() {
    return prop11;
}
function f2() {
    return prop12;
}
function f3() {
    return prop11;
}
function f4() {
    return prop12;
}
class Y {
}
var prop2;
var prop2;
var prop3;
var prop4;
