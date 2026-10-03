const numbers = [1, 2, 3, 4, 5]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

const user = { name: "Samwell", age: 67 }
const newUser = { ...user, email: "samwell@hyrule.kokiri" }
console.log(newUser) // { name: "Samuwell", age: 67, email: "samwell@hyrule.kokiri" }

function sum(...args) {
	return args.reduce((total, n) => total + n, 0)
}
console.log(sum(1, 2, 3, 4))

// --- THE GREAT FAIRY'S ENHANCEMENT (Spread Operator) ---
console.log("\n🧚‍♀️✨ Ahh... let me enhance your garments! ✨🧚‍♀️");

const stealthArmor = { name: "Sheikah Mask", defense: 2, effect: "Stealth Up" };
const climbingGear = { item: "Climber's Bandanna", defense: 3, grip: "High" };

// Combining objects using the Spread Operator (...)
const ultimateArmor = { 
	...stealthArmor, 
	...climbingGear, 
	defense: stealthArmor.defense + climbingGear.defense, // Overriding the defense!
	fairyDust: true 
};

console.log("Ultimate Armor Set:", ultimateArmor);

// MATHEMATICAL PROOF OF NON-MUTATION
console.log("\n🔍 Mathematical Proof that Originals are Untouched:");
console.log("Original Stealth Armor Defense:", stealthArmor.defense, "(Expected: 2)");
console.log("Original Climbing Gear Defense:", climbingGear.defense, "(Expected: 3)");
console.log("Is stealthArmor mutated?", stealthArmor.defense !== 2); // Should be false