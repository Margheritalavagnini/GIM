
function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}



function draw(){
	
	// pioggia 1 - per aumentare la quantita di pioggia basta moltiplicare il codice 
	//finche non si è soddisfatti, si puo fare manualmente o digitalmente scrivendolo un altra loop
	
	
	background(0, 0, 0)

	rotateX(mouseY*0.01)
	rotateY(mouseY*0.01)

	let lato = 500

	if(mouseIsPressed) randomSeed(0)
	
	for(let i=0; i<50; i=i+1){
		
		
		let lunghezza = random(20,100)
		let spessore = random(1,3)
		let posX = random(- lato,lato)
		let posY = random(- lato,lato)
		let posZ = random(- lato,lato)
		
		
		stroke(255)
		strokeWeight(spessore)

		line(posX, posY, posZ, posX, posY, posZ + lunghezza)
	}


}
