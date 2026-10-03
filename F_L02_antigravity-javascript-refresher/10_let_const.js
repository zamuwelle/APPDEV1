// Impa's Code Review: Strict Declaration Rules

// The Master Sword is an immutable legendary blade. It cannot be reassigned.
const masterSword = "Blade of Evil's Bane";

// Link's health fluctuates during battle. It must be reassigned.
let linkHealth = 3;

console.log(`Hero equipped with: ${masterSword}`);
console.log(`Current Health: ${linkHealth} Hearts`);

linkHealth -= 1; // Taking damage is allowed with let
console.log(`Took damage! Current Health: ${linkHealth} Hearts`);

// --- CALAMITY DEMONSTRATION (The evil of 'var') ---
// We simulate the mistake of using 'var' in a loop, then immediately discard it.
// I shall demonstrate the leak, but this file will not tolerate 'var' remaining!

console.log("\n--- Simulating the Calamity (var scope leak) ---");

for (var bokoblinCount = 0; bokoblinCount < 3; bokoblinCount++) {
	// Inside the camp
}

console.log(`DANGER! The bokoblin count leaked outside the camp! count = ${bokoblinCount}`);

// FIXING THE CALAMITY (Using let)
console.log("\n--- Purifying the code with let ---");

for (let moblinCount = 0; moblinCount < 3; moblinCount++) {
	// Inside the camp
}

try {
	console.log(`Trying to access moblinCount outside... ${moblinCount}`);
} catch (error) {
	console.log("SUCCESS: ReferenceError! The moblins are contained within their block scope!");
}