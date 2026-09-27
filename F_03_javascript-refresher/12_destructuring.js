const person = { name: "Samwell", age: 67 }
const { name, age } = person
console.log(name, age) // "Samwell 67"

const hobbies = ["hunting", "cooking", "adventuring"]
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)

function printName({ name }) {
	console.log(name)
}

printName(person)