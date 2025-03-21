//// [tests/cases/compiler/noImplicitAnyIndexingSuppressed.ts] ////

//// [noImplicitAnyIndexingSuppressed.ts]
enum MyEmusEnum {
    emu
}

// Should be okay; should be a string.
var strRepresentation1 = MyEmusEnum[0]

// Should be okay; should be a string.
var strRepresentation2 = MyEmusEnum[MyEmusEnum.emu]

// Should be okay, as we suppress implicit 'any' property access checks
var strRepresentation3 = MyEmusEnum["monehh"];

// Should be okay; should be a MyEmusEnum
var strRepresentation4 = MyEmusEnum["emu"];


// Should be okay, as we suppress implicit 'any' property access checks
var x = {}["hi"];

// Should be okay, as we suppress implicit 'any' property access checks
var y = {}[10];

var hi: any = "hi";

var emptyObj = {};

// Should be okay, as we suppress implicit 'any' property access checks
var z1 = emptyObj[hi];
var z2 = (<any>emptyObj)[hi];

interface MyMap<T> {
    [key: string]: T;
}

var m: MyMap<number> = {
    "0": 0,
    "1": 1,
    "2": 2,
    "Okay that's enough for today.": NaN
};

var mResult1 = m[MyEmusEnum.emu];
var mResult2 = m[MyEmusEnum[MyEmusEnum.emu]];
var mResult3 = m[hi];



//// [noImplicitAnyIndexingSuppressed.js]
var MyEmusEnum;
(function (MyEmusEnum) {
    MyEmusEnum[MyEmusEnum["emu"] = 0] = "emu";
})(MyEmusEnum || (MyEmusEnum = {}));
var strRepresentation1 = MyEmusEnum[0];
var strRepresentation2 = MyEmusEnum[MyEmusEnum.emu];
var strRepresentation3 = MyEmusEnum["monehh"];
var strRepresentation4 = MyEmusEnum["emu"];
var x = {}["hi"];
var y = {}[10];
var hi = "hi";
var emptyObj = {};
var z1 = emptyObj[hi];
var z2 = emptyObj[hi];
var m = {
    "0": 0,
    "1": 1,
    "2": 2,
    "Okay that's enough for today.": NaN
};
var mResult1 = m[MyEmusEnum.emu];
var mResult2 = m[MyEmusEnum[MyEmusEnum.emu]];
var mResult3 = m[hi];
