const hobbies = ["hunting", "cooking", "adventuring"]
hobbies.map(hobbies => console.log(hobbies))

const student = { name: "Samwell", age: 67 }
const { name, age } = student
console.log(name, age)

const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)