smalltalk.addPackage('Maglev-Vendor', {});
smalltalk.addClass('MaglevAjax', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.addMethod(
unescape('_ajax_data_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3A'),
fn: function (aString, data){
var self=this;
 var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	}
	else {
		return result.result;
	} ;
return self;}
}),
smalltalk.MaglevAjax.klass);

smalltalk.addMethod(
unescape('_ajax_data_withCallback_'),
smalltalk.method({
selector: unescape('ajax%3Adata%3AwithCallback%3A'),
fn: function (aString, data, aBlock){
var self=this;
 $.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: true, complete: function(response) {
		var result = $.parseJSON(response.responseText);
		if (result.success === false) {
			self.error('Server call failed: ' + result.exception);
		} else {
			aBlock._value_(result.result);
		}
	}}); ;
return self;}
}),
smalltalk.MaglevAjax.klass);


smalltalk.addClass('MaglevJsPlumb', smalltalk.Object, [], 'Maglev-Vendor');

smalltalk.MaglevJsPlumb.klass.iVarNames = ['sourceTarget','defaults','referenceConnection','instanceOfConnection','virtualClassConnection','superclassConnection','connection'];
smalltalk.addMethod(
unescape('_connectWindow_to_as_with_'),
smalltalk.method({
selector: unescape('connectWindow%3Ato%3Aas%3Awith%3A'),
fn: function (sourceWindow, targetWindow, cType, caption){
var self=this;
try{var params=nil;
var type=nil;
var defParams=nil;
var sourceEl=nil;
var targetEl=nil;
var text=nil;
((($receiver = smalltalk.send(sourceWindow, "__eq", [targetWindow])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_connectWindow_to_as_with_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_connectWindow_to_as_with_', fn: function(){return self}})})();})]));
(type=smalltalk.send(smalltalk.send(self, "_connection", []), "_at_", [cType]));
(sourceEl=smalltalk.send(smalltalk.send(sourceWindow, "_container", []), "_asJQuery", []));
(targetEl=smalltalk.send(smalltalk.send(targetWindow, "_container", []), "_asJQuery", []));
(($receiver = caption) == nil || $receiver == undefined) ? (function(){return (text="");})() : (function(){return (text=smalltalk.send(caption, "_asString", []));})();
((($receiver = smalltalk.send(text, "__eq", [""])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (text=smalltalk.send(smalltalk.send(unescape("%3Cspan%20class%3D%22component%20object-ivname-box%22%20style%3D%22white-space%3A%20nowrap%3B%22%3E"), "__comma", [text]), "__comma", [unescape("%3C/span%3E")]));})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (text=smalltalk.send(smalltalk.send(unescape("%3Cspan%20class%3D%22component%20object-ivname-box%22%20style%3D%22white-space%3A%20nowrap%3B%22%3E"), "__comma", [text]), "__comma", [unescape("%3C/span%3E")]));})]));
 params = $.extend(true, {}, type); 
	params.source = sourceEl;
	params.target = targetEl; 
	params.overlays[1][1].label = text; ;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_connect_", [params]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_connectWindow_to_as_with_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_connectWindow_to_with_'),
smalltalk.method({
selector: unescape('connectWindow%3Ato%3Awith%3A'),
fn: function (sourceWindow, targetWindow, parameters){
var self=this;
try{var params=nil;
var type=nil;
var defParams=nil;
((($receiver = smalltalk.send(sourceWindow, "__eq", [targetWindow])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_connectWindow_to_with_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_connectWindow_to_with_', fn: function(){return self}})})();})]));
(type=smalltalk.send(smalltalk.send(self, "_connection", []), "_at_", [smalltalk.send(parameters, "_at_", [smalltalk.symbolFor("type")])]));
 params = $.extend(true, {}, defParams); ;
(function($rec){smalltalk.send($rec, "_basicAt_put_", ["source", smalltalk.send(sourceWindow, "_container", [])]);return smalltalk.send($rec, "_basicAt_put_", ["target", smalltalk.send(targetWindow, "_container", [])]);})(params);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_connect_", [params]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_connectWindow_to_with_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_connection'),
smalltalk.method({
selector: unescape('connection'),
fn: function (){
var self=this;
return self['@connection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constConnection'),
smalltalk.method({
selector: unescape('constConnection'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("iv"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("hashKey"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("hashValue"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("arrayElement"), self['@referenceConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("class"), self['@instanceOfConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("virtualClass"), self['@virtualClassConnection']]);smalltalk.send($rec, "_at_put_", [smalltalk.symbolFor("superclass"), self['@superclassConnection']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constDefaults'),
smalltalk.method({
selector: unescape('constDefaults'),
fn: function (){
var self=this;
 return {
		Connector: ["Bezier", {curviness: 50}],
		DragOptions: {cursor: "pointer", zIndex: 2000},
		PaintStyle: {strokeStyle: "gray", lineWidth: 2},
		Endpoint: ["Dot",{radius: 1}],
		EndpointStyle: {radius: 1, fillStyle: "gray"},
		HoverPaintStyle: {strokeStyle: "#ec9f2e"},
		EndpointHoverStyle: {fillStyle: "#ec9f2e"},
		Anchors: ["BottomCenter", "TopCenter"]}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constInstanceOfConnection'),
smalltalk.method({
selector: unescape('constInstanceOfConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#9b59bb",
			dashstyle:"4 2",
			joinstyle:"miter"}}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constReferenceConnection'),
smalltalk.method({
selector: unescape('constReferenceConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]]}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constSourceTarget'),
smalltalk.method({
selector: unescape('constSourceTarget'),
fn: function (){
var self=this;
 return {
		dropOptions: {
			hoverClass:"dragHover"
		},
 		anchor: "Continuous"}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constSuperclassConnection'),
smalltalk.method({
selector: unescape('constSuperclassConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["PlainArrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#346789",
			joinstyle:"miter"}}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_constVirtualClassConnection'),
smalltalk.method({
selector: unescape('constVirtualClassConnection'),
fn: function (){
var self=this;
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#c50b0b",
			dashstyle:"4 2",
			joinstyle:"miter"}}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_defaults'),
smalltalk.method({
selector: unescape('defaults'),
fn: function (){
var self=this;
return self['@defaults'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_deleteEndpointsFor_'),
smalltalk.method({
selector: unescape('deleteEndpointsFor%3A'),
fn: function (anObject){
var self=this;
var endpoints=nil;
(endpoints=smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_getEndpoints_", [anObject]));
(($receiver = endpoints) != nil && $receiver != undefined) ? (function(){return smalltalk.send(endpoints, "_do_", [(function(endpoint){return smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_deleteEndpoint_", [endpoint]);})]);})() : nil;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initializeConstants", []);
smalltalk.send(self, "_initializeJsPlumb", []);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeChromeFix'),
smalltalk.method({
selector: unescape('initializeChromeFix'),
fn: function (){
var self=this;
 document.onselectstart = function() {
		return false;
	}; ;
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeConstants'),
smalltalk.method({
selector: unescape('initializeConstants'),
fn: function (){
var self=this;
(self['@sourceTarget']=smalltalk.send(self, "_constSourceTarget", []));
(self['@defaults']=smalltalk.send(self, "_constDefaults", []));
(self['@referenceConnection']=smalltalk.send(self, "_constReferenceConnection", []));
(self['@instanceOfConnection']=smalltalk.send(self, "_constInstanceOfConnection", []));
(self['@virtualClassConnection']=smalltalk.send(self, "_constVirtualClassConnection", []));
(self['@superclassConnection']=smalltalk.send(self, "_constSuperclassConnection", []));
(self['@connection']=smalltalk.send(self, "_constConnection", []));
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_initializeJsPlumb'),
smalltalk.method({
selector: unescape('initializeJsPlumb'),
fn: function (){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_bind_a_", ["ready", (function(){smalltalk.send(self, "_initializeChromeFix", []);smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_setRenderMode_", [smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_SVG", [])]);return smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_importDefaults_", [self['@defaults']]);})]);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_instanceOfConnection'),
smalltalk.method({
selector: unescape('instanceOfConnection'),
fn: function (){
var self=this;
return self['@instanceOfConnection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_prepareObject_'),
smalltalk.method({
selector: unescape('prepareObject%3A'),
fn: function (anObject){
var self=this;
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_draggable_", [anObject]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeSource_a_", [anObject, self['@sourceTarget']]);
smalltalk.send((typeof jsPlumb == 'undefined' ? nil : jsPlumb), "_makeTarget_a_", [anObject, self['@sourceTarget']]);
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_referenceConnection'),
smalltalk.method({
selector: unescape('referenceConnection'),
fn: function (){
var self=this;
return self['@referenceConnection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_sourceTarget'),
smalltalk.method({
selector: unescape('sourceTarget'),
fn: function (){
var self=this;
return self['@sourceTarget'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);

smalltalk.addMethod(
unescape('_virtualClassConnection'),
smalltalk.method({
selector: unescape('virtualClassConnection'),
fn: function (){
var self=this;
return self['@virtualClassConnection'];
return self;}
}),
smalltalk.MaglevJsPlumb.klass);


