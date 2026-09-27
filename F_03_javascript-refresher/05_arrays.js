const favoriteFoods = ["Pumpkin Stew", "Baked Apples", "Roasted Bass"]

favoriteFoods.push("Toasty Hylian Shroom") // ["Pumpkin Stew", "Baked Apples", "Roasted Bass", "Toasty Hylian Shroom"]
favoriteFoods.shift() // ["Baked Apples", "Roasted Bass", "Toasty Hylian Shroom"]


for (const food of favoriteFoods) {
	console.log(food)
}

const liked = favoriteFoods.map(food => `I like ${food}`)
console.log(liked)