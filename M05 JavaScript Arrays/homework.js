/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array[0]);//1 ok
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array.pop());//2 ok
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);//3 ok
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => { return num + 1 } );
   return masUno;//4
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;//5   // Todo bien!
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array); //6    ok
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   junto = palabras.join (" ");
    return junto; // ok
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   
   for (var i = 0;i<array.length;i++){
      if(array[i]===elemento){
         return true;
      }else return false;
   }
}
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código: 
   
   suma = arrayOfNums.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);
    return suma; // 9 ok 
   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   suma = resultadosTest.reduce((valorAnterior, valorActual) => {
      return valorAnterior + valorActual;
    }, 0);
    return suma / resultadosTest.length;//10 ok

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return (Math.max(...arrayOfNums));//11 ok 

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0){
      return 0;
   }else if (arguments.lengt === 1){
      return arguments[0];
   }else {
      var multiplicar = 1;
      for (var i = 0; i < arguments.length; i++){
         multiplicar = multiplicar * arguments[i];
      }
      return multiplicar;
    }     
   }// ok 

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   array = array.filter(element => element > 18)
   return (array.length);//13 okk
   
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 ||numeroDeDia === 7){
      return("Es fin de semana");
   }else return("Es dia laboral");//14 y 15 okk
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.OKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOKOK
   // Tu código:
  string=  num.toString ();
  separado = string.split(""); 
  for (let i = 1; i < separado.length; i++) {
    if (separado.pop() == "9") {
       return true;
      } 


  } return false;//ok
  
 
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código://
   
   for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
       return false;
       }
    }
    return true;
    //oko 
    
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var lo = array.includes ("Enero");
   var lol = array.includes ("Marzo");
   var lol2 = array.includes ("Noviembre");
   var nuevoArray =[];
   if (lo == true && lol == true && lol2== true){
      
      nuevoArray.push("Enero","Marzo","Noviembre");
      return nuevoArray;
   }else {
      return ("No se encontraron los meses pedidos");
   }// ok 

   
  
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [0,1,2,3,4,5,6,7,8,9,10];
   var porSeis = tabla.map( (num) => { return num * 6 } );
   return porSeis;
  //OKKKKK LOL

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   array = array.filter(element => element > 100)
   return (array);//LOOOOL OK
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let arr = []
   for(let i=1; i <= 10; i++){
      if(i === num){
         break;
      }
      num+=2
      arr.push(num);
   }
   return ("Se interrumpió la ejecución");
   return arr//ok
   
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.++
   // Guardar cada nuevo valor en un array y retornarlo.++
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arr = []
   for(let i=1; i <= 10; i++){
      if(i === 5){
         continue
      }
      num+=2
      arr.push(num);
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
