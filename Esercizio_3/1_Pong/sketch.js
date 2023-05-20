
function setup(){
	createCanvas(windowWidt, windowHeight)
  background(255)
}	

// Creazione del canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Definizione delle costanti
const BALL_COUNT = 20;  // Numero di palline
const MIN_RADIUS = 5;    // Raggio minimo delle palline
const MAX_RADIUS = 600;   // Raggio massimo delle palline
const BALL_SPEED = 1;    // Velocità delle palline

// Definizione della classe per le palline
class Ball {
  constructor(x, y, angle, radius, color) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.radius = radius;
    this.color = color;
  }
  
  update() {
    // Aggiorna la posizione della pallina
    this.x += Math.cos(this.angle) * BALL_SPEED;
    this.y += Math.sin(this.angle) * BALL_SPEED;
    
    // Rimbalzo sulle pareti
    if (this.x < this.radius || this.x > canvas.width - this.radius) {
      this.angle = Math.PI - this.angle;
    }
    if (this.y < this.radius || this.y > canvas.height - this.radius) {
      this.angle = -this.angle;
    }
  }
  
  draw() {
    // Disegna la pallina
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }
}

// Creazione delle palline
const balls = [];
for (let i = 0; i < BALL_COUNT; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
  const color = getRandomColor();
  const ball = new Ball(x, y, angle, radius, color);
  balls.push(ball);
}

// Funzione per ottenere un colore casuale
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Animazione
function animate() {
  // Pulisce il canvas
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  // Aggiorna e disegna le palline
  for (let i = 0; i < BALL_COUNT; i++) {
    const ball = balls[i];
    ball.update();
    ball.draw();
  }
  
  // Ripete l'animazione
  requestAnimationFrame(animate);
}

// Avvia l'animazione
animate();



