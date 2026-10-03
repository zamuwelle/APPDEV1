// Hestu's Inventory Array
const inventory = ["Korok Seed", "Hylian Shroom"];
console.log("Initial Pouch:", inventory);

// 1. Mutating Method: .push() adds to the END of the array
inventory.push("Master Sword");
console.log("After .push('Master Sword'):", inventory);

// 2. Mutating Method: .shift() removes from the FRONT (index 0) of the array
const removedItem = inventory.shift();
console.log(`After .shift() (Removed: ${removedItem}):`, inventory);

// 3. Non-mutating Method: .map() returns a NEW array without mutating original
const formattedInventory = inventory.map(item => `🎒 Item: ${item}`);
console.log("Formatted Inventory (.map):", formattedInventory);
console.log("Original Inventory Unchanged:", inventory);

// 4. .reduce() Weapon Damage Challenge
const weapons = [
	{ name: "Tree Branch", damage: 2 },
	{ name: "Savage Lynel Sword", damage: 58 },
	{ name: "Master Sword", damage: 30 }
];

// .reduce() accumulates total damage, starting accumulator at 0
const totalDamage = weapons.reduce((total, weapon) => total + weapon.damage, 0);

console.log("\n--- Hestu's Weapon Damage Calculation ---");
console.log(`Weapons in Pouch:`, weapons.map(w => `${w.name} (${w.damage} dmg)`).join(", "));
console.log(`Total Attack Power: ${totalDamage} DMG 🔥`);