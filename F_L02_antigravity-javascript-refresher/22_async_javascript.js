// Goddess Hylia's Divine Blessing: Asynchronous Promises & Promise.all

// 1. Helper function simulating a Great Fairy enchantment (Returns a Promise)
function enhanceArmor(fairyName, delayMs, shouldFail = false) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldFail) {
				reject(new Error(`🧚‍♀️💥 ${fairyName}'s Great Fairy Fountain collapsed! Network connection lost!`));
			} else {
				resolve(`🧚‍♀️✨ ${fairyName} enhanced Link's armor (+4 Defense) in ${delayMs}ms!`);
			}
		}, delayMs);
	});
}

// 2. Async/Await Function for Parallel Execution using Promise.all()
async function awakenAllGreatFairies() {
	console.log("⛩️ [Goddess Hylia]: Link approaches the Great Fairy Fountains...");
	const startTime = Date.now();

	try {
		// Parallel Execution: All 3 Great Fairies enhance armor SIMULTANEOUSLY!
		const fairyBlessings = await Promise.all([
			enhanceArmor("Fountain 1 (Tera)", 1000),
			enhanceArmor("Fountain 2 (Mija)", 1000),
			enhanceArmor("Fountain 3 (Cotera)", 1000)
		]);

		const totalTime = Date.now() - startTime;
		console.log("\n✨ Divine Enhancements Complete:");
		fairyBlessings.forEach(blessing => console.log(blessing));
		console.log(`⏱️ Total Time Elapsed (Parallel): ~${totalTime}ms`);

	} catch (error) {
		console.log(`\n🚨 [Goddess Hylia Error Intercepted]: ${error.message}`);
	}
}

// 3. Simulating Network Failure Handling
async function simulateFailedFountain() {
	console.log("\n⛩️ [Goddess Hylia]: Testing corrupted divine connection...");
	try {
		await Promise.all([
			enhanceArmor("Tera", 500),
			enhanceArmor("Mija (Corrupted)", 500, true), // Triggers simulated network failure!
			enhanceArmor("Cotera", 500)
		]);
	} catch (error) {
		console.log(`🛡️ [Catch Block Defense]: Intercepted failure! Reason: "${error.message}"`);
	}
}

// Executing Goddess Blessings
async function main() {
	await awakenAllGreatFairies();
	await simulateFailedFountain();
}

main();