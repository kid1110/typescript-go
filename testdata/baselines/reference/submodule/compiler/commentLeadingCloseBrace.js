//// [tests/cases/compiler/commentLeadingCloseBrace.ts] ////

//// [commentLeadingCloseBrace.ts]
declare function commentedParameters(...args): any;

function ifelse() {
    if (commentedParameters(1, 2)) {
        /*comment1*/
        commentedParameters(3, 4);
        /*comment2*/
    } else {
        commentedParameters(5, 6);
    }
}

//// [commentLeadingCloseBrace.js]
function ifelse() {
    if (commentedParameters(1, 2)) {
        commentedParameters(3, 4);
    }
    else {
        commentedParameters(5, 6);
    }
}
