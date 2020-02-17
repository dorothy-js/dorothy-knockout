/* @pollon/knockout - v1.0.0
* https://github.com/pollon-js/knockout#readme
* 2020 Francesco Lasaracina. Licensed ISC */
System.register(["@pollon/pollon"],(function(t){"use strict";var e;return{setters:[function(t){e=t.TemplateLoader}],execute:function(){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(r,t);var e=l(r);function r(t,o){var i;return n(this,r),(i=e.call(this,t)).extension=o||".jpt",i}return o(r,[{key:"get",value:function(t,e){var n=this;return this.canParse(e)?function(t){return!!document.querySelector('script[id="'.concat(t,'"]'))}(t)?Promise.resolve():new Promise((function(o,a){return u(i(r.prototype),"get",n).call(n,e).then((function(e){var n,r;(n=document.createElement("template")).innerHTML='<script type="text/template" id="'.concat(t,'">').concat(e.trim(),"<\/script>"),r=n.content,document.body.appendChild(r),o(e)})).catch((function(t){console.warn(t),a(t)}))})):Promise.reject("Pollon: [loader:knockout-partials] ".concat(e," element is unparseable by a Partial template loader"))}},{key:"onUnloadable",value:function(t,e,n){return u(i(r.prototype),"onUnloadable",this).call(this,t,e,n).then((function(t){return console.warn("Pollon: [loader:knockout-partials] Partial Template loader: message"),""})).catch((function(t){return console.warn("Pollon: [loader:knockout-partials] Partial Template loader: message"),""}))}}]),r}(e),f=function(t,e){t.bindingHandlers.excludeFromBinding||(t.bindingHandlers.excludeFromBinding={init:function(t,e,n){return{controlsDescendantBindings:!0}}},t.virtualElements.allowedBindings.excludeFromBinding=!0),t.bindingHandlers.stopBubble={init:function(e){t.utils.registerEventHandler(e,"click",(function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}))}};var n=function(n,r,o,i,a){return function(){return function(){var n,o,i,a;return n=t.utils.unwrapObservable(r()),i=null,a=n,"string"==Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1].toLowerCase()?(o=n,void e.navigate(o)):function(t){return"object"==Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1].toLowerCase()}(n)?(o=t.utils.unwrapObservable(n.to),i=t.utils.unwrapObservable(n.data),o||""===o?null==i?void e.navigate(o):void e.navigate(o,i):void console.warn("Pollon [router:invalid-parameter]: cannot navigate to route. Invalid parameter passed in binding")):void 0}}};t.bindingHandlers.navigate||(t.bindingHandlers.navigate={init:function(e,r,o,i,a){var c=n(0,r);t.bindingHandlers.click.init(e,c,o,i,a)}}),t.bindingHandlers.afterHtmlRender||(t.bindingHandlers.afterHtmlRender={update:function(t,e,n){n().html&&e()(n().html)}})};t("default",function(){function t(e){n(this,t),this.modules=[],this.ko=null}return o(t,[{key:"init",value:function(t){var e=this;if(!this.ko)return t.load("knockout").then((function(n){e.ko=n,f(n,t),t.Templates.KnockoutPartials=new s(t.name)}))}},{key:"applyBindings",value:function(t,e,n){var r,o=this;return r=(r=n&&n.View&&n.View.Model)||{},Promise.resolve().then((function(){o.modules[t.name+":"+n.ID]||n.Runtime.FSM.on("statemachine.state_entered","disposed",(function(t,e){o.ko.cleanNode(e.args[0])})),o.modules[t.name+":"+n.ID]=!0;var i=o.ko.dataFor(e);return i&&i===r||o.ko.applyBindings(r,e),e}))}}]),t}())}}}));
