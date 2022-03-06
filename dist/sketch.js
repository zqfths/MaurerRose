
let n = 2;
let d = 71;
let x, y, s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Shape();
  let gui = new dat.GUI();
  gui.add(s, 'number', 1, 100);
  gui.add(s, 'diameter', 0, 360)
  angleMode(DEGREES);
} 

function draw() {
    background(0);
    translate(width/2, height/2);
    scale(2);
    stroke(255);

    noFill();
    beginShape();
    strokeWeight(0.5);
    for(let i = 0; i < 361; i++) {
        let k = i * s.diameter;
        let r = 150 * sin( s.number * k );
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);

    noFill();
    stroke(255,0,255, 100);
    strokeWeight(3);
    beginShape();
    for(let i = 0; i < 361; i++) {
        let k = i;
        let r = 150 * sin( s.number * k );
        x = r * cos(k);
        y = r * sin(k);
        vertex(x,y);
    }
    endShape(CLOSE);
}

function Shape(){
    this.number = 2;
    this.diameter = 71;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
