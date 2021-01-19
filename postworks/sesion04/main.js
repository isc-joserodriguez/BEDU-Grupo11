//https://github.com/beduExpert/B1-Programacion-con-Javascript-2020-Santander/tree/main/Sesion-04/Postwork

//Ejercicio 2
function chunk(array, size){
    var nvo=[];
    var nvo2=[];
    for(var i=0;i<array.length;i++){
        for(var j=0;j<size;j++){
            if(i<array.length) nvo2.push(array[i]);
             i++;
        }
        if(j==size && i<array.length) i--;
        nvo.push(nvo2);
        nvo2=[];
    }
    return nvo;
}
var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//--------------------------------------------------------