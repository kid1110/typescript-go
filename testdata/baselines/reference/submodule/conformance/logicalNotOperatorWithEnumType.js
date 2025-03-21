//// [tests/cases/conformance/expressions/unaryOperators/logicalNotOperator/logicalNotOperatorWithEnumType.ts] ////

//// [logicalNotOperatorWithEnumType.ts]
// ! operator on enum type

enum ENUM { A, B, C };
enum ENUM1 { };

// enum type var
var ResultIsBoolean1 = !ENUM;

// enum type expressions
var ResultIsBoolean2 = !ENUM["B"];
var ResultIsBoolean3 = !(ENUM.B + ENUM["C"]);

// multiple ! operators
var ResultIsBoolean4 = !!ENUM;
var ResultIsBoolean5 = !!!(ENUM["B"] + ENUM.C);

// miss assignment operators
!ENUM;
!ENUM1;
!ENUM.B;
!ENUM, ENUM1;

//// [logicalNotOperatorWithEnumType.js]
var ENUM;
(function (ENUM) {
    ENUM[ENUM["A"] = 0] = "A";
    ENUM[ENUM["B"] = 1] = "B";
    ENUM[ENUM["C"] = 2] = "C";
})(ENUM || (ENUM = {}));
;
var ENUM1;
(function (ENUM1) {
})(ENUM1 || (ENUM1 = {}));
;
var ResultIsBoolean1 = !ENUM;
var ResultIsBoolean2 = !ENUM["B"];
var ResultIsBoolean3 = !(ENUM.B + ENUM["C"]);
var ResultIsBoolean4 = !!ENUM;
var ResultIsBoolean5 = !!!(ENUM["B"] + ENUM.C);
!ENUM;
!ENUM1;
!ENUM.B;
!ENUM, ENUM1;
