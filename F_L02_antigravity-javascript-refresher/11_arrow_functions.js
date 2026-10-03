// Implicit return (Revali's Swift Shot - no braces, automatic return)
const greet = name => "Hello " + name;
const square = n => n * n;

// Explicit return (Takes longer, requires braces and the return keyword)
const sayHola = () => {
	console.log("Hola!");
};

// Revali's Mastery: Implicitly returning an object requires parentheses!
// Without the (), the {} are mistaken for a function block instead of an object literal.
const triggerBulletTime = () => ({ staminaDrain: 20, arrowDamage: 50 });

// The Explicit Version (Slow and clunky, unlike my flying)
const triggerBulletTimeExplicit = () => {
	return { staminaDrain: 20, arrowDamage: 50 };
};

console.log(greet("Link (if you must)"));
console.log(`Square: ${square(8)}`);
sayHola();

console.log("Revali's Gale is now ready!");
console.log("Bullet Time Stats:", triggerBulletTime());