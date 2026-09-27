### 00_script_in_html.html
Placing classic script tags before the closing body tag makes sure the HTML loads first instead of pausing the page. Using the defer attribute tells the browser to wait for the document to finish loading before running the script. Switching to type="module" was the biggest difference for me because it defers execution automatically, keeps variables private inside the file so they do not leak into the global window, and lets me use import and export to separate code across different files.

### 01_base_syntax.js
Learning basic syntax is like learning the grammar of a programming language, since every language has its own rules for declaring variables and printing output. In JavaScript, variable names are case-sensitive, so myName and myname are two completely separate variables that never collide. Variable names also cannot start with a number, contain hyphens, or use reserved words like let, while naming styles like camelCase keep the code clean and consistent.

### 02_variables.js
This covered basic data types like string, number, and boolean, plus non-primitive types like objects, and checking them with typeof. The main takeaway was comparing loose equality == with strict equality ===. Double equals converts types automatically so the string "5" matches the number 5, while triple equals checks both the value and the exact type to prevent accidental bugs. Basic math in JavaScript also follows standard PEMDAS order of operations.

### 03_functions.js
Functions make code reusable and modular. Standard function declarations support hoisting, which means you can call them even before their definition in the code. Function expressions assigned to a const cannot be hoisted. ES6 arrow functions are great because implicit returns make writing quick one-line functions much faster without needing curly brackets or the return keyword. Also, while a function normally only returns one value, returning an object lets you bundle multiple outputs like a sum and product together cleanly.

### 04_objects.js
Objects group related data and methods together under one name. Even when an object is declared with const, you can still add, change, or delete properties inside it, which felt different from primitive variables. Inside an object method, the this keyword points directly back to the object itself so it can read its own properties like name and age.

### 05_arrays.js
Arrays store ordered lists of data. Built-in methods like push add items to the end of the array, while shift removes the first item from the front. Arrays are iterable using a for-of loop (unlike for-in which is for object keys), and the map method lets you transform every item into a new array with an arrow function without changing the original list.

### 06_control_structures.js
If and else-if conditions run when their specific rules are met. The order of conditions matters a lot because JavaScript stops at the first condition that turns out true, so putting a broad condition too early can block more specific checks from ever running. For loops are great when you know the number of loops ahead of time, while while loops keep repeating as long as their condition stays true.

### 07_dom.html
The Document Object Model represents the HTML page as a live tree of elements. Unlike React which uses a Virtual DOM to compare diffs, vanilla JavaScript uses the DOM API to directly select and change elements, attributes, and styles. Adding a click event listener to a button lets you prompt the user for a color to change the background, and setTimeout updates text after a two-second delay without locking up the page.

### 08_essential_features.js
This covers modern features that show up everywhere in React. The map method is used all the time for rendering and transforming lists instead of writing manual for-loops. Object destructuring pulls values directly out of objects into local variables, and the spread operator with three dots makes quick copies of arrays and objects without mutating original state.

### 09_tricky_parts.js
This cleared up several tricky JavaScript behaviors. Undefined means a variable was declared with no value, while null is an intentional empty value. Regular methods get their this keyword from the object that calls them, but arrow functions do not have their own this and just borrow it from their outer scope. Also, assigning an array with an equals sign only copies the reference in memory so changing one changes both, while spread makes a real independent copy.

### 10_let_const.js
Variables declared with let can be updated and reassigned whenever values change, while const variables cannot be reassigned and throw an error if you try. Using var acts like a global variable because it ignores block scope and leaks outside curly brackets, which is why modern JavaScript prefers let and const.

### 11_arrow_functions.js
Arrow functions make writing functions much shorter and cleaner. An implicit return lets you skip curly brackets and the return keyword for single-line expressions to return a value directly, while an explicit return uses curly brackets and an actual return statement for multi-line logic.

### 12_destructuring.js
Destructuring makes pulling values out of objects and arrays much faster than writing repetitive dot notation. Using parameter destructuring directly inside a function header lets the function grab only the exact properties it needs right away, which is the exact pattern used for receiving props in React.

### 13_spread_rest.js
The three dots handle two opposite jobs depending on where you use them. The spread operator unpacks and copies existing arrays or objects so you can add data without mutating the original source. The rest operator gathers multiple incoming function arguments into a single array parameter so you can process them together with reduce.

### 14_classes_inheritance.js
Classes provide object-oriented templates for creating objects. Using extends lets a subclass inherit methods from a parent class while adding its own unique methods on top. While older React used class components, modern React uses functional components with hooks, but understanding class inheritance is still useful.

### 15_modules_export.js
ES modules let you split code across separate, reusable files. A file can have one default export for its main function and named exports inside curly brackets for sharing specific objects or helpers, keeping the codebase organized.

### 16_modules_import.js
Importing from module files connects separate scripts without cluttering the global window. Default exports are imported without curly brackets, while named exports use curly brackets and must match the exported names.

### 17_logical_operators.js
Logical operators in JavaScript return actual values during short-circuiting rather than just true or false. Double pipe returns the first truthy value it finds, making it useful as a fallback default when a value is empty, while double ampersand acts as a guard that only runs the second value if the first is truthy, which is widely used in React JSX for conditional rendering. The NOT operator flips booleans, and empty arrays and objects are truthy while 0, empty string, and null are falsy.

### 18_ternary_nullish.js
The ternary operator gives you a quick one-line if-else check, and optional chaining with a question mark safely reads nested properties without crashing if something is missing. The biggest realization was comparing double pipe with nullish coalescing. Using double pipe for a default fallback breaks when a value is 0 (like setting volume or rupees to 0) because it treats 0 as falsy and resets it to 100. Nullish coalescing fixes this by only replacing values if they are null or undefined, keeping 0 as a valid number.

### 19_strings_numbers.js
String methods like trim remove extra spaces, split divides text into arrays, and toUpperCase formats text casing. For numbers, parseInt extracts digits from strings, toFixed formats decimal numbers for prices, and invalid math calculations produce NaN, which has to be checked using Number.isNaN because NaN does not equal itself.

### 20_array_methods.js
Different array methods handle specific tasks: filter returns a new array of matching items, find returns only the first match, some acts like an OR check returning true if at least one item matches, every acts like an AND check returning true only if all items match, and sort puts array items in order without mutating the original list when used with spread.

### 21_errors_json.js
Throwing custom errors with throw new Error lets you handle invalid actions cleanly, and wrapping risky code in try-catch blocks keeps the program running instead of crashing. JSON.stringify converts JavaScript objects into text format for storage, while JSON.parse turns that text back into usable objects.

### 22_async_javascript.js
Asynchronous JavaScript evolved to handle tasks that take time without freezing the whole page. In early JavaScript, using callbacks nested inside callbacks created callback hell because each step had to be wrapped inside the previous one like making coffee in order. Promises introduced then chains to flatten the code, and finally async and await allowed asynchronous code to wait using await while reading cleanly from top to bottom like regular synchronous code.

### 23_closures_scope.js
Variables declared with let inside an if block are block-scoped and cannot be reached from outside. A closure happens when an outer function returns an inner function that remembers its own private variables in memory. Creating multiple counter instances showed that each one tracks its own independent count without affecting the other. Working through all these exercises helped me explore JavaScript far beyond the surface of the iceberg.