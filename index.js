function Base (str) {
  this.str = str;
}

Base.prototype.plus = function (...part) {
  return this.str + part.reduce(function(item, next){
    return item+next
  })
}
function StringBuilder (str, addStr) {
  Base.call(this, str);
this.addStr = addStr;

}

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

const exp = new StringBuilder('aaaa');
console.log(exp.plus('cccc', 'nnnnn', 'mmmm'))