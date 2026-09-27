const values = [0, "", "Master Sword", null, undefined, [], {}]

values.forEach((val) => {
	if (val) {
		console.log(val, "-> truthy")
	} else {
		console.log(val, "-> falsy")
	}
})
// [] and {} are truthy — only the 6 falsy values above are falsy

const heroName = "samwell"
const hasShekahSlate = "potato123"

const canActivatePedestal = heroName !== "" && hasShekahSlate !== ""
console.log(canActivatePedestal) // true

const hasMiphasGrace = false
const hasFairyInPouch = true
const canSurviveLethalHit = hasMiphasGrace || hasFairyInPouch
console.log(canSurviveLethalHit) // true

console.log("" || "Traveler")               // "Traveler" (first truthy)
console.log(heroName && "Wake up, Link...") // "Wake up, Link..." (both truthy)
console.log(!canSurviveLethalHit)           // false