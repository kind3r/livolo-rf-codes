(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/livolo-rf-codes/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3031:function(e,t,a){e.exports=a.p+"img/livolo2.8f440679.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("h1",[e._v("Generate Home Assistant configuration for Livolo RF switches used via Broadlink RM 2/RM Pro/RM Plus remote")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"input-group mb-3"},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.options.entity_id,expression:"options.entity_id"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"entity-id"},domProps:{value:e.options.entity_id},on:{input:function(t){t.target.composing||e.$set(e.options,"entity_id",t.target.value)}}})])]),a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group mb-3"},[e._m(1),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.options.remote_model,expression:"options.remote_model"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"rmpro"},domProps:{checked:e._q(e.options.remote_model,"rmpro")},on:{change:[function(t){return e.$set(e.options,"remote_model","rmpro")},e.selectRemoteModel]}}),a("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v("RM 2/RM Pro/RM Plus")])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.options.remote_model,expression:"options.remote_model"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio2",value:"rm4pro"},domProps:{checked:e._q(e.options.remote_model,"rm4pro")},on:{change:[function(t){return e.$set(e.options,"remote_model","rm4pro")},e.selectRemoteModel]}}),a("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio2"}},[e._v("RM4 Pro")])])])])])]),a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:1==e.step},attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.switchStep(1)}}},[a("span",{staticClass:"badge badge-info"},[e._v("1")]),e._v(" Add switches")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:2==e.step,disabled:0==e.switches.length},attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.switchStep(2)}}},[a("span",{staticClass:"badge badge-info"},[e._v("2")]),e._v(" HA config")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:3==e.step,disabled:0==e.switches.length},attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.switchStep(3)}}},[a("span",{staticClass:"badge badge-info"},[e._v("3")]),e._v(" Pairing switches")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:4==e.step},attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.switchStep(4)}}},[e._v("Advanced")])])]),1==e.step?a("Switches",{model:{value:e.switches,callback:function(t){e.switches=t},expression:"switches"}}):e._e(),a("HAConfig",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step==2"}],attrs:{options:e.options},model:{value:e.switches,callback:function(t){e.switches=t},expression:"switches"}}),3==e.step?a("Pairing",{model:{value:e.switches,callback:function(t){e.switches=t},expression:"switches"}}):e._e(),4==e.step?a("Advanced",{on:{reloadStorage:e.reloadStorage}}):e._e()],1),e._m(2)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"entity-id"}},[e._v("Entity Id")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend mr-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"entity-id"}},[e._v("Broadlink model")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"container-fluid mt-3 mb-5 row"},[n("div",{staticClass:"col"},[e._v(" Inspired by "),n("a",{attrs:{href:"https://www.tyjtyj.com/livolo.php",target:"_blank"}},[e._v("https://www.tyjtyj.com/livolo.php")]),n("br"),e._v(" Thread on "),n("a",{attrs:{href:"https://community.home-assistant.io/t/broadlink-rm-pro-livolo-switches-rf-learning-woes/12432",target:"_blank"}},[e._v("Home Assistant comunity")])]),n("div",{staticClass:"col text-right"},[n("a",{attrs:{href:"https://github.com/kind3r/livolo-rf-codes",target:"_blank"}},[n("img",{attrs:{src:a("890a")}})])])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container border border-top-0 p-2"},[e._m(0),a("div",{staticClass:"alert alert-primary"},[e._v(" Add as many switches as you need, for each gang of every switch a new remote id will be generated. This will allow asinging each gang a remote button and 2 scenes (one for on and one for off). ")]),a("div",{staticClass:"row"},[e._l(e.switches,(function(t,n){return a("div",{key:e.switches[n].switchIndex,staticClass:"col-lg-4"},[a("LivoloSwitch",{attrs:{index:n},on:{remove:e.removeSwitch,input:e.storeSwitches},model:{value:e.switches[n],callback:function(t){e.$set(e.switches,n,t)},expression:"switches[index]"}})],1)})),a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[e._v("Add switch")]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[e._v("Choose a type")]),a("p",{staticClass:"w-100"},[a("a",{staticClass:"btn btn-info w-100",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.addSwitch(1)}}},[e._v("One gang")])]),a("p",{staticClass:"w-100"},[a("a",{staticClass:"btn btn-info w-100",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.addSwitch(2)}}},[e._v("Two gang")])]),a("p",{staticClass:"w-100"},[a("a",{staticClass:"btn btn-info w-100",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.addSwitch(3)}}},[e._v("Three gang")])])])])])],2)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("span",{staticClass:"badge badge-info"},[e._v("1")]),e._v(" Add switches")])}],c=(a("a434"),a("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card mb-2"},[1==e.type?n("img",{staticClass:"card-img-top",attrs:{src:a("82b5"),alt:"One gang switch"}}):e._e(),2==e.type?n("img",{staticClass:"card-img-top",attrs:{src:a("3031"),alt:"Two gang switch"}}):e._e(),3==e.type?n("img",{staticClass:"card-img-top",attrs:{src:a("d6d7"),alt:"Three gang switch"}}):e._e(),n("div",{staticClass:"card-body pt-0"},[n("div",{staticClass:"row mb-3 align-items-center"},[n("div",{staticClass:"col"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"form-control",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]},e.updateModel]}},[n("option",{attrs:{value:"1"}},[e._v("One gang")]),n("option",{attrs:{value:"2"}},[e._v("Two gang")]),n("option",{attrs:{value:"3"}},[e._v("Three gang")])])]),n("div",{staticClass:"col text-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dimmer,expression:"dimmer"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"dimmerCheck"+e.index},domProps:{checked:Array.isArray(e.dimmer)?e._i(e.dimmer,null)>-1:e.dimmer},on:{change:[function(t){var a=e.dimmer,n=t.target,i=!!n.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);n.checked?o<0&&(e.dimmer=a.concat([s])):o>-1&&(e.dimmer=a.slice(0,o).concat(a.slice(o+1)))}else e.dimmer=i},e.updateModel]}}),n("label",{staticClass:"form-check-label",attrs:{for:"dimmerCheck"+e.index}},[e._v("Dimmer")])])]),n("div",{staticClass:"input-group mb-3"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.names[0],expression:"names[0]"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"basic-addon1"},domProps:{value:e.names[0]},on:{input:[function(t){t.target.composing||e.$set(e.names,0,t.target.value)},e.updateModel]}})]),e.type>=2?n("div",{staticClass:"input-group mb-3"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.names[1],expression:"names[1]"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"basic-addon2"},domProps:{value:e.names[1]},on:{input:[function(t){t.target.composing||e.$set(e.names,1,t.target.value)},e.updateModel]}})]):e._e(),e.type>=3?n("div",{staticClass:"input-group mb-3"},[e._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:e.names[2],expression:"names[2]"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"basic-addon3"},domProps:{value:e.names[2]},on:{input:[function(t){t.target.composing||e.$set(e.names,2,t.target.value)},e.updateModel]}})]):e._e(),n("a",{staticClass:"card-link",attrs:{href:"javascript:void(0)"},on:{click:e.removeSwitch}},[e._v("Remove")])])])}),l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[e._v("Gang 1")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon2"}},[e._v("Gang 2")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon3"}},[e._v("Gang 3")])])}],d=(a("b0c0"),a("ac1f"),a("5319"),{props:["index","value"],name:"LivoloSwitch",data:function(){return{switchIndex:this.value.switchIndex,name:this.value.name,names:this.value.names,type:this.value.type,dimmer:this.value.dimmer||!1}},computed:{id:function(){return this.name.toLowerCase().replace(/[^a-z0-9]/g,"_")}},methods:{updateModel:function(){this.$emit("input",{switchIndex:this.switchIndex,name:this.name,names:this.names,type:parseInt(this.type),dimmer:this.dimmer})},removeSwitch:function(){this.$emit("remove",this.index)}}}),u=d,m=a("2877"),p=Object(m["a"])(u,c,l,!1,null,null,null),v=p.exports,h={props:["value"],components:{LivoloSwitch:v},data:function(){return{switches:this.value,switchIndex:0}},methods:{addSwitch:function(e){this.switchIndex++,this.switches.push({switchIndex:this.switchIndex,name:"Livolo Switch "+this.switchIndex,names:["Switch "+this.switchIndex+" gang 1","Switch "+this.switchIndex+" gang 2","Switch "+this.switchIndex+" gang 3"],type:e,dimmer:!1}),this.storeSwitches()},removeSwitch:function(e){this.switches.splice(e,1),this.storeSwitches()},storeSwitches:function(){window.localStorage&&(localStorage.setItem("livolo-rf-codes.switches",JSON.stringify(this.switches)),localStorage.setItem("livolo-rf-codes.switchIndex",this.switchIndex))},loadFromStorage:function(){if(window.localStorage){var e=localStorage.getItem("livolo-rf-codes.switches");e&&(this.switches=JSON.parse(e));var t=localStorage.getItem("livolo-rf-codes.switchIndex");t&&(this.switchIndex=t)}}},watch:{switches:function(e){this.$emit("input",e)}},mounted:function(){this.loadFromStorage()}},g=h,f=Object(m["a"])(g,o,r,!1,null,null,null),_=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container border border-top-0 p-2"},[e._m(0),e._m(1),a("div",{staticClass:"alert alert-primary border border-primary"},[e._m(2),a("Prism",{attrs:{language:"yaml"}},[e._v(e._s(e.script))])],1),a("div",{staticClass:"alert alert-primary"},[e._m(3),a("ul",e._l(e.scripts,(function(t,n){return a("li",{key:n},[a("b",[e._v(e._s(t))])])})),0)]),a("div",{staticClass:"alert alert-primary"},[e._m(4),a("Prism",{attrs:{language:"yaml"}},[e._v(e._s(e.lovelace))])],1)])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("span",{staticClass:"badge badge-info"},[e._v("2")]),e._v(" Home Assistant configuration")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert alert-primary border border-primary"},[a("h5",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("1")]),e._v(" Setup Broadlink remote: "),a("a",{attrs:{href:"https://www.home-assistant.io/integrations/broadlink/",target:"_blank"}},[e._v("https://www.home-assistant.io/integrations/broadlink/")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("2")]),e._v(" Add the configuration for the lights in a new "),a("a",{attrs:{href:"https://www.home-assistant.io/docs/configuration/packages/",target:"_blank"}},[e._v("package")]),e._v(" or in your main "),a("code",[e._v("configuration.yaml")]),e._v(" file: ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("3")]),e._v(" Restart your HA server and check under "),a("b",[e._v("Configuration")]),e._v(" > "),a("b",[e._v("Scripts")]),e._v(" that the following new scripts are present: ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h5",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("4")]),a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Add a simple "),a("code",[e._v("glance")]),e._v(" card to the Lovelace UI to monitor the state of the lights: ")])}],y=a("d4ec"),C=a("bee2"),I=(a("d3b7"),a("159b"),a("25f0"),a("4d90"),a("99af"),a("38cf"),a("a15b"),a("d81d"),a("466d"),function(){function e(t){Object(y["a"])(this,e),this.id=t||this.generateId()}return Object(C["a"])(e,[{key:"incrementId",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.id=this.generateNextId(this.id,e)}},{key:"generateId",value:function(){var t=Math.round(13616*Math.random())+16384;while(!e.idIsValid(t))t++;return t}},{key:"generateNextId",value:function(t,a){t++;while(!e.idIsValid(t,a))t++;return t}},{key:"getButtonCode",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;if("rmpro"==t)return this.getButtonCodeRmPro(e,a);if("rm4pro"==t)return this.getButtonCodeRm4Pro(e,a);throw"code generation for remote model "+t+" not supported!"}},{key:"getButtonCodeRmPro",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;(t<50||t>255)&&(t=200);var a="b2"+t.toString(16)+"260013",n=this.id.toString(2).padStart(16,"0"),i=e.toString(2).padStart(7,"0"),s=n.concat(i);s=s.replace(/0/g,"0606"),s=s.replace(/1/g,"0c");var o=a+s,r=32-(o.length-24)%32;return o+="".padStart(r,"0"),this.hexToBase64(o)}},{key:"getButtonCodeRm4Pro",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;(t<50||t>255)&&(t=200);var a="b2"+t.toString(16)+"b004009f06002004",n=this.id.toString(2).padStart(16,"0"),i=e.toString(2).padStart(7,"0"),s=n.concat(i);s=s.replace(/0/g,"0606"),s=s.replace(/1/g,"0c"),s="13"+s;var o=a+s.repeat(15),r=32-(o.length-24)%32;return o+="".padStart(r,"0"),this.hexToBase64(o)}},{key:"hexToBase64",value:function(e){return btoa(e.match(/\w{2}/g).map((function(e){return String.fromCharCode(parseInt(e,16))})).join(""))}}]),e}());I.buttons={btn1:0,btn2:96,btn3:120,btn4:24,btn5:108,btn6:80,btn7:48,btn8:12,btn9:72,btn10:40,scn1:90,scn2:114,scn3:10,scn4:18,off:106,dimToggle:8,dimUp:16,dimDown:56},I.idIsValid=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var a=e.toString(2);if(e<16399||e>32767)return!1;var n=a.match(/1/g).length;return!(n<5)&&(t?n%2==0:n%2==1)}return!1};var k=I,A=a("8f3c"),S=a.n(A),x=function(){function e(t){Object(y["a"])(this,e),this.value=t}return Object(C["a"])(e,[{key:"toString",value:function(){return this.value}}]),e}(),E={identify:function(e){return e instanceof x},tag:"!secret",resolve:function(e,t){return new x(t.strValue)}};S.a.defaultOptions.customTags=[E];var O={props:["value","options"],data:function(){return{}},computed:{secrets:function(){return"# Broadlink universal remote\nbroadlink_ip: 192.168.x.x\nbroadlink_mac: C8:F7:42:XX:XX:XX"},remote:function(){return"remote:\n  - platform: broadlink\n    host: !secret broadlink_ip\n    mac: !secret broadlink_mac\n    timeout: 30\n\n# switch is required to be able to use broadlink.send service\nswitch:\n  - platform: broadlink\n    host: !secret broadlink_ip\n    mac: !secret broadlink_mac\n    timeout: 30"},script:function(){var e,t=this,a=[],n={},i={},s={},o=null;if(window.localStorage&&(o=parseInt(localStorage.getItem("livolo-rf-codes.remoteId")),!k.idIsValid(o))){var r=new k;o=r.id,localStorage.setItem("livolo-rf-codes.remoteId",o)}return o?e=new k(o):(e=new k,window.localStorage&&localStorage.setItem("livolo-rf-codes.remoteId",e.id)),this.value.forEach((function(o){for(var r=0;r<o.type;r++){var c,l=o.names[r].toLowerCase().replace(/[^a-z0-9]/g,"_");c=1==o.dimmer?e.getButtonCode(k.buttons.btn1,t.options.remote_model,128):e.getButtonCode(k.buttons.btn10,t.options.remote_model,128),n[l]={friendly_name:o.names[r],value_template:"{{ is_state('input_boolean."+l+"', 'on') }}",turn_on:{service:"script."+l+"_on"},turn_off:{service:"script."+l+"_off"}},a.push("light."+l),i[l+"_toggle"]={alias:o.names[r]+" TOGGLE",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+c}},{service:"input_boolean.toggle",data:{entity_id:"input_boolean."+l}}]},i[l+"_on"]={alias:o.names[r]+" ON",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+e.getButtonCode(k.buttons.scn1,t.options.remote_model)}},{service:"input_boolean.turn_on",data:{entity_id:"input_boolean."+l}}]},i[l+"_off"]={alias:o.names[r]+" OFF",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+e.getButtonCode(k.buttons.scn2,t.options.remote_model)}},{service:"input_boolean.turn_off",data:{entity_id:"input_boolean."+l}}]},o.dimmer&&(e.incrementId(!0),i[l+"_dim_toggle"]={alias:o.names[r]+" DIM LEARN",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+e.getButtonCode(k.buttons.dimToggle,t.options.remote_model,128)}},{service:"input_boolean.toggle",data:{entity_id:"input_boolean."+l}}]},i[l+"_dim_up"]={alias:o.names[r]+" DIM +",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+e.getButtonCode(k.buttons.dimUp,t.options.remote_model,64)}},{service:"input_boolean.turn_on",data:{entity_id:"input_boolean."+l}}]},i[l+"_dim_down"]={alias:o.names[r]+" DIM -",sequence:[{service:"remote.send_command",target:{entity_id:t.options.entity_id},data:{command:"b64:"+e.getButtonCode(k.buttons.dimDown,t.options.remote_model,64)}}]}),s[l]={name:o.names[r],icon:"mdi:light-switch"},e.incrementId()}})),S.a.stringify({light:[{platform:"template",lights:n},{platform:"group",name:"All Livolo lights",entities:a}],script:i,input_boolean:s})},scripts:function(){var e=[];return this.value.forEach((function(t){for(var a=0;a<t.type;a++)e.push(t.names[a]+" TOGGLE"),e.push(t.names[a]+" ON"),e.push(t.names[a]+" OFF")})),e},lovelace:function(){var e={type:"glance",entities:[]};return this.value.forEach((function(t){for(var a=0;a<t.type;a++)e.entities.push({entity:"light."+t.names[a].toLowerCase().replace(/[^a-z0-9]/g,"_"),name:t.names[a]})})),S.a.stringify(e)}}},R=O,j=Object(m["a"])(R,b,w,!1,null,null,null),M=j.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container border border-top-0 p-2"},[e._m(0),a("p",[e._v("For each gang of every switch you have to do the following:")]),e._m(1),a("p",[e._v("Below you will find an example for the first gang of the first switch you defined:")]),a("div",{staticClass:"alert alert-primary border border-primary"},[a("dl",[a("dt",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("1")]),e._v(" Teach the gang "),a("code",[e._v(e._s(e.value[0].names[0]))]),e._v(" the TOGGLE code ")]),a("dd",[a("ul",[e._m(2),a("li",[e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" TOGGLE")]),e._v(". You should hear another "),a("mark",[e._v("beep")]),e._v(" signifying that the switch learned the new remote code. "),a("br")]),a("li",[a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" TOGGLE")]),e._v(" to check if the switch turns on and off. ")])])]),a("dt",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("2")]),e._v(" Teach the gang "),a("code",[e._v(e._s(e.value[0].names[0]))]),e._v(" the ON code ")]),a("dd",[a("ul",[e._m(3),e._m(4),a("li",[e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" ON")]),e._v(". You should hear another "),a("mark",[e._v("beep")]),e._v(" signifying that the switch learned the new remote scene code. "),a("br")]),a("li",[a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Turn the gang off and run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" ON")]),e._v(" to check if the switch turns on. ")])])]),a("dt",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("3")]),e._v(" Teach the gang "),a("code",[e._v(e._s(e.value[0].names[0]))]),e._v(" the OFF code ")]),a("dd",[a("ul",[e._m(5),e._m(6),a("li",[e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" OFF")]),e._v(". You should hear another "),a("mark",[e._v("beep")]),e._v(" signifying that the switch learned the new remote scene code. "),a("br")]),a("li",[a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Turn the gang on and run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" OFF")]),e._v(" to check if the switch turns off. ")])])]),e.value[0].dimmer?[a("dt",[a("span",{staticClass:"badge badge-pill badge-success"},[e._v("4")]),e._v(" Teach the gang "),a("code",[e._v(e._s(e.value[0].names[0]))]),e._v(" the DIM LEARN code ")]),a("dd",[a("ul",[e._m(7),a("li",[e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" DIM LEARN")]),e._v(". You should hear another "),a("mark",[e._v("beep")]),e._v(" signifying that the switch learned the new remote code. "),a("br")]),a("li",[a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Run the script named "),a("code",[e._v(e._s(e.value[0].names[0])+" DIM LEARN")]),e._v(" to check if the switch turns on and off. ")]),a("li",[a("span",{staticClass:"badge badge-secondary"},[e._v("Optional")]),e._v(" Run the scripts named "),a("code",[e._v(e._s(e.value[0].names[0])+" DIM +")]),e._v(" and "),a("code",[e._v(e._s(e.value[0].names[0])+" DIM -")]),e._v(" to check if the switch dims up or down. ")])])])]:e._e()],2)])])},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("span",{staticClass:"badge badge-info"},[e._v("3")]),e._v(" Pair the switches by teaching them the remote codes ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Teach the gang the TOGGLE code")]),a("li",[e._v("Teach the gang the ON scene")]),a("li",[e._v("Teach the gang the OFF scene")]),a("li",[e._v("Teach the gang the DIM LEARN code (only for dimmers, allows usage of DIM + and DIM - scripts)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Press and hold the gang until you hear a "),a("mark",[e._v("beep")]),e._v(" (about 5 seconds). ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Press and hold the gang until you hear a "),a("mark",[e._v("beep")]),e._v(" (about 5 seconds). ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"badge badge-success"},[e._v("Important")]),e._v(" Press (not hold) the gang until it is turned on. You have to press it at least once. For example if the gang is already on you have to press once to turn it off and then once more to turn it back on again. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Press and hold the gang until you hear a "),a("mark",[e._v("beep")]),e._v(" (about 5 seconds). ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("span",{staticClass:"badge badge-success"},[e._v("Important")]),e._v(" Press (not hold) the gang until it is turned off. You have to press it at least once. For example if the gang is already off you have to press once to turn it on and then once more to turn it back off again. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e._v(" Press and hold the gang until you hear a "),a("mark",[e._v("beep")]),e._v(" (about 5 seconds). ")])}],D={props:["value"]},B=D,P=Object(m["a"])(B,T,N,!1,null,null,null),U=P.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container border border-top-0 p-2"},[e._m(0),a("div",{staticClass:"form-inline mb-5"},[a("label",{staticClass:"my-1 mr-2",attrs:{for:"newId"}},[e._v("Remote base ID")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newId,expression:"newId"}],staticClass:"form-control",class:{"is-invalid":!e.valid},attrs:{id:"newId",type:"number"},domProps:{value:e.newId},on:{input:function(t){t.target.composing||(e.newId=t.target.value)}}}),a("a",{staticClass:"btn btn-primary m-2",class:{disabled:!e.valid},attrs:{href:"javascript:void(0)"},on:{click:e.updateId}},[e._v("Update")]),a("a",{staticClass:"btn btn-info",attrs:{href:"javascript:void(0)"},on:{click:e.regenerateId}},[e._v("Regenerate")])]),a("div",{staticClass:"alert alert-primary"},[e._v("Save and restore your switch settings")]),a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"},on:{click:e.saveConfig}},[e._v("Download")])]),a("div",{staticClass:"col"},[a("div",{staticClass:"custom-file"},[a("input",{ref:"customConfigFile",staticClass:"custom-file-input",attrs:{type:"file",id:"customConfigFile"},on:{change:e.loadConfig}}),a("label",{staticClass:"custom-file-label",attrs:{for:"customConfigFile","data-browse":"Restore"}},[e._v(e._s(e.configUploadName))])]),null!=e.configUploadError?a("div",{staticClass:"alert alert-danger mt-2 p-1"},[e._v(e._s(e.configUploadError))]):e._e(),null!=e.configUploadSuccess?a("div",{staticClass:"alert alert-success mt-2 p-1"},[e._v("Configuration restored")]):e._e()])])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert alert-primary"},[e._v("In case the generated base remote id does not work, you can generate a new one or specify one manually. "),a("b",[e._v("This will reset all the codes for all the switches.")])])}],F=a("1da1"),Y=(a("96cf"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),{data:function(){return{newId:this.remoteId,configUploadName:"Choose configuration file",configUploadError:null,configUploadSuccess:null}},computed:{remoteId:function(){return window.localStorage?parseInt(localStorage.getItem("livolo-rf-codes.remoteId")):null},switches:function(){return window.localStorage?JSON.parse(localStorage.getItem("livolo-rf-codes.switches")):null},switchIndex:function(){return window.localStorage?localStorage.getItem("livolo-rf-codes.switchIndex"):null},valid:function(){return k.idIsValid(parseInt(this.newId))}},methods:{updateId:function(){window.localStorage&&this.valid&&localStorage.setItem("livolo-rf-codes.remoteId",parseInt(this.newId))},regenerateId:function(){var e=new k;this.newId=e.id,this.updateId()},saveConfig:function(){var e={remoteId:this.remoteId,switches:this.switches,switchIndex:this.switchIndex},t=JSON.stringify(e),a=new Blob([t],{type:"text/plain"}),n=document.createEvent("MouseEvents"),i=document.createElement("a");i.download="livolo-rf-codes-config.json",i.href=window.URL.createObjectURL(a),i.dataset.downloadurl=["text/json",i.download,i.href].join(":"),n.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(n)},loadConfig:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var a,n,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.configUploadError=null,e.configUploadSuccess=null,!e.$refs.customConfigFile.files||1!=e.$refs.customConfigFile.files.length){t.next=33;break}if(a=e.$refs.customConfigFile.files[0],e.configUploadName=a.name,!a.type||"application/json"==a.type){t.next=8;break}return e.configUploadError="Invalid file type",t.abrupt("return",!1);case 8:return t.prev=8,t.next=11,a.text();case 11:if(n=t.sent,t.prev=12,i=JSON.parse(n),!(i.remoteId&&i.switches&&i.switchIndex)){t.next=19;break}s=confirm("Are you sure you want to overwrite your current configuration ?"),1==s&&window.localStorage?(localStorage.setItem("livolo-rf-codes.remoteId",parseInt(i.remoteId)),localStorage.setItem("livolo-rf-codes.switchIndex",parseInt(i.switchIndex)),localStorage.setItem("livolo-rf-codes.switches",JSON.stringify(i.switches)),e.configUploadSuccess=!0,e.$emit("reloadStorage")):(e.$refs.customConfigFile.value="",e.configUploadName="Choose configuration file"),t.next=21;break;case 19:return e.configUploadError="Invalid configuration file structure",t.abrupt("return",!1);case 21:t.next=27;break;case 23:return t.prev=23,t.t0=t["catch"](12),e.configUploadError="Error parsing configuration file",t.abrupt("return",!1);case 27:t.next=33;break;case 29:return t.prev=29,t.t1=t["catch"](8),e.configUploadError="Error loading configuration file",t.abrupt("return",!1);case 33:case"end":return t.stop()}}),t,null,[[8,29],[12,23]])})))()}},mounted:function(){this.newId=this.remoteId}}),G=Y,Q=Object(m["a"])(G,L,J,!1,null,null,null),H=Q.exports,V={name:"app",components:{Switches:_,HAConfig:M,Pairing:U,Advanced:H},data:function(){return{switches:[],step:1,options:{entity_id:"remote.broadlink_remote",remote_model:"rmpro"}}},methods:{switchStep:function(e){this.step=e},reloadStorage:function(){this.step=1},selectRemoteModel:function(){"rmpro"===this.options.remote_model?this.options.entity_id="remote.broadlink_remote":"rm4pro"===this.options.remote_model&&(this.options.entity_id="remote.broadlink_rm4_pro_remote")}}},W=V,Z=Object(m["a"])(W,i,s,!1,null,null,null),X=Z.exports,q=a("2f62");n["a"].use(q["a"]);var z=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),K=(a("f9e3"),a("c197"),a("457d"),a("e391"),a("3d82"),a("7362"),a("6b2c"),a("8d51")),$=a.n(K);n["a"].component("Prism",$.a),n["a"].config.productionTip=!1,new n["a"]({store:z,render:function(e){return e(X)}}).$mount("#app")},"82b5":function(e,t,a){e.exports=a.p+"img/livolo1.274da2a6.jpg"},"890a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},d6d7:function(e,t,a){e.exports=a.p+"img/livolo3.b8cdfbb5.jpg"}});
//# sourceMappingURL=app.45c4894f.js.map