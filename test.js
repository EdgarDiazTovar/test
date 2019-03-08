// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {  //inicia la funcion
    const nuevoArray=[]; //creo la variable donde se guarda el nuevo arreglo
    for( let i=0; i < array.length; i++){ //inicio un ciclo para recorrer el arreglo (aqui tenia el error al declarar la siguiente condicion: for( let i=0; array < array.length; i++) )
        const ultimo = nuevoArray[nuevoArray.length - 1];  //saco el ultimo elemento del arreglo
        if( !ultimo || ultimo.length == size){ //si el ultimo elemento no existe o es igual al tamaño dado por el argumento
            nuevoArray.push([array[i]]); //inserta el elemento en el nuevoArray
        }
        else{
            ultimo.push(array[i]); // sino, entonces se inserta en el fragmento de ultimo
        }
    }
    return nuevoArray; //se retorna el valor de nuevoArray
}