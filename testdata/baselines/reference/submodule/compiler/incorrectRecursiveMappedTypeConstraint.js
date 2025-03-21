//// [tests/cases/compiler/incorrectRecursiveMappedTypeConstraint.ts] ////

//// [incorrectRecursiveMappedTypeConstraint.ts]
// #17847
function sum<T extends { [P in T]: number }, K extends keyof T>(n: number, v: T, k: K) {
    n += v[k];
}


//// [incorrectRecursiveMappedTypeConstraint.js]
function sum(n, v, k) {
    n += v[k];
}
