const input = document.querySelector('#input');
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

const main = input.innerHTML
clear.addEventListener('click', () => {
    input.innerHTML = '';
})
erase.addEventListener('click', () => {
    input.innerHTML = input.innerHTML.slice(0, -1);
})
divideButton.addEventListener('click', () => {
    if (checkOperator() === true) {
        input.innerHTML += '&div;'
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

        case "&div;":
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

        case "&div;":
            return false

        case ".":
            return false
    }
    return true

}
function getArray() {

    const xArray = input.innerHTML;
    let numbers = [];
    let toConvert = xArray;
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
function computing() {
    let formula = getArray();
    let solution = '';
    let operation = '';
    while (true) {
        while (true) {
            if (formula.indexOf('*') !== -1) {
                let indexMulti = formula.indexOf('*');
                operation = operate(formula[indexMulti - 1], formula[indexMulti], formula[indexMulti + 1]);
                formula.splice(indexMulti - 1, 3, operation);
            }
            if (formula.indexOf('&div;') !== -1) {
                let indexDiv = formula.indexOf('&div;');
                operation = operate(formula[indexDiv - 1], formula[indexDiv], formula[indexDiv + 1]);
                formula.splice(indexDiv - 1, 3, operation);
            }
            console.log(formula)
            console.log('no* or /')
            break
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
        if(formula.length===1){
            input.innerHTML=formula[0];
            break
        }
}}

/*
I have string consisting of numbers and operators '3+434-2/3'
I need to separate numbers from each other and operators.


Try to parseint(string). Type can only change when string consists of numbers.
If resoult of parseint equals to Nan than remove last character from string.
Do it till parseint equals number. In this case "3"
Save this number in array at first position. array[0]. array.push()
Create a copy of original String but without 3. '+434-2/3"
After we found one number we can be sure next comes operator.
save operator at array[1] array.push()
repeat from line 3.
ITS ALL WRONG

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


