(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a99"],{c84b:function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):e.record?r("div",[r("div",{staticClass:"breadcrumb-wrap"},[r("router-link",{staticClass:"breadcrumb",attrs:{to:"/history"}},[e._v(e._s(e._f("localize")("Menu_History")))]),r("a",{staticClass:"breadcrumb",on:{click:function(e){e.preventDefault()}}},[e._v(e._s(e._f("localize")("income"===e.record.type?"Income":"Outcome")))])],1),r("div",{staticClass:"row"},[r("div",{staticClass:"col s12 m6"},[r("div",{staticClass:"card",class:{red:"outcome"===e.record.type,green:"income"===e.record.type}},[r("div",{staticClass:"card-content white-text"},[r("p",[e._v(e._s(e._f("localize")("Description"))+": "+e._s(e.record.description))]),r("p",[e._v(e._s(e._f("localize")("Amount"))+": "+e._s(e._f("currency")(e.record.amount)))]),r("p",[e._v(e._s(e._f("localize")("Category"))+": "+e._s(e.record.categoryName))]),r("small",[e._v(e._s(e._f("date")(e.record.date,"datetime")))])])])])])]):r("p",{staticClass:"center"},[e._v("Запись с id="+e._s(e.$route.params.id)+" не найдена")])],1)},n=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=(r("96cf"),r("3b8d"));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"detail",metaInfo:function(){return{title:this.$title("Detail_Title")}},data:function(){return{record:null,loading:!0}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.next=3,this.$store.dispatch("fetchRecordById",t);case 3:return r=e.sent,e.next=6,this.$store.dispatch("fetchCategoryById",r.categoryId);case 6:c=e.sent,this.record=s({},r,{categoryName:c.title}),this.loading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},d=l,u=r("2877"),p=Object(u["a"])(d,c,n,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d217a99.d3632f04.js.map