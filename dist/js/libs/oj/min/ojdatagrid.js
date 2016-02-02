/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/internal-deps/datagrid/DvtDataGrid","promise","ojs/ojcomponentcore","ojs/ojdatasource-common","ojs/ojarraydatagriddatasource","ojs/ojflattenedtreedatagriddatasource","ojs/ojpagingdatagriddatasource","ojs/ojinputnumber","ojs/ojmenu","ojs/ojdialog","ojs/ojpagingcontrol"],function(b,f,a){b.Vh=function(a,c){this.Qpa=a;this.qqa=c;this.Pa={};this.Pa.datagrid="oj-datagrid";this.Pa.cell="oj-datagrid-cell";this.Pa.cellcontent="oj-datagrid-cell-content";this.Pa.celltext="oj-datagrid-cell-text";
this.Pa.banded="oj-datagrid-banded";this.Pa.row="oj-datagrid-row";this.Pa.databody="oj-datagrid-databody";this.Pa.topcorner="oj-datagrid-top-corner";this.Pa.bottomcorner="oj-datagrid-bottom-corner";this.Pa.rowheaderspacer="oj-datagrid-row-header-spacer";this.Pa.colheaderspacer="oj-datagrid-column-header-spacer";this.Pa.status="oj-datagrid-status";this.Pa.emptytext="oj-datagrid-empty-text";this.Pa.header="oj-datagrid-header";this.Pa.groupingcontainer="oj-datagrid-header-grouping";this.Pa.headercell=
"oj-datagrid-header-cell";this.Pa.headercelltext="oj-datagrid-header-cell-text";this.Pa.headercellcontent="oj-datagrid-header-cell-content";this.Pa.rowheader="oj-datagrid-row-header";this.Pa.colheader="oj-datagrid-column-header";this.Pa.colheadercell="oj-datagrid-column-header-cell";this.Pa.rowheadercell="oj-datagrid-row-header-cell";this.Pa["scroller-mobile"]="oj-datagrid-scroller-touch";this.Pa.scroller="oj-datagrid-scroller";this.Pa.scrollers="oj-datagrid-scrollers";this.Pa.focus="oj-focus";this.Pa.hover=
"oj-hover";this.Pa.active="oj-active";this.Pa.selected="oj-selected";this.Pa.disabled="oj-disabled";this.Pa.enabled="oj-enabled";this.Pa["default"]="oj-default";this.Pa.sortcontainer="oj-datagrid-sort-icon-container";this.Pa.sortascending="oj-datagrid-sort-ascending-icon";this.Pa.sortdescending="oj-datagrid-sort-descending-icon";this.Pa.icon="oj-component-icon";this.Pa.clickableicon="oj-clickable-icon-nocontext";this.Pa.info="oj-helper-hidden-accessible";this.Pa.rowexpander="oj-rowexpander";this.Pa.cut=
"oj-datagrid-cut";this.Pa.selectaffordancetop="oj-datagrid-touch-selection-affordance-top";this.Pa.selectaffordancebottom="oj-datagrid-touch-selection-affordance-bottom";this.Pa.toucharea="oj-datagrid-touch-area";this.Pa.draggable="oj-draggable";this.Pa.drag="oj-drag";this.Pa.drop="oj-drop";this.Pa.activedrop="oj-active-drop";this.Pa.validdrop="oj-valid-drop";this.Pa.invaliddrop="oj-invalid-drop";this.jh={};this.jh.sortCol="oj-datagrid-sortCol";this.jh.sortColAsc="oj-datagrid-sortColAsc";this.jh.sortColDsc=
"oj-datagrid-sortColDsc";this.jh.sortRow="oj-datagrid-sortRow";this.jh.sortRowAsc="oj-datagrid-sortRowAsc";this.jh.sortRowDsc="oj-datagrid-sortRowDsc";this.jh.resize="oj-datagrid-resize";this.jh.resizeWidth="oj-datagrid-resizeWidth";this.jh.resizeHeight="oj-datagrid-resizeHeight";this.jh.cut="oj-datagrid-cut";this.jh.paste="oj-datagrid-paste";this.jh.discontiguousSelection="oj-datagrid-discontiguousSelection";this.attributes={};this.attributes.key="data-oj-key";this.attributes.context="data-oj-context";
this.attributes.resizable="data-oj-resizable";this.attributes.sortable="data-oj-sortable";this.attributes.sortDir="data-oj-sortdir";this.attributes.expander="data-oj-expander";this.attributes.expanderIndex="data-oj-expander-index";this.attributes.container=b.Components.qn;this.attributes.extent="data-oj-extent";this.attributes.start="data-oj-start";this.attributes.depth="data-oj-depth";this.attributes.level="data-oj-level";this.attributes.tabMod="data-oj-tabmod"};o_("DataGridResources",b.Vh,b);b.Vh.prototype.S3=
function(){return"rtl"===this.Qpa?!0:!1};b.b.g("DataGridResources.prototype.isRTLMode",{S3:b.Vh.prototype.S3});b.Vh.prototype.t3=function(a,b){return this.qqa(a,b)};b.b.g("DataGridResources.prototype.getTranslatedText",{t3:b.Vh.prototype.t3});b.Vh.prototype.LN=function(a){return null!=a?this.Pa[a]:null};b.b.g("DataGridResources.prototype.getMappedStyle",{LN:b.Vh.prototype.LN});b.Vh.prototype.hE=function(a){return null!=a?this.jh[a]:null};b.b.g("DataGridResources.prototype.getMappedCommand",{hE:b.Vh.prototype.hE});
b.Vh.prototype.KN=function(a){return null!=a?this.attributes[a]:null};b.b.g("DataGridResources.prototype.getMappedAttribute",{KN:b.Vh.prototype.KN});b.ya("oj.ojDataGrid",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{bandingInterval:{row:0,column:0},data:null,gridlines:{horizontal:"visible",vertical:"visible"},scrollPosition:null,selectionMode:null,dnd:{reorder:{row:"disable"}},scrollPolicy:"auto",selection:[],currentCell:null,header:{row:{className:null,renderer:null,resizable:{width:"disable",
height:"disable"},sortable:"auto",style:null},column:{className:null,renderer:null,resizable:{width:"disable",height:"disable"},sortable:"auto",style:null}},cell:{className:null,renderer:null,style:null},resize:null,sort:null,optionChange:null,ready:null,scroll:null,beforeCurrentCell:null},_ComponentCreate:function(){this._super();this.root=this.element[0];this.qh=this.root.getAttribute("id");this.tU();this.C_();this.grid=new a;this.grid.setVisibility(a.VISIBILITY_STATE_RENDER);f(this.root).addClass("oj-datagrid oj-component");
this.QO={data:"all",header:["className","renderer","style","template"]}},lf:function(){this.Ik(this.root);f(this.root).empty();this._super();this.Cr=new b.Vh(this.dc(),this.WB.bind(this));this.W_();this.Zt();null!=this.lc&&(this.sA(),this.grid.SetDataSource(this.lc));this.grid.SetOptions(this.options);this.grid.SetResources(this.Cr);this.grid.SetCreateContextCallback(this.Rha.bind(this));this.grid.SetRemoveCallback(this.nL.bind(this));this.grid.SetCreateReadyPromiseCallback(this.tU.bind(this));this.grid.SetResolveReadyPromiseCallback(this.C_.bind(this));
this.Jx();this.ux();null!=this.lc&&this.xj(this.root)},Jx:function(){var a=this;this.grid.addListener("resize",function(b){a._trigger("resize",b.event,b.ui)});this.grid.addListener("select",function(b){a.option("selection",b.ui.selection,{_context:{originalEvent:b.event,Va:!0},changed:!0})});this.grid.addListener("currentCell",function(b){a.option("currentCell",b.ui,{_context:{originalEvent:b.event,Va:!0},changed:!0})});this.grid.addListener("beforeCurrentCell",function(b){return a._trigger("beforeCurrentCell",
b.event,b.ui)});this.grid.addListener("sort",function(b){a._trigger("sort",b.event,b.ui)});this.grid.addListener("keydown",function(b){a._trigger("keydown",b.event,b.ui)});this.grid.addListener("ready",function(){a._trigger("ready",null,{})});this.grid.addListener("scroll",function(b){a._trigger("scroll",b.event,b.ui)})},refresh:function(){this._super();this.Ik(this.root);f(this.root).empty();!0===this.uma&&(this.options.contextMenu=null);this.W_();null!=this.lc&&(this.lc instanceof b.ab&&(this.lc.Oe(),
this.lc.Init()),this.sA(),this.grid.SetDataSource(this.lc));this.grid.SetOptions(this.options);this.grid.SetResources(this.Cr);this.grid.getVisibility()!=a.VISIBILITY_STATE_RENDER&&this.grid.setVisibility(a.VISIBILITY_STATE_REFRESH);this.ux();null!=this.lc&&this.xj(this.root)},_destroy:function(){null!=this.lc&&this.lc.Oe&&this.lc.Oe();this.grid.destroy();this.Ik(this.root);f(this.root).empty()},_setOptions:function(a,b){var e;this.lc?(e=this.qla(a),this._super(a,b),e?this.refresh():this.grid.UpdateOptions(a)):
(this._super(a,b),null!=a.data&&this.refresh())},tl:function(){this._super();this.ux()},sl:function(){this._super();this.grid.getVisibility()===a.VISIBILITY_STATE_VISIBLE&&this.grid.setVisibility(a.VISIBILITY_STATE_HIDDEN)},pn:function(){this._super();this.ux()},li:function(){this._super();this.grid.getVisibility()===a.VISIBILITY_STATE_VISIBLE&&this.grid.setVisibility(a.VISIBILITY_STATE_HIDDEN)},qla:function(a){var c,e,g,f,k,l;g=!1;for(e in a)if(e in this.QO)if("data"===e){g=!0;break}else if("header"==
e)for(f in a.header){if("column"==f||"row"==f||"cell"==f)for(k in a.header[f]){for(c=0;c<this.QO.header.length;c++)if(k==this.QO.header[c])for(l in this.options.header[f])if(l==k&&a.header[f][k]!=this.options.header[f][k]){g=!0;break}if(g)break}if(g)break}else for(l in this.options)if(l==e&&!b.b.kh(a[e],this.options[l])){g=!0;break}return g},qC:function(a,b){return this.options.header[a]&&this.options.header[a].resizable?"disable"!==this.options.header[a].resizable[b]:!1},yY:function(a){return this.options.header[a]?
"disable"!==this.options.header[a].sortable:!1},sA:function(){var a,c,e=null,g=null,h=null,k=null,l,m;a=this;if(null==this.options.contextMenu){if(null!=this.lc){c=f("\x3cul\x3e");c.css("display","none").attr("id",this.qh+"contextmenu");f(this.root).append(c);if(this.qC("column","width")||this.qC("column","height")||this.qC("row","width")||this.qC("row","height"))e=this.qi("resize");l=this.lc.getCapability("sort");!this.yY("column")||"column"!==l&&"full"!==l||(g=this.qi("sortCol"));!this.yY("row")||
"row"!==l&&"full"!==l||(g=null!=g?g.add(this.qi("sortRow")):this.qi("sortRow"));if("enable"===this.options.dnd.reorder.row)switch(this.lc.getCapability("move")){case "none":break;default:k=this.gg("cut").add(this.gg("paste"))}this.sj()&&b.v.Rd()&&(this.aB=!1,h=this.gg("discontiguousSelection"));if(null!=e||null!=g||null!=k||null!=h)c.append(e).append(g).append(k).append(h),c.ojMenu(),this.uma=!0,this._setOption("contextMenu","#"+c.attr("id")),c.on("ojselect",this.qj.bind(this))}}else null==this.HK&&
(this.HK=[]),c=f(this.options.contextMenu),e=c.find("[data-oj-command]"),m=[],e.each(function(){var b;b=f(this).children("a");if(0===b.length||-1!=a.HK.indexOf(b.get(0)))b=f(this).attr("data-oj-command").split("-"),b=a.qi(b[b.length-1]),f(this).replaceWith(b),m.push(b.children("a").get(0))}),this.HK=m,c.data("oj-ojMenu")&&c.ojMenu("refresh"),c.on("ojselect",this.qj.bind(this))},qi:function(a){if("resize"===a)return this.gg("resize").append(f("\x3cul\x3e\x3c/ul\x3e").append(this.gg("resizeWidth")).append(this.gg("resizeHeight")));
if("sortCol"===a)return this.gg("sortCol").append(f("\x3cul\x3e\x3c/ul\x3e").append(this.gg("sortColAsc")).append(this.gg("sortColDsc")));if("sortRow"===a)return this.gg("sortRow").append(f("\x3cul\x3e\x3c/ul\x3e").append(this.gg("sortRowAsc")).append(this.gg("sortRowDsc")));if(-1!=Object.keys(this.Cr.jh).indexOf(a))return f(this.gg(a))},gg:function(a){var b=f("\x3cli\x3e\x3c/li\x3e");b.attr("data-oj-command",this.Ll(a));b.append(this.jH(a));return b},jH:function(a){var b="label"+a.charAt(0).toUpperCase()+
a.slice(1);"discontiguousSelection"===a&&(b="labelEnableNonContiguous");return f('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.WB(b))},WV:function(){return f(this.options.contextMenu).get(0)},WB:function(a,b){return this.A(a,b)},Kfa:function(){var a=f("#"+this.qh+"spinner").ojInputNumber("option","value");f("#"+this.qh+"dialog").ojDialog("close");this.grid.handleContextMenuReturn(this.vu,this.Nj,a);this.vu.target.focus()},T$:function(a,b){var e,g,h,k,l;e=f("#"+this.qh+"dialog");h=f("#"+this.qh+"spinner");
0===e.length||0===h.length?(e=f("\x3cdiv\x3e"),e.attr("id",this.qh+"dialog"),e.attr("title",a),g=f('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'),k=f('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'),e.append(g).append(k),h=f('\x3cinput id\x3d"'+this.qh+'spinner"/\x3e'),l=f('\x3cbutton id\x3d"'+this.qh+'dialogsubmit"/\x3e'),g.append(h),k.append(l),f(this.root).append(e),l.ojButton({O:"ojButton",label:this.WB("labelResizeDialogSubmit")}),l.on("click",this.Kfa.bind(this)),h.ojInputNumber({O:"ojInputNumber",
max:1E3,min:20,step:1,value:b}),e.ojDialog({initialVisibility:"show",position:{my:"center center",at:"center center",collision:"none",of:f(this.root)}})):(h.ojInputNumber("option","value",b),f("#"+this.qh+"dialog").ojDialog("open"))},qj:function(a,b){var e;this.Nj=b.item.attr("data-oj-command");this.Nj===this.Ll("sortColAsc")||this.Nj===this.Ll("sortColDsc")||this.Nj===this.Ll("cut")||this.Nj===this.Ll("paste")?this.grid.handleContextMenuReturn(this.vu,this.Nj,null):this.Nj===this.Ll("resizeWidth")||
this.Nj===this.Ll("resizeHeight")?(e=f(this.vu.target).closest("."+this.Md("cell")),0==e.length&&(e=f(this.vu.target).closest("."+this.Md("headercell"))),0<e.length&&(e=this.Nj===this.Ll("resizeWidth")?e.outerWidth():e.outerHeight(),this.T$(b.item.text(),e))):this.Nj===this.Ll("discontiguousSelection")&&(this.aB=!this.aB,this.grid.handleContextMenuReturn(this.vu,this.Nj,this.aB),e=this.aB?"labelDisableNonContiguous":"labelEnableNonContiguous",b.item.children().first().text(this.WB(e)))},pf:function(a,
b,e){this.grid.handleContextMenuGesture(b,e,this.Naa.bind(this))},Naa:function(a,b,e){var g;null!=a&&(this.vu=b.originalEvent,g=a.launcher,a=a.capabilities,this.Fha(a),g="keyboard"===e?{position:{of:g},launcher:f(g)}:{launcher:f(g)},this.rf(b,e,g))},Q9:function(a){var b;b=f(this.WV());b.find("[data-oj-command\x3d"+a+"]").hasClass("oj-disabled")||b.find("[data-oj-command\x3d"+a+"]").addClass("oj-disabled")},Aja:function(a){f(this.WV()).find("[data-oj-command\x3d"+a+"]").removeClass("oj-disabled")},
Fha:function(a){var b,e;for(b in a)a.hasOwnProperty(b)&&(e=this.Cr.hE(b),"disable"===a[b]?this.Q9(e):this.Aja(e))},vV:function(a){var b;b=a.parent();a=a.index();return{rowIndex:b.index(),columnIndex:a}},fra:function(a){var b;b=this.lea().children().eq(0).children().eq(a.rowIndex+1);a=this.gda().children().eq(0).children().eq(a.columnIndex);return{rowHeader:b,columnHeader:a}},dW:function(){return f(this.root)},gda:function(){return f("#"+this.qh+"\\:columnHeader")},lea:function(){return f("#"+this.qh+
"\\:rowHeader")},mda:function(){return f("#"+this.qh+"\\:databody ."+this.Md("row"))},W_:function(){this.lc=null!=this.options.data?this.options.data:null},Zt:function(){var a=this.options.selection;null!=a&&this.grid.SetSelection(a)},Rha:function(a){a.component=b.Components.Nf(this.element,"ojDataGrid")},WC:function(a){this.grid.SetAccessibleContext(a)},Ik:function(a){a&&this.Ge&&b.v.Pi(a,this.Ge)},xj:function(a){a&&(null==this.Ge&&(this.Ge=this.Ve.bind(this)),b.v.Nh(a,this.Ge))},Ve:function(a,b){0<
a&&0<b&&(this.ux(),this.grid.HandleResize(a,b))},getNodeBySubId:function(a){var b,e,g,h;if(null==a)return this.element?this.element[0]:null;b=a.subId;if("oj-datagrid-cell"===b)b=a.rowIndex-this.grid.getStartRow(),a=a.columnIndex-this.grid.getStartColumn(),g=this.mda().eq(b).children().eq(a);else if("oj-datagrid-sort-icon"===b||"oj-datagrid-sort-ascending"===b||"oj-datagrid-sort-descending"===b||"oj-datagrid-header"===b){h=a.axis;g=a.index;a=null==a.level?0:a.level;"column"===h?e=this.fW(g,a,f("#"+
this.qh+"\\:columnHeader"),this.grid.getStartColumnHeader()):"row"===h&&(e=this.fW(g,a,f("#"+this.qh+"\\:rowHeader"),this.grid.getStartRowHeader()));if(null==e)return null;if("oj-datagrid-sort-icon"===b)return e.children("."+this.Md("sortcontainer")).children().get(0);g="oj-datagrid-sort-ascending"===b?e.find("."+this.Md("sortascending")):"oj-datagrid-sort-descending"===b?e.find("."+this.Md("sortdescending")):e}return null!=g&&0<g.length?g[0]:null},getSubIdByNode:function(a){var b,e;b=f(a).closest("."+
this.Md("cell"));if(0<b.length)return a=this.vV(b),{subId:"oj-datagrid-cell",rowIndex:a.rowIndex+this.grid.getStartRow(),columnIndex:a.columnIndex+this.grid.getStartColumn()};e=f(a).closest("."+this.Md("headercell"));return 0<e.length?(b=e[0][this.nj("context")],a=f(a).hasClass(this.Md("sortascending"))?"oj-datagrid-sort-ascending":f(a).hasClass(this.Md("sortdescending"))?"oj-datagrid-sort-descending":"oj-datagrid-header",{subId:a,axis:b.axis,index:this.gW(e),level:b.level}):null},getContextByNode:function(a){var b;
b=f(a).closest("."+this.Md("cell"));if(0<b.length)return a=b[0][this.nj("context")],b=this.vV(b),{subId:"oj-datagrid-cell",component:a.component,data:a.data,datasource:a.datasource,indexes:{row:b.rowIndex+this.grid.getStartRow(),column:b.columnIndex+this.grid.getStartColumn()},keys:{row:a.keys.row,column:a.keys.column}};b=f(a).closest("."+this.Md("headercell"));return 0<b.length?(a=b[0][this.nj("context")],{subId:"oj-datagrid-header",axis:a.axis,component:a.component,data:a.data,datasource:a.datasource,
depth:a.depth,extent:a.extent,index:this.gW(b),key:a.key,level:a.level}):null},Md:function(a){return this.Cr.LN(a)},nj:function(a){return this.Cr.KN(a)},Ll:function(a){return this.Cr.hE(a)},Sga:function(){return null!=this.root.offsetParent?!0:!1},ux:function(){var b=this.grid.getVisibility();this.Sga()?(b===a.VISIBILITY_STATE_RENDER?this.grid.render(this.root):b===a.VISIBILITY_STATE_REFRESH&&this.grid.refresh(this.root),this.grid.setVisibility(a.VISIBILITY_STATE_VISIBLE)):b===a.VISIBILITY_STATE_VISIBLE&&
this.grid.setVisibility(a.VISIBILITY_STATE_HIDDEN)},fW:function(a,b,e,g){if(0>b)return null;if(e.children().first().children().last().hasClass(this.Md("headercell")))return e.children().first().children("."+this.Md("headercell")).eq(a-g);e=this.eW(a,b,0,e.children().first().children());if(null==e)return null;if(b<=parseInt(e.attr(this.nj("level")),10)+parseInt(e.children().eq(0).attr(this.nj("depth")),10)-1)return e.children().eq(0);g=parseInt(e.attr(this.nj("start")),10);a=a-g+1;return e.children().eq(a)},
eW:function(a,b,e,g){var f,k,l,m;if(null==g.eq(1)||g.eq(1).hasClass(this.Md("headercell")))return b===e?g.eq(0).parent():null;f=g.parent().parent();for(l=f.hasClass(this.Md("colheader"))||f.hasClass(this.Md("rowheader"))?0:1;l<g.length;l++)if(f=parseInt(g.eq(l).attr(this.nj("start")),10),k=parseInt(g.eq(l).attr(this.nj("extent")),10),m=parseInt(g.eq(l).children().eq(0).attr(this.nj("depth")),10),a>=f&&a<f+k)return b<e+m?g.eq(l):this.eW(a,b,e+m,g.eq(l).children());return null},gW:function(a){var b;
if(a.parent().hasClass(this.Md("groupingcontainer"))){b=parseInt(a.parent().attr(this.nj("start")),10);if(a.get(0)===a.parent().children(":first").get(0))return b;b--}else b=a.hasClass(this.Md("rowheadercell"))?this.grid.getStartRowHeader():this.grid.getStartColumnHeader();return b+=a.index()},kra:function(a){var b;return a.parent().hasClass(this.Md("groupingcontainer"))?(b=parseInt(a.parent().attr(this.nj("level")),10),a.get(0)===a.parent().children(":first").get(0)?b:b+1):0},sj:function(){return null==
this.options.selectionMode||"multiple"!==this.options.selectionMode.row&&"multiple"!==this.options.selectionMode.cell?!1:!0},nL:function(a){f(a).remove()},scrollTo:function(a){this.grid.scroll(a)},whenReady:function(){return this.bja},tU:function(){var a=this;this.bja=new Promise(function(b){a.cja=b})},C_:function(){this.cja(null)}})});