//// [tests/cases/conformance/externalModules/moduleResolutionWithoutExtension6.ts] ////

//// [bar.cts]
// Extensionless relative path import statement in a cjs module
// Import statements are not allowed in cjs files,
// but other errors should not assume that they are allowed
import { foo } from "./foo"; // should error, should not ask for extension

//// [bar.cjs]
export {};
