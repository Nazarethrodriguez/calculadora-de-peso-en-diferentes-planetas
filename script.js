// Constantes con la gravedad de los planetas

const GRAVEDAD_MERCURIO = 3.7
const GRAVEDAD_VENUS = 8.87
const GRAVEDAD_MARTE = 3.71
const GRAVEDAD_JUPITER = 24.79
const GRAVEDAD_SATURNO = 10.44
const GRAVEDAD_URANO = 8.69
const GRAVEDAD_NEPTUNO = 11.15
const GRAVEDAD_PLUTON = 0.62

// Constante con la gravedad de la Tierra para calculo de peso en otros planetas
const GRAVEDAD_TIERRA = 9.81

/*
 * FORMULA PARA CALCULAR EL PESO EN OTROS PLANETAS
 * (Peso en la Tierra / Gravedad en la Tierra) * Gravedad en el planeta
 */
function CalcularPeso(pesoTierra, planetaSeleccionado) {
  let resultado;
  if (planetaSeleccionado == "mercurio") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_MERCURIO  
  } else if (planetaSeleccionado == "venus") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_VENUS
  } else if (planetaSeleccionado == "marte") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_MARTE  
  } else if (planetaSeleccionado == "jupiter") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_JUPITER
  } else if (planetaSeleccionado == "saturno") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_SATURNO
  } else if (planetaSeleccionado == "urano") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_URANO 
  } else if (planetaSeleccionado == "neptuno") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_NEPTUNO
  } else if (planetaSeleccionado == "pluton") {
    resultado = (pesoTierra / GRAVEDAD_TIERRA)*GRAVEDAD_PLUTON
  }
  return resultado.toFixed(2)
}

// Aqui escribiras la logica para calcular el peso en el planeta seleccionado
document.getElementById("calcular").addEventListener("click", function (event) {
  event.preventDefault()

  // Input que obtiene el valor del peso en la Tierra
  const pesoTierra = parseFloat(document.getElementById("pesoTierra").value)
  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado = document.getElementById("planeta").value
  // Elemento donde se mostrará el resultado final.
  const mensajeConElCalculoDelPeso = document.getElementById("resultado")
  // Validamos que el valor introducido sea un número con una función.
let mensaje;
if (!pesoTierra){
	console.log(pesoTierra, "pesoTierra")
     mensaje = "Por favor, Ingrese un numero Valido"
     mensajeConElCalculoDelPeso.textContent = mensaje
     return
 }
 

  if (typeof pesoTierra != "number" || pesoTierra < 0) {
    mensaje = "Ingrese un numero positivo"
  } else {
    mensaje = "Tu peso en el planeta" + " es: " + CalcularPeso(pesoTierra, planetaSeleccionado) + " kg";
  }

  mensajeConElCalculoDelPeso.textContent = mensaje
})

//FUNCION 2 ---------------------------------------------

function calcularTiempo(alturaCaida, planetaSeleccionado) {
  let resultado;
  if (planetaSeleccionado == "mercurio") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "venus") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "marte") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "jupiter") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "saturno") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "urano") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "neptuno") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  } else if (planetaSeleccionado == "pluton") {
    resultado = Math.sqrt((2 * alturaCaida)/GRAVEDAD_TIERRA)
  }
  return resultado.toFixed(2)
}

//* FORMULA PARA CALCULAR EL TIEMPO DE CAIDA EN SEGUNDOS
//* raiz2( (2 * altura de caida) / Gravedad en la Tierra )
//

// Aqui escribiras la logica para calcular el peso en el planeta seleccionado
document
  .getElementById("calcular-2")
  .addEventListener("click", function (event) {
    event.preventDefault()

    // Input que obtiene el valor del peso en la Tierra
    const alturaCaida = parseFloat(document.getElementById("alturaCaida").value)
    // Input que obtiene el nombre del planeta seleccionado
    const planetaSeleccionado = document.getElementById("planeta-2").value
    // Elemento donde se mostrará el resultado final.
    const mensajeConElCalculoDelPeso = document.getElementById("resultado-2")

    // Validamos que el valor introducido sea un número con una función
    let mensaje;
    if (!alturaCaida){
      console.log(alturaCaida, "alturaCaida")
      mensaje = "Por favor, Ingrese un numero Valido"
      mensajeConElCalculoDelPeso.textContent = mensaje
      return
      
   }

      if (typeof alturaCaida != "number" || alturaCaida < 0) {
        mensaje = "Ingrese un numero positivo"
      } else {
        mensaje = "Tu tiempo que tarda en caer " + "es: " + calcularTiempo(alturaCaida, planetaSeleccionado) +  " segundo"
      }
      mensajeConElCalculoDelPeso.textContent = mensaje  
 }
 );

/**
 * Escribe tu código aquí
 */

/**
 * Modificamos el texto del elemento resultado para mostrar el tiempo en el planeta seleccionado.
 *
 * Ejemplo: El objeto cae en 30 segundos
 */

//FUNCION 3 ---------------------------------------------
const DIAMETRO_JUPITER = 143200 // km
const DIAMETRO_SATURNO = 120536 // km
const DIAMETRO_URANO = 51118 // km
const DIAMETRO_NEPTUNO = 49528 // km
const DIAMETRO_TIERRA = 12756 // km
const DIAMETRO_VENUS = 12100 // km
const DIAMETRO_MARTE = 6794 // km
const DIAMETRO_MERCURIO = 4878 // km
const DIAMETRO_PLUTON = 2376 //km

