//create an empty array called balls
let balls = [];
let me;
let deer;
let gun;
let r;
let g;
let b;


function setup() {
  createCanvas(500, 400);

  deer = new Deer(width/2, 300, 3);
  gun = new Gun(width/2,300,10)

}

function draw(){
	background(220);

  deer.drawMe();
  deer.moveMe();
  gun.drawGun();
  gun.moveGun();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

    if (frameCount % 2 == 0){
      gun.y = gun.y + 10
    }

    if (gun.y >= 500){
      gun.y=499
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Deer {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("brown");
        strokeWeight(3);
    		fill("brown");
		    ellipse(this.x+10,this.y,40,20); // head
        ellipse(this.x-30,this.y+20,100,20); //body

//antlerz
line(this.x+10, this.y+20, this.x, this.y-30); //left antler
line(this.x+10, this.y+20, this.x+30, this.y-30); //left antler
line(this.x, this.y, this.x, this.y);

//leggs
        line(this.x, this.y+70, this.x+10, this.y); //rightmost front leg
        line(this.x, this.y, this.x-30, this.y+60); // leftmost front leg
        line(this.x-60, this.y+60, this.x-50, this.y+10); // rightmost back leg
        line(this.x-90, this.y+60, this.x-70, this.y+20); // leftmost back leg

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the left arrow, move left by speed
        this.x -= this.speed;
	  }

  if (keyIsDown(RIGHT_ARROW)) { // if you hold the right arrow, move right by speed
      this.x += this.speed;
    }

}

  die(){

  }

}
//avatar class
class Gun {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}


	drawGun(){
    noFill();
    stroke("black");
        ellipse(this.x,this.y,80);
        line(this.x+10,this.y,this.x+38,this.y)
        line(this.x-10,this.y,this.x-38,this.y)
        line(this.x,this.y+10,this.x,this.y+38)
        line(this.x,this.y-10,this.x,this.y-38)
          ellipse(this.x,this.y,20);
	}

	moveGun(){
    if (keyIsDown(87)) { //if you hold the W key, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(63)){ // if you hold the S key, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(65)){
      this.x -= this.speed;
    }
    if (keyIsDown(68)){
      this.x += this.speed;
    }
    if (keyIsDown(32)){
      this.y = this.y-20
    }
  }
 bouncefloor(){
   if (this.y >= 580){
   this.jump = -this.jump;
   }

 }
}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
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
		this.y = this.y+.5;
	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= deer.x-15 && this.x <= deer.x+15 && this.y > deer.y-40 && this.y < deer.y+40){
      			this.speed = -this.speed;

    		}
  	}

}
