// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["Reading", "Coding", "Gaming"];
const person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function calculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input! Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation! Please choose +, -, *, or /.");
      return;
  }

  alert(`Result: ${result}`);
}

calculator();

// Functions: Greet User
function greetUser(name) {
  return `Hello, ${name}! Welcome to the website.`;
}

// Ask the user for their name
const userName = prompt("What is your name?");
if (userName) {
  const greetingMessage = greetUser(userName);
  document.getElementById(
    "dynamic-content"
  ).innerHTML = `<p>${greetingMessage}</p>`;
} else {
  document.getElementById(
    "dynamic-content"
  ).innerHTML = `<p>Hello, Guest! Welcome to the website.</p>`;
}

// Part 2: JavaScript Control Structures

// If Statements: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
  document.getElementById("eligibility-message").textContent =
    "You are eligible to vote!";
} else {
  document.getElementById("eligibility-message").textContent =
    "You are not eligible to vote yet.";
}

// Loops: Display Numbers 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = i;
  numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Change <h1> Text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add Dynamic Content
const dynamicContent = document.getElementById("dynamic-content");
dynamicContent.innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
