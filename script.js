const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay(value) {
  display.textContent = value || '0';
}

function clearCalculator() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) return;

  let result = 0;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateDisplay(currentInput);
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      clearCalculator();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});
