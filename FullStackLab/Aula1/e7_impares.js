// imprime os numeros ípares de um vetor

vetor = [1,2,3,4,5,6,7,8,9,10]

const impares = item => item % 2 != 0

vetorImpares = vetor.filter(impares);

console.log('valores pares do vetor:',vetorImpares)