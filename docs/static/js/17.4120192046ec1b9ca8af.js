webpackJsonp([17],{i8zx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("vLgD");var l={data:function(){return{list:null}},filters:{statusFilter:function(t){return{success:"success",pending:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t,e=this;Object(s.a)({url:"/transaction/list",method:"get",params:t}).then(function(t){e.list=t.data.items.slice(0,7)})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:t.list}},[n("el-table-column",{attrs:{label:"订单号","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.order_no)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"金额",width:"195",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      ¥"+t._s(t._f("toThousandslsFilter")(e.row.price))+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(" "+t._s(e.row.status))])]}}])})],1)},staticRenderFns:[]},r=n("VU/8")(l,a,!1,null,null,null);e.default=r.exports}});