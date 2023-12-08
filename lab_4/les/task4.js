'use strict'
function Vector (x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sum = (vector) => new Vector(this.x + vector.x, this.y+ vector.y, this.z + vector.z);
    this.mult = (vector) => new Vector(this.x * vector.x ,this.y * vector.y, this.z * vector.z);
    this.sub = (vector) => new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    this.skal = (vector) => new Vector(this.x * vector, this.y * vector, this.z * vector);
    this.len = () => Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);

}
let vector = new Vector(3,0,0);
let vector2 = new Vector(0,3,0);
console.log(vector.sum(vector2));
console.log(vector.mult(vector2));
console.log(vector.skal(3));
console.log(vector.len());
console.log(vector.sub(vector2));