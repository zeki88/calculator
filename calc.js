const buttons = document.querySelector ('#buttons');
let value = [];
const newValue = [];
const screen = [];
const screenValue = document.querySelector('#screenValue');
const screenResult = document.querySelector('#screenResult');
const btnAdd = document.querySelector('#add');
const btnSub = document.querySelector('#sub');
const btnMult = document.querySelector('#mult');
const btnDivi = document.querySelector('#divi');
const btnResult = document.querySelector('#result');
const clear = document.querySelector('#clear');
const AllClear = document.querySelector('#allClear');
let subVal1 = 0;
let result = 0;
let lastBtn = 'false';

for (let i = 0; i < 10; i+= 1) {
    const btn = document.createElement('button');
    btn.setAttribute ('id','button'+i);
    btn.value = i;
    btn.textContent = i;
    btn.onclick = function () {
        value.push(Number(btn.value));
        screenValue.setAttribute ('value', value.join('')) 
        subVal1 = Number(value.join(''));
        screen.push(Number(btn.value))
        newValue.push(btn.value)
        screenValue.textContent = Number(screenValue.attributes.value.nodeValue) //screen.join('');      
    };
    buttons.appendChild(btn);
}

function checkValue () {
        switch (lastBtn) {
            case ('add'):
                add();
                break;
            case ('sub'):
                sub();
                break;
            case ('mult'):
                mult();
                break;
            case ('divi'):
                divi();
                break;
    }
}

function add() {
    screenResult.textContent = Number(screenResult.textContent) + Number(screenValue.attributes.value.nodeValue);
}

function sub() {
    screenResult.textContent = Number(screenResult.textContent) - Number(screenValue.attributes.value.nodeValue);
    }

function mult() {
    screenResult.textContent = Number(screenResult.textContent) * Number(screenValue.attributes.value.nodeValue);
}

function divi() {
    if (Number(screenValue.attributes.value.nodeValue) == 0) {
        alert ("Can't divide for 0")
    } else {
        screenResult.textContent = Number(screenResult.textContent) / Number(screenValue.attributes.value.nodeValue);
    }
}

btnResult.onclick = function() {
    checkValue();
    lastBtn = 'no'
    screenValue.textContent = screenResult.textContent
    value.splice(0)
    screen.splice(0)
    screen[0] = Number(screenResult.textContent)
}

/*clear.onclick = function() {
    screen.pop();
    screenValue.textContent = screen.join('')
    value.splice(0)
    screenValue.attributes.value.nodeValue = Number(screen.join(''))
}*/

AllClear.onclick = function() {
    value.splice(0)
    screen.splice(0)
    lastBtn = 'false'
    screenResult.textContent = '0'
    screenValue.textContent = '0'
}

btnAdd.onclick = function(){
    if (lastBtn == 'false') {
        lastBtn = 'add'
    }
    if (typeof screen[screen.length-1] === 'number') {
    checkValue();
    screen.splice(0)
    screen[0] = Number(screenResult.textContent)
    screen.push('+')
    screenValue.textContent = screen.join('');
    lastBtn = 'add'
    value.splice(0);
    }  else {
        screen[screen.length-1] = '+'
        screenValue.textContent = screen.join('');
        lastBtn = 'add'
        }
}

btnSub.onclick = function(){
    if (lastBtn == 'false' && screen[0] != 0) {
        screenResult.textContent = subVal1
    }
    if (typeof screen[screen.length-1] === 'number') {
    checkValue();
    screen.splice(0)
    screen[0] = Number(screenResult.textContent)
    screen.push('-')
    screenValue.textContent = screen.join('');
    lastBtn = 'sub'
    value.splice(0);
    } else {
        screen[screen.length-1] = '-'
        screenValue.textContent = screen.join('');
        lastBtn = 'sub'
        }
}

btnMult.onclick=function(){
    if (lastBtn == 'false' && screen[0] != 0) {
        screenResult.textContent = subVal1
    }
    if (typeof screen[0] === 'undefined') {
        screen.push(0)
        screen.push('x')
        screenValue.textContent = screen.join('');
    }
    if (typeof screen[screen.length-1] === 'number') {
    checkValue();
    screen.splice(0)
    screen[0] = Number(screenResult.textContent)
    screen.push('x')
    screenValue.textContent = screen.join('');
    lastBtn = 'mult'
    value.splice(0);
    } else {
    screen[screen.length-1] = 'x'
    screenValue.textContent = screen.join('');
    lastBtn = 'mult'
    }
}

btnDivi.onclick=function(){
    if (lastBtn == 'false' && screen[0] != 0) {
        screenResult.textContent = subVal1
    }
    if (typeof screen[0] === 'undefined') {
        screen.push(0)
        screen.push('/')
        screenValue.textContent = screen.join('');
    }
    if (typeof screen[screen.length-1] === 'number') {
    checkValue();
    screen.splice(0)
    screen[0] = Number(screenResult.textContent)
    screen.push('/')
    screenValue.textContent = screen.join('');
    lastBtn = 'divi'
    value.splice(0);
    } else {
        screen[screen.length-1] = '/'
        screenValue.textContent = screen.join('');
        lastBtn = 'divi'
        }
}

screenValue.textContent = 0
screenResult.textContent = 0