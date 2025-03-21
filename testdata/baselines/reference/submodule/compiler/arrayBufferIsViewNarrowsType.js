//// [tests/cases/compiler/arrayBufferIsViewNarrowsType.ts] ////

//// [arrayBufferIsViewNarrowsType.ts]
var obj: Object;
if (ArrayBuffer.isView(obj)) {
    // isView should be a guard that narrows type to ArrayBufferView.
    var ab: ArrayBufferView = obj;
}

//// [arrayBufferIsViewNarrowsType.js]
var obj;
if (ArrayBuffer.isView(obj)) {
    var ab = obj;
}
