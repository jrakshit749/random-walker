const SCALE = 2
let fr = 10;
let pointsx = [];
let pointsy = [];

function setup() {
  let RANDOM_SIZE = floor(random(4,10));
  pointsx[0] += RANDOM_SIZE;
  pointsy[0] += RANDOM_SIZE;

  createCanvas(400*SCALE, 400*SCALE);
  x = random(100*SCALE,399*SCALE);
  y = random(100*SCALE, 399*SCALE)*SCALE;
  background(51);  
  for (let i = 0; i < RANDOM_SIZE; i++) {
    pointsx[i] = floor(random(50, 350*SCALE));
    pointsy[i] = floor(random(50, 350*SCALE));

  }
}

function draw() {
  frameRate(fr);
  stroke(floor(random(100,256)), floor(random(100,256)), floor(random(100,256)));
  strokeWeight(10);
  for (let i = 0; i < 6; i++) {
    point(pointsx[i],pointsy[i]);
  
  var r = floor(random(4));

  switch(r){
    case 0:
      pointsx[i] += 5*SCALE;
      break;
    case 1:
      pointsx[i] -= 5*SCALE;
      break;
    case 2:
      pointsy[i] += 5*SCALE;
      break;
    case 3:
      pointsy[i] -= 5*SCALE;
      break;
  }
}
  constrain(x, 1, 400*SCALE);
  constrain(y, 1, 400*SCALE);
}
