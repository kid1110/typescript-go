//// [tests/cases/compiler/classMemberInitializerScoping.ts] ////

//// [classMemberInitializerScoping.ts]
var aaa = 1;
class CCC {
    y: number = aaa;
    static staticY: number = aaa; // This shouldnt be error
    constructor(aaa) {
        this.y = ''; // was: error, cannot assign string to number
    }
}

// above is equivalent to this:
var aaaa = 1;
class CCCC {
    y: any;
    constructor(aaaa) {
        this.y = aaaa;
        this.y = '';
    }
}
 


//// [classMemberInitializerScoping.js]
var aaa = 1;
class CCC {
    y = aaa;
    static staticY = aaa;
    constructor(aaa) {
        this.y = '';
    }
}
var aaaa = 1;
class CCCC {
    y;
    constructor(aaaa) {
        this.y = aaaa;
        this.y = '';
    }
}
