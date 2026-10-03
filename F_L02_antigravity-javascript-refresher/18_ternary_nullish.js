// The Blood Moon rises once again...
const isBloodMoon = true;
const worldState = isBloodMoon ? "Monsters Respawn" : "Safe";
console.log(`[Blood Moon Evaluation]: ${worldState}`);

// -------------------------------------------------------------
// THE FATAL FLAW OF || VS THE SALVATION OF ??
// -------------------------------------------------------------
const weaponDurability = 0; // A broken weapon with 0 durability left!

// FATAL FLAW: '||' checks for falsiness! 0 is falsy, so it overrides 0 with the default 100!
const flawedDurability = weaponDurability || 100;
console.log(`[|| Flaw Result]: Weapon durability is ${flawedDurability} (WRONG! 0 was overwritten!)`);

// SALVATION: '??' (Nullish Coalescing) ONLY replaces null or undefined! 0 is preserved!
const safeDurability = weaponDurability ?? 100;
console.log(`[?? Safe Result]: Weapon durability is ${safeDurability} (CORRECT! 0 is preserved!)`);


// -------------------------------------------------------------
// DISGUSTING NESTED TERNARY (NEVER DO THIS IN PRODUCTION!)
// -------------------------------------------------------------
const timeOfDay = "Night";
const weather = "Rain";
const enemyProximity = "High";

// INTENTIONALLY DISGUSTING NESTED TERNARY:
const status = isBloodMoon ? (timeOfDay === "Night" ? (weather === "Rain" ? (enemyProximity === "High" ? "RUN FOR YOUR LIFE!" : "Seek Shelter") : "Stay Alert") : "Night Walk") : "Peaceful Day";

console.log(`\n[Disgusting Nested Ternary Output]: ${status}`);