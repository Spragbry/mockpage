!function($){$.fn.appear=function(e,a){var r=$.extend({data:void 0,one:!0,accX:0,accY:0},a);
    return this.each(function(){var a=$(this);
        if(a.appeared=!1,!e)
            return void a.trigger("appear",r.data);

var n=$(window),p=function(){if(!a.is(":visible"))return void(a.appeared=!1);
    
var e=n.scrollLeft(),p=n.scrollTop(),t=a.offset(),c=t.left,i=t.top,o=r.accX,f=r.accY,s=a.height(),u=n.height(),d=a.width(),l=n.width();
i+s+f>=p&&p+u+f>=i&&c+d+o>=e&&e+l+o>=c?a.appeared||a.trigger("appear",r.data):a.appeared=!1},t=function()
    {if(a.appeared=!0,r.one){n.unbind("scroll",p);
    
var t=$.inArray(p,$.fn.appear.checks);t>=0&&$.fn.appear.checks.splice(t,1)}e.apply(this,arguments)};r.one?a.one("appear",r.data,t):a.bind("appear",r.data,t),n.scroll(p),$.fn.appear.checks.push(p),p()})},$.extend($.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=$.fn.appear.checks.length;
        if(e>0)for(;e--;)$.fn.appear.checks[e]()},run:function(){$.fn.appear.timeout&&clearTimeout($.fn.appear.timeout),$.fn.appear.timeout=setTimeout($.fn.appear.checkAll,20)}}),$.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=$.fn[a];r&&($.fn[a]=function(){var e=r.apply(this,arguments);
            return $.fn.appear.run(),e})})}(jQuery);