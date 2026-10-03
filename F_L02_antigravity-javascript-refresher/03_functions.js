// 1. Regular Function Declaration
// Parameters are like equipping weapons: no inputs needed here, just a standard melee attack.
function swingMasterSword() {
	return "HYAAAH! The Master Sword slices through Guardians with 30 damage!";
}

// 2. Arrow Function Expression
// Parameter 'enemies' is like loading targets into your bow sight.
const shootAncientArrow = (enemies) => {
	return `VAPORIZED! ${enemies} Guardian(s) disintegrated into Ancient Screws!`;
};

// 3. Function Returning an Object
// Parameters 'ing1' and 'ing2' are like tossing ingredients into a cooking pot.
function cookMeal(ing1, ing2) {
	return {
		dishName: `Hearty ${ing1} & ${ing2} Skewer`,
		heartsRestored: 12
	};
}

// Executing combat maneuvers & cooking
console.log(swingMasterSword());
console.log(shootAncientArrow(3));

const meal = cookMeal("Hearty Radish", "Raw Meat");
console.log(`Cooked: ${meal.dishName}`);
console.log(`Hearts Restored: ${meal.heartsRestored} ❤️`);