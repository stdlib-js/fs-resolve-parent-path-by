// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@esm/index.mjs";import s,{sync as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-exists@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function l(r,t){for(var e=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function m(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=l(p(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function p(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}function u(r,e){return d(e)?f(e,"dir")&&(r.dir=e.dir,!t(r.dir))?new TypeError(n("0C62i","dir",r.dir)):null:new TypeError(n("0C62h",e))}function h(r,o,d,f){var l,p,h,c,j,a,g;if(!t(r))throw new TypeError(n("0C63R",r));if(c={},arguments.length>3){if(g=u(c,o))throw g;h=d,j=f}else h=o,j=d;if(!e(h))throw new TypeError(n("invalid argument. Predicate function must be a function. Value: `%s`.",h));if(!e(j))throw new TypeError(n("0C62n",j));function v(){if(p=a,a=m(a,".."),p===a)return j(null,null);l=m(a,r),s(l,w)}function w(r,t){if(t)return h(l,y);v()}function y(r,t){return r?j(r):t?j(null,l):void v()}a=c.dir?m(i(),c.dir):i(),l=m(a,r),s(l,w)}function c(r,s,d){var f,l,p,h,c,j;if(!t(r))throw new TypeError(n("0C63R",r));if(h={},arguments.length>2){if(j=u(h,s))throw j;p=d}else p=s;if(!e(p))throw new TypeError(n("0C643",p));for(c=h.dir?m(i(),h.dir):i();l!==c;){if(f=m(c,r),o(f)&&p(f))return f;l=c,c=m(c,"..")}return null}r(h,"sync",c);export{h as default,c as sync};
//# sourceMappingURL=index.mjs.map
