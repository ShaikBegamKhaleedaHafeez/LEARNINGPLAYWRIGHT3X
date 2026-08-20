//numbers are ALWAYS of type number in javascript
//1. INTEGER LITERALS
//Decimal (Base 10) - most common
let decimalLiteral = 42;
console.log("Decimal literal: " + decimalLiteral);
//binary (Base 2) - prefix with 0b or 0B
let binaryLiteral = 0b101010;
console.log("Binary literal: " + binaryLiteral);
//octal (Base 8) - prefix with 0o or 0O
let octalLiteral = 0o52;
console.log("Octal literal: " + octalLiteral);
//hexadecimal (Base 16) - prefix with 0x or 0X
let hexadecimalLiteral = 0x2A;
console.log("Hexadecimal literal: " + hexadecimalLiteral);

//2. FLOATING POINT LITERALS
let float1 = 3.14
let float2 = -0.2
let float3 = .5
let float4 = 2.
console.log("Float 3.14: "+float1);
console.log("Float -0.2: "+float2);
console.log("Float .5: " + float3);
console.log("Float 2."+float4);

//3. Exponential Notation
let exp1 = 1.5e3;
let exp2 = 1.5e-3;
let exp3 = 2E10;
console.log("Exponential 1.5e3: "+exp1);
console.log("Exponential 1.5e-3: "+exp2);
console.log("Exponential 2E10: "+exp3);
