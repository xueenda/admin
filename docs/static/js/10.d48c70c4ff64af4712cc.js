webpackJsonp([10],{"2TJQ":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("XLwt"),r=i.n(a),o=i("0xDb"),n={mixins:[{mounted:function(){var t=this;this.__resizeHanlder=Object(o.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){window.removeEventListener("resize",this.__resizeHanlder)}}],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=r.a.init(document.getElementById(this.id));var t=function(){for(var t=[],e=1;e<13;e++)t.push(e+"月");return t}();this.chart.setOption({backgroundColor:"#344b58",title:{text:"积分统计数据",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{borderWidth:0,top:110,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["发放积分","兑换积分","平均"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,height:30,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"发放积分",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{normal:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"兑换积分",type:"bar",stack:"total",itemStyle:{normal:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"平均",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},staticRenderFns:[]},l={components:{Chart:i("VU/8")(n,s,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chart-container"},[e("chart",{attrs:{height:"100%",width:"100%"}})],1)},staticRenderFns:[]};var h=i("VU/8")(l,c,!1,function(t){i("v2wl")},"data-v-e61eb026",null);e.default=h.exports},"5kam":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.chart-container[data-v-e61eb026] {\n  position: relative;\n  padding: 20px;\n  width: 100%;\n  height: 85vh;\n}\n\n",""])},v2wl:function(t,e,i){var a=i("5kam");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("b570489e",a,!0)}});