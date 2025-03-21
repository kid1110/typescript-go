//// [tests/cases/compiler/unusedLocalsInMethod4.ts] ////

//// [unusedLocalsInMethod4.ts]
function f<T, NonNull extends {}>() {
    let x1: number[]; // should error
    let x2: number[] | null; // should error
    let x3: number[] | undefined; // should not error
    let x4: number[] | undefined | null; // should not error
    let x5!: number[]; // should not error
    let x6: any; // should not error
    let x7: unknown; // should not error
    let x8: T; // should error
    let x9: NonNull; // should error
    var x10: NonNull; // should not error
    let x11: NonNull; // should not error

    function foo() {
        console.log(x1);
        console.log(x2);
        console.log(x3);
        console.log(x4);
        console.log(x5);
        console.log(x6);
        console.log(x7);
        console.log(x8);
        console.log(x9);
        console.log(x10);
        console.log(x11);
    }
    function bar() {
        x11 = {} as any;
    }
    foo();
}

function f2<T, NonNull extends {}>() {
    let x1: number[]; // should error
    let x2: number[] | null; // should error
    let x3: number[] | undefined; // should not error
    let x4: number[] | undefined | null; // should not error
    let x5!: number[]; // should not error
    let x6: any; // should not error
    let x7: unknown; // should not error
    let x8: T; // should error
    let x9: NonNull; // should error

    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);
    console.log(x5);
    console.log(x6);
    console.log(x7);
    console.log(x8);
    console.log(x9);
}

function f3() {
    let x: number[];    // should error
    function foo() {
        x.toString();
    }
    foo();
}

function f4() {
    let x: number;  // should error
    return {
        foo() {
            return x.toString();
        }
    };
}

declare let x: number;  // should not error
function f5() {
    x.toString();
}
export default {};

function f6() {
    let key: string;    // should not error
    for (key in {}) {
        console.log(key);
    }
}

function f7() {
    let key: string;    // should not error
    for (key of []) {
        console.log(key);
    }
}

function f8() {
    function ff() {
        let _;
        let rest: {}; // should not error

        [_, ...rest] = bar();
    }
}
declare function bar(): [number, ...string[]];

function f9() {  
    const x: number; // should have only one error
    function bar() {  
        let y = x;  
    }  
}  


function rw() {
    let i: number;  // should error
    function inside() {
        i++;
        console.log(i); // NaN
    }
    inside();
}
rw();

function createBinder() {
    var file: string;   // should not error

    function bindSourceFile(f: string) {
        file = f;

        file.toString();
    }
}

function transformClassFields() {
    enum ClassPropertySubstitutionFlags {
        ClassAliases = 1 << 0,
        ClassStaticThisOrSuperReference = 1 << 1,
    }

    let enabledSubstitutions: ClassPropertySubstitutionFlags;   // should error

    function enableSubstitutionForClassAliases() {
        enabledSubstitutions |= ClassPropertySubstitutionFlags.ClassAliases;

        enabledSubstitutions.toString();
    }
}

//// [unusedLocalsInMethod4.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f() {
    let x1;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    var x10;
    let x11;
    function foo() {
        console.log(x1);
        console.log(x2);
        console.log(x3);
        console.log(x4);
        console.log(x5);
        console.log(x6);
        console.log(x7);
        console.log(x8);
        console.log(x9);
        console.log(x10);
        console.log(x11);
    }
    function bar() {
        x11 = {};
    }
    foo();
}
function f2() {
    let x1;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);
    console.log(x5);
    console.log(x6);
    console.log(x7);
    console.log(x8);
    console.log(x9);
}
function f3() {
    let x;
    function foo() {
        x.toString();
    }
    foo();
}
function f4() {
    let x;
    return {
        foo() {
            return x.toString();
        }
    };
}
function f5() {
    x.toString();
}
exports.default = {};
function f6() {
    let key;
    for (key in {}) {
        console.log(key);
    }
}
function f7() {
    let key;
    for (key of []) {
        console.log(key);
    }
}
function f8() {
    function ff() {
        let _;
        let rest;
        [_, ...rest] = bar();
    }
}
function f9() {
    const x;
    function bar() {
        let y = x;
    }
}
function rw() {
    let i;
    function inside() {
        i++;
        console.log(i);
    }
    inside();
}
rw();
function createBinder() {
    var file;
    function bindSourceFile(f) {
        file = f;
        file.toString();
    }
}
function transformClassFields() {
    let ClassPropertySubstitutionFlags;
    (function (ClassPropertySubstitutionFlags) {
        ClassPropertySubstitutionFlags[ClassPropertySubstitutionFlags["ClassAliases"] = 1] = "ClassAliases";
        ClassPropertySubstitutionFlags[ClassPropertySubstitutionFlags["ClassStaticThisOrSuperReference"] = 2] = "ClassStaticThisOrSuperReference";
    })(ClassPropertySubstitutionFlags || (ClassPropertySubstitutionFlags = {}));
    let enabledSubstitutions;
    function enableSubstitutionForClassAliases() {
        enabledSubstitutions |= ClassPropertySubstitutionFlags.ClassAliases;
        enabledSubstitutions.toString();
    }
}
