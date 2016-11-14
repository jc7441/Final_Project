var Tears = function(position) {
  this.velocity = createVector(0, 0);
  this.position = position.copy();

  this.run = function() {
    this.update();
    this.display();
  }

  this.update = function() {
      this.velocity.y+=.05;
      this.position.add(this.velocity);
    }

  this.display = function() {
    stroke(109, 146, 194);
    fill(109, 146, 194, 200);
    ellipse(this.position.x, this.position.y, 2, 2);
  }
}