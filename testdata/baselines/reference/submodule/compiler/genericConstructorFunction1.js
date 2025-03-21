//// [tests/cases/compiler/genericConstructorFunction1.ts] ////

//// [genericConstructorFunction1.ts]
function f1<T>(args: T) {
    var v1: { [index: string]: new (arg: T) => Date };
    var v2 = v1['test'];
    v2(args); 
    return new v2(args); // used to give error
}


interface I1<T> { new (arg: T): Date };
function f2<T>(args: T) {
    var v1: { [index: string]: I1<T> };
    var v2 = v1['test'];
    var y = v2(args); 
    return new v2(args); // used to give error
}

//// [genericConstructorFunction1.js]
function f1(args) {
    var v1;
    var v2 = v1['test'];
    v2(args);
    return new v2(args);
}
;
function f2(args) {
    var v1;
    var v2 = v1['test'];
    var y = v2(args);
    return new v2(args);
}
