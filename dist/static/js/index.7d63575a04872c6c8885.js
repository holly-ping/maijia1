webpackJsonp([7],{"+Y8I":function(t,e){},0:function(t,e){},"035s":function(t,e){},NydE:function(t,e,a){"use strict";var n=a("DNVT"),s=(a("v2ns"),{name:"swiper",props:{lists:{type:Array,required:!0},name:{}},mounted:function(){new n.a(".swiper-container",{slidesPerView:1,spaceBetween:0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2e3,disableOnInteraction:!0}})}}),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.id,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:"goods.html?id="+t.id}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("wPR0")},null,null);e.a=r.exports},TFhR:function(t,e,a){"use strict";var n={hotLists:"index/hotLists",banner:"index/banner",topList:"category/topList",subList:"category/subList",rank:"category/rank",searchList:"search/list",details:"goods/details",deal:"goods/deal",evaluation:"goods/evaluation",addCart:"cart/add",updateCart:"cart/update",listCart:"cart/list",reduceCart:"cart/reduce",removeCart:"cart/remove",mrremoveCart:"cart/mrremove",addressSetdefault:"address/setDefault",addressUpdate:"address/update",addressList:"address/list",addressRemove:"address/remove",addressAdd:"address/add"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058/"+n[s]);e.a=n},"U/rD":function(t,e,a){"use strict";var n=a("mw3O"),s=a.n(n).a.parse(location.search.substr(1)).index,i=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}],r={data:function(){return{navConfig:i,curIndex:parseInt(s)||0}},methods:{changNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{key:e.id,class:{active:n==t.curIndex},on:{click:function(a){t.changNav(e,n)}}},[a("a",[a("i",{class:e.icon}),a("div",[t._v(t._s(e.name))])])])}))])},staticRenderFns:[]};var c={filters:{adjust:function(t){var e=new Number(t);if(e||0===e)return t.toFixed(2)}},components:{Foot:a("VU/8")(r,o,!1,function(t){a("+Y8I")},null,null).exports}};e.a=c},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("035s"),s=(a.n(n),a("eChN")),i=(a.n(s),a("7+uW")),r=(a("TFhR"),a("mtWM")),o=(a.n(r),a("NydE")),c=a("U/rD"),d=a("8+8L");i.a.use(d.a);new i.a({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null},created:function(){this.getLists(),this.getBanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,this.$http.get("static/data.json").then(function(e){var a=e.data.index.hotLists.lists;a.length<t.pageSize&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.loading=!1,t.pageNum++}).catch(function(t){}))},getBanner:function(){var t=this;this.$http.get("static/data.json").then(function(e){t.bannerLists=e.data.index.banner.lists,console.log(t.bannerLists)})}},components:{Swiper:o.a},mixins:[c.a]})},eChN:function(t,e){},v2ns:function(t,e){},wPR0:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.7d63575a04872c6c8885.js.map