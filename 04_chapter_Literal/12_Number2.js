let million = 1_000_000;
let binary = 0b1111_1111;
let hexSeparator = 0xFF_FF_FF;
console.log("million: ", million);
console.log("binary: ", binary);
console.log("hexSeparator: ", hexSeparator);
//BigInt literals are created by appending 'n' to the end of an integer or by using the BigInt constructor. They can represent integers larger than 2^53 - 1, which is the limit for the Number type in JavaScript.     

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

//-Infinity
console.log("-Infinity:", -Infinity);         // -Infinity
//NaN - result of invalid math
console.log("NaN: ", NaN);                       // NaN
console.log("typeof NaN:", typeof NaN);         // "number"
console.log("0/0: ", 0/0);                       // NaN