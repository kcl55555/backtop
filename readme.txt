这是一个用RequireJS写的返回顶部的一个插件，
具体用法是：
$('#id').backtop({
   mode:'move',
speed:800,
pos: 100,
dest:0
})

#id 是按钮的元素，可以是#id 也可以是.class 
mode 是滚动模式，move就是有动画效果，go就是直接跳转，没有滚动效果
pos 是按钮的显示隐藏的位置
dest 是滚动的目的地
