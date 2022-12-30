function Base (arg) {
  this.arg = arg;
}

Base.prototype.plus = function (...part) {
  return this.arg + part.reduce(function(item, next){
    return item+next
  })
}
function StringBuilder (arg, addArg) {
  Base.call(this, arg);
this.addArg = addArg;

}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

const exp = new StringBuilder(5);
console.log(exp.plus(3, 5, 3))