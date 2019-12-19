
let snowflakes = []; // array to hold snowflake objects
let ttl = 100;
let img;

// function preload() {
//   img = loadImage('Play/images/leaf_ori.png');
// }

function setup() {
  img = loadImage('Play/images/bg.png');
  createCanvas(windowWidth, windowHeight);

  // fill(240);
  noStroke();
  // noLoop();
  initiate();
}

function initiate(){
  for(let i = ttl; i--;){
    snowflakes.push(new snowflake());
  }
}



function draw() {
  background(img);

  // image(img, (windowWidth-img.width/2)/2, (windowHeight-img.height/2)/2, img.width / 2, img.height / 2);
  if (snowflakes.length < ttl){
    snowflakes.push(new snowflake());
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    // flake.update(t); // update snowflake position
    // wind = (mouseX - width / 2) / width * 6;
    flake.update();
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.location = createVector(random(width, 0), random(-300, 0));
  // this.x = random(width, 0);
  // this.y = random(height, 0);
  this.size = random(5, 15);
  this.velocity = createVector(random() - 0.5,this.size * 0.3);
  // this.vx = random() - 0.5;
  // this.vy = this.size * 0.3;
  this.acceleration = createVector(0,0);
  this.collide = false;
  this.display = function() {
    ellipseMode(RADIUS);
    ellipse(this.location.x, this.location.y, this.size/2);
    // img.resize(this.size,0);
    // image(img, this.location.x, this.location.y);
  };
  this.update = function(){
    let mouseV = createVector(mouseX, mouseY);
    mouseV.sub(this.location);
    mouseV.setMag(0.05);
    mouseV.y = mouseV.y*0.1;
    this.acceleration = mouseV;
    if (this.collide==false) {
      // this.x += this.vx + min(max(wind, -10), 10);
      // this.y += this.vy;

      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
      this.velocity.limit(100);
	}
    // Wrap the snowflake to within the bounds of the page
	if (this.location.x > width + this.size) {
		this.location.x -= width + this.size;
	}

	if (this.location.x < -this.size) {
		this.location.x += width + this.size;
	}

	if (this.location.y > height + this.size) {
		// this.location.x = random() * width;
		// this.location.y -= height + this.size * 2;
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);

	}
    var dx = mouseX - this.location.x;
	var dy = mouseY - this.location.y;
    this.collide = this.location.y < mouseY && dx * dx + dy * dy < 1000;
  }

}
