function createSnowflake() {
	const snowflake = document.createElement("div");
	snowflake.innerHTML = "&#10052;";
	snowflake.style.position = "absolute";
	snowflake.style.top = "-10px";
	snowflake.style.fontSize = Math.random() * 10 + "px";
	snowflake.style.color = "#ffffff";
	snowflake.style.userSelect = "none";
	snowflake.style.background = "black"; // Aggiunta dello sfondo nero
	return snowflake;
  }
  
  function animateSnowflake(snowflake) {
	const start = Math.random() * window.innerWidth;
	const end = Math.random() * window.innerWidth;
	const duration = Math.random() * 10 + 5;
  
	snowflake.style.left = start + "px";
  
	snowflake.animate(
	  { transform: `translate(${end - start}px, ${window.innerHeight}px)` },
	  {
		duration: duration * 1000,
		easing: "linear",
		fill: "both",
		iterations: Infinity,
		iterationStart: Math.random(),
	  }
	);
  }
  
  function startSnowfall() {
	const snowfallContainer = document.createElement("div");
	snowfallContainer.style.position = "fixed";
	snowfallContainer.style.top = "0";
	snowfallContainer.style.left = "0";
	snowfallContainer.style.width = "100%";
	snowfallContainer.style.height = "100%";
	snowfallContainer.style.pointerEvents = "none";
	snowfallContainer.style.background = "black"; // Aggiunta dello sfondo nero
  
	document.body.appendChild(snowfallContainer);
  
	for (let i = 0; i < 50; i++) {
	  const snowflake = createSnowflake();
	  snowfallContainer.appendChild(snowflake);
	  animateSnowflake(snowflake);
	}
  }
  
  startSnowfall();
  