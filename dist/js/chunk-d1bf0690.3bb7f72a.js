(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1bf0690"],{"001f":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d")},"080a":function(e,t,n){},"14b9":function(e,t,n){var i=n("5ca1");i(i.P,"String",{repeat:n("9744")})},"14f9":function(e,t,n){"use strict";var i=n("080a"),o=n.n(i);o.a},"214f":function(e,t,n){"use strict";var i=n("32e9"),o=n("2aba"),s=n("79e5"),a=n("be13"),r=n("2b4c");e.exports=function(e,t,n){var l=r(e),d=n(a,l,""[e]),c=d[0],m=d[1];s(function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})&&(o(String.prototype,e,c),i(RegExp.prototype,l,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)}))}},"28a5":function(e,t,n){n("214f")("split",2,function(e,t,i){"use strict";var o=n("aae3"),s=i,a=[].push,r="split",l="length",d="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[l]||2!="ab"[r](/(?:ab)*/)[l]||4!="."[r](/(.?)(.?)/)[l]||"."[r](/()()/)[l]>1||""[r](/.?/)[l]){var c=void 0===/()??/.exec("")[1];i=function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!o(e))return s.call(n,e,t);var i,r,m,u,h,p=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),E=0,f=void 0===t?4294967295:t>>>0,y=new RegExp(e.source,g+"g");c||(i=new RegExp("^"+y.source+"$(?!\\s)",g));while(r=y.exec(n)){if(m=r.index+r[0][l],m>E&&(p.push(n.slice(E,r.index)),!c&&r[l]>1&&r[0].replace(i,function(){for(h=1;h<arguments[l]-2;h++)void 0===arguments[h]&&(r[h]=void 0)}),r[l]>1&&r.index<n[l]&&a.apply(p,r.slice(1)),u=r[0][l],E=m,p[l]>=f))break;y[d]===r.index&&y[d]++}return E===n[l]?!u&&y.test("")||p.push(""):p.push(n.slice(E)),p[l]>f?p.slice(0,f):p}}else"0"[r](void 0,0)[l]&&(i=function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)});return[function(n,o){var s=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,s,o):i.call(String(s),n,o)},i]})},"332c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"both-content",attrs:{id:"flat"}},[n("div",{staticClass:"left-dashboard"},[n("nav",{staticClass:"left-nav"},[n("div",{staticClass:"nav-list"},[n("div",{staticClass:"nav-label"},[e._v("选择机柜或空调")]),n("div",{staticClass:"nav-zone"},[n("div",{staticClass:"nav-box"},[n("p",{staticClass:"nav-box-title"},[e._v("机柜")]),n("div",{staticClass:"nav-box-machine drag",attrs:{type:"machine"}},[n("img",{staticClass:"drag-img",attrs:{src:"three/img/machine.png",id:"drag-machine"}})])]),n("div",{staticClass:"nav-box"},[n("p",{staticClass:"nav-box-title"},[e._v("空调")]),n("div",{staticClass:"nav-box-machine drag",attrs:{type:"air"}},[n("img",{staticClass:"drag-img",attrs:{src:"three/img/air.png",id:"drag-air"}})])])])]),n("div",{staticClass:"nav-list"},[n("div",{staticClass:"nav-label"},[e._v("选择设备")]),n("div",{staticClass:"equip-box"},[n("div",{staticClass:"equip-title"},[e._v("烟感")]),n("div",{staticClass:"equip-moudle drag",attrs:{type:"smoke"}},[n("img",{attrs:{src:"three/img/smoke.png"}})])]),n("div",{staticClass:"equip-box"},[n("div",{staticClass:"equip-title"},[e._v("温感")]),n("div",{staticClass:"equip-moudle drag",attrs:{type:"temperature"}},[n("img",{attrs:{src:"three/img/temperature.png"}})])]),n("div",{staticClass:"equip-box"},[n("div",{staticClass:"equip-title"},[e._v("控制器")]),n("div",{staticClass:"equip-moudle drag",attrs:{type:"control"}},[n("img",{attrs:{src:"three/img/control.png"}})])])])])]),n("div",{staticClass:"right-dashboard1"},[n("div",{staticClass:"right-dashboard-top"},[n("div",{staticClass:"create-axis"},[n("span",{staticClass:"axis-label"},[e._v(" W：")]),n("input",{staticClass:"coordinate-input",attrs:{type:"text",id:"grid-width"}}),n("img",{staticClass:"items-link",attrs:{src:"three/img/link.png"}}),n("span",{staticClass:"axis-label"},[e._v(" H：")]),n("input",{staticClass:"coordinate-input",attrs:{type:"text",id:"grid-length"}}),n("button",{staticClass:"create-button",attrs:{id:"create-button"}},[e._v("创建网格")]),n("button",{staticClass:"create-button",attrs:{id:"submit-button"}},[e._v("提交")]),n("button",{staticClass:"create-button",attrs:{id:"cancel-button"}},[e._v("返回")])])]),n("div",{staticClass:"right-dashboard-bottom",attrs:{id:"right-dashboard-bottom"}},[n("div",{staticClass:"axis-orign"}),n("div",{attrs:{id:"axis-x"}}),n("div",{attrs:{id:"axis-y"}}),n("div",{staticClass:"painting",attrs:{id:"painting"}})])])]),n("div",{attrs:{id:"three-dimensional"}}),n("div",{attrs:{id:"fixed-btn"}},[n("button",{staticClass:"tab1-button tab2-style",attrs:{id:"tab1-button"}},[e._v("2D预览")]),n("button",{staticClass:"tab2-button tab1-style",attrs:{id:"tab2-button"}},[e._v("3D预览")])]),n("div",{attrs:{id:"fixed-panel"}},[n("ul",[n("li",[n("div",{attrs:{id:"panel-title"}},[e._v("选择机柜或空调")])]),n("li",{staticClass:"items-li1"},[n("div",{staticClass:"items-title"},[e._v("名称")])]),n("li",{staticClass:"items-li2"},[n("div",{staticClass:"items-info"},[n("input",{staticClass:"items-input",attrs:{id:"machineName",type:"text",placeholder:"请输入名称"}})])]),n("li",{staticClass:"items-li1"},[n("div",{staticClass:"items-title"},[e._v("位置")])]),n("li",{staticClass:"items-li2"},[n("div",{staticClass:"items-info info-axis"},[n("span",{staticClass:"items-axis"},[e._v("X:")]),n("input",{staticClass:"items-input-num",attrs:{id:"machineAxis-x",type:"text"}}),n("img",{staticClass:"items-link",attrs:{src:"three/img/link.png"}}),n("span",{staticClass:"items-axis"},[e._v("Y:")]),n("input",{staticClass:"items-input-num",attrs:{id:"machineAxis-y",type:"text"}})])]),n("li",{staticClass:"items-li3"},[n("button",{staticClass:"items-btn",attrs:{id:"items-btn"}},[e._v("确认")])])])])])}],s=n("8387"),a=s["a"],r=(n("14f9"),n("2877")),l=Object(r["a"])(a,i,o,!1,null,null,null);l.options.__file="3DElectricalRoomLayout.vue";t["default"]=l.exports},8387:function(e,t,n){"use strict";(function(e){n("14b9"),n("28a5"),n("001f");t["a"]={name:"",props:[""],data:function(){return{ontology:"",delList:[]}},components:{},computed:{},beforeMount:function(){},mounted:function(){this.ruler();var t,n,i,o,s,a=this,r='<div class="machine">                             <div class="machine-center">                                 <div class="machine-position"></div>                             </div>                         </div>                         <div class="machine-title">                             <div class="machine-title-input"></div>                     </div>',l='<div class="machine">                         <div class="air-center">                             <div class="air-position"></div>                         </div>                     </div>                     <div class="machine-title">                         <div class="machine-title-input"></div>                 </div> ',d='<img src="three/img/smoke.png" width="100%">',c='<img src="three/img/temperature.png" width="100%">',m='<img src="three/img/control.png" width="100%">',u=10,h=20;function p(){a.$axios(a.HOST+"/cabinet").then(function(e){var o=[];if(e.data[0].partSize){var a=function(e,t,n,o,a,p){s=document.getElementById("love-house");var g,E,f=s.getBoundingClientRect().top+s.offsetHeight/2,y=s.getBoundingClientRect().left+s.offsetWidth/2;i=document.createElement("div"),document.body.appendChild(i),i.setAttribute("code",n),i.setAttribute("name",a),i.setAttribute("axis",p),"machine"===o?(i.classList.add("machine-zone","machine-line"),i.setAttribute("type","outer"),i.innerHTML=r,i.style.zIndex=u,g=e+y-i.offsetWidth/2,E=t+f+50-i.offsetHeight):"air"===o?(i.classList.add("machine-zone","air-line"),i.setAttribute("type","outer"),i.innerHTML=l,i.style.zIndex=u,g=e+y-i.offsetWidth/2,E=t+f+50-i.offsetHeight):"smoke"===o?(i.classList.add("img-zone","smoke-line"),i.setAttribute("type","inner"),i.innerHTML=d,i.style.zIndex=h,g=e+y-i.offsetWidth/2,E=t+f-i.offsetHeight/2):"temperature"===o?(i.classList.add("img-zone","temperature-line"),i.setAttribute("type","inner"),i.innerHTML=c,i.style.zIndex=h,g=e+y-i.offsetWidth/2,E=t+f-i.offsetHeight/2):"control"===o?(i.classList.add("img-zone","control-line"),i.setAttribute("type","inner"),i.innerHTML=m,i.style.zIndex=h,g=e+y-i.offsetWidth/2,E=t+f-i.offsetHeight/2):console.log("类型错误"),i.style.left=g+"px",i.style.top=E+"px",T(i)};o=e.data[0].partSize.split("*"),t=parseInt(o[1]),n=parseInt(o[0]),document.getElementById("grid-length").value=t,document.getElementById("grid-width").value=n;var p=document.getElementById("painting"),g='<div id = "love-house"></div>';p.innerHTML=g;var E,f,y=document.getElementById("love-house");y.style.width=n+"px",y.style.height=t+"px";for(var v,b,w,x,C=[],H=0;H<e.data[0].describ.length;H++)C=e.data[0].describ[H].CABINET_COORDINATE.split(","),E=parseInt(C[0]),f=parseInt(C[2]),v=e.data[0].describ[H].ID,"0"===e.data[0].describ[H].CABINET_TYPE?b="machine":"1"===e.data[0].describ[H].CABINET_TYPE&&(b="air"),w=e.data[0].describ[H].CABINET_NAME,x="("+e.data[0].describ[H].CABINET_COORDINATE+")",a(E,f,v,b,w,x);for(var R=0;R<e.data[0].equipInfo.length;R++)C=e.data[0].equipInfo[R].EQ_COORDINATE.split(","),E=parseInt(C[0]),f=parseInt(C[2]),v=e.data[0].equipInfo[R].ID,"02"===e.data[0].equipInfo[R].EQ_TYPE?b="temperature":"03"===e.data[0].equipInfo[R].EQ_TYPE?b="smoke":(e.data[0].equipInfo[R].EQ_TYPE,b="control"),w=e.data[0].equipInfo[R].EQ_NAME,x="("+e.data[0].equipInfo[R].EQ_COORDINATE+")",a(E,f,v,b,w,x);for(var B=document.getElementsByClassName("machine-title-input"),M=0;M<e.data[0].describ.length;M++)B[M].innerText=e.data[0].describ[M].CABINET_NAME}console.log(e.data)}).catch(function(e){console.log(e)})}window.screen.width<750?(e(".machine-zone").remove(),e(".img-zone").remove(),this.$message({message:"警告，本项目只支持PC端",type:"warning",duration:2e3}),setTimeout(function(){e(".machine-zone").remove(),e(".img-zone").remove(),a.$router.push({name:"works"})},3e3)):p(),window.addEventListener("resize",function(){window.screen.width<750&&(a.$message({message:"警告，本项目只支持PC端",type:"warning",duration:2e3}),setTimeout(function(){e(".machine-zone").remove(),e(".img-zone").remove(),a.$router.push({name:"works"})},3e3))}),window.addEventListener("popstate",function(t){e(".machine-zone").remove(),e(".img-zone").remove()},!1);var g=document.getElementById("create-button");g.addEventListener("click",function(){t=document.getElementById("grid-length").value,n=document.getElementById("grid-width").value;var e=/^[1-9][0-9]{0,}$/;if(!e.test(t)||!e.test(n))return a.$alert("请输入数字!","通知",{confirmButtonText:"确定"}),!1;var i=document.getElementById("painting"),o=document.getElementById("love-house");if(!o){var s='<div id="love-house"></div>';i.innerHTML=s,o=document.getElementById("love-house")}o.style.width=n+"px",o.style.height=t+"px"});for(var E=document.getElementsByClassName("drag"),f=0;f<E.length;f++)y(E[f]);function y(e){var t=0,n=0,a=0,p=0;e.onmousedown=function(g){var E=document.getElementById("love-house");if(!E)return!1;g=g||window.event;var f=this.getAttribute("type");i=document.createElement("div"),"machine"===f?(i.classList.add("machine-zone","machine-line"),i.setAttribute("type","outer"),i.setAttribute("name",""),i.setAttribute("axis",""),i.setAttribute("code",""),i.innerHTML=r,i.style.zIndex=u,o=document.getElementById("drag-machine"),o.style.transform="rotateX(90deg)",o.src="three/img/machine-top.png",o.style.width="84px",o.style.height="84px",o.style.marginTop="50px",o.style.transform="rotateX(180deg)"):"air"===f?(i.classList.add("machine-zone","air-line"),i.setAttribute("type","outer"),i.innerHTML=l,i.style.zIndex=u,o=document.getElementById("drag-air"),o.style.transform="rotateX(90deg)",o.src="three/img/air-top.png",o.style.width="84px",o.style.height="84px",o.style.marginTop="50px",o.style.transform="rotateX(180deg)"):"smoke"===f?(i.classList.add("img-zone","smoke-line"),i.setAttribute("type","inner"),i.innerHTML=d,i.style.zIndex=h):"temperature"===f?(i.classList.add("img-zone","temperature-line"),i.setAttribute("type","inner"),i.innerHTML=c,i.style.zIndex=h):"control"===f?(i.classList.add("img-zone","control-line"),i.setAttribute("type","inner"),i.innerHTML=m,i.style.zIndex=h):console.log("类型错误"),i.style.left=this.currentStyle?this.currentStyle["left"]:getComputedStyle(this,null)["left"],i.style.top=this.currentStyle?this.currentStyle["top"]:getComputedStyle(this,null)["top"],document.body.appendChild(i);var y=document.createElement("div");y["id"]="sup-xline1",y.style.left=this.currentStyle?this.currentStyle["left"]:getComputedStyle(this,null)["left"],y.style.top=this.currentStyle?this.currentStyle["top"]:getComputedStyle(this,null)["top"],document.body.appendChild(y);var v=document.createElement("div");v["id"]="sup-xline2",v.style.left=this.currentStyle?this.currentStyle["left"]:getComputedStyle(this,null)["left"],v.style.top=this.currentStyle?this.currentStyle["top"]:getComputedStyle(this,null)["top"],document.body.appendChild(v);var b=document.createElement("div");b["id"]="sup-yline1",b.style.left=this.currentStyle?this.currentStyle["left"]:getComputedStyle(this,null)["left"],b.style.top=this.currentStyle?this.currentStyle["top"]:getComputedStyle(this,null)["top"],document.body.appendChild(b);var w=document.createElement("div");return w["id"]="sup-yline2",w.style.left=this.currentStyle?this.currentStyle["left"]:getComputedStyle(this,null)["left"],w.style.top=this.currentStyle?this.currentStyle["top"]:getComputedStyle(this,null)["top"],document.body.appendChild(w),t=i.offsetWidth/2,n=i.offsetHeight/2,document.onmousemove=function(e){e=e||window.event,a=e.clientX-t,p=e.clientY-n;var o=document.documentElement.clientWidth-i.offsetWidth,s=document.documentElement.clientHeight-i.offsetHeight,r=i.offsetWidth,l=i.offsetHeight;return a<=0&&(a=0),p<=0&&(p=0),a>=o&&(a=o),p>=s&&(p=s),!0===i.classList.contains("machine-zone")?v.style.top=p+l-50+"px":v.style.top=p+l+"px",i.style.left=a+"px",i.style.top=p+"px",y.style.left=0,y.style.top=p+"px",v.style.left=0,b.style.left=a+"px",b.style.top=0,w.style.left=a+r+"px",w.style.top=0,!1},document.onmouseup=function(a){var r,l,d,c,m,u,h,p;if(document.onmousemove=null,document.onmouseup=null,document.body.removeChild(y),document.body.removeChild(v),document.body.removeChild(b),document.body.removeChild(w),a=a||window.event,"outer"===i.getAttribute("type"))s=document.getElementById("love-house"),r=s.offsetWidth,l=s.offsetHeight,d=s.getBoundingClientRect().left,c=s.getBoundingClientRect().top,m=d+t,h=c+n,u=d+r-t,p=c+l-n,(a.clientX<m||a.clientX>u||a.clientY<h||a.clientY>p)&&document.body.removeChild(i),T(i);else if("inner"===i.getAttribute("type")){s=document.getElementsByClassName("machine-zone");for(var g=[],E=0;E<s.length;E++)r=s[E].offsetWidth,l=s[E].offsetHeight,d=s[E].offsetLeft,c=s[E].offsetTop,m=d+t+15,u=d+r-t-15,h=c+n+5,p=c+l-n-5,a.clientX<m||a.clientX>u||a.clientY<h||a.clientY>p?g.push(0):g.push(1);"-1"===g.indexOf(1)&&document.body.removeChild(i),T(i)}"drag-machine"===e.children[0].getAttribute("id")?(o.style.transform="rotateX(0deg)",o.src="three/img/machine.png",o.style.width="83px",o.style.height="147px",o.style.marginTop="14px"):"drag-air"===e.children[0].getAttribute("id")&&(o.style.transform="rotateX(0deg)",o.src="three/img/air.png",o.style.width="83px",o.style.height="147px",o.style.marginTop="14px")},this.setCapture&&this.setCapture(),!1}}var v=document.getElementById("fixed-panel");function T(e){var t,n,i,o,s,r,l=0,d=0,c=0,m=0,u="";return e.onmousedown=function(h){u=!0,h=h||window.event,l=e.offsetWidth/2,d=e.offsetHeight/2,t=h.clientX,n=h.clientY,s=e.offsetLeft,r=e.offsetTop;var p=document.createElement("div");p["id"]="sup-xline1",document.body.appendChild(p);var g=document.createElement("div");g["id"]="sup-xline2",document.body.appendChild(g);var E=document.createElement("div");E["id"]="sup-yline1",document.body.appendChild(E);var f=document.createElement("div");f["id"]="sup-yline2",document.body.appendChild(f),document.onmousemove=function(s){s=s||window.event,c=s.clientX-l,m=s.clientY-d,i=s.clientX,o=s.clientY;var a=e.offsetWidth,r=e.offsetHeight;return t!=i&&n!=o&&(u=!1,!0===e.classList.contains("machine-zone")?g.style.top=m+r-50+"px":g.style.top=m+r+"px",e.style.left=c+"px",e.style.top=m+"px",p.style.left=0,p.style.top=m+"px",g.style.left=0,g.style.top=m+r+"px",E.style.left=c+"px",E.style.top=0,f.style.left=c+a+"px",f.style.top=0),!1},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null,document.body.removeChild(p),document.body.removeChild(g),document.body.removeChild(E),document.body.removeChild(f);for(var n=document.getElementsByClassName("machine"),i=0;i<n.length;i++)n[i].style.borderTop="none",n[i].style.borderBottom="none",n[i].style.borderLeft="5px solid #666666",n[i].style.borderRight="5px solid #666666",n[i].style.background="none";for(var o=document.getElementsByClassName("img-zone"),c=0;c<o.length;c++)o[c].style.border="none",o[c].style.background="none";var m=document.getElementById("machineName"),h=document.getElementById("machineAxis-x"),y=document.getElementById("machineAxis-y");if(u){var T=document.getElementById("panel-title");e.classList.contains("machine-line")&&(T.innerText="机柜信息"),e.classList.contains("air-line")&&(T.innerText="空调信息"),e.classList.contains("smoke-line")&&(T.innerText="烟感信息"),e.classList.contains("temperature-line")&&(T.innerText="温感信息"),e.classList.contains("control-line")&&(T.innerText="控制器信息"),a.ontology=e,m.readOnly=!1,!0===e.classList.contains("machine-zone")?(e.children[0].style.borderTop="1px solid #1B86FF",e.children[0].style.borderBottom="1px solid #1B86FF",e.children[0].style.borderLeft="5px solid #1B86FF",e.children[0].style.borderRight="5px solid #1B86FF",e.children[0].style.background="#01234A"):(e.getAttribute("code")&&(m.readOnly=!0),e.style.border="1px solid #1B86FF",e.style.background="#01234A"),h.value=e.offsetWidth/2+e.offsetLeft-390,y.value=e.offsetHeight/2+e.offsetTop-190,m.value=e.getAttribute("name"),v.style.display="block"}else{var b,w,x,C,H,R,B,M,I;I=document.getElementById("love-house"),b=I.offsetWidth,w=I.offsetHeight,x=I.getBoundingClientRect().left,C=I.getBoundingClientRect().top,H=x+l,B=C+d,R=x+b-l,M=C+w-d,h.value=e.offsetWidth/2+e.offsetLeft-390,y.value=e.offsetHeight/2+e.offsetTop-190,(t.clientX<H||t.clientX>R||t.clientY<B||t.clientY>M)&&a.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=e.getAttribute("code");e.classList.contains("machine-zone"),document.body.removeChild(e),v.style.display="none",a.$message({type:"success",message:"删除成功!"})}).catch(function(){e.style.left=s+"px",e.style.top=r+"px",a.$message({type:"info",message:"已取消删除"})})}}},!1}var b=document.getElementById("painting");b.addEventListener("click",function(){for(var e=document.getElementsByClassName("machine"),t=0;t<e.length;t++)e[t].style.borderTop="none",e[t].style.borderBottom="none",e[t].style.borderLeft="5px solid #666666",e[t].style.borderRight="5px solid #666666",e[t].style.background="none";for(var n=document.getElementsByClassName("img-zone"),i=0;i<n.length;i++)n[i].style.border="none",n[i].style.background="none";v.style.display="none"});var w=document.getElementById("items-btn");w.addEventListener("click",function(){var e,t=document.getElementById("machineName"),n=document.getElementById("machineAxis-x"),i=document.getElementById("machineAxis-y"),o=document.getElementById("love-house"),s=o.getBoundingClientRect().top+o.offsetHeight/2,r=o.getBoundingClientRect().left+o.offsetWidth/2,l=n.value-a.ontology.offsetWidth/2+390+"px",d=i.value-a.ontology.offsetHeight/2+190+"px";if(a.ontology.style.left=l,a.ontology.style.top=d,!0===a.ontology.classList.contains("machine-zone")){var c=a.ontology.offsetLeft+a.ontology.offsetWidth/2-r,m=0,u=a.ontology.offsetTop+a.ontology.offsetHeight-50-s;e="("+c+","+m+","+u+")",a.ontology.children[1].children[0].innerText=t.value}else if(!0===a.ontology.classList.contains("img-zone")){var h=a.ontology.offsetLeft+a.ontology.offsetWidth/2-r,p=220,g=a.ontology.offsetTop+a.ontology.offsetHeight/2-s;e="("+h+","+p+","+g+")"}var E=/\d{10}/;if(!E.test(t.value))return a.$alert("请输入10位数字!","通知",{confirmButtonText:"确定"}),!1;a.ontology.setAttribute("name",t.value),a.ontology.setAttribute("axis",e);for(var f=document.getElementsByClassName("machine"),y=0;y<f.length;y++)f[y].style.borderTop="none",f[y].style.borderBottom="none",f[y].style.borderLeft="5px solid #666666",f[y].style.borderRight="5px solid #666666",f[y].style.background="none";for(var T=document.getElementsByClassName("img-zone"),b=0;b<T.length;b++)T[b].style.border="none",T[b].style.background="none";v.style.display="none"});var x=[],C=[],H=[],R=[],B=[],M=[],I=[],L=[],A=[],_=[],z=[];function S(){for(var e=document.getElementById("love-house"),t=e.getBoundingClientRect().top+e.offsetHeight/2,n=e.getBoundingClientRect().left+e.offsetWidth/2,i=document.getElementsByClassName("machine-line"),o=document.getElementsByClassName("air-line"),s=document.getElementsByClassName("smoke-line"),a=document.getElementsByClassName("temperature-line"),r=document.getElementsByClassName("control-line"),l=document.getElementsByClassName("machine-title-input"),d=document.getElementsByClassName("machine-zone"),c=0;c<l.length;c++)I.push(l[c].innerText);for(var m=0;m<i.length;m++)_.push(i[m].children[1].children[0].innerText);for(var u=0;u<o.length;u++)z.push(o[u].children[1].children[0].innerText);function h(e,i){for(var o=0;o<e.length;o++){var s=[],a=e[o].offsetLeft+10-n,r=280,l=e[o].offsetTop+e[o].offsetHeight-45-t;s.push(a,r,l),i.push(s)}}function p(e,i){for(var o=0;o<e.length;o++){var s=[],a=e[o].offsetLeft+e[o].offsetWidth/2-n,r=220,l=e[o].offsetTop+e[o].offsetHeight/2-t;s.push(a,r,l),i.push(s)}}function g(e,i){for(var o=0;o<e.length;o++){var s=[],a=e[o].offsetLeft+e[o].offsetWidth/2-n,r=0,l=e[o].offsetTop+e[o].offsetHeight-50-t;s.push(a,r,l),i.push(s)}}h(d,M),g(i,x),g(o,C),p(s,H),p(a,R),p(r,B),h(i,L),h(o,A)}var N=document.getElementById("tab1-button"),k=document.getElementById("tab2-button"),P=document.getElementById("flat"),G=document.getElementById("three-dimensional");N.addEventListener("click",function(){N.classList.remove("tab1-style"),N.classList.add("tab2-style"),k.classList.remove("tab2-style"),P.style.display="block",G.style.display="none",cancelAnimationFrame(W.loop),Y.dispose(),q.dispose(),j.dispose(),W.renderer.dispose(),W.controls.dispose();for(var e=W.scene.children.length-1;e>-1;e--){if("Object3D"===W.scene.children[e].type)for(var t=W.scene.children[e].children.length-1;t>-1;t--)W.scene.children[e].children[t].material.map&&W.scene.children[e].children[t].material.map.dispose(),W.scene.children[e].children[t].geometry.dispose(),W.scene.children[e].children[t].material.dispose(),W.scene.children[e].remove(W.scene.children[e].children[t]);else"Mesh"===W.scene.children[e].type?(W.scene.children[e].material.map&&W.scene.children[e].material.map.dispose(),W.scene.children[e].geometry.dispose(),W.scene.children[e].material.dispose()):"LineSegments"===W.scene.children[e].type&&(W.scene.children[e].geometry.dispose(),W.scene.children[e].material.dispose());W.scene.remove(W.scene.children[e])}W.renderer=null,W.scene=null,document.getElementById("stats").parentNode.removeChild(document.getElementById("stats")),document.getElementById("datGui").parentNode.removeChild(document.getElementById("datGui")),G.innerHTML=""}),k.addEventListener("click",function(){v.style.display="none",k.classList.remove("tab1-style"),k.classList.add("tab2-style"),N.classList.remove("tab2-style"),S(),P.style.display="none",G.style.display="block",te(),x=[],C=[],H=[],R=[],B=[],M=[],I=[]});var D=document.getElementById("cancel-button");D.addEventListener("click",function(){e(".machine-zone").remove(),e(".img-zone").remove(),e(".breadcrumb").removeClass("hide"),a.$router.push({name:"works"})});var O=document.getElementById("submit-button");O.addEventListener("click",function(){var i=n+"*"+t;S();var o=document.getElementsByClassName("machine-line"),s=document.getElementsByClassName("air-line"),r=document.getElementsByClassName("smoke-line"),l=document.getElementsByClassName("temperature-line"),d=document.getElementsByClassName("control-line"),c=[],m=[],u=[],h=[],p=[],g=[],E=[],f=[],y=!0;function v(e,t){for(var n=0;n<e.length;n++)t.push(e[n].getAttribute("code"))}function T(e,t){for(var n=this,i=0;i<e.length;i++)t.push(e[i].getAttribute("name")),e[i].getAttribute("name")||(y=!1,a.$alert("设备名称信息不完整","通知",{confirmButtonText:"确定",callback:function(e){n.$message({type:"info",message:"action: ".concat(e)})}}))}v(o,c),v(s,m),v(r,u),v(l,h),v(d,p),T(r,g),T(l,E),T(d,f);for(var b=null,w="",M=[],I=[],N=0;N<x.length;N++){var k=x[N],P=L[N],G=_[N],D=c[N];D||(D=+new Date),b={CABINET_NAME:G,CABINET_COORDINATE:k.join(","),ID:D,CABINET_TYPE:"0",DESCRIB_COORDINATE:P.join(",")},M.push(b)}for(var O=0;O<C.length;O++){var W=C[O],j=A[O],Y=z[O],q=m[O];q||(q=+new Date),b={CABINET_NAME:Y,CABINET_COORDINATE:W.join(","),ID:q,CABINET_TYPE:"1",DESCRIB_COORDINATE:j.join(",")},M.push(b)}for(var $=0;$<H.length;$++){var X=H[$],F=g[$],Q=u[$];Q||(Q=+new Date),w={EQ_TYPE:"03",EQ_NAME:F,EQ_COORDINATE:X.join(","),ID:Q},I.push(w)}for(var J=0;J<R.length;J++){var V=R[J],U=E[J],Z=h[J];Z||(Z=+new Date);var K={EQ_TYPE:"02",EQ_NAME:U,EQ_COORDINATE:V.join(","),ID:Z};I.push(K)}for(var ee=0;ee<B.length;ee++){var te=B[ee],ne=f[ee],ie=p[ee];ie||(ie=+new Date),w={EQ_TYPE:"25",EQ_NAME:ne,EQ_COORDINATE:te.join(","),ID:ie},I.push(w)}!0===y&&a.$axios(a.HOST+"/updateCabinet",{params:{partSize:i,describ:JSON.stringify(M),equipInfo:JSON.stringify(I)}}).then(function(t){e(".machine-zone").remove(),e(".img-zone").remove(),a.$router.push({name:"works"}),console.log(t.data)}).catch(function(e){console.log(e)})});var W={scene:null,camera:null,renderer:null,light:null,controls:null,width:null,height:null,stats:null,background:1973796,helper:null,gui:null,datGui:null,loop:null},j=null,Y=null,q=null,$=null,X=null,F=null,Q=null,J=null,V=null,U=null,Z=null,K=null,ee=null;function te(){function e(){W.scene=new THREE.Scene,W.scene.position.z=120}function i(){W.gui={x:0,y:0,z:120},W.datGui=new dat.GUI,W.datGui.domElement.setAttribute("id","datGui"),W.datGui.add(W.gui,"x",-500,500),W.datGui.add(W.gui,"y",-500,500),W.datGui.add(W.gui,"z",-500,500)}function o(){W.camera=new THREE.PerspectiveCamera(35,W.width/W.height,.1,3e3),W.camera.position.set(0,1e3,1100),W.camera.lookAt(new THREE.Vector3(0,2500,0))}function s(){W.renderer=new THREE.WebGLRenderer({antialias:!0}),W.renderer.setSize(W.width,W.height),W.renderer.setClearColor(W.background),W.renderer.shadowMap.enabled=!0,W.renderer.shadowMap.type=THREE.PCFSoftShadowMap,document.getElementById("three-dimensional").appendChild(W.renderer.domElement)}function a(){W.light=new THREE.DirectionalLight(16777215,1),W.light.position.set(500,1e3,500),W.light.target.position.set(0,0,0),W.light.castShadow=!1;var e=300;W.light.shadow.camera=new THREE.OrthographicCamera(-e,e,e,-e,500,1600),W.light.shadow.bias=1e-4,W.light.shadow.mapSize.width=W.light.shadow.mapSize.height=1024,W.scene.add(W.light),W.scene.add(new THREE.AmbientLight(16777215,.3))}function r(){function e(){$=new THREE.FontLoader,$.load("three/font/MicrosoftYaHei_Regular.json",function(e){for(var t=0,n=M.length;t<n;t++)j=new THREE.TextBufferGeometry(I[t],{font:e,size:11,height:1}),j.computeBoundingBox(),Y=new THREE.MeshLambertMaterial({}),X=new THREE.Mesh(j,Y),F=X.clone(),F.position.set(M[t][0],M[t][1],M[t][2]),W.scene.add(F)})}function i(){j=new THREE.BoxBufferGeometry(n,10,t),q=(new THREE.TextureLoader).load("three/img/floor.jpg"),q.wrapS=THREE.RepeatWrapping,q.wrapT=THREE.RepeatWrapping,q.repeat.set(8,8),Y=new THREE.MeshLambertMaterial({map:q,color:13034239}),X=new THREE.Mesh(j,Y),X.rotation.z=-Math.PI,X.position.y=-1,X.name="base",W.scene.add(X)}function o(){Q=new THREE.Object3D,j=new THREE.BoxGeometry(20,90,t),Y=new THREE.MeshPhongMaterial({color:13034239}),X=new THREE.Mesh(j,Y),X.position.set(0,45,0),Q.add(X),j=new THREE.BoxGeometry(4,200,t-10),Y=new THREE.MeshBasicMaterial({color:49151,opacity:.6,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(0,145,0),Q.add(X),j=new THREE.BoxGeometry(20,30,t),Y=new THREE.MeshPhongMaterial({color:13034239}),X=new THREE.Mesh(j,Y),X.position.set(0,240,0),Q.add(X),Q.position.set(-n/2-10,-5,0),W.scene.add(Q),J=Q.clone(),J.position.set(n/2+10,-5,0),W.scene.add(J)}function s(){Q=new THREE.Object3D,q=(new THREE.TextureLoader).load("three/img/rack_front_door.jpg"),Y=new THREE.MeshPhongMaterial({map:q}),j=new THREE.BoxGeometry(2,300,150),X=new THREE.Mesh(j,Y),X.rotation.y=-.5*Math.PI,X.position.set(0,152,0),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_door_back.jpg"),Y=new THREE.MeshPhongMaterial({map:q}),j=new THREE.BoxGeometry(2,300,150),X=new THREE.Mesh(j,Y),X.rotation.y=-.5*Math.PI,X.position.set(0,152,-140),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_panel.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:3684408}),j=new THREE.BoxGeometry(2,300,140),X=new THREE.Mesh(j,Y),X.position.set(-75,152,-70),Q.add(X),F=X.clone(),F.position.set(75,152,-70),Q.add(F),q=(new THREE.TextureLoader).load("three/img/rack_panel.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:3684408}),j=new THREE.BoxGeometry(150,2,140),X=new THREE.Mesh(j,Y),X.position.set(0,2,-70),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_panel.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:3684408}),j=new THREE.BoxGeometry(140,40,150),X=new THREE.Mesh(j,Y),X.position.set(0,290,-70),Q.add(X),Q.name="machine";for(var e=0,t=x.length;e<t;e++)J=Q.clone(),J.position.set(x[e][0],x[e][1],x[e][2]),W.scene.add(J)}function a(){Q=new THREE.Object3D,q=(new THREE.TextureLoader).load("three/img/rack_inside.jpg"),Y=new THREE.MeshBasicMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(2,300,150),X=new THREE.Mesh(j,Y),V=new THREE.BoxGeometry(2,60,120),U=new THREE.MeshPhongMaterial({color:4878475}),Z=new THREE.Mesh(V,U),Z.position.y=87,K=new ThreeBSP(X).subtract(new ThreeBSP(Z)),V=new THREE.BoxGeometry(2,40,35),U=new THREE.MeshPhongMaterial({color:4878475}),Z=new THREE.Mesh(V,U),Z.position.y=-118,K=K.subtract(new ThreeBSP(Z)),Z=Z.clone(),Z.position.z=45,K=K.subtract(new ThreeBSP(Z)),Z=Z.clone(),Z.position.z=-45,K=K.subtract(new ThreeBSP(Z)),X=K.toMesh(),X.geometry.computeFaceNormals(),X.geometry.computeVertexNormals(),X.material=new THREE.MeshPhongMaterial({color:15461355}),X.rotation.y=-.5*Math.PI,X.position.set(0,152,0),Q.add(X),q=(new THREE.TextureLoader).load("three/img/flag.jpg"),Y=new THREE.MeshBasicMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(120,60,2),X=new THREE.Mesh(j,Y),X.position.z=0,X.position.y=240,Q.add(X),q=(new THREE.TextureLoader).load("three/img/eee.png"),Y=new THREE.MeshBasicMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(35,40,2),X=new THREE.Mesh(j,Y),X.position.z=0,X.position.y=35,Q.add(X),X=X.clone(),X.position.x=45,Q.add(X),X=X.clone(),X.position.x=-45,Q.add(X),q=(new THREE.TextureLoader).load("three/img/lock.png"),Y=new THREE.MeshBasicMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(18,24,10),X=new THREE.Mesh(j,Y),X.position.y=166,X.position.x=0,Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_inside.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(2,300,150),X=new THREE.Mesh(j,Y),X.rotation.y=-.5*Math.PI,X.position.set(0,152,-140),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_inside.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(2,300,140),X=new THREE.Mesh(j,Y),X.position.set(-75,152,-70),Q.add(X),X=X.clone(),X.position.set(75,152,-70),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_inside.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:16777215}),j=new THREE.BoxGeometry(150,2,140),X=new THREE.Mesh(j,Y),X.position.set(0,2,-70),Q.add(X),q=(new THREE.TextureLoader).load("three/img/rack_inside.jpg"),Y=new THREE.MeshPhongMaterial({map:q,color:6535423}),j=new THREE.BoxGeometry(140,40,150),X=new THREE.Mesh(j,Y),X.position.set(0,290,-70),Q.add(X),Q.name="air";for(var e=0,t=C.length;e<t;e++)J=Q.clone(),J.position.set(C[e][0],C[e][1],C[e][2]),W.scene.add(J)}function r(e,t,n,i){return Q=new THREE.Object3D,j=new THREE.CylinderGeometry(20,20,10,40,5),Y=new THREE.MeshPhongMaterial({color:15263976}),X=new THREE.Mesh(j,Y),X.position.set(0,96,0),Q.add(X),j=new THREE.CylinderGeometry(16,16,4,40,5),Y=new THREE.MeshBasicMaterial({color:35584,opacity:.4,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(0,102,0),Q.add(X),j=new THREE.CylinderGeometry(8,10,5,40,5),Y=new THREE.MeshPhongMaterial({color:15263976}),X=new THREE.Mesh(j,Y),X.position.set(0,106,0),Q.add(X),Q.name="smoke-".concat(i),Q.position.set(e,t,n),Q}function l(e,t,n,i){return Q=new THREE.Object3D,j=new THREE.CylinderGeometry(20,20,10,40,40),Y=new THREE.MeshPhongMaterial({color:15263976}),X=new THREE.Mesh(j,Y),X.position.set(0,96,0),Q.add(X),j=new THREE.CylinderGeometry(20,20,8,40,5),Y=new THREE.MeshPhongMaterial({color:128,opacity:.8,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(0,105,0),Q.add(X),j=new THREE.SphereGeometry(20,20,6,0,2*Math.PI,0,Math.PI/2),Y=new THREE.MeshPhongMaterial({color:15263976}),X=new THREE.Mesh(j,Y),X.position.set(0,109,0),Q.add(X),Q.name="temperature-".concat(i),Q.position.set(e,t,n),Q}function d(e,t,n,i){return Q=new THREE.Object3D,j=new THREE.BoxGeometry(40,30,40),Y=new THREE.MeshPhongMaterial({color:15263976}),X=new THREE.Mesh(j,Y),X.position.set(0,103,0),Q.add(X),j=new THREE.BoxGeometry(9,26,43),Y=new THREE.MeshPhongMaterial({color:8684676,opacity:.9,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(-20,96,0),Q.add(X),X=X.clone(),X.position.set(20,96,0),Q.add(X),j=new THREE.CircleGeometry(1.4,36,0,2*Math.PI),Y=new THREE.MeshPhongMaterial({color:60928,opacity:.9,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(-10,107,21),Q.add(X),Y=new THREE.MeshPhongMaterial({color:15658496,opacity:.9,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(-5,107,21),Q.add(X),Y=new THREE.MeshPhongMaterial({color:15597568,opacity:.9,transparent:!0}),X=new THREE.Mesh(j,Y),X.position.set(0,107,21),Q.add(X),j=new THREE.BoxGeometry(10,6,.5),Y=new THREE.MeshPhongMaterial({color:4878475}),X=new THREE.Mesh(j,Y),X.castShadow=!1,X.position.set(-3,98,21),Q.add(X),F=X.clone(),F.position.set(9,98,21),Q.add(F),Q.name="controller-".concat(i),Q.position.set(e,t,n),Q}function c(){for(var e=0,t=H.length;e<t;e++)ee=r(H[e][0],H[e][1],H[e][2],e),W.scene.add(ee);for(var n=0,i=R.length;n<i;n++)ee=l(R[n][0],R[n][1],R[n][2],n),W.scene.add(ee);for(var o=0,s=B.length;o<s;o++)ee=d(B[o][0],B[o][1],B[o][2],o),W.scene.add(ee)}W.helper=new THREE.AxisHelper(1e3),W.scene.add(W.helper),e(),i(),o(),s(),a(),c()}function l(){W.stats=new Stats,W.stats.domElement.setAttribute("id","stats"),document.body.appendChild(W.stats.dom)}function d(){W.controls=new THREE.OrbitControls(W.camera,W.renderer.domElement),W.controls.enableDamping=!0,W.controls.dampingFactor=.25,W.controls.rotateSpeed=.35,W.controls.enableZoom=!0,W.controls.autoRotate=!1,W.controls.autoRotateSpeed=.5,W.controls.minDistance=1,W.controls.maxDistance=2e3,W.controls.enablePan=!0}function c(){W.stats.update(),W.renderer.render(W.scene,W.camera),W.scene.position.x=W.gui.x,W.scene.position.y=W.gui.y,W.scene.position.z=W.gui.z,W.loop=requestAnimationFrame(c)}function m(){window.addEventListener("resize",function(){W.width=document.getElementById("three-dimensional").offsetWidth,W.height=document.getElementById("three-dimensional").offsetHeight,W.camera.aspect=W.width/W.height,W.camera.updateProjectionMatrix(),W.renderer.setSize(W.width,W.height)})}function u(){Detector.webgl||Detector.addGetWebGLMessage(),e(),i(),o(),s(),a(),r(),d(),l(),c(),m()}W.width=document.getElementById("three-dimensional").offsetWidth,W.height=document.getElementById("three-dimensional").offsetHeight,u()}},methods:{ruler:function(){for(var e,t=document.getElementById("axis-x"),n=document.getElementById("axis-y"),i=parseInt(t.offsetWidth/10),o=1;o<i;o++)o%5===0&&o%2!=0?(e=document.createElement("div"),e.setAttribute("class","x-minor"),e.style.left=10*o+"px",t.appendChild(e)):o%10===0?(e=document.createElement("div"),e.setAttribute("class","x-major"),e.style.left=10*o+"px",e.innerText=10*o-100,t.appendChild(e)):(e=document.createElement("div"),e.setAttribute("class","x-micro"),e.style.left=10*o+"px",t.appendChild(e));for(var s=parseInt(n.offsetHeight/10),a=1;a<s;a++)a%5===0&&a%2!=0?(e=document.createElement("div"),e.setAttribute("class","y-minor"),e.style.top=10*a+"px",n.appendChild(e)):a%10===0?(e=document.createElement("div"),e.setAttribute("class","y-major"),e.style.top=10*a+"px",e.innerText=10*a-100,n.appendChild(e)):(e=document.createElement("div"),e.setAttribute("class","y-micro"),e.style.top=10*a+"px",n.appendChild(e))}},watch:{}}}).call(this,n("1157"))},9744:function(e,t,n){"use strict";var i=n("4588"),o=n("be13");e.exports=function(e){var t=String(o(this)),n="",s=i(e);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(n+=t);return n}},aae3:function(e,t,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}}}]);
//# sourceMappingURL=chunk-d1bf0690.3bb7f72a.js.map