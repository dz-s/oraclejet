/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(b,f){b.ya("oj.inputBase",f.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS:[{V:"disabled",xc:!0},{V:"pattern"},{V:"placeholder"},{V:"value"},{V:"readonly",option:"readOnly",xc:!0},{V:"required",Ze:!0,xc:!0},{V:"title"}],_INPUT_HELPER_KEY:"",HQ:"blur",CR:"keydown",sR:"input",cR:"drop",options:{converter:void 0,placeholder:void 0,
rawValue:void 0,readOnly:!1},Lv:function(a){var b=this._superApply(arguments);this.Mia();return b},Xd:function(a,d){this._super(a,d);b.ve.Vk(this._GET_INIT_OPTIONS_PROPS,d,this)},_ComponentCreate:function(){var a=this.element,b=this._superApply(arguments),c=this.mR(a),e=this.options.readOnly;this.yj="rtl"===this.dc();"boolean"===typeof e&&this.element.prop("readonly",e);this.Bv()&&(this.Ama(),this.dR()&&this.zma());"pattern"in c&&a.removeAttr("pattern");this.eI={};this.hd=null;return b},lf:function(){var a=
this._superApply(arguments),b=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.iT();this.QF();f.each(["disabled","readOnly"],function(a,e){b.options[e]&&b.wZ(e,b.options[e])});return a},wZ:function(a,b){"disabled"===a&&this.element.prop("disabled",b);"readOnly"===a&&(this.element.prop("readonly",b),this.NC("readOnly",b));"disabled"!==a&&"readOnly"!==a||this.iT()},_setOption:function(a,d){var c=this._superApply(arguments);"disabled"!==a&&"readOnly"!==a||this.wZ(a,d);"pattern"===
a&&(this.eI[b.cd.VALIDATOR_TYPE_REGEXP]=this.hW(),this.bs());return c},_destroy:function(){var a=this._superApply(arguments);this.element.off("blur drop keydown input");this.pK&&this.pK.remove();this.Bv()&&(this.dR()?b.v.unwrap(this.element,this.lu):b.v.unwrap(this.element));return a},iT:function(){if(!this.options.readOnly&&!this.options.disabled){this.hd={};var a=f.proxy(this.QK,this),b=f.proxy(this.FC,this),c=f.proxy(this.kia,this),e=function(){this.focus()};this.element.on("blur",a);this.element.on("keydown",
b);this.element.on("input",c);this.element.on("drop",e);this.hd[this.HQ]=a;this.hd[this.CR]=b;this.hd[this.sR]=c;this.hd[this.cR]=e}else if(this.hd)for(a=[this.HQ,this.CR,this.sR,this.cR],b=0,c=a.length;b<c;b++)this.hd[a[b]]&&(this.element.off(a[b],this.hd[a[b]]),delete this.hd[a[b]])},un:{readOnly:"oj-read-only"},Mia:function(){for(var a=this._ATTR_CHECK,b=0,c=a.length;b<c;b++){var e=a[b].attr;"setMandatory"in a[b]&&this.element.attr(e,a[b].setMandatory)}},QK:function(a){this.gc(this.eg(),a)},FC:function(a){a.keyCode===
f.ui.keyCode.ENTER&&this.gc(this.eg(),a)},kia:function(a){this.Cs(this.Wd().val(),a)},Bv:function(){return this._WIDGET_CLASS_NAMES},dR:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},Ama:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));this.lu=this.element.parent()},zma:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES))},QF:function(){if(this._INPUT_HELPER_KEY&&this.Bv()){var a=this.element.attr("aria-describedby")||
"",b=this.hn(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",a+(" "+b));this.pK=f("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+b+"'\x3e"+this.$j(this.A(this._INPUT_HELPER_KEY))+"\x3c/div\x3e");this.RF().append(this.pK)}},$j:function(a){return f("\x3cspan\x3e"+a+"\x3c/span\x3e").text()},RF:function(){return this.widget()},Dv:function(){var a=this._superApply(arguments);this.options.pattern&&(this.eI[b.cd.VALIDATOR_TYPE_REGEXP]=this.hW());return f.extend(this.eI,a)},NC:function(a,
b){-1!=Object.keys(this.un).indexOf(a)&&this.widget().toggleClass(this.un[a],!!b)},hW:function(){if(!this.options.pattern)return null;var a={pattern:this.options.pattern,label:this.eJ()};f.extend(a,this.options.translations.regexp||{});return b.pa.Kr(b.cd.VALIDATOR_TYPE_REGEXP).createValidator(a)},hn:function(a){return this.uuid+"_"+a},Sqa:function(){return this.yj},refresh:function(){var a=this._superApply(arguments);this.yj="rtl"===this.dc();return a},getNodeBySubId:function(a){return this._super(a)},
widget:function(){return this.Bv()?this.lu:this.element}},!0);b.ya("oj.ojInputPassword",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputpassword-input"===c&&(b=this.element?this.element[0]:null));return b||
null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}});b.ya("oj.ojTextArea",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-textarea-input"===c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-textarea"},
Nz:function(){return"oj-inputBase"}});b.ya("oj.ojInputText",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputtext-input"===c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},
Nz:function(){return"oj-inputBase"}})});