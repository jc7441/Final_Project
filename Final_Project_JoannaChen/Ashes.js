var Ashes = function(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(0);
    strokeWeight(0);
    fill(0);
    ellipse(this.x, this.y, 1.5, 1.5);
  }
}