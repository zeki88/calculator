const buttons = document.querySelector('#buttons');
const screenValue = document.querySelector('#screenValue');
const screenResult = document.querySelector('#screenResult');
let lastOperation = null;
let value = 0;
for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
  btn.id = 'button' + i;
    btn.value = i;
    btn.textContent = i;
    buttons.appendChild(btn);
}

buttons.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.id === 'allClear') {
      value = 0;
      screenValue.textContent = value;
      screenResult.textContent = value;
      lastOperation = null;
    } else if (event.target.id === 'result') {
      calculate();
      screenValue.textContent = value;
      lastOperation = null;
    } else if (['add', 'sub', 'mult', 'divi'].includes(event.target.id)) {
      calculate();
      value = 0;
      screenValue.textContent = value;
      lastOperation = event.target.id;
    } else {
      value = value * 10 + Number(event.target.value);
      screenValue.textContent = value;
        }
}
});

function calculate() {
  if (lastOperation === 'add') {
    value = Number(screenResult.textContent) + value;
  } else if (lastOperation === 'sub') {
    value = Number(screenResult.textContent) - value;
  } else if (lastOperation === 'mult') {
    value = Number(screenResult.textContent) * value;
  } else if (lastOperation === 'divi') {
    if (value === 0) {
      alert("Can't divide by 0");
    } else {
      value = Number(screenResult.textContent) / value;
    }
  }
  screenResult.textContent = value;
}
