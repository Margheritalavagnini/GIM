
function setup(){
	createCanvas(400,400)
	
}



function draw(){
	
	let ora = "|" + hour() + "|" + minute() + "|" + "0" + second() + "|"
	
	background(0)

	textSize(60)
	textFont("monospace")
	textAlign(CENTER,CENTER)
	fill (255)
	text(ora, width/2, height/2)

}
h