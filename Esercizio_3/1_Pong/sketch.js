functionSetup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

// Creazione delle palle
const numPalle = 5; // Numero di palle
const diametroPalle = 50; // Diametro delle palle
const palle = [];

for (let i = 0; i < numPalle; i++) {
  const palla = document.createElement("div");
  palla.className = "palla";
  palla.style.width = diametroPalle + "px";
  palla.style.height = diametroPalle + "px";
  palla.style.left = Math.random() * 100 + "%";
  palla.style.top = Math.random() * 100 + "%";
  document.body.appendChild(palla);
  palle.push(palla);
}

// Animazione dell'effetto ottico
setInterval(() => {
  palle.forEach((palla) => {
    palla.style.backgroundColor = getRandomColor();
  });
}, 1000 / 30);

// Funzione per generare un colore casuale
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}