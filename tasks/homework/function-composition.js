tasks.module("homework");

tasks.add("function-composition", {
  instruction: "Write a function compose(f, g) which, for given functions f:Y->Z, g:X->Y, returns function h=f∘g. You can assume that g takes only one argument.",
  js: "var compose = function(f, g){\n\n}",
  tests: function(){
    test('test compose', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(compose, undefined, 'compose is defined');
      strictEqual(typeof compose, 'function', 'compose is a function');

      var rev = function(s){ return s.split("").reverse().join(""); };
      var doub = function(s){ return s+s; };
      var inc = function(x){ return x+1; };

      strictEqual(typeof compose(rev, rev), 'function', 'compose returns a function');

      strictEqual(compose(doub, doub)(2), 8, 'correct value for 2*x, 2*x');
      strictEqual(compose(rev, rev)('wut'), 'wut', 'correct value for reverse(x), reverse(x)');
      strictEqual(compose(doub, rev)('abc'), 'cbacba', 'correct value for x+x, reverse(x)');
      strictEqual(compose(inc, doub)(4), 9, 'correct value for x+1, 2*x');
      strictEqual(compose(doub, inc)(4), 10, 'correct value for 2*x, x+1');
    });
  }
});
