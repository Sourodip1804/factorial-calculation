# 🔢 JavaScript Factorial Calculator

A simple JavaScript project that calculates the factorial of a number using **two different approaches**:

1. 🧮 Using JavaScript Array methods (`Array.from()`, `slice()`, and `reduce()`)
2. 🔁 Using a traditional `for` loop

This project is useful for beginners to understand both **functional programming** and **iterative programming** concepts in JavaScript.

---

## 📌 Features

- Calculates the factorial of any positive integer.
- Demonstrates the use of modern JavaScript array methods.
- Includes a traditional `for` loop implementation for comparison.
- Easy-to-read and beginner-friendly code.
- Helps understand the difference between functional and iterative approaches.

---

## 🛠️ Technologies Used

- JavaScript (ES6)

---

## 📂 Project Structure

```
factorial-calculator/
│
├── script.js
└── README.md
```

---

## 🚀 How It Works

### Method 1: Array Methods

This method creates an array from `1` to the given number and multiplies all elements using `reduce()`.

Example:

```javascript
let arr = Array.from(Array(number + 1).keys());

let result = arr
  .slice(1)
  .reduce((a, b) => a * b);
```

### Method 2: For Loop

This method starts with `1` and repeatedly multiplies it by every number from `1` to the given number.

```javascript
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
```

---

## ▶️ Example

Input:

```javascript
let a = 6;
```

Output:

```
720
720
```

Explanation:

```
6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
```

The first output is produced using Array methods, and the second using a `for` loop.

---

## 📖 Concepts Covered

- Functions
- Parameters and Arguments
- Arrays
- `Array.from()`
- `.keys()`
- `.slice()`
- `.reduce()`
- Arrow Functions
- `for` Loop
- `console.log()`
- Returning Values

---

## 🎯 Learning Objectives

This project helps you learn:

- How factorial works.
- Creating arrays dynamically.
- Functional programming using `reduce()`.
- Iterative programming using loops.
- Writing clean and reusable JavaScript functions.

---

## 📷 Output

```
720
720
```

---

## 💡 Future Improvements

- Take user input instead of using a fixed value.
- Validate negative numbers.
- Handle decimal values.
- Build a simple HTML interface.
- Display calculation steps.

---

## 👨‍💻 Author

**Sourodip Mahato**

If you found this project helpful, feel free to ⭐ the repository!
