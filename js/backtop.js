define(['jquery'],function($){
  class Backtop{
    constructor(el, opts){
      let DEFAULTS={
        mode:'move',
        speed:800,
        dest:0,
        pos:$(window).height()
      };
      this.$el=$(el);
      this.opts=$.extend({},DEFAULTS,opts)
      this.checkpos();
      if(this.opts.mode=='move'){
        this.$el.on('click', $.proxy(this.move, this))
      }else{
        this.$el.on('click', $.proxy(this.go, this))
      }
      $(window).on('scroll',$.proxy(this.checkpos, this))
    }
    move(){
          if($(window).scrollTop()!=this.opts.dest){//判断有没有到达终点
              if(!$('html, body').is(':animated')){//判断有没有在动画中
                  $('html ,body').animate({
                    'scrollTop': this.opts.dest
                  }, this.opts.speed)
              }
          }
    }
    go(){
      $('html ,body').scrollTop(0)
    }
    checkpos(){
      if($(window).scrollTop()> this.opts.pos){
        this.$el.fadeIn()
      }else{
        this.$el.fadeOut()
      }
    }
  }
  $.fn.extend({//注册jquery插件
    backtop:function(opts){
      return this.each(function(){
        new Backtop(this, opts)
      })
    }
  })
  return {//封装返回
    backtop:Backtop
  }
})
