"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=m(function(W,b){
var C=require('@stdlib/assert-is-plain-object/dist'),L=require('@stdlib/assert-has-own-property/dist'),R=require('@stdlib/assert-is-string/dist').isPrimitive,P=require('@stdlib/error-tools-fmtprodmsg/dist');function z(e,r){return C(r)?L(r,"dir")&&(e.dir=r.dir,!R(e.dir))?new TypeError(P('0ON2W',"dir",e.dir)):null:new TypeError(P('0ON2V',r));}b.exports=z
});var V=m(function(X,p){
var o=require("path").resolve,A=require('@stdlib/assert-is-string/dist').isPrimitive,x=require('@stdlib/assert-is-function/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),E=require('@stdlib/process-cwd/dist'),T=require('@stdlib/fs-exists/dist'),D=g();function G(e,r,l,v){var a,u,n,i,t,s,f;if(!A(e))throw new TypeError(q('0ON3F',e));if(i={},arguments.length>3){if(f=D(i,r),f)throw f;n=l,t=v}else n=r,t=l;if(!x(n))throw new TypeError(q('0ON3u',n));if(!x(t))throw new TypeError(q('0ON2b',t));i.dir?s=o(E(),i.dir):s=E(),a=o(s,e),T(a,h);function y(){if(u=s,s=o(s,".."),u===s)return t(null,null);a=o(s,e),T(a,h)}function h(d,c){if(c)return n(a,k);y()}function k(d,c){if(d)return t(d);if(c)return t(null,a);y()}}p.exports=G
});var S=m(function(Y,B){
var w=require("path").resolve,H=require('@stdlib/assert-is-string/dist').isPrimitive,I=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/process-cwd/dist'),J=require('@stdlib/fs-exists/dist').sync,F=require('@stdlib/error-tools-fmtprodmsg/dist'),K=g();function M(e,r,l){var v,a,u,n,i,t;if(!H(e))throw new TypeError(F('0ON3F',e));if(n={},arguments.length>2){if(t=K(n,r),t)throw t;u=l}else u=r;if(!I(u))throw new TypeError(F('0ON3q',u));for(n.dir?i=w(O(),n.dir):i=O();a!==i;){if(v=w(i,e),J(v)&&u(v))return v;a=i,i=w(i,"..")}return null}B.exports=M
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=V(),Q=S();N(j,"sync",Q);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
