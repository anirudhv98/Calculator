function addition(a, b) {
  console.log(a + b);
}

function subtraction(a, b) {
  console.log(a - b);
}

function multiplication(a, b) {
  console.log(a * b);
}

function division(a, b) {
  console.log(a / b);
}

function calc(a, b, operator) {
  if (operator === "+") {
    addition(a, b);
  } else if (operator === "-") {
    subtraction(a, b);
  } else if (operator === "*") {
    multiplication(a, b);
  } else if (operator === "/") {
    division(a, b);
  }
}

// var a = prompt("Enter first number");
// var b = prompt("Enter second number");
// var operator = prompt("Enter operator");

// a = Number(a);
// b = Number(b);

// calc(a,b,operator);