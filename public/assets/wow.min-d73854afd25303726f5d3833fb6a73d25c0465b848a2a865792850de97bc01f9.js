/*! WOW - v1.0.2 - 2014-10-28
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){var e,t,n,i,o,r=function(e,t){return function(){return e.apply(t,arguments)}},s=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};t=function(){function e(){}return e.prototype.extend=function(e,t){var n,i;for(n in t)i=t[n],null==e[n]&&(e[n]=i);return e},e.prototype.isMobile=function(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)},e.prototype.addEvent=function(e,t,n){return null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n},e.prototype.removeEvent=function(e,t,n){return null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]},e.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},e}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function e(){this.keys=[],this.values=[]}return e.prototype.get=function(e){var t,n,i,o,r;for(r=this.keys,t=i=0,o=r.length;o>i;t=++i)if(n=r[t],n===e)return this.values[t]},e.prototype.set=function(e,t){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===e)return void(this.values[n]=t);return this.keys.push(e),this.values.push(t)},e}()),e=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(e=function(){function e(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return e.notSupported=!0,e.prototype.observe=function(){},e}()),i=this.getComputedStyle||function(e){return this.getPropertyValue=function(t){var n;return"float"===t&&(t="styleFloat"),o.test(t)&&t.replace(o,function(e,t){return t.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(e){null==e&&(e={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(e,this.defaults),this.animationNameCache=new n}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},o.prototype.init=function(){var e;return this.element=window.document.documentElement,"interactive"===(e=document.readyState)||"complete"===e?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var t,n,i,o;if(this.stopped=!1,this.boxes=function(){var e,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t);return o}.call(this),this.all=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(o=this.boxes,n=0,i=o.length;i>n;n++)t=o[n],this.applyStyle(t,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new e(function(e){return function(t){var n,i,o,r,s;for(s=[],o=0,r=t.length;r>o;o++)i=t[o],s.push(function(){var e,t,o,r;for(o=i.addedNodes||[],r=[],e=0,t=o.length;t>e;e++)n=o[e],r.push(this.doSync(n));return r}.call(e));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(){return e.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(e){var t,n,i,o,r;if(null==e&&(e=this.element),1===e.nodeType){for(e=e.parentNode||e,o=e.querySelectorAll("."+this.config.boxClass),r=[],n=0,i=o.length;i>n;n++)t=o[n],s.call(this.all,t)<0?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(e){return this.applyStyle(e),e.className=""+e.className+" "+this.config.animateClass},o.prototype.applyStyle=function(e,t){var n,i,o;return i=e.getAttribute("data-wow-duration"),n=e.getAttribute("data-wow-delay"),o=e.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(e,t,i,n,o)}}(this))},o.prototype.animate=function(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),o.prototype.resetStyle=function(){var e,t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e.style.visibility="visible");return o},o.prototype.customStyle=function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(e,t){var n,i,o,r;r=[];for(n in t)i=t[n],e[""+n]=i,r.push(function(){var t,r,s,a;for(s=this.vendors,a=[],t=0,r=s.length;r>t;t++)o=s[t],a.push(e[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i);return a}.call(this));return r},o.prototype.vendorCSS=function(e,t){var n,o,r,s,a,l;for(o=i(e),n=o.getPropertyCSSValue(t),l=this.vendors,s=0,a=l.length;a>s;s++)r=l[s],n=n||o.getPropertyCSSValue("-"+r+"-"+t);return n},o.prototype.animationName=function(e){var t;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=i(e).getPropertyValue("animation-name")}return"none"===t?"":t},o.prototype.cacheAnimationName=function(e){return this.animationNameCache.set(e,this.animationName(e))},o.prototype.cachedAnimationName=function(e){return this.animationNameCache.get(e)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var e;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],e&&(this.isVisible(e)?this.show(e):o.push(e));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(e){for(var t;void 0===e.offsetTop;)e=e.parentNode;for(t=e.offsetTop;e=e.offsetParent;)t+=e.offsetTop;return t},o.prototype.isVisible=function(e){var t,n,i,o,r;return n=e.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(e),t=i+e.clientHeight,o>=i&&t>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new t},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this);