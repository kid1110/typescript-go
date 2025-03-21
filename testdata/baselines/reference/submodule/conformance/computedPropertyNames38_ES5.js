//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames38_ES5.ts] ////

//// [computedPropertyNames38_ES5.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    [s: string]: Foo2;

    // Computed properties
    get [1 << 6]() { return new Foo }
    set [1 << 6](p: Foo2) { }
}

//// [computedPropertyNames38_ES5.js]
class Foo {
    x;
}
class Foo2 {
    x;
    y;
}
class C {
    get [1 << 6]() { return new Foo; }
    set [1 << 6](p) { }
}
