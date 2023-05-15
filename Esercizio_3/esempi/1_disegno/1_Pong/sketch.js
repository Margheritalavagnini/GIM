let posizioneX = 400
let posizioneY = 200
let velX = 2
let velY = 3




function setup(){
	createCanvas(800, 400)
	posizioneX = width/2
	posizioneY = height/2
	velX = random(-4, 4)
	velY = random(-4, 4)
	background(240, 60, 0)


}



function draw(){

	noStroke()

	//fill(map(posizioneX, 0, width, 0, 225), map(posizioneY, 0, width))

	fill(random(255), random(255), random(255))

	ellipse(posizioneX, posizioneY, 20, 20)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if(posizioneX >= 800 || posizioneX <= 0) velX = -velX
	if(posizioneY >= 400 || posizioneY <= 0) velY = -velY
	
}

function keyPressed(){

	save("pong.png")

}