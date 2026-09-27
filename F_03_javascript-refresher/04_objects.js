const aboutMe = {
	name: "Samwell",
	age: 67,
	course: "BSIS",
	introduce() {
		console.log(`Hi, I'm ${this.name}, age ${this.age}.`)
	}
}

aboutMe.hobby = "Gaming"
aboutMe.introduce()