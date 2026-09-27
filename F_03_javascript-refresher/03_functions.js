function greet(name) {
	return `Hello, ${name}`
}

const square = (num) => {
	return num * num
}

function calculator(x, y) {
	return { sum: x + y, product: x * y };
}

console.log(greet("Samwell"))
console.log(square(8.18535277187245))
console.log(calculator(4, 3))