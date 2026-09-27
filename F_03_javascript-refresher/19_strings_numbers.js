const raw = "  Samwell Champion  "
const clean = raw.trim()

const [first, last] = clean.split(" ")
console.log(first.toUpperCase()) // "SAMWELL"
console.log(clean.includes("Champion")) // true
console.log(clean.slice(0, 7)) // "Samwell"
console.log(`Full name: ${first} ${last}`)

console.log(parseInt("120fps"))   // 120
console.log((49.9999).toFixed(2)) // "50.00"

const result = "shield" / 2
console.log(result)               // NaN
console.log(Number.isNaN(result)) // true