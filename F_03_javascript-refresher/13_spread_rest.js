const numbers = [1, 2, 3, 4, 5]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)

const user = { name: "Samwell", age: 67 }
const newUser = { ...user, email: "samwell@hyrule.kokiri" }
console.log(newUser) // { name: "Samuwell", age: 67, email: "samwell@hyrule.kokiri" }

function sum(...args) {
	return args.reduce((total, n) => total + n, 0)
}
console.log(sum(1, 2, 3, 4))