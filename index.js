let a = 10, b = 13, n = 5;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a * b;
}

function increment(n){
    n++;
    return n
}

function decrement(n){
    n--;
    return n
}

function makeInt(n){
    n = parseInt(n, 10);
    return n
}

function preserveDecimal(n){
    n = parseFloat(n);
    return n
}