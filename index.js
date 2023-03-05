let display = document.getElementById('display');

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}
