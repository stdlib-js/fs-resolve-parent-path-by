// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var T=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,s,f,l,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(c(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function V(r){var e,t,n;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var N,L=Object.prototype,$=L.toString,C=L.__defineGetter__,I=L.__defineSetter__,M=L.__lookupGetter__,R=L.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(M.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=L,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&I&&I.call(r,e,t.set),r};var z=N;function B(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function D(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var W=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Z=function(r){return W.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=D(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=J(r),t="/"===tr(r,-1);return(r=D(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function J(r){return"/"===r.charAt(0)}function q(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function Q(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")}function H(r){var e=Z(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function K(r,e){var t=Z(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return Z(r)[3]}var rr={extname:Y,basename:K,dirname:H,sep:"/",delimiter:":",relative:Q,join:q,isAbsolute:J,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=G(Object.freeze({__proto__:null,basename:K,default:rr,delimiter:":",dirname:H,extname:Y,isAbsolute:J,join:q,normalize:X,relative:Q,resolve:U,sep:"/"}));function or(r){return"string"==typeof r}var ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ar(){return ir&&"symbol"==typeof Symbol.toStringTag}var ur=Object.prototype.toString;var cr=Object.prototype.hasOwnProperty;function sr(r,e){return null!=r&&cr.call(r,e)}var fr="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof fr?fr.toStringTag:"";var pr=ar()?function(r){var e,t,n;if(null==r)return ur.call(r);t=r[lr],e=sr(r,lr);try{r[lr]=void 0}catch(e){return ur.call(r)}return n=ur.call(r),e?r[lr]=t:delete r[lr],n}:function(r){return ur.call(r)},gr=String.prototype.valueOf;var hr=ar();function dr(r){return"object"==typeof r&&(r instanceof String||(hr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===pr(r)))}function vr(r){return or(r)||dr(r)}B(vr,"isPrimitive",or),B(vr,"isObject",dr);var yr=/./;function br(r){return"boolean"==typeof r}var wr=Boolean,mr=Boolean.prototype.toString;var jr=ar();function _r(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===pr(r)))}function Tr(r){return br(r)||_r(r)}function Er(){return new Function("return this;")()}B(Tr,"isPrimitive",br),B(Tr,"isObject",_r);var Or="object"==typeof self?self:null,Sr="object"==typeof window?window:null,xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},kr="object"==typeof xr?xr:null,Ar="object"==typeof globalThis?globalThis:null;var Pr=function(r){if(arguments.length){if(!br(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Er()}if(Ar)return Ar;if(Or)return Or;if(Sr)return Sr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Pr.document&&Pr.document.childNodes,Vr=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Lr=/^\s*function\s*([^(]*)/i;B(Nr,"REGEXP",Lr);var $r=Array.isArray?Array.isArray:function(r){return"[object Array]"===pr(r)};function Cr(r){return null!==r&&"object"==typeof r}function Ir(r){var e,t,n,o;if(("Object"===(t=pr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Lr.exec(n.toString()))return e[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}B(Cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr));var Mr="function"==typeof yr||"object"==typeof Vr||"function"==typeof Fr?function(r){return Ir(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ir(r).toLowerCase():e};function Rr(r){return"function"===Mr(r)}function zr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function Br(){throw new Error("setTimeout has not been defined")}function Gr(){throw new Error("clearTimeout has not been defined")}var Dr=Br,Wr=Gr;function Zr(r){if(Dr===setTimeout)return setTimeout(r,0);if((Dr===Br||!Dr)&&setTimeout)return Dr=setTimeout,setTimeout(r,0);try{return Dr(r,0)}catch(e){try{return Dr.call(null,r,0)}catch(e){return Dr.call(this,r,0)}}}"function"==typeof xr.setTimeout&&(Dr=setTimeout),"function"==typeof xr.clearTimeout&&(Wr=clearTimeout);var Ur,Xr=[],Jr=!1,qr=-1;function Qr(){Jr&&Ur&&(Jr=!1,Ur.length?Xr=Ur.concat(Xr):qr=-1,Xr.length&&Hr())}function Hr(){if(!Jr){var r=Zr(Qr);Jr=!0;for(var e=Xr.length;e;){for(Ur=Xr,Xr=[];++qr<e;)Ur&&Ur[qr].run();qr=-1,e=Xr.length}Ur=null,Jr=!1,function(r){if(Wr===clearTimeout)return clearTimeout(r);if((Wr===Gr||!Wr)&&clearTimeout)return Wr=clearTimeout,clearTimeout(r);try{Wr(r)}catch(e){try{return Wr.call(null,r)}catch(e){return Wr.call(this,r)}}}(r)}}function Kr(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Xr.push(new Yr(r,e)),1!==Xr.length||Jr||Zr(Hr)}function Yr(r,e){this.fun=r,this.array=e}Yr.prototype.run=function(){this.fun.apply(null,this.array)};var re={},ee=[],te={},ne={},oe={};function ie(){}var ae=ie,ue=ie,ce=ie,se=ie,fe=ie,le=ie,pe=ie;function ge(r){throw new Error("process.binding is not supported")}function he(){return"/"}function de(r){throw new Error("process.chdir is not supported")}function ve(){return 0}var ye=xr.performance||{},be=ye.now||ye.mozNow||ye.msNow||ye.oNow||ye.webkitNow||function(){return(new Date).getTime()};function we(r){var e=.001*be.call(ye),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var me=new Date;function je(){return(new Date-me)/1e3}var _e={nextTick:Kr,title:"browser",browser:true,env:re,argv:ee,version:"",versions:te,on:ae,addListener:ue,once:ce,off:se,removeListener:fe,removeAllListeners:le,emit:pe,binding:ge,cwd:he,chdir:de,umask:ve,hrtime:we,platform:"browser",release:ne,config:oe,uptime:je},Te=G(Object.freeze({__proto__:null,addListener:ue,argv:ee,binding:ge,browser:true,chdir:de,config:oe,cwd:he,default:_e,emit:pe,env:re,hrtime:we,nextTick:Kr,off:se,on:ae,once:ce,platform:"browser",release:ne,removeAllListeners:le,removeListener:fe,title:"browser",umask:ve,uptime:je,version:"",versions:te}));function Ee(){return Te.cwd()}var Oe,Se=G(Object.freeze({__proto__:null,default:{}})),xe=Se;function ke(r,e){Oe(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}Oe="function"==typeof xe.access?xe.access:xe.stat;var Ae,Pe=Se;function Fe(r){try{Ae(r)}catch(r){return!1}return!0}Ae="function"==typeof Pe.accessSync?Pe.accessSync:Pe.statSync,B(ke,"sync",Fe);var Ve,Ne=Object,Le=Object.getPrototypeOf;Ve=Rr(Object.getPrototypeOf)?Le:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===pr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $e=Ve;var Ce=Object.prototype;function Ie(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!$r(r)}(r)&&(e=function(r){return null==r?null:(r=Ne(r),$e(r))}(r),!e||!sr(r,"constructor")&&sr(e,"constructor")&&Rr(e.constructor)&&"[object Function]"===pr(e.constructor)&&sr(e,"isPrototypeOf")&&Rr(e.isPrototypeOf)&&(e===Ce||function(r){var e;for(e in r)if(!sr(r,e))return!1;return!0}(r)))}function Me(r,e){return Ie(e)?sr(e,"dir")&&(r.dir=e.dir,!or(r.dir))?new TypeError(zr("0ON2W,Gh","dir",r.dir)):null:new TypeError(zr("0ON2V,FD",e))}var Re=nr.resolve;function ze(r,e,t,n){var o,i,a,u,c,s,f;if(!or(r))throw new TypeError(zr("0ON3F,Ex",r));if(u={},arguments.length>3){if(f=Me(u,e))throw f;a=t,c=n}else a=e,c=t;if(!Rr(a))throw new TypeError(zr("0ON3u,PQ",a));if(!Rr(c))throw new TypeError(zr("0ON2b,GJ",c));function l(){if(i=s,s=Re(s,".."),i===s)return c(null,null);ke(o=Re(s,r),p)}function p(r,e){if(e)return a(o,g);l()}function g(r,e){return r?c(r):e?c(null,o):void l()}s=u.dir?Re(Ee(),u.dir):Ee(),ke(o=Re(s,r),p)}var Be=nr.resolve;function Ge(r,e,t){var n,o,i,a,u,c;if(!or(r))throw new TypeError(zr("0ON3F,Ex",r));if(a={},arguments.length>2){if(c=Me(a,e))throw c;i=t}else i=e;if(!Rr(i))throw new TypeError(zr("0ON3q,JV",i));for(u=a.dir?Be(Ee(),a.dir):Ee();o!==u;){if(Fe(n=Be(u,r))&&i(n))return n;o=u,u=Be(u,"..")}return null}B(ze,"sync",Ge);export{ze as default,Ge as sync};
//# sourceMappingURL=mod.js.map
