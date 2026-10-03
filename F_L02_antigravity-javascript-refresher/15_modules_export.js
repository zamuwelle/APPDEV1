// Sheikah Slate Rune Firmware v2.0
const heroStats = {
	name: "Link",
	hearts: 3
};

function openTreasureChest() {
	return "Da-da-da-daaa! 🎺✨";
}

// Rune Utility Functions
function Magnesis(target) {
	return `🧲 Magnesis engaged: Lifting metallic object '${target}'!`;
}

function Stasis(target) {
	return `⏱️ Stasis engaged: Freezing momentum of '${target}' for 5s!`;
}

function Cryonis(waterSurface) {
	return `🧊 Cryonis engaged: Raising ice pillar on '${waterSurface}'!`;
}

// --- SINGLE NAMED EXPORT BLOCK AT THE BOTTOM ---
export { heroStats, openTreasureChest, Magnesis, Stasis, Cryonis };