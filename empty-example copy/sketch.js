
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
        ellipse(this.x,this.y,80);
        line(this.x+10,this.y,this.x+38,this.y)
        line(this.x-10,this.y,this.x-38,this.y)
        line(this.x,this.y+10,this.x,this.y+38)
        line(this.x,this.y-10,this.x,this.y-38)
          ellipse(this.x,this.y,20);
	}

	moveMe(){
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
