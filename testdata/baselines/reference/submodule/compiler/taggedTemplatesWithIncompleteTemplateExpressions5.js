//// [tests/cases/compiler/taggedTemplatesWithIncompleteTemplateExpressions5.ts] ////

//// [taggedTemplatesWithIncompleteTemplateExpressions5.ts]
function f(x: TemplateStringsArray, y: string, z: string) {
}

// Incomplete call, but too many parameters.
f `123qdawdrqw${ 1 }${ 2 }${ 

//// [taggedTemplatesWithIncompleteTemplateExpressions5.js]
function f(x, y, z) {
}
f `123qdawdrqw${1}${2}${;
