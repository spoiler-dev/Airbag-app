(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f24b4b"],{"0b34":function(t,e,i){"use strict";var n=i("2498"),s=i("ce67")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i("ab19")(a)},"0caa":function(t,e,i){"use strict";var n=i("1bcf"),s=i.n(n);s.a},"1bcf":function(t,e,i){},3837:function(t,e,i){var n=i("da0b"),s=i("c58e"),a=i("1277")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},4712:function(t,e,i){"use strict";var n=i("d90d"),s=i.n(n);s.a},"7cfd":function(t,e,i){var n=i("d3d8").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in s||i("f9a5")&&n(s,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},bb7c:function(t,e,i){"use strict";var n=i("eade"),s=i.n(n);s.a},c017:function(t,e,i){var n=i("3837");t.exports=function(t,e){return new(n(t))(e)}},c58e:function(t,e,i){var n=i("6077");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ce67:function(t,e,i){var n=i("e85e"),s=i("9952"),a=i("a9cf"),o=i("8941"),r=i("c017");t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,h=4==t,d=6==t,u=5==t||d,m=e||r;return function(e,r,f){for(var p,v,_=a(e),g=s(_),x=n(r,f,3),E=o(g.length),B=0,C=i?m(e,E):l?m(e,0):void 0;E>B;B++)if((u||B in g)&&(p=g[B],v=x(p,B,_),t))if(i)C[B]=v;else if(v)switch(t){case 3:return!0;case 5:return p;case 6:return B;case 2:C.push(p)}else if(h)return!1;return d?-1:c||h?h:C}}},d4fb:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABFElEQVQ4T6XUMS9EQRSG4eckJH6DTvwClWh16CQ6CRKFRqVBqaEVlSiElmQTIdGpRbO9hEQjGp2SkUtGrrvX3t015Zw575z5zncmpJT0t7ZE7FVTogR6wi6uu3APcdMEyvl32BFx2QFMqYXbXkE5vyVi/hdsQFBbxEQtiDM8ivjI8bJG1ZfUgTZwj1FMYSXDuoOYxHSN+LNYx2mGNYFm8NzgjhMRy/8FFRqtiThq1iilkZqKVrGfIUW8GVSmpFQYso13pKKSQbv2bUgORLyV7+i3ooGc/YLjij6F04//GpEHjNUI+oqLmv1zEVd10z+MJWxXgJ3O7mKo+ImllIGbGP/qTnXWegLlQykNYRFzIhZ6/fM+AVgYfRMcUfLNAAAAAElFTkSuQmCC"},d6bd:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"font-family":"Microsoft YaHei"}},[n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"header-left"}}),n("div",{attrs:{id:"chTitle"}},[t._v(t._s(t.chTitle))]),n("div",{attrs:{id:"header-right"}}),n("div",{attrs:{id:"line-left"}}),n("div",{attrs:{id:"enTitle"}},[t._v(t._s(t.enTitle))]),n("div",{attrs:{id:"line-right"}}),n("div",{attrs:{id:"quit"},on:{click:t.handleClickQuit}},[n("img",{attrs:{src:i("d4fb"),alt:""}}),t._v(" 退出\n    ")])]),n("div",{attrs:{id:"terminal-info"}},[n("div",{staticClass:"textLine"}),n("div",{staticClass:"terminal-text"},[n("span",{staticClass:"terminal-text-left"},[t._v("设备号：")]),n("span",{staticClass:"terminal-text-right"},[t._v(t._s(t.terminalId))])]),n("div",{staticClass:"textLine"}),n("div",{staticClass:"terminal-text"},[n("span",{staticClass:"terminal-text-left"},[t._v("平台版本号：")]),n("span",{staticClass:"terminal-text-right"},[t._v(t._s(t.abwoa))])]),n("div",{staticClass:"textLine"})]),t._m(0),n("div",{attrs:{id:"cashBox-info"}},[n("div",{staticClass:"textLine"}),n("table",[n("tr",t._l(t.thList,(function(e,i){return n("th",{key:i},[t._v(t._s(e))])})),0),t._l(t.trList,(function(e,i){return n("tr",{key:i},t._l(t.trList[i],(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0)}))],2),n("div",{staticClass:"textLine"})]),t._m(1),n("div",{attrs:{id:"terminal-model"}},[t._m(2),n("div",{staticClass:"terminal-model-all"},t._l(t.modelList,(function(e){return n("div",{key:e.name,class:e.status?"terminal-model-box box-normal":"terminal-model-box box-error"},[n("div",{class:e.status?"terminal-model-box-text text-normal":"terminal-model-box-text text-error"},[t._v(t._s(e.name))]),n("div",{class:e.status?"terminal-model-box-icon icon-normal "+e.model:"terminal-model-box-icon icon-error "+e.model+"Error"})])})),0)]),n("div",{attrs:{id:"options"}},[n("el-checkbox-group",{on:{change:t.handleCheckedChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.options,(function(e){return n("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])})),1)],1),n("div",{attrs:{id:"view"}},[t._m(3),n("div",{attrs:{id:"base"}}),n("div",{attrs:{id:"rightBtn"},on:{click:t.rightBtn}}),n("div",{attrs:{id:"leftBtn"},on:{click:t.leftBtn}})])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"terminal-state"}},[i("div",{staticClass:"panel-title"},[i("div",{staticClass:"panel-chTitle"},[t._v("设备状态")]),i("div",{staticClass:"panel-enTitle"},[t._v("Device status")])]),i("div",{staticClass:"terminal-state-all"},[i("div",{staticClass:"terminal-state-box"},[i("div",{staticClass:"terminal-state-box-border"},[i("div",{staticClass:"terminal-state-box-icon icon1"}),i("div",{staticClass:"terminal-state-box-text"},[t._v("交易中")])])]),i("div",{staticClass:"terminal-state-box"},[i("div",{staticClass:"terminal-state-box-border"},[i("div",{staticClass:"terminal-state-box-icon icon2"}),i("div",{staticClass:"terminal-state-box-text"},[t._v("空闲")])])]),i("div",{staticClass:"terminal-state-box active"},[i("div",{staticClass:"terminal-state-box-border"},[i("div",{staticClass:"terminal-state-box-icon icon3"}),i("div",{staticClass:"terminal-state-box-text"},[t._v("暂停服务")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"cashBox-state"}},[i("div",{staticClass:"cashBox-box"},[i("div",{staticClass:"cashBox-title"},[t._v("取款功能：")]),i("div",{staticClass:"cashBox-text"},[i("div",{staticClass:"cashBox-text-left"},[t._v("ON")]),i("div",{staticClass:"cashBox-text-right"},[t._v("开")])])]),i("div",{staticClass:"cashBox-box"},[i("div",{staticClass:"cashBox-title"},[t._v("存款功能：")]),i("div",{staticClass:"cashBox-text"},[i("div",{staticClass:"cashBox-text-left"},[t._v("ON")]),i("div",{staticClass:"cashBox-text-right"},[t._v("开")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel-title"},[i("div",{staticClass:"panel-chTitle"},[t._v("模块状态")]),i("div",{staticClass:"panel-enTitle"},[t._v("Model status")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"draw"}}),i("div",{attrs:{id:"loading"}},[t._v("模型加载中...")])])}],a=(i("7cfd"),i("0b34"),{name:"Self-Service-Equipment",props:[""],data:function(){return{chTitle:"自助设备监控管理系统",enTitle:"Self-Service Equipment Monitoring Management System",abwoa:"ABWOA_V3.2.0.3",terminalId:"02005001",three:null,renderer:null,scene:null,camera:null,stats:null,axesHelper:null,dracoLoader:null,loader:null,controls:null,width:null,height:null,cashBoxNum:5,openDoorFlag:!1,closeDoorFlag:!1,openSafeDoorFlag:!1,closSafeeDoorFlag:!1,pushIntoMovementFlag:!1,pullOutMovementFlag:!1,pushIntoCashBoxFlag:!1,pullOutCashBoxFlag:!1,closeGateFlag:!1,openGateFlag:!1,checkList:["自动旋转"],options:["自动旋转","打开柜门","检查出入钞闸门","打开安全门","检查机芯","检查钞箱"],modelList:[{name:"读卡器",status:!0,model:"idc"},{name:"密码键盘",status:!0,model:"pin"},{name:"凭条打印机",status:!1,model:"prr"},{name:"非接读卡器",status:!0,model:"icc"},{name:"取款模块",status:!0,model:"movement"},{name:"存款模块",status:!0,model:"movement"},{name:"摄像头",status:!0,model:"cam"}],thList:["序号","钞箱类型","面额","状态","初始数","剩余数"],trList:[["0","回收/拒绝","-","正常","0","0"],["1","循环","100","正常","100","90"],["2","循环","100","正常","100","100"],["3","循环","100","正常","100","100"],["4","循环","100","正常","100","100"]]}},components:{},computed:{},beforeMount:function(){console.log(["    __     __"," __/ __\\  / __\\__   ____   _____   _____","/ __/  /\\/ /  /___\\/ ____\\/ _____\\/ _____\\","\\/_   __/ /   _   / /  __/ / __  / / __  /_   __   _____","/ /  / / /  / /  / /  / / /  ___/ /  ___/\\ _\\/ __\\/ _____\\","\\/__/  \\/__/\\/__/\\/__/  \\/_____/\\/_____/\\/__/ /  / /  ___/","                                         / __/  /  \\__  \\","                                         \\/____/\\/_____/"].join("\n"))},mounted:function(){this.width=document.getElementById("view").offsetWidth,this.height=document.getElementById("view").offsetHeight,this.checkSupport();var t=this;window.onresize=function(){t.onWindowResize()}},methods:{handleCheckedChange:function(t){this.gui={"自动旋转":!1,"打开柜门":!1,"打开安全门":!1,"检查机芯":!1,"检查钞箱":!1,"检查出入钞闸门":!1};for(var e=t.length,i=0;i<e;i++)this.gui[t[i]]=!0},checkSupport:function(){if(THREE.WEBGL.isWebGLAvailable())this.init();else{var t=THREE.WEBGL.getWebGLErrorMessage();document.getElementById("container").appendChild(t)}},init:function(){this.initGui(),this.initRender(),this.initScene(),this.initCamera(),this.initLight(),this.initModel(),this.initControls(),this.initStats(),this.animate(),this.onWindowResize()},initGui:function(){this.gui={"自动旋转":!0,"打开柜门":!1,"打开安全门":!1,"检查机芯":!1,"检查钞箱":!1,"检查出入钞闸门":!1}},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearAlpha(0),this.renderer.gammaOutput=!0,this.renderer.gammaFactor=2.2,this.renderer.physicallyCorrectLights=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,document.getElementById("draw").appendChild(this.renderer.domElement)},initScene:function(){this.scene=new THREE.Scene},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,.1,3e3),this.camera.position.set(0,-.4,4.8),this.camera.lookAt(new THREE.Vector3(0,0,0))},initLight:function(){this.light=new THREE.AmbientLight(16777215,1),this.scene.add(this.light);var t=new THREE.DirectionalLight(16777215,1);t.position.set(0,.7,5),t.target.position.set(0,0,0),t.castShadow=!0,this.scene.add(t);var e=new THREE.DirectionalLight(15794175,1);e.position.set(0,0,-5),e.target.position.set(0,0,0),e.castShadow=!0,this.scene.add(e);var i=new THREE.DirectionalLight(15794175,.55);i.position.set(10,0,0),i.target.position.set(0,0,0),i.castShadow=!0,this.scene.add(i);var n=new THREE.DirectionalLight(16777215,.55);n.position.set(-10,0,0),n.target.position.set(0,0,0),n.castShadow=!0,this.scene.add(n);var s=new THREE.DirectionalLight(16777215,.55);s.position.set(0,1,-.8),s.target.position.set(0,0,0),s.castShadow=!0,this.scene.add(s);var a=new THREE.SpotLight(16758465,.8);a.position.set(0,.66,.7),a.castShadow=!0,this.scene.add(a)},initModel:function(){this.loader=new THREE.GLTFLoader,this.dracoLoader=new THREE.DRACOLoader,this.dracoLoader.setDecoderPath("three/draco/"),this.loader.setDRACOLoader(this.dracoLoader),this.loader.setCrossOrigin("anonymous");var t=this;this.loader.load("three/model/8600r.gltf",(function(e){e.scene.traverse((function(t){t.isMesh&&(t.receiveShadow=!0)})),console.log(e),e.scene.position.y=-.4,e.scene.name="loaderSence",t.scene.add(e.scene),document.getElementById("loading").style.display="none"}),(function(t){console.log(t.loaded/t.total*100+"% loaded")}),(function(t){console.log("load error!"+t.getWebGLErrorMessage())}));new THREE.CubeGeometry(.05,.05,.05),new THREE.MeshLambertMaterial({color:65535})},initControls:function(){this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.enableZoom=!0,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.3,this.controls.minDistance=1,this.controls.maxDistance=2e3,this.controls.enablePan=!1},initStats:function(){this.stats=new Stats,this.stats.setMode(1),this.stats.dom.style.left="1%",this.stats.dom.style.top="15px",this.stats.dom.setAttribute("id","stats"),document.getElementById("draw").appendChild(this.stats.dom)},render:function(){this.gui.自动旋转?this.controls.autoRotate=!0:this.controls.autoRotate=!1,this.gui.检查出入钞闸门?this.openGateFlag||(this.camera.position.set(0,1.6,4),this.openGate()):!this.closeGateFlag&&this.openGateFlag&&this.closeGate(),this.gui.打开柜门?this.openDoorFlag||(this.camera.position.set(1,1.6,-5),this.openDoor()):!this.closeDoorFlag&&this.openDoorFlag&&this.closeDoor(),this.gui.打开安全门?this.openSafeDoorFlag?(this.gui.检查机芯?this.pullOutMovementFlag||this.pullOutMovement():!this.pushIntoMovementFlag&&this.pullOutMovementFlag&&this.pushIntoMovement(),this.gui.检查钞箱?this.pullOutCashBoxFlag||this.pullOutCashBox():!this.pushIntoCashBoxFlag&&this.pullOutCashBoxFlag&&this.pushIntoCashBox()):(this.camera.position.set(-1.5,1.6,-5),this.openSafeDoor()):!this.closeSafeDoorFlag&&this.openSafeDoorFlag&&(!this.pushIntoMovementFlag&&this.pullOutMovementFlag&&this.pushIntoMovement(),!this.pushIntoCashBoxFlag&&this.pullOutCashBoxFlag&&this.pushIntoCashBox(),this.closeSafeDoor()),this.renderer.render(this.scene,this.camera)},animate:function(){requestAnimationFrame(this.animate),this.render(),this.stats.update(),this.controls.update()},onWindowResize:function(){this.width=document.getElementById("view").offsetWidth,this.height=document.getElementById("view").offsetHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)},openDoor:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"door");this.scene.children[t].children[e].position.set(-.51,.61,-.6),this.scene.children[t].children[e].rotation.set(0,Math.PI/2,0),this.pullOutPack(),this.pullOutIdcB(),this.pullOutPrrB(),this.openDoorFlag=!0,this.closeDoorFlag=!1},pullOutPack:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"pack");this.scene.children[t].children[e].translateZ(-.6)},pullOutPrrB:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"prrB");this.scene.children[t].children[e].translateZ(-.6),this.prrError()},prrError:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"prrB"),i=this.finder(this.scene.children[t].children,"prrF");this.setColor(this.scene.children[t].children[e].children,16711680),this.scene.children[t].children[i].material.color.set(16711680)},pullOutIdcB:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"idcB");this.scene.children[t].children[e].translateZ(-.6)},closeDoor:function(){this.pushIntoPack(),this.pushIntoPrrB(),this.pushIntoIdcB();var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"door");this.scene.children[t].children[e].position.set(.0009173508733510971,.6081228852272034,-.6094274520874023),this.scene.children[t].children[e].rotation.set(0,Math.PI/2,0),this.openDoorFlag=!1,this.closeDoorFlag=!0},pushIntoPack:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"pack");this.scene.children[t].children[e].translateZ(.6)},pushIntoPrrB:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"prrB");this.scene.children[t].children[e].translateZ(.6)},pushIntoIdcB:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"idcB");this.scene.children[t].children[e].translateZ(.6)},openSafeDoor:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"safeDoor");this.scene.children[t].children[e].position.set(-.5,-.305,-.58),this.scene.children[t].children[e].rotation.set(-Math.PI/2,Math.PI,0),this.openSafeDoorFlag=!0,this.closeSafeDoorFlag=!1},pullOutMovement:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"movement");this.scene.children[t].children[e].translateZ(-.7),this.pullOutMovementFlag=!0,this.pushIntoMovementFlag=!1},pullOutCashBox:function(){var t=this,e=this.finder(this.scene.children,"loaderSence"),i=this.finder(this.scene.children[e].children,"cashBox");this.scene.children[e].children[i].translateZ(-.7);for(var n=this.cashBoxNum,s=0;s<n;s++)i=t.finder(t.scene.children[e].children,"cashBox0".concat(s+1)),t.scene.children[e].children[i].translateZ(-.7);this.pullOutCashBoxFlag=!0,this.pushIntoCashBoxFlag=!1},closeSafeDoor:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"safeDoor");this.scene.children[t].children[e].position.set(.010121287778019905,-.2978687286376953,-.6150507926940918),this.scene.children[t].children[e].rotation.set(Math.PI/2,0,0),this.openSafeDoorFlag=!1,this.closeSafeDoorFlag=!0},pushIntoMovement:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"movement");this.scene.children[t].children[e].translateZ(.7),this.pullOutMovementFlag=!1,this.pushIntoMovementFlag=!0},pushIntoCashBox:function(){var t=this,e=this.finder(this.scene.children,"loaderSence"),i=this.finder(this.scene.children[e].children,"cashBox");this.scene.children[e].children[i].translateZ(.7);for(var n=this.cashBoxNum,s=0;s<n;s++)i=t.finder(t.scene.children[e].children,"cashBox0".concat(s+1)),t.scene.children[e].children[i].translateZ(.7);this.pullOutCashBoxFlag=!1,this.pushIntoCashBoxFlag=!0},openGate:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"gate");this.scene.children[t].children[e].translateZ(-.2),this.openGateFlag=!0,this.closeGateFlag=!1},closeGate:function(){var t=this.finder(this.scene.children,"loaderSence"),e=this.finder(this.scene.children[t].children,"gate");this.scene.children[t].children[e].translateZ(.2),this.openGateFlag=!1,this.closeGateFlag=!0},finder:function(t,e){return t.findIndex((function(t){return t.name===e}))},setColor:function(t,e){t[0].material=new THREE.MeshBasicMaterial({color:e}),t[2].material=new THREE.MeshBasicMaterial({color:e}),t[1].material=new THREE.MeshBasicMaterial({color:e})},leftBtn:function(){var t=window.getComputedStyle(document.getElementById("terminal-model"),null);"none"==t.display?document.getElementById("terminal-model").style.display="block":document.getElementById("terminal-model").style.display="none";var e=window.getComputedStyle(document.getElementById("cashBox-state"),null);"none"==e.display?document.getElementById("cashBox-state").style.display="flex":document.getElementById("cashBox-state").style.display="none"},rightBtn:function(){var t=window.getComputedStyle(document.getElementById("terminal-info"),null);"none"==t.display?document.getElementById("terminal-info").style.display="block":document.getElementById("terminal-info").style.display="none";var e=window.getComputedStyle(document.getElementById("terminal-state"),null);"none"==e.display?document.getElementById("terminal-state").style.display="block":document.getElementById("terminal-state").style.display="none";var i=window.getComputedStyle(document.getElementById("cashBox-info"),null);"none"==i.display?document.getElementById("cashBox-info").style.display="block":document.getElementById("cashBox-info").style.display="none"},handleClickQuit:function(){this.$router.push({name:"works"})}},watch:{},destroyed:function(){window.onresize=null}}),o=a,r=(i("4712"),i("0caa"),i("d79d"),i("bb7c"),i("4e82")),l=Object(r["a"])(o,n,s,!1,null,"50abff9c",null);e["default"]=l.exports},d79d:function(t,e,i){"use strict";var n=i("e658"),s=i.n(n);s.a},d90d:function(t,e,i){},e658:function(t,e,i){},eade:function(t,e,i){}}]);