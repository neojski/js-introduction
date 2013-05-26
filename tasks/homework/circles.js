tasks.module("homework");

tasks.add('circles', {
  instruction: 'You have given several smaller circles (class: `circle`) and one bigger (id: `big`). Write function `onClick` which moves all smaller circles inside bigger one when button is clicked. Use `top` and `left` properties.',

  html: '\
  <div style="height: 200px; width: 100%;position:relative">\
  <div id="big" style="position: absolute;border-radius: 50%;width: 100px;height: 100px;top:25%; left:3%;background-color: #bbb;"> </div>\
  <div class="circle" style="position: absolute;border-radius: 50%;  width: 20px;  height: 20px;background-color: #ff0;top: 23%;left: 71%;"> </div>\
  <div class="circle" style="position: absolute;border-radius: 50%;width: 20px;height: 20px;background-color: #ff0;top: 25%;left: 66%;"> </div>\
  <div class="circle" style="position: absolute;border-radius: 50%;width: 20px;height: 20px;background-color: #ff0;top: 9%;left: 58%;"> </div>\
  <div class="circle" style="position: absolute;border-radius: 50%;width: 20px;height: 20px;background-color: #ff0;top: 38%;left: 36%;"> </div>\
  <div class="circle" style="position: absolute;border-radius: 50%;  width: 20px;  height: 20px;background-color: #ff0;top: 33%;left: 51%;"> </div></div>',

  js: 'function onClick(){\n\t//TODO\n}',
  tests: function(){
    test('circles', function(){
      notStrictEqual(onClick, undefined, 'onClick is defined');
      strictEqual(typeof onClick, 'function', 'onClick is a function');
      var r1 = $('#big').width()/2;
      onClick();
      var r2 = $('#big').width()/2;
      strictEqual(r1,r2,'radius is unchanged');
      var counter = 1;
      $('.circle').each(function() {
        var r = $('#big').width()/2;
        var x = $('#big').position().left+r;
        var y = $('#big').position().top+r;
        var r1 = $(this).width()/2;
        var x1 = $(this).position().left+r1;
        var y1 = $(this).position().top+r1;
        var dist = Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        ok(dist < r - r1,"circle"+counter+" inside");
        counter++;
      });
    });
  }
});
