function Base (str) {
  this.str = str;
}

Base.prototype.plus = function (part) {
  return this.str + part;
}

function StringBuilder (str, addStr) {
  Base.call(this, str);
  this.addStr = addStr;
}