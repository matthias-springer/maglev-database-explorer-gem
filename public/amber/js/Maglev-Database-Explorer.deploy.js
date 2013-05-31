smalltalk.addPackage('Maglev-Database-Explorer', {});
smalltalk.addClass('MaglevDraggableObject', smalltalk.Widget, ['content'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
fn: function (){
var self=this;
return self['@content'];
return self;}
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
fn: function (anObject){
var self=this;
(self['@content']=anObject);
return self;}
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_class_with_", [unescape("draggable-new-object-container"), (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);
return self;}
}),
smalltalk.MaglevDraggableObject);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_content_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevDraggableObject.klass);


smalltalk.addClass('MaglevGsNMethodEditor', smalltalk.Widget, ['object', 'editorContainer', 'errorBox', 'rubyIcon', 'stIcon', 'envIdContainer', 'sourceLocationContainer', 'editor', 'editorHeight', 'editorWidth', 'classObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(5)])]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_classObject_'),
smalltalk.method({
selector: unescape('classObject%3A'),
fn: function (anObject){
var self=this;
(self['@classObject']=anObject);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_commandSave'),
smalltalk.method({
selector: unescape('commandSave'),
fn: function (){
var self=this;
var selectedCategory=nil;
smalltalk.send(self['@errorBox'], "_hide", []);
smalltalk.send(smalltalk.send(self['@errorBox'], "_asJQuery", []), "_empty", []);
((($receiver = smalltalk.send(smalltalk.send(self, "_envId", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileRubySourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileRubySourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);}), (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})]));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_envId'),
smalltalk.method({
selector: unescape('envId'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(2)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_filename'),
smalltalk.method({
selector: unescape('filename'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(4)]), "_at_", [(1)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
fn: function (){
var self=this;
var params=nil;
var extraKeys=nil;
(extraKeys=(function($rec){smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-S"), (function(){return smalltalk.send(self, "_commandSave", []);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(params=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["mode", unescape("text/x-ruby")]);smalltalk.send($rec, "_basicAt_put_", ["styleActiveLine", true]);smalltalk.send($rec, "_basicAt_put_", ["lineNumbers", true]);smalltalk.send($rec, "_basicAt_put_", ["matchBrackets", true]);smalltalk.send($rec, "_basicAt_put_", ["extraKeys", extraKeys]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(self['@editor']=smalltalk.send((smalltalk.CodeMirror || CodeMirror), "_value_value_", [smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_at_", [(0)]), params]));
smalltalk.send(self['@editor'], "_setValue_", [""]);
smalltalk.send(self, "_mouseFix", []);
smalltalk.send(self, "_makeEditorResizable", []);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_lineInFile'),
smalltalk.method({
selector: unescape('lineInFile'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(4)]), "_at_", [(2)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_makeEditorResizable'),
smalltalk.method({
selector: unescape('makeEditorResizable'),
fn: function (){
var self=this;
 self['@editorContainer']._asJQuery().find('.CodeMirror').resizable({
		resize: function() {	
			self['@editor'].setSize($(this).width(), $(this).height());	
		}
	}); ;
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_methodObject'),
smalltalk.method({
selector: unescape('methodObject'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
fn: function (){
var self=this;
 var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderEditorOn_'),
smalltalk.method({
selector: unescape('renderEditorOn%3A'),
fn: function (html){
var self=this;
(self['@editorContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));
smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);
(self['@errorBox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("alert%20alert-error")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
fn: function (){
var self=this;
var envId=nil;
smalltalk.send(self['@editor'], "_setValue_", [smalltalk.send(self, "_sourceString", [])]);
smalltalk.send(self['@editorContainer'], "_show", []);
(envId=smalltalk.send(self, "_envId", []));
smalltalk.send(smalltalk.send(self['@envIdContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@envIdContainer'], "_with_", [envId]);
smalltalk.send(self['@sourceLocationContainer'], "_empty", []);
((($receiver = smalltalk.send(envId, "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@sourceLocationContainer'], "_with_", [smalltalk.send(self, "_filename", [])]);smalltalk.send(self['@stIcon'], "_hide", []);smalltalk.send(self['@rubyIcon'], "_show", []);return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);})() : (function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [unescape("n/a")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@sourceLocationContainer'], "_with_", [smalltalk.send(self, "_filename", [])]);smalltalk.send(self['@stIcon'], "_hide", []);smalltalk.send(self['@rubyIcon'], "_show", []);return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);}), (function(){return smalltalk.send(self['@sourceLocationContainer'], "_with_", [unescape("n/a")]);})]));
((($receiver = smalltalk.send(envId, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_show", []);smalltalk.send(self['@rubyIcon'], "_hide", []);return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_show", []);smalltalk.send(self['@rubyIcon'], "_hide", []);return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})]));
((($receiver = ((($receiver = envId).klass === smalltalk.Number) ? $receiver >(1) : smalltalk.send($receiver, "__gt", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(self['@stIcon'], "_hide", []);return smalltalk.send(self['@rubyIcon'], "_hide", []);})]));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderEditorOn_", [html]);
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(self, "_renderMethodObject", []);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderStatusBarOn_'),
smalltalk.method({
selector: unescape('renderStatusBarOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", [(function(){(self['@rubyIcon']=(function($rec){smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])));(self['@stIcon']=(function($rec){smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])));smalltalk.send(html, "_with_", [self['@rubyIcon']]);smalltalk.send(html, "_with_", [self['@stIcon']]);return (self['@envIdContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Environment ID"]));})]);return smalltalk.send($rec, "_style_", [unescape("width%3A%201px%3B")]);})(smalltalk.send(html, "_td", []));return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){return (self['@sourceLocationContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Source location"]));})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
fn: function (aDescription){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@errorBox'], "_asJQuery", [])]));
smalltalk.send(html, "_with_", [smalltalk.send(aDescription, "_inlineViewComponent", [])]);
smalltalk.send(self['@errorBox'], "_show", []);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%23ff0039")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalSuccess'),
smalltalk.method({
selector: unescape('signalSuccess'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%233fb618")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_sourceOffset'),
smalltalk.method({
selector: unescape('sourceOffset'),
fn: function (){
var self=this;
return (-1);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_sourceString'),
smalltalk.method({
selector: unescape('sourceString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(1)]);
return self;}
}),
smalltalk.MaglevGsNMethodEditor);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevGsNMethodEditor.klass);


smalltalk.addClass('MaglevGsNMethodDebugEditor', smalltalk.MaglevGsNMethodEditor, ['argValueBox', 'argSelect'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_argAndTempNames'),
smalltalk.method({
selector: unescape('argAndTempNames'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(9)]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_argOrTempValue_'),
smalltalk.method({
selector: unescape('argOrTempValue%3A'),
fn: function (anInteger){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(smalltalk.send(self['@object'], "_at_", [(11)]), "_at_", [anInteger])]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_methodObject'),
smalltalk.method({
selector: unescape('methodObject'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(1)]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_ownerSelf'),
smalltalk.method({
selector: unescape('ownerSelf'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(self['@object'], "_at_", [(8)])]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(self['@object'], "_at_", [(10)])]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderArg'),
smalltalk.method({
selector: unescape('renderArg'),
fn: function (){
var self=this;
var argIndex=nil;
var argValue=nil;
(argIndex=((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@argSelect'], "_asJQuery", []), "_at_", [(0)]), "_selectedIndex", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
((($receiver = smalltalk.send(argIndex, "__eq", [(-1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (argValue=smalltalk.send(self, "_ownerSelf", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (argValue=smalltalk.send(self, "_ownerSelf", []));})]));
((($receiver = smalltalk.send(argIndex, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (argValue=smalltalk.send(self, "_receiver", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (argValue=smalltalk.send(self, "_receiver", []));})]));
((($receiver = ((($receiver = argIndex).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (argValue=smalltalk.send(self, "_argOrTempValue_", [argIndex]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (argValue=smalltalk.send(self, "_argOrTempValue_", [argIndex]));})]));
smalltalk.send(smalltalk.send(self['@argValueBox'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@argValueBox'], "_with_", [smalltalk.send(argValue, "_inlineViewComponent", [])]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderArgsOn_'),
smalltalk.method({
selector: unescape('renderArgsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){(self['@argSelect']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28self%29")]);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28receiver%29")]);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_argAndTempNames", []), "_do_", [(function(arg){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [arg]);})]);})]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_renderArg", []);})]);})(smalltalk.send(html, "_select", [])));return (self['@argValueBox']=smalltalk.send(html, "_div", []));})]);return (function($rec){smalltalk.send($rec, "_with_", [(function(){return (self['@argValueBox']=smalltalk.send(html, "_div", []));})]);return smalltalk.send($rec, "_style_", [unescape("padding-left%3A%205px%3B")]);})(smalltalk.send(html, "_td", []));})]);})]);})]);return smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B")]);})(smalltalk.send(html, "_table", []));
smalltalk.send(self, "_renderArg", []);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
fn: function (){
var self=this;
var rangeFrom=nil;
var rangeTo=nil;
smalltalk.send(self, "_renderMethodObject", [], smalltalk.MaglevGsNMethodEditor);
 self['@editor'].setSelection(
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}, 
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}); ;
smalltalk.send(self['@editor'], "_replaceSelection_", [unescape("%u26A1")]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderEditorOn_", [html]);
smalltalk.send(self, "_renderArgsOn_", [html]);
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(self, "_renderMethodObject", []);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffset'),
smalltalk.method({
selector: unescape('sourceOffset'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(12)]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffsetX'),
smalltalk.method({
selector: unescape('sourceOffsetX'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_at_", [(13)]), "_at_", [(1)]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffsetY'),
smalltalk.method({
selector: unescape('sourceOffsetY'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_at_", [(13)]), "_at_", [(2)]);
return self;}
}),
smalltalk.MaglevGsNMethodDebugEditor);



smalltalk.addClass('MaglevHaltedThreadListener', smalltalk.Object, ['container', 'interval', 'timer', 'renderedOops', 'html', 'navbar'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@container']=smalltalk.send(unescape("%23halted-threads-navigation"), "_asJQuery", []));
(self['@navbar']=smalltalk.send(unescape("%23halted-threads-navbar"), "_asJQuery", []));
smalltalk.send(self['@navbar'], "_hide", []);
(self['@html']=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [self['@container']]));
(self['@renderedOops']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_interval'),
smalltalk.method({
selector: unescape('interval'),
fn: function (){
var self=this;
(($receiver = self['@interval']) == nil || $receiver == undefined) ? (function(){return (self['@interval']=(2500));})() : $receiver;
return self['@interval'];
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_interval_'),
smalltalk.method({
selector: unescape('interval%3A'),
fn: function (aNumber){
var self=this;
(self['@interval']=aNumber);
 clearInterval(self['@timer']); ;
smalltalk.send(self, "_startPolling", []);
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["noBehavior", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_evalObject", []), "_evaluateWithoutUpdate_language_with_withCallback_", ["MaglevDatabaseExplorer.halted_threads", "ruby", params, (function(success, obj){var currentOops=nil;
return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){(currentOops=smalltalk.send((smalltalk.Set || Set), "_new", []));smalltalk.send(obj, "_do_", [(function(el){((($receiver = smalltalk.send(self['@renderedOops'], "_includesKey_", [smalltalk.send(el, "_oop", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})]));return smalltalk.send(currentOops, "_add_", [smalltalk.send(el, "_oop", [])]);})]);smalltalk.send(self['@renderedOops'], "_keysAndValuesDo_", [(function(oop, comp){return ((($receiver = smalltalk.send(currentOops, "_includes_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})]));})]);return ((($receiver = smalltalk.send(smalltalk.send(self['@renderedOops'], "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@navbar'], "_hide", []);})() : (function(){return smalltalk.send(self['@navbar'], "_show", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@navbar'], "_hide", []);}), (function(){return smalltalk.send(self['@navbar'], "_show", []);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(currentOops=smalltalk.send((smalltalk.Set || Set), "_new", []));smalltalk.send(obj, "_do_", [(function(el){((($receiver = smalltalk.send(self['@renderedOops'], "_includesKey_", [smalltalk.send(el, "_oop", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})]));return smalltalk.send(currentOops, "_add_", [smalltalk.send(el, "_oop", [])]);})]);smalltalk.send(self['@renderedOops'], "_keysAndValuesDo_", [(function(oop, comp){return ((($receiver = smalltalk.send(currentOops, "_includes_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})]));})]);return ((($receiver = smalltalk.send(smalltalk.send(self['@renderedOops'], "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@navbar'], "_hide", []);})() : (function(){return smalltalk.send(self['@navbar'], "_show", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@navbar'], "_hide", []);}), (function(){return smalltalk.send(self['@navbar'], "_show", []);})]));})]));})]);
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_removeObject_with_'),
smalltalk.method({
selector: unescape('removeObject%3Awith%3A'),
fn: function (oop, component){
var self=this;
smalltalk.send(smalltalk.send(component, "_asJQuery", []), "_remove", []);
smalltalk.send(self['@renderedOops'], "_removeKey_", [oop]);
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_renderObject_with_'),
smalltalk.method({
selector: unescape('renderObject%3Awith%3A'),
fn: function (oop, component){
var self=this;
var inlineContainer=nil;
(inlineContainer=(function($rec){smalltalk.send($rec, "_style_", [unescape("padding%3A%204px%202px%202px%204px%3B")]);return smalltalk.send($rec, "_with_", [component]);})(smalltalk.send(self['@html'], "_span", [])));
smalltalk.send(self['@renderedOops'], "_at_put_", [oop, inlineContainer]);
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
fn: function (){
var self=this;
(self['@timer']=smalltalk.send(self, "_startPolling", []));
return self;}
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_startPolling'),
smalltalk.method({
selector: unescape('startPolling'),
fn: function (){
var self=this;
 return setInterval(function() {self._refresh();}, self._interval()); ;
return self;}
}),
smalltalk.MaglevHaltedThreadListener);


smalltalk.MaglevHaltedThreadListener.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.MaglevHaltedThreadListener.klass);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_instance", []), "_start", []);
return self;}
}),
smalltalk.MaglevHaltedThreadListener.klass);


smalltalk.addClass('MaglevIcon', smalltalk.Widget, ['b', 'icon', 'spin', 'caption'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_caption'),
smalltalk.method({
selector: unescape('caption'),
fn: function (){
var self=this;
return self['@caption'];
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_caption_'),
smalltalk.method({
selector: unescape('caption%3A'),
fn: function (aString){
var self=this;
(self['@caption']=aString);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function (){
var self=this;
smalltalk.send(self['@b'], "_hide", []);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon'),
smalltalk.method({
selector: unescape('icon'),
fn: function (){
var self=this;
(($receiver = self['@icon']) == nil || $receiver == undefined) ? (function(){return (self['@icon']="star");})() : $receiver;
return self['@icon'];
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon_'),
smalltalk.method({
selector: unescape('icon%3A'),
fn: function (aString){
var self=this;
(self['@icon']=aString);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_onClick_'),
smalltalk.method({
selector: unescape('onClick%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@b'], "_onClick_", [aBlock]);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var cssClass=nil;
(cssClass=smalltalk.send(unescape("icon-"), "__comma", [smalltalk.send(self, "_icon", [])]));
((($receiver = smalltalk.send(self, "_spin", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})]));
(($receiver = self['@caption']) == nil || $receiver == undefined) ? (function(){return (self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));})() : (function(){(self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), self['@caption']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));return smalltalk.send(smalltalk.send(self['@b'], "_asJQuery", []), "_tooltip", []);})();
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
smalltalk.send(self['@b'], "_show", []);
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin'),
smalltalk.method({
selector: unescape('spin'),
fn: function (){
var self=this;
(($receiver = self['@spin']) == nil || $receiver == undefined) ? (function(){return (self['@spin']=false);})() : $receiver;
return self['@spin'];
return self;}
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin_'),
smalltalk.method({
selector: unescape('spin%3A'),
fn: function (aBoolean){
var self=this;
(self['@spin']=aBoolean);
return self;}
}),
smalltalk.MaglevIcon);


smalltalk.addMethod(
unescape('_codeFork'),
smalltalk.method({
selector: unescape('codeFork'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("code-fork")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_flag'),
smalltalk.method({
selector: unescape('flag'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["flag"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_globe'),
smalltalk.method({
selector: unescape('globe'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["globe"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_hdd'),
smalltalk.method({
selector: unescape('hdd'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["hdd"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_listAlt'),
smalltalk.method({
selector: unescape('listAlt'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("list-alt")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_move'),
smalltalk.method({
selector: unescape('move'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["move"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pause'),
smalltalk.method({
selector: unescape('pause'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pause"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pencil'),
smalltalk.method({
selector: unescape('pencil'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pencil"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_play'),
smalltalk.method({
selector: unescape('play'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["play"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_playCircle'),
smalltalk.method({
selector: unescape('playCircle'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("play-circle")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["remove"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_resizeSmall'),
smalltalk.method({
selector: unescape('resizeSmall'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("resize-small")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["search"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_star'),
smalltalk.method({
selector: unescape('star'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["star"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_stop'),
smalltalk.method({
selector: unescape('stop'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["stop"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_terminal'),
smalltalk.method({
selector: unescape('terminal'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["terminal"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_trash'),
smalltalk.method({
selector: unescape('trash'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["trash"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_wait'),
smalltalk.method({
selector: unescape('wait'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["refresh"]);smalltalk.send($rec, "_spin_", [true]);smalltalk.send($rec, "_caption_", ["Loading..."]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIcon.klass);


smalltalk.addClass('MaglevIconImage', smalltalk.Widget, ['src', 'cssClass', 'image', 'hidden'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_cssClass_'),
smalltalk.method({
selector: unescape('cssClass%3A'),
fn: function (aString){
var self=this;
(self['@cssClass']=aString);
return self;}
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_hidden'),
smalltalk.method({
selector: unescape('hidden'),
fn: function (){
var self=this;
(($receiver = self['@hidden']) == nil || $receiver == undefined) ? (function(){return (self['@hidden']=false);})() : $receiver;
return self['@hidden'];
return self;}
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function (){
var self=this;
(self['@hidden']=true);
(($receiver = self['@image']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@image'], "_hide", []);})() : nil;
return self;}
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@image']=(function($rec){smalltalk.send($rec, "_src_", [self['@src']]);return smalltalk.send($rec, "_class_", [self['@cssClass']]);})(smalltalk.send(html, "_img", [])));
((($receiver = smalltalk.send(self, "_hidden", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@image'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@image'], "_hide", []);})]));
return self;}
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
(self['@hidden']=false);
(($receiver = self['@image']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@image'], "_show", []);})() : nil;
return self;}
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
fn: function (aString){
var self=this;
(self['@src']=aString);
return self;}
}),
smalltalk.MaglevIconImage);


smalltalk.addMethod(
unescape('_rails'),
smalltalk.method({
selector: unescape('rails'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/rails_tiny.png")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_ruby'),
smalltalk.method({
selector: unescape('ruby'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/ruby.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_rubySmalltalkBridge'),
smalltalk.method({
selector: unescape('rubySmalltalkBridge'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/ruby_smalltalk_bridge.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_smalltalk'),
smalltalk.method({
selector: unescape('smalltalk'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/smalltalk.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevIconImage.klass);


smalltalk.addClass('MaglevListBox', smalltalk.Widget, ['list', 'changedCallback', 'htmlIv', 'divContainer', 'height', 'searchbox', 'searchInput', 'olContainer', 'olHeightBeforeSearch'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindEvents'),
smalltalk.method({
selector: unescape('bindEvents'),
fn: function (){
var self=this;
 self['@list']._asJQuery().selectable({
		stop: function() {self._selectionChanged();},
		tolerance: 'fit'}); ;
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_changedCallback_'),
smalltalk.method({
selector: unescape('changedCallback%3A'),
fn: function (aBlock){
var self=this;
(self['@changedCallback']=aBlock);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_commandFind'),
smalltalk.method({
selector: unescape('commandFind'),
fn: function (){
var self=this;
(self['@olHeightBeforeSearch']=smalltalk.send(self, "_height", []));
smalltalk.send(self['@searchbox'], "_show", []);
smalltalk.send(self, "_height_", [smalltalk.send(self, "_height", [])]);
smalltalk.send(smalltalk.send(self['@searchInput'], "_asJQuery", []), "_focus", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_filterResults'),
smalltalk.method({
selector: unescape('filterResults'),
fn: function (){
var self=this;
var text=nil;
(text=smalltalk.send(smalltalk.send(self['@searchInput'], "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_each_", [(function(idx, htmlEl){var el=nil;
 el = $(htmlEl); ;return ((($receiver = smalltalk.send(smalltalk.send(el, "_text", []), "_includesSubString_", [text])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(el, "_show", []);})() : (function(){return smalltalk.send(el, "_hide", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(el, "_show", []);}), (function(){return smalltalk.send(el, "_hide", []);})]));})]);
smalltalk.send(self, "_hideSearchBox", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_focus'),
smalltalk.method({
selector: unescape('focus'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_focus", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@olContainer'], "_asJQuery", []), "_height", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
fn: function (anInteger){
var self=this;
var searchboxHeight=nil;
((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_is_", [":visible"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (searchboxHeight=((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)])));})() : (function(){return (searchboxHeight=(0));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (searchboxHeight=((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)])));}), (function(){return (searchboxHeight=(0));})]));
(self['@height']=anInteger);
smalltalk.send(smalltalk.send(self['@olContainer'], "_asJQuery", []), "_css_data_", ["height", smalltalk.send(smalltalk.send(((($receiver = anInteger).klass === smalltalk.Number) ? $receiver -searchboxHeight : smalltalk.send($receiver, "__minus", [searchboxHeight])), "_asString", []), "__comma", ["px"])]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_hide", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_hideSearchBox'),
smalltalk.method({
selector: unescape('hideSearchBox'),
fn: function (){
var self=this;
smalltalk.send(self['@searchbox'], "_hide", []);
smalltalk.send(self, "_height_", [self['@olHeightBeforeSearch']]);
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_focus", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_makeResizable'),
smalltalk.method({
selector: unescape('makeResizable'),
fn: function (){
var self=this;
 self['@olContainer']._asJQuery().resizable({handles: 's'}); ;
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_moveSelectionDown'),
smalltalk.method({
selector: unescape('moveSelectionDown'),
fn: function (){
var self=this;
var newIndex=nil;
(newIndex=((($receiver = ((($receiver = smalltalk.send(self, "_selectedDataVisibleIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
((($receiver = smalltalk.send(newIndex, "__eq", [smalltalk.send(self, "_sizeVisible", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (newIndex=(0));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (newIndex=(0));})]));
smalltalk.send(self, "_unselectAll", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [smalltalk.send(smalltalk.send(unescape("li%3Avisible%3Aeq%28"), "__comma", [smalltalk.send(newIndex, "_asString", [])]), "__comma", [unescape("%29")])]), "_addClass_", [unescape("ui-selected")]);
smalltalk.send(self, "_selectionChanged", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_moveSelectionUp'),
smalltalk.method({
selector: unescape('moveSelectionUp'),
fn: function (){
var self=this;
var newIndex=nil;
(newIndex=((($receiver = ((($receiver = smalltalk.send(self, "_selectedDataVisibleIndex", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
((($receiver = ((($receiver = newIndex).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (newIndex=((($receiver = smalltalk.send(self, "_sizeVisible", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (newIndex=((($receiver = smalltalk.send(self, "_sizeVisible", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})]));
smalltalk.send(self, "_unselectAll", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [smalltalk.send(smalltalk.send(unescape("li%3Avisible%3Aeq%28"), "__comma", [smalltalk.send(newIndex, "_asString", [])]), "__comma", [unescape("%29")])]), "_addClass_", [unescape("ui-selected")]);
smalltalk.send(self, "_selectionChanged", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@divContainer']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){smalltalk.send(self, "_renderSearchBoxOn_", [html]);(self['@olContainer']=(function($rec){smalltalk.send($rec, "_style_", [unescape("overflow%3A%20hidden%3B%20border%3A%201px%20solid%20%23aaaaaa")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@list']=(function($rec){smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B%20border%3A%20none%3B%20outline%3A%20none%3B")]);smalltalk.send($rec, "_at_put_", ["tabindex", "1"]);smalltalk.send($rec, "_onKeyDown_", [(function(e){smalltalk.send(e, "_preventDefault", []);((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(40)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_moveSelectionDown", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_moveSelectionDown", []);})]));((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(38)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_moveSelectionUp", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_moveSelectionUp", []);})]));return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(70)]), "_and_", [(function(){return smalltalk.send(e, "_ctrlKey", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_commandFind", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_commandFind", []);})]));})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_focus", []);})]);})(smalltalk.send(html, "_ol", [])));})]);})(smalltalk.send(html, "_div", [])));smalltalk.send(self, "_makeResizable", []);return (self['@htmlIv']=html);})]));
smalltalk.send(self, "_bindEvents", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_renderSearchBoxOn_'),
smalltalk.method({
selector: unescape('renderSearchBoxOn%3A'),
fn: function (html){
var self=this;
(self['@searchbox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("input-prepend")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%202px%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2052px%3B%20width%3A%20100%25%3B")]);smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("add-on")]);return smalltalk.send($rec, "_with_", ["find"]);})(smalltalk.send(html, "_span", []));return (self['@searchInput']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_class_", ["span2"]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_filterResults", []);})]);return smalltalk.send($rec, "_onFocusOut_", [(function(){return smalltalk.send(self, "_hideSearchBox", []);})]);})(smalltalk.send(html, "_input", [])));})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedData'),
smalltalk.method({
selector: unescape('selectedData'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape(".ui-selected")]), "_data_", ["data"]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedDataIndex'),
smalltalk.method({
selector: unescape('selectedDataIndex'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape(".ui-selected")]), "_index", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedDataVisibleIndex'),
smalltalk.method({
selector: unescape('selectedDataVisibleIndex'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li:visible"]), "_index_", [smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape("li.ui-selected")])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectionChanged'),
smalltalk.method({
selector: unescape('selectionChanged'),
fn: function (){
var self=this;
smalltalk.send(self, "_focus", []);
smalltalk.send(self['@changedCallback'], "_value_value_", [smalltalk.send(self, "_selectedData", []), smalltalk.send(self, "_selectedDataIndex", [])]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_show", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_length", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_sizeVisible'),
smalltalk.method({
selector: unescape('sizeVisible'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li:visible"]), "_length", []);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@divContainer'], "_style_", [aString]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_unselectAll'),
smalltalk.method({
selector: unescape('unselectAll'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_removeClass_", [unescape("ui-selected")]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
fn: function (content){
var self=this;
smalltalk.send(self, "_with_data_darker_", [content, "", false]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_darker_'),
smalltalk.method({
selector: unescape('with%3Adarker%3A'),
fn: function (content, aBoolean){
var self=this;
smalltalk.send(self, "_with_data_darker_", [content, "", aBoolean]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_data_'),
smalltalk.method({
selector: unescape('with%3Adata%3A'),
fn: function (content, dataString){
var self=this;
smalltalk.send(self['@list'], "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content")]);smalltalk.send($rec, "_data_with_", ["data", dataString]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(content, "_value_", [self['@htmlIv']]);})]);})(smalltalk.send(self['@htmlIv'], "_li", []));})]);
return self;}
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_data_darker_'),
smalltalk.method({
selector: unescape('with%3Adata%3Adarker%3A'),
fn: function (content, dataString, aBoolean){
var self=this;
smalltalk.send(self['@list'], "_with_", [(function(){var li=nil;
(li=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content")]);smalltalk.send($rec, "_data_with_", ["data", dataString]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(content, "_value_", [self['@htmlIv']]);})]);})(smalltalk.send(self['@htmlIv'], "_li", [])));return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_addClass_", [unescape("list-darker")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_addClass_", [unescape("list-darker")]);})]));})]);
return self;}
}),
smalltalk.MaglevListBox);



smalltalk.addClass('MaglevObjectDropdown', smalltalk.Widget, ['container', 'resultContainer', 'editor', 'editorElement', 'rubyButton', 'smalltalkButton', 'object'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToInlineObject_for_'),
smalltalk.method({
selector: unescape('appendToInlineObject%3Afor%3A'),
fn: function (anObject, dropdownContainer){
var self=this;
(self['@object']=smalltalk.send(anObject, "_object", []));
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_appendTo_", [smalltalk.send(dropdownContainer, "_asJQuery", [])]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalDoIt'),
smalltalk.method({
selector: unescape('evalDoIt'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalInspectIt'),
smalltalk.method({
selector: unescape('evalInspectIt'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalPrintIt'),
smalltalk.method({
selector: unescape('evalPrintIt'),
fn: function (){
var self=this;
smalltalk.send(self, "_executeWithCallback_", [(function(success, resultObj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);}), (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]));})]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_executeWithCallback_'),
smalltalk.method({
selector: unescape('executeWithCallback%3A'),
fn: function (aBlock){
var self=this;
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@resultContainer']);
smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@resultContainer']);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", [smalltalk.send(self, "_code", []), smalltalk.send(self, "_language", []), (function(success, resultObj){smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@resultContainer'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(aBlock, "_value_value_", [success, resultObj]);})]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
fn: function (){
var self=this;
var params=nil;
var extraKeys=nil;
(extraKeys=(function($rec){smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-D"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-P"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-S"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(params=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["mode", unescape("text/x-ruby")]);smalltalk.send($rec, "_basicAt_put_", ["styleActiveLine", true]);smalltalk.send($rec, "_basicAt_put_", ["lineNumbers", true]);smalltalk.send($rec, "_basicAt_put_", ["matchBrackets", true]);smalltalk.send($rec, "_basicAt_put_", ["extraKeys", extraKeys]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(self['@editor']=smalltalk.send((smalltalk.CodeMirror || CodeMirror), "_value_value_", [smalltalk.send(smalltalk.send(self['@editorElement'], "_asJQuery", []), "_at_", [(0)]), params]));
smalltalk.send(self['@editor'], "_setValue_", [""]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isRuby'),
smalltalk.method({
selector: unescape('isRuby'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@rubyButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isSmalltalk'),
smalltalk.method({
selector: unescape('isSmalltalk'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@smalltalkButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_language'),
smalltalk.method({
selector: unescape('language'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_language'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_languageChanged'),
smalltalk.method({
selector: unescape('languageChanged'),
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);})() : (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);}), (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})]));
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
fn: function (){
var self=this;
 var menu = self['@container'];
	var editor = self['@editorElement'];
	menu._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	});
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%2010px%3B")]);smalltalk.send($rec, "_with_", ["Print it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalPrintIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn-group")]);smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-radio")]);return smalltalk.send($rec, "_with_", [(function(){(self['@rubyButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn active"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_languageChanged", []);})]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Ruby"]);})(smalltalk.send(html, "_button", [])));return (self['@smalltalkButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_languageChanged", []);})]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Smalltalk"]);})(smalltalk.send(html, "_button", [])));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("margin%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(self['@editorElement']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", [unescape("pull-left%20code-area")]));smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);(self['@resultContainer']=(function($rec){smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_form", []));
return self;}
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@container']=(function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["textbox"]);smalltalk.send($rec, "_style_", ["padding: 10px"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderFormOn_", [html]);})]);})(smalltalk.send(html, "_fieldset", []));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
smalltalk.send(self, "_mouseFix", []);
return self;}
}),
smalltalk.MaglevObjectDropdown);


smalltalk.MaglevObjectDropdown.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){(self['@instance']=smalltalk.send(self, "_new", []));return smalltalk.send(self['@instance'], "_appendToJQuery_", [smalltalk.send(unescape("%23temporary-rendering-area"), "_asJQuery", [])]);})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.MaglevObjectDropdown.klass);


smalltalk.addClass('MaglevObjectInline', smalltalk.Widget, ['object', 'hasDropDown', 'isDraggable', 'depth', 'isShort', 'dragContent', 'dragDummy', 'dragObject', 'fullInspection'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindDraggable'),
smalltalk.method({
selector: unescape('bindDraggable'),
fn: function (){
var self=this;
var options=nil;
var cursorPos=nil;
(cursorPos=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["left", (0)]);smalltalk.send($rec, "_basicAt_put_", ["top", (0)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(options=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["create", (function(event, ui){return nil;})]);smalltalk.send($rec, "_basicAt_put_", ["cursorPos", cursorPos]);smalltalk.send($rec, "_basicAt_put_", ["start", (function(event, ui){return smalltalk.send(self, "_dragStart_a_", [event, ui]);})]);smalltalk.send($rec, "_basicAt_put_", ["stop", (function(event, ui){return smalltalk.send(self, "_dragStop_a_", [event, ui]);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_draggable_", [options]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth'),
smalltalk.method({
selector: unescape('depth'),
fn: function (){
var self=this;
(($receiver = self['@depth']) == nil || $receiver == undefined) ? (function(){return (self['@depth']=(1));})() : $receiver;
return self['@depth'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth_'),
smalltalk.method({
selector: unescape('depth%3A'),
fn: function (anInteger){
var self=this;
(self['@depth']=anInteger);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStart_a_'),
smalltalk.method({
selector: unescape('dragStart%3Aa%3A'),
fn: function (event, ui){
var self=this;
smalltalk.send(self['@dragContent'], "_hide", []);
smalltalk.send(self['@dragDummy'], "_show", []);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStop_a_'),
smalltalk.method({
selector: unescape('dragStop%3Aa%3A'),
fn: function (event, ui){
var self=this;
var position=nil;
var window=nil;
(position=smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_offset", []));
(window=smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_showReloadObjectWindow_", [smalltalk.send(self['@object'], "_oop", [])]));
smalltalk.send(window, "_left_", [((($receiver = smalltalk.send(position, "_left", [])).klass === smalltalk.Number) ? $receiver -((($receiver = smalltalk.send(self['@dragObject'], "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)])) : smalltalk.send($receiver, "__minus", [((($receiver = smalltalk.send(self['@dragObject'], "_width", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))]))]);
smalltalk.send(window, "_top_", [((($receiver = smalltalk.send(position, "_top", [])).klass === smalltalk.Number) ? $receiver -((($receiver = smalltalk.send(self['@dragObject'], "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)])) : smalltalk.send($receiver, "__minus", [((($receiver = smalltalk.send(self['@dragObject'], "_height", [])).klass === smalltalk.Number) ? $receiver /(2) : smalltalk.send($receiver, "__slash", [(2)]))]))]);
smalltalk.send(self['@dragObject'], "_left_", [(0)]);
smalltalk.send(self['@dragObject'], "_top_", [(0)]);
smalltalk.send(self['@dragDummy'], "_hide", []);
smalltalk.send(self['@dragContent'], "_show", []);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_fullInspection'),
smalltalk.method({
selector: unescape('fullInspection'),
fn: function (){
var self=this;
(($receiver = self['@fullInspection']) == nil || $receiver == undefined) ? (function(){return (self['@fullInspection']=false);})() : $receiver;
return self['@fullInspection'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_fullInspection_'),
smalltalk.method({
selector: unescape('fullInspection%3A'),
fn: function (aBoolean){
var self=this;
(self['@fullInspection']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown'),
smalltalk.method({
selector: unescape('hasDropDown'),
fn: function (){
var self=this;
(($receiver = self['@hasDropDown']) == nil || $receiver == undefined) ? (function(){return (self['@hasDropDown']=smalltalk.send(self, "_hasDropDownDefault", []));})() : $receiver;
return self['@hasDropDown'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown_'),
smalltalk.method({
selector: unescape('hasDropDown%3A'),
fn: function (aBoolean){
var self=this;
(self['@hasDropDown']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable'),
smalltalk.method({
selector: unescape('isDraggable'),
fn: function (){
var self=this;
(($receiver = self['@isDraggable']) == nil || $receiver == undefined) ? (function(){return (self['@isDraggable']=smalltalk.send(self, "_isDraggableDefault", []));})() : $receiver;
return self['@isDraggable'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable_'),
smalltalk.method({
selector: unescape('isDraggable%3A'),
fn: function (aBoolean){
var self=this;
(self['@isDraggable']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort'),
smalltalk.method({
selector: unescape('isShort'),
fn: function (){
var self=this;
(($receiver = self['@isShort']) == nil || $receiver == undefined) ? (function(){return (self['@isShort']=false);})() : $receiver;
return self['@isShort'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort_'),
smalltalk.method({
selector: unescape('isShort%3A'),
fn: function (aBoolean){
var self=this;
(self['@isShort']=aBoolean);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_fullInspection", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (1000)}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (15)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (1000)}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (15)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_maxInspection'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderDraggableObjectOn_'),
smalltalk.method({
selector: unescape('renderDraggableObjectOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-new-object-container")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@dragObject']=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(self['@dragDummy']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));return (self['@dragContent']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_bindDraggable", []);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectContainerOn_'),
smalltalk.method({
selector: unescape('renderObjectContainerOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-view-view")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectActionsOn_", [html]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-typed-view")]);return smalltalk.send($rec, "_with_", [(function(){return ((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})]));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectOn_'),
smalltalk.method({
selector: unescape('renderObjectOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})]));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self, "_isDraggable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderText_withDropDownOn_'),
smalltalk.method({
selector: unescape('renderText%3AwithDropDownOn%3A'),
fn: function (text, html){
var self=this;
var dropdownContainer=nil;
((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));})() : (function(){return smalltalk.send(html, "_with_", [text]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));}), (function(){return smalltalk.send(html, "_with_", [text]);})]));
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;}
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_showDropdownFor_'),
smalltalk.method({
selector: unescape('showDropdownFor%3A'),
fn: function (dropdownContainer){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectDropdown || MaglevObjectDropdown), "_instance", []), "_appendToInlineObject_for_", [self, dropdownContainer]);
return self;}
}),
smalltalk.MaglevObjectInline);


smalltalk.addMethod(
unescape('_newWithDepth_'),
smalltalk.method({
selector: unescape('newWithDepth%3A'),
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevObjectInline.klass);


smalltalk.addClass('MaglevArrayInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
fn: function (html){
var self=this;
var showElements=nil;
var maxElements=nil;
(maxElements=smalltalk.send(self, "_maxElements", []));
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);}), (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))])]);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})]));
smalltalk.send(html, "_with_", [" "]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;}
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;}
}),
smalltalk.MaglevArrayInline);



smalltalk.addClass('MaglevBooleanInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevBooleanInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevBooleanInline);



smalltalk.addClass('MaglevExceptionInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isTrappable", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Not trappable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Not trappable"])]);})]));
((($receiver = smalltalk.send(self['@object'], "_isResumable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_playCircle", []), "_caption_", ["Resumable"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_playCircle", []), "_caption_", ["Resumable"])]);})]));
((($receiver = smalltalk.send(self['@object'], "_isDBEHalt", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_flag", []), "_caption_", ["Database Explorer Halt"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_flag", []), "_caption_", ["Database Explorer Halt"])]);})]));
return self;}
}),
smalltalk.MaglevExceptionInline);



smalltalk.addClass('MaglevFixnumInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevFixnumInline);



smalltalk.addClass('MaglevFloatInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevFloatInline);



smalltalk.addClass('MaglevHashInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
fn: function (){
var self=this;
return (3);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
fn: function (html){
var self=this;
var showElements=nil;
var maxElements=nil;
(maxElements=smalltalk.send(self, "_maxElements", []));
(showElements=smalltalk.send(maxElements, "_min_", [smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])]));
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", [" "]);
((($receiver = smalltalk.send(self, "_isShort", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){var key=nil;
var value=nil;
(key=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_key", []));(value=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_value", []));(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);})(html);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);}), (function(){smalltalk.send(smalltalk.send((1), "_to_", [showElements]), "_do_", [(function(idx){var key=nil;
var value=nil;
(key=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_key", []));(value=smalltalk.send(smalltalk.send(smalltalk.send(self, "_object", []), "_at_", [idx]), "_value", []));(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(key, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);smalltalk.send($rec, "_with_", [unescape("%3D%3E")]);return smalltalk.send($rec, "_with_", [smalltalk.send(value, "_inlineViewComponentWithDepth_", [((($receiver = smalltalk.send(self, "_depth", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))])]);})(html);return ((($receiver = smalltalk.send(((($receiver = idx).klass === smalltalk.Number) ? $receiver <showElements : smalltalk.send($receiver, "__lt", [showElements])), "_or_", [(function(){return ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]));})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [unescape("%20%2C%20")]);})]));})]);return ((($receiver = ((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >maxElements : smalltalk.send($receiver, "__gt", [maxElements]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [" ... "]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [" ... "]);})]));})]));
smalltalk.send(html, "_with_", [" "]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;}
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;}
}),
smalltalk.MaglevHashInline);



smalltalk.addClass('MaglevMaglevRecordBaseInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_hdd", []), "_caption_", ["MaglevRecord::Base"])]);
return self;}
}),
smalltalk.MaglevMaglevRecordBaseInline);



smalltalk.addClass('MaglevModuleInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevModuleInline);



smalltalk.addClass('MaglevClassInline', smalltalk.MaglevModuleInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
fn: function (){
var self=this;
return (1);
return self;}
}),
smalltalk.MaglevClassInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_listAlt", []), "_caption_", ["List class instances"])]);
return self;}
}),
smalltalk.MaglevClassInline);



smalltalk.addClass('MaglevNilClassInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevNilClassInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevNilClassInline);



smalltalk.addClass('MaglevRubyWorkspaceInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Workspace"])]);
return self;}
}),
smalltalk.MaglevRubyWorkspaceInline);



smalltalk.addClass('MaglevStringInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevStringInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevStringInline);



smalltalk.addClass('MaglevSymbolInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevSymbolInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevSymbolInline);



smalltalk.addClass('MaglevThreadInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
fn: function (){
var self=this;
return (25);
return self;}
}),
smalltalk.MaglevThreadInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isRailsThread", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rails", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rails", [])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["sleep"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pause", []), "_caption_", ["Thread status: sleeping"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pause", []), "_caption_", ["Thread status: sleeping"])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["false"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_stop", []), "_caption_", [unescape("Thread%20status%3A%20stopped%20%28false%29")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_stop", []), "_caption_", [unescape("Thread%20status%3A%20stopped%20%28false%29")])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["run"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_play", []), "_caption_", ["Thread status: running"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_play", []), "_caption_", ["Thread status: running"])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["aborting"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_trash", []), "_caption_", ["Thread status: aborting"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_trash", []), "_caption_", ["Thread status: aborting"])]);})]));
return self;}
}),
smalltalk.MaglevThreadInline);



smalltalk.addClass('MaglevObjectInstancesView', smalltalk.Widget, ['object', 'rangeFrom', 'rangeTo', 'instancesWaitBox', 'contentBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_currentInstVarNames'),
smalltalk.method({
selector: unescape('currentInstVarNames'),
fn: function (){
var self=this;
var ivNames=nil;
(ivNames=smalltalk.send((smalltalk.Set || Set), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(self, "_objectAt_", [idx]));return smalltalk.send(obj, "_instVarsDo_", [(function(key, value){return smalltalk.send(ivNames, "_add_", [smalltalk.send(key, "_string", [])]);})]);})]);
return ivNames;
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver /(10) : smalltalk.send($receiver, "__slash", [(10)])), "_ceiled", []);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_objectAt_'),
smalltalk.method({
selector: unescape('objectAt%3A'),
fn: function (anIndex){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_instances", []), "_at_", [anIndex]);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self['@object'], "_instancesSize", [])).klass === smalltalk.Number) ? $receiver /(10) : smalltalk.send($receiver, "__slash", [(10)])), "_ceiled", []);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
fn: function (){
var self=this;
(($receiver = self['@rangeTo']) == nil || $receiver == undefined) ? (function(){return (self['@rangeTo']=(10));})() : $receiver;
(($receiver = smalltalk.send(self['@object'], "_instancesSize", [])) != nil && $receiver != undefined) ? (function(){return (self['@rangeTo']=smalltalk.send(self['@rangeTo'], "_min_", [smalltalk.send(self['@object'], "_instancesSize", [])]));})() : nil;
return self['@rangeTo'];
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeTo_'),
smalltalk.method({
selector: unescape('rangeTo%3A'),
fn: function (anInteger){
var self=this;
(self['@rangeTo']=anInteger);
(($receiver = smalltalk.send(self['@object'], "_instancesSize", [])) != nil && $receiver != undefined) ? (function(){return (self['@rangeTo']=smalltalk.send(self['@rangeTo'], "_min_", [smalltalk.send(self['@object'], "_instancesSize", [])]));})() : nil;
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderInstVarTable'),
smalltalk.method({
selector: unescape('renderInstVarTable'),
fn: function (){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@contentBox'], "_asJQuery", [])]));
smalltalk.send(smalltalk.send(self['@contentBox'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@instancesWaitBox'], "_show", []);
smalltalk.send(self['@object'], "_loadInstancesFrom_to_withCallback_", [smalltalk.send(self, "_rangeFrom", []), smalltalk.send(self, "_rangeTo", []), (function(obj){var ivNames=nil;
smalltalk.send(self['@instancesWaitBox'], "_hide", []);(self['@object']=obj);(ivNames=smalltalk.send(self, "_currentInstVarNames", []));(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_thead", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_th", []), "_with_", ["oop"]);smalltalk.send(smalltalk.send(html, "_th", []), "_with_", ["Object"]);return smalltalk.send(ivNames, "_do_", [(function(ivName){return smalltalk.send(smalltalk.send(html, "_th", []), "_with_", [ivName]);})]);})]);})]);return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@object'], "_instances", []), "_do_", [(function(obj){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_oop", [])]);smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);return smalltalk.send(ivNames, "_do_", [(function(ivName){return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_instVarAt_ifAbsent_", [ivName, smalltalk.send((smalltalk.MaglevInvalidObject || MaglevInvalidObject), "_instance", [])]), "_inlineViewComponent", [])]);})]);})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));smalltalk.send(self, "_renderPaginationOn_", [html]);return smalltalk.send(self['@instancesWaitBox'], "_hide", []);})]);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@instancesWaitBox']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@contentBox']=smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderInstVarTable", []);
return self;}
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderPaginationOn_'),
smalltalk.method({
selector: unescape('renderPaginationOn%3A'),
fn: function (html){
var self=this;
var firstPage=nil;
var lastPage=nil;
var currentPage=nil;
(currentPage=smalltalk.send(self, "_currentPage", []));
(firstPage=smalltalk.send(((($receiver = currentPage).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_max_", [(1)]));
(lastPage=smalltalk.send(((($receiver = firstPage).klass === smalltalk.Number) ? $receiver +(10) : smalltalk.send($receiver, "__plus", [(10)])), "_min_", [smalltalk.send(self, "_pages", [])]));
(function($rec){smalltalk.send($rec, "_style_", [unescape("text-align%3A%20center%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["pagination"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-top%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(firstPage, "_to_", [lastPage]), "_do_", [(function(index){var liClass=nil;
((($receiver = smalltalk.send(currentPage, "__eq", [index])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (liClass="disabled");})() : (function(){return (liClass="active");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (liClass="disabled");}), (function(){return (liClass="active");})]));return (function($rec){smalltalk.send($rec, "_class_", [liClass]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_onClick_", [(function(){smalltalk.send(self, "_rangeFrom_", [((($receiver = ((($receiver = ((($receiver = index).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver *(10) : smalltalk.send($receiver, "__star", [(10)]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);smalltalk.send(self, "_rangeTo_", [((($receiver = index).klass === smalltalk.Number) ? $receiver *(10) : smalltalk.send($receiver, "__star", [(10)]))]);return smalltalk.send(self, "_renderInstVarTable", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send(index, "_asString", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));})]);})]);})(smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevObjectInstancesView);



smalltalk.addClass('MaglevTable', smalltalk.Widget, ['object', 'collectionName', 'rangeFrom', 'rangeTo', 'isAssociationDictionary', 'tableBody', 'currentPage', 'pageListItems', 'pagination'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [self['@collectionName']]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName'),
smalltalk.method({
selector: unescape('collectionName'),
fn: function (){
var self=this;
return self['@collectionName'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName_'),
smalltalk.method({
selector: unescape('collectionName%3A'),
fn: function (aString){
var self=this;
(self['@collectionName']=aString);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionSize'),
smalltalk.method({
selector: unescape('collectionSize'),
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [smalltalk.send(self['@collectionName'], "__comma", ["Size"])]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
fn: function (){
var self=this;
(($receiver = self['@currentPage']) == nil || $receiver == undefined) ? (function(){return (self['@currentPage']=(1));})() : $receiver;
return self['@currentPage'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary'),
smalltalk.method({
selector: unescape('isAssociationDictionary'),
fn: function (){
var self=this;
(($receiver = self['@isAssociationDictionary']) == nil || $receiver == undefined) ? (function(){return (self['@isAssociationDictionary']=false);})() : $receiver;
return self['@isAssociationDictionary'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary_'),
smalltalk.method({
selector: unescape('isAssociationDictionary%3A'),
fn: function (aBoolean){
var self=this;
(self['@isAssociationDictionary']=aBoolean);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pageSize'),
smalltalk.method({
selector: unescape('pageSize'),
fn: function (){
var self=this;
return (10);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_collectionSize", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_pageSize", [])])), "_ceiled", []);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_min_", [smalltalk.send(self, "_collectionSize", [])]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociation_to_on_'),
smalltalk.method({
selector: unescape('renderAssociation%3Ato%3Aon%3A'),
fn: function (key, value, html){
var self=this;
smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociationDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderAssociationDictionaryBodyOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_key", []), "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_value", []), "_inlineViewComponent", [])]);})]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderDictionaryBodyOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(idx, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);})]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
var pagClass=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_pages", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (pagClass=unescape("display%3A%20none%3B"));})() : (function(){return (pagClass="");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (pagClass=unescape("display%3A%20none%3B"));}), (function(){return (pagClass="");})]));
(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@tableBody']=smalltalk.send(html, "_tbody", []));})]);})(smalltalk.send(html, "_table", []));
(function($rec){smalltalk.send($rec, "_style_", [unescape("text-align%3A%20center%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@pagination']=(function($rec){smalltalk.send($rec, "_class_", ["pagination"]);return smalltalk.send($rec, "_style_", [pagClass]);})(smalltalk.send(html, "_span", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self, "_renderPage_", [(1)]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPage_'),
smalltalk.method({
selector: unescape('renderPage%3A'),
fn: function (anInteger){
var self=this;
var html=nil;
(self['@currentPage']=anInteger);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tableBody'], "_asJQuery", [])]));
(self['@rangeFrom']=((($receiver = ((($receiver = ((($receiver = anInteger).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));
smalltalk.send(smalltalk.send(self['@tableBody'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self['@object'], "_ensureIsLoaded_from_to_withCallback_", [self['@collectionName'], self['@rangeFrom'], smalltalk.send(self, "_rangeTo", []), (function(){smalltalk.send(smalltalk.send(self['@tableBody'], "_asJQuery", []), "_empty", []);return smalltalk.send(self, "_renderTableBodyOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tableBody'], "_asJQuery", [])])]);})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPagination'),
smalltalk.method({
selector: unescape('renderPagination'),
fn: function (){
var self=this;
var firstPage=nil;
var lastPage=nil;
var html=nil;
(self['@pageListItems']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
(firstPage=smalltalk.send(((($receiver = smalltalk.send(self, "_currentPage", [])).klass === smalltalk.Number) ? $receiver -(5) : smalltalk.send($receiver, "__minus", [(5)])), "_max_", [(1)]));
(lastPage=smalltalk.send(((($receiver = firstPage).klass === smalltalk.Number) ? $receiver +(10) : smalltalk.send($receiver, "__plus", [(10)])), "_min_", [smalltalk.send(self, "_pages", [])]));
smalltalk.send(smalltalk.send(self['@pagination'], "_asJQuery", []), "_empty", []);
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@pagination'], "_asJQuery", [])]));
smalltalk.send(self['@pagination'], "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-top%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(firstPage, "_to_", [lastPage]), "_do_", [(function(index){var liClass=nil;
((($receiver = smalltalk.send(self['@currentPage'], "__eq", [index])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (liClass="disabled");})() : (function(){return (liClass="active");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (liClass="disabled");}), (function(){return (liClass="active");})]));return (function($rec){smalltalk.send($rec, "_class_", [liClass]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_renderPage_", [index]);})]);return smalltalk.send($rec, "_with_", [smalltalk.send(index, "_asString", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));})]);})]);})(smalltalk.send(html, "_ul", []));})]);
return self;}
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderTableBodyOn_'),
smalltalk.method({
selector: unescape('renderTableBodyOn%3A'),
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self, "_isAssociationDictionary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();}), (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderTableBodyOn_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevTable);


smalltalk.addMethod(
unescape('_newAssociationDictFor_with_'),
smalltalk.method({
selector: unescape('newAssociationDictFor%3Awith%3A'),
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_isAssociationDictionary_", [true]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevTable.klass);

smalltalk.addMethod(
unescape('_newFor_with_'),
smalltalk.method({
selector: unescape('newFor%3Awith%3A'),
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;}
}),
smalltalk.MaglevTable.klass);


smalltalk.addClass('MaglevWindow', smalltalk.Widget, ['container', 'navigationItem'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToWorkspace'),
smalltalk.method({
selector: unescape('appendToWorkspace'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23workspace"), "_asJQuery", [])])]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_deleteEndpointsFor_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_as_with_'),
smalltalk.method({
selector: unescape('connectTo%3Aas%3Awith%3A'),
fn: function (aWindow, type, caption){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_as_with_", [self, aWindow, type, caption]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_with_'),
smalltalk.method({
selector: unescape('connectTo%3Awith%3A'),
fn: function (aWindow, parameters){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_with_", [self, aWindow, parameters]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
fn: function (){
var self=this;
return self['@container'];
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_left_", [aValue]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_moveToFront'),
smalltalk.method({
selector: unescape('moveToFront'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_css_data_", [unescape("z-index"), ((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "_highestZIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_navigationItem'),
smalltalk.method({
selector: unescape('navigationItem'),
fn: function (){
var self=this;
return self['@navigationItem'];
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_navigationItem_'),
smalltalk.method({
selector: unescape('navigationItem%3A'),
fn: function (anObject){
var self=this;
(self['@navigationItem']=anObject);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_prepareObject_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_onMouseEnter_", [(function(){return smalltalk.send(self['@container'], "_removeClass_", [unescape("window-mouse-out")]);})]);return smalltalk.send($rec, "_onMouseLeave_", [(function(){return smalltalk.send(self['@container'], "_addClass_", [unescape("window-mouse-out")]);})]);})(self['@container']);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderCloseButtonOn_'),
smalltalk.method({
selector: unescape('renderCloseButtonOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("display-inline-block")]);smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B%20margin-top%3A%203px%3B%20margin-left%3A%203px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("window-close-button")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeWindow", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_remove", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHeightPlaceholderOn_'),
smalltalk.method({
selector: unescape('renderHeightPlaceholderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("visibility%3A%20hidden%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["btn"]);return smalltalk.send($rec, "_with_", ["a"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHorziontalLineOn_'),
smalltalk.method({
selector: unescape('renderHorziontalLineOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_hr", []), "_style_", [unescape("margin%3A%2010px%3B")]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderNavigationOn_'),
smalltalk.method({
selector: unescape('renderNavigationOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["New window"]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(($receiver = self['@container']) == nil || $receiver == undefined) ? (function(){(self['@container']=smalltalk.send(html, "_div", []));return smalltalk.send(self, "_prepareWindow", []);})() : $receiver;
(function($rec){smalltalk.send($rec, "_class_", ["component window"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["nowrap"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderWindowTitleOn_", [html]);return smalltalk.send(self, "_renderWindowContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(self['@container']);
smalltalk.send(self['@container'], "_onMouseDown_", [(function(){return smalltalk.send(self, "_moveToFront", []);})]);
smalltalk.send(self, "_moveToFront", []);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderReplace'),
smalltalk.method({
selector: unescape('renderReplace'),
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])])]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["A new window"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("window-title")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("window-title-content")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderWindowTitleContentOn_", [html]);})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(aWindow, "_clear", []);
(self['@container']=smalltalk.send(aWindow, "_container", []));
return self;}
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_top_'),
smalltalk.method({
selector: unescape('top%3A'),
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_top_", [aValue]);
return self;}
}),
smalltalk.MaglevWindow);


smalltalk.addMethod(
unescape('_highestZIndex'),
smalltalk.method({
selector: unescape('highestZIndex'),
fn: function (){
var self=this;
 var indexHighest = 0;
	$('.window').each(function(){
		var indexCurrent = parseInt($(this).css("z-index"), 10);
		if(indexCurrent > indexHighest) {
			indexHighest = indexCurrent;
		}
	});
	return indexHighest; ;
return self;}
}),
smalltalk.MaglevWindow.klass);

smalltalk.addMethod(
unescape('_newReplace_'),
smalltalk.method({
selector: unescape('newReplace%3A'),
fn: function (aWindow){
var self=this;
return (function($rec){smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevWindow.klass);


smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject', 'tabs', 'captions', 'tabsContainer', 'currentTab'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_captions'),
smalltalk.method({
selector: unescape('captions'),
fn: function (){
var self=this;
(($receiver = self['@captions']) == nil || $receiver == undefined) ? (function(){return (self['@captions']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@captions'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self['@object'], "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivValue, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})]));})]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@object'], "_classObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_~~", [smalltalk.send(aWindow, "_object", [])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})]));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [self]);
smalltalk.send(self, "_closeWindow", [], smalltalk.MaglevWindow);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
fn: function (){
var self=this;
return self['@container'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasInstVars", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})]));
smalltalk.send(smalltalk.send(self['@object'], "_customTabs", []), "_do_", [(function(customTab){var selector=nil;
(selector=smalltalk.send(smalltalk.send("renderCustom", "__comma", [smalltalk.send(customTab, "_at_", [(2)])]), "__comma", ["On:"]));smalltalk.send(smalltalk.send(self, "_class", []), "_compile_", [smalltalk.send(smalltalk.send(selector, "__comma", ["html    "]), "__comma", [smalltalk.send(customTab, "_at_", [(3)])])]);return smalltalk.send(result, "_at_put_", [smalltalk.send(customTab, "_at_", [(1)]), smalltalk.send(selector, "_asSymbol", [])]);})]);
return result;
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return nil;
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_makeCurrentTabResizable'),
smalltalk.method({
selector: unescape('makeCurrentTabResizable'),
fn: function (){
var self=this;
smalltalk.send(self['@currentTab'], "_style_", [unescape("overflow%3A%20hidden%3B")]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@currentTab'], "_asJQuery", []), "_children", []), "_first", []), "_attr_with_", ["style", unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B")]);
smalltalk.send(smalltalk.send(self['@currentTab'], "_asJQuery", []), "_resizable", []);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
fn: function (){
var self=this;
return self['@object'];
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
fn: function (anObject){
var self=this;
(self['@object']=anObject);
(self['@classObject']=smalltalk.send(anObject, "_classObject", []));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_prepareWindow", [], smalltalk.MaglevWindow), "_MaglevObjectSpace", []), "_registerWindow_", [self]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderInstanceVariablesOn_'),
smalltalk.method({
selector: unescape('renderInstanceVariablesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("instVars")])]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderNavigationOn_'),
smalltalk.method({
selector: unescape('renderNavigationOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentNavItem", [])]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderVirtualClassAndClassOn_'),
smalltalk.method({
selector: unescape('renderVirtualClassAndClassOn%3A'),
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@classObject'], "__eq", [smalltalk.send(self['@object'], "_virtualClassObject", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})]));
(function($rec){smalltalk.send($rec, "_with_", [" :: "]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);})(html);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;
var allTabs=nil;
var firstCaption=nil;
var defaultTab=nil;
(allTabs=smalltalk.send(self, "_contentTabs", []));
((($receiver = ((($receiver = smalltalk.send(allTabs, "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav%20nav-tabs")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_makeCurrentTabResizable", []);})]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_makeCurrentTabResizable", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_resizeSmall", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_contentTabs", []), "_keysAndValuesDo_", [(function(caption, generator){var capEl=nil;
(($receiver = firstCaption) == nil || $receiver == undefined) ? (function(){return (firstCaption=caption);})() : $receiver;(capEl=smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showTab_", [caption]);})]);return smalltalk.send($rec, "_with_", [caption]);})(smalltalk.send(html, "_a", []));})]));return smalltalk.send(smalltalk.send(self, "_captions", []), "_at_put_", [caption, capEl]);})]);})]);})(smalltalk.send(html, "_ul", []));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("nav%20nav-tabs")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_makeCurrentTabResizable", []);})]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_makeCurrentTabResizable", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_resizeSmall", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));return smalltalk.send(smalltalk.send(self, "_contentTabs", []), "_keysAndValuesDo_", [(function(caption, generator){var capEl=nil;
(($receiver = firstCaption) == nil || $receiver == undefined) ? (function(){return (firstCaption=caption);})() : $receiver;(capEl=smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showTab_", [caption]);})]);return smalltalk.send($rec, "_with_", [caption]);})(smalltalk.send(html, "_a", []));})]));return smalltalk.send(smalltalk.send(self, "_captions", []), "_at_put_", [caption, capEl]);})]);})]);})(smalltalk.send(html, "_ul", []));})]));
(self['@tabsContainer']=smalltalk.send(html, "_div", []));
(defaultTab=smalltalk.send(self, "_defaultTab", []));
(($receiver = defaultTab) == nil || $receiver == undefined) ? (function(){return (($receiver = firstCaption) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_showTab_", [firstCaption]);})() : nil;})() : (function(){return smalltalk.send(self, "_showTab_", [defaultTab]);})();
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-left%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("%3C0x"), "__comma", [smalltalk.send(smalltalk.send(self['@object'], "_oop", []), "_asHexString", [])]), "__comma", [unescape("%3E")])]);})(smalltalk.send(html, "_span", []));})]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_replace_", [aWindow], smalltalk.MaglevWindow);
((($receiver = smalltalk.send(aWindow, "_isWaitingWindow", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_registerWindow_", [self]);
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_showTab_'),
smalltalk.method({
selector: unescape('showTab%3A'),
fn: function (caption){
var self=this;
var allTabs=nil;
(allTabs=smalltalk.send(self, "_contentTabs", []));
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_tabs", []), "_includesKey_", [caption]), "_not", []), "_and_", [(function(){return smalltalk.send(allTabs, "_includesKey_", [caption]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var tab=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tabsContainer'], "_asJQuery", [])]));(tab=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(allTabs, "_at_", [caption]), [html]]);})]);})]));return smalltalk.send(smalltalk.send(self, "_tabs", []), "_at_put_", [caption, tab]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var tab=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@tabsContainer'], "_asJQuery", [])]));(tab=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(allTabs, "_at_", [caption]), [html]]);})]);})]));return smalltalk.send(smalltalk.send(self, "_tabs", []), "_at_put_", [caption, tab]);})]));
smalltalk.send(smalltalk.send(self, "_tabs", []), "_keysAndValuesDo_", [(function(tabCaption, tab){var capEl=nil;
(capEl=smalltalk.send(smalltalk.send(self, "_captions", []), "_at_", [tabCaption]));return ((($receiver = smalltalk.send(caption, "__eq", [tabCaption])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(self['@currentTab']=tab);smalltalk.send(tab, "_show", []);return smalltalk.send(capEl, "_addClass_", ["active"]);})() : (function(){smalltalk.send(tab, "_hide", []);return smalltalk.send(capEl, "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(self['@currentTab']=tab);smalltalk.send(tab, "_show", []);return smalltalk.send(capEl, "_addClass_", ["active"]);}), (function(){smalltalk.send(tab, "_hide", []);return smalltalk.send(capEl, "_removeClass_", ["active"]);})]));})]);
return false;
return self;}
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
fn: function (){
var self=this;
(($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return (self['@tabs']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@tabs'];
return self;}
}),
smalltalk.MaglevObjectWindow);


smalltalk.addMethod(
unescape('_newReplace_with_'),
smalltalk.method({
selector: unescape('newReplace%3Awith%3A'),
fn: function (aWindow, anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevObjectWindow.klass);


smalltalk.addClass('MaglevArrayWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(smalltalk.send(self['@object'], "_elements", []), "_keysAndValuesDo_", [(function(idx, value){return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})]));})]);
return self;}
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})]));
return result;
return self;}
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Elements";
return self;}
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_renderArrayElementsOn_'),
smalltalk.method({
selector: unescape('renderArrayElementsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;}
}),
smalltalk.MaglevArrayWindow);



smalltalk.addClass('MaglevExceptionWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFixnumWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFloatWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevHashWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(self['@object'], "_keysAndValuesDo_", [(function(key, value){((($receiver = smalltalk.send(key, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})]));return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})]));})]);
return self;}
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})]));
return result;
return self;}
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Associations";
return self;}
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_renderHashElementsOn_'),
smalltalk.method({
selector: unescape('renderHashElementsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;}
}),
smalltalk.MaglevHashWindow);



smalltalk.addClass('MaglevMaglevRecordBaseWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Attributes", smalltalk.symbolFor("renderAttributesOn:")]);
return result;
return self;}
}),
smalltalk.MaglevMaglevRecordBaseWindow);

smalltalk.addMethod(
unescape('_renderAttributesOn_'),
smalltalk.method({
selector: unescape('renderAttributesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("attributes")])]);
return self;}
}),
smalltalk.MaglevMaglevRecordBaseWindow);



smalltalk.addClass('MaglevModuleWindow', smalltalk.MaglevObjectWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'methodContainer', 'waitingScreen', 'hierarchyContainer'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasConstants", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasIncludedModules", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})]));
smalltalk.send(result, "_at_put_", ["Code", smalltalk.symbolFor("renderCodeTabOn:")]);
smalltalk.send(result, "_at_put_", ["Hierarchy", smalltalk.symbolFor("renderHierarchyOn:")]);
return result;
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Code";
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_initializeTree_'),
smalltalk.method({
selector: unescape('initializeTree%3A'),
fn: function (container){
var self=this;
 container.jstree({
		plugins: ["crrm", "html_data", "themes"],
		core: {
			animation: 0,
			open_parents: true}});
	// setTimout: jstree fix
	setTimeout(function(){
		container.find('.treeview-replace-me').each(function(index, el) {
			var jqEl = $(el);
			self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
			jqEl.removeClass('treeview-replace-me');
		});}, 0); ;
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderCodeTabOn_'),
smalltalk.method({
selector: unescape('renderCodeTabOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_root", []), "_style_", [unescape("width%3A%20100%25%3B")]);
smalltalk.send(self, "_renderListsOn_", [html]);
(self['@waitingScreen']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@methodContainer']=smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("margin-top%3A%2010px%3B")]));
smalltalk.send(smalltalk.send(self, "_object", []), "_allSelectorsWithCallback_", [(function(obj){(self['@selectors']=obj);smalltalk.send(self, "_renderSelectorCategories", []);smalltalk.send(self['@waitingScreen'], "_hide", []);smalltalk.send(self['@categoryNamesSelect'], "_show", []);return smalltalk.send(self['@selectorsSelect'], "_show", []);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderConstantsOn_'),
smalltalk.method({
selector: unescape('renderConstantsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("constants")])]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderHierarchyOn_'),
smalltalk.method({
selector: unescape('renderHierarchyOn%3A'),
fn: function (htmlIn){
var self=this;
var waitingBox=nil;
var hcContainer=nil;
(hcContainer=smalltalk.send(smalltalk.send(htmlIn, "_div", []), "_style_", [unescape("height%3A%20300px%3B%20overflow%3A%20hidden%3B")]));
(waitingBox=smalltalk.send(smalltalk.send(htmlIn, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(htmlIn);})]));
smalltalk.send(self['@object'], "_ensureSuperListLoadedWithCallback_", [(function(){var renderedInlines=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(hcContainer, "_asJQuery", [])]));(renderedInlines=smalltalk.send((smalltalk.Array || Array), "_new", []));(self['@hierarchyContainer']=(function($rec){smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B")]);return smalltalk.send($rec, "_with_", [(function(){var lastUl=nil;
(lastUl=smalltalk.send(html, "_ul", []));return smalltalk.send(smalltalk.send(self['@object'], "_superList", []), "_do_", [(function(cls){return smalltalk.send(lastUl, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_data_with_", ["oop", smalltalk.send(smalltalk.send(cls, "_oop", []), "_asString", [])]);smalltalk.send($rec, "_with_", [(function(){var container=nil;
(self['@container']=(function($rec){smalltalk.send($rec, "_data_with_", ["oop", smalltalk.send(smalltalk.send(cls, "_oop", []), "_asString", [])]);return smalltalk.send($rec, "_class_", [unescape("treeview-replace-me")]);})(smalltalk.send(html, "_span", [])));return smalltalk.send(renderedInlines, "_add_", [self['@container']]);})]);return smalltalk.send($rec, "_with_", [(function(){return (lastUl=smalltalk.send(html, "_ul", []));})]);})(smalltalk.send(html, "_li", []));})]);})]);})]);})(smalltalk.send(html, "_div", [])));smalltalk.send(self, "_initializeTree_", [smalltalk.send(self['@hierarchyContainer'], "_asJQuery", [])]);smalltalk.send(smalltalk.send(hcContainer, "_asJQuery", []), "_resizable", []);return smalltalk.send(waitingBox, "_hide", []);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderHierarchySubclass_for_'),
smalltalk.method({
selector: unescape('renderHierarchySubclass%3Afor%3A'),
fn: function (cls, oop){
var self=this;
 var ownerLi = self['@hierarchyContainer']._asJQuery().find("[data-oop='" + oop + "']");
	if (ownerLi.find("[data-oop='" + cls._oop() + "']").length == 0) {
		self['@hierarchyContainer']._asJQuery().jstree('create', ownerLi, null, {attr: {'data-oop': cls._oop(), 'data-replace-me': '1'}}, null, true);
	} ;
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderIncludedModulesOn_'),
smalltalk.method({
selector: unescape('renderIncludedModulesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("includedModules")])]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderInlineViewFor_inside_'),
smalltalk.method({
selector: unescape('renderInlineViewFor%3Ainside%3A'),
fn: function (oop, htmlElement){
var self=this;
var html=nil;
var subclassesButton=nil;
var waitIcon=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [htmlElement]));
(waitIcon=smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", []));
smalltalk.send(html, "_with_", [waitIcon]);
smalltalk.send(waitIcon, "_hide", []);
(subclassesButton=smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_codeFork", []));
smalltalk.send(html, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_a", []), "_with_", [subclassesButton]);})]);
smalltalk.send(subclassesButton, "_onClick_", [(function(){var obj=nil;
smalltalk.send(subclassesButton, "_hide", []);smalltalk.send(waitIcon, "_show", []);(obj=smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_at_", [oop]));return smalltalk.send(obj, "_ensureSubclassesLoadedWithCallback_", [(function(){smalltalk.send(smalltalk.send(obj, "_subclasses", []), "_do_", [(function(cls){return smalltalk.send(self, "_renderHierarchySubclass_for_", [cls, oop]);})]);smalltalk.send(self, "_replaceHierarchySubclasses", []);return smalltalk.send(waitIcon, "_hide", []);})]);})]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_at_", [oop]), "_inlineViewComponentFull", []), "_renderOn_", [html]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderListsOn_'),
smalltalk.method({
selector: unescape('renderListsOn%3A'),
fn: function (html){
var self=this;
(self['@categoryNamesSelect']=smalltalk.send((smalltalk.MaglevListBox || MaglevListBox), "_new", []));
smalltalk.send(html, "_with_", [self['@categoryNamesSelect']]);
(function($rec){smalltalk.send($rec, "_changedCallback_", [(function(cat, index){return smalltalk.send(self, "_renderSelectors_", [cat]);})]);smalltalk.send($rec, "_height_", [(250)]);smalltalk.send($rec, "_style_", [unescape("float%3A%20left%3B%20width%3A%2050%25%3B%20margin-right%3A%2010px%3B%20margin-left%3A%200px%3B%20display%3A%20inline-block%3B")]);return smalltalk.send($rec, "_hide", []);})(self['@categoryNamesSelect']);
(self['@selectorsSelect']=smalltalk.send((smalltalk.MaglevListBox || MaglevListBox), "_new", []));
smalltalk.send(html, "_with_", [self['@selectorsSelect']]);
(function($rec){smalltalk.send($rec, "_changedCallback_", [(function(sel, index){return smalltalk.send(self, "_renderSourceCode_", [sel]);})]);smalltalk.send($rec, "_height_", [(250)]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20width%3A%2050%25%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2010px%3B")]);return smalltalk.send($rec, "_hide", []);})(self['@selectorsSelect']);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
fn: function (obj){
var self=this;
var methodEditor=nil;
(methodEditor=smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj]));
smalltalk.send(methodEditor, "_classObject_", [self['@object']]);
smalltalk.send(self['@methodContainer'], "_with_", [methodEditor]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderRubySourceCodeFor_'),
smalltalk.method({
selector: unescape('renderRubySourceCodeFor%3A'),
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_sourceCodeFor_language_withCallback_", [selectorString, "ruby", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectorCategories'),
smalltalk.method({
selector: unescape('renderSelectorCategories'),
fn: function (){
var self=this;
smalltalk.send(self['@categoryNamesSelect'], "_clear", []);
smalltalk.send(self['@selectors'], "_keysAndValuesDo_", [(function(category, catSelectors){return smalltalk.send(self['@categoryNamesSelect'], "_with_data_", [(function(html){((($receiver = smalltalk.send(category, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})() : (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);}), (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})]));return smalltalk.send(html, "_with_", [category]);}), category]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectors_'),
smalltalk.method({
selector: unescape('renderSelectors%3A'),
fn: function (selectedCategory){
var self=this;
try{var currentSelectors=nil;
smalltalk.send(self['@selectorsSelect'], "_clear", []);
(currentSelectors=smalltalk.send(self['@selectors'], "_at_", [selectedCategory]));
(($receiver = currentSelectors) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderSelectors_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(currentSelectors, "_do_", [(function(sel){return smalltalk.send(self['@selectorsSelect'], "_with_data_", [(function(html){return smalltalk.send(html, "_with_", [sel]);}), sel]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderSelectors_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSmalltalkSourceCodeFor_'),
smalltalk.method({
selector: unescape('renderSmalltalkSourceCodeFor%3A'),
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_sourceCodeFor_language_withCallback_", [selectorString, "smalltalk", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSourceCode_'),
smalltalk.method({
selector: unescape('renderSourceCode%3A'),
fn: function (selectorString){
var self=this;
try{var selectedCategory=nil;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
(($receiver = selectorString) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderSourceCode_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(self['@waitingScreen'], "_show", []);
(selectedCategory=smalltalk.send(self, "_selectedCategoryString", []));
((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);})() : (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);}), (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderSourceCode_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_replaceHierarchySubclasses'),
smalltalk.method({
selector: unescape('replaceHierarchySubclasses'),
fn: function (){
var self=this;
 self['@hierarchyContainer']._asJQuery().find("[data-replace-me='1']").each(function(idx, el) {
		// TODO: jQuery not working here for unknown reasons
		el.getElementsByTagName('a')[0].remove();
		el.removeAttribute('data-replace-me');
		var jqEl = $(el);
		self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
	}); ;
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_selectedCategoryString'),
smalltalk.method({
selector: unescape('selectedCategoryString'),
fn: function (){
var self=this;
return smalltalk.send(self['@categoryNamesSelect'], "_selectedData", []);
return self;}
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_sortList_'),
smalltalk.method({
selector: unescape('sortList%3A'),
fn: function (aListBox){
var self=this;
var box=nil;
var children=nil;
(box=smalltalk.send(aListBox, "_asJQuery", []));
 children = box.children('option').sort(function (a, b) {return a.innerHTML > b.innerHTML ? 1 : -1}); ;
smalltalk.send(box, "_empty", []);
smalltalk.send(children, "_appendTo_", [box]);
return self;}
}),
smalltalk.MaglevModuleWindow);



smalltalk.addClass('MaglevClassWindow', smalltalk.MaglevModuleWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevModuleWindow);
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})]));
return self;}
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevModuleWindow));
smalltalk.send(result, "_at_put_", ["Instances", smalltalk.symbolFor("renderInstancesOn:")]);
return result;
return self;}
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderInstancesOn_'),
smalltalk.method({
selector: unescape('renderInstancesOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_instancesViewComponent", [])]);
return self;}
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);smalltalk.send($rec, "_with_", [unescape("%20%3C%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "_inlineViewComponent", [])]);})(html);
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-left%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("%3C0x"), "__comma", [smalltalk.send(smalltalk.send(self['@object'], "_oop", []), "_asHexString", [])]), "__comma", [unescape("%3E")])]);})(smalltalk.send(html, "_span", []));})]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevClassWindow);



smalltalk.addClass('MaglevSystemClassWindow', smalltalk.MaglevClassWindow, ['transactionResultBox', 'persistenceModeButton'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_abortTransaction'),
smalltalk.method({
selector: unescape('abortTransaction'),
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEAbortTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_commitTransaction'),
smalltalk.method({
selector: unescape('commitTransaction'),
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBECommitTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevClassWindow));
smalltalk.send(result, "_at_put_", ["Stone Version Report", smalltalk.symbolFor("renderStoneVersionReportOn:")]);
smalltalk.send(result, "_at_put_", ["Gem Version Report", smalltalk.symbolFor("renderGemVersionReportOn:")]);
smalltalk.send(result, "_at_put_", ["Control Panel", smalltalk.symbolFor("renderControlPanelOn:")]);
return result;
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_continueTransaction'),
smalltalk.method({
selector: unescape('continueTransaction'),
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEContinueTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Control Panel";
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderControlPanelOn_'),
smalltalk.method({
selector: unescape('renderControlPanelOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["well"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Abort Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_abortTransaction", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Commit Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitTransaction", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Continue Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_continueTransaction", []);})]);})(smalltalk.send(html, "_input", []));(self['@persistenceModeButton']=(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_value_", ["Persistent Mode"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2022%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_togglePersistentMode", []);})]);})(smalltalk.send(html, "_input", [])));return (self['@transactionResultBox']=(function($rec){smalltalk.send($rec, "_style_", [unescape("margin-top%3A%2010px%3B%20margin-bottom%3A%200px%3B")]);smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));})]);
smalltalk.send(self, "_updatePersistentMode", []);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderGemVersionReportOn_'),
smalltalk.method({
selector: unescape('renderGemVersionReportOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("gemVersionReport")])]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderStoneVersionReportOn_'),
smalltalk.method({
selector: unescape('renderStoneVersionReportOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("stoneVersionReport")])]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_showTransactionWaitingBox'),
smalltalk.method({
selector: unescape('showTransactionWaitingBox'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@transactionResultBox']);
smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@transactionResultBox']);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_togglePersistentMode'),
smalltalk.method({
selector: unescape('togglePersistentMode'),
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBETogglePersistenceMode", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_updatePersistentMode'),
smalltalk.method({
selector: unescape('updatePersistentMode'),
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEPersistenceMode", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;}
}),
smalltalk.MaglevSystemClassWindow);



smalltalk.addClass('MaglevNilClassWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevRubyWorkspaceWindow', smalltalk.MaglevObjectWindow, ['terminalBox', 'commandBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Workspace", smalltalk.symbolFor("renderWorkspaceOn:")]);
return result;
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Workspace";
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_handleEnter'),
smalltalk.method({
selector: unescape('handleEnter'),
fn: function (){
var self=this;
var command=nil;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@terminalBox'], "_asJQuery", [])]));
(command=smalltalk.send(smalltalk.send(self['@commandBox'], "_asJQuery", []), "_val", []));
(command=smalltalk.send(command, "_replace_with_", [unescape("%27"), unescape("%27%27")]));
smalltalk.send(smalltalk.send(self['@commandBox'], "_asJQuery", []), "_prop_value_", ["disabled", true]);
(function($rec){smalltalk.send($rec, "_with_", [command]);return smalltalk.send($rec, "_with_", [smalltalk.send(html, "_br", [])]);})(html);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", [smalltalk.send(smalltalk.send(unescape("self.evaluate%28%27"), "__comma", [command]), "__comma", [unescape("%27%29")]), "ruby", (function(success, resultObj){var class_=nil;
((($receiver = smalltalk.send(smalltalk.send(resultObj, "_at_", [(1)]), "_value", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (class_=unescape("alert%20alert-error"));})() : (function(){return (class_=unescape("alert%20alert-success"));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (class_=unescape("alert%20alert-error"));}), (function(){return (class_=unescape("alert%20alert-success"));})]));smalltalk.send(self['@terminalBox'], "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [class_]);smalltalk.send($rec, "_with_", [unescape("%3D%3E%20")]);smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(resultObj, "_at_", [(2)]), "_inlineViewComponent", [])]);return smalltalk.send($rec, "_with_", [smalltalk.send(html, "_br", [])]);})(smalltalk.send(html, "_div", []));})]);smalltalk.send(self, "_scrollToBottom", []);smalltalk.send(smalltalk.send(self['@commandBox'], "_asJQuery", []), "_prop_value_", ["disabled", false]);return smalltalk.send(smalltalk.send(self['@commandBox'], "_asJQuery", []), "_val_", [""]);})]);
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
fn: function (){
var self=this;
 var editor = self['@terminalBox'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_renderWorkspaceOn_'),
smalltalk.method({
selector: unescape('renderWorkspaceOn%3A'),
fn: function (html){
var self=this;
(self['@terminalBox']=smalltalk.send(smalltalk.send(html, "_pre", []), "_style_", [unescape("height%3A%20350px%3B%20overflow-y%3A%20scroll%3B%20overflow-x%3A%20hidden%3B%20color%3A%20%23000000%3B")]));
(self['@commandBox']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2097%25%3B")]);return smalltalk.send($rec, "_onKeyPress_", [(function(evt){return ((($receiver = smalltalk.send(smalltalk.send(evt, "_keyCode", []), "__eq_eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handleEnter", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_handleEnter", []);})]));})]);})(smalltalk.send(html, "_input", [])));
smalltalk.send(self, "_mouseFix", []);
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_scrollToBottom'),
smalltalk.method({
selector: unescape('scrollToBottom'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@terminalBox'], "_asJQuery", []), "_scrollTop_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@terminalBox'], "_asJQuery", []), "_at_", [(0)]), "_scrollHeight", [])]);
return self;}
}),
smalltalk.MaglevRubyWorkspaceWindow);



smalltalk.addClass('MaglevStringWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevSymbolWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevThreadWindow', smalltalk.MaglevObjectWindow, ['methodSelect', 'methodContainer', 'waitingScreen', 'waitForStackTrace'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Stack Trace", smalltalk.symbolFor("renderStackTraceOn:")]);
smalltalk.send(result, "_at_put_", ["Thread Local Storage", smalltalk.symbolFor("renderLocalStorageOn:")]);
return result;
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
fn: function (){
var self=this;
return "Stack Trace";
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_frameIndex'),
smalltalk.method({
selector: unescape('frameIndex'),
fn: function (){
var self=this;
return smalltalk.send(self['@methodSelect'], "_selectedDataIndex", []);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_isMethodUnimportant_'),
smalltalk.method({
selector: unescape('isMethodUnimportant%3A'),
fn: function (aString){
var self=this;
try{var unimportant=nil;
(unimportant=[unescape("AbstractException%20%3E%3E"),"AbstractException class",unescape("GsProcess%20%3E%3E"),"GsProcess class",unescape("ProcessorScheduler%20%3E%3E"),"ProcessorScheduler class","CodeEvaluation class",unescape("RubyCompiler%20%3E%3E"),"RubyCompiler class","onException:do:",unescape("RubyProc%20%3E%3E%20callAndRescue%3A"),"_gsReturnToC",unescape("%3E%3E%20onSynchronous%3Ado%3A"),unescape("ExecBlock%20%3E%3E%20ensure%3A"),unescape("ExecBlock%20%3E%3E%20rubyEnsure%3A")]);
smalltalk.send(unimportant, "_do_", [(function(str){return ((($receiver = smalltalk.send(aString, "_includesSubString_", [str])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_isMethodUnimportant_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_proceed'),
smalltalk.method({
selector: unescape('proceed'),
fn: function (){
var self=this;
smalltalk.send(self['@object'], "_proceedWithCallback_", [(function(obj){return smalltalk.send(self['@object'], "_fullReloadWithCallback_", [(function(threadReloaded){return ((($receiver = smalltalk.send(self['@object'], "_isRailsThread", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_closeWindow", []);})() : (function(){return smalltalk.send(smalltalk.send(threadReloaded, "_windowViewComponentReplace_", [self]), "_renderReplace", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_closeWindow", []);}), (function(){return smalltalk.send(smalltalk.send(threadReloaded, "_windowViewComponentReplace_", [self]), "_renderReplace", []);})]));})]);})]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_reloadStackWithCallback_'),
smalltalk.method({
selector: unescape('reloadStackWithCallback%3A'),
fn: function (aBlock){
var self=this;
var html=nil;
smalltalk.send(self['@waitForStackTrace'], "_show", []);
smalltalk.send(self['@methodSelect'], "_clear", []);
smalltalk.send(self['@object'], "_stackTraceMethodsWithCallback_", [(function(obj){smalltalk.send(obj, "_do_", [(function(method){var isUnimportant=nil;
(isUnimportant=smalltalk.send(self, "_isMethodUnimportant_", [method]));return smalltalk.send(self['@methodSelect'], "_with_darker_", [(function(html){((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%200%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})]));((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%201%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})]));((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%201b%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rubySmalltalkBridge", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rubySmalltalkBridge", [])]);})]));return smalltalk.send(html, "_with_", [method]);}), isUnimportant]);})]);smalltalk.send(self['@waitForStackTrace'], "_hide", []);return ((($receiver = smalltalk.send(aBlock, "__eq", [nil])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);})]));})]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Proceed"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_proceed", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Step into"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_stepInto", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Step over"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_stepOver", []);})]);})(smalltalk.send(html, "_input", []));return (function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Trim stack"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_trimStack", []);})]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderFrame_'),
smalltalk.method({
selector: unescape('renderFrame%3A'),
fn: function (frameIndex){
var self=this;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@waitingScreen'], "_show", []);
((($receiver = ((($receiver = frameIndex).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@object'], "_stackFrame_withCallback_", [frameIndex, (function(obj){smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodDebugEditor || MaglevGsNMethodDebugEditor), "_for_", [obj])]);return smalltalk.send(self['@waitingScreen'], "_hide", []);})]);})() : (function(){return smalltalk.send(self['@waitingScreen'], "_hide", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@object'], "_stackFrame_withCallback_", [frameIndex, (function(obj){smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodDebugEditor || MaglevGsNMethodDebugEditor), "_for_", [obj])]);return smalltalk.send(self['@waitingScreen'], "_hide", []);})]);}), (function(){return smalltalk.send(self['@waitingScreen'], "_hide", []);})]));
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderLocalStorageOn_'),
smalltalk.method({
selector: unescape('renderLocalStorageOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self['@object'], "_localStorage", []), smalltalk.symbolFor("elements")])]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderStackTraceOn_'),
smalltalk.method({
selector: unescape('renderStackTraceOn%3A'),
fn: function (html){
var self=this;
(self['@waitForStackTrace']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@methodSelect']=smalltalk.send((smalltalk.MaglevListBox || MaglevListBox), "_new", []));
smalltalk.send(html, "_with_", [self['@methodSelect']]);
(function($rec){smalltalk.send($rec, "_changedCallback_", [(function(text, index){return smalltalk.send(self, "_renderFrame_", [index]);})]);smalltalk.send($rec, "_height_", [(250)]);return smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);})(self['@methodSelect']);
smalltalk.send(self, "_renderButtonsOn_", [html]);
(self['@waitingScreen']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
(self['@methodContainer']=smalltalk.send(html, "_div", []));
smalltalk.send(self, "_reloadStackWithCallback_", [nil]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_selectStackFrame_'),
smalltalk.method({
selector: unescape('selectStackFrame%3A'),
fn: function (anInteger){
var self=this;
 self['@methodSelect']._asJQuery()[0].selectedIndex = anInteger - 1; ;
smalltalk.send(self, "_renderFrame_", [anInteger]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_stepInto'),
smalltalk.method({
selector: unescape('stepInto'),
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_stepInto_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_stepOver'),
smalltalk.method({
selector: unescape('stepOver'),
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_stepOver_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;}
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_trimStack'),
smalltalk.method({
selector: unescape('trimStack'),
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_trimTo_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;}
}),
smalltalk.MaglevThreadWindow);



smalltalk.addClass('MaglevSearchWindow', smalltalk.MaglevWindow, ['maglev', 'selectBox', 'waitForResult', 'listContents', 'methodContainer', 'waitingScreen'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_listIndex'),
smalltalk.method({
selector: unescape('listIndex'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@selectBox'], "_asJQuery", []), "_at_", [(0)]), "_selectedIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_maglev'),
smalltalk.method({
selector: unescape('maglev'),
fn: function (){
var self=this;
(($receiver = self['@maglev']) == nil || $receiver == undefined) ? (function(){return (self['@maglev']=smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []));})() : $receiver;
return self['@maglev'];
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderClass'),
smalltalk.method({
selector: unescape('renderClass'),
fn: function (){
var self=this;
var listElement=nil;
var cls=nil;
var selector=nil;
var envId=nil;
smalltalk.send(self['@waitingScreen'], "_show", []);
(listElement=smalltalk.send(self['@listContents'], "_at_", [smalltalk.send(self, "_listIndex", [])]));
(cls=smalltalk.send(smalltalk.send(listElement, "_at_", [(1)]), "_at_", [(1)]));
(envId=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(listElement, "_at_", [(1)]), "_at_", [(2)]), "_inspection", []), "_asNumber", []));
(selector=smalltalk.send(listElement, "_at_", [(2)]));
((($receiver = smalltalk.send(envId, "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(cls, "_sourceCodeFor_language_withCallback_", [selector, "smalltalk", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);})() : (function(){return smalltalk.send(cls, "_sourceCodeFor_language_withCallback_", [selector, "ruby", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(cls, "_sourceCodeFor_language_withCallback_", [selector, "smalltalk", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);}), (function(){return smalltalk.send(cls, "_sourceCodeFor_language_withCallback_", [selector, "ruby", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);})]));
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderListOf_'),
smalltalk.method({
selector: unescape('renderListOf%3A'),
fn: function (selectors){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@selectBox'], "_asJQuery", [])]));
smalltalk.send(smalltalk.send(self['@selectBox'], "_asJQuery", []), "_empty", []);
(self['@listContents']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(selectors, "_do_", [(function(selector){return smalltalk.send(smalltalk.send(self, "_maglev", []), "_implementersOf_withCallback_", [selector, (function(success, obj){((($receiver = smalltalk.send(obj, "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(obj, "_do_", [(function(cls){smalltalk.send(self['@listContents'], "_add_", [[cls,selector]]);return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(cls, "_at_", [(1)]), "_inspection", []), "__comma", [unescape("%3E%3E")]), "__comma", [selector])]);})]);})]);smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_show", []);})(self['@selectBox']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(obj, "_do_", [(function(cls){smalltalk.send(self['@listContents'], "_add_", [[cls,selector]]);return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(cls, "_at_", [(1)]), "_inspection", []), "__comma", [unescape("%3E%3E")]), "__comma", [selector])]);})]);})]);smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_show", []);})(self['@selectBox']);})]));return smalltalk.send(self['@waitForResult'], "_hide", []);})]);})]);
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
fn: function (obj){
var self=this;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj])]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("maglev-search")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("search-form")]);smalltalk.send($rec, "_onSubmit_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send(self, "_searchSelectorsAndClasses", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_input", []), "_class_", [unescape("search-input")]);})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
(self['@selectBox']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_renderClass", []);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@waitForResult']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
(self['@waitingScreen']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
(self['@methodContainer']=smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_searchSelectorsAndClasses'),
smalltalk.method({
selector: unescape('searchSelectorsAndClasses'),
fn: function (){
var self=this;
var input=nil;
var maglev=nil;
var selectors=nil;
(input=smalltalk.send(smalltalk.send(unescape(".search-input"), "_asJQuery", []), "_val", []));
(selectors=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self['@waitForResult'], "_show", []);
smalltalk.send(smalltalk.send(self, "_maglev", []), "_findMethodNamesMatching_with_", [input, (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(obj, "_string", []), "_tokenize_", [" "])]);return smalltalk.send(self, "_renderListOf_", [selectors]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(obj, "_string", []), "_tokenize_", [" "])]);return smalltalk.send(self, "_renderListOf_", [selectors]);})]));})]);
return self;}
}),
smalltalk.MaglevSearchWindow);



smalltalk.addClass('MaglevWaitingWindow', smalltalk.MaglevWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;

return self;}
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
return self;}
}),
smalltalk.MaglevWaitingWindow);



smalltalk.addClass('MaglevWebBrowserWindow', smalltalk.MaglevWindow, ['url', 'inputUrl', 'iframe'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
fn: function (html){
var self=this;
var iframeContainer=nil;
(function($rec){smalltalk.send($rec, "_class_", [unescape("input-prepend")]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20margin-top%3A%2010px%3B%20box-sizing%3A%20border-box%3B%20padding-right%3A%2051px%3B%20margin-bottom%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("add-on")]);return smalltalk.send($rec, "_with_", ["URL"]);})(smalltalk.send(html, "_span", []));return (self['@inputUrl']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_onKeyPress_", [(function(evt){return ((($receiver = smalltalk.send(smalltalk.send(evt, "_which", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_url_", [smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_val", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_url_", [smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_val", [])]);})]));})]);})(smalltalk.send(html, "_input", [])));})]);})(smalltalk.send(html, "_div", []));
(iframeContainer=(function($rec){smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%205px%3B%20margin-right%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@iframe']=(function($rec){smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20border%3A%201px%20solid%20%23ccc%3B")]);smalltalk.send($rec, "_frameborder_", ["0"]);return smalltalk.send($rec, "_src_", ["about:blank"]);})(smalltalk.send(html, "_iframe", [])));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(smalltalk.send(iframeContainer, "_asJQuery", []), "_resizable", []);
return self;}
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_globe", [])]);
smalltalk.send(html, "_with_", ["Web Browser"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;}
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return self['@url'];
return self;}
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
fn: function (aString){
var self=this;
(self['@url']=aString);
smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_attr_with_", ["value", aString]);
smalltalk.send(smalltalk.send(self['@iframe'], "_asJQuery", []), "_attr_with_", ["src", aString]);
return self;}
}),
smalltalk.MaglevWebBrowserWindow);


smalltalk.addMethod(
unescape('_defaultUrl'),
smalltalk.method({
selector: unescape('defaultUrl'),
fn: function (){
var self=this;
 var port = parseInt(window.location.host.split(':')[1]) - 1;
	return window.location.protocol + '//' + window.location.host.split(':')[0] + ':' + port + '/'; ;
return self;}
}),
smalltalk.MaglevWebBrowserWindow.klass);

smalltalk.addMethod(
unescape('_showNew'),
smalltalk.method({
selector: unescape('showNew'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_appendToWorkspace", []);return smalltalk.send($rec, "_url_", [smalltalk.send(self, "_defaultUrl", [])]);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.MaglevWebBrowserWindow.klass);


