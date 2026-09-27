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

obj.regularMethod() // "Samwell" - this is set by how the function is called (obj.regularMethod())
obj.arrowMethod()   // undefined - arrow functions borrow "this" from where they were written, not from obj

const original = [1, 2, 3]

const copyByReference = original
copyByReference.push(4)
console.log(original) // [1, 2, 3, 4] - same array in memory, so both names see the change

const copyBySpread = [...original]
copyBySpread.push(5)
console.log(original)     // [1, 2, 3, 4]    - untouched by the spread copy
console.log(copyBySpread) // [1, 2, 3, 4, 5] - its own separate array