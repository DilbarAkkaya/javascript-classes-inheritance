{
  function Base(arg) {
    this.arg = arg;
  };

  Base.prototype.plus = function (...arg) {
    this.arg = this.arg + arg.reduce(function (item, next) {
      return item + next;
    });
    return this;
  };
  Base.prototype.minus = function () {
    throw new Error('This abstract method will be implement in child');
  };
  Base.prototype.multiply = function () {
    throw new Error('This abstract method will be implement in child');
  };
  Base.prototype.divide = function () {
    throw new Error('This abstract method will be implement in child');
  };
  Base.prototype.get = function () {
    return this.arg;
  };

  function StringBuilder(arg) {
    Base.call(this, arg || '');
  };
  StringBuilder.prototype = Object.create(Base.prototype);
  StringBuilder.prototype.constructor = StringBuilder;
  StringBuilder.prototype.superclass = Base;
  StringBuilder.prototype.minus = function (char) {
    this.arg = this.arg.slice(0, -char);
    return this;
  };
  StringBuilder.prototype.multiply = function (num) {
    var arrOfStr = [this.arg];
    arrOfStr.length = num;
    this.arg = arrOfStr.join(this.arg);
    return this;
  };
  StringBuilder.prototype.divide = function (n) {
    var k = Math.floor((this.arg.length) / n);
    this.arg = this.arg.slice(0, k);
    return this;
  };
  StringBuilder.prototype.remove = function (str) {
    if (this.arg.match(str)) {
      this.arg = this.arg.split(`${str}`).join('');
    }
    return this;
  };
  StringBuilder.prototype.sub = function (from, n) {
    this.arg = this.arg.substring(from, n + 1);
    return this;
  };
  const strBuilder = new StringBuilder('Hello');
  console.log(strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 1)
    .get()
  );

  class IntBuilder extends Base {
    constructor(arg = 0) {
      super(arg)
    };
    static random(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    };
    minus(...arg) {
      this.arg = this.arg - arg.reduce(function (item, next) {
        return item + next
      })
      return this;
    };
    multiply(arg) {
      this.arg = this.arg * arg;
      return this;
    };
    divide(arg) {
      this.arg = this.arg / arg;
      return this;
    };
    mod(arg) {
      this.arg = this.arg % arg;
      return this;
    };
  }
  let intBuilder = new IntBuilder(10);

  console.log(
    intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()
    );
  console.log(IntBuilder.random(10, 20));
}

{
  class Base {
    constructor(arg) {
      this.arg = arg;
    }
    plus(...part) {
      this.arg = this.arg + part.reduce(function (item, next) {
        return item + next;
      })
      return this;
    };
    minus() {
      throw new Error('This abstract method will be implement in child');
    }
    multiply() {
      throw new Error('This abstract method will be implement in child');
    };
    divide() {
      throw new Error('This abstract method will be implement in child');
    };
    get() {
      return this.arg;
    };
  };
  class IntBuilder extends Base {
    constructor(arg = 0) {
      super(arg);
    };
    static random(from, to) {
      return Math.floor(Math.random() * (to - from + 1)) + from;
    };
    minus(...arg) {
      this.arg = this.arg - arg.reduce(function (item, next) {
        return item + next;
      })
      return this;
    };
    multiply(arg) {
      this.arg = this.arg * arg;
      return this;
    };
    divide(arg) {
      this.arg = this.arg / arg;
      return this;
    };
    mod(arg) {
      this.arg = this.arg % arg;
      return this;
    };
  };

  let intBuilder = new IntBuilder(10);
  console.log(
    intBuilder
      .plus(2, 3, 2)
      .minus(1, 2)
      .multiply(2)
      .divide(4)
      .mod(3)
      .get()
  );
  console.log(IntBuilder.random(10, 100));

  function StringBuilder(arg) {
    Object.assign(this, new Base(arg || ''));
  };

  StringBuilder.prototype = Object.create(Base.prototype);
  StringBuilder.prototype.constructor = StringBuilder;
  StringBuilder.prototype.superclass = Base;
  StringBuilder.prototype.minus = function (char) {
    this.arg = this.arg.slice(0, -char);
    return this;
  };
  StringBuilder.prototype.multiply = function (num) {
    var a = [this.arg];
    a.length = num;
    this.arg = a.join(this.arg);
    return this;
  };
  StringBuilder.prototype.divide = function (n) {
    var k = Math.floor((this.arg.length) / n);
    this.arg = this.arg.slice(0, k);
    return this;
  };
  StringBuilder.prototype.remove = function (str) {
    if (this.arg.match(str)) {
      this.arg = this.arg.split(`${str}`).join('');
    }
    return this;
  };
  StringBuilder.prototype.sub = function (from, n) {
    this.arg = this.arg.substring(from, n + 1);
    return this;
  };

  const strBuilder = new StringBuilder('Hello');
  console.log(strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 1)
    .get()
  );
}