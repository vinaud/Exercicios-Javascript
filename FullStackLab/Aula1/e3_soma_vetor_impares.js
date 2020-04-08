//filtra os itens ímpares de um vetor usando filter
//soma os valores fltrados com reduce

vetor = [1,2,3,4,5,6,7,8,9,10]

const pares = item => item % 2 != 0
const soma = (soma,atual) => soma = soma + atual
const printElements = (element) => console.log(element)

vetorImpares = vetor.filter(pares);
somaVetor = vetorImpares.reduce(soma);

console.log('Soma dos valores ípares do vetor:',somaVetor)

vetorImpares.forEach(printElements);