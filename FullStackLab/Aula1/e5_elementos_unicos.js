// imprime as não repetições de um elemento do vetor, usando reduce

const vetor = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];


var map = vetor.reduce(function(obj, item) {
    obj[item] = ++obj[item] || 1;
    return obj;
  }, {});

console.log("Incidencias:")
console.log(JSON.stringify(map),"\n")

var mapKeys = Object.keys(map);

naoRepetidos = mapKeys.filter(function(item){
    return map[item] == 1
})

console.log("Itens não repetidos no vetor:")
console.log(naoRepetidos)