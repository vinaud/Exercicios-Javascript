//calcuadora aritmetica basica

const soma = (a,b) => {return a + b};

const sub = (a,b) => {return a - b}

const mult = (a,b) => { return a * b}

const div = (a,b) => {return a / b}

function calculadora(a, operator, b){

    if(operator =='+')
    {
        return a + b
    }

    else if(operator == '-')
    {
        return a - b
    }

    else if(operator == '*')
    {
        return a * b
    }

    else if(operator == '/')
    {
        return a / b
    }

}



console.log(calculadora(3,'+',3)) 
console.log(calculadora(3,'-',3)) 
console.log(calculadora(3,'*',3)) 
console.log(calculadora(3,'/',3)) 