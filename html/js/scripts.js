!function(){for(var e,t=function(){},l=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=l.length,r=window.console=window.console||{};o--;)e=l[o],r[e]||(r[e]=t)}(),$(document).ready(function(){var e=window,t=document,l=t.documentElement,o=t.getElementsByTagName("body")[0],r=(e.innerWidth||l.clientWidth||o.clientWidth,e.innerHeight||l.clientHeight||o.clientHeight),s=$("section"),a=r,n=$(".left-sidebar"),c=$(".left-sidebar").height();$(s).height(a);var g=(a-c)/2;$(n).css({top:g+"px"});var i=$(".left-sidebar button"),d=$(".toggle-footer"),h=$(".toggle-header"),u=$(".toggle-all");$(i).click(function(){var e=$(this).parent();$(e).toggleClass("current-block"),$(".left-sidebar").hasClass("current-block")&&$("header").hasClass("current-block")&&$("footer").hasClass("current-block")&&$(u).toggleClass("toggled")}),$(d).click(function(){var e=$("footer");$(e).toggleClass("current-block"),$(this).toggleClass("toggled"),$(".left-sidebar").hasClass("current-block")&&$("header").hasClass("current-block")&&$("footer").hasClass("current-block")&&$(u).toggleClass("toggled")}),$(h).click(function(){var e=$("header");$(e).toggleClass("current-block"),$(this).toggleClass("toggled"),$(".left-sidebar").hasClass("current-block")&&$("header").hasClass("current-block")&&$("footer").hasClass("current-block")&&$(u).toggleClass("toggled")}),$(u).click(function(){var e=$("header, footer, .left-sidebar"),t=$(h,d);$(e).toggleClass("current-block"),$(t).toggleClass("toggled"),$(this).toggleClass("toggled")})});