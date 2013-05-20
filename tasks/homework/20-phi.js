tasks.module("homework");

tasks.add("phi", {
  instruction: "Write a function phi which for given `n >= 1` returns `phi(n)=#{1<=k<=n : gcd(k,n)=1}`.",
  js: "var phi = function(n) {\n\n}",
  tests: function() {
    test('test', function(){
      notStrictEqual(phi, undefined, 'phi is defined');
      strictEqual(typeof phi, 'function', 'phi is a function');
      var phiref = function(n) {
        var res = n, sq = Math.sqrt(n)+1;
        for (var k=2; k<=sq; k++) {
          if (n%k === 0) {
            res /= k;
            res *= (k-1);
          }
          while (n%k === 0) n /= k;
          if (n == 1) break;
        }
        if (n != 1) {
          res /= n;
          res *= (n-1);
        }
        return res;
      };
      for (var i=1; i<=30; i++) strictEqual(phi(i), phiref(i), 'correct value for phi(' + i + ')');
      var t = [131072, 100140049, 1448655, 30233088, 35026003, 100000007];
      for (var i=0; i<t.length; i++) strictEqual(phi(t[i]), phiref(t[i]), 'correct value for phi(' + t[i] + ')');
    });
  }
});
