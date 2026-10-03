// Raw input from potential intruders attempting to enter Gerudo Town
const rawPasswordInput = "   sAv'Otta_gErUdO_2026!   ";
const rawRupeeText = "   Voucher: 💎 1,250 Rupees (Tax Included)   ";

console.log("--- Gerudo Town Gate Checkpoint ---");
console.log(`Raw Password Received: "${rawPasswordInput}"`);

// 1. Sanitizing the Password with String Methods:
// .trim() removes leading/trailing whitespaces, .toLowerCase() normalizes capitalization
const sanitizedPassword = rawPasswordInput.trim().toLowerCase();
console.log(`Sanitized Password: "${sanitizedPassword}"`);

const isAccessGranted = sanitizedPassword === "sav'otta_gerudo_2026!";
console.log(`Access Granted to City: ${isAccessGranted ? "YES ✅ (Sav'otta!)" : "NO ❌ (Voe HALT!)"}`);

// 2. Regular Expression (RegEx) to extract raw Rupee numbers from messy input text:
// /\D/g matches any non-digit character and replaces it with an empty string ""
const cleanedRupeeString = rawRupeeText.replace(/\D/g, "");
const numericRupees = Number(cleanedRupeeString);

console.log("\n--- Gerudo Merchant Rupee Parsing ---");
console.log(`Raw Rupee Input: "${rawRupeeText}"`);
console.log(`Cleaned Digit String: "${cleanedRupeeString}"`);
console.log(`Parsed Numeric Rupees: ${numericRupees} 💎 (Type: ${typeof numericRupees})`);