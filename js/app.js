// Palabra para la sustitución
const word = "elocuencia";
// Diccionario de palabra de sustitución
const letterKeys = {}; 
// Variable para dar valores a las letras del diccionario
let value = 0;

// Asignar claves a las letras de la palabra
for (let i = 0; i < word.length; i++) {
  // Capturar letra en la posición de la iteración
  const letter = word[i];
  // Acceder al valor asociado a esa letra
  if (letterKeys[letter] === undefined) {
    // No existe la letra, agregarla al diccionario y asignar una valor (value)
    letterKeys[letter] = value;
    // Un valor ya fue asignado a una letra, cambiar valor (incrementar en uno)
    value++;
  }
}

// Función para encriptar texto
function encrypt(text) {
  // Variable para almacenar el texto cifrado
  let result = "";
  // Recorrer cada caracter de la cadena de texto "text" y almacenar cada uno (temporalmente) en "char"
  for (let char of text.toLowerCase()) {
    // Verificar si la letra actual tiene un valor asignado
    if (letterKeys[char] !== undefined) {
      // Lo tiene, agregar el valor de la letra a la variable "resultado"
      result += letterKeys[char];
    } else {
      // No lo tiene, agregar la letra a la variable "resultado"
      result += char;
    }
  }
  // Devolver texto cifrado
  return result;
}

// Obtener acceso a los elementos del HTML (inputs)
const inputField = document.getElementById("text");
const outputField = document.getElementById("encrypted_word");

// Cuando el usuario escriba algo en el input, ejecute esta función 
inputField.addEventListener("input", () => {
  const inputText = inputField.value; // Capturar y almacenar lo que el usuario está escribiendo
  const encryptedText = encrypt(inputText); // Cifrar lo que el usuario está escribiendo
  outputField.value = encryptedText; // Mostrar texto cifrado en el campo de texto cifrado
});

// Obtener acceso al elemento (button en el html) 
const clearButton = document.getElementById("clear");

// Cuando el usuario haga clic en el botón de limpiar, ejecute esta función
clearButton.addEventListener("click", () => {
  inputField.value = ""; // Limpiar el input para escribir
  outputField.value = ""; // Limpiar el input donde se muestra el cifrado
});
