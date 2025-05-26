let x = 1 // declaro la variable x y almaceno 1
let total = 0 // decalro la variable total y almaceno 0
let pares = 0 // decalro la variable pares y almaceno 0
let impares = 0 // decalro la varibale impares y almaceno 0

do { // iniciamos el buqle do 
  total += x // le sumamos x a total

  if (x % 2 === 0) { // si x es par
    total -= 1 // le resta 1
    pares++ // incrementa pares
  } else { // si no se cumple 
    impares++ // incrementa impares 
  }

  if (total > 15) { // si, total es mayor que 15
    console.log("Límite superado") // imprime limite superado
    break // detiene el codigo cuando sea mayor que 15
  }

  x++ // incrementa x
} while (x <= 6) // inicia el bucle hasta que x sea menor que 6

console.log("Total:", total) // imprime total y la condicion de total 
console.log("Números procesados:", pares + impares) // imprime numeros procesados y el valor acumulado de pares + impares
console.log("Pares:", pares) // imprime pares y el valor de pares almacenado
console.log("Impares:", impares) // impre impares y el valor almacenado
