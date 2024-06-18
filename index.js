function add(a, b) {
return a+b;
}

function subtract(a, b) {
return a-b;
}

function multiply(a, b) {
return a*b;
}

function divide(a, b) {
return a/b;
}

number = 5;
number += 3;
number -= 2;
number *= 10;
number /= 5;

number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
  return (number /= 3);
}

divideBy3();

add5();


number = 10;

add5();

divideBy3();

function increment(n) {
n++;
return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    return parseInt(n);
}

function makeInt(n) {
return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}


