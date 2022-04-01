// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).resolveParentPathBy=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g;function h(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var d=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return d.exec(r).slice(1)};function w(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=h(V(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function y(r){var e=j(r),t="/"===S(r,-1);return(r=h(V(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function j(r){return"/"===r.charAt(0)}function E(){var r=Array.prototype.slice.call(arguments,0);return y(V(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function T(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=w(r).substr(1),e=w(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function _(r){var e=b(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function P(r,e){var t=b(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function O(r){return b(r)[3]}var x={extname:O,basename:P,dirname:_,sep:"/",delimiter:":",relative:T,join:E,isAbsolute:j,normalize:y,resolve:w};function V(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var S="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},k=r(Object.freeze({__proto__:null,resolve:w,normalize:y,isAbsolute:j,join:E,relative:T,sep:"/",delimiter:":",dirname:_,basename:P,extname:O,default:x}));var A=function(r){return"string"==typeof r};var I=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var F=function(){return I&&"symbol"==typeof Symbol.toStringTag},M=Object.prototype.toString,$=M;var N=function(r){return $.call(r)},R=Object.prototype.hasOwnProperty;var L=function(r,e){return null!=r&&R.call(r,e)},C="function"==typeof Symbol?Symbol.toStringTag:"",z=L,B=C,G=M;var Z=N,D=function(r){var e,t,n;if(null==r)return G.call(r);t=r[B],e=z(r,B);try{r[B]=void 0}catch(e){return G.call(r)}return n=G.call(r),e?r[B]=t:delete r[B],n},W=F()?D:Z,X=String.prototype.valueOf;var U=W,Y=function(r){try{return X.call(r),!0}catch(r){return!1}},q=F();var H=function(r){return"object"==typeof r&&(r instanceof String||(q?Y(r):"[object String]"===U(r)))},J=A,K=H;var Q=m,rr=function(r){return J(r)||K(r)},er=H;Q(rr,"isPrimitive",A),Q(rr,"isObject",er);var tr=rr,nr=/./;var ir=function(r){return"boolean"==typeof r},or=Boolean.prototype.toString;var ar=W,ur=function(r){try{return or.call(r),!0}catch(r){return!1}},cr=F();var sr=function(r){return"object"==typeof r&&(r instanceof Boolean||(cr?ur(r):"[object Boolean]"===ar(r)))},fr=ir,lr=sr;var pr=m,vr=function(r){return fr(r)||lr(r)},gr=sr;pr(vr,"isPrimitive",ir),pr(vr,"isObject",gr);var mr=vr;var hr=function(){return new Function("return this;")()},dr="object"==typeof self?self:null,br="object"==typeof window?window:null,wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yr="object"==typeof wr?wr:null;module.exports=yr;var jr=mr.isPrimitive,Er=hr,Tr=dr,_r=br,Pr=r(Object.freeze({__proto__:null}));var Or=function(r){if(arguments.length){if(!jr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Er()}if(Tr)return Tr;if(_r)return _r;if(Pr)return Pr;throw new Error("unexpected error. Unable to resolve global object.")},xr=Or(),Vr=xr.document&&xr.document.childNodes,Sr=Int8Array,kr=nr,Ar=Vr,Ir=Sr;var Fr=function(){return"function"==typeof kr||"object"==typeof Ir||"function"==typeof Ar};var Mr=function(){return/^\s*function\s*([^(]*)/i},$r=Mr;m($r,"REGEXP",Mr());var Nr=$r,Rr=W;var Lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Rr(r)},Cr=Lr;var zr=function(r){return null!==r&&"object"==typeof r};m(zr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(zr));var Br=zr;var Gr=W,Zr=Nr.REGEXP,Dr=function(r){return Br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Wr=function(r){var e,t,n;if(("Object"===(t=Gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Zr.exec(n.toString()))return e[1]}return Dr(r)?"Buffer":t},Xr=Wr;var Ur=Wr;var Yr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Xr(r).toLowerCase():e},qr=function(r){return Ur(r).toLowerCase()},Hr=Fr()?qr:Yr;var Jr=function(r){return"function"===Hr(r)},Kr=Math.floor;var Qr=function(r){return Kr(r)===r},re=Qr;var ee=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&re(r.length)&&r.length>=0&&r.length<=9007199254740991};var te=function(r){return"number"==typeof r},ne=Number,ie=ne.prototype.toString;var oe=W,ae=ne,ue=function(r){try{return ie.call(r),!0}catch(r){return!1}},ce=F();var se=function(r){return"object"==typeof r&&(r instanceof ae||(ce?ue(r):"[object Number]"===oe(r)))},fe=te,le=se;var pe=m,ve=function(r){return fe(r)||le(r)},ge=se;pe(ve,"isPrimitive",te),pe(ve,"isObject",ge);var me=ve,he=Number.POSITIVE_INFINITY,de=ne.NEGATIVE_INFINITY,be=he,we=de,ye=Qr;var je=function(r){return r<be&&r>we&&ye(r)},Ee=me.isPrimitive,Te=je;var _e=function(r){return Ee(r)&&Te(r)},Pe=me.isObject,Oe=je;var xe=function(r){return Pe(r)&&Oe(r.valueOf())},Ve=_e,Se=xe;var ke=m,Ae=function(r){return Ve(r)||Se(r)},Ie=xe;ke(Ae,"isPrimitive",_e),ke(Ae,"isObject",Ie);var Fe=Ae;var Me=function(r){return r!=r},$e=me.isPrimitive,Ne=Me;var Re=function(r){return $e(r)&&Ne(r)},Le=me.isObject,Ce=Me;var ze=function(r){return Le(r)&&Ce(r.valueOf())},Be=Re,Ge=ze;var Ze=m,De=function(r){return Be(r)||Ge(r)},We=ze;Ze(De,"isPrimitive",Re),Ze(De,"isObject",We);var Xe=ee,Ue=Fe.isPrimitive,Ye=tr.isPrimitive,qe=De.isPrimitive;var He=function(r,e,t){var n,i,o;if(!Xe(r)&&!Ye(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ue(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ye(r)){if(!Ye(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,qe(e)){for(o=i;o<n;o++)if(qe(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Je=He,Ke=tr.isPrimitive;var Qe=function(r){if(!Ke(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},rt=tr.isPrimitive;var et=function(r){if(!rt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},tt=Qe,nt=et,it=tr.isPrimitive;var ot=function(r){return it(r)&&r===nt(r)&&r!==tt(r)},at=he,ut=de;var ct=function(r){return r==r&&r>ut&&r<at},st=Fe.isPrimitive;var ft=function(r){return st(r)&&r>=0},lt=Fe.isObject;var pt=function(r){return lt(r)&&r.valueOf()>=0},vt=ft,gt=pt;var mt=m,ht=function(r){return vt(r)||gt(r)},dt=pt;mt(ht,"isPrimitive",ft),mt(ht,"isObject",dt);var bt=ht.isPrimitive,wt=tr.isPrimitive;var yt=function(r,e){var t,n;if(!wt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!bt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},jt=Fe.isPrimitive,Et=tr.isPrimitive;var Tt=function(r,e,t){var n,i;if(!Et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Et(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!jt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},_t=yt,Pt=Tt;var Ot=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Pt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+_t("0",i):_t("0",i)+r,n&&(r="-"+r)),r},xt=ot,Vt=et,St=Qe,kt=ct,At=me.isPrimitive,It=Ot;var Ft=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!kt(n)){if(!At(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=It(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=It(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=xt(r.specifier)?Vt(t):St(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Mt=tr.isPrimitive,$t=/[-\/\\^$*+?.()|[\]{}]/g;var Nt=function(r){var e,t;if(!Mt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace($t,"\\$&"):(e=(e=r.substring(1,t)).replace($t,"\\$&"),r=r[0]+e+r.substring(t))},Rt=RegExp.prototype.exec;var Lt=W,Ct=function(r){try{return Rt.call(r),!0}catch(r){return!1}},zt=F();var Bt=Nt,Gt=Jr,Zt=tr.isPrimitive,Dt=function(r){return"object"==typeof r&&(r instanceof RegExp||(zt?Ct(r):"[object RegExp]"===Lt(r)))};var Wt=ot,Xt=et,Ut=Qe,Yt=function(r,e,t){if(!Zt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Zt(e))e=Bt(e),e=new RegExp(e,"g");else if(!Dt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Zt(t)&&!Gt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},qt=ct,Ht=me.isPrimitive,Jt=function(r){return Math.abs(r)},Kt=/e\+(\d)$/,Qt=/e-(\d)$/,rn=/^(\d+)$/,en=/^(\d+)e/,tn=/\.0$/,nn=/\.0*e/,on=/(\..*[^0])0*e/;var an=function(r){var e,t,n=parseFloat(r.arg);if(!qt(n)){if(!Ht(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Jt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Yt(t,on,"$1e"),t=Yt(t,nn,"e"),t=Yt(t,tn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Yt(t,Kt,"e+0$1"),t=Yt(t,Qt,"e-0$1"),r.alternate&&(t=Yt(t,rn,"$1."),t=Yt(t,en,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Wt(r.specifier)?Xt(t):Ut(t)},un=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var cn=yt;var sn=tr.isPrimitive,fn=Je,ln=Me,pn=Ft,vn=an,gn=function(r){var e,t,n,i,o;for(e=0,n=[],o=un.exec(r);o;)(t=r.slice(e,un.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=un.lastIndex,o=un.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},mn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+cn(" ",n):cn(" ",n)+r},hn=Ot,dn=String.fromCharCode;var bn=function(r){var e,t,n,i,o,a,u,c,s;if(!sn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=gn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],sn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!fn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ln(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ln(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=pn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ln(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ln(o)?String(n.arg):dn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=vn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=hn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=mn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},wn=bn;function yn(){throw new Error("setTimeout has not been defined")}function jn(){throw new Error("clearTimeout has not been defined")}var En=yn,Tn=jn;function _n(r){if(En===setTimeout)return setTimeout(r,0);if((En===yn||!En)&&setTimeout)return En=setTimeout,setTimeout(r,0);try{return En(r,0)}catch(e){try{return En.call(null,r,0)}catch(e){return En.call(this,r,0)}}}"function"==typeof wr.setTimeout&&(En=setTimeout),"function"==typeof wr.clearTimeout&&(Tn=clearTimeout);var Pn,On=[],xn=!1,Vn=-1;function Sn(){xn&&Pn&&(xn=!1,Pn.length?On=Pn.concat(On):Vn=-1,On.length&&kn())}function kn(){if(!xn){var r=_n(Sn);xn=!0;for(var e=On.length;e;){for(Pn=On,On=[];++Vn<e;)Pn&&Pn[Vn].run();Vn=-1,e=On.length}Pn=null,xn=!1,function(r){if(Tn===clearTimeout)return clearTimeout(r);if((Tn===jn||!Tn)&&clearTimeout)return Tn=clearTimeout,clearTimeout(r);try{Tn(r)}catch(e){try{return Tn.call(null,r)}catch(e){return Tn.call(this,r)}}}(r)}}function An(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];On.push(new In(r,e)),1!==On.length||xn||_n(kn)}function In(r,e){this.fun=r,this.array=e}In.prototype.run=function(){this.fun.apply(null,this.array)};var Fn="browser",Mn="browser",$n={},Nn=[],Rn={},Ln={},Cn={};function zn(){}var Bn=zn,Gn=zn,Zn=zn,Dn=zn,Wn=zn,Xn=zn,Un=zn;function Yn(r){throw new Error("process.binding is not supported")}function qn(){return"/"}function Hn(r){throw new Error("process.chdir is not supported")}function Jn(){return 0}var Kn=wr.performance||{},Qn=Kn.now||Kn.mozNow||Kn.msNow||Kn.oNow||Kn.webkitNow||function(){return(new Date).getTime()};function ri(r){var e=.001*Qn.call(Kn),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var ei=new Date;function ti(){return(new Date-ei)/1e3}var ni={nextTick:An,title:Fn,browser:true,env:$n,argv:Nn,version:"",versions:Rn,on:Bn,addListener:Gn,once:Zn,off:Dn,removeListener:Wn,removeAllListeners:Xn,emit:Un,binding:Yn,cwd:qn,chdir:Hn,umask:Jn,hrtime:ri,platform:Mn,release:Ln,config:Cn,uptime:ti},ii=r(Object.freeze({__proto__:null,addListener:Gn,argv:Nn,binding:Yn,browser:true,chdir:Hn,config:Cn,cwd:qn,default:ni,emit:Un,env:$n,hrtime:ri,nextTick:An,off:Dn,on:Bn,once:Zn,platform:Mn,release:Ln,removeAllListeners:Xn,removeListener:Wn,title:Fn,umask:Jn,uptime:ti,version:"",versions:Rn}));var oi,ai=function(){return ii.cwd()},ui=r(Object.freeze({__proto__:null,default:{}})),ci=ui;oi="function"==typeof ci.access?ci.access:ci.stat;var si,fi=function(r,e){oi(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))},li=ui;si="function"==typeof li.accessSync?li.accessSync:li.statSync;var pi=fi;m(pi,"sync",(function(r){try{si(r)}catch(r){return!1}return!0}));var vi=pi,gi=Lr;var mi=function(r){return"object"==typeof r&&null!==r&&!gi(r)},hi=Object.getPrototypeOf;var di=function(r){return r.__proto__},bi=W,wi=di;var yi=function(r){var e=wi(r);return e||null===e?e:"[object Function]"===bi(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},ji=hi,Ei=yi,Ti=Jr(Object.getPrototypeOf)?ji:Ei;var _i=mi,Pi=Jr,Oi=function(r){return null==r?null:(r=Object(r),Ti(r))},xi=L,Vi=W,Si=Object.prototype;var ki=function(r){var e;return!!_i(r)&&(!(e=Oi(r))||!xi(r,"constructor")&&xi(e,"constructor")&&Pi(e.constructor)&&"[object Function]"===Vi(e.constructor)&&xi(e,"isPrototypeOf")&&Pi(e.isPrototypeOf)&&(e===Si||function(r){var e;for(e in r)if(!xi(r,e))return!1;return!0}(r)))},Ai=ki,Ii=L,Fi=tr.isPrimitive,Mi=wn;var $i=function(r,e){return Ai(e)?Ii(e,"dir")&&(r.dir=e.dir,!Fi(r.dir))?new TypeError(Mi("invalid option. `%s` option must be a string. Option: `%s`.","dir",r.dir)):null:new TypeError(Mi("invalid argument. Options argument must be an object. Value: `%s`.",e))},Ni=k.resolve,Ri=tr.isPrimitive,Li=Jr,Ci=wn,zi=ai,Bi=vi,Gi=$i;var Zi=function(r,e,t,n){var i,o,a,u,c,s,f;if(!Ri(r))throw new TypeError(Ci("invalid argument. First argument must be a string. Value: `%s`.",r));if(u={},arguments.length>3){if(f=Gi(u,e))throw f;a=t,c=n}else a=e,c=t;if(!Li(a))throw new TypeError(Ci("invalid argument. Predicate function argument must be a function. Value: `%s`.",a));if(!Li(c))throw new TypeError(Ci("invalid argument. Callback argument must be a function. Value: `%s`.",c));function l(){if(o=s,s=Ni(s,".."),o===s)return c(null,null);i=Ni(s,r),Bi(i,p)}function p(r,e){if(e)return a(i,v);l()}function v(r,e){return r?c(r):e?c(null,i):void l()}s=u.dir?Ni(zi(),u.dir):zi(),i=Ni(s,r),Bi(i,p)},Di=k.resolve,Wi=tr.isPrimitive,Xi=Jr,Ui=ai,Yi=vi.sync,qi=wn,Hi=$i;var Ji=function(r,e,t){var n,i,o,a,u,c;if(!Wi(r))throw new TypeError(qi("invalid argument. First argument must be a string. Value: `%s`.",r));if(a={},arguments.length>2){if(c=Hi(a,e))throw c;o=t}else o=e;if(!Xi(o))throw new TypeError(qi("invalid argument. Last argument must be a function. Value: `%s`.",o));for(u=a.dir?Di(Ui(),a.dir):Ui();i!==u;){if(n=Di(u,r),Yi(n)&&o(n))return n;i=u,u=Di(u,"..")}return null},Ki=Zi;return m(Ki,"sync",Ji),Ki}));
//# sourceMappingURL=bundle.js.map
