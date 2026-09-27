const hearts = 13
const masterSwordCheck = hearts >= 13 ? "Master Sword Claimed!" : "Need more hearts!"
console.log(masterSwordCheck) // "Pass"

const num = 7
console.log(num % 2 === 0 ? "even" : "odd") // "odd"

const user = { name: "Samuwell" } // no invetory property

console.log(user.inventory?.sheikahSlate) // undefined, no crash

const currentRupees = 0
console.log(currentRupees || 100) // 100 -- wrong! 0 is falsy, so || overrides it
console.log(currentRupees ?? 100) // 0   -- right, ?? only replaces null/undefined