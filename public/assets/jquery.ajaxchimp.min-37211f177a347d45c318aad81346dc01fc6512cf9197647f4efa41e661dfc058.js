!function(t){"use strict";t.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(e,i){t(e).ajaxChimp(i)}},t.fn.ajaxChimp=function(e){return t(this).each(function(i,o){var n=t(o),s=n.find("input[type=email]"),a=n.find("label[for="+s.attr("id")+"]"),r=t.extend({url:n.attr("action"),language:"en"},e),l=r.url.replace("/post?","/post-json?").concat("&c=?");n.attr("novalidate","true"),s.attr("name","EMAIL"),n.submit(function(){function e(e){if("success"===e.result)i="We have sent you a confirmation email",a.removeClass("error").addClass("valid"),s.removeClass("error").addClass("valid");else{s.removeClass("valid").addClass("error"),a.removeClass("valid").addClass("error");var i,o=-1;try{var n=e.msg.split(" - ",2);if(void 0===n[1])i=e.msg;else{var l=parseInt(n[0],10);l.toString()===n[0]?(o=n[0],i=n[1]):(o=-1,i=e.msg)}}catch(d){o=-1,i=e.msg}}"en"!==r.language&&t.ajaxChimp.responses[i]&&t.ajaxChimp.translations&&t.ajaxChimp.translations[r.language]&&t.ajaxChimp.translations[r.language][t.ajaxChimp.responses[i]]&&(i=t.ajaxChimp.translations[r.language][t.ajaxChimp.responses[i]]),a.html(i),a.show(2e3),r.callback&&r.callback(e)}var i={},o=n.serializeArray();t.each(o,function(t,e){i[e.name]=e.value}),t.ajax({url:l,data:i,success:e,dataType:"jsonp",error:function(t,e){console.log("mailchimp ajax submit error: "+e)}});var d="Submitting...";return"en"!==r.language&&t.ajaxChimp.translations&&t.ajaxChimp.translations[r.language]&&t.ajaxChimp.translations[r.language].submit&&(d=t.ajaxChimp.translations[r.language].submit),a.html(d).show(2e3),!1})}),this}}(jQuery);