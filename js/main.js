requirejs.config({
  paths: {
    jquery: 'jquery-3.1.1.min'
  }
});
requirejs(['jquery', 'backtop'], function($, backtop) {
  $('#totop').backtop({
    mode: 'move', //定义模式 move/go
    speed: 2000, //速度
    pos: 100, //在哪个位置显示隐藏按钮
    dest: 50 //顶部的目的地
  })

})
