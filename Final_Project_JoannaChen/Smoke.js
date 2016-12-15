var Smoke = function(position) {
  this.velocity = createVector(0, 0);
  this.position = position.copy();

  this.run = function() {
    this.update();
    this.display();
  }

  this.update = function() {
      this.velocity.y -= .02;
      this.position.add(this.velocity);
    }

  this.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(50, 200);
    ellipse(this.position.x, this.position.y, 15, 15);
  }
}