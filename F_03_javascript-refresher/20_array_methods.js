const weapons = [
	{ name: "Master Sword", power: 90 },
	{ name: "Royal Claymore", power: 85 },
	{ name: "Wooden Stick", power: 15 },
]

const strongWeapons = weapons.filter(w => w.power >= 50)
console.log(strongWeapons.map(w => w.name)) // ["Master Sword", "Royal Claymore"]

const masterSword = weapons.find(w => w.name === "Master Sword")
console.log(masterSword) // { name: "Master Sword", power: 90 }

console.log(weapons.some(w => w.power < 20)) // true
console.log(weapons.every(w => w.power >= 50)) // false

const ranked = [...weapons].sort((a, b) => b.power - a.power)
console.log(ranked.map(w => w.name)) // ["Master Sword", "Royal Claymore", "Wooden Stick"]