"use strict";(self["webpackChunkestiag"]=self["webpackChunkestiag"]||[]).push([[698],{5698:function(t,e,i){i.r(e),i.d(e,{default:function(){return z}});var l=i(3396),a=i(7139),n=i(9242);const s=t=>((0,l.dD)("data-v-2f019e15"),t=t(),(0,l.Cn)(),t),o={id:"page-content",class:"header-static"},r={class:"container"},f={class:"row padding-onlytop-lg center"},c=s((()=>(0,l._)("div",{class:"right-label"},"右",-1))),h=s((()=>(0,l._)("div",{class:"left-label"},"左",-1))),u={class:"window"},p={class:"row padding-onlytop-lg center"},d=(0,l.Uk)(" BPM: "),g=s((()=>(0,l._)("label",{for:"left"},"左",-1))),b=s((()=>(0,l._)("label",{for:"right"},"右",-1))),w=s((()=>(0,l._)("label",{for:"metronome"},"节拍器",-1)));function y(t,e,i,s,y,v){return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",r,[(0,l._)("div",f,[c,h,(0,l._)("div",u,[(0,l._)("div",{class:(0,a.C_)(["right",{disabled:!t.rightSwitch}]),ref:"rightDiv"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.right,((e,i)=>((0,l.wg)(),(0,l.iD)("div",{class:"bar",key:i},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,n)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(["beat",{used:v.isRightUsed(n+i*t.barSize)}]),key:n},(0,a.zw)(e),3)))),128))])))),128))],2),(0,l._)("div",{class:(0,a.C_)(["left",{disabled:!t.leftSwitch}]),ref:"leftDiv"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.left,((e,i)=>((0,l.wg)(),(0,l.iD)("div",{class:"bar",key:i},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,((e,n)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,a.C_)(["beat",{used:v.isLeftUsed(n+i*t.barSize)}]),key:n},(0,a.zw)(e),3)))),128))])))),128))],2)])]),(0,l._)("div",p,[(0,l._)("input",{onClick:e[0]||(e[0]=(...t)=>v.play&&v.play(...t)),class:"btn-alt active",type:"button",value:"播放"}),(0,l._)("input",{onClick:e[1]||(e[1]=(...t)=>v.stop&&v.stop(...t)),class:"btn-alt active",type:"button",value:"暂停"}),(0,l._)("input",{onClick:e[2]||(e[2]=(...t)=>v.restart&&v.restart(...t)),class:"btn-alt active",type:"button",value:"重新开始"}),(0,l._)("input",{onClick:e[3]||(e[3]=t=>v.play1(500)),class:"btn-alt active",type:"button",value:"1"}),(0,l._)("input",{onClick:e[4]||(e[4]=t=>v.play2(500)),class:"btn-alt active",type:"button",value:"2"}),(0,l._)("input",{onClick:e[5]||(e[5]=t=>v.play3(500)),class:"btn-alt active",type:"button",value:"3"}),(0,l._)("input",{onClick:e[6]||(e[6]=t=>v.play4(500)),class:"btn-alt active",type:"button",value:"4"}),d,(0,l.wy)((0,l._)("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=e=>t.bpm=e)},null,512),[[n.nr,t.bpm]]),(0,l.wy)((0,l._)("input",{id:"left",class:"",type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=e=>t.leftSwitch=e)},null,512),[[n.e8,t.leftSwitch]]),g,(0,l.wy)((0,l._)("input",{id:"right",class:"",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=e=>t.rightSwitch=e)},null,512),[[n.e8,t.rightSwitch]]),b,(0,l.wy)((0,l._)("input",{id:"metronome",class:"",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=e=>t.metronomeSwtich=e)},null,512),[[n.e8,t.metronomeSwtich]]),w])])])}const v={right:[["1 1","1 1","1 1","1 1"],["1 1","1 1","1 1","1 1"],["1 0","1 0","1 0","1 0"],["1 0","1 0","1 0","1 0"],["1 0","1 0","1 0","1 0"],["1 0","1 0","1 0","1 0"],["1 0","1 0","1 0","1 0"],["1 0","1 0","1 0","1 0"],["1 0","1 2","1 2","1 2"],["1 2","1 2","1 2","1 22"]],left:[["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 0","0 0","0 0"],["0 0","0 2","0 2","2 2"],["0 0","0 2","2 2","2 2 2"]],bpm:118},m=1,S=v;let _="",k="",B=80;const O=new(window.AudioContext||window.webkitAudioContext),C=O.createGain();C.gain.value=.2;var D={data:function(){return{leftSwitch:!0,rightSwitch:!0,metronomeSwtich:!1,bpm:S.bpm,right:S.right,left:S.left,leftBeatOffset:B/2,rightBeatOffset:0,barSize:S.right[0].length,beatWidth:B,running:!1}},watch:{},computed:{},mounted:function(){},methods:{isLeftUsed:function(t){return Math.ceil(-this.leftBeatOffset/this.beatWidth)>=t+1},isRightUsed:function(t){return Math.ceil(-this.rightBeatOffset/this.beatWidth)>=t+1},playSingleBeat:function(t){let e=this,i=t.split(" "),l=6e4/this.bpm/i.length,a=l/i.length;for(let n=0;n<i.length;n++){let t=a/(i[n]+"").length;for(let l=0;l<(i[n]+"").length;l++){let a=(i[n]+"").split("")[l];setTimeout((function(){0==a?e.play0(t):1==a?e.play1(t):2==a?e.play2(t):3==a?e.play3(t):4==a&&e.play4(t)}),t*(n+l))}}},playSinWave:function(t,e){const i=O.createOscillator();i.frequency.value=t,i.type="triangle",i.connect(C),C.connect(O.destination),i.start(),setTimeout((()=>{i.stop()}),e)},play0:function(t){},play1:function(t){this.playSinWave(120,t)},play2:function(t){this.playSinWave(150,t)},play3:function(t){this.playSinWave(200,t)},play4:function(t){this.playSinWave(250,t)},stop:function(){this.running=!1,window.cancelAnimationFrame(_),window.cancelAnimationFrame(k)},restart:function(){this.stop(),this.rightBeatOffset=0,this.leftBeatOffset=B/2,this.$refs.rightDiv.style.left=this.rightBeatOffset+"px",this.$refs.leftDiv.style.left=this.leftBeatOffset+"px"},play:function(){if(this.running)return;let t,e,i,l,a=this,n=-1,s=-1,o=function(t){let i=a.bpm*m/6e4*a.beatWidth;e||(e=t,l=t);let n=t-e;a.rightSwitch&&s<Math.floor(n/(6e4/a.bpm))&&(s++,a.playSingleBeat(a.right[Math.floor(s/a.barSize)][s%a.barSize])),a.rightBeatOffset<=-(a.right.flat(2).length-1)*a.beatWidth||(a.rightBeatOffset=a.rightBeatOffset-i*(t-l),a.$refs.rightDiv.style.left=a.rightBeatOffset+"px",l=t,_=window.requestAnimationFrame(o))},r=function(e){let l=a.bpm*m/6e4*a.beatWidth;t||(t=e,i=e);let s=e-t;a.leftSwitch&&n<Math.floor(s/(6e4/a.bpm))&&(n++,a.playSingleBeat(a.left[Math.floor(n/a.barSize)][n%a.barSize])),a.leftBeatOffset<=-(a.left.flat(2).length-1)*a.beatWidth||(a.leftBeatOffset=a.leftBeatOffset-l*(e-i),a.$refs.leftDiv.style.left=a.leftBeatOffset+"px",i=e,k=window.requestAnimationFrame(r))};window.requestAnimationFrame(o),window.requestAnimationFrame(r),a.running=!0}}},W=i(89);const x=(0,W.Z)(D,[["render",y],["__scopeId","data-v-2f019e15"]]);var z=x}}]);
//# sourceMappingURL=698.445512cc.js.map