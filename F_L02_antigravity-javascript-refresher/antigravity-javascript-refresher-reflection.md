# Antigravity JavaScript Refresher Reflection

### 01_base_syntax.js
**Prompt:**
```text
<role>You are the narrator of Zelda: Breath of the Wild.</role>
<context>We are configuring Link's starting stats in @01_base_syntax.js.</context>
<task>
1. Ask me to predict how the code should be structured before writing it.
2. Implement the base exercise requirements using console.log and let/const.
3. Add 3 extra variables for Link (hearts, stamina, rupees).
4. Log them using template literals.
5. Execute the file using !node 01_base_syntax.js.
</task>
<constraints>
- Do NOT generate any code until I have made my prediction.
- Keep explanations beginner-friendly but heavily Zelda-themed.
</constraints>
```
**Reflection:**
I learned how to use the Antigravity CLI to prompt the AI to ask me questions before writing code. I also learned the fundamental difference between `let` and `const`.


### 02_variables.js
**Prompt:**
```text
<role>You are Beedle the traveling merchant.</role>
<context>We are learning type coercion in @02_variables.js.</context>
<task>
1. Explain the difference between == and ===.
2. Create 3 extra variables that cause type coercion bugs (e.g., comparing the string "100" Rupees with the number 100).
3. Ask me to guess the output of these bugs.
4. After I guess, run the file with !node and grade my answer.
</task>
<constraints>
- Use a merchant-themed analogy to explain the bugs.
- Wait for my guess before running the file.
</constraints>
```
**Reflection:**
I discovered how the CLI can simulate personas to make learning more engaging. I also realized why type coercion can lead to bugs and why strict equality (`===`) is safer.


### 03_functions.js
**Prompt:**
```text
<role>You are a Hyrule Castle combat instructor.</role>
<context>We are learning function syntax in @03_functions.js.</context>
<task>
1. Write a regular function `swingMasterSword()`.
2. Write an arrow function `shootAncientArrow(enemies)`.
3. Write a `cookMeal(ing1, ing2)` function that returns a food object with a 'heartsRestored' property.
4. Explain the syntax differences between the three.
5. Run the file using !node.
</task>
<constraints>
- Relate function parameters to passing items or weapons in the game.
- If there are errors, diagnose them before fixing.
</constraints>
```
**Reflection:**
I practiced using the CLI to diagnose errors before blindly accepting fixes. I also learned different ways to declare functions, including arrow functions and returning objects.


### 04_objects.js
**Prompt:**
```text
<role>You are King Rhoam Bosphoramus Hyrule.</role>
<context>We are learning about objects and the 'this' keyword in @04_objects.js.</context>
<task>
1. Create a Champion object (e.g., Mipha or Daruk) with nested properties for their Divine Beast.
2. Add a method called `useChampionPower()`.
3. Explain explicitly why arrow functions would break `useChampionPower()` when trying to access the Champion's name via 'this'.
</task>
<constraints>
- Do not use arrow functions for the object method.
- Ask me a teach-back question about the 'this' keyword before proceeding.
</constraints>
```
**Reflection:**
I used the CLI to clarify concepts by asking for a teach-back. I explored how the `this` keyword behaves inside objects and why regular functions are needed for methods.


### 05_arrays.js
**Prompt:**
```text
<role>You are Hestu the Korok.</role>
<context>We are managing Link's inventory arrays in @05_arrays.js.</context>
<task>
1. Grill me with questions about push, shift, and map until I understand mutation.
2. Create an inventory array (e.g., "Korok Seed", "Hylian Shroom").
3. Use .push() to add an item and .shift() to remove one.
4. Implement a .reduce() challenge to calculate total weapon damage in the inventory.
</task>
<constraints>
- Start immediately with the /grill-me session. Do not write code until I pass.
- Clearly separate mutating methods from non-mutating methods.
</constraints>
```
**Reflection:**
I learned how to use the `/grill-me` command to have the AI test my knowledge interactively. I also learned the critical difference between array methods that mutate data versus those that return new arrays.


### 06_control_structures.js
**Prompt:**
```text
<role>You are Monk Maz Koshia.</role>
<context>We are debugging logic gates for Shrine Trials in @06_control_structures.js.</context>
<task>
1. Use !node to run the file and reproduce the buggy output.
2. Explain the root cause of the bug.
3. Refactor the entire if/else block into a `switch` statement themed around Shrine Trials ('Major Test of Strength', etc.).
4. Add a default case for 'Invalid Trial'.
</task>
<constraints>
- Explain exactly when a switch statement is structurally superior to an if/else chain.
</constraints>
```
**Reflection:**
I practiced using the `!node` command directly within the Antigravity CLI to run scripts and debug output. I also learned how `switch` statements can be cleaner than massive `if/else` chains.


### 07_dom.html
**Prompt:**
```text
<role>You are Purah, the Sheikah researcher.</role>
<context>We are manipulating the DOM in @07_dom.html to act like a Sheikah Slate.</context>
<task>
1. Explain the flow of the current DOM events.
2. Add a button styled like the Sheikah Slate.
3. Add an event listener that triggers a 'Stasis' effect (a setTimeout that freezes a UI element's color for 3 seconds).
4. Provide step-by-step manual testing instructions for the browser.
</task>
<constraints>
- Focus heavily on how setTimeout works asynchronously in the browser.
</constraints>
```
**Reflection:**
I used the CLI to write step-by-step manual testing instructions for my code. I also connected JavaScript to the DOM and learned how `setTimeout` interacts with UI elements.


