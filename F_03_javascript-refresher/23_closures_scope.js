if (true) {
	let shrineTreasure = "Spirit Orb"
	console.log(shrineTreasure) // works fine
}

try {
	console.log(shrineTreasure) // ReferenceError
} catch (error) {
	console.log("shrineTreasure is not defined out here")
}

function createKorokCounter() {
	let seeds = 0
	return function findKorok() {
		seeds++
		return seeds
	}
}

const playerA = createKorokCounter()
const playerB = createKorokCounter()

console.log(playerA()) // 1
console.log(playerA()) // 2
console.log(playerB()) // 1 -- independent of playerA