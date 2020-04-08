//filtra os itens pares de um vetor usando filter
//soma os valores fltrados com reduce

vetor = [1,2,3,4,5,6,7,8,9,10]

const pares = item => item % 2 === 0
const soma = (soma,atual) => soma = soma + atual

vetorPares = vetor.filter(pares);
somaVetor = vetorPares.reduce(soma);

console.log('Soma dos valores pares do vetor:',somaVetor)