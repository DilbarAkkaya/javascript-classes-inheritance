function Base (str) {
  this.str = str;
}

function StringBuilder (str, addStr) {
  Base.call(this, str);
  this.addStr = addStr;
}