//// [tests/cases/conformance/externalModules/topLevelAwaitErrors.6.ts] ////

//// [topLevelAwaitErrors.6.ts]
// await in exported function name should fail
export function await() {
}


//// [topLevelAwaitErrors.6.js]
export function await() {
}
