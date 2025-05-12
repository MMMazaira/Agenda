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
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.querySelector("#nom");
  if (input.value.trim() === "") {
    alert("El camp no pot estar buit");
    return;
  }
  // Lògica per afegir el contacte...
});
