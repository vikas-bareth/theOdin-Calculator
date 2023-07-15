let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
          return add(a, b)
        case '-':
          return substract(a, b)
        case '*':
          return multiply(a, b)
        case '/':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
      }
}
