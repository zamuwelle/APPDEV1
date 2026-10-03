// Monk Maz Koshia's Shrine Trial Gate
const trialType = "Major Test of Strength";

console.log(`--- Monk Maz Koshia's Shrine Gate ---`);
console.log(`Evaluating Trial: "${trialType}"`);

switch (trialType) {
	case "Minor Test of Strength":
		console.log("⛩️ Trial Status: Prepare your sword against a Scout Guardian I!");
		break;
	case "Modest Test of Strength":
		console.log("⛩️ Trial Status: Prepare your shield against a Scout Guardian II!");
		break;
	case "Major Test of Strength":
		console.log("⛩️ Trial Status: Prepare your soul against a Scout Guardian IV with dual weapons!");
		break;
	case "Apparatus Trial":
		console.log("⛩️ Trial Status: Tilt the Sheikah Slate to solve the ancient puzzle!");
		break;
	default:
		console.log("❌ Trial Status: Invalid Trial! The Goddess Hylia does not recognize this challenge.");
		break;
}