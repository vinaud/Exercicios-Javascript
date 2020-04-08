// soma os itens de um vetor usando reduce
vetor = [1,2,3,4,5,6,7,8,9,10]

const soma = (soma,atual) => soma = soma + atual
somaVetor= vetor.reduce(soma);

console.log('Soma dos itens do vetor:',somaVetor)