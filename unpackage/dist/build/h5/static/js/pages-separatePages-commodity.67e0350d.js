(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-separatePages-commodity"],{"1ce3":function(t,i,a){"use strict";var e=a("3b75"),n=a.n(e);n.a},"240d":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"all"},[a("v-uni-view",{staticClass:"returnBefore",on:{click:function(i){i=t.$handleEvent(i),t.returnBtn(i)}}},[a("i",{staticClass:"iconfont"},[t._v("")])]),a("v-uni-view",{staticClass:"banner"},[a("v-uni-image",{attrs:{src:t.ChangeUrl(t.commodityList[0].src),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"des"},[a("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(t.commodityList[0].price))]),a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.commodityList[0].title))]),a("v-uni-view",{staticClass:"specifications"},[a("v-uni-text",[t._v("规格:")]),a("v-uni-view",{staticClass:"place"}),a("v-uni-view",{staticClass:"weight"},[t._v(t._s(t.commodityList[0].weight))])],1)],1),a("v-uni-view",{staticClass:"flooter"},[a("v-uni-view",{staticClass:"addCar"},[a("v-uni-view",{staticClass:"cls"},[a("v-uni-view",{staticClass:"rem",on:{click:function(i){i=t.$handleEvent(i),t.remNumber(i)}}},[t._v("-")]),a("v-uni-view",{staticClass:"show"},[t._v(t._s(t.number))]),a("v-uni-view",{staticClass:"add",on:{click:function(i){i=t.$handleEvent(i),t.addNumber(i)}}},[t._v("+")])],1),a("v-uni-text",{on:{click:function(i){i=t.$handleEvent(i),t.addShoppingCar(i)}}},[t._v("加入购物车")])],1)],1)],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"2ce4":function(t,i,a){"use strict";a.r(i);var e=a("e0c2"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},"3b75":function(t,i,a){var e=a("8f22");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("1a2b7123",e,!0,{sourceMap:!1,shadowMode:!1})},"8f22":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".all[data-v-387d95fc]{position:relative}.all .returnBefore[data-v-387d95fc]{position:absolute;top:%?20?%;left:%?20?%;z-index:1;background:rgba(0,0,0,.5);width:%?70?%;height:%?70?%;text-align:center;line-height:%?70?%;font-size:%?40?%;color:#f4f4f4;font-weight:700;border-radius:50%;cursor:pointer}.all .returnBefore i[data-v-387d95fc]{font-size:%?50?%}.all .banner uni-image[data-v-387d95fc]{width:%?750?%}.all .des[data-v-387d95fc]{padding:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.all .des .price[data-v-387d95fc]{color:#dd524d;font-size:%?60?%}.all .des .title[data-v-387d95fc]{color:#333;font-size:%?30?%;font-weight:400;margin-top:%?10?%}.all .des .specifications[data-v-387d95fc]{margin-top:%?20?%}.all .des .specifications uni-text[data-v-387d95fc]{color:#555;font-size:%?27?%;margin-left:%?30?%}.all .des .specifications .place[data-v-387d95fc]{display:block}.all .des .specifications .weight[data-v-387d95fc]{display:inline-block;background:#c8c7cc;color:#f4f4f4;font-size:%?27?%;padding:%?10?% %?20?%;border-radius:%?30?%;margin-left:%?30?%;margin-top:%?20?%}.all .flooter[data-v-387d95fc]{position:fixed;bottom:0;height:%?100?%;width:%?750?%;background-color:#fff;border-top:1px solid #999}.all .flooter .addCar[data-v-387d95fc]{margin-top:%?10?%;margin-right:%?20?%}.all .flooter .addCar uni-text[data-v-387d95fc]{float:right;background:#dd524d;border-radius:%?40?%;padding:%?20?%;color:#f4f4f4;font-size:%?30?%}.all .flooter .addCar .cls[data-v-387d95fc]{float:left;margin-left:%?20?%;margin-top:%?10?%}.all .flooter .addCar .cls uni-view[data-v-387d95fc]{display:inline-block;border:1px solid grey;padding:%?1?%;text-align:center;font-size:%?30?%;font-weight:700}.all .flooter .addCar .cls .rem[data-v-387d95fc]{border-bottom-left-radius:%?10?%;border-top-left-radius:%?10?%;width:%?30?%}.all .flooter .addCar .cls .show[data-v-387d95fc]{width:%?40?%;font-weight:500}.all .flooter .addCar .cls .add[data-v-387d95fc]{border-top-right-radius:%?10?%;border-bottom-right-radius:%?10?%;width:%?30?%}",""])},a4d8:function(t,i,a){"use strict";a.r(i);var e=a("240d"),n=a("2ce4");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("1ce3");var d=a("2877"),r=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"387d95fc",null);i["default"]=r.exports},e0c2:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{commodityList:[{brand:"",title:"",weight:"",src:"",price:"",id:""}],tabId:"",userId:"",number:1}},onLoad:function(t){this.tabId=t.tabId},onShow:function(){this.initData(this.tabId)},methods:{initData:function(t){var i=this;uni.request({method:"POST",url:"http://106.13.111.39:40002/api/get/addDomShoppingCar",data:{tabId:t},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data),i.commodityList=t.data}})},ChangeUrl:function(t){return"http://106.13.111.39:40002"+t},returnBtn:function(){uni.navigateBack()},addShoppingCar:function(){var t=this;uni.getStorage({key:"id",success:function(i){t.userId=i.data}}),""!=t.userId?(uni.request({method:"POST",url:"http://106.13.111.39:40002/api/post/shopping",data:{tabId:t.tabId,userId:t.userId,number:t.number},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){}}),uni.showToast({icon:"success",title:"已添加"})):(uni.showToast({icon:"none",title:"请先登录"}),uni.navigateTo({url:"../tabBar/user/login"}))},addNumber:function(){this.number<6?this.number++:uni.showToast({title:"数量不能超过6个",icon:"none"})},remNumber:function(){this.number>1?this.number--:uni.showToast({title:"数量不能少于1个",icon:"none"})}}};i.default=e}}]);