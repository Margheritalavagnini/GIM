// Funzione per ottenere il numero con due cifre
function formatNumber(number) {
	return number < 10 ? "0" + number : number;
  }
  
  // Funzione per aggiornare l'orologio
  function updateClock() {
	// Ottieni la data e l'ora correnti
	var now = new Date();
	
	// Imposta la data di fine del timer
	var endDate = new Date("June 27, 2023 17:00:00");
	
	// Calcola la differenza tra la data di fine e la data corrente
	var timeRemaining = endDate - now;
	
	// Controlla se il timer è scaduto
	if (timeRemaining <= 0) {
	  console.log("Timer scaduto!");
	  return;
	}
	
	// Calcola i giorni, le ore, i minuti e i secondi rimanenti
	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	
	// Formatta i numeri con due cifre
	days = formatNumber(days);
	hours = formatNumber(hours);
	minutes = formatNumber(minutes);
	seconds = formatNumber(seconds);
	
	// Visualizza l'orologio
	console.clear();
	console.log("   _____ ");
	console.log("  /     \\ ");
	console.log(" |       |");
	console.log(" | " + days[0] + "   " + days[1] + " |");
	console.log(" | " + hours[0] + "   " + hours[1] + " |");
	console.log(" | " + minutes[0] + "   " + minutes[1] + " |");
	console.log(" | " + seconds[0] + "   " + seconds[1] + " |");
	console.log(" |_______|");
	
	// Richiama la funzione di aggiornamento ogni secondo
	setTimeout(updateClock, 1000);
  }
  
  // Avvia l'orologio
  updateClock();
  