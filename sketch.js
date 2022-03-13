let walls = [];
let particle;
let xoff = 0;
let yoff = 1000;

function setup(){
    // createCanvas(canvasWidth, canvasHeight)
    createCanvas(400, 400)

    // Create Random Walls
    for(let i = 0; i<5; i++) {
        walls.push(new Wall(random(width), random(height), random(width), random(height)))
    }

    // Create walls of the canvas
    walls.push(new Wall(0, 0, width, 0))
    walls.push(new Wall(0, 0, 0, height))
    walls.push(new Wall(width, 0, width, height))
    walls.push(new Wall(0, height, width, height))
}

function draw() {
    background(0)
    particle = new Particle()
    for (let wall of walls) {
        wall.show()
    }
    particle.update(noise(xoff) * width, noise(yoff) *  height)
    particle.show()
    particle.look(walls)

    xoff += 0.01
    yoff += 0.01
    
}