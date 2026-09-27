function spendRupees(balance, cost) {
	if (balance < cost) {
		throw new Error("Not enough rupees to purchase item!")
	}
	return balance - cost
}

try {
	console.log(spendRupees(20, 100))
} catch (error) {
	console.log("Purchase failed:", error.message)
}

const heroSave = { name: "Samwell", hearts: 13, isChampion: true }

const jsonString = JSON.stringify(heroSave)
console.log(jsonString) // '{"name":"Samwell","hearts":13,"isChampion":true}'

const parsedHero = JSON.parse(jsonString)
console.log(parsedHero.name) // "Samwell"
console.log(typeof jsonString, typeof parsedHero) // string object