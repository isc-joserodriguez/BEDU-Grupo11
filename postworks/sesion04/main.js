//https://github.com/beduExpert/B1-Programacion-con-Javascript-2020-Santander/tree/main/Sesion-04/Postwork

//Ejercicio 2
function chunk(array, size){
    var arreglo = [...array];//copia de arreglo y no locación de memoria
    var nvo=[];
    while(arreglo.length>0){
        nvo.push(arreglo.splice(0,size)); //si ya no hay elementos corta hasta donde exista alguno
    }
    return nvo;
}


var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//---------------------------------------------------------