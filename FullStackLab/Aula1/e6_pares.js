// imprime os numeros pares de um vetor

vetor = [1,2,3,4,5,6,7,8,9,10]

const pares = item => item % 2 === 0

vetorPares = vetor.filter(pares);

console.log('valores pares do vetor:',vetorPares)