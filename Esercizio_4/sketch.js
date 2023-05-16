
let backgroundCol = 21

let Circle = class {
    constructor() {
        this.ang = 0
    }

    drawLine(length, rot) {
        push()
            rotate(rot)
            line(0, 0, length, 0)
        pop()
    }

    draw(w, h, start, stop) {
        arc(0, 0, w, h, start, stop)
        this.drawLine(100 - (10 * (15 - (w / 20))), start == 0 && stop || start)
    }
}

let Time = class {
    constructor() {
        this.oldValOne = 0
        this.oldValTwo = 0

        this.valOneAdd = 0
        this.valTwoAdd = 0
    }

    draw(val, xOne, xTwo) {
        let valOne = val.toString().split("")[0]
        let valTwo = val.toString().split("")[1]

        if (valOne == this.oldValOne) {
            this.valOneAdd = lerp(this.valOneAdd, 50, .25)
        } else {
            this.valOneAdd = lerp(this.valOneAdd, 0, .25)
        }
        text(valOne, xOne, height - 35 - this.valOneAdd)
        
        if (valTwo == this.oldValTwo) {
            this.valTwoAdd = lerp(this.valTwoAdd, 50, .25)
        } else {
            this.valTwoAdd = lerp(this.valTwoAdd, 0, .25)
        }
        text(valTwo, xOne + 25, height - 35 - this.valTwoAdd)

        this.oldValOne = valOne
        this.oldValTwo = valTwo
    }
}

let milCol, minCol, hCol, secCol
function setupColors() {
	milCol = color(225)
	minCol = color(225)
	hCol = color(255)
	secCol = color(255,0,0)
}

let milCircleOne, milCircleTwo, secCircle, minCircle, hCircle
function setupCircles() {
	milCircleOne = new Circle()
	milCircleTwo = new Circle()

	secCircle = new Circle()

	minCircle = new Circle()

	hCircle = new Circle()
}

let hourTime, minTime, secTime
function setupTime() {
	hourTime = new Time()

	minTime = new Time()

	secTime = new Time()
}

function setup() {
	createCanvas(400, 500);
  
	angleMode(DEGREES);

	setupCircles()

	setupColors()

	setupTime()
}

function millies() {
	let tempDate = new Date()
	return tempDate.getMilliseconds()
}

let timeSpacerAmount = 25
let timeXStart = 105
function draw() {
	let h = hour()
	let min = minute()
	let sec = second()
	let mil = millies()
	
	background(0)
	translate(200, 200)
	rotate(-90)

	noFill()
	strokeWeight(3)
	stroke(milCol)
	let milAng = map(mil, 0, 1000, 0, 360)
	if (sec % 2 == 1) {
		milCircleOne.draw(300, 300, 0, milAng)
	} else {
		milCircleTwo.draw(300, 300, milAng, 0)
	}

	stroke(secCol)
	let secAng = map(sec, 0, 60, 0, 360)
	secCircle.ang = lerp(secCircle.ang, secAng, .1)
	secCircle.draw(280, 280, 0, secCircle.ang)

	stroke(minCol)
	let minAng = map(min, 0, 60, 0, 360)
	minCircle.ang = lerp(minCircle.ang, minAng, .1)
	minCircle.draw(260, 260, 0, minCircle.ang)

	stroke(hCol)
	let hAng = map(h % 12, 0, 12, 0, 360)
	hCircle.ang = lerp(hCircle.ang, hAng, .1)
	hCircle.draw(240, 240, 0, hCircle.ang)


	stroke(220)
	point(0, 0)

	rotate(90)
	translate(-200, -200)

	fill(255)
	stroke(0)
    strokeWeight(0)
	textAlign(CENTER, CENTER)
	textSize(15)

	hourTime.draw(h < 10 && "0" + h || h, timeXStart, timeXStart + timeSpacerAmount)
	text("|", timeXStart + timeSpacerAmount * 2, height - 85) 
	minTime.draw(min < 10 && "0" + min || min, timeXStart + timeSpacerAmount * 3, timeXStart + timeSpacerAmount * 4)
	text("|", timeXStart + timeSpacerAmount * 5, height - 85) 
	secTime.draw(sec < 10 && "0" + sec || sec, timeXStart + timeSpacerAmount * 6, timeXStart + timeSpacerAmount * 7)
}