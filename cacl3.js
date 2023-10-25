const buttons = document.querySelector ('#buttons');
let value = [];
const newValue = [];
const resultValue = [];
const screen = [];
const screenValue = document.querySelector('#screenValue');
const screenResult = document.querySelector('#screenResult');
const btnSum = document.querySelector('#sum');
const btnSub = document.querySelector('#sub');
const btnMult = document.querySelector('#mult');
const btnDivi = document.querySelector('#divi');
const btnResult = document.querySelector('#result');
let canCalc = 'false';
let subVal1 = 0;
let subVal2 = 0;
let result = 0;

for (let i = 0; i < 10; i+= 1) {
    const btn = document.createElement('button');
    btn.setAttribute ('id','button'+i);
    btn.value = i;
    btn.textContent = i;
    btn.onclick = function () {
        value.push(Number(btn.value));
        subVal1 = Number(value.join(''));
        screen.push (Number(btn.value))
        screenValue.textContent = screen.join('');
        canCalc = 'true';
    };
    buttons.appendChild(btn);
}

btnSum.onclick = function() {
    if (subVal2 == 0) {
        subVal2 = subVal1;
        subVal1 = 0;
        screen.push('+')
        screenValue.textContent = screen.join('');
    } else {
        result = subVal1 + subVal2;
        subVal2 = result;
        subVal1 = 0;
        screen.push('+')
        screenValue.textContent = screen.join('');
    }
    screenResult.textContent = result
    value.splice(0);
}

btnSub.onclick = function() {
    if (subVal2 == 0) {
        subVal2 = subVal1;
        subVal1 = 0;
        screen.push('-')
        screenValue.textContent = screen.join('');
    } else {
        result = subVal2 - subVal1;
        subVal2 = result;
        subVal1 = 0;
        screen.push('-')
        screenValue.textContent = screen.join('');
    }
    screenResult.textContent = result
    value.splice(0);
}

btnMult.onclick = function() {
    if (value[0] != undefined) {
        newValue.push (valueTotal);
        resultValue.push(newValue.reduce((a,b) =>  a*b));
        screenResult.textContent = resultValue[resultValue.length - 1];
        value.splice(0);
        lastBtn = btnMult.value;
    };
}

btnDivi.onclick = function() {
    valuenewValue.push (Number(value.join('')));
    value.splice(0);
    resultValue.push(newValue.reduce((a,b) =>  a/b));
}

btnResult.onclick = function() {
    screenResult.textContent = resultValue[resultValue.length - 1]
    newValue.push (Number(value.join('')));
    if (lastBtn == 'sum' && value[0] != undefined) {
        resultValue.push(newValue.reduce((a,b) =>  a+b, 0))
        screenResult.textContent = resultValue[resultValue.length - 1];
        lastBtn = 'false'
        value.splice(0);
    } else if (lastBtn == 'sub' && value[0] != undefined) {
        resultValue.push(-1 * newValue.reduce((a,b) =>  b-a, 0));
        screenResult.textContent = resultValue[resultValue.length - 1];
        lastBtn = 'false'
        value.splice(0);
    } else if (lastBtn == 'mult' && value[0] != undefined) {
        console.log (valueTotal)
        resultValue.push(newValue.reduce((a,b) =>  a*b));
        screenResult.textContent = resultValue[resultValue.length - 1];
        lastBtn = 'false'
        value.splice(0);
    };
    value.splice(0);
}