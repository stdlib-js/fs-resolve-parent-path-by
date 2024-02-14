// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).resolveParentPathBy=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,y,"$1e"),n=p.call(n,b,"e"),n=p.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var k=String.fromCharCode,x=isNaN,T=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,a,o,u,l,f,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,f=0;f<r.length;f++)if(s(n=r[f]))u+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(o)?String(n.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){return"string"==typeof r}function F(r){var e,t;if(!A(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[$(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var I,C=Object.prototype,R=C.toString,L=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,W=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var N=I;function G(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function z(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var U=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,X=function(r){return U.exec(r).slice(1)};function B(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function D(r){var e=q(r),t="/"===tr(r,-1);return(r=z(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function q(r){return"/"===r.charAt(0)}function H(){var r=Array.prototype.slice.call(arguments,0);return D(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function J(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=B(r).substr(1),e=B(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),a=Math.min(n.length,i.length),o=a,c=0;c<a;c++)if(n[c]!==i[c]){o=c;break}var s=[];for(c=o;c<n.length;c++)s.push("..");return(s=s.concat(i.slice(o))).join("/")}function K(r){var e=X(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=X(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return X(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:J,join:H,isAbsolute:q,normalize:D,resolve:B};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=M(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:q,join:H,normalize:D,relative:J,resolve:B,sep:"/"}));function ir(r){return"string"==typeof r}var ar="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function or(){return ar&&"symbol"==typeof Symbol.toStringTag}var cr=Object.prototype.toString;var sr=Object.prototype.hasOwnProperty;function ur(r,e){return null!=r&&sr.call(r,e)}var lr="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof lr?lr.toStringTag:"";var pr=or()?function(r){var e,t,n;if(null==r)return cr.call(r);t=r[fr],e=ur(r,fr);try{r[fr]=void 0}catch(e){return cr.call(r)}return n=cr.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return cr.call(r)},gr=String.prototype.valueOf;var dr=or();function hr(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===pr(r)))}function vr(r){return ir(r)||hr(r)}G(vr,"isPrimitive",ir),G(vr,"isObject",hr);var wr=/./;function br(r){return"boolean"==typeof r}var yr=Object.prototype.toString;var mr="function"==typeof Symbol?Symbol:void 0,Er="function"==typeof mr?mr.toStringTag:"";var Sr=or()?function(r){var e,t,n;if(null==r)return yr.call(r);t=r[Er],e=ur(r,Er);try{r[Er]=void 0}catch(e){return yr.call(r)}return n=yr.call(r),e?r[Er]=t:delete r[Er],n}:function(r){return yr.call(r)},kr=Boolean,xr=Boolean.prototype.toString;var Tr=or();function jr(r){return"object"==typeof r&&(r instanceof kr||(Tr?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Sr(r)))}function _r(r){return br(r)||jr(r)}function Vr(r){return"number"==typeof r}function Or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function $r(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Or(i):Or(i)+r,n&&(r="-"+r)),r}G(_r,"isPrimitive",br),G(_r,"isObject",jr);var Ar=String.prototype.toLowerCase,Fr=String.prototype.toUpperCase;function Ir(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Vr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=$r(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=$r(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Fr.call(r.specifier)?Fr.call(t):Ar.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Cr(r){return"string"==typeof r}var Rr=Math.abs,Lr=String.prototype.toLowerCase,Pr=String.prototype.toUpperCase,Zr=String.prototype.replace,Wr=/e\+(\d)$/,Nr=/e-(\d)$/,Gr=/^(\d+)$/,Mr=/^(\d+)e/,zr=/\.0$/,Ur=/\.0*e/,Xr=/(\..*[^0])0*e/;function Br(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Vr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Rr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Zr.call(t,Xr,"$1e"),t=Zr.call(t,Ur,"e"),t=Zr.call(t,zr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Zr.call(t,Wr,"e+0$1"),t=Zr.call(t,Nr,"e-0$1"),r.alternate&&(t=Zr.call(t,Gr,"$1."),t=Zr.call(t,Mr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Pr.call(r.specifier)?Pr.call(t):Lr.call(t)}function Dr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function qr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Dr(n):Dr(n)+r}var Hr=String.fromCharCode,Jr=isNaN,Kr=Array.isArray;function Qr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Yr(r){var e,t,n,i,a,o,c,s,u;if(!Kr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Cr(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Qr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Jr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Jr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Ir(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Jr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Jr(a)?String(n.arg):Hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Br(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=$r(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=qr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var re=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ee(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function te(r){var e,t,n,i;for(t=[],i=0,n=re.exec(r);n;)(e=r.slice(i,re.lastIndex-n[0].length)).length&&t.push(e),t.push(ee(n)),i=re.lastIndex,n=re.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function ne(r){return"string"==typeof r}function ie(r){var e,t;if(!ne(r))throw new TypeError(ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[te(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Yr.apply(null,e)}function ae(){return new Function("return this;")()}var oe="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null;var ue=function(r){if(arguments.length){if(!br(r))throw new TypeError(ie("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ae()}if(se)return se;if(oe)return oe;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ue.document&&ue.document.childNodes,fe=Int8Array;var pe=Object.prototype.toString;var ge="function"==typeof Symbol?Symbol:void 0,de="function"==typeof ge?ge.toStringTag:"";var he=or()?function(r){var e,t,n;if(null==r)return pe.call(r);t=r[de],e=ur(r,de);try{r[de]=void 0}catch(e){return pe.call(r)}return n=pe.call(r),e?r[de]=t:delete r[de],n}:function(r){return pe.call(r)};function ve(){return/^\s*function\s*([^(]*)/i}var we=/^\s*function\s*([^(]*)/i;G(ve,"REGEXP",we);var be=Object.prototype.toString;var ye="function"==typeof Symbol?Symbol:void 0,me="function"==typeof ye?ye.toStringTag:"";var Ee=or()?function(r){var e,t,n;if(null==r)return be.call(r);t=r[me],e=ur(r,me);try{r[me]=void 0}catch(e){return be.call(r)}return n=be.call(r),e?r[me]=t:delete r[me],n}:function(r){return be.call(r)};var Se=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ee(r)};function ke(r){return"number"==typeof r}function xe(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Te(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+xe(i):xe(i)+r,n&&(r="-"+r)),r}var je=String.prototype.toLowerCase,_e=String.prototype.toUpperCase;function Ve(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ke(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Te(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Te(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===_e.call(r.specifier)?_e.call(t):je.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Oe(r){return"string"==typeof r}var $e=Math.abs,Ae=String.prototype.toLowerCase,Fe=String.prototype.toUpperCase,Ie=String.prototype.replace,Ce=/e\+(\d)$/,Re=/e-(\d)$/,Le=/^(\d+)$/,Pe=/^(\d+)e/,Ze=/\.0$/,We=/\.0*e/,Ne=/(\..*[^0])0*e/;function Ge(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ke(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":$e(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ie.call(t,Ne,"$1e"),t=Ie.call(t,We,"e"),t=Ie.call(t,Ze,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ie.call(t,Ce,"e+0$1"),t=Ie.call(t,Re,"e-0$1"),r.alternate&&(t=Ie.call(t,Le,"$1."),t=Ie.call(t,Pe,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Fe.call(r.specifier)?Fe.call(t):Ae.call(t)}function Me(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ze(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Me(n):Me(n)+r}var Ue=String.fromCharCode,Xe=isNaN,Be=Array.isArray;function De(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function qe(r){var e,t,n,i,a,o,c,s,u;if(!Be(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Oe(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=De(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Xe(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Xe(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Ve(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Xe(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xe(a)?String(n.arg):Ue(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ge(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Te(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ze(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var He=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Je(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ke(r){var e,t,n,i;for(t=[],i=0,n=He.exec(r);n;)(e=r.slice(i,He.lastIndex-n[0].length)).length&&t.push(e),t.push(Je(n)),i=He.lastIndex,n=He.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Qe(r){return"string"==typeof r}function Ye(r){var e,t;if(!Qe(r))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Ke(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return qe.apply(null,e)}function rt(r){return null!==r&&"object"==typeof r}function et(r){var e,t,n,i;if(("Object"===(t=he(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=we.exec(n.toString()))return e[1]}return rt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(rt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Ye("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Se(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(rt));var tt="function"==typeof wr||"object"==typeof fe||"function"==typeof le?function(r){return et(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?et(r).toLowerCase():e};function nt(r){return"function"===tt(r)}function it(r){return"number"==typeof r}function at(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ot(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+at(i):at(i)+r,n&&(r="-"+r)),r}var ct=String.prototype.toLowerCase,st=String.prototype.toUpperCase;function ut(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!it(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ot(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ot(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===st.call(r.specifier)?st.call(t):ct.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function lt(r){return"string"==typeof r}var ft=Math.abs,pt=String.prototype.toLowerCase,gt=String.prototype.toUpperCase,dt=String.prototype.replace,ht=/e\+(\d)$/,vt=/e-(\d)$/,wt=/^(\d+)$/,bt=/^(\d+)e/,yt=/\.0$/,mt=/\.0*e/,Et=/(\..*[^0])0*e/;function St(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!it(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ft(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=dt.call(t,Et,"$1e"),t=dt.call(t,mt,"e"),t=dt.call(t,yt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=dt.call(t,ht,"e+0$1"),t=dt.call(t,vt,"e-0$1"),r.alternate&&(t=dt.call(t,wt,"$1."),t=dt.call(t,bt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===gt.call(r.specifier)?gt.call(t):pt.call(t)}function kt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function xt(r,e,t){var n=e-r.length;return n<0?r:r=t?r+kt(n):kt(n)+r}var Tt=String.fromCharCode,jt=isNaN,_t=Array.isArray;function Vt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ot(r){var e,t,n,i,a,o,c,s,u;if(!_t(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(lt(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Vt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,jt(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,jt(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ut(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!jt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=jt(a)?String(n.arg):Tt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=St(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ot(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=xt(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var $t=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function At(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Ft(r){var e,t,n,i;for(t=[],i=0,n=$t.exec(r);n;)(e=r.slice(i,$t.lastIndex-n[0].length)).length&&t.push(e),t.push(At(n)),i=$t.lastIndex,n=$t.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function It(r){return"string"==typeof r}function Ct(r){var e,t,n;if(!It(r))throw new TypeError(Ct("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Ft(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Ot.apply(null,t)}var Rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Lt(){throw new Error("setTimeout has not been defined")}function Pt(){throw new Error("clearTimeout has not been defined")}var Zt=Lt,Wt=Pt;function Nt(r){if(Zt===setTimeout)return setTimeout(r,0);if((Zt===Lt||!Zt)&&setTimeout)return Zt=setTimeout,setTimeout(r,0);try{return Zt(r,0)}catch(e){try{return Zt.call(null,r,0)}catch(e){return Zt.call(this,r,0)}}}"function"==typeof Rt.setTimeout&&(Zt=setTimeout),"function"==typeof Rt.clearTimeout&&(Wt=clearTimeout);var Gt,Mt=[],zt=!1,Ut=-1;function Xt(){zt&&Gt&&(zt=!1,Gt.length?Mt=Gt.concat(Mt):Ut=-1,Mt.length&&Bt())}function Bt(){if(!zt){var r=Nt(Xt);zt=!0;for(var e=Mt.length;e;){for(Gt=Mt,Mt=[];++Ut<e;)Gt&&Gt[Ut].run();Ut=-1,e=Mt.length}Gt=null,zt=!1,function(r){if(Wt===clearTimeout)return clearTimeout(r);if((Wt===Pt||!Wt)&&clearTimeout)return Wt=clearTimeout,clearTimeout(r);try{Wt(r)}catch(e){try{return Wt.call(null,r)}catch(e){return Wt.call(this,r)}}}(r)}}function Dt(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Mt.push(new qt(r,e)),1!==Mt.length||zt||Nt(Bt)}function qt(r,e){this.fun=r,this.array=e}qt.prototype.run=function(){this.fun.apply(null,this.array)};var Ht="browser",Jt="browser",Kt={},Qt=[],Yt={},rn={},en={};function tn(){}var nn=tn,an=tn,on=tn,cn=tn,sn=tn,un=tn,ln=tn;function fn(r){throw new Error("process.binding is not supported")}function pn(){return"/"}function gn(r){throw new Error("process.chdir is not supported")}function dn(){return 0}var hn=Rt.performance||{},vn=hn.now||hn.mozNow||hn.msNow||hn.oNow||hn.webkitNow||function(){return(new Date).getTime()};function wn(r){var e=.001*vn.call(hn),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var bn=new Date;function yn(){return(new Date-bn)/1e3}var mn={nextTick:Dt,title:Ht,browser:true,env:Kt,argv:Qt,version:"",versions:Yt,on:nn,addListener:an,once:on,off:cn,removeListener:sn,removeAllListeners:un,emit:ln,binding:fn,cwd:pn,chdir:gn,umask:dn,hrtime:wn,platform:Jt,release:rn,config:en,uptime:yn},En=M(Object.freeze({__proto__:null,addListener:an,argv:Qt,binding:fn,browser:true,chdir:gn,config:en,cwd:pn,default:mn,emit:ln,env:Kt,hrtime:wn,nextTick:Dt,off:cn,on:nn,once:on,platform:Jt,release:rn,removeAllListeners:un,removeListener:sn,title:Ht,umask:dn,uptime:yn,version:"",versions:Yt}));function Sn(){return En.cwd()}var kn,xn=M(Object.freeze({__proto__:null,default:{}})),Tn=xn;function jn(r,e){kn(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}kn="function"==typeof Tn.access?Tn.access:Tn.stat;var _n,Vn=xn;function On(r){try{_n(r)}catch(r){return!1}return!0}_n="function"==typeof Vn.accessSync?Vn.accessSync:Vn.statSync,G(jn,"sync",On);var $n=Object,An=Object.getPrototypeOf,Fn=Object.prototype.toString;var In="function"==typeof Symbol?Symbol:void 0,Cn="function"==typeof In?In.toStringTag:"";var Rn,Ln=or()?function(r){var e,t,n;if(null==r)return Fn.call(r);t=r[Cn],e=ur(r,Cn);try{r[Cn]=void 0}catch(e){return Fn.call(r)}return n=Fn.call(r),e?r[Cn]=t:delete r[Cn],n}:function(r){return Fn.call(r)};Rn=nt(Object.getPrototypeOf)?An:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Ln(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Pn=Rn;var Zn=Object.prototype.toString;var Wn="function"==typeof Symbol?Symbol:void 0,Nn="function"==typeof Wn?Wn.toStringTag:"";var Gn=or()?function(r){var e,t,n;if(null==r)return Zn.call(r);t=r[Nn],e=ur(r,Nn);try{r[Nn]=void 0}catch(e){return Zn.call(r)}return n=Zn.call(r),e?r[Nn]=t:delete r[Nn],n}:function(r){return Zn.call(r)},Mn=Object.prototype;function zn(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Se(r)}(r)&&(e=function(r){return null==r?null:(r=$n(r),Pn(r))}(r),!e||!ur(r,"constructor")&&ur(e,"constructor")&&nt(e.constructor)&&"[object Function]"===Gn(e.constructor)&&ur(e,"isPrototypeOf")&&nt(e.isPrototypeOf)&&(e===Mn||function(r){var e;for(e in r)if(!ur(r,e))return!1;return!0}(r)))}function Un(r,e){return zn(e)?ur(e,"dir")&&(r.dir=e.dir,!ir(r.dir))?new TypeError(Ct("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(Ct("invalid argument. Options argument must be an object. Value: `%s`.",e))}var Xn=nr.resolve;function Bn(r,e,t,n){var i,a,o,c,s,u,l;if(!ir(r))throw new TypeError(Ct("invalid argument. First argument must be a string. Value: `%s`.",r));if(c={},arguments.length>3){if(l=Un(c,e))throw l;o=t,s=n}else o=e,s=t;if(!nt(o))throw new TypeError(Ct("invalid argument. Predicate function must be a function. Value: `%s`.",o));if(!nt(s))throw new TypeError(Ct("invalid argument. Callback argument must be a function. Value: `%s`.",s));function f(){if(a=u,u=Xn(u,".."),a===u)return s(null,null);jn(i=Xn(u,r),p)}function p(r,e){if(e)return o(i,g);f()}function g(r,e){return r?s(r):e?s(null,i):void f()}u=c.dir?Xn(Sn(),c.dir):Sn(),jn(i=Xn(u,r),p)}var Dn=nr.resolve;return G(Bn,"sync",(function(r,e,t){var n,i,a,o,c,s;if(!ir(r))throw new TypeError(Ct("invalid argument. First argument must be a string. Value: `%s`.",r));if(o={},arguments.length>2){if(s=Un(o,e))throw s;a=t}else a=e;if(!nt(a))throw new TypeError(Ct("invalid argument. Last argument must be a function. Value: `%s`.",a));for(c=o.dir?Dn(Sn(),o.dir):Sn();i!==c;){if(On(n=Dn(c,r))&&a(n))return n;i=c,c=Dn(c,"..")}return null})),Bn}));
//# sourceMappingURL=browser.js.map
