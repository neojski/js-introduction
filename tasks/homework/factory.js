tasks.module("homework");

tasks.add("factory", {
  instruction: "Write a function `factory` with takes two arrays `instructions` and `material` as arguments and returns an array `results`, containing results of instructions. If the instruction is 0, take two numbers from `material` and add them, then write the result to the `results`. Instruction 1 does the same, but the operation is multiplying. If the instruction array is empty, return an empty array",
  js: "var factory = function(instructions,material){\n\n};",
  tests: function () {
    test('test factory', function () {
      // for testing functions see: http://api.qunitjs.com/category/assert/
      notStrictEqual(factory, undefined, 'factory is defined');
      strictEqual(typeof factory, 'function', 'factory is a function');

      var instr=[];
      var mater=[];

      deepEqual(factory(instr,mater), [], 'empty instruction array');

      instr.push(0);
      instr.push(0);
      instr.push(0);
      instr.push(0);
      mater.push(1);
      mater.push(5);
      mater.push(0);
      mater.push(0);
      mater.push(-3);
      mater.push(1);
      mater.push(2);
      mater.push(1);

      deepEqual(factory(instr,mater), [6,0,-2,3], 'addition only');

      instr=[];
      mater=[];

      instr.push(1);
      instr.push(1);
      instr.push(1);
      instr.push(1);

      mater.push(0);
      mater.push(1);
      mater.push(2);
      mater.push(3);
      mater.push(-1);
      mater.push(-1);
      mater.push(-2);
      mater.push(10);

      deepEqual(factory(instr,mater), [0,6,1,-20], 'addition only');

      instr=[];
      mater=[];

      instr.push(1);
      instr.push(0);
      instr.push(0);
      instr.push(1);
      instr.push(1);

      mater.push(4);
      mater.push(2);
      mater.push(-4);
      mater.push(16);
      mater.push(8);
      mater.push(-128);
      mater.push(1024);
      mater.push(256);
      mater.push(-4);
      mater.push(0);

      deepEqual(factory(instr,mater), [8,12,-120,262144,0], 'full steam ahead!');
    });
  }
}); 
