tasks.module("homework");

tasks.add("knapsack-problem", {
  instruction: "Write a function that takes four parameters: `n`, `W`, `weights[]`, `costs[]` denoting consequently: number of items, knapsack's capacity, array of items' weights and array of items' costs, and which returns the maximal total cost of items that can be taken to the knapsack so that their total weight does not exceed `W`",
  js: "var f = function(n,W,weights,costs){\n\n};",
  tests: function(){
    test('test f', function(){
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(f, undefined, 'f is defined');
      strictEqual(typeof f, 'function', 'f is a function');

      strictEqual(f(14,35,[8,23,10,5,24,11,28,20,10,6,17,13,3,1],[8,12,3,11,14,13,1,13,9,1,6,16,20,17]), 77, 'test 1');
      strictEqual(f(14,31,[29,16,2,26,23,3,14,10,31,11,7,19,25,17],[7,12,7,13,5,20,5,13,20,2,20,19,18,6]), 66, 'test 2');
      strictEqual(f(10,30,[9,5,4,20,22,18,5,30,20,2],[5,9,1,3,20,7,7,4,18,3]), 34, 'test 3');
      strictEqual(f(7,39,[33,14,2,18,24,24,3],[5,5,12,15,7,9,1]), 33, 'test 4');
      strictEqual(f(15,35,[13,10,16,20,23,18,15,26,20,33,9,11,22,3,10],[18,8,19,19,6,4,3,17,10,9,18,2,16,17,6]), 61, 'test 5');
      strictEqual(f(16,30,[8,15,17,12,7,3,26,25,13,9,23,8,27,12,8,7],[17,13,19,5,14,8,2,16,15,11,1,14,19,3,18,18]), 67, 'test 6');
      strictEqual(f(13,38,[12,25,15,35,5,17,16,25,10,37,17,38,6],[20,19,7,19,12,2,13,14,15,18,4,9,15]), 62, 'test 7');
      strictEqual(f(15,37,[23,21,12,32,25,32,21,22,15,36,3,11,12,1,9],[7,7,18,18,20,11,4,6,20,7,14,15,8,12,6]), 65, 'test 8');
      strictEqual(f(18,27,[14,2,27,24,15,21,17,14,1,9,1,11,14,8,5,21,12,12],[13,11,2,19,17,16,18,8,14,8,4,10,15,10,10,10,5,15]), 57, 'test 9');
      strictEqual(f(11,18,[6,11,4,1,18,8,10,9,8,14,16],[9,7,8,17,16,7,10,4,2,11,10]), 36, 'test 10');
    });
  }
});
