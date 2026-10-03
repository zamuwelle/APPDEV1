// 1. Basic Closure Demonstration: createCounter()
function createCounter() {
	let count = 0; // Enclosed local variable
	return function() {
		count++;
		return count;
	};
}

const counter = createCounter();
console.log("Counter call 1:", counter()); // 1
console.log("Counter call 2:", counter()); // 2

// -------------------------------------------------------------
// GREAT DEKU TREE'S STAMINA WHEEL CLOSURE
// -------------------------------------------------------------
console.log("\n🌳 --- The Great Deku Tree's Stamina Closure --- 🌳");

function createStaminaWheel(initialStamina = 100) {
	// Private enclosed variable inside the factory scope!
	let currentStamina = initialStamina;

	return {
		// Only dash() and rest() can mutate or read currentStamina
		dash(amount = 25) {
			if (currentStamina >= amount) {
				currentStamina -= amount;
				console.log(`💨 Dashing! Expended ${amount} stamina. Remaining: ${currentStamina}⚡`);
			} else {
				console.log(`⚠️ EXHAUSTED! Not enough stamina to dash! Remaining: ${currentStamina}⚡`);
			}
		},
		rest(amount = 30) {
			currentStamina = Math.min(100, currentStamina + amount);
			console.log(`🧘 Resting... Recovered stamina to: ${currentStamina}⚡`);
		},
		getStamina() {
			return currentStamina;
		}
	};
}

const staminaWheel = createStaminaWheel(100);

staminaWheel.dash(40); // 60⚡
staminaWheel.dash(50); // 10⚡
staminaWheel.dash(30); // Exhausted!

staminaWheel.rest(50); // Restored to 60⚡

// -------------------------------------------------------------
// PROOF OF STAMINA PRIVACY (External Modification Attempt)
// -------------------------------------------------------------
console.log("\n🔍 Testing Direct Property Access from Outside:");
console.log("Attempting staminaWheel.currentStamina:", staminaWheel.currentStamina); // undefined!

staminaWheel.currentStamina = 9999; // Attaching a dummy property to the returned object
console.log("Mutated external property to 9999, but internal stamina remains protected:");
console.log("Actual Enclosed Stamina via getStamina():", staminaWheel.getStamina()); // Still 60⚡!