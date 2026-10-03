// Link accesses his Sheikah Slate Runes using namespace import syntax
import * as SheikahSlate from "./15_modules_export.js";

console.log("--- Link Activating Sheikah Slate Runes ---");
console.log(`User: ${SheikahSlate.heroStats.name}, Hearts: ${SheikahSlate.heroStats.hearts} ❤️`);

// Calling Magnesis via namespace object
console.log(SheikahSlate.Magnesis("Iron Boulder"));
console.log(SheikahSlate.Stasis("Guardian Scout II"));
console.log(SheikahSlate.Cryonis("River Hylia"));

console.log(SheikahSlate.openTreasureChest());