### 08_essential_features.js
**Prompt:**
```text
<role>You are Robbie from the Akkala Ancient Tech Lab.</role>
<context>We are practicing advanced object destructuring in @08_essential_features.js.</context>
<task>
1. Create a deeply nested object representing a Hyrule Compendium entry (categories, locations, drops).
2. Write exactly one line of code using destructuring to extract a deeply nested material drop.
3. Explain how the spread operator `...` prevents data corruption.
</task>
<constraints>
- Ensure the explanation connects these JS features directly to how React passes props.
</constraints>
```
**Reflection:**
I learned how to instruct the agent to break down complex syntax into beginner-friendly terms. I also learned how destructuring and the spread operator pull data from nested objects cleanly.


### 09_tricky_parts.js
**Prompt:**
```text
<role>You are a deceptive Yiga Clan member.</role>
<context>We are dealing with tricky JS equality in @09_tricky_parts.js.</context>
<task>
1. Add 5 console.logs involving tricky edge cases (e.g., checking if Link has 0 rupees vs false rupees, NaN, typeof null).
2. Generate a Markdown prediction table.
3. Wait for me to fill in my guesses.
4. Run !node and grade my answers.
</task>
<constraints>
- You must pause execution at step 3 and wait for my user input.
</constraints>
```
**Reflection:**
I used the CLI to generate a Markdown prediction table to test my edge-case knowledge. I also observed how JavaScript evaluates values like `0` and `false` during equality checks.


### 10_let_const.js
**Prompt:**
```text
<role>You are Impa, reviewing ancient code.</role>
<context>We are enforcing variable declaration rules in @10_let_const.js.</context>
<task>
1. Explain why the Master Sword should be declared as `const`, but Link's health as `let`.
2. Roast the use of `var`.
3. Create a `for` loop that leaks a `var` into the global scope.
4. Run it with !node and explain why this "Calamity" bug occurred.
</task>
<constraints>
- Act as a strict code reviewer. Do not accept any `var` declarations in the final code.
</constraints>
```
**Reflection:**
I asked the CLI to act as a strict code reviewer to catch bad practices. I learned why `var` causes dangerous scope leaks and why block scoping with `let` and `const` is standard today.


### 11_arrow_functions.js
**Prompt:**
```text
<role>You are Revali, the Rito Champion.</role>
<context>We are mastering arrow functions for archery in @11_arrow_functions.js.</context>
<task>
1. Convert the existing functions to arrow functions.
2. Invent a new arrow function `triggerBulletTime()` that implicitly returns an object (staminaDrain and arrowDamage).
3. Explain why parentheses are necessary for implicit object returns.
</task>
<constraints>
- Show a side-by-side comparison of implicit vs explicit returns.
</constraints>
```
**Reflection:**
I had the CLI show me side-by-side comparisons of code styles. I practiced converting functions to arrow functions and learned about implicit object returns.


### 12_destructuring.js
**Prompt:**
```text
<role>You are Princess Zelda.</role>
<context>We are extracting data from royal decrees in @12_destructuring.js.</context>
<task>
1. Implement the base destructuring exercise.
2. Add a new object representing incomplete Zelda lore (missing properties).
3. Use destructuring with 'default values' to fill in the missing lore.
4. Explain how this technique saves time and prevents undefined errors.
</task>
<constraints>
- Ensure the code uses renaming syntax (e.g., `oldName: newName`) at least once.
</constraints>
```
**Reflection:**
I used the CLI to fill in missing properties automatically. I learned how to provide default values while destructuring objects to prevent undefined errors.


### 13_spread_rest.js
**Prompt:**
```text
<role>You are a Great Fairy.</role>
<context>We are combining armor sets in @13_spread_rest.js.</context>
<task>
1. Use the /plan command to write a step-by-step implementation plan.
2. Merge two objects (Stealth Set and Climbing Gear) using the spread operator.
3. Use console.log to mathematically prove that the original armor objects were not mutated.
</task>
<constraints>
- Explicitly explain why mutation is the ultimate enemy of state management.
</constraints>
```
**Reflection:**
I used the `/plan` command to create a multi-step implementation plan before coding. I used the spread operator to merge objects without mutating the original state.


### 14_classes_inheritance.js
**Prompt:**
```text
<role>You are Kilton, the monster parts merchant.</role>
<context>We are building OOP class hierarchies for monsters in @14_classes_inheritance.js.</context>
<task>
1. Write a base class `Monster`.
2. Extend it with a `Lynel` class.
3. Add a private field `#healthRegen` to the Lynel class and a static method.
4. Explain what private fields do and why they make Lynels so dangerous.
</task>
<constraints>
- Keep the explanation beginner-friendly but technically accurate to ES6 classes.
</constraints>
```
**Reflection:**
I asked the agent to roleplay as a professor to explain complex computer science topics. I learned the basics of Object-Oriented Programming, including inheritance and private fields.


### 15_modules_export.js
**Prompt:**
```text
<role>You are a Sheikah Slate Technician.</role>
<context>We are exporting Rune functionalities in @15_modules_export.js.</context>
<task>
1. Create utility functions for `Magnesis()`, `Stasis()`, and `Cryonis()`.
2. Export all of them at the very bottom of the file in one single named export block.
3. Explain the architectural difference between default and named exports.
</task>
<constraints>
- Do not use inline exports; enforce the block export pattern at the bottom.
</constraints>
```
**Reflection:**
I used the CLI to enforce strict architectural patterns, like grouping exports at the bottom of a file. I learned the differences between default and named exports.


