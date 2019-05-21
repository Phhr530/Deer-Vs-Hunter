let me;
let deer;
let gun;
let r;
let g;
let b;


function setup() {
  createCanvas(800, 550);

  deer = new Deer(width/2, 100, 3,true);
  gun = new Gun(width/2,300,10)

}

function draw(){
	background(220);

  deer.drawMe();
  deer.moveMe();
  gun.drawGun();
  gun.moveGun();
  deer.die();

    if (frameCount % 2 == 0){
      gun.y = gun.y + 10
    }

    if (gun.y >= 500){
      gun.y=499
	  }

}

//avatar class
class Deer {

	constructor(x,y, speed,alive){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.alive = alive;
	}

	drawMe(){  // draw the running person
if (this.alive==true){
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
  else{
    print("deer is dead")
  fill(0);
   rect(0,0,500,500)
  }

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
  if (gun.x >= this.x-90 && gun.x <= this.x+30 && gun.y >= this.y-10 && gun.y <= this.y+40 && keyIsDown(32)){
    this.alive = false;
    print(this.alive);
  }

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
