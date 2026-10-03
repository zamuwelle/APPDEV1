// The Royal Decree of Hyrule: Champion Object Definition
const champion = {
	name: "Mipha",
	tribe: "Zora",
	ability: "Mipha's Grace",
	divineBeast: {
		name: "Vah Ruta",
		element: "Water",
		location: "Zora's Domain"
	},
	// Regular method syntax preserves 'this' binding to the champion object
	useChampionPower() {
		return `${this.name} activates ${this.ability} from atop ${this.divineBeast.name}! All hearts fully restored!`;
	}
};

// Executing the Royal Champion's ability
console.log(champion.useChampionPower());