// script.js
console.log("Agenda Web");
// Crea una llista de contactes
const contactes = ["Jose", "Saida", "Ruben"];

// Crea l'element <ul> per a la llista
const llista = document.createElement('ul');

// Per cada contacte, afegeix un element <li> a la llista
contactes.forEach(nom => {
  const li = document.createElement('li');
  li.textContent = nom;
  llista.appendChild(li);
});

// Afegeix la llista a la pàgina
document.body.appendChild(llista);
