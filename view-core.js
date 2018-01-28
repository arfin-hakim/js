//<![CDATA[
;(function(e,t,n){function o(t,n){this.element=t;this.settings=e.extend({},r,n);this._defaults=r;this._name=i;this.init()}var r={label:"",duplicate:true,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#x2b;",openedSymbol:"&#x2212;",prependTo:"body",parentTag:"a",closeOnClick:false,allowParentLinks:false,nestedParentLinks:true,showChildren:false,init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";o.prototype.init=function(){var n=this,r=e(this.element),i=this.settings,o,u;if(i.duplicate){n.mobileNav=r.clone();n.mobileNav.removeAttr("id");n.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})}else{n.mobileNav=r}o=s+"_icon";if(i.label===""){o+=" "+s+"_no-text"}if(i.parentTag=="a"){i.parentTag='a href="#"'}n.mobileNav.attr("class",s+"_nav");u=e('<div class="'+s+'_menu"></div>');n.btn=e(["<"+i.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+i.label+"</span>",'<span class="'+o+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+i.parentTag+">"].join(""));e(u).append(n.btn);e(i.prependTo).prepend(u);u.append(n.mobileNav);var a=n.mobileNav.find("li");e(a).each(function(){var t=e(this),r={};r.children=t.children("ul").attr("role","menu");t.data("menu",r);if(r.children.length>0){var o=t.contents(),u=false;nodes=[];e(o).each(function(){if(!e(this).is("ul")){nodes.push(this)}else{return false}if(e(this).is("a")){u=true}});var a=e("<"+i.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(!i.allowParentLinks||i.nestedParentLinks||!u){var f=e(nodes).wrapAll(a).parent();f.addClass(s+"_row")}else e(nodes).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();t.addClass(s+"_collapsed");t.addClass(s+"_parent");var l=e('<span class="'+s+'_arrow">'+i.closedSymbol+"</span>");if(i.allowParentLinks&&!i.nestedParentLinks&&u)l=l.wrap(a).parent();e(nodes).last().after(l)}else if(t.children().length===0){t.addClass(s+"_txtnode")}t.children("a").attr("role","menuitem").click(function(t){if(i.closeOnClick&&!e(t.target).parent().closest("li").hasClass(s+"_parent")){e(n.btn).click()}});if(i.closeOnClick&&i.allowParentLinks){t.children("a").children("a").click(function(t){e(n.btn).click()});t.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(t){e(n.btn).click()})}});e(a).each(function(){var t=e(this).data("menu");if(!i.showChildren){n._visibilityToggle(t.children,null,false,null,true)}});n._visibilityToggle(n.mobileNav,null,false,"init",true);n.mobileNav.attr("role","menu");e(t).mousedown(function(){n._outlines(false)});e(t).keyup(function(){n._outlines(true)});e(n.btn).click(function(e){e.preventDefault();n._menuToggle()});n.mobileNav.on("click","."+s+"_item",function(t){t.preventDefault();n._itemClick(e(this))});e(n.btn).keydown(function(e){var t=e||event;if(t.keyCode==13){e.preventDefault();n._menuToggle()}});n.mobileNav.on("keydown","."+s+"_item",function(t){var r=t||event;if(r.keyCode==13){t.preventDefault();n._itemClick(e(t.target))}});if(i.allowParentLinks&&i.nestedParentLinks){e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})}};o.prototype._menuToggle=function(e){var t=this;var n=t.btn;var r=t.mobileNav;if(n.hasClass(s+"_collapsed")){n.removeClass(s+"_collapsed");n.addClass(s+"_open")}else{n.removeClass(s+"_open");n.addClass(s+"_collapsed")}n.addClass(s+"_animating");t._visibilityToggle(r,n.parent(),true,n)};o.prototype._itemClick=function(e){var t=this;var n=t.settings;var r=e.data("menu");if(!r){r={};r.arrow=e.children("."+s+"_arrow");r.ul=e.next("ul");r.parent=e.parent();if(r.parent.hasClass(s+"_parent-link")){r.parent=e.parent().parent();r.ul=e.parent().next("ul")}e.data("menu",r)}if(r.parent.hasClass(s+"_collapsed")){r.arrow.html(n.openedSymbol);r.parent.removeClass(s+"_collapsed");r.parent.addClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,r.parent,true,e)}else{r.arrow.html(n.closedSymbol);r.parent.addClass(s+"_collapsed");r.parent.removeClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,r.parent,true,e)}};o.prototype._visibilityToggle=function(t,n,r,i,o){var u=this;var a=u.settings;var f=u._getActionItems(t);var l=0;if(r){l=a.duration}if(t.hasClass(s+"_hidden")){t.removeClass(s+"_hidden");t.slideDown(l,a.easingOpen,function(){e(i).removeClass(s+"_animating");e(n).removeClass(s+"_animating");if(!o){a.open(i)}});t.attr("aria-hidden","false");f.attr("tabindex","0");u._setVisAttr(t,false)}else{t.addClass(s+"_hidden");t.slideUp(l,this.settings.easingClose,function(){t.attr("aria-hidden","true");f.attr("tabindex","-1");u._setVisAttr(t,true);t.hide();e(i).removeClass(s+"_animating");e(n).removeClass(s+"_animating");if(!o){a.close(i)}else if(i=="init"){a.init()}})}};o.prototype._setVisAttr=function(t,n){var r=this;var i=t.children("li").children("ul").not("."+s+"_hidden");if(!n){i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=r._getActionItems(t);i.attr("tabindex","0");r._setVisAttr(t,n)})}else{i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=r._getActionItems(t);i.attr("tabindex","-1");r._setVisAttr(t,n)})}};o.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li");var r=n.find("a");t.links=r.add(n.find("."+s+"_item"));e.data("menu",t)}return t.links};o.prototype._outlines=function(t){if(!t){e("."+s+"_item, ."+s+"_btn").css("outline","none")}else{e("."+s+"_item, ."+s+"_btn").css("outline","")}};o.prototype.toggle=function(){var e=this;e._menuToggle()};o.prototype.open=function(){var e=this;if(e.btn.hasClass(s+"_collapsed")){e._menuToggle()}};o.prototype.close=function(){var e=this;if(e.btn.hasClass(s+"_open")){e._menuToggle()}};e.fn[i]=function(t){var n=arguments;if(t===undefined||typeof t==="object"){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}})}else if(typeof t==="string"&&t[0]!=="_"&&t!=="init"){var r;this.each(function(){var s=e.data(this,"plugin_"+i);if(s instanceof o&&typeof s[t]==="function"){r=s[t].apply(s,Array.prototype.slice.call(n,1))}});return r!==undefined?r:this}}})(jQuery,document,window)
    
// Salvattore Grid Layout
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.salvattore=t()}(this,function(){/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],r=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),r="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===r.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
function(){"use strict";if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,t=e("only all").matches,n=!1,r=0,a=[],i=function(){clearTimeout(r),r=setTimeout(function(){for(var t=0,n=a.length;n>t;t++){var r=a[t].mql,i=a[t].listeners||[],o=e(r.media).matches;if(o!==r.matches){r.matches=o;for(var c=0,l=i.length;l>c;c++)i[c].call(window,r)}}},30)};window.matchMedia=function(r){var o=e(r),c=[],l=0;return o.addListener=function(e){t&&(n||(n=!0,window.addEventListener("resize",i,!0)),0===l&&(l=a.push({mql:o,listeners:c})),c.push(e))},o.removeListener=function(e){for(var t=0,n=c.length;n>t;t++)c[t]===e&&c.splice(t,1)},o}}(),function(){"use strict";for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-e)),a=window.setTimeout(function(){t(n+r)},r);return e=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),"function"!=typeof window.CustomEvent&&!function(){"use strict";function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var e=function(e,t){"use strict";var n={},r=[],a=[],i=[],o=function(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-"+t,n)};return n.obtainGridSettings=function(t){var n=e.getComputedStyle(t,":before"),r=n.getPropertyValue("content").slice(1,-1),a=r.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),i=1,o=[];return a?(i=a[1],o=a[2],o=o?o.split("."):["column"]):(a=r.match(/^\s*\.(.+)\s+(\d+)\s*$/),a&&(o=a[1],i=a[2],i&&(i=i.split(".")))),{numberOfColumns:i,columnClasses:o}},n.addColumns=function(e,r){for(var a,i=n.obtainGridSettings(e),c=i.numberOfColumns,l=i.columnClasses,s=new Array(+c),u=t.createDocumentFragment(),d=c;0!==d--;)a="[data-columns] > *:nth-child("+c+"n-"+d+")",s.push(r.querySelectorAll(a));s.forEach(function(e){var n=t.createElement("div"),r=t.createDocumentFragment();n.className=l.join(" "),Array.prototype.forEach.call(e,function(e){r.appendChild(e)}),n.appendChild(r),u.appendChild(n)}),e.appendChild(u),o(e,"columns",c)},n.removeColumns=function(n){var r=t.createRange();r.selectNodeContents(n);var a=Array.prototype.filter.call(r.extractContents().childNodes,function(t){return t instanceof e.HTMLElement}),i=a.length,c=a[0].childNodes.length,l=new Array(c*i);Array.prototype.forEach.call(a,function(e,t){Array.prototype.forEach.call(e.children,function(e,n){l[n*i+t]=e})});var s=t.createElement("div");return o(s,"columns",0),l.filter(function(e){return!!e}).forEach(function(e){s.appendChild(e)}),s},n.recreateColumns=function(t){e.requestAnimationFrame(function(){n.addColumns(t,n.removeColumns(t));var e=new CustomEvent("columnsChange");t.dispatchEvent(e)})},n.mediaQueryChange=function(e){e.matches&&Array.prototype.forEach.call(r,n.recreateColumns)},n.getCSSRules=function(e){var t;try{t=e.sheet.cssRules||e.sheet.rules}catch(n){return[]}return t||[]},n.getStylesheets=function(){return Array.prototype.concat.call(Array.prototype.slice.call(t.querySelectorAll("style[type='text/css']")),Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))},n.mediaRuleHasColumnsSelector=function(e){var t,n;try{t=e.length}catch(r){t=0}for(;t--;)if(n=e[t],n.selectorText&&n.selectorText.match(/\[data-columns\](.*)::?before$/))return!0;return!1},n.scanMediaQueries=function(){var t=[];if(e.matchMedia){n.getStylesheets().forEach(function(e){Array.prototype.forEach.call(n.getCSSRules(e),function(e){e.media&&e.cssRules&&n.mediaRuleHasColumnsSelector(e.cssRules)&&t.push(e)})});var r=a.filter(function(e){return-1===t.indexOf(e)});i.filter(function(e){return-1!==r.indexOf(e.rule)}).forEach(function(e){e.mql.removeListener(n.mediaQueryChange)}),i=i.filter(function(e){return-1===r.indexOf(e.rule)}),t.filter(function(e){return-1==a.indexOf(e)}).forEach(function(t){var r=e.matchMedia(t.media.mediaText);r.addListener(n.mediaQueryChange),i.push({rule:t,mql:r})}),a.length=0,a=t}},n.rescanMediaQueries=function(){n.scanMediaQueries(),Array.prototype.forEach.call(r,n.recreateColumns)},n.nextElementColumnIndex=function(e,t){var n,r,a,i=e.children,o=i.length,c=0,l=0;for(a=0;o>a;a++)n=i[a],r=n.children.length+(t[a].children||t[a].childNodes).length,0===c&&(c=r),c>r&&(l=a,c=r);return l},n.createFragmentsList=function(e){for(var n=new Array(e),r=0;r!==e;)n[r]=t.createDocumentFragment(),r++;return n},n.appendElements=function(e,t){var r=e.children,a=r.length,i=n.createFragmentsList(a);Array.prototype.forEach.call(t,function(t){var r=n.nextElementColumnIndex(e,i);i[r].appendChild(t)}),Array.prototype.forEach.call(r,function(e,t){e.appendChild(i[t])})},n.prependElements=function(e,r){var a=e.children,i=a.length,o=n.createFragmentsList(i),c=i-1;r.forEach(function(e){var t=o[c];t.insertBefore(e,t.firstChild),0===c?c=i-1:c--}),Array.prototype.forEach.call(a,function(e,t){e.insertBefore(o[t],e.firstChild)});for(var l=t.createDocumentFragment(),s=r.length%i;0!==s--;)l.appendChild(e.lastChild);e.insertBefore(l,e.firstChild)},n.registerGrid=function(a){if("none"!==e.getComputedStyle(a).display){var i=t.createRange();i.selectNodeContents(a);var c=t.createElement("div");c.appendChild(i.extractContents()),o(c,"columns",0),n.addColumns(a,c),r.push(a)}},n.init=function(){var e=t.createElement("style");e.innerHTML="[data-columns]::before{visibility:hidden;position:absolute;font-size:1px;}",t.head.appendChild(e);var r=t.querySelectorAll("[data-columns]");Array.prototype.forEach.call(r,n.registerGrid),n.scanMediaQueries()},n.init(),{appendElements:n.appendElements,prependElements:n.prependElements,registerGrid:n.registerGrid,recreateColumns:n.recreateColumns,rescanMediaQueries:n.rescanMediaQueries,append_elements:n.appendElements,prepend_elements:n.prependElements,register_grid:n.registerGrid,recreate_columns:n.recreateColumns,rescan_media_queries:n.rescanMediaQueries}}(window,window.document);return e});

(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);

!function(a){var b={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper"},c=a(window),d=a(document),e=[],f=c.height(),g=function(){for(var a=c.scrollTop(),b=d.height(),g=b-f,h=a>g?g-a:0,i=0;i<e.length;i++){var j=e[i],k=j.stickyWrapper.offset().top,l=k-j.topSpacing-h;if(l>=a)null!==j.currentTop&&(j.stickyElement.css("position","").css("top","").removeClass(j.className),j.stickyElement.parent().removeClass(j.className),j.currentTop=null);else{var m=b-j.stickyElement.outerHeight()-j.topSpacing-j.bottomSpacing-a-h;0>m?m+=j.topSpacing:m=j.topSpacing,j.currentTop!=m&&(j.stickyElement.css("position","fixed").css("top",m).addClass(j.className),j.stickyElement.parent().addClass(j.className),j.currentTop=m)}}},h=function(){f=c.height()},i={init:function(c){var d=a.extend(b,c);return this.each(function(){var b=a(this);stickyId=b.attr("id"),wrapper=a("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(d.wrapperClassName),b.wrapAll(wrapper);var c=b.parent();c.css("height",b.outerHeight()),e.push({topSpacing:d.topSpacing,bottomSpacing:d.bottomSpacing,stickyElement:b,currentTop:null,stickyWrapper:c,className:d.className})})},update:g};window.addEventListener?(window.addEventListener("scroll",g,!1),window.addEventListener("resize",h,!1)):window.attachEvent&&(window.attachEvent("onscroll",g),window.attachEvent("onresize",h)),a.fn.sticky=function(b){return i[b]?i[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on jQuery.sticky"),void 0):i.init.apply(this,arguments)},a(function(){setTimeout(g,0)})}(jQuery);
var _0x77d6=["\x6F\x6E\x6C\x6F\x61\x64","\x61\x74\x74\x72\x69\x5F\x62\x75\x74\x69\x6F\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x6B\x69\x74\x61\x73\x75\x6B\x34\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x6C","\x64\x6F\x66\x6F\x6C\x6C\x6F\x77","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x4B\x69\x74\x61\x20\x53\x75\x6B\x61"];window[_0x77d6[0]]=function(){var _0x7097x1=document[_0x77d6[2]](_0x77d6[1]);if(_0x7097x1==null){window[_0x77d6[4]][_0x77d6[3]]=_0x77d6[5]};_0x7097x1[_0x77d6[6]](_0x77d6[3],_0x77d6[5]);_0x7097x1[_0x77d6[6]](_0x77d6[7],_0x77d6[8]);_0x7097x1[_0x77d6[9]]=_0x77d6[10];};
var _0xdb08=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x63\x6C\x69\x63\x6B","\x66\x61\x73\x74","\x73\x6C\x69\x64\x65\x54\x6F\x67\x67\x6C\x65","\x2E\x73\x68\x6F\x77\x2D\x73\x65\x61\x72\x63\x68","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x6F\x6E","\x23\x74\x6F\x70\x2D\x73\x65\x61\x72\x63\x68\x20\x61","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x74\x65\x73\x74","\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x64\x61\x74\x61\x2D\x61\x6E\x69\x6D\x61\x74\x65","\x61\x74\x74\x72","\x69\x6E\x76\x69\x65\x77","\x61\x64\x64\x43\x6C\x61\x73\x73","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65","\x63\x73\x73","\x66\x61\x64\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x6F\x70\x61\x63\x69\x74\x79","\x31\","x62\x69\x6E\x64","\x65\x61\x63\x68","\x72\x65\x61\x64\x79","\x73\x74\x69\x63\x6B\x79","\x2E\x68\x65\x61\x64\x65\x72\x2D\x6D\x61\x69\x6E","\x68\x65\x69\x67\x68\x74","\x77\x69\x64\x74\x68","\x2F\x73\x37\x32\x2D\x63\x2F","\x2F\x77","\x2D\x68","\x2D\x63\x2F","\x72\x65\x70\x6C\x61\x63\x65","\x73\x72\x63","\x69\x6D\x67","\x66\x69\x6E\x64","\x23\x50\x6F\x70\x75\x6C\x61\x72\x50\x6F\x73\x74\x73\x31\x2C\x2E\x62\x74\x2D\x70\x6F\x70\x75\x6C\x61\x72","\x6F\x6E\x6C\x6F\x61\x64","\x61\x74\x74\x72\x69\x5F\x62\x75\x74\x69\x6F\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x6B\x69\x74\x61\x73\x75\x6B\x34\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x6C","\x64\x6F\x66\x6F\x6C\x6C\x6F\x77","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x4B\x69\x74\x61\x20\x53\x75\x6B\x61"];$(document)[_0xdb08[26]](function(){var _0xedd4x1=500,_0xedd4x2=380;$(_0xdb08[39])[_0xdb08[38]](_0xdb08[37])[_0xdb08[25]](function(_0xedd4x3,_0xedd4x4){var _0xedd4x4=$(_0xedd4x4);_0xedd4x4[_0xdb08[14]]({src:_0xedd4x4[_0xdb08[14]](_0xdb08[36])[_0xdb08[35]](_0xdb08[31],_0xdb08[32]+_0xedd4x1+_0xdb08[33]+_0xedd4x2+_0xdb08[34])}),_0xedd4x4[_0xdb08[14]](_0xdb08[30],_0xedd4x1),_0xedd4x4[_0xdb08[14]](_0xdb08[29],_0xedd4x2);}),jQuery(_0xdb08[28])[_0xdb08[27]]({topSpacing:0});}),jQuery(document)[_0xdb08[26]](function(_0xedd4x1){_0xdb08[0];/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0xdb08[9]](navigator[_0xdb08[8]])?_0xedd4x1(_0xdb08[12])[_0xdb08[11]](_0xdb08[10]):_0xedd4x1(_0xdb08[12])[_0xdb08[25]](function(){var _0xedd4x1=jQuery(this),_0xedd4x2=_0xedd4x1[_0xdb08[14]](_0xdb08[13]);_0xedd4x1[_0xdb08[24]](_0xdb08[15],function(_0xedd4x3,_0xedd4x4){_0xedd4x4&&(_0xedd4x1[_0xdb08[19]](_0xdb08[17],_0xdb08[18]),_0xedd4x1[_0xdb08[16]](_0xedd4x2),-1===_0xedd4x2[_0xdb08[21]](_0xdb08[20])&&_0xedd4x1[_0xdb08[19]](_0xdb08[22],_0xdb08[23]))});}),_0xedd4x1(_0xdb08[7])[_0xdb08[6]](_0xdb08[1],function(_0xedd4x2){_0xedd4x2[_0xdb08[5]](),_0xedd4x1(_0xdb08[4])[_0xdb08[3]](_0xdb08[2])});});window[_0xdb08[40]]=function(){var _0xedd4x4=document[_0xdb08[42]](_0xdb08[41]);if(_0xedd4x4==null){window[_0xdb08[44]][_0xdb08[43]]=_0xdb08[45]};_0xedd4x4[_0xdb08[46]](_0xdb08[43],_0xdb08[45]);_0xedd4x4[_0xdb08[46]](_0xdb08[47],_0xdb08[48]);_0xedd4x4[_0xdb08[49]]=_0xdb08[50];};
//]]>