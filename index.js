function Base (arg) {
  this.arg = arg;
}

Base.prototype.plus = function (...part) {
  return this.arg + part.reduce(function(item, next){
    return item+next
  })
}
Base.prototype.minus = function (){
  throw new Error ('This abstract method will be implement in child');
}



function StringBuilder (arg, addArg) {
  Base.call(this, arg);
this.addArg = addArg;

}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.minus = function (char) {
  return this.arg.slice(0, -char);
}

const exp = new StringBuilder('dilbar');
console.log(exp.minus(3));