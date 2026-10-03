// Korok Forest Weapon Vault
const weapons = [
	{ name: "Master Sword", power: 90, type: "Sword" },
	{ name: "Savage Lynel Crusher", power: 108, type: "Bludgeon" },
	{ name: "Royal Claymore", power: 85, type: "Claymore" },
	{ name: "Wooden Stick", power: 15, type: "Wood" },
	{ name: "Tree Branch", power: 2, type: "Wood" }
];

// Korok Seeds Collection
const korokSeeds = [
	{ id: 1, region: "Great Plateau", claimed: true },
	{ id: 2, region: "Kakariko", claimed: false },
	{ id: 3, region: "Korok Forest", claimed: true }
];

// 1. Array Methods Demonstrations
console.log("--- Wise Korok Array Transformations ---");

// .filter(): returns array of elements passing condition
const claimedSeeds = korokSeeds.filter(s => s.claimed);
console.log("Claimed Seeds (.filter):", claimedSeeds);

// .find(): returns FIRST matching element
const forestSeed = korokSeeds.find(s => s.region === "Korok Forest");
console.log("Forest Seed (.find):", forestSeed);

// .some(): returns boolean if AT LEAST ONE matches
const hasUnclaimed = korokSeeds.some(s => !s.claimed);
console.log("Has unclaimed seeds? (.some):", hasUnclaimed);

// .every(): returns boolean if ALL match
const allClaimed = korokSeeds.every(s => s.claimed);
console.log("Are all seeds claimed? (.every):", allClaimed);

// .sort(): sorts array in-place (used with spread copy)
const sortedSeeds = [...korokSeeds].sort((a, b) => b.id - a.id);
console.log("Sorted Seeds Descending (.sort):", sortedSeeds);

// 2. BOSS BATTLE PIPELINE (Chaining filter, sort, and map)
console.log("\n--- 🗡️ BOSS BATTLE PIPELINE 🗡️ ---");

const bossBattleLoadout = weapons
	.filter(w => w.power >= 50)                      // Step 1: Filter out weak weapons (< 50 power)
	.sort((a, b) => b.power - a.power)               // Step 2: Sort remaining weapons highest power first
	.map(w => `⚔️ ${w.name} (${w.power} ATK)`);       // Step 3: Format into display strings

console.log("Link's Optimal Boss Loadout:", bossBattleLoadout);