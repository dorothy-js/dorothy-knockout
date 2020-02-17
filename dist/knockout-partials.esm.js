/* knockout-partials - v1.0.0
* https://github.com/pollon-js/knockout#readme
* 2020 Francesco Lasaracina. Licensed ISC */
import{TemplateLoader as t}from"@pollon/pollon";function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=n(t);if(e){var a=n(this).constructor;r=Reflect.construct(c,arguments,a)}else r=c.apply(this,arguments);return o(this,r)}}function a(t,e,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}(t,e);if(o){var c=Object.getOwnPropertyDescriptor(o,e);return c.get?c.get.call(r):c.value}})(t,e,r||t)}var i=function(o){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(p,t);var i,l,u,f=c(p);function p(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(n=f.call(this,t)).extension=e||".jpt",n}return i=p,(l=[{key:"get",value:function(t,e){var r=this;return this.canParse(e)?function(t){return!!document.querySelector('script[id="'.concat(t,'"]'))}(t)?Promise.resolve():new Promise((function(o,c){return a(n(p.prototype),"get",r).call(r,e).then((function(e){var n,r;(n=document.createElement("template")).innerHTML='<script type="text/template" id="'.concat(t,'">').concat(e.trim(),"<\/script>"),r=n.content,document.body.appendChild(r),o(e)})).catch((function(t){console.warn(t),c(t)}))})):Promise.reject("Pollon: [loader:knockout-partials] ".concat(e," element is unparseable by a Partial template loader"))}},{key:"onUnloadable",value:function(t,e,r){return a(n(p.prototype),"onUnloadable",this).call(this,t,e,r).then((function(t){return console.warn("Pollon: [loader:knockout-partials] Partial Template loader: message"),""})).catch((function(t){return console.warn("Pollon: [loader:knockout-partials] Partial Template loader: message"),""}))}}])&&e(i.prototype,l),u&&e(i,u),p}();export{i as KnockoutPartialsLoader};
