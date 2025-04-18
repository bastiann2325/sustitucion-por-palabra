// Declarar variables 
const WORD = "elocuencia";
const LETTER_KEYS = {}; 
let key = 0;


// Asignar claves a las letras de la palabra
for (let i = 0; i < WORD.length; i++) {
  // Capturar letra en esa posición
  const LETTER = WORD[i];
  // Verificar si la letra ya existe en el diccionario
  if (LETTER_KEYS[LETTER] === undefined) {
    // No existe, agregar al diccionario y asignar una clave
    LETTER_KEYS[LETTER] = key;
    key++;
  }
}

// Función para encriptar texto
function encrypt(text) {
  let result = "";
  for (let char of text.toLowerCase()) {
    if (LETTER_KEYS[char] !== undefined) {
      result += LETTER_KEYS[char];
    } else {
      result += char;
    }
  }
  return result;
}

// Capturar entradad del usuario
const texto = document.getElementById("texto");
// 