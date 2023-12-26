let result = 0;
let a = 0;
let b = 0;
let operator = "+";

let disp = document.querySelector(".display");

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

var nos = document.querySelectorAll(".btn-nos");
nos.forEach((button) => {
  button.addEventListener("click", () => {
    b+=button.value;
    b=parseFloat(b);
    //b = b * 10 + parseFloat(button.value);
    disp.textContent = b;
    console.log("b is " + b);
  });
});

var dec = document.querySelector(".decimal");
dec.addEventListener("click", ()=>
{
  b+=".";
  console.log(b); 
})
var clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  a = 0;
  b = 0;
  operator = "";
  disp.textContent = "";
});

var del = document.querySelector(".delete");
del.addEventListener("click", () => {
  a = 0;
  b = 0;
  operator = "+";
  disp.textContent = "";
});

var equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  a = calc(a, b, operator);
  b=0;
  console.log("Result is " + a);
  disp.textContent = a;
  console.log("a = " + a);
  console.log("b = " + b);
});

var op = document.querySelectorAll(".btn-operator");

op.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.value;
    if(a==0)
    {
      a = b;
    }
    b = 0;
    console.log("a = " + a);
    console.log("b = " + b);
    console.log(operator);
    disp.textContent = operator;
  });
});

function calc(a, b, operator) {
  if (operator === "+") {
    return addition(a, b);
  } else if (operator === "-") {
    return subtraction(a, b);
  } else if (operator === "*") {
    return multiplication(a, b);
  } else if (operator === "/") {
    return division(a, b);
  }
}

// var a = prompt("Enter first number");
// var b = prompt("Enter second number");
// var operator = prompt("Enter operator");

// a = Number(a);
// b = Number(b);

// calc(a,b,operator);
