const input = document.querySelector('#input');
const history = document.querySelector('#history');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const subtractButton = document.querySelector('#subtract');
const addButton = document.querySelector('#add');
const equalButton = document.querySelector('#equal');
const int1 = document.querySelector('#int1');
const int2 = document.querySelector('#int2');
const int3 = document.querySelector('#int3');
const int4 = document.querySelector('#int4');
const int5 = document.querySelector('#int5');
const int6 = document.querySelector('#int6');
const int7 = document.querySelector('#int7');
const int8 = document.querySelector('#int8');
const int9 = document.querySelector('#int9');
const int0 = document.querySelector('#int0');
const coma = document.querySelector('#coma');
const senpai = document.querySelector('#senpai');

clear.addEventListener('click', () => {
    // history.innerHTML = input.innerHTML;
    input.innerHTML = '';
})
erase.addEventListener('click', () => {
    input.innerHTML = input.innerHTML.slice(0, -1);
})
divideButton.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '÷'
    }
    return
})
multiplyButton.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '*'
    }
    return
})
subtractButton.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '-'
    }
    return
})
addButton.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '+'
    }
    return
})
coma.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '.'
    }
    return
})

equalButton.addEventListener('click', () => computing())
int1.addEventListener('click', () => { input.innerHTML += 1 });
int2.addEventListener('click', () => { input.innerHTML += 2 });
int3.addEventListener('click', () => { input.innerHTML += 3 });
int4.addEventListener('click', () => { input.innerHTML += 4 });
int5.addEventListener('click', () => { input.innerHTML += 5 });
int6.addEventListener('click', () => { input.innerHTML += 6 });
int7.addEventListener('click', () => { input.innerHTML += 7 });
int8.addEventListener('click', () => { input.innerHTML += 8 });
int9.addEventListener('click', () => { input.innerHTML += 9 });
int0.addEventListener('click', () => { input.innerHTML += 0 });

window.addEventListener('keydown', (e) => {
    const event = new Event('click');
    const key = document.querySelector(`button[data-key="${e.code}"]`)
    if (e.key == 0) int0.dispatchEvent(event);
    if (e.key == 1) int1.dispatchEvent(event);
    if (e.key == 2) int2.dispatchEvent(event);
    if (e.key == 3) int3.dispatchEvent(event);
    if (e.key == 4) int4.dispatchEvent(event);
    if (e.key == 5) int5.dispatchEvent(event);
    if (e.key == 6) int6.dispatchEvent(event);
    if (e.key == 7) int7.dispatchEvent(event);
    if (e.key == 8) int8.dispatchEvent(event);
    if (e.key == 9) int9.dispatchEvent(event);
    if (e.key == '.') coma.dispatchEvent(event);
    if (e.key == '/') divideButton.dispatchEvent(event);
    if (e.key == '*') multiplyButton.dispatchEvent(event);
    if (e.key == '+') addButton.dispatchEvent(event);
    if (e.key == '-') subtractButton.dispatchEvent(event);
    if (e.code == 'NumpadEnter') equalButton.dispatchEvent(event);
    if (e.code == 'Backspace') erase.dispatchEvent(event);
    if (e.code == 'Delete') clear.dispatchEvent(event);
    //alert(e.code)
});

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return b == 0 ? 'infinity' : a / b

}
function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b)

        case "-":
            return subtract(a, b)

        case "*":
            return multiply(a, b)

        case "÷":
            return divide(a, b)
    }
}
function checkOperator() {
    if (input.innerHTML == '') {
        return false
    }
    switch (input.innerHTML.charAt(input.innerHTML.length - 1)) {
        case "+":
            return false

        case "-":
            return false

        case "*":
            return false

        case "÷":
            return false

        case ".":
            return false
    }
    return true

}
function getArray() {
    
    let numbers = [];
    let toConvert = input.innerHTML;
    while (true) {
        numbers.push(parseFloat(toConvert));
        toConvert = toConvert.replace(numbers[numbers.length - 1], '');
        if (toConvert.length == 0) break;
        numbers.push(toConvert.charAt(0))
        toConvert = toConvert.replace(numbers[numbers.length - 1], '');
        if (toConvert.length == 0) break;
    }
    return numbers
}
function multipleComaCheck(formula) {
    (formula.indexOf('.') !== -1)  
}
function computing() {
    let formula = getArray();
    let operation = '';
    if(formula.indexOf('.') !== -1) return; 
    history.innerHTML = input.innerHTML
    while (true) {
        
        while (true) {
            if (formula.indexOf('*') !== -1) {
                let indexMulti = formula.indexOf('*');
                operation = operate(formula[indexMulti - 1], formula[indexMulti], formula[indexMulti + 1]);
                formula.splice(indexMulti - 1, 3, operation);
            }
            if (formula.indexOf('÷') !== -1) {
                let indexDiv = formula.indexOf('÷');
                operation = operate(formula[indexDiv - 1], formula[indexDiv], formula[indexDiv + 1]);
                formula.splice(indexDiv - 1, 3, operation);
            }
            break;
        }
        if (formula.indexOf('+') !== -1) {
            let indexAdd = formula.indexOf('+');
            operation = operate(formula[indexAdd - 1], formula[indexAdd], formula[indexAdd + 1]);
            formula.splice(indexAdd - 1, 3, operation);
        }
        if (formula.indexOf('-') !== -1) {
            let indexSub = formula.indexOf('-');
            operation = operate(formula[indexSub - 1], formula[indexSub], formula[indexSub + 1]);
            formula.splice(indexSub - 1, 3, operation);
        }
        if (formula.length === 1) {
            input.innerHTML = formula[0];
            break;
        }
    }
}

/*
I have string consisting of numbers and operators '3+434-2/3'
I need to separate numbers from each other and operators.

New way!
parse to float content of display.
Content of diplay = '21+2*82'
store content in another variable CoD = content of display
inloop
parse returns 21. Save 21 in array[0]
remove 21 from CoD. Now CoD should contain '+2*82'
array.push(CoD.charAt(0)). remove + from CoD
if CoD is empty end the loop

If array[array.length-1] is Nan then do nothing and display message 'incorrect formula'

Check if array consist multiplication or division (* or /)
For example if array[3]='*' then send operate operate
(array[*position-1], array[*position], array[*position+1])
create new array where: 
[0] = 1pos from prevoius array (should be number)
[1] = 2pos from prevoius array (should be operator
[2] = return from operate() (should be number)
[3] = 6pos from previous array
If there is no * or / simply operate(array[0], array[1], array[2])
When array consist only of single positon then feed it to output.innerHTML
*/


