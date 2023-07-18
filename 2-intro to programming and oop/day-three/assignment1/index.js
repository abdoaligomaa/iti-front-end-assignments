class Point3D {
  x;
  y;
  x;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  print3DPoint() {
    console.log(`3DPoint: X=${this.x}, Y=${this.y}, Z=${this.z}`);
  }
  calcDisctanceBetweenTwoPoints(point) {
    var equation =
      Math.pow(point.x - this.x, 2) +
      Math.pow(point.y - this.y, 2) +
      Math.pow(point.z - this.z, 2);
    return Math.sqrt(equation);
  }
}
// default x,y,z = 0
var point1 = new Point3D();
point1.print3DPoint();

// x,y,z take values
var point2 = new Point3D(0, 4, 3);
point2.print3DPoint();

// print the disctance between the two points
const d1 = point1.calcDisctanceBetweenTwoPoints(point2);
console.log("discance between two points is : ", d1);
