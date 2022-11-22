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
    if(checkOperator()===true) {
        input.innerHTML += '&div;'
    }
    return
})
multiplyButton.addEventListener('click', () => {
    if(checkOperator()===true) {
        input.innerHTML += '*'
    }
    return
})
subtractButton.addEventListener('click', ()=>{
    if(checkOperator()===true) {
        input.innerHTML += '-'
    }
    return
})
addButton.addEventListener('click', () => {
    if(checkOperator()===true) {
        input.innerHTML += '+'
    }
    return
})
coma.addEventListener('click', () => {
    if(checkOperator()===true) {
        input.innerHTML += '.'
    }
    return
})

equalButton.addEventListener('click', () => getArray())
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
function checkOperator(){
    if (input.innerHTML == '') {
        return false
    }
    console.log(input.innerHTML.charAt(input.innerHTML.length-1))
    switch(input.innerHTML.charAt(input.innerHTML.length-1)){
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

    const xArray = input.innerHTML
    let numbers = []
    let toConvert = xArray;

    while (true) {
        if (isNaN(parseFloat(toConvert))) {
            toConvert.pop();
            console.log('x');
            continue;
        } else {
            numbers.push(toConvert);
            break;
        }
    }
    console.log(numbers);
}
let myString = '34+434-2/3'
let parse = parseFloat(myString);
console.log(parse)
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
Loop ends when string is empty.
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
