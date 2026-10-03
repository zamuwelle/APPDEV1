const values = [0, "", "Master Sword", null, undefined, [], {}]

values.forEach((val) => {
	if (val) {
		console.log(val, "-> truthy")
	} else {
		console.log(val, "-> falsy")
	}
})

// --- KASS'S BARDIC TRUTHINESS & STAMINA TALE ---
console.log("\n--- Kass's Ballad of Stamina ---");

// Link's equipment status (Simulating an undefined/missing stamina object!)
const linkPlayer = {
	name: "Link",
	// staminaGauge is undefined! (e.g. linkPlayer.staminaGauge is missing)
};

// Combining && and Optional Chaining (?.) to safely check stamina without crashing!
const canClimbCliff = linkPlayer && linkPlayer.staminaGauge?.currentStamina >= 50;

console.log("Can Link climb the cliff safely?", Boolean(canClimbCliff));
console.log("Safely evaluated stamina value:", linkPlayer.staminaGauge?.currentStamina);

// Demonstrating Truthiness of Empty Array vs Empty String
const emptyInventoryPouch = [];
console.log("\n--- Kass's Truthiness Note ---");
console.log("Is empty pouch [] truthy?", Boolean(emptyInventoryPouch));
console.log("Is empty string '' truthy?", Boolean(""));