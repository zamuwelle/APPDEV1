const name = "Spongebob"
const age = 67
const isCook = true

console.log(name, typeof name)
console.log(age, typeof age)
console.log(isCook, typeof isCook)

let x = 60, y = 7, z = 74

console.log(x + y)
console.log(z - y)

// Beedle's Type Coercion Bug Variables
const walletRupees = "100"; // String
const itemPrice = 100;      // Number
const discount = "50";      // String

// Bug #1: Adding string to string (concatenation)
const bug1 = walletRupees + discount;

// Bug #2: Subtracting string from number (forced numeric conversion)
const bug2 = itemPrice - discount;

// Bug #3: Loose vs Strict comparison
const bug3_loose = walletRupees == itemPrice;
const bug3_strict = walletRupees === itemPrice;

console.log("Bug 1 Result:", bug1);
console.log("Bug 2 Result:", bug2);
console.log("Bug 3 Loose Result:", bug3_loose);
console.log("Bug 3 Strict Result:", bug3_strict);