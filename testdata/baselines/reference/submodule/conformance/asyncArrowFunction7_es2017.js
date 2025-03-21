//// [tests/cases/conformance/async/es2017/asyncArrowFunction/asyncArrowFunction7_es2017.ts] ////

//// [asyncArrowFunction7_es2017.ts]
var bar = async (): Promise<void> => {
  // 'await' here is an identifier, and not an await expression.
  var foo = async (a = await): Promise<void> => {
  }
}

//// [asyncArrowFunction7_es2017.js]
var bar = async () => {
    var foo = async (a = await ) => {
    };
};
