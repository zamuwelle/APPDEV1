// The Royal Archives: Destructuring Decrees

const person = { name: "Samwell", age: 67 };
const { name, age } = person;
console.log(`[Archive] Person: ${name}, Age: ${age}`);

const hobbies = ["hunting", "cooking", "adventuring"];
const [hobby1, hobby2] = hobbies;
console.log(`[Archive] Hobbies: ${hobby1}, ${hobby2}`);

function printName({ name }) {
	console.log(`[Archive] Extracted Name: ${name}`);
}
printName(person);

// --- ZELDA'S LORE EXTRACTION ---
console.log("\n--- Deciphering Incomplete Ancient Lore ---");

const ancientLore = {
	heroName: "Link",
	calamity: "Ganon",
	// 'sacredPower' is missing from the ruined texts!
	// 'swordLocation' is missing!
};

// Using destructuring with renaming AND default values:
const { 
	heroName: chosenHero, // Renaming heroName to chosenHero
	calamity, 
	sacredPower = "Triforce of Wisdom", // Default fallback if missing
	swordLocation: location = "Lost Woods" // Renaming AND Default!
} = ancientLore;

console.log(`The Hero, ${chosenHero}, must face ${calamity}.`);
console.log(`To do so, they rely on the ${sacredPower}.`);
console.log(`The blade rests in the ${location}.`);