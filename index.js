function Base (arg) {
  this.arg = arg;
}

Base.prototype.plus = function (...part) {
 this.arg = this.arg + part.reduce(function(item, next){
    return item+next
  })
  return this
}
Base.prototype.minus = function (){
  throw new Error ('This abstract method will be implement in child');
  
}

Base.prototype.multiply = function (){
  throw new Error ('This abstract method will be implement in child');
  
}


function StringBuilder (arg) {
  Base.call(this, arg);
}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.superclass= Base;

StringBuilder.prototype.minus = function (char) {
  return this.arg = this.arg.slice(0, -char);
}
StringBuilder.prototype.multiply = function (n) {
  return this.arg = this.arg.repeat(n);
}

const exp = new StringBuilder('dilbar');
console.log(exp.plus('aaaиии 22').minus(2).repeat(2));