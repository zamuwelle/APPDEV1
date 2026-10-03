// Robbie's Ancient Tech Lab: Hyrule Compendium Entry
const compendiumEntry = {
	id: 124,
	name: "Guardian Stalker",
	category: "Monsters",
	details: {
		commonLocations: ["Hyrule Field", "Hyrule Castle"],
		drops: {
			common: ["Ancient Screw", "Ancient Spring"],
			rare: {
				primary: "Ancient Core",
				legendary: "Giant Ancient Core"
			}
		}
	}
};

// EXPLICIT SINGLE-LINE DESTRUCTURING to extract legendary drop:
const { details: { drops: { rare: { legendary: rareMaterial } } } } = compendiumEntry;

console.log(`[Akkala Tech Lab] Extracted Rare Material: ${rareMaterial} ⚙️`);

// -------------------------------------------------------------
// SPREAD OPERATOR (...) & IMMUTABILITY DEMONSTRATION
// -------------------------------------------------------------
// Modifying compendiumEntry directly corrupts original Sheikah database records!
// Instead, use spread operator to shallow clone and modify safely:
const upgradedEntry = {
	...compendiumEntry,
	status: "Analyzed by Robbie",
	details: {
		...compendiumEntry.details,
		dangerLevel: "Extreme"
	}
};

console.log("\nOriginal Entry Intact (unmutated id):", compendiumEntry.id);
console.log("Upgraded Safe Copy Status:", upgradedEntry.status);