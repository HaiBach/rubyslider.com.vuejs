/**
 * RUBYBOX JQUERY PLUGINS
 * @package         RubyBox
 * @author          HaiBach
 * @link            http://
 * @version         1.x
 */

(function(d){window.rb01MODULE||(window.rb01MODULE={});window.rb01VA||(window.rb01VA={codeName:"rubybox",codeData:"options",namespace:"rb01"});d[rb01VA.codeName]=function(e,c){var a={self:e,codekey:Math.ceil(1E9*Math.random()),ev:d("<div/>"),o:c},g={checkInit:function(){a.isOpacity=this.testCSS("opacity");a.isTf3D=this.testCSS("perspective");a.isTs=this.testCSS("transition");a.prefixTf=this.prefix("transform");a.prefixTs=this.prefix("transition");a.href=null!=c.href?c.href:e.attr("href")?e.attr("href"):
null;a.content=null!=c.content?c.content:e.data("content")?e.data("content"):null},autoCheckType:function(){var b=a.ns+"content",f=function(b,c){if(null==a.type)if(null==b)a.type=c;else{var d=a.href.match(b);null!=d&&d[0]&&(a.type=c)}};null!=a.href?(a.href=a.href.replace(/(^\s+|\s+$)/g,""),a.type="auto"==c.type?null:c.type,f(/\.(jpg|jpeg|png|gif|ico)$/g,"image"),f(/^(\#|\.\w+)/gi,"inline"),"inline"==a.type&&(a.$content=d(a.href).addClass(b))):f(null,"html");f(null,"media")},camelCase:function(a){return a.replace(/-([a-z])/gi,
function(a,b){return b.toUpperCase()})},testCSS:function(a,c){var d=document.createElement("p").style,e=["Webkit","Moz","ms","O"],g=["-webkit-","-moz-","-ms-","-o-"],h=this.camelCase(a);if(void 0!=d[h])return c?"":!0;for(var h=h.charAt(0).toUpperCase()+h.slice(1),k=0,l=e.length;k<l;k++)if(void 0!=d[e[k]+h])return c?g[k]:!0;return!1},prefix:function(a){return this.testCSS(a,!0)},isNum:function(a){return"number"==typeof a},tf:function(b){var c={},d="";null!=b[0]&&(d+="translate3d("+b[0]+"px,"+b[1]+
"px,0) ");null!=b[2]&&(d+="scale("+b[2]+","+b[3]+") ");c[a.prefixTf+"transform"]=d;return c}},h={init:function(){var b=rb01VA.codeData,f=e.data(b);"string"==typeof f&&(f=f.replace(/\u0027/g,'"'),f=d.parseJSON(f));f=d.isPlainObject(f)?f:{};a.o=c=d.extend(!0,c,f);e.removeAttr("data-"+b);a.ns=rb01VA.namespace;a.actived=a.ns+"actived";a.classTemp=" ";g.autoCheckType();rb01VA.nLink?rb01VA.nLink++:rb01VA.nLink=1;b="."+a.ns+a.codekey;a.evName={click:"click"+b,resize:"resize"+b,key:"keyup"+b}},afterRender:function(){a.$wrap.addClass(a.ns+
(a.isOpacity?"":"no-")+"opacity "+(a.ns+(a.isTs?"":"no-")+"transition"))},vaUpdate:function(){var b=" "+a.ns;a.wrapClass=(c.isFullscreen?b+"fullscreen":"")+(null!=c.fx?b+"fx-"+c.fx:"")+(b+"type-"+a.type)+(null!=c.classMore?" "+c.classMore:"");a.$wrap.addClass(a.wrapClass);b=c.margin;a.m=[0,0,0,0];g.isNum(b)&&(a.margin=[b,b,b,b]);d.isArray(b)&&g.isNum(b[0])&&g.isNum(b[1])&&g.isNum(b[2])&&g.isNum(b[3])&&(a.margin=b);if(a.isTs&&"zoom"==c.fx){var b=" "+c.speed/1E3+"s",f={};f[a.prefixTs+"transition"]=
a.prefixTf+"transform"+b+", opacity"+b;f[a.prefixTf+"transform-origin"]="0 0";a.$outer.css(f)}}},l={codeMain:function(){var b=a.ns,f=c.html.main.replace(/\{ns\}/g,b);d("body").append(f);a.$wrap=d("."+b+"wrap");a.$outer=d("."+b+"outer");a.$inner=d("."+b+"inner");a.$holder=d('<div class="'+b+'holder"></div>');a.$close=d(c.html.close.replace(/\{ns\}/g,b));l.appendToInner();a.$wrap.detach()},beforeOpen:function(){"inline"==a.type&&a.$content.after(a.$holder).appendTo(a.$inner);a.$wrap.appendTo(d("body"))},
afterClose:function(){a.$wrap.detach();"inline"==a.type&&a.$holder.after(a.$content).detach()},appendToInner:function(){c.isBtnClose?a.$close.appendTo(a.$outer):a.$close.detach()}},n={beforeOpen:function(){var b=d(window).width();d("body").addClass(a.ns+"lock");var c=d(window).width();c>b&&d("body").addClass(a.ns+"lock-scroll");a.screenW=c;a.screenH=d(window).height();this.innerBeforeOpen();e.addClass(a.actived);a.$wrap.addClass(a.actived+a.classTemp)},innerBeforeOpen:function(){var b=1>=c.width?
a.screenW*c.width:c.width,d=1>=c.height?a.screenH*c.height:c.height,e=a.margin;c.isFullscreen&&(b=a.screenW,d=a.screenH,e=[0,0,0,0]);a.innerW=0<=a.screenW-b-e[1]-e[3]?b:a.screenW-e[1]-e[3];a.innerH=0<=a.screenH-d-e[0]-e[2]?d:a.screenH-e[0]-e[2];a.outerX=Math.floor((a.screenW-a.innerW)/2);a.outerY=Math.floor((a.screenH-a.innerH)/2);a.ev.trigger("openFxBefore");p.beforeOpen()},afterClose:function(){a.$wrap.removeClass(a.actived+a.classTemp);e.removeClass(a.actived);d("body").removeClass(a.ns+"lock "+
a.ns+"lock-scroll")}},p={beforeOpen:function(){a.isTf3D&&"zoom"==c.fx?(a.linkW=e.outerWidth(),a.linkH=e.outerHeight(),a.linkWRatio=(a.linkW/a.innerW).toFixed(3),a.linkHRatio=(a.linkH/a.innerH).toFixed(3),a.linkX=Math.round(e.offset().left-d(window).scrollLeft()),a.linkY=Math.round(e.offset().top-d(window).scrollTop()),a.$inner.css({width:a.innerW,height:a.innerH}),a.tfLast=g.tf([a.linkX,a.linkY,a.linkWRatio,a.linkHRatio]),a.tfLast.opacity=0,a.$outer.css(a.tfLast),setTimeout(function(){var b=g.tf([a.outerX,
a.outerY,1,1]);b.opacity=1;a.$outer.css(b)},2),clearTimeout(a.tiOpenFxAfter),a.tiOpenFxAfter=setTimeout(function(){a.ev.trigger("openFxAfter")},c.speed)):(a.$inner.css({width:a.innerW,height:a.innerH}),a.$outer.css({left:a.outerX,top:a.outerY}),a.ev.trigger("openFxAfter"))},afterClose:function(){return"zoom"==c.fx&&a.tfLast?(a.$outer.css(a.tfLast),!0):!1}},m={begin:function(){c.isLinkOpen&&e.on(a.evName.click,function(a){k.open();return!1});a.$inner.on(a.evName.click,function(a){return!1});c.isOverClose&&
a.$wrap.on(a.evName.click,function(a){k.close();return!1});c.isBtnClose&&a.$close.on(a.evName.click,function(a){k.close();return!1})},resizeOn:function(){d(window).on(a.evName.resize,function(b){clearTimeout(a.tiResize);a.tiResize=setTimeout(function(){k.updateLayout()},c.timerResize)})},resizeOff:function(){d(window).off(a.evName.resize)},keyboard:function(){d(document).off(a.evName.key);if(c.isKeyboard)d(document).on(a.evName.key,function(b){a.isOpenedBox&&27==b.keyCode&&k.close()})}},k={open:function(){a.$wrap.hasClass(a.actived)||
(a.ev.trigger("beforeOpen"),l.beforeOpen(),n.beforeOpen(),m.resizeOn(),a.ev.trigger("afterOpen"),a.isOpenedBox=!0)},close:function(){if(a.$wrap.hasClass(a.actived)){var b=function(){a.ev.trigger("closeFxAfter");l.afterClose();n.afterClose();m.resizeOff();a.ev.trigger("afterClose");a.isOpenedBox=!1};a.ev.trigger("beforeClose");a.ev.trigger("closeFxBefore");p.afterClose()&&null!=c.fx?(clearTimeout(a.tiFxAfter),a.tiFxAfter=setTimeout(function(){b()},c.speed)):b()}},updateLayout:function(){h.vaUpdate();
n.beforeOpen()}},a=d.extend(a,k);d.data(e[0],rb01VA.codeName,a);g.checkInit();if(null==a.href||null==a.content)h.init(),l.codeMain(),h.afterRender(),h.vaUpdate(),m.begin(),m.keyboard()};d.fn[rb01VA.codeName]=function(){var e=arguments,c=rb01VA.codeName,a=null;d(this).each(function(){var g=d(this),h=g.data(c);void 0==e[0]&&(e[0]={});if("object"==typeof e[0])h?h.prop(e[0]):new d[c](g,d.extend(!0,{},d.fn[c].defaults,e[0])),a=g.data(c);else try{h[e[0]](e[1])}catch(l){window.console&&console.warn("["+
c+": function not exist!]")}});return a};d.fn[rb01VA.codeName].defaults={type:"auto",href:null,content:null,title:null,classMore:null,minWidth:80,minHeight:80,width:600,height:400,margin:10,fx:"zoom",speed:300,timerResize:600,isTitle:!0,isFullscreen:!1,isBtnClose:!0,isOverClose:!0,isLinkOpen:!0,isKeyboard:!0,html:{main:"<div class='{ns}wrap'><div class='{ns}outer'><div class='{ns}inner'></div></div></div>",close:"<div class='{ns}btn-close' title='close'>close</div>"}}})(jQuery);