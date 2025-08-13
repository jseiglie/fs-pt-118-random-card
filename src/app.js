import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


/*
explicacion ejecucion, llamado y funcion anonima ejecutando funcion que recibe parametros

const returnPepe = (nombre) => {
  console.log('evento disparadoo')
  document.querySelector('#prueba').innerText = nombre
}
//si js se encuentra una funcion con sus () sola, la ejecuta

// // ejecuta al momento de lectura la funcion returnPepe porque tiene los ()
//document.querySelector('#prueba').addEventListener('click', returnPepe() ) 


// // llamamos a la funcion, pero la ejecuta el evento
//document.querySelector('#prueba').addEventListener('click', returnPepe )

//cuando pasamos un parametro a la funcion, tiene que ser una funcion anonima la que ejecuta la funcion returnPepe
document.querySelector('#prueba').addEventListener('click', ()=>returnPepe('Matia')) 


*/

//traernos las etiquetas html a js

const card = document.querySelector('#card')
// const body = document.querySelector('body)
const body = document.body
const userValue = document.querySelector('#userValue')
const cpuValue = document.querySelector('#cpuValue')
const btnUser = document.querySelector('#btnUser')
const btnCpu = document.querySelector('#btnCpu')
const winner = document.querySelector('#winner')
const btnCheckWinner = document.querySelector('#checkWinner')
const btnGuess = document.querySelector('#btnGuess')
const userInput = document.querySelector('#userInput')
const checkGuess = document.querySelector('#checkGuess')


const diceValues = [1, 2, 3, 4, 5, 6]
let myValue = 0
let pcValue = 0
const displayText = (str) => {
  //crear una etiqueta nueva desde js
  const text = document.createElement('p')
  //asignamos texto a la <p> que creamos
  text.innerText = str

  //aplicar class fs-3 a la <p> que creamos
  text.classList.add('fs-3')

  //cambiar mi fs-3 por fs-5 
  text.classList.replace('fs-3', 'fs-5')

  //añadir la <p> al body
  document.body.appendChild(text)
  //body.appendChild(text)
  console.log('completado')
}

//juego de dados
/*
1. numero aleatorio (uno para extraer valor del dado y otro para comparar con el valor que sacamos)
2. extraemos valor del dado
3. comparamos ambos numeros
*/

const generateRandom = (arr) => Math.floor(Math.random() * arr.length);

const getArrValue = (arr, player) => {
  if (player === 'user') {
    myValue = arr[generateRandom(arr)]
    userValue.innerText = myValue
    console.log('myValue -->', myValue)
  } else {
    pcValue = arr[generateRandom(arr)]
    //cpuValue.innerText = pcValue
    console.log('pcValue---> ', pcValue)
  }
}

const checkWinner = () => {
  if (myValue > pcValue) {
    if (winner.classList.contains('bg-danger')) {
      winner.classList.replace('bg-danger', 'bg-success')
    }
    winner.innerHTML = 'You win'
    return
  }
  if (winner.classList.contains('bg-success')) {
    winner.classList.replace('bg-success', 'bg-danger')
  }
  winner.innerHTML = 'You Loose'
  return
}


/*
1. generar un numero aleatorio 1-10
2. leer el numero que ponga el usuario
3. comprar el numero del usuario con el generado
4. devolver si acerto,si esta por debajo o por encima
*/
let numToBeGuessed;
let myNum
const obj = {name: 'pepe', age: 55}
//desestructurar un objeto
const { age } = obj
console.log(age)

const handleChange = (e) => {
  //console.log(e.target.value)
  //desestructuracion de objetos

  const {value} = e.target
  //console.log('desestructurado -> ', value)

  myNum = value
  console.log(myNum)
}


const checkGuessCorrect = () => {
  if (numToBeGuessed == myNum) {
    checkGuess.innerText = 'You got it!'
  }
  if (numToBeGuessed > myNum) {
    checkGuess.innerText = 'Add more!'
  }
  if (numToBeGuessed < myNum) {
    checkGuess.innerText = 'Take some out!'
  }
  
}

btnGuess.addEventListener('click', checkGuessCorrect)

const palos = ['♦', '♥', '♠', '♣']
console.log('paloo ---> ', palos[2])
//evento
window.onload = function () {
  //write your code here
  let meLeoAfuera = 'sera?????'
  userValue.innerText = myValue
  //cpuValue.innerText = pcValue
  console.log("Hello Rigo from the console!");
  displayText('Lola es la mejor')
  displayText('Pepe no se queda de brazos cruzados')
  displayText('Matia se unio a la fiesta')
  // console.log(getArrValue(diceValues))
  // console.log(getArrValue(diceValues))
  // console.log(getArrValue(diceValues))
  // console.log(getArrValue(diceValues))
  // console.log(getArrValue(diceValues))
  // console.log(getArrValue(diceValues))
  getArrValue(diceValues, 'user')
  getArrValue(diceValues, 'cpu')
  checkWinner()
  numToBeGuessed = Math.floor(Math.random()*10)+1
  console.log(numToBeGuessed)
  console.log('leyendo dentro del evento --> ', meLeoAfuera)
};


  //no funciona porque la variable existe solo en el SCOPE de la funcion
  // console.log('leyendo desde fuera del evento --> ', meLeoAfuera)

//cuando pasamos un parametro a la funcion, tiene que escribirse asi: ()=>funcion(parametro)
btnUser.addEventListener('click', () => getArrValue(diceValues, 'user'))
btnCpu.addEventListener('click', () => getArrValue(diceValues, 'cpu'))
btnCheckWinner.addEventListener('click', checkWinner)
//leer el input con el evento change
userInput.addEventListener('change', handleChange)