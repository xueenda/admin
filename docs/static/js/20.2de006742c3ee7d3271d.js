webpackJsonp([20],{aeKS:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("XLwt"),n=i.n(a),s=i("0xDb");i("tcAE");var r={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHanlder=Object(s.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)),document.getElementsByClassName("sidebar-container")[0].addEventListener("transitionend",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder),document.getElementsByClassName("sidebar-container")[0].removeEventListener("transitionend",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},methods:{setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,i=t.actualData;this.chart.setOption({xAxis:{data:["星期一","星期二","星期三","星期四","星期五","星期六","星期天"],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:["预期","实际"]},series:[{name:"预期",itemStyle:{normal:{color:"#FF005A",lineStyle:{color:"#FF005A",width:2}}},smooth:!0,type:"line",data:e,animationDuration:2800,animationEasing:"cubicInOut"},{name:"实际",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:i,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=n.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},h=i("VU/8")(r,o,!1,null,null,null);e.default=h.exports}});