// ... previous code (Character, Hero) ...
class Character {
	constructor(name) { this.name = name }
	attack() { console.log(this.name + " strikes with a sword!") }
}

class Hero extends Character {
	useSpecial() { console.log(this.name + " uses Spin Attack!") }
}

const hero = new Hero("Samwell")
hero.attack()
hero.useSpecial()

// --- KILTON'S MONSTER EXTRACT (OOP Classes) ---
console.log("\n--- Fang and Bone: Monster Ecology ---");

// 1. The Base Class (The blueprint for all monsters)
class Monster {
	constructor(species, hp) {
		this.species = species;
		this.hp = hp;
	}
	
	roar() {
		console.log(`The ${this.species} lets out a terrifying roar!`);
	}
}

// 2. The Subclass (Extending the base blueprint)
class Lynel extends Monster {
	// 3. Private Field (Cannot be accessed outside this class!)
	#healthRegen = 500; 

	constructor(species, hp, weapon) {
		super(species, hp); // Calls the Monster constructor
		this.weapon = weapon;
	}

	// Method that can access the private field internally
	activateMasterMode() {
		console.log(`The ${this.species} glows purple! It secretly regenerated ${this.#healthRegen} HP!`);
		this.hp += this.#healthRegen;
	}

	// Static Method (Belongs to the class itself, not a specific instance)
	static getDangerLevel() {
		return "EXTREME: DO NOT ENGAGE WITHOUT MIASMA RESISTANCE!";
	}
}

// Kilton's Observations:
const savageLynel = new Lynel("Silver Lynel", 5000, "Savage Lynel Crusher");
savageLynel.roar(); // Inherited from Monster
savageLynel.activateMasterMode(); // Uses private field internally

console.log(`Current HP: ${savageLynel.hp}`);

console.log(`Kilton's Official Warning: ${Lynel.getDangerLevel()}`);