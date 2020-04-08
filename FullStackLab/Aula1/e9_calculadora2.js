//calcuadora aritmetica basica

const soma = (a,b) => {return a + b};

const sub = (a,b) => {return a - b}

const mult = (a,b) => { return a * b}

const div = (a,b) => {return a / b}

function calculadora(a, operator, b){

    return operator(a,b)

}

console.log(calculadora(3,soma,3)) 
console.log(calculadora(3,sub,3)) 
console.log(calculadora(3,mult,3)) 
console.log(calculadora(3,div,3)) 