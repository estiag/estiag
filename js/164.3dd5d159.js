"use strict";(self["webpackChunkestiag"]=self["webpackChunkestiag"]||[]).push([[164],{1164:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var i=n(3396),s=n(7139);const l=t=>((0,i.dD)("data-v-4bbc35a5"),t=t(),(0,i.Cn)(),t),a={id:"page-content",class:"header-static"},o={class:"container"},c={class:"row padding-onlytop-lg"},r={class:"col-md-8 center col-md-offset-2"},u={class:"time-screen"},d=["textContent"],m=l((()=>(0,i._)("span",null,":",-1))),h=["textContent"],g=l((()=>(0,i._)("span",null,":",-1))),p=["textContent"],v=l((()=>(0,i._)("span",null,":",-1))),_=["textContent"],C={id:"contact-form"},f={class:"submit-area padding-sm"},b=l((()=>(0,i._)("div",{id:"msg",class:"message"},null,-1)));function w(t,e,n,l,w,D){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",o,[(0,i._)("div",c,[(0,i._)("div",r,[(0,i._)("div",u,[(0,i._)("span",{class:"time-item",textContent:(0,s.zw)(t.hour)},null,8,d),m,(0,i._)("span",{class:"time-item",textContent:(0,s.zw)(t.minute)},null,8,h),g,(0,i._)("span",{class:"time-item",textContent:(0,s.zw)(t.second)},null,8,p),v,(0,i._)("span",{class:"time-item-long",textContent:(0,s.zw)(t.millsecond)},null,8,_)]),(0,i._)("form",C,[(0,i._)("div",f,[(0,i._)("input",{onClick:e[0]||(e[0]=(...t)=>D.start&&D.start(...t)),class:"btn-alt active",type:"button",value:"开始/暂停"}),(0,i._)("input",{onClick:e[1]||(e[1]=(...t)=>D.record&&D.record(...t)),class:"btn-alt active",type:"button",value:"记录"}),(0,i._)("input",{onClick:e[2]||(e[2]=(...t)=>D.stop&&D.stop(...t)),class:"btn-alt btn-danger",type:"button",value:"清除"}),b])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.recorded,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"margin-bottom record",key:e},(0,s.zw)(t),1)))),128))])])])])}var D={data:function(){return{hour:"00",minute:"00",second:"00",millsecond:"000",running:!1,timer:{},recorded:[],lastTimeMill:0,timeDate:{}}},mounted:function(){},methods:{start:function(){if(this.running)return this.running=!1,this.lastTimeMill=this.timeDate.getTime(),void clearInterval(this.timer);this.running=!0;var t=this,e=(new Date).getTime();this.timer=setInterval((function(){t.timeDate=new Date((new Date).getTime()-e+t.lastTimeMill),t.hour=("0"+t.timeDate.getUTCHours()).slice(-2),t.minute=("0"+t.timeDate.getUTCMinutes()).slice(-2),t.second=("0"+t.timeDate.getUTCSeconds()).slice(-2),t.millsecond=("0"+t.timeDate.getUTCMilliseconds()).slice(-3)}),81)},stop:function(){this.running=!1,clearInterval(this.timer),this.minute="00",this.second="00",this.hour="00",this.millsecond="000",this.recorded=[],this.lastTimeMill=0},record:function(){this.recorded.push(this.hour+":"+this.minute+":"+this.second+":"+this.millsecond)}}},T=n(89);const k=(0,T.Z)(D,[["render",w],["__scopeId","data-v-4bbc35a5"]]);var x=k}}]);
//# sourceMappingURL=164.3dd5d159.js.map