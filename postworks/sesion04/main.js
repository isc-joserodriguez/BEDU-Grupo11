//https://github.com/beduExpert/B1-Programacion-con-Javascript-2020-Santander/tree/main/Sesion-04/Postwork
//Ejercicio 1
function deepEqual(a, b) {
    // Fancy
    if(typeof(a)==="object" && typeof(b)==="object"){
        var keysA = Object.keys(a).sort();// ordenar arreglo por default ascendente
        var keysB = Object.keys(b).sort();
        
        if(JSON.stringify(keysA).includes(JSON.stringify(keysB))) { // pasar a String y ===
           return  keysA.map(element => { //para recorrer el arreglo de las llaves, reemplazando el valor del elemento con nuestro return
               return deepEqual(a[element],b[element])
            }).reduce((element,next) => { //toma elemento actual y anterior para reemplazar formar un solo valor
                return(element===next); //condición del reduce que se guarda
            });
        }
        else{
            return false;
        }
    }
    else {
        return a===b;
    }
  }
  
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }
  
  console.log('Test 1:', deepEqual(1, 1)) // true
  console.log('Test 2:', deepEqual(1, '1')) // false
  console.log('Test 3:', deepEqual(john, john)) // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
  console.log("--------------------------------------------");

//Ejercicio 2
function chunk(array, size){
    var arreglo = [...array];//copia de arreglo (... = spread) y no locación de memoria
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