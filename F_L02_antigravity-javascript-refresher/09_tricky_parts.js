console.log(67 == "67")  // true
console.log(67 === "67") // false

let notDefined
let empty = null

console.log(notDefined) // undefined
console.log(empty)      // null

const obj = {
	name: "Samwell",
	regularMethod: function () {
		console.log(this.name)
	},
	arrowMethod: () => {
		console.log(this.name)
	},
};

obj.regularMethod() // "Samwell"
obj.arrowMethod()   // undefined

const original = [1, 2, 3]

const copyByReference = original
copyByReference.push(4)
console.log(original) // [1, 2, 3, 4]

const copyBySpread = [...original]
copyBySpread.push(5)
console.log(original)     // [1, 2, 3, 4]
console.log(copyBySpread) // [1, 2, 3, 4, 5]

// --- YIGA CLAN TRICKY EDGE CASES ---
console.log("\n--- YIGA CLAN TRICKS ---");
console.log("Trick 1 (0 vs false):", 0 == false);
console.log("Trick 2 (0 vs false strict):", 0 === false);
console.log("Trick 3 (NaN equality):", NaN == NaN);
console.log("Trick 4 (typeof null):", typeof null);
console.log("Trick 5 (empty array vs boolean):", [] == false);