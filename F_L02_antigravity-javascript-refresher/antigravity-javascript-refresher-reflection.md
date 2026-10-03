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


