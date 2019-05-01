//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let r;
let g;
let b;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Bruh Sound Effect.mp3');
}


function setup() {
  createCanvas(1000, 780);
  r=255;
  g=255;
  b=255;

  //make one avatar called me
  me = new Avatar(width/2, 300, 10);

}

function draw(){
	background(r,g,b);

  me.drawMe();
  me.moveMe();

  if (frameCount % 15 == 0) {
      let  b = new Ball(width, random(0,580), -3, 1);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

    if (frameCount % 15 == 0) {
        let  b = new Ball(0, random(0,580), 3, 1);
        balls.push(b);
        console.log(balls); //print the balls array to the console
      }

    if (frameCount % 2 == 0){
      me.y = me.y + 10
    }

    if (me.y >= 500){
      me.y=499
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
          balls[i].bouncefloor();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}


	drawMe(){
    		// stroke("green");
        // strokeWeight(3);
    		// fill("blue");
		    // ellipse(this.x,this.y,20,20);
        // line(this.x,this.y, this.x, this.y+40);
        // line(this.x, this.y+40, this.x-20, this.y+60);
        // line(this.x, this.y+40, this.x+10, this.y+50);
        // line(this.x+10, this.y+50, this.x+5, this.y+60);
        // line(this.x, this.y+15, this.x-10, this.y+25);
        // line(this.x-10, this.y+25, this.x+10, this.y+35);
        fill("blue");
        rect(this.x,this.y,30,80);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)){
      this.x -= this.speed;
    }
    if (keyIsDown( RIGHT_ARROW)){
      this.x += this.speed;
    }
    if (keyIsDown(87)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(63)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(65)){
      this.x -= this.speed;
    }
    if (keyIsDown(68)){
      this.x += this.speed;
    }
    if (keyIsDown(32)){
      r = 255;
      g = 255;
      b = 255;
    }
	}

  die(){
if (me.y = 0){
  me.y = 779

    }
  }

}
//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y,speed,jump){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.jump = jump;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+ this.jump;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x && this.x <= me.x+30 && this.y > me.y && this.y < me.y+80){
      			this.speed = -this.speed;
            r = 0
            g = 0
            b = 0
            mySound.setVolume(0.1);
            mySound.play();

          }
  	}
 bouncefloor(){
   if (this.y >= 580){
   this.jump = -this.jump;
   }

 }
}
