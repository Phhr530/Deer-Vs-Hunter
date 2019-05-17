
//create a variable to hold your avatar
let me;
let r;
let g;
let b;

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

    if (frameCount % 2 == 0){
      me.y = me.y + 10
    }

    if (me.y >= 500){
      me.y=499
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
        ellipse(this.x,this.y,80);
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
 bouncefloor(){
   if (this.y >= 580){
   this.jump = -this.jump;
   }

 }
}
