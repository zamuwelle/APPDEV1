class Character {
	constructor(name) { this.name = name }
	attack() { console.log(this.name + " strikes with a sword!") }
}

class Hero extends Character {
	useSpecial() { console.log(this.name + " uses Spin Attack!") }
}

const hero = new Hero("Samwell")
hero.attack()
hero.useSpecial()