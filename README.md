# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug caused by the language's loose typing and how the + operator handles string concatenation.  The bug arises when performing arithmetic operations with a mix of numbers and strings, leading to unexpected results due to type coercion.

## Bug Description

JavaScript's + operator will perform string concatenation if one or both operands are strings. This behavior is often unexpected when dealing with numbers and can lead to subtle bugs.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or your preferred JavaScript runtime).
4. Observe the unexpected results from the addition operations.