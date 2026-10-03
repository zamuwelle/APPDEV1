// Malfunctioning Ancient Guardian Terminal Firmware

// 1. Custom Error Class for Sheikah Terminal Failures
class SheikahTerminalError extends Error {
	constructor(message, errorCode) {
		super(message);
		this.name = "SheikahTerminalError";
		this.errorCode = errorCode;
		this.timestamp = new Date().toISOString();
	}
}

// 2. Corrupted JSON String (Missing quotes around keys, trailing comma)
const corruptedAncientText = '{ target: "Guardian Scout", status: malformed_data, }';

console.log("🤖 [GUARDIAN TARGETING SYSTEM]: Attempting to parse corrupt Sheikah text...");

// 3. Gracefully Handled Chaos Engineering with Custom Error
try {
	try {
		JSON.parse(corruptedAncientText);
	} catch (rawError) {
		// Intercepting low-level SyntaxError and wrapping it in our custom SheikahTerminalError!
		throw new SheikahTerminalError(
			`Corrupted Ancient Signal! Low-level parser output: "${rawError.message}"`,
			"ERR_SHEIKAH_CORRUPT_PACKET"
		);
	}
} catch (error) {
	if (error instanceof SheikahTerminalError) {
		console.log(`\n🚨 ALERT [${error.name}]: ${error.message}`);
		console.log(`📋 Error Code: ${error.errorCode}`);
		console.log(`⏱️ Incident Timestamp: ${error.timestamp}`);
		console.log("🛡️ Guardian Emergency Defense Protocol: Shielding core from corruption crash!");
	} else {
		console.log("Unknown anomaly detected:", error);
	}
} finally {
	console.log("🤖 [GUARDIAN DIAGNOSTIC]: System check complete. Guardian targeting locked on intruder!");
}