
const name = prompt('Come ti chiami?');
const lastname = prompt ('Qual è il tuo cognome?');
let fave_color = prompt('Qual è il tuo colore preferito?');

const elespan = document.getElementById('password');

elespan.innerHTML = name + lastname + fave_color; 

// elespan.innerHTML = `${name}${lastname}${fave_color}`;

// elespan.innerHTML = name.concat(lastname,fave_color);