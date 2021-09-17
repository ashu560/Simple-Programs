(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var p=ca(this);function da(a,b){if(b)a:{var c=p;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}q=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=q; 
function la(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype} 
da("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var f=this.j();try{e(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(e)};var g=p.setTimeout;c.prototype.i=function(e){g(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var h= 
e[f];e[f]=null;try{h()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(m){h||(h=!0,l.call(f,m))}}var f=this,h=!1;return{resolve:e(this.B),reject:e(this.l)}};b.prototype.B=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.D(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.A(e):this.m(e)}}; 
b.prototype.A=function(e){var f=void 0;try{f=e.then}catch(h){this.l(h);return}"function"==typeof f?this.F(f,e):this.m(e)};b.prototype.l=function(e){this.s(2,e)};b.prototype.m=function(e){this.s(1,e)};b.prototype.s=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.C();this.u()};b.prototype.C=function(){var e=this;g(function(){if(e.v()){var f=p.console;"undefined"!==typeof f&&f.error(e.i)}},1)};b.prototype.v= 
function(){if(this.o)return!1;var e=p.CustomEvent,f=p.Event,h=p.dispatchEvent;if("undefined"===typeof h)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=p.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return h(e)};b.prototype.u=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)k.h(this.g[e]);this.g=null}};var k=new c;b.prototype.D= 
function(e){var f=this.j();e.G(f.resolve,f.reject)};b.prototype.F=function(e,f){var h=this.j();try{e.call(f,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(e,f){function h(n,v){return"function"==typeof n?function(u){try{l(n(u))}catch(I){m(I)}}:v}var l,m,t=new b(function(n,v){l=n;m=v});this.G(h(e,l),h(f,m));return t};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.G=function(e,f){function h(){switch(l.h){case 1:e(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?k.h(h):this.g.push(h);this.o=!0};b.resolve=d;b.reject=function(e){return new b(function(f,h){h(e)})};b.race=function(e){return new b(function(f,h){for(var l=ea(e),m=l.next();!m.done;m=l.next())d(m.value).G(f,h)})};b.all=function(e){var f=ea(e),h=f.next();return h.done?d([]):new b(function(l,m){function t(u){return function(I){n[u]=I;v--;0==v&&l(n)}}var n=[],v=0;do n.push(void 0),v++,d(h.value).G(t(n.length-1),m),h=f.next();while(!h.done)})};return b});var r=this||self; 
function ma(a){return a};function pa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in d&&b.call(void 0,d[g],g,a)};var w;function x(a,b){this.g=b===sa?a:""}x.prototype.toString=function(){return this.g+""};var sa={};function ta(a){if(void 0===w){var b=null;var c=r.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ma,createScript:ma,createScriptURL:ma})}catch(d){r.console&&r.console.error(d.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;return new x(a,sa)};function ua(a){ua[" "](a);return a}ua[" "]=function(){};var va={},y=null;var wa="function"===typeof Uint8Array;function xa(a,b,c){return"object"===typeof a?wa&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):ya(a,b,c):b(a)}function ya(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),g=0;g<a.length;g++){var k=a[g];null!=k&&(d[g]=xa(k,b,c))}Array.isArray(a)&&a.W&&z(d);return d}d={};for(g in a)k=a[g],null!=k&&(d[g]=xa(k,b,c));return d} 
function za(a){return ya(a,function(b){return"number"===typeof b?isFinite(b)?b:String(b):b},function(b){var c;void 0===c&&(c=0);if(!y){y={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],k=0;5>k;k++){var e=d.concat(g[k].split(""));va[k]=e;for(var f=0;f<e.length;f++){var h=e[f];void 0===y[h]&&(y[h]=f)}}}c=va[c];d=Array(Math.floor(b.length/3));g=c[64]||"";for(k=e=0;e<b.length-2;e+=3){var l=b[e],m=b[e+1];h=b[e+2];f=c[l>>2];l=c[(l& 
3)<<4|m>>4];m=c[(m&15)<<2|h>>6];h=c[h&63];d[k++]=f+l+m+h}f=0;h=g;switch(b.length-e){case 2:f=b[e+1],h=c[(f&15)<<2]||g;case 1:b=b[e],d[k]=c[b>>2]+c[(b&3)<<4|f>>4]+h+g}return d.join("")})}var Aa={W:{value:!0,configurable:!0}};function z(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,Aa);return a};var Ba;function A(a,b,c){var d=Ba;Ba=null;a||(a=d);d=this.constructor.X;a||(a=d?[d]:[]);this.j=d?0:-1;this.h=null;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||wa&&d instanceof Uint8Array))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.g[a])?z(d):this.g[a]=Ca):(d=this.l+this.j,this.g[d]||(this.i=this.g[d]={}),(d=this.i[a])? 
z(d):this.i[a]=Ca)}var Ca=Object.freeze(z([]));function B(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.l?a.i?a.i[b]:void 0:a.g[b+a.j]}function C(a,b){a=B(a,b);a=null==a?a:!!a;return null==a?!1:a}function Da(a){var b=Ea;a.h||(a.h={});if(!a.h[1]){var c=B(a,1,!1);c&&(a.h[1]=new b(c))}return a.h[1]}A.prototype.toJSON=function(){var a=Fa(this,!1);return za(a)}; 
function Fa(a,b){if(a.h)for(var c in a.h){var d=a.h[c];if(Array.isArray(d))for(var g=0;g<d.length;g++)d[g]&&Fa(d[g],b);else d&&Fa(d,b)}return a.g}function Ga(a,b){a=B(a,b);return null==a?0:a}function Ha(a,b){a=B(a,b);return null==a?"":a};function Ea(a){A.call(this,a,-1,Ia)}la(Ea,A);var Ia=[28];function Ja(a){A.call(this,a,-1,Ka)}la(Ja,A);var Ka=[21];var La={passive:!0},Ma=pa(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});r.addEventListener("test",null,b)}catch(c){}return a});function D(a,b,c,d){if(a.addEventListener){var g=a.addEventListener;d=d?d.passive&&Ma()?d:d.capture||!1:!1;g.call(a,b,c,d)}};function F(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Na(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Oa(b,a)[0]||null);return a||null} 
function Oa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var g=a.getElementsByClassName(b);return g}g=a.getElementsByTagName("*");if(b){var k={};for(c=d=0;a=g[c];c++){var e=a.className,f;if(f="function"==typeof e.split)f=0<=qa(e.split(/\s+/),b);f&&(k[d++]=a)}k.length=d;return k}return g}function Pa(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ua(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ra(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function H(a){a.preventDefault?a.preventDefault():a.returnValue=!1};function Sa(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Ta=0;function Ua(a){var b=document.currentScript;return(a=(b=void 0===b?null:b)&&b.getAttribute("data-jc")===String(a)?b:document.querySelector('[data-jc="'+a+'"]'))&&a.getAttribute("data-jc-version")||"unknown"} 
function Va(){var a=void 0===a?.01:a;if(!(Math.random()>a)){a="https://pagead2.googlesyndication.com/pagead/gen_204?id=jca&jc=60&version="+Ua(60)+"&sample="+a;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Sa(b,a)}};var J=document,K=window;function Wa(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Xa(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Wa(a).match(/\S+/g)||[],b=0<=qa(a,b));return b}function L(a,b){if(a.classList)a.classList.add(b);else if(!Xa(a,b)){var c=Wa(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function Ya(a){this.g=(this.serializedAttributionData=a)?new Ja(a):null;this.isMutableImpression=null!=B(this.g,1)&&!!C(Da(this.g),33);this.T=!!C(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=B(this.g,1);this.L=!!C(this.g,4);this.O=!!C(this.g,6);this.K=!!C(this.g,13);this.creativeIndexSuffix=1<Ga(this.g,8)?Ga(this.g,7).toString():"";this.U=!!C(this.g,17);this.R=!!C(this.g,18);this.J=!!C(this.g,14);this.enableMultiplexThirdPartyAttribution=!!C(this.g,32);this.B=!!C(this.g,15);this.V=!!C(this.g, 
31);this.P=1==C(this.g,9);this.openAttributionInline=1==C(this.g,10);this.isMobileDevice=!!C(this.g,12);this.S=null;this.N=(a=J.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===K.goog_multislot_cache&&(K.goog_multislot_cache={});if(this.D&&!this.N){if(a=K.goog_multislot_cache.hd,void 0===a){a=!1;var b=J.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect(); 
150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=F("abgcp"+this.creativeIndexSuffix);this.s=F("abgc"+this.creativeIndexSuffix);this.h=F("abgs"+this.creativeIndexSuffix);F("abgl"+this.creativeIndexSuffix);this.o=F("abgb"+this.creativeIndexSuffix);this.A=F("abgac"+this.creativeIndexSuffix);F("mute_panel"+this.creativeIndexSuffix);this.v=Na("goog_delegate_attribution"+this.creativeIndexSuffix); 
this.isDelegateAttributionActive=!!this.v&&!!this.J&&!Na("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var g=c.item(d);if("undefined"!=typeof g.tagName&&g.tagName.toUpperCase()==b){a=g;break a}}}else a=null;this.l=a;this.j=this.isDelegateAttributionActive?this.v:F("cbb"+this.creativeIndexSuffix);this.M=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.j&&Xa(this.j,"goog_dismissable_menu");this.m=null;this.F= 
0;this.i=this.isDelegateAttributionActive?this.v:this.O&&this.u?this.u:this.s;this.I=!!C(this.g,19);this.adbadgeEnabled=!!C(this.g,24);this.enableNativeJakeUi=!!C(this.g,27)};function cb(a,b){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=b};function db(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var eb=!!window.google_async_iframe_id,M=eb&&window.parent||window;function N(a,b){a&&db(b,function(c,d){a.style[d]=c})};function fb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var gb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");function hb(a,b){this.g=a;this.h=b}function ib(a,b){this.url=a;this.H=!!b;this.depth=null};function jb(){this.i="&";this.h={};this.j=0;this.g=[]}function O(a,b){var c={};c[a]=b;return[c]}function kb(a,b,c,d,g){var k=[];Ra(a,function(e,f){(e=lb(e,b,c,d,g))&&k.push(f+"="+e)});return k.join(b)} 
function lb(a,b,c,d,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var k=[],e=0;e<a.length;e++)k.push(lb(a[e],b,c,d+1,g));return k.join(c[d])}}else if("object"==typeof a)return g=g||0,2>g?encodeURIComponent(kb(a,b,c,d,g+1)):"...";return encodeURIComponent(String(a))} 
function mb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=nb(a)-c.length;if(0>d)return"";a.g.sort(function(m,t){return m-t});c=null;for(var g="",k=0;k<a.g.length;k++)for(var e=a.g[k],f=a.h[e],h=0;h<f.length;h++){if(!d){c=null==c?e:c;break}var l=kb(f[h],a.i,",$");if(l){l=g+l;if(d>=l.length){d-=l.length;b+=l;g=a.i;break}c=null==c?e:c}}a="";null!=c&&(a=g+"trn="+c);return b+a}function nb(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function ob(a,b,c,d,g){if((d?a.g:Math.random())<(g||.01))try{if(c instanceof jb)var k=c;else k=new jb,Ra(c,function(f,h){var l=k,m=l.j++;f=O(h,f);l.g.push(m);l.h[m]=f});var e=mb(k,a.h,"/pagead/gen_204?id="+b+"&");e&&Sa(r,e)}catch(f){}};var P=null;function pb(){var a=r.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function qb(){var a=void 0===a?r:a;return(a=a.performance)&&a.now?a.now():null};function rb(a,b){var c=qb()||pb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=r.performance,sb=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=pa(function(){var a;if(a=sb){var b;if(null===P){P="";try{a="";try{a=r.top.location.hash}catch(c){a=r.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function tb(){var a=S;this.h=[];this.i=a||r;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=R()||(null!=b?b:1>Math.random())}function ub(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}tb.prototype.start=function(a,b){if(!this.g)return null;a=new rb(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a}; 
tb.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(qb()||pb())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";Q&&R()&&Q.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function vb(){var a=wb;this.l=xb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}function yb(a,b,c){try{if(a.g&&a.g.g){var d=a.g.start(b.toString(),3);var g=c();a.g.end(d)}else g=c()}catch(f){c=!0;try{ub(d),c=a.m(b,new fb(f,{message:zb(f)}),void 0,void 0)}catch(h){a.j(217,h)}if(c){var k,e;null==(k=window.console)||null==(e=k.error)||e.call(k,f)}else throw f;}return g} 
function Ab(a,b){var c=T;return function(d){for(var g=[],k=0;k<arguments.length;++k)g[k]=arguments[k];return yb(c,a,function(){return b.apply(void 0,g)})}} 
vb.prototype.j=function(a,b,c,d,g){g=g||"jserror";try{var k=new jb;k.g.push(1);k.h[1]=O("context",a);b.error&&b.meta&&b.id||(b=new fb(b,{message:zb(b)}));if(b.msg){var e=b.msg.substring(0,512);k.g.push(2);k.h[2]=O("msg",e)}var f=b.meta||{};if(this.h)try{this.h(f)}catch(X){}if(d)try{d(f)}catch(X){}b=[f];k.g.push(3);k.h[3]=b;d=r;b=[];e=null;do{var h=d;if(G(h)){var l=h.location.href;e=h.document&&h.document.referrer||null}else l=e,e=null;b.push(new ib(l||""));try{d=h.parent}catch(X){d=null}}while(d&& 
h!=d);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;h=r;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var t=b[m];t.url||(t.url=h.location.ancestorOrigins[m-1]||"",t.H=!0)}var n=new ib(r.location.href,!1);h=null;var v=b.length-1;for(t=v;0<=t;--t){var u=b[t];!h&&gb.test(u.url)&&(h=u);if(u.url&&!u.H){n=u;break}}u=null;var I=b.length&&b[v].url;0!=n.depth&&I&&(u=b[v]);var E=new hb(n,u);if(E.h){var Jb=E.h.url||"";k.g.push(4);k.h[4]=O("top", 
Jb)}var na={url:E.g.url||""};if(E.g.url){var oa=E.g.url.match(Qa),Za=oa[1],$a=oa[3],ab=oa[4];n="";Za&&(n+=Za+":");$a&&(n+="//",n+=$a,ab&&(n+=":"+ab));var bb=n}else bb="";na=[na,{url:bb}];k.g.push(5);k.h[5]=na;ob(this.l,g,k,this.i,c)}catch(X){try{ob(this.l,g,{context:"ecmserr",rctx:a,msg:zb(X),url:E&&E.g.url},this.i,c)}catch(Vb){}}return!0}; 
function zb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var xb,T;if(eb&&!G(M)){var U="."+J.domain;try{for(;2<U.split(".").length&&!G(M);)J.domain=U=U.substr(U.indexOf(".")+1),M=window.parent}catch(a){}G(M)||(M=window)}var S=M,wb=new tb;function Bb(){if(!S.google_measure_js_timing){var a=wb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(R()&&ra(a.h,ub),a.h.length=0)}}xb=new function(){var a=void 0===a?K:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};"number"!==typeof S.google_srt&&(S.google_srt=Math.random());var Cb=xb,Db=S.google_srt; 
0<=Db&&1>=Db&&(Cb.g=Db);T=new vb;T.h=function(a){var b=Ta;0!==b&&(a.jc=String(b),a.shv=Ua(b))};T.i=!0;"complete"==S.document.readyState?Bb():wb.g&&D(S,"load",function(){Bb()});function V(a,b){return Ab(a,b)};function Eb(a,b){var c=this;this.g=a;this.h=b;this.g.U||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.M?Fb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(N(this.g.o,a),N(this.g.h,a),N(this.g.u,b),N(this.g.s,b)):N(this.g.s,a)),Gb(this),this.g.enableNativeJakeUi&&L(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(L(document.body,"goog_delegate_active"),L(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.j&&Pa(this.g.j),setTimeout(function(){L(document.body, 
"jar")},this.g.K?750:100)),this.g.B&&L(document.body,"goog_delegate_disabled"),this.g.I&&K.addEventListener("load",function(){return c.h()}))} 
function Gb(a){if(a.g.T)D(a.g.i,"click",V(365,function(c){var d=K.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)D(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.j&&(D(a.g.j,"click",function(){return a.h()}),D(a.g.j,"keydown",function(c){"Enter"!==c.code&&"Space"!==c.code||a.h()})),a.g.V&&a.g.h&&D(a.g.h,"click",function(){return a.h()})),a.g.L)Hb(a);else{D(a.g.i, 
"mouseover",V(367,function(){return Hb(a)}));D(a.g.i,"mouseout",V(369,function(){return Ib(a,500)}));D(a.g.i,"touchstart",V(368,function(){return Hb(a)}),La);var b=V(370,function(){return Ib(a,4E3)});D(a.g.i,"mouseup",b);D(a.g.i,"touchend",b);D(a.g.i,"touchcancel",b);a.g.l&&D(a.g.l,"click",V(371,function(c){return a.preventDefault(c)}))}} 
function Fb(a){if(a.g.l&&a.g.R){var b=Da(a.g.g);b&&null!=B(b,5)&&null!=B(b,6)&&(a.i=new cb(Ha(b,5),Ha(b,19)));D(a.g.l,"click",V(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);Sa(window,d)}}))}}function Kb(a){var b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){L(b,"abgacfo")})} 
function Hb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function Ib(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(function(){return Lb(a)},b)}function Lb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
Eb.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)H(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&H(a):window.openAttribution&&(window.openAttribution(b),H(a))}else this.g.P&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&H(a):window.openSystemBrowser&&(window.openSystemBrowser(b),H(a)))};function Mb(a){var b=Nb,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;Na("goog_delegate_deferred")?void 0!==K.goog_delegate_deferred_token?Ob(this):(a=function(){Ob(c)},K.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Ob(this)}function Ob(a){if(!a.g&&(a.g=!0,K.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ya(a);new b(a)}};function Pb(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Qb(){var a=new Pb;this.promise=a.promise;this.resolve=a.resolve}function Rb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Qb,b&&b());return a[5]} 
function Sb(a,b){return Rb(a,function(){var c=a.document,d=c.createElement("script");d.src=b instanceof x&&b.constructor===x?b.g:"type_error:TrustedResourceUrl";var g,k=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,e=null===(g=k.querySelector)||void 0===g?void 0:g.call(k,"script[nonce]");(g=e?e.nonce||e.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",g);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Nb(a){var b=this;this.g=a;this.h=new Eb(this.g,V(359,function(){return Tb(b)}))}function Tb(a){yb(T,373,function(){Lb(a.h);Kb(a.h)});Sb(window,ta("https://pagead2.googlesyndication.com/pagead/js/"+(Ha(a.g.g,33)+"/abg_survey.js"))).then(function(b){b.createAttributionCard(a.g);a.g.S=b;b.expandAttributionCard()});Va()};Ta=60;function Ub(a){var b=[a];b=void 0===b?[]:b;r.google_logging_queue||(r.google_logging_queue=[]);r.google_logging_queue.push([11,b]);new Mb(a)}var W=["buildAttribution"],Y=r;W[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===Ub?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ub;}).call(this);