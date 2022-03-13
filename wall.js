class Wall {
    // Create a new Wall
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1)
        this.b = createVector(x2, y2)
    }

    // Display the wall
    show() {
        stroke(255)
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }
}