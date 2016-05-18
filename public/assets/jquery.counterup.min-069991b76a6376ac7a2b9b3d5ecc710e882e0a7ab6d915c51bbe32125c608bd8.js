/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";t.fn.counterUp=function(e){var i=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),o=i,n=function(){var t=[],i=o.time/o.delay,n=e.text(),s=/[0-9]+,[0-9]+/.test(n);n=n.replace(/,/g,"");for(var a=(/^[0-9]+$/.test(n),/^[0-9]+\.[0-9]+$/.test(n)),r=a?(n.split(".")[1]||[]).length:0,l=i;l>=1;l--){var d=parseInt(n/i*l);if(a&&(d=parseFloat(n/i*l).toFixed(r)),s)for(;/(\d+)(\d{3})/.test(d.toString());)d=d.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(d)}e.data("counterup-nums",t),e.text("0");var c=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),o.delay):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",c),setTimeout(e.data("counterup-func"),o.delay)};e.waypoint(n,{offset:"100%",triggerOnce:!0})})}}(jQuery);