function compararTamaño(planetaSeleccionado1, planetaSeleccionado2) {
  let resultado;
  if (planetaSeleccionado1 == "mercurio") {
    resultado = DIAMETRO_MERCURIO / DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "neptuno") {
    resultado = DIAMETRO_NEPTUNO / DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "marte") {
    resultado = DIAMETRO_MARTE / DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "urano") {
    resultado = DIAMETRO_URANO / DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "pluton") {
    resultado = DIAMETRO_PLUTON /DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "jupiter") {
    resultado = DIAMETRO_JUPITER /DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "venus") {
    resultado = DIAMETRO_VENUS / DIAMETRO_TIERRA
  } else if (planetaSeleccionado1 == "saturno") {
    resultado = DIAMETRO_SATURNO /DIAMETRO_TIERRA
  }
  return resultado
}
/**
 * FORMULA PARA COMPARAR TAMAÑOS
 * (Diametro Planeta 1 / Diametro Planeta 2)
 * Con esta formula obtienes cuantas veces mas grande es uno del otro
 * Por ejemplo: 10/5 = 2 -> El primer planeta es 2 veces el segundo
 * Si los pones al reves: 5/10 = 0.5 -> Te da un numero menor a cero
 * y significa que primer planeta es mas pequeño, en este caso la mitad del segundo
 */

// Aqui escribiras la logica para comparar los tamaños de dos planetas
document
  .getElementById("calcular-3")
  .addEventListener("click", function (event) {
    event.preventDefault()

    // Input que obtiene el nombre del planeta seleccionado
    const planetaSeleccionado1 = document.getElementById("planeta-3").value
    // Input que obtiene el nombre del planeta seleccionado
    const planetaSeleccionado2 = document.getElementById("planeta-4").value
    // Elemento donde se mostrará el resultado final.
    const mensajeConElCalculoDelPeso = document.getElementById("resultado-3")

    /**
     * Escribe tu código aquí
     */
    const Tamaño1 = calcularTamaño (planetaSeleccionado1)
    const Tamaño2 = calcularTamaño (planetaSeleccionado2)
    
    //Verificar si los planetas son validos
    if(Tamaño1 === undefined || Tamaño2 === undefined){
      return "Por favor, selecciona planetas validos"
    }
    
    let mensaje;
    if (Tamaño1 > Tamaño2) {
        mensaje = "El planeta Seleccionado 1 es aproximadamente mas grande que el planeta Seleccionado 2"
    } else if (Tamaño2 < Tamaño1) {
      mensaje = "El planeta Seleccionado 2 es aproximadamente veces más grande que planeta Seleccionado 1"
    } else {
      mensaje = "El planeta Seleccionado 1 y el planeta Seleccionado 2 tienen el mismo tamaño"
    }

    /**
   * Modificamos el texto del elemento resultado para mostrar la comparacion de tamaños
  
   * 
   * Ejemplo: El primero es 3 veces mas grande que el segundo
   */
    mensajeConElCalculoDelPeso.textContent = mensaje
  })

//FUNCION 4 ---------------------------------------------
//Planetas ordenados en orden de tamaño
const TAMANAÑO_PLUTON = 1
const TAMANAÑO_MERCURIO = 2
const TAMANAÑO_MARTE = 3
const TAMANAÑO_VENUS = 4
const TAMANAÑO_TIERRA = 5
const TAMANAÑO_NEPTUNO = 6
const TAMANAÑO_URANO = 7
const TAMANAÑO_SATURNO = 8
const TAMANAÑO_JUPITER = 9

function calcularTamaño(planetaSeleccionado1) {
  let resultado;
  if (planetaSeleccionado1 == "pluton") {
    resultado = TAMANAÑO_PLUTON
  } else if (planetaSeleccionado1 == "mercurio") {
    resultado = TAMANAÑO_MERCURIO
  } else if (planetaSeleccionado1 == "marte") {
    resultado = TAMANAÑO_MARTE
  } else if (planetaSeleccionado1 == "venus") {
    resultado = TAMANAÑO_VENUS
  } else if (planetaSeleccionado1 == "tierra") {
    resultado = TAMANAÑO_TIERRA
  } else if (planetaSeleccionado1 == "neptuno") {
    resultado = TAMANAÑO_NEPTUNO
  } else if (planetaSeleccionado1 == "urano") {
    resultado = TAMANAÑO_URANO
  } else if (planetaSeleccionado1 == "saturno") {
    resultado = TAMANAÑO_SATURNO
  } else if (planetaSeleccionado1 == "jupiter") {
    resultado = TAMANAÑO_JUPITER
  }
  return resultado
}
// Aqui escribiras la logica para calcular que planeta es mas grande
document
  .getElementById("calcular-4")
  .addEventListener("click", function (event) {
    event.preventDefault()

    // Input que obtiene el nombre del planeta seleccionado
    const planetaSeleccionado1 = document.getElementById("planeta-5").value
    // Input que obtiene el nombre del planeta seleccionado
    const planetaSeleccionado2 = document.getElementById("planeta-6").value
    // Elemento donde se mostrará el resultado final.
    const mensajeConElCalculoDelPeso = document.getElementById("resultado-4")

    /**
     * Escribe tu código aquí
     */
    let mensaje;
    if ( calcularTamaño(planetaSeleccionado1) > calcularTamaño(planetaSeleccionado2)){
    
      mensaje =  "El planeta Seleccionado 1 es mas grande que el Planeta Seleccionado 2"
    } else if (calcularTamaño(planetaSeleccionado1) < calcularTamaño(planetaSeleccionado2)) {
      mensaje ="El planeta Seleccionado 2 es mas grande que el Planeta Seleccionado 1"
    } else {
      mensaje = "El planeta Seleccionado 1 y el Planeta Seleccionado 2 son del mismo tamaño"
    }

    /**
     * Modificamos el texto del elemento resultado para mostrar que planeta es mas grande
     *
     * Ejemplo: El primer planeta es mas grande
     */

    mensajeConElCalculoDelPeso.textContent = mensaje;
  })
