(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d05dc":"8e316e57","chunk-2d217a99":"d3632f04","chunk-2d21a3d2":"60e15763","chunk-3be11118":"e4173c63","chunk-4e668e14":"c4ed84ff","chunk-5f4ad635":"cf7eb3f9","chunk-804f4c26":"4003a9c2","chunk-9d1675fc":"26a2a304","chunk-c420df12":"14c8d729"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-804f4c26":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0d05dc":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-3be11118":"31d6cfe0","chunk-4e668e14":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-804f4c26":"5c08852e","chunk-9d1675fc":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],p.parentNode.removeChild(p),r(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4360:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("2b0e"),o=r("2f62"),i=(r("7f7f"),r("59ca")),c=r.n(i),s={actions:{login:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dispatch,n=t.commit,a=r.email,o=r.password,e.prev=2,e.next=5,c.a.auth().signInWithEmailAndPassword(a,o);case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=r.email,i=r.password,s=r.name,e.prev=2,e.next=5,c.a.auth().createUserWithEmailAndPassword(o,i);case 5:return e.next=7,n("getUid");case 7:return u=e.sent,e.next=10,c.a.database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:s});case 10:e.next=16;break;case 12:throw e.prev=12,e.t0=e["catch"](2),a("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getUid:function(){var e=c.a.auth().currentUser;return e?e.uid:null},logout:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,c.a.auth().signOut();case 3:r("clearInfo");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},u=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={locale:e.info.locale}}},actions:{updateInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,o=t.getters,e.prev=1,e.next=4,n("getUid");case 4:return i=e.sent,s=d({},o.info,{},r),e.next=8,c.a.database().ref("/users/".concat(i,"/info")).update(s);case 8:a("setInfo",s),e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),a("setError",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchInfo:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.commit,e.prev=1,e.next=4,r("getUid");case 4:return a=e.sent,e.next=7,c.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=e.sent.val(),n("setInfo",o),e.next=15;break;case 11:throw e.prev=11,e.t0=e["catch"](1),n("setError",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}()},getters:{info:function(e){return e.info}}};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={actions:{fetchCategories:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.dispatch,e.prev=1,e.next=4,n("getUid");case 4:return a=e.sent,e.next=7,c.a.database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return o=e.t0,e.abrupt("return",Object.keys(o).map((function(e){return h({},o[e],{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),r("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchCategoryById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.prev=1,e.next=4,a("getUid");case 4:return o=e.sent,e.next=7,c.a.database().ref("/users/".concat(o,"/categories")).child(r).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return i=e.t0,e.abrupt("return",h({},i,{id:r}));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,i=r.limit,s=r.id,e.prev=2,e.next=5,a("getUid");case 5:return u=e.sent,e.next=8,c.a.database().ref("/users/".concat(u,"/categories")).child(s).update({title:o,limit:i});case 8:e.next=14;break;case 10:throw e.prev=10,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),createCategory:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,o=r.title,i=r.limit,e.prev=2,e.next=5,a("getUid");case 5:return s=e.sent,e.next=8,c.a.database().ref("/users/".concat(s,"/categories")).push({title:o,limit:i});case 8:return u=e.sent,e.abrupt("return",{title:o,limit:i,id:u.key});case 12:throw e.prev=12,e.t0=e["catch"](2),n("setError",e.t0),e.t0;case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));function t(t,r){return e.apply(this,arguments)}return t}()}};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={actions:{createRecord:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.prev=1,e.next=4,n("getUid");case 4:return o=e.sent,e.next=7,c.a.database().ref("/users/".concat(o,"/records")).push(r);case 7:return e.abrupt("return",e.sent);case 10:throw e.prev=10,e.t0=e["catch"](1),a("setError",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),fetchRecords:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,n=t.commit,e.prev=1,e.next=4,r("getUid");case 4:return a=e.sent,e.next=7,c.a.database().ref("/users/".concat(a,"/records")).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return o=e.t0,e.abrupt("return",Object.keys(o).map((function(e){return v({},o[e],{id:e})})));case 14:throw e.prev=14,e.t1=e["catch"](1),n("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchRecordById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,e.prev=1,e.next=4,n("getUid");case 4:return o=e.sent,e.next=7,c.a.database().ref("/users/".concat(o,"/records")).child(r).once("value");case 7:if(e.t0=e.sent.val(),e.t0){e.next=10;break}e.t0={};case 10:return i=e.t0,e.abrupt("return",v({},i,{id:r}));case 14:throw e.prev=14,e.t1=e["catch"](1),a("setError",e.t1),e.t1;case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));function t(t,r){return e.apply(this,arguments)}return t}()}};a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="49656929fa6f6834e9007f4334997cd3",e.next=3,fetch("http://data.fixer.io/api/latest?access_key=".concat(t,"&symbols=USD,EUR,RUB"));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},getters:{error:function(e){return e.error}},modules:{auth:s,info:p,category:m,record:b}})},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("1dce"),o=r.n(a),i=r("8832"),c=r.n(i),s=r("0a89"),u=r.n(s),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},f=[],h=r("b444"),m={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(h["a"][e.code]||"Что-то пошло не так")}}},g=m,v=r("2877"),b=Object(v["a"])(g,p,f,!1,null,null,null),y=b.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{key:e.locale+"1",staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"CreateNewRecord",expression:"'CreateNewRecord'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},O=[],C=(r("7f7f"),r("96cf"),r("3b8d")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(" "+e._s(e._f("localize")("ProfileTitle"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(" "+e._s(e._f("localize")("Exit"))+" ")])])])])])])])},_=[],x={data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("logout");case 2:this.$router.push("/login?message=logout");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},j=x,E=Object(v["a"])(j,k,_,!1,null,null,null),R=E.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},N=[],D=r("e977"),U={props:["value"],data:function(){return{links:[{title:Object(D["a"])("Menu_Bill"),url:"/",exact:!0},{title:Object(D["a"])("Menu_History"),url:"/history"},{title:Object(D["a"])("Menu_Planning"),url:"/planning"},{title:Object(D["a"])("Menu_NewRecord"),url:"/record"},{title:Object(D["a"])("Menu_Categories"),url:"/categories"}]}}},T=U,A=Object(v["a"])(T,P,N,!1,null,null,null),I=A.exports,S={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$store.getters.info.bill&&this.$store.getters.info.name){e.next=3;break}return e.next=3,this.$store.dispatch("fetchInfo");case 3:this.loading=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),components:{Navbar:R,Sidebar:I},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(h["a"][e.code]||"Что-то пошло не так")}}},B=S,L=Object(v["a"])(B,w,O,!1,null,null,null),$=L.exports,H={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:y,MainLayout:$}},F=H,W=(r("5c0b"),Object(v["a"])(F,l,d,!1,null,null,null)),q=W.exports,z=r("8c4f"),J=r("59ca"),V=r.n(J);n["a"].use(z["a"]);var K=new z["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-3be11118").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-9d1675fc").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d05dc").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-804f4c26").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-4e668e14").then(r.bind(null,"43ef"))}}]});K.beforeEach((function(e,t,r){var n=V.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var G=K,X=r("4360");r("6762"),r("2fdb");function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=X["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var Q=r("5bb3"),Z={bind:function(e,t){var r=t.value,n=t.modifiers;M.Tooltip.init(e,{html:n.noloc?r:Object(D["a"])(r)})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},ee={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(D["a"])("Error"),"]: ").concat(e)})}}},te={install:function(e){e.prototype.$title=function(e){var t="Vladilen CRM";return"".concat(Object(D["a"])(e)," | ").concat(t)}}},re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},ne=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],ae={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},oe=ae,ie=Object(v["a"])(oe,re,ne,!1,null,null,null),ce=ie.exports,se=r("9483");Object(se["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ue;r("6885"),r("ea7b"),r("66ce");n["a"].config.productionTip=!1,n["a"].use(ee),n["a"].use(te),n["a"].use(o.a),n["a"].use(u.a),n["a"].filter("date",Y),n["a"].filter("localize",D["a"]),n["a"].filter("currency",Q["a"]),n["a"].directive("tooltip",Z),n["a"].component("Loader",ce),n["a"].component("Paginate",c.a),V.a.initializeApp({apiKey:"AIzaSyDAPqALfM3xjg7II0tjg7GL6s73mKXRxEs",authDomain:"vue-crm-e3928.firebaseapp.com",databaseURL:"https://vue-crm-e3928.firebaseio.com",projectId:"vue-crm-e3928",storageBucket:"vue-crm-e3928.appspot.com",messagingSenderId:"251307374581"}),V.a.auth().onAuthStateChanged((function(){ue||(ue=new n["a"]({router:G,store:X["a"],render:function(e){return e(q)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Введите имя","Update":"Обновить","Create":"Создать","Bill":"Счет","Name":"Имя","Exit":"Выйти","Edit":"Редактировать","Menu_Bill":"Счет","Detail_Title":"Запись","Menu_History":"История","Menu_Planning":"Планирование","Menu_NewRecord":"Новая запись","Menu_Categories":"Категории","Выйти":"Выйти","Title":"Название","Limit":"Лимит","Message_EnterDescription":"Введите описание","Message_CategoryTitle":"Введите название категории","Message_MinLength":"Минимальная значение","Category_HasBeenCreated":"Категория была создана","Category_HasBeenUpdated":"Категория упешно обновлена","SelectCategory":"Выберите категорию","Amount":"Сумма","Date":"Дата","Description":"Описание","Category":"Категория","Categories":"Категории","NoCategories":"Категорий пока нет","Type":"Тип","Open":"Открыть","OpenRecord":"Посмотреть запись","BillInCurrency":"Счет в валюте","Currency":"Валюта","CurrencyType":"Курс","CurrencyAmountTitle":"Курс валют","Income":"Доход","Outcome":"Расход","Of":"из","History_Title":"История записей","NoRecords":"Записей пока нет","AddFirst":"Добавьте первую","Back":"Назад","Forward":"Вперед","CostsForCategories":"Расходы по категориям","MoreThan":"Превышение на","Stayed":"Осталось","RecordHasBeenCreated":"Запись успешно создана","NotEnoughMoney":"Недостаточно средств на счете","CRM_Title":"Домашняя бухгалтерия","Message_EmailRequired":"Поле Email не должно быть пустым","Message_EmailValid":"Введите корретный Email","Password":"Пароль","Message_EnterPassword":"Введите пароль","Login":"Войти","NoAccount":"Нет аккаунта?","HasAccount":"Уже есть аккаунт?","Register":"Зарегистрироваться","AcceptRules":"С правилами согласен","CreateNewRecord":"Создать новую запись","Logout":"Вы вышли из системы","FirstLogin":"Для начала войдите в систему","NoUserWithEmail":"Пользователя с таким email не существует","WrongPassword":"Неверный пароль","EmailInUse":"Email уже занят","Error":"Ошибка"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logout",login:"FirstLogin","auth/user-not-found":"NoUserWithEmail","auth/wrong-password":"WrongPassword","auth/email-already-in-use":"EmailInUse"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("4360"),a=r("7704"),o=r("edd4"),i={"ru-RU":a,"en-US":o};function c(e){var t=n["a"].getters.info.locale||"ru-RU";return i[t][e]||"[Localize error]: key ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter name","Update":"Update","Create":"Create","Bill":"Bill","Name":"Name","Exit":"Exit","Edit":"Edit","Menu_Bill":"Bill","Detail_Title":"Detail","Menu_History":"History","Menu_Planning":"Planning","Menu_NewRecord":"New record","Menu_Categories":"Categories","Title":"Title","Limit":"Limit","Message_EnterDescription":"Enter description","Message_CategoryTitle":"Enter category name","Message_MinLength":"Mininum length is","Category_HasBeenCreated":"Category has been created","Category_HasBeenUpdated":"Category has been updated","SelectCategory":"Select category","Amount":"Amount","Date":"Date","Description":"Description","Category":"Category","Categories":"Categories","NoCategories":"No categories","Type":"Type","Open":"Open","OpenRecord":"Open record","BillInCurrency":"Bill in currencies","Currency":"Currency","CurrencyType":"Rate","CurrencyAmountTitle":"Currencies rates","Income":"Income","Outcome":"Outcome","Of":"of","History_Title":"Records history","NoRecords":"No records","AddFirst":"Add first","Back":"Back","Forward":"Forward","CostsForCategories":"Categories costs","MoreThan":"Excess on","Stayed":"Left","RecordHasBeenCreated":"Record has been created","NotEnoughMoney":"Not enough money","CRM_Title":"CRM by Vladilen","Message_EmailRequired":"Email field is required","Message_EmailValid":"Enter valid email","Password":"Password","Message_EnterPassword":"Enter password","Login":"Login","NoAccount":"Has no account?","HasAccount":"Has account?","Register":"Register","AcceptRules":"Agree with rules","CreateNewRecord":"Create new record","Logout":"You have logged out","FirstLogin":"First login","NoUserWithEmail":"No user with email","WrongPassword":"Invalid password","EmailInUse":"Email is already in use","Error":"Error"}')}});
//# sourceMappingURL=app.ec20ddfb.js.map