smalltalk.addPackage('Maglev-Database-Explorer', {});
smalltalk.addClass('MaglevDraggableObject', smalltalk.Widget, ['content'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_content'),
smalltalk.method({
selector: unescape('content'),
category: 'accessing',
fn: function (){
var self=this;
return self['@content'];
return self;},
args: [],
source: unescape('content%0A%09%5E%20content'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_content_'),
smalltalk.method({
selector: unescape('content%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@content']=anObject);
return self;},
args: ["anObject"],
source: unescape('content%3A%20anObject%0A%09content%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_div", []), "_class_with_", [unescape("draggable-new-object-container"), (function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [self['@content']]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));})]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27draggable-new-object-container%27%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27ui-widget-content%20ui-draggable%20draggable-new-object%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-drag-dummy%27%3B%0A%09%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09%09with%3A%20MaglevIcon%20move%3B%0A%09%09%09%09%09%09with%3A%20content.%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09class%3A%20%27object-iv-name%27%3B%0A%09%09%09%09%09%09with%3A%20content%5D%5D.'),
messageSends: ["class:with:", "div", "class:", "with:", "style:", "move"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevDraggableObject);


smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'not yet classified',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_content_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject"],
source: unescape('with%3A%20anObject%0A%09%5E%20self%20basicNew%0A%09%09content%3A%20anObject%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["content:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevDraggableObject.klass);


smalltalk.addClass('MaglevGsNMethodEditor', smalltalk.Widget, ['object', 'editorContainer', 'errorBox', 'rubyIcon', 'stIcon', 'envIdContainer', 'sourceLocationContainer', 'editor', 'editorHeight', 'editorWidth', 'classObject'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(5)])]);
return self;},
args: [],
source: unescape('classObject%0A%09%5E%20MaglevObject%20newObjectWithoutUpdate%3A%20%28self%20methodObject%20at%3A%205%29'),
messageSends: ["newObjectWithoutUpdate:", "at:", "methodObject"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_classObject_'),
smalltalk.method({
selector: unescape('classObject%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@classObject']=anObject);
return self;},
args: ["anObject"],
source: unescape('classObject%3A%20anObject%0A%09classObject%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_commandSave'),
smalltalk.method({
selector: unescape('commandSave'),
category: 'interactions',
fn: function (){
var self=this;
var selectedCategory=nil;
smalltalk.send(self['@errorBox'], "_hide", []);
smalltalk.send(smalltalk.send(self['@errorBox'], "_asJQuery", []), "_empty", []);
((($receiver = smalltalk.send(smalltalk.send(self, "_envId", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileRubySourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})() : (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileRubySourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);}), (function(){return smalltalk.send(smalltalk.send(self, "_classObject", []), "_compileSmalltalkSourceCode_withCallback_", [smalltalk.send(smalltalk.send(self['@editor'], "_getValue", []), "_replace_with_", [unescape("%u26A1"), ""]), (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_signalSuccess", []);})() : (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_signalSuccess", []);}), (function(){return smalltalk.send(self, "_signalFailure_", [obj]);})]));})]);})]));
return self;},
args: [],
source: unescape('commandSave%0A%09%7CselectedCategory%7C%0A%09errorBox%20hide.%0A%09errorBox%20asJQuery%20empty.%0A%09self%20envId%20%3D%201%0A%09%09ifTrue%3A%20%5Bself%20classObject%0A%09%09%09compileRubySourceCode%3A%20%28editor%20getValue%20replace%3A%20%27%u26A1%27%20with%3A%20%27%27%29%0A%09%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09%09%09success%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20signalSuccess%5D%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20signalFailure%3A%20obj%5D%5D%5D%0A%09%09ifFalse%3A%20%5Bself%20classObject%20%0A%09%09%09compileSmalltalkSourceCode%3A%20%28editor%20getValue%20replace%3A%20%27%u26A1%27%20with%3A%20%27%27%29%0A%09%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%0A%09%09%09%09success%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20signalSuccess%5D%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20signalFailure%3A%20obj%5D%5D%5D.'),
messageSends: ["hide", "empty", "asJQuery", "ifTrue:ifFalse:", unescape("%3D"), "envId", "compileRubySourceCode:withCallback:", "classObject", "replace:with:", "getValue", "signalSuccess", "signalFailure:", "compileSmalltalkSourceCode:withCallback:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_envId'),
smalltalk.method({
selector: unescape('envId'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(2)]);
return self;},
args: [],
source: unescape('envId%0A%09%5E%20self%20methodObject%20at%3A%202'),
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_filename'),
smalltalk.method({
selector: unescape('filename'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(4)]), "_at_", [(1)]);
return self;},
args: [],
source: unescape('filename%0A%09%5E%20%28self%20methodObject%20at%3A%204%29%20at%3A%201'),
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
category: 'initializing',
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
return self;},
args: [],
source: unescape('initializeEditor%0A%09%7Cparams%20extraKeys%7C%0A%09extraKeys%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27Ctrl-S%27%20put%3A%20%5Bself%20commandSave%5D%3B%0A%09%09yourself.%0A%09params%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27mode%27%20put%3A%20%27text/x-ruby%27%3B%0A%09%09basicAt%3A%20%27styleActiveLine%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27lineNumbers%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27matchBrackets%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27extraKeys%27%20put%3A%20extraKeys%3B%0A%09%09yourself.%20%0A%09editor%20%3A%3D%20CodeMirror%20value%3A%20%28editorContainer%20asJQuery%20at%3A%200%29%20value%3A%20params.%0A%09editor%20setValue%3A%20%27%27.%0A%09self%20mouseFix.%0A%09self%20makeEditorResizable.'),
messageSends: ["basicAt:put:", "commandSave", "yourself", "new", "value:value:", "at:", "asJQuery", "setValue:", "mouseFix", "makeEditorResizable"],
referencedClasses: ["Object", "CodeMirror"]
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_lineInFile'),
smalltalk.method({
selector: unescape('lineInFile'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(4)]), "_at_", [(2)]);
return self;},
args: [],
source: unescape('lineInFile%0A%09%5E%20%28self%20methodObject%20at%3A%204%29%20at%3A%202'),
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_makeEditorResizable'),
smalltalk.method({
selector: unescape('makeEditorResizable'),
category: 'initializing',
fn: function (){
var self=this;
 self['@editorContainer']._asJQuery().find('.CodeMirror').resizable({
		resize: function() {	
			self['@editor'].setSize($(this).width(), $(this).height());	
		}
	}); ;
return self;},
args: [],
source: unescape('makeEditorResizable%0A%09%3C%20self%5B%27@editorContainer%27%5D._asJQuery%28%29.find%28%27.CodeMirror%27%29.resizable%28%7B%0A%09%09resize%3A%20function%28%29%20%7B%09%0A%09%09%09self%5B%27@editor%27%5D.setSize%28%24%28this%29.width%28%29%2C%20%24%28this%29.height%28%29%29%3B%09%0A%09%09%7D%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_methodObject'),
smalltalk.method({
selector: unescape('methodObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('methodObject%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
category: 'initializing',
fn: function (){
var self=this;
 var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;},
args: [],
source: unescape('mouseFix%0A%09%3C%20var%20editor%20%3D%20self%5B%27@editorContainer%27%5D%3B%0A%09editor._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderEditorOn_'),
smalltalk.method({
selector: unescape('renderEditorOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@editorContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_class_", [unescape("pull-left%20code-area")]));
smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);
(self['@errorBox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("alert%20alert-error")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
return self;},
args: ["html"],
source: unescape('renderEditorOn%3A%20html%0A%09editorContainer%20%3A%3D%20html%20span%0A%09%09class%3A%20%27pull-left%20code-area%27.%0A%09html%20div%20style%3A%20%27clear%3A%20both%3B%27.%0A%09errorBox%20%3A%3D%20html%20div%0A%09%09class%3A%20%27alert%20alert-error%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09hide.%0A%09self%20initializeEditor.'),
messageSends: ["class:", "span", "style:", "div", "hide", "initializeEditor"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
category: 'rendering',
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
return self;},
args: [],
source: unescape('renderMethodObject%0A%09%7CenvId%7C%0A%09editor%20setValue%3A%20self%20sourceString.%20%0A%09editorContainer%20show.%0A%09envId%20%3A%3D%20self%20envId.%0A%09envIdContainer%20asJQuery%20empty.%0A%09envIdContainer%20with%3A%20envId.%0A%09sourceLocationContainer%20empty.%0A%09envId%20%3D%201%20%0A%09%09ifTrue%3A%20%5B%0A%09%09%09sourceLocationContainer%20with%3A%20self%20filename.%0A%09%09%09stIcon%20hide.%20rubyIcon%20show.%0A%09%09%09editor%20setOption%3A%20%27mode%27%20data%3A%20%27text/x-ruby%27.%5D%0A%09%09ifFalse%3A%20%5BsourceLocationContainer%20with%3A%20%27n/a%27%5D.%0A%09envId%20%3D%200%20ifTrue%3A%20%5B%0A%09%09stIcon%20show.%20rubyIcon%20hide.%0A%09%09editor%20setOption%3A%20%27mode%27%20data%3A%20%27text/x-stsrc%27%5D.%0A%09envId%20%3E%201%0A%09%09ifTrue%3A%20%5BstIcon%20hide.%20rubyIcon%20hide%5D.'),
messageSends: ["setValue:", "sourceString", "show", "envId", "empty", "asJQuery", "with:", "ifTrue:ifFalse:", unescape("%3D"), "filename", "hide", "setOption:data:", "ifTrue:", unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderEditorOn_", [html]);
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(self, "_renderMethodObject", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09self%20renderEditorOn%3A%20html.%0A%09self%20renderStatusBarOn%3A%20html.%0A%09self%20renderMethodObject.'),
messageSends: ["renderEditorOn:", "renderStatusBarOn:", "renderMethodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_renderStatusBarOn_'),
smalltalk.method({
selector: unescape('renderStatusBarOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B%20width%3A%20100%25%3B")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){(function($rec){smalltalk.send($rec, "_with_", [(function(){(self['@rubyIcon']=(function($rec){smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])));(self['@stIcon']=(function($rec){smalltalk.send($rec, "_hide", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])));smalltalk.send(html, "_with_", [self['@rubyIcon']]);smalltalk.send(html, "_with_", [self['@stIcon']]);return (self['@envIdContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Environment ID"]));})]);return smalltalk.send($rec, "_style_", [unescape("width%3A%201px%3B")]);})(smalltalk.send(html, "_td", []));return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){return (self['@sourceLocationContainer']=smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Source location"]));})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));
return self;},
args: ["html"],
source: unescape('renderStatusBarOn%3A%20html%0A%09html%20table%0A%09%09class%3A%20%27table-bordered%27%3B%0A%09%09style%3A%20%27margin-top%3A%205px%3B%20width%3A%20100%25%3B%27%3B%0A%09%09with%3A%20%5Bhtml%20tbody%20with%3A%20%5B%0A%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09html%20td%20with%3A%20%5B%0A%09%09%09%09%09rubyIcon%20%3A%3D%20MaglevIconImage%20ruby%20hide%3B%20yourself.%0A%09%09%09%09%09stIcon%20%3A%3D%20MaglevIconImage%20smalltalk%20hide%3B%20yourself.%0A%09%09%09%09%09html%20with%3A%20rubyIcon.%0A%09%09%09%09%09html%20with%3A%20stIcon.%0A%09%09%09%09%09envIdContainer%20%3A%3D%20html%20span%20with%3A%20%27Environment%20ID%27%5D%3B%0A%09%09%09%09%09style%3A%20%27width%3A%201px%3B%27.%0A%09%09%09%09html%20td%20with%3A%20%5B%0A%09%09%09%09%09sourceLocationContainer%20%3A%3D%20html%20span%20with%3A%20%27Source%20location%27%5D%5D%5D%5D.'),
messageSends: ["class:", "style:", "with:", "tbody", "tr", "hide", "yourself", "ruby", "smalltalk", "span", "td", "table"],
referencedClasses: ["MaglevIconImage"]
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalFailure_'),
smalltalk.method({
selector: unescape('signalFailure%3A'),
category: 'interactions',
fn: function (aDescription){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@errorBox'], "_asJQuery", [])]));
smalltalk.send(html, "_with_", [smalltalk.send(aDescription, "_inlineViewComponent", [])]);
smalltalk.send(self['@errorBox'], "_show", []);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%23ff0039")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;},
args: ["aDescription"],
source: unescape('signalFailure%3A%20aDescription%0A%09%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20errorBox%20asJQuery.%0A%09html%20with%3A%20aDescription%20inlineViewComponent.%0A%09errorBox%20show.%0A%09editorContainer%20asJQuery%20css%3A%20%27background-color%27%20with%3A%20%27%23ff0039%27.%0A%09editorContainer%20asJQuery%20animate%3A%20%28Object%20new%20basicAt%3A%20%27backgroundColor%27%20put%3A%20%27%23ffffff%27%3B%20yourself%29%20timeout%3A%20250.'),
messageSends: ["onJQuery:", "asJQuery", "with:", "inlineViewComponent", "show", "css:with:", "animate:timeout:", "basicAt:put:", "yourself", "new"],
referencedClasses: ["HTMLCanvas", "Object"]
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_signalSuccess'),
smalltalk.method({
selector: unescape('signalSuccess'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_css_with_", [unescape("background-color"), unescape("%233fb618")]);
smalltalk.send(smalltalk.send(self['@editorContainer'], "_asJQuery", []), "_animate_timeout_", [(function($rec){smalltalk.send($rec, "_basicAt_put_", ["backgroundColor", unescape("%23ffffff")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])), (250)]);
return self;},
args: [],
source: unescape('signalSuccess%0A%09editorContainer%20asJQuery%20css%3A%20%27background-color%27%20with%3A%20%27%233fb618%27.%0A%09editorContainer%20asJQuery%20animate%3A%20%28Object%20new%20basicAt%3A%20%27backgroundColor%27%20put%3A%20%27%23ffffff%27%3B%20yourself%29%20timeout%3A%20250.'),
messageSends: ["css:with:", "asJQuery", "animate:timeout:", "basicAt:put:", "yourself", "new"],
referencedClasses: ["Object"]
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_sourceOffset'),
smalltalk.method({
selector: unescape('sourceOffset'),
category: 'accessing',
fn: function (){
var self=this;
return (-1);
return self;},
args: [],
source: unescape('sourceOffset%0A%09%5E%20-1'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);

smalltalk.addMethod(
unescape('_sourceString'),
smalltalk.method({
selector: unescape('sourceString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_methodObject", []), "_at_", [(1)]);
return self;},
args: [],
source: unescape('sourceString%0A%09%5E%20self%20methodObject%20at%3A%201'),
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'instance creation',
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject"],
source: unescape('for%3A%20anObject%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodEditor.klass);


smalltalk.addClass('MaglevGsNMethodDebugEditor', smalltalk.MaglevGsNMethodEditor, ['argValueBox', 'argSelect'], 'Maglev-Database-Explorer');
smalltalk.MaglevGsNMethodDebugEditor.comment=unescape('Copied%20from%20_frameContentsAt%3A%0A%0A%22Private.%20%20Returns%20an%20Array%20describing%20the%20specified%20level%20in%20the%20receiver.%20%0A%20aLevel%20%3D%3D%201%20is%20top%20of%20stack.%20%20If%20aLevel%20is%20less%20than%201%20or%20greater%20than%0A%20stackDepth%2C%20returns%20nil.%20%20%0A%0A%20The%20result%20Array%20contains%3A%0A%20offset%20item%0A%20-----%20%20-----%0A%20%20%201%20%20%20%20gsMethod%20%20%28a%20GsNMethod%29%0A%20%20%202%20%20%20%20ipOffset%20%20%20%20%28zero-based%20relative%20to%20first%20named%20instance%20variable%20in%20portable%20code%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20negative%20means%20a%20stack%20breakpoint%20is%20present%29%0A%20%20%203%20%20%20%20frameOffset%20%28zero-based%29%0A%20%20%204%20%20%20%20varContext%0A%20%20%205%20%20%20%20saveProtectedMode%0A%20%20%206%20%20%20%20markerOrException%0A%20%20%207%20%20%20%20nil%20%20%20%20%28not%20used%29%0A%20%20%208%20%20%20%20self%20%20%20%28possibly%20nil%20in%20a%20ComplexBlock%29%0A%20%20%209%20%20%20%20argAndTempNames%20%20%20%28an%20Array%20of%20Symbols%20or%20Strings%29%0A%20%2010%20%20%20%20receiver%0A%20%2011%20%20%20%20arguments%20and%20temps%2C%20if%20any%22')
smalltalk.addMethod(
unescape('_argAndTempNames'),
smalltalk.method({
selector: unescape('argAndTempNames'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(9)]);
return self;},
args: [],
source: unescape('argAndTempNames%0A%09%5E%20object%20at%3A%209'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_argOrTempValue_'),
smalltalk.method({
selector: unescape('argOrTempValue%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(smalltalk.send(self['@object'], "_at_", [(11)]), "_at_", [anInteger])]);
return self;},
args: ["anInteger"],
source: unescape('argOrTempValue%3A%20anInteger%0A%09%5E%20MaglevObject%20newObject%3A%20%28%28object%20at%3A%2011%29%20at%3A%20anInteger%29'),
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_methodObject'),
smalltalk.method({
selector: unescape('methodObject'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(1)]);
return self;},
args: [],
source: unescape('methodObject%0A%09%5E%20object%20at%3A%201'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_ownerSelf'),
smalltalk.method({
selector: unescape('ownerSelf'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(self['@object'], "_at_", [(8)])]);
return self;},
args: [],
source: unescape('ownerSelf%0A%09%5E%20MaglevObject%20newObject%3A%20%28object%20at%3A%208%29'),
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_receiver'),
smalltalk.method({
selector: unescape('receiver'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(self['@object'], "_at_", [(10)])]);
return self;},
args: [],
source: unescape('receiver%0A%09%5E%20MaglevObject%20newObject%3A%20%28object%20at%3A%2010%29'),
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderArg'),
smalltalk.method({
selector: unescape('renderArg'),
category: 'rendering',
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
return self;},
args: [],
source: unescape('renderArg%0A%09%7CargIndex%20argValue%7C%0A%09argIndex%20%3A%3D%20%28argSelect%20asJQuery%20at%3A%200%29%20selectedIndex%20-%201.%0A%09argIndex%20%3D%20-1%20%0A%09%09ifTrue%3A%20%5BargValue%20%3A%3D%20self%20ownerSelf%5D.%0A%09argIndex%20%3D%200%0A%09%09ifTrue%3A%20%5BargValue%20%3A%3D%20self%20receiver%5D.%0A%09argIndex%20%20%3E%200%0A%09%09ifTrue%3A%20%5BargValue%20%3A%3D%20self%20argOrTempValue%3A%20argIndex%5D.%0A%09argValueBox%20asJQuery%20empty.%0A%09argValueBox%20with%3A%20argValue%20inlineViewComponent.'),
messageSends: [unescape("-"), "selectedIndex", "at:", "asJQuery", "ifTrue:", unescape("%3D"), "ownerSelf", "receiver", unescape("%3E"), "argOrTempValue:", "empty", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderArgsOn_'),
smalltalk.method({
selector: unescape('renderArgsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [(function(){(self['@argSelect']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28self%29")]);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [unescape("%28receiver%29")]);})]);smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(self, "_argAndTempNames", []), "_do_", [(function(arg){return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [arg]);})]);})]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_renderArg", []);})]);})(smalltalk.send(html, "_select", [])));return (self['@argValueBox']=smalltalk.send(html, "_div", []));})]);return (function($rec){smalltalk.send($rec, "_with_", [(function(){return (self['@argValueBox']=smalltalk.send(html, "_div", []));})]);return smalltalk.send($rec, "_style_", [unescape("padding-left%3A%205px%3B")]);})(smalltalk.send(html, "_td", []));})]);})]);})]);return smalltalk.send($rec, "_style_", [unescape("margin-top%3A%205px%3B")]);})(smalltalk.send(html, "_table", []));
smalltalk.send(self, "_renderArg", []);
return self;},
args: ["html"],
source: unescape('renderArgsOn%3A%20html%0A%09html%20table%20with%3A%20%5B%0A%09%09html%20tbody%20with%3A%20%5B%0A%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09html%20td%20with%3A%20%5B%0A%09%09%09%09%09argSelect%20%3A%3D%20html%20select%0A%09%09%09%09%09%09with%3A%20%5Bhtml%20option%20with%3A%20%27%28self%29%27%5D%3B%0A%09%09%09%09%09%09with%3A%20%5Bhtml%20option%20with%3A%20%27%28receiver%29%27%5D%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20argAndTempNames%20do%3A%20%5B%3Aarg%20%7C%0A%09%09%09%09%09%09%09html%20option%20with%3A%20arg%5D%5D%3B%0A%09%09%09%09%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09%09%09%09%09onChange%3A%20%5Bself%20renderArg%5D.%0A%09%09%09%09%09argValueBox%20%3A%3D%20html%20div%5D.%0A%09%09%09%09html%20td%20%0A%09%09%09%09%09with%3A%20%5BargValueBox%20%3A%3D%20html%20div%5D%3B%0A%09%09%09%09%09style%3A%20%27padding-left%3A%205px%3B%27%5D%5D%5D%3B%0A%09style%3A%20%27margin-top%3A%205px%3B%27.%0A%09self%20renderArg.'),
messageSends: ["with:", "tbody", "tr", "td", "option", "do:", "argAndTempNames", "style:", "onChange:", "renderArg", "select", "div", "table"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderMethodObject'),
smalltalk.method({
selector: unescape('renderMethodObject'),
category: 'rendering',
fn: function (){
var self=this;
var rangeFrom=nil;
var rangeTo=nil;
smalltalk.send(self, "_renderMethodObject", [], smalltalk.MaglevGsNMethodEditor);
 self['@editor'].setSelection(
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}, 
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}); ;
smalltalk.send(self['@editor'], "_replaceSelection_", [unescape("%u26A1")]);
return self;},
args: [],
source: unescape('renderMethodObject%0A%09%7CrangeFrom%20rangeTo%7C%0A%09super%20renderMethodObject.%0A%09%3C%20self%5B%27@editor%27%5D.setSelection%28%0A%09%09%7Bline%3A%20self._sourceOffsetY%28%29%2C%20ch%3A%20self._sourceOffsetX%28%29%7D%2C%20%0A%09%09%7Bline%3A%20self._sourceOffsetY%28%29%2C%20ch%3A%20self._sourceOffsetX%28%29%7D%29%3B%20%3E.%0A%09editor%20replaceSelection%3A%20%27%u26A1%27.'),
messageSends: ["renderMethodObject", "replaceSelection:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderEditorOn_", [html]);
smalltalk.send(self, "_renderArgsOn_", [html]);
smalltalk.send(self, "_renderStatusBarOn_", [html]);
smalltalk.send(self, "_renderMethodObject", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09self%20renderEditorOn%3A%20html.%0A%09self%20renderArgsOn%3A%20html.%0A%09self%20renderStatusBarOn%3A%20html.%0A%09self%20renderMethodObject.'),
messageSends: ["renderEditorOn:", "renderArgsOn:", "renderStatusBarOn:", "renderMethodObject"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffset'),
smalltalk.method({
selector: unescape('sourceOffset'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_at_", [(12)]);
return self;},
args: [],
source: unescape('sourceOffset%0A%09%5E%20object%20at%3A%2012'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffsetX'),
smalltalk.method({
selector: unescape('sourceOffsetX'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_at_", [(13)]), "_at_", [(1)]);
return self;},
args: [],
source: unescape('sourceOffsetX%0A%09%5E%20%28object%20at%3A%2013%29%20at%3A%201'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
unescape('_sourceOffsetY'),
smalltalk.method({
selector: unescape('sourceOffsetY'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_at_", [(13)]), "_at_", [(2)]);
return self;},
args: [],
source: unescape('sourceOffsetY%0A%09%5E%20%28object%20at%3A%2013%29%20at%3A%202'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethodDebugEditor);



smalltalk.addClass('MaglevHaltedThreadListener', smalltalk.Object, ['container', 'interval', 'timer', 'renderedOops', 'html', 'navbar'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
(self['@container']=smalltalk.send(unescape("%23halted-threads-navigation"), "_asJQuery", []));
(self['@navbar']=smalltalk.send(unescape("%23halted-threads-navbar"), "_asJQuery", []));
smalltalk.send(self['@navbar'], "_hide", []);
(self['@html']=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [self['@container']]));
(self['@renderedOops']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09container%20%3A%3D%20%27%23halted-threads-navigation%27%20asJQuery.%0A%09navbar%20%3A%3D%20%27%23halted-threads-navbar%27%20asJQuery.%0A%09navbar%20hide.%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20container.%0A%09renderedOops%20%3A%3D%20Dictionary%20new.'),
messageSends: ["asJQuery", "hide", "onJQuery:", "new"],
referencedClasses: ["HTMLCanvas", "Dictionary"]
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_interval'),
smalltalk.method({
selector: unescape('interval'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@interval']) == nil || $receiver == undefined) ? (function(){return (self['@interval']=(2500));})() : $receiver;
return self['@interval'];
return self;},
args: [],
source: unescape('interval%0A%09interval%20ifNil%3A%20%5Binterval%20%3A%3D%202500%5D.%0A%09%5E%20interval'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_interval_'),
smalltalk.method({
selector: unescape('interval%3A'),
category: 'accessing',
fn: function (aNumber){
var self=this;
(self['@interval']=aNumber);
 clearInterval(self['@timer']); ;
smalltalk.send(self, "_startPolling", []);
return self;},
args: ["aNumber"],
source: unescape('interval%3A%20aNumber%0A%09interval%20%3A%3D%20aNumber.%0A%09%3C%20clearInterval%28self%5B%27@timer%27%5D%29%3B%20%3E.%0A%09self%20startPolling.'),
messageSends: ["startPolling"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'polling',
fn: function (){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["noBehavior", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_evalObject", []), "_evaluateWithoutUpdate_language_with_withCallback_", ["MaglevDatabaseExplorer.halted_threads", "ruby", params, (function(success, obj){var currentOops=nil;
return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){(currentOops=smalltalk.send((smalltalk.Set || Set), "_new", []));smalltalk.send(obj, "_do_", [(function(el){((($receiver = smalltalk.send(self['@renderedOops'], "_includesKey_", [smalltalk.send(el, "_oop", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})]));return smalltalk.send(currentOops, "_add_", [smalltalk.send(el, "_oop", [])]);})]);smalltalk.send(self['@renderedOops'], "_keysAndValuesDo_", [(function(oop, comp){return ((($receiver = smalltalk.send(currentOops, "_includes_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})]));})]);return ((($receiver = smalltalk.send(smalltalk.send(self['@renderedOops'], "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@navbar'], "_hide", []);})() : (function(){return smalltalk.send(self['@navbar'], "_show", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@navbar'], "_hide", []);}), (function(){return smalltalk.send(self['@navbar'], "_show", []);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(currentOops=smalltalk.send((smalltalk.Set || Set), "_new", []));smalltalk.send(obj, "_do_", [(function(el){((($receiver = smalltalk.send(self['@renderedOops'], "_includesKey_", [smalltalk.send(el, "_oop", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_renderObject_with_", [smalltalk.send(el, "_oop", []), smalltalk.send(el, "_inlineViewComponent", [])]);})]));return smalltalk.send(currentOops, "_add_", [smalltalk.send(el, "_oop", [])]);})]);smalltalk.send(self['@renderedOops'], "_keysAndValuesDo_", [(function(oop, comp){return ((($receiver = smalltalk.send(currentOops, "_includes_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_removeObject_with_", [oop, comp]);})]));})]);return ((($receiver = smalltalk.send(smalltalk.send(self['@renderedOops'], "_size", []), "__eq", [(0)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@navbar'], "_hide", []);})() : (function(){return smalltalk.send(self['@navbar'], "_show", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@navbar'], "_hide", []);}), (function(){return smalltalk.send(self['@navbar'], "_show", []);})]));})]));})]);
return self;},
args: [],
source: unescape('refresh%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27allElements%27%20put%3A%20true%3B%0A%09%09at%3A%20%27noBehavior%27%20put%3A%20true%3B%0A%09%09yourself.%0A%09MaglevObjectSpace%20instance%20evalObject%20%0A%09%09evaluateWithoutUpdate%3A%20%27MaglevDatabaseExplorer.halted_threads%27%20%0A%09%09language%3A%20%27ruby%27%0A%09%09with%3A%20params%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3Aobj%20%7C%20%7CcurrentOops%7C%0A%09%09%09success%20ifTrue%3A%5B%0A%09%09%09currentOops%20%3A%3D%20Set%20new.%0A%09%09%09obj%20do%3A%20%5B%3Ael%20%7C%20%0A%09%09%09%09%28renderedOops%20includesKey%3A%20el%20oop%29%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20renderObject%3A%20el%20oop%20with%3A%20el%20inlineViewComponent%5D.%0A%09%09%09%09currentOops%20add%3A%20el%20oop%5D.%0A%09%09%09renderedOops%20keysAndValuesDo%3A%20%5B%3Aoop%20%3Acomp%20%7C%0A%09%09%09%09%28currentOops%20includes%3A%20oop%29%0A%09%09%09%09%09ifFalse%3A%20%5Bself%20removeObject%3A%20oop%20with%3A%20comp%5D%5D.%0A%09%09%09renderedOops%20size%20%3D%200%0A%09%09%09%09ifTrue%3A%20%5Bnavbar%20hide%5D%0A%09%09%09%09ifFalse%3A%20%5Bnavbar%20show%5D%5D%5D.'),
messageSends: ["at:put:", "yourself", "new", "evaluateWithoutUpdate:language:with:withCallback:", "evalObject", "instance", "ifTrue:", "do:", "ifFalse:", "includesKey:", "oop", "renderObject:with:", "inlineViewComponent", "add:", "keysAndValuesDo:", "includes:", "removeObject:with:", "ifTrue:ifFalse:", unescape("%3D"), "size", "hide", "show"],
referencedClasses: ["Dictionary", "MaglevObjectSpace", "Set"]
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_removeObject_with_'),
smalltalk.method({
selector: unescape('removeObject%3Awith%3A'),
category: 'polling',
fn: function (oop, component){
var self=this;
smalltalk.send(smalltalk.send(component, "_asJQuery", []), "_remove", []);
smalltalk.send(self['@renderedOops'], "_removeKey_", [oop]);
return self;},
args: ["oop", "component"],
source: unescape('removeObject%3A%20oop%20with%3A%20component%0A%09component%20asJQuery%20remove.%0A%09renderedOops%20removeKey%3A%20oop.'),
messageSends: ["remove", "asJQuery", "removeKey:"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_renderObject_with_'),
smalltalk.method({
selector: unescape('renderObject%3Awith%3A'),
category: 'polling',
fn: function (oop, component){
var self=this;
var inlineContainer=nil;
(inlineContainer=(function($rec){smalltalk.send($rec, "_style_", [unescape("padding%3A%204px%202px%202px%204px%3B")]);return smalltalk.send($rec, "_with_", [component]);})(smalltalk.send(self['@html'], "_span", [])));
smalltalk.send(self['@renderedOops'], "_at_put_", [oop, inlineContainer]);
return self;},
args: ["oop", "component"],
source: unescape('renderObject%3A%20oop%20with%3A%20component%0A%09%7CinlineContainer%7C%0A%09inlineContainer%20%3A%3D%20html%20span%20%0A%09%09style%3A%20%27padding%3A%204px%202px%202px%204px%3B%27%3B%0A%09%09with%3A%20component.%0A%09renderedOops%20at%3A%20oop%20put%3A%20inlineContainer.'),
messageSends: ["style:", "with:", "span", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'initializing',
fn: function (){
var self=this;
(self['@timer']=smalltalk.send(self, "_startPolling", []));
return self;},
args: [],
source: unescape('start%0A%09timer%20%3A%3D%20self%20startPolling.'),
messageSends: ["startPolling"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);

smalltalk.addMethod(
unescape('_startPolling'),
smalltalk.method({
selector: unescape('startPolling'),
category: 'initializing',
fn: function (){
var self=this;
 return setInterval(function() {self._refresh();}, self._interval()); ;
return self;},
args: [],
source: unescape('startPolling%0A%09%3C%20return%20setInterval%28function%28%29%20%7Bself._refresh%28%29%3B%7D%2C%20self._interval%28%29%29%3B%20%3E%20'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener);


smalltalk.MaglevHaltedThreadListener.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'instance creation',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(self, "_new", []));})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5Binstance%20%3A%3D%20self%20new%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener.klass);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_instance", []), "_start", []);
return self;},
args: [],
source: unescape('start%0A%09self%20instance%20start.'),
messageSends: ["start", "instance"],
referencedClasses: []
}),
smalltalk.MaglevHaltedThreadListener.klass);


smalltalk.addClass('MaglevIcon', smalltalk.Widget, ['b', 'icon', 'spin', 'caption'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_caption'),
smalltalk.method({
selector: unescape('caption'),
category: 'accessing',
fn: function (){
var self=this;
return self['@caption'];
return self;},
args: [],
source: unescape('caption%0A%09%5E%20caption'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_caption_'),
smalltalk.method({
selector: unescape('caption%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@caption']=aString);
return self;},
args: ["aString"],
source: unescape('caption%3A%20aString%0A%09caption%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@b'], "_hide", []);
return self;},
args: [],
source: unescape('hide%0A%09b%20hide.'),
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon'),
smalltalk.method({
selector: unescape('icon'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@icon']) == nil || $receiver == undefined) ? (function(){return (self['@icon']="star");})() : $receiver;
return self['@icon'];
return self;},
args: [],
source: unescape('icon%0A%09icon%20ifNil%3A%20%5Bicon%20%3A%3D%20%27star%27%5D.%0A%09%5E%20icon'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_icon_'),
smalltalk.method({
selector: unescape('icon%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@icon']=aString);
return self;},
args: ["aString"],
source: unescape('icon%3A%20aString%0A%09icon%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_onClick_'),
smalltalk.method({
selector: unescape('onClick%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@b'], "_onClick_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onClick%3A%20aBlock%0A%09b%20onClick%3A%20aBlock.'),
messageSends: ["onClick:"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var cssClass=nil;
(cssClass=smalltalk.send(unescape("icon-"), "__comma", [smalltalk.send(self, "_icon", [])]));
((($receiver = smalltalk.send(self, "_spin", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (cssClass=smalltalk.send(cssClass, "__comma", [unescape("%20icon-spin")]));})]));
(($receiver = self['@caption']) == nil || $receiver == undefined) ? (function(){return (self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));})() : (function(){(self['@b']=(function($rec){smalltalk.send($rec, "_class_", [cssClass]);smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), self['@caption']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_b", [])));return smalltalk.send(smalltalk.send(self['@b'], "_asJQuery", []), "_tooltip", []);})();
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7CcssClass%7C%0A%09cssClass%20%3A%3D%20%27icon-%27%2C%20self%20icon.%0A%09self%20spin%20%0A%09%09ifTrue%3A%20%5BcssClass%20%3A%3D%20cssClass%2C%20%27%20icon-spin%27%5D.%0A%09caption%20%0A%09%09ifNil%3A%20%5Bb%20%3A%3D%20html%20b%0A%09%09%09%09class%3A%20cssClass%3B%0A%09%09%09%09yourself%5D%0A%09%09ifNotNil%3A%20%5Bb%20%3A%3D%20html%20b%0A%09%09%09%09class%3A%20cssClass%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27tooltip%27%3B%0A%09%09%09%09data%3A%20%27placement%27%20with%3A%20%27top%27%3B%0A%09%09%09%09data%3A%20%27original-title%27%20with%3A%20caption%3B%0A%09%09%09%09yourself.%0A%09%09%09b%20asJQuery%20tooltip%5D.'),
messageSends: [unescape("%2C"), "icon", "ifTrue:", "spin", "ifNil:ifNotNil:", "class:", "yourself", "b", "data:with:", "tooltip", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@b'], "_show", []);
return self;},
args: [],
source: unescape('show%0A%09b%20show.'),
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin'),
smalltalk.method({
selector: unescape('spin'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@spin']) == nil || $receiver == undefined) ? (function(){return (self['@spin']=false);})() : $receiver;
return self['@spin'];
return self;},
args: [],
source: unescape('spin%0A%09spin%20ifNil%3A%20%5Bspin%20%3A%3D%20false%5D.%0A%09%5E%20spin'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevIcon);

smalltalk.addMethod(
unescape('_spin_'),
smalltalk.method({
selector: unescape('spin%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@spin']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('spin%3A%20aBoolean%0A%09spin%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIcon);


smalltalk.addMethod(
unescape('_codeFork'),
smalltalk.method({
selector: unescape('codeFork'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("code-fork")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('codeFork%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27code-fork%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_flag'),
smalltalk.method({
selector: unescape('flag'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["flag"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('flag%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27flag%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_globe'),
smalltalk.method({
selector: unescape('globe'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["globe"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('globe%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27globe%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_hdd'),
smalltalk.method({
selector: unescape('hdd'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["hdd"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('hdd%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27hdd%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_listAlt'),
smalltalk.method({
selector: unescape('listAlt'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("list-alt")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('listAlt%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27list-alt%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_move'),
smalltalk.method({
selector: unescape('move'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["move"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('move%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27move%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pause'),
smalltalk.method({
selector: unescape('pause'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pause"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('pause%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27pause%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_pencil'),
smalltalk.method({
selector: unescape('pencil'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["pencil"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('pencil%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27pencil%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_play'),
smalltalk.method({
selector: unescape('play'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["play"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('play%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27play%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_playCircle'),
smalltalk.method({
selector: unescape('playCircle'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("play-circle")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('playCircle%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27play-circle%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["remove"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('remove%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27remove%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_resizeSmall'),
smalltalk.method({
selector: unescape('resizeSmall'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", [unescape("resize-small")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('resizeSmall%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27resize-small%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_search'),
smalltalk.method({
selector: unescape('search'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["search"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('search%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27search%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_star'),
smalltalk.method({
selector: unescape('star'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["star"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('star%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27star%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_stop'),
smalltalk.method({
selector: unescape('stop'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["stop"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('stop%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27stop%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_terminal'),
smalltalk.method({
selector: unescape('terminal'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["terminal"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('terminal%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27terminal%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_trash'),
smalltalk.method({
selector: unescape('trash'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["trash"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('trash%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27trash%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);

smalltalk.addMethod(
unescape('_wait'),
smalltalk.method({
selector: unescape('wait'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_icon_", ["refresh"]);smalltalk.send($rec, "_spin_", [true]);smalltalk.send($rec, "_caption_", ["Loading..."]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('wait%0A%09%5E%20self%20new%0A%09%09icon%3A%20%27refresh%27%3B%0A%09%09spin%3A%20true%3B%0A%09%09caption%3A%20%27Loading...%27%3B%0A%09%09yourself'),
messageSends: ["icon:", "spin:", "caption:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIcon.klass);


smalltalk.addClass('MaglevIconImage', smalltalk.Widget, ['src', 'cssClass', 'image', 'hidden'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_cssClass_'),
smalltalk.method({
selector: unescape('cssClass%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@cssClass']=aString);
return self;},
args: ["aString"],
source: unescape('cssClass%3A%20aString%0A%09cssClass%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_hidden'),
smalltalk.method({
selector: unescape('hidden'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@hidden']) == nil || $receiver == undefined) ? (function(){return (self['@hidden']=false);})() : $receiver;
return self['@hidden'];
return self;},
args: [],
source: unescape('hidden%0A%09hidden%20ifNil%3A%20%5Bhidden%20%3A%3D%20false%5D.%0A%09%5E%20hidden'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'interactions',
fn: function (){
var self=this;
(self['@hidden']=true);
(($receiver = self['@image']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@image'], "_hide", []);})() : nil;
return self;},
args: [],
source: unescape('hide%0A%09hidden%20%3A%3D%20true.%0A%09image%20ifNotNil%3A%20%5Bimage%20hide%5D.'),
messageSends: ["ifNotNil:", "hide"],
referencedClasses: []
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@image']=(function($rec){smalltalk.send($rec, "_src_", [self['@src']]);return smalltalk.send($rec, "_class_", [self['@cssClass']]);})(smalltalk.send(html, "_img", [])));
((($receiver = smalltalk.send(self, "_hidden", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@image'], "_hide", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@image'], "_hide", []);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09image%20%3A%3D%20html%20img%0A%09%09src%3A%20src%3B%0A%09%09class%3A%20cssClass.%0A%09self%20hidden%20ifTrue%3A%20%5Bimage%20hide%5D.'),
messageSends: ["src:", "class:", "img", "ifTrue:", "hidden", "hide"],
referencedClasses: []
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'interactions',
fn: function (){
var self=this;
(self['@hidden']=false);
(($receiver = self['@image']) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self['@image'], "_show", []);})() : nil;
return self;},
args: [],
source: unescape('show%0A%09hidden%20%3A%3D%20false.%0A%09image%20ifNotNil%3A%20%5Bimage%20show%5D.'),
messageSends: ["ifNotNil:", "show"],
referencedClasses: []
}),
smalltalk.MaglevIconImage);

smalltalk.addMethod(
unescape('_src_'),
smalltalk.method({
selector: unescape('src%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@src']=aString);
return self;},
args: ["aString"],
source: unescape('src%3A%20aString%0A%09src%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevIconImage);


smalltalk.addMethod(
unescape('_rails'),
smalltalk.method({
selector: unescape('rails'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/rails_tiny.png")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('rails%0A%09%5E%20self%20new%0A%09%09src%3A%20%27images/rails_tiny.png%27%3B%0A%09%09yourself'),
messageSends: ["src:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_ruby'),
smalltalk.method({
selector: unescape('ruby'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/ruby.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('ruby%0A%09%5E%20self%20new%0A%09%09src%3A%20%27images/ruby.png%27%3B%0A%09%09cssClass%3A%20%27icon-language%27%3B%0A%09%09yourself'),
messageSends: ["src:", "cssClass:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_rubySmalltalkBridge'),
smalltalk.method({
selector: unescape('rubySmalltalkBridge'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/ruby_smalltalk_bridge.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('rubySmalltalkBridge%0A%09%5E%20self%20new%0A%09%09src%3A%20%27images/ruby_smalltalk_bridge.png%27%3B%0A%09%09cssClass%3A%20%27icon-language%27%3B%0A%09%09yourself'),
messageSends: ["src:", "cssClass:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIconImage.klass);

smalltalk.addMethod(
unescape('_smalltalk'),
smalltalk.method({
selector: unescape('smalltalk'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_src_", [unescape("images/smalltalk.png")]);smalltalk.send($rec, "_cssClass_", [unescape("icon-language")]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('smalltalk%0A%09%5E%20self%20new%0A%09%09src%3A%20%27images/smalltalk.png%27%3B%0A%09%09cssClass%3A%20%27icon-language%27%3B%0A%09%09yourself'),
messageSends: ["src:", "cssClass:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevIconImage.klass);


smalltalk.addClass('MaglevListBox', smalltalk.Widget, ['list', 'changedCallback', 'htmlIv', 'divContainer', 'height', 'searchbox', 'searchInput', 'olContainer', 'olHeightBeforeSearch'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindEvents'),
smalltalk.method({
selector: unescape('bindEvents'),
category: 'interactions',
fn: function (){
var self=this;
 self['@list']._asJQuery().selectable({
		stop: function() {self._selectionChanged();},
		tolerance: 'fit'}); ;
return self;},
args: [],
source: unescape('bindEvents%0A%09%3C%20self%5B%27@list%27%5D._asJQuery%28%29.selectable%28%7B%0A%09%09stop%3A%20function%28%29%20%7Bself._selectionChanged%28%29%3B%7D%2C%0A%09%09tolerance%3A%20%27fit%27%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_changedCallback_'),
smalltalk.method({
selector: unescape('changedCallback%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
(self['@changedCallback']=aBlock);
return self;},
args: ["aBlock"],
source: unescape('changedCallback%3A%20aBlock%0A%09changedCallback%20%3A%3D%20aBlock.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: unescape('clear%0A%09list%20asJQuery%20empty.'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_commandFind'),
smalltalk.method({
selector: unescape('commandFind'),
category: 'interactions',
fn: function (){
var self=this;
(self['@olHeightBeforeSearch']=smalltalk.send(self, "_height", []));
smalltalk.send(self['@searchbox'], "_show", []);
smalltalk.send(self, "_height_", [smalltalk.send(self, "_height", [])]);
smalltalk.send(smalltalk.send(self['@searchInput'], "_asJQuery", []), "_focus", []);
return self;},
args: [],
source: unescape('commandFind%0A%09olHeightBeforeSearch%20%3A%3D%20self%20height.%0A%09searchbox%20show.%0A%09self%20height%3A%20self%20height.%0A%09searchInput%20asJQuery%20focus.'),
messageSends: ["height", "show", "height:", "focus", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_filterResults'),
smalltalk.method({
selector: unescape('filterResults'),
category: 'interactions',
fn: function (){
var self=this;
var text=nil;
(text=smalltalk.send(smalltalk.send(self['@searchInput'], "_asJQuery", []), "_val", []));
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_each_", [(function(idx, htmlEl){var el=nil;
 el = $(htmlEl); ;return ((($receiver = smalltalk.send(smalltalk.send(el, "_text", []), "_includesSubString_", [text])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(el, "_show", []);})() : (function(){return smalltalk.send(el, "_hide", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(el, "_show", []);}), (function(){return smalltalk.send(el, "_hide", []);})]));})]);
smalltalk.send(self, "_hideSearchBox", []);
return self;},
args: [],
source: unescape('filterResults%0A%09%7Ctext%7C%0A%09text%20%3A%3D%20searchInput%20asJQuery%20val.%0A%09%28list%20asJQuery%20find%3A%20%27li%27%29%20each%3A%20%5B%3Aidx%20%3AhtmlEl%20%7C%20%7Cel%7C%0A%09%09%3C%20el%20%3D%20%24%28htmlEl%29%3B%20%3E.%0A%09%09%28el%20text%20includesSubString%3A%20text%29%0A%09%09%09ifTrue%3A%20%5Bel%20show%5D%0A%09%09%09ifFalse%3A%20%5Bel%20hide%5D%5D.%0A%09self%20hideSearchBox.'),
messageSends: ["val", "asJQuery", "each:", "find:", "ifTrue:ifFalse:", "includesSubString:", "text", "show", "hide", "hideSearchBox"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_focus'),
smalltalk.method({
selector: unescape('focus'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_focus", []);
return self;},
args: [],
source: unescape('focus%0A%09list%20asJQuery%20focus.'),
messageSends: ["focus", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_height'),
smalltalk.method({
selector: unescape('height'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@olContainer'], "_asJQuery", []), "_height", []);
return self;},
args: [],
source: unescape('height%0A%09%5E%20olContainer%20asJQuery%20height'),
messageSends: ["height", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_height_'),
smalltalk.method({
selector: unescape('height%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
var searchboxHeight=nil;
((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_is_", [":visible"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (searchboxHeight=((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)])));})() : (function(){return (searchboxHeight=(0));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (searchboxHeight=((($receiver = smalltalk.send(smalltalk.send(self['@searchbox'], "_asJQuery", []), "_height", [])).klass === smalltalk.Number) ? $receiver +(2) : smalltalk.send($receiver, "__plus", [(2)])));}), (function(){return (searchboxHeight=(0));})]));
(self['@height']=anInteger);
smalltalk.send(smalltalk.send(self['@olContainer'], "_asJQuery", []), "_css_data_", ["height", smalltalk.send(smalltalk.send(((($receiver = anInteger).klass === smalltalk.Number) ? $receiver -searchboxHeight : smalltalk.send($receiver, "__minus", [searchboxHeight])), "_asString", []), "__comma", ["px"])]);
return self;},
args: ["anInteger"],
source: unescape('height%3A%20anInteger%0A%09%7CsearchboxHeight%7C%0A%09%28searchbox%20asJQuery%20is%3A%20%27%3Avisible%27%29%0A%09%09ifTrue%3A%20%5BsearchboxHeight%20%3A%3D%20searchbox%20asJQuery%20height%20+%202%5D%0A%09%09ifFalse%3A%20%5BsearchboxHeight%20%3A%3D%200%5D.%0A%09height%20%3A%3D%20anInteger.%0A%09olContainer%20asJQuery%20css%3A%20%27height%27%20data%3A%20%28anInteger%20-%20searchboxHeight%29%20asString%2C%20%27px%27.'),
messageSends: ["ifTrue:ifFalse:", "is:", "asJQuery", unescape("+"), "height", "css:data:", unescape("%2C"), "asString", unescape("-")],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_hide", []);
return self;},
args: [],
source: unescape('hide%0A%09list%20hide.'),
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_hideSearchBox'),
smalltalk.method({
selector: unescape('hideSearchBox'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@searchbox'], "_hide", []);
smalltalk.send(self, "_height_", [self['@olHeightBeforeSearch']]);
smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_focus", []);
return self;},
args: [],
source: unescape('hideSearchBox%0A%09searchbox%20hide.%0A%09self%20height%3A%20olHeightBeforeSearch.%0A%09list%20asJQuery%20focus.'),
messageSends: ["hide", "height:", "focus", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_makeResizable'),
smalltalk.method({
selector: unescape('makeResizable'),
category: 'rendering',
fn: function (){
var self=this;
 self['@olContainer']._asJQuery().resizable({handles: 's'}); ;
return self;},
args: [],
source: unescape('makeResizable%0A%09%3C%20self%5B%27@olContainer%27%5D._asJQuery%28%29.resizable%28%7Bhandles%3A%20%27s%27%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_moveSelectionDown'),
smalltalk.method({
selector: unescape('moveSelectionDown'),
category: 'interactions',
fn: function (){
var self=this;
var newIndex=nil;
(newIndex=((($receiver = ((($receiver = smalltalk.send(self, "_selectedDataVisibleIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
((($receiver = smalltalk.send(newIndex, "__eq", [smalltalk.send(self, "_sizeVisible", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (newIndex=(0));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (newIndex=(0));})]));
smalltalk.send(self, "_unselectAll", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [smalltalk.send(smalltalk.send(unescape("li%3Avisible%3Aeq%28"), "__comma", [smalltalk.send(newIndex, "_asString", [])]), "__comma", [unescape("%29")])]), "_addClass_", [unescape("ui-selected")]);
smalltalk.send(self, "_selectionChanged", []);
return self;},
args: [],
source: unescape('moveSelectionDown%0A%09%7CnewIndex%7C%0A%09newIndex%20%3A%3D%20self%20selectedDataVisibleIndex%20+%201%20-%201.%0A%09newIndex%20%3D%20self%20sizeVisible%20ifTrue%3A%20%5BnewIndex%20%3A%3D%200%5D.%0A%09self%20unselectAll.%0A%09%28list%20asJQuery%20find%3A%20%27li%3Avisible%3Aeq%28%27%2C%20newIndex%20asString%2C%20%27%29%27%29%20addClass%3A%20%27ui-selected%27.%0A%09self%20selectionChanged.'),
messageSends: [unescape("-"), unescape("+"), "selectedDataVisibleIndex", "ifTrue:", unescape("%3D"), "sizeVisible", "unselectAll", "addClass:", "find:", "asJQuery", unescape("%2C"), "asString", "selectionChanged"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_moveSelectionUp'),
smalltalk.method({
selector: unescape('moveSelectionUp'),
category: 'interactions',
fn: function (){
var self=this;
var newIndex=nil;
(newIndex=((($receiver = ((($receiver = smalltalk.send(self, "_selectedDataVisibleIndex", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));
((($receiver = ((($receiver = newIndex).klass === smalltalk.Number) ? $receiver <(0) : smalltalk.send($receiver, "__lt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (newIndex=((($receiver = smalltalk.send(self, "_sizeVisible", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (newIndex=((($receiver = smalltalk.send(self, "_sizeVisible", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])));})]));
smalltalk.send(self, "_unselectAll", []);
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [smalltalk.send(smalltalk.send(unescape("li%3Avisible%3Aeq%28"), "__comma", [smalltalk.send(newIndex, "_asString", [])]), "__comma", [unescape("%29")])]), "_addClass_", [unescape("ui-selected")]);
smalltalk.send(self, "_selectionChanged", []);
return self;},
args: [],
source: unescape('moveSelectionUp%0A%09%7CnewIndex%7C%0A%09newIndex%20%3A%3D%20self%20selectedDataVisibleIndex%20-%201%20-%201.%0A%09newIndex%20%3C%200%20ifTrue%3A%20%5BnewIndex%20%3A%3D%20self%20sizeVisible%20-%201%5D.%0A%09self%20unselectAll.%0A%09%28list%20asJQuery%20find%3A%20%27li%3Avisible%3Aeq%28%27%2C%20newIndex%20asString%2C%20%27%29%27%29%20addClass%3A%20%27ui-selected%27.%0A%09self%20selectionChanged.'),
messageSends: [unescape("-"), "selectedDataVisibleIndex", "ifTrue:", unescape("%3C"), "sizeVisible", "unselectAll", "addClass:", "find:", "asJQuery", unescape("%2C"), "asString", "selectionChanged"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@divContainer']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){smalltalk.send(self, "_renderSearchBoxOn_", [html]);(self['@olContainer']=(function($rec){smalltalk.send($rec, "_style_", [unescape("overflow%3A%20hidden%3B%20border%3A%201px%20solid%20%23aaaaaa")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@list']=(function($rec){smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B%20border%3A%20none%3B%20outline%3A%20none%3B")]);smalltalk.send($rec, "_at_put_", ["tabindex", "1"]);smalltalk.send($rec, "_onKeyDown_", [(function(e){smalltalk.send(e, "_preventDefault", []);((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(40)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_moveSelectionDown", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_moveSelectionDown", []);})]));((($receiver = smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(38)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_moveSelectionUp", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_moveSelectionUp", []);})]));return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(e, "_keyCode", []), "__eq", [(70)]), "_and_", [(function(){return smalltalk.send(e, "_ctrlKey", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_commandFind", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_commandFind", []);})]));})]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_focus", []);})]);})(smalltalk.send(html, "_ol", [])));})]);})(smalltalk.send(html, "_div", [])));smalltalk.send(self, "_makeResizable", []);return (self['@htmlIv']=html);})]));
smalltalk.send(self, "_bindEvents", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09divContainer%20%3A%3D%20html%20div%20with%3A%20%5B%0A%09%09self%20renderSearchBoxOn%3A%20html.%0A%09%09olContainer%20%3A%3D%20html%20div%20%0A%09%09%09style%3A%20%27overflow%3A%20hidden%3B%20border%3A%201px%20solid%20%23aaaaaa%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09list%20%3A%3D%20html%20ol%0A%09%09%09%09%09style%3A%20%27width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B%20border%3A%20none%3B%20outline%3A%20none%3B%27%3B%0A%09%09%09%09%09at%3A%20%27tabindex%27%20put%3A%20%271%27%3B%0A%09%09%09%09%09onKeyDown%3A%20%5B%3Ae%20%7C%20%0A%09%09%09%09%09%09e%20preventDefault.%20%0A%09%09%09%09%09%09e%20keyCode%20%3D%2040%20ifTrue%3A%20%5Bself%20moveSelectionDown%5D.%0A%09%09%09%09%09%09e%20keyCode%20%3D%2038%20ifTrue%3A%20%5Bself%20moveSelectionUp%5D.%0A%09%09%09%09%09%09%28e%20keyCode%20%3D%2070%20and%3A%20%5Be%20ctrlKey%5D%29%20ifTrue%3A%20%5Bself%20commandFind%5D%5D%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20focus%5D%5D.%0A%09%09self%20makeResizable.%0A%09%09htmlIv%20%3A%3D%20html%5D.%0A%09self%20bindEvents.'),
messageSends: ["with:", "div", "renderSearchBoxOn:", "style:", "at:put:", "onKeyDown:", "preventDefault", "ifTrue:", unescape("%3D"), "keyCode", "moveSelectionDown", "moveSelectionUp", "and:", "ctrlKey", "commandFind", "onClick:", "focus", "ol", "makeResizable", "bindEvents"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_renderSearchBoxOn_'),
smalltalk.method({
selector: unescape('renderSearchBoxOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@searchbox']=(function($rec){smalltalk.send($rec, "_class_", [unescape("input-prepend")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%202px%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2052px%3B%20width%3A%20100%25%3B")]);smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("add-on")]);return smalltalk.send($rec, "_with_", ["find"]);})(smalltalk.send(html, "_span", []));return (self['@searchInput']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_class_", ["span2"]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_filterResults", []);})]);return smalltalk.send($rec, "_onFocusOut_", [(function(){return smalltalk.send(self, "_hideSearchBox", []);})]);})(smalltalk.send(html, "_input", [])));})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
return self;},
args: ["html"],
source: unescape('renderSearchBoxOn%3A%20html%0A%09searchbox%20%3A%3D%20html%20div%0A%09%09class%3A%20%27input-prepend%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%202px%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2052px%3B%20width%3A%20100%25%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%20%0A%09%09%09%09class%3A%20%27add-on%27%3B%0A%09%09%09%09%20with%3A%20%27find%27.%0A%09%09%09searchInput%20%3A%3D%20html%20input%0A%09%09%09%09type%3A%20%27text%27%3B%0A%09%09%09%09class%3A%20%27span2%27%3B%0A%09%09%09%09style%3A%20%27width%3A%20100%25%3B%27%3B%0A%09%09%09%09onChange%3A%20%5Bself%20filterResults%5D%3B%0A%09%09%09%09onFocusOut%3A%20%5Bself%20hideSearchBox%5D%5D%3B%0A%09%09hide.'),
messageSends: ["class:", "style:", "with:", "span", "type:", "onChange:", "filterResults", "onFocusOut:", "hideSearchBox", "input", "hide", "div"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedData'),
smalltalk.method({
selector: unescape('selectedData'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape(".ui-selected")]), "_data_", ["data"]);
return self;},
args: [],
source: unescape('selectedData%0A%09%5E%20%28list%20asJQuery%20find%3A%20%27.ui-selected%27%29%20data%3A%20%27data%27'),
messageSends: ["data:", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedDataIndex'),
smalltalk.method({
selector: unescape('selectedDataIndex'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape(".ui-selected")]), "_index", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('selectedDataIndex%0A%09%5E%20%28list%20asJQuery%20find%3A%20%27.ui-selected%27%29%20index%20+%201'),
messageSends: [unescape("+"), "index", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectedDataVisibleIndex'),
smalltalk.method({
selector: unescape('selectedDataVisibleIndex'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li:visible"]), "_index_", [smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", [unescape("li.ui-selected")])])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('selectedDataVisibleIndex%0A%09%5E%20%28%28list%20asJQuery%20find%3A%20%27li%3Avisible%27%29%20index%3A%20%28list%20asJQuery%20find%3A%20%27li.ui-selected%27%29%29%20+%201'),
messageSends: [unescape("+"), "index:", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_selectionChanged'),
smalltalk.method({
selector: unescape('selectionChanged'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_focus", []);
smalltalk.send(self['@changedCallback'], "_value_value_", [smalltalk.send(self, "_selectedData", []), smalltalk.send(self, "_selectedDataIndex", [])]);
return self;},
args: [],
source: unescape('selectionChanged%0A%09self%20focus.%0A%09changedCallback%20value%3A%20self%20selectedData%20value%3A%20self%20selectedDataIndex.'),
messageSends: ["focus", "value:value:", "selectedData", "selectedDataIndex"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_show", []);
return self;},
args: [],
source: unescape('show%0A%09list%20show.'),
messageSends: ["show"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_size'),
smalltalk.method({
selector: unescape('size'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_length", []);
return self;},
args: [],
source: unescape('size%0A%09%5E%20%28list%20asJQuery%20find%3A%20%27li%27%29%20length'),
messageSends: ["length", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_sizeVisible'),
smalltalk.method({
selector: unescape('sizeVisible'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li:visible"]), "_length", []);
return self;},
args: [],
source: unescape('sizeVisible%0A%09%5E%20%28list%20asJQuery%20find%3A%20%27li%3Avisible%27%29%20length'),
messageSends: ["length", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_style_'),
smalltalk.method({
selector: unescape('style%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self['@divContainer'], "_style_", [aString]);
return self;},
args: ["aString"],
source: unescape('style%3A%20aString%0A%09divContainer%20style%3A%20aString.'),
messageSends: ["style:"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_unselectAll'),
smalltalk.method({
selector: unescape('unselectAll'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self['@list'], "_asJQuery", []), "_find_", ["li"]), "_removeClass_", [unescape("ui-selected")]);
return self;},
args: [],
source: unescape('unselectAll%0A%09%28list%20asJQuery%20find%3A%20%27li%27%29%20removeClass%3A%20%27ui-selected%27.'),
messageSends: ["removeClass:", "find:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_'),
smalltalk.method({
selector: unescape('with%3A'),
category: 'rendering',
fn: function (content){
var self=this;
smalltalk.send(self, "_with_data_darker_", [content, "", false]);
return self;},
args: ["content"],
source: unescape('with%3A%20content%0A%09self%20with%3A%20content%20data%3A%20%27%27%20darker%3A%20false.'),
messageSends: ["with:data:darker:"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_darker_'),
smalltalk.method({
selector: unescape('with%3Adarker%3A'),
category: 'rendering',
fn: function (content, aBoolean){
var self=this;
smalltalk.send(self, "_with_data_darker_", [content, "", aBoolean]);
return self;},
args: ["content", "aBoolean"],
source: unescape('with%3A%20content%20darker%3A%20aBoolean%0A%09self%20with%3A%20content%20data%3A%20%27%27%20darker%3A%20aBoolean.'),
messageSends: ["with:data:darker:"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_data_'),
smalltalk.method({
selector: unescape('with%3Adata%3A'),
category: 'rendering',
fn: function (content, dataString){
var self=this;
smalltalk.send(self['@list'], "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content")]);smalltalk.send($rec, "_data_with_", ["data", dataString]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(content, "_value_", [self['@htmlIv']]);})]);})(smalltalk.send(self['@htmlIv'], "_li", []));})]);
return self;},
args: ["content", "dataString"],
source: unescape('with%3A%20content%20data%3A%20dataString%0A%09%22%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20list%20asJQuery.%22%0A%09list%20with%3A%20%5B%0A%09%09htmlIv%20li%0A%09%09%09class%3A%20%27ui-widget-content%27%3B%0A%09%09%09data%3A%20%27data%27%20with%3A%20dataString%3B%0A%09%09%09with%3A%20%5Bcontent%20value%3A%20htmlIv%5D%5D.'),
messageSends: ["with:", "class:", "data:with:", "value:", "li"],
referencedClasses: []
}),
smalltalk.MaglevListBox);

smalltalk.addMethod(
unescape('_with_data_darker_'),
smalltalk.method({
selector: unescape('with%3Adata%3Adarker%3A'),
category: 'rendering',
fn: function (content, dataString, aBoolean){
var self=this;
smalltalk.send(self['@list'], "_with_", [(function(){var li=nil;
(li=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content")]);smalltalk.send($rec, "_data_with_", ["data", dataString]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(content, "_value_", [self['@htmlIv']]);})]);})(smalltalk.send(self['@htmlIv'], "_li", [])));return ((($receiver = aBoolean).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_addClass_", [unescape("list-darker")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(li, "_asJQuery", []), "_addClass_", [unescape("list-darker")]);})]));})]);
return self;},
args: ["content", "dataString", "aBoolean"],
source: unescape('with%3A%20content%20data%3A%20dataString%20darker%3A%20aBoolean%0A%09list%20with%3A%20%5B%20%7Cli%7C%0A%09%09li%20%3A%3D%20htmlIv%20li%0A%09%09%09class%3A%20%27ui-widget-content%27%3B%0A%09%09%09data%3A%20%27data%27%20with%3A%20dataString%3B%0A%09%09%09with%3A%20%5Bcontent%20value%3A%20htmlIv%5D.%0A%09%09aBoolean%20ifTrue%3A%20%5Bli%20asJQuery%20addClass%3A%20%27list-darker%27%5D%5D.'),
messageSends: ["with:", "class:", "data:with:", "value:", "li", "ifTrue:", "addClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevListBox);



smalltalk.addClass('MaglevObjectDropdown', smalltalk.Widget, ['container', 'resultContainer', 'editor', 'editorElement', 'rubyButton', 'smalltalkButton', 'object'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToInlineObject_for_'),
smalltalk.method({
selector: unescape('appendToInlineObject%3Afor%3A'),
category: 'interactions',
fn: function (anObject, dropdownContainer){
var self=this;
(self['@object']=smalltalk.send(anObject, "_object", []));
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_appendTo_", [smalltalk.send(dropdownContainer, "_asJQuery", [])]);
return self;},
args: ["anObject", "dropdownContainer"],
source: unescape('appendToInlineObject%3A%20anObject%20for%3A%20dropdownContainer%0A%09object%20%3A%3D%20anObject%20object.%0A%09container%20asJQuery%20appendTo%3A%20dropdownContainer%20asJQuery.'),
messageSends: ["object", "appendTo:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_code'),
smalltalk.method({
selector: unescape('code'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@editor'], "_getValue", []);
return self;},
args: [],
source: unescape('code%0A%09%5E%20editor%20getValue'),
messageSends: ["getValue"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalDoIt'),
smalltalk.method({
selector: unescape('evalDoIt'),
category: 'interactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('evalDoIt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalInspectIt'),
smalltalk.method({
selector: unescape('evalInspectIt'),
category: 'interactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('evalInspectIt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_evalPrintIt'),
smalltalk.method({
selector: unescape('evalPrintIt'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_executeWithCallback_", [(function(success, resultObj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);}), (function(){return smalltalk.send(self['@resultContainer'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]));})]);
return self;},
args: [],
source: unescape('evalPrintIt%0A%09self%20executeWithCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%20%0A%09%09success%0A%09%09%09ifTrue%3A%20%5BresultContainer%20with%3A%20resultObj%20inlineViewComponent%5D%0A%09%09%09ifFalse%3A%20%5BresultContainer%20with%3A%20resultObj%20inlineViewComponent%5D%5D.'),
messageSends: ["executeWithCallback:", "ifTrue:ifFalse:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_executeWithCallback_'),
smalltalk.method({
selector: unescape('executeWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@resultContainer']);
smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@resultContainer']);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", [smalltalk.send(self, "_code", []), smalltalk.send(self, "_language", []), (function(success, resultObj){smalltalk.send(smalltalk.send(self['@resultContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@resultContainer'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@resultContainer'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(aBlock, "_value_value_", [success, resultObj]);})]);
return self;},
args: ["aBlock"],
source: unescape('executeWithCallback%3A%20aBlock%0A%09resultContainer%0A%09%09addClass%3A%20%27alert-info%27%3B%0A%09%09removeClass%3A%20%27alert-success%27%3B%0A%09%09removeClass%3A%20%27alert-error%27.%0A%09resultContainer%20asJQuery%20empty.%0A%09resultContainer%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27%3B%0A%09%09show.%0A%09object%20%0A%09%09evaluate%3A%20self%20code%20%0A%09%09language%3A%20self%20language%20%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09resultContainer%20asJQuery%20empty.%0A%09%09%09resultContainer%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5BresultContainer%20addClass%3A%20%27alert-success%27%5D%0A%09%09%09%09ifFalse%3A%20%5BresultContainer%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09aBlock%20value%3A%20success%20value%3A%20resultObj%5D'),
messageSends: ["addClass:", "removeClass:", "empty", "asJQuery", "with:", "wait", "show", "evaluate:language:withCallback:", "code", "language", "ifTrue:ifFalse:", "value:value:"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_initializeEditor'),
smalltalk.method({
selector: unescape('initializeEditor'),
category: 'initializing',
fn: function (){
var self=this;
var params=nil;
var extraKeys=nil;
(extraKeys=(function($rec){smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-D"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-P"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);smalltalk.send($rec, "_basicAt_put_", [unescape("Ctrl-S"), (function(){return smalltalk.send(self, "_evalPrintIt", []);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(params=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["mode", unescape("text/x-ruby")]);smalltalk.send($rec, "_basicAt_put_", ["styleActiveLine", true]);smalltalk.send($rec, "_basicAt_put_", ["lineNumbers", true]);smalltalk.send($rec, "_basicAt_put_", ["matchBrackets", true]);smalltalk.send($rec, "_basicAt_put_", ["extraKeys", extraKeys]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(self['@editor']=smalltalk.send((smalltalk.CodeMirror || CodeMirror), "_value_value_", [smalltalk.send(smalltalk.send(self['@editorElement'], "_asJQuery", []), "_at_", [(0)]), params]));
smalltalk.send(self['@editor'], "_setValue_", [""]);
return self;},
args: [],
source: unescape('initializeEditor%0A%09%7Cparams%20extraKeys%7C%0A%09extraKeys%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27Ctrl-D%27%20put%3A%20%5Bself%20evalPrintIt%5D%3B%0A%09%09basicAt%3A%20%27Ctrl-P%27%20put%3A%20%5Bself%20evalPrintIt%5D%3B%0A%09%09basicAt%3A%20%27Ctrl-S%27%20put%3A%20%5Bself%20evalPrintIt%5D%3B%0A%09%09yourself.%0A%09params%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27mode%27%20put%3A%20%27text/x-ruby%27%3B%0A%09%09basicAt%3A%20%27styleActiveLine%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27lineNumbers%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27matchBrackets%27%20put%3A%20true%3B%0A%09%09basicAt%3A%20%27extraKeys%27%20put%3A%20extraKeys%3B%0A%09%09yourself.%20%0A%09editor%20%3A%3D%20CodeMirror%20value%3A%20%28editorElement%20asJQuery%20at%3A%200%29%20value%3A%20params.%0A%09editor%20setValue%3A%20%27%27.'),
messageSends: ["basicAt:put:", "evalPrintIt", "yourself", "new", "value:value:", "at:", "asJQuery", "setValue:"],
referencedClasses: ["Object", "CodeMirror"]
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isRuby'),
smalltalk.method({
selector: unescape('isRuby'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@rubyButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;},
args: [],
source: unescape('isRuby%0A%09%5E%20rubyButton%20asJQuery%20hasClass%3A%20%27active%27'),
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_isSmalltalk'),
smalltalk.method({
selector: unescape('isSmalltalk'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@smalltalkButton'], "_asJQuery", []), "_hasClass_", ["active"]);
return self;},
args: [],
source: unescape('isSmalltalk%0A%09%5E%20smalltalkButton%20asJQuery%20hasClass%3A%20%27active%27'),
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_language'),
smalltalk.method({
selector: unescape('language'),
category: 'accessing',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "ruby"}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_language', fn: function(){return "smalltalk"}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_language'){return e.fn()} throw(e)}},
args: [],
source: unescape('language%0A%09self%20isRuby%0A%09%09ifTrue%3A%20%5B%5E%20%27ruby%27%5D%0A%09%09ifFalse%3A%20%5B%5E%20%27smalltalk%27%5D'),
messageSends: ["ifTrue:ifFalse:", "isRuby"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_languageChanged'),
smalltalk.method({
selector: unescape('languageChanged'),
category: 'interactions',
fn: function (){
var self=this;
((($receiver = smalltalk.send(self, "_isRuby", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);})() : (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})()) : smalltalk.send($receiver, "_ifFalse_ifTrue_", [(function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-ruby")]);}), (function(){return smalltalk.send(self['@editor'], "_setOption_data_", ["mode", unescape("text/x-stsrc")]);})]));
return self;},
args: [],
source: unescape('languageChanged%0A%09self%20isRuby%0A%09%09ifFalse%3A%20%5Beditor%20setOption%3A%20%27mode%27%20data%3A%20%27text/x-ruby%27%5D%0A%09%09ifTrue%3A%20%5Beditor%20setOption%3A%20%27mode%27%20data%3A%20%27text/x-stsrc%27%5D.'),
messageSends: ["ifFalse:ifTrue:", "isRuby", "setOption:data:"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
category: 'initializing',
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
return self;},
args: [],
source: unescape('mouseFix%0A%09%3C%20var%20menu%20%3D%20self%5B%27@container%27%5D%3B%0A%09var%20editor%20%3D%20self%5B%27@editorElement%27%5D%3B%0A%09menu._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%0A%09editor._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%2010px%3B")]);smalltalk.send($rec, "_with_", ["Print it"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_evalPrintIt", []);})]);})(smalltalk.send(html, "_button", []));
(function($rec){smalltalk.send($rec, "_class_", [unescape("btn-group")]);smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B")]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-radio")]);return smalltalk.send($rec, "_with_", [(function(){(self['@rubyButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn active"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_languageChanged", []);})]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Ruby"]);})(smalltalk.send(html, "_button", [])));return (self['@smalltalkButton']=(function($rec){smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_data_with_", ["toggle", unescape("buttons-checkbox")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_languageChanged", []);})]);smalltalk.send($rec, "_type_", ["button"]);return smalltalk.send($rec, "_with_", ["Smalltalk"]);})(smalltalk.send(html, "_button", [])));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09%22html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09with%3A%20%27Do%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalDoIt%5D.%22%0A%09html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09style%3A%20%27margin-right%3A%2010px%3B%27%3B%0A%09%09with%3A%20%27Print%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalPrintIt%5D.%0A%09%22html%20button%0A%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09type%3A%20%27button%27%3B%0A%09%09with%3A%20%27Inspect%20it%27%3B%0A%09%09onClick%3A%20%5Bself%20evalInspectIt%5D.%22%0A%09html%20div%0A%09%09class%3A%20%27btn-group%27%3B%0A%09%09style%3A%20%27float%3A%20right%3B%27%3B%0A%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-radio%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09rubyButton%20%3A%3D%20html%20button%0A%09%09%09%09class%3A%20%27btn%20active%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-checkbox%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20languageChanged%5D%3B%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09with%3A%20%27Ruby%27.%0A%09%09%09smalltalkButton%20%3A%3D%20html%20button%0A%09%09%09%09class%3A%20%27btn%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27buttons-checkbox%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20languageChanged%5D%3B%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09with%3A%20%27Smalltalk%27%5D.'),
messageSends: ["class:", "type:", "style:", "with:", "onClick:", "evalPrintIt", "button", "data:with:", "languageChanged", "div"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderFormOn_'),
smalltalk.method({
selector: unescape('renderFormOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("margin%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(self['@editorElement']=smalltalk.send(smalltalk.send(html, "_div", []), "_class_", [unescape("pull-left%20code-area")]));smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("clear%3A%20both%3B")]);(self['@resultContainer']=(function($rec){smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));return (function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderButtonsOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_form", []));
return self;},
args: ["html"],
source: unescape('renderFormOn%3A%20html%0A%09html%20form%0A%09%09style%3A%20%27margin%3A%200px%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09editorElement%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27pull-left%20code-area%27.%0A%09%09%09html%20div%20style%3A%20%27clear%3A%20both%3B%27.%0A%09%09%09resultContainer%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27alert%27%3B%0A%09%09%09%09hide.%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27button-area%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderButtonsOn%3A%20html%5D%5D.'),
messageSends: ["style:", "with:", "class:", "div", "hide", "renderButtonsOn:", "form"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@container']=(function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-menu")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["textbox"]);smalltalk.send($rec, "_style_", ["padding: 10px"]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderFormOn_", [html]);})]);})(smalltalk.send(html, "_fieldset", []));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(self, "_initializeEditor", []);
smalltalk.send(self, "_mouseFix", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09container%20%3A%3D%20html%20div%0A%09%09class%3A%20%27dropdown-menu%27%3B%0A%09%09with%3A%20%5Bhtml%20fieldset%0A%09%09%09%09class%3A%20%27textbox%27%3B%0A%09%09%09%09style%3A%20%27padding%3A%2010px%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderFormOn%3A%20html%5D%5D.%0A%09self%20initializeEditor.%0A%09self%20mouseFix.'),
messageSends: ["class:", "with:", "style:", "renderFormOn:", "fieldset", "div", "initializeEditor", "mouseFix"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown);


smalltalk.MaglevObjectDropdown.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){(self['@instance']=smalltalk.send(self, "_new", []));return smalltalk.send(self['@instance'], "_appendToJQuery_", [smalltalk.send(unescape("%23temporary-rendering-area"), "_asJQuery", [])]);})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5B%0A%09%09instance%20%3A%3D%20self%20new.%0A%09%09instance%20appendToJQuery%3A%20%27%23temporary-rendering-area%27%20asJQuery%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectDropdown.klass);


smalltalk.addClass('MaglevObjectInline', smalltalk.Widget, ['object', 'hasDropDown', 'isDraggable', 'depth', 'isShort', 'dragContent', 'dragDummy', 'dragObject', 'fullInspection'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_bindDraggable'),
smalltalk.method({
selector: unescape('bindDraggable'),
category: 'interactions',
fn: function (){
var self=this;
var options=nil;
var cursorPos=nil;
(cursorPos=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["left", (0)]);smalltalk.send($rec, "_basicAt_put_", ["top", (0)]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
(options=(function($rec){smalltalk.send($rec, "_basicAt_put_", ["create", (function(event, ui){return nil;})]);smalltalk.send($rec, "_basicAt_put_", ["cursorPos", cursorPos]);smalltalk.send($rec, "_basicAt_put_", ["start", (function(event, ui){return smalltalk.send(self, "_dragStart_a_", [event, ui]);})]);smalltalk.send($rec, "_basicAt_put_", ["stop", (function(event, ui){return smalltalk.send(self, "_dragStop_a_", [event, ui]);})]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Object || Object), "_new", [])));
smalltalk.send(smalltalk.send(self['@dragObject'], "_asJQuery", []), "_draggable_", [options]);
return self;},
args: [],
source: unescape('bindDraggable%0A%09%7Coptions%20cursorPos%7C%0A%09cursorPos%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27left%27%20put%3A%200%3B%0A%09%09basicAt%3A%20%27top%27%20put%3A%200%3B%0A%09%09yourself.%0A%09options%20%3A%3D%20Object%20new%0A%09%09basicAt%3A%20%27create%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20%5D%3B%0A%09%09basicAt%3A%20%27cursorPos%27%20put%3A%20cursorPos%3B%0A%09%09basicAt%3A%20%27start%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20self%20dragStart%3A%20event%20a%3A%20ui%5D%3B%0A%09%09basicAt%3A%20%27stop%27%20put%3A%20%5B%3Aevent%20%3Aui%20%7C%20self%20dragStop%3A%20event%20a%3A%20ui%5D%3B%0A%09%09yourself.%0A%09dragObject%20asJQuery%20draggable%3A%20options.'),
messageSends: ["basicAt:put:", "yourself", "new", "dragStart:a:", "dragStop:a:", "draggable:", "asJQuery"],
referencedClasses: ["Object"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth'),
smalltalk.method({
selector: unescape('depth'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@depth']) == nil || $receiver == undefined) ? (function(){return (self['@depth']=(1));})() : $receiver;
return self['@depth'];
return self;},
args: [],
source: unescape('depth%0A%09depth%20ifNil%3A%20%5Bdepth%20%3A%3D%201%5D.%0A%09%5E%20depth'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_depth_'),
smalltalk.method({
selector: unescape('depth%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@depth']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('depth%3A%20anInteger%0A%09depth%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStart_a_'),
smalltalk.method({
selector: unescape('dragStart%3Aa%3A'),
category: 'interactions',
fn: function (event, ui){
var self=this;
smalltalk.send(self['@dragContent'], "_hide", []);
smalltalk.send(self['@dragDummy'], "_show", []);
return self;},
args: ["event", "ui"],
source: unescape('dragStart%3A%20event%20a%3A%20ui%0A%09dragContent%20hide.%0A%09dragDummy%20show.'),
messageSends: ["hide", "show"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_dragStop_a_'),
smalltalk.method({
selector: unescape('dragStop%3Aa%3A'),
category: 'interactions',
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
return self;},
args: ["event", "ui"],
source: unescape('dragStop%3A%20event%20a%3A%20ui%0A%09%7Cposition%20window%7C%0A%09position%20%3A%3D%20dragObject%20asJQuery%20offset.%0A%09window%20%3A%3D%20Maglev%20instance%20showReloadObjectWindow%3A%20object%20oop.%0A%09window%20left%3A%20position%20left%20-%20%28dragObject%20width%20/%202%29.%0A%09window%20top%3A%20position%20top%20-%20%28dragObject%20height%20/%202%29.%0A%09dragObject%20left%3A%200.%0A%09dragObject%20top%3A%200.%0A%09dragDummy%20hide.%0A%09dragContent%20show.'),
messageSends: ["offset", "asJQuery", "showReloadObjectWindow:", "instance", "oop", "left:", unescape("-"), "left", unescape("/"), "width", "top:", "top", "height", "hide", "show"],
referencedClasses: ["Maglev"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_fullInspection'),
smalltalk.method({
selector: unescape('fullInspection'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@fullInspection']) == nil || $receiver == undefined) ? (function(){return (self['@fullInspection']=false);})() : $receiver;
return self['@fullInspection'];
return self;},
args: [],
source: unescape('fullInspection%0A%09fullInspection%20ifNil%3A%20%5BfullInspection%20%3A%3D%20false%5D.%0A%09%5E%20fullInspection'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_fullInspection_'),
smalltalk.method({
selector: unescape('fullInspection%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@fullInspection']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('fullInspection%3A%20aBoolean%0A%09fullInspection%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown'),
smalltalk.method({
selector: unescape('hasDropDown'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@hasDropDown']) == nil || $receiver == undefined) ? (function(){return (self['@hasDropDown']=smalltalk.send(self, "_hasDropDownDefault", []));})() : $receiver;
return self['@hasDropDown'];
return self;},
args: [],
source: unescape('hasDropDown%0A%09hasDropDown%20ifNil%3A%20%5BhasDropDown%20%3A%3D%20self%20hasDropDownDefault%5D.%0A%09%5E%20hasDropDown'),
messageSends: ["ifNil:", "hasDropDownDefault"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDown_'),
smalltalk.method({
selector: unescape('hasDropDown%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@hasDropDown']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('hasDropDown%3A%20aBoolean%0A%09hasDropDown%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable'),
smalltalk.method({
selector: unescape('isDraggable'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isDraggable']) == nil || $receiver == undefined) ? (function(){return (self['@isDraggable']=smalltalk.send(self, "_isDraggableDefault", []));})() : $receiver;
return self['@isDraggable'];
return self;},
args: [],
source: unescape('isDraggable%0A%09isDraggable%20ifNil%3A%20%5BisDraggable%20%3A%3D%20self%20isDraggableDefault%5D.%0A%09%5E%20isDraggable'),
messageSends: ["ifNil:", "isDraggableDefault"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggable_'),
smalltalk.method({
selector: unescape('isDraggable%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isDraggable']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isDraggable%3A%20aBoolean%0A%09isDraggable%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort'),
smalltalk.method({
selector: unescape('isShort'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isShort']) == nil || $receiver == undefined) ? (function(){return (self['@isShort']=false);})() : $receiver;
return self['@isShort'];
return self;},
args: [],
source: unescape('isShort%0A%09isShort%20ifNil%3A%20%5BisShort%20%3A%3D%20false%5D.%0A%09%5E%20isShort'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_isShort_'),
smalltalk.method({
selector: unescape('isShort%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isShort']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isShort%3A%20aBoolean%0A%09isShort%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
category: 'constants',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_fullInspection", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (1000)}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (15)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (1000)}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_maxInspection', fn: function(){return (15)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_maxInspection'){return e.fn()} throw(e)}},
args: [],
source: unescape('maxInspection%0A%09self%20fullInspection%0A%09%09ifTrue%3A%20%5B%5E%201000%5D%0A%09%09ifFalse%3A%20%5B%5E%2015%5D.'),
messageSends: ["ifTrue:ifFalse:", "fullInspection"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderDraggableObjectOn_'),
smalltalk.method({
selector: unescape('renderDraggableObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("draggable-new-object-container")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@dragObject']=(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-widget-content%20ui-draggable%20draggable-new-object")]);return smalltalk.send($rec, "_with_", [(function(){(self['@dragDummy']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-drag-dummy")]);smalltalk.send($rec, "_style_", [unescape("display%3A%20none%3B")]);smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_move", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));return (self['@dragContent']=(function($rec){smalltalk.send($rec, "_class_", [unescape("object-iv-name")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_bindDraggable", []);
return self;},
args: ["html"],
source: unescape('renderDraggableObjectOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27draggable-new-object-container%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09dragObject%20%3A%3D%20html%20div%0A%09%09%09%09class%3A%20%27ui-widget-content%20ui-draggable%20draggable-new-object%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09dragDummy%20%3A%3D%20html%20div%0A%09%09%09%09%09%09class%3A%20%27object-drag-dummy%27%3B%0A%09%09%09%09%09%09style%3A%20%27display%3A%20none%3B%27%3B%0A%09%09%09%09%09%09with%3A%20MaglevIcon%20move%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D.%0A%09%09%09%09%09dragContent%20%3A%3D%20html%20div%0A%09%09%09%09%09%09class%3A%20%27object-iv-name%27%3B%0A%09%09%09%09%09%09with%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D%5D%5D.%0A%09self%20bindDraggable.'),
messageSends: ["class:", "with:", "style:", "move", "renderObjectContainerOn:", "div", "bindDraggable"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7Ctext%20shorted%7C%0A%09shorted%20%3A%3D%20false.%0A%09text%20%3A%3D%20object%20inspection%20copyFrom%3A%201%20to%3A%20self%20maxInspection.%0A%09text%20size%20%3C%20object%20inspection%20size%20ifTrue%3A%20%5B%0A%09%09text%20%3A%3D%20text%2C%20%27...%27.%20%0A%09%09shorted%20%3A%3D%20true.%0A%09%09%28text%20at%3A%202%29%20%3D%20%27%3C%27%20ifTrue%3A%20%5Btext%20%3A%3D%20text%2C%20%27%3E%27%5D%5D.%0A%09html%20with%3A%20%5B%7Ctooltip%7C%0A%09%09tooltip%20%3A%3D%20html%20span%0A%09%09%09data%3A%20%27toggle%27%20with%3A%20%27tooltip%27%3B%0A%09%09%09data%3A%20%27placement%27%20with%3A%20%27top%27%3B%0A%09%09%09data%3A%20%27original-title%27%20with%3A%20object%20inspection%3B%0A%09%09%09with%3A%20text.%0A%09%09shorted%20ifTrue%3A%20%5Btooltip%20asJQuery%20tooltip%5D%5D.'),
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", unescape("%3C"), "size", unescape("%2C"), unescape("%3D"), "at:", "with:", "data:with:", "span", "tooltip", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%22%09html%0A%09%09with%3A%20MaglevIcon%20search%3B%0A%09%09with%3A%20MaglevIcon%20pencil.%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectContainerOn_'),
smalltalk.method({
selector: unescape('renderObjectContainerOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-view-view")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectActionsOn_", [html]);return (function($rec){smalltalk.send($rec, "_class_", [unescape("object-inline-typed-view")]);return smalltalk.send($rec, "_with_", [(function(){return ((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderObjectWithDropDownOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectOn_", [html]);})]));})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderObjectContainerOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27object-inline-view-view%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09self%20renderObjectActionsOn%3A%20html.%0A%09%09%09html%20span%0A%09%09%09%09class%3A%20%27object-inline-typed-view%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20hasDropDown%0A%09%09%09%09%09%09ifTrue%3A%20%5Bself%20renderObjectWithDropDownOn%3A%20html%5D%0A%09%09%09%09%09%09ifFalse%3A%20%5Bself%20renderObjectOn%3A%20html%5D%5D%5D.'),
messageSends: ["class:", "with:", "renderObjectActionsOn:", "ifTrue:ifFalse:", "hasDropDown", "renderObjectWithDropDownOn:", "renderObjectOn:", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectOn_'),
smalltalk.method({
selector: unescape('renderObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderLoadedObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderUnloadedObjectOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape('renderObjectOn%3A%20html%0A%09object%20isLoaded%0A%09%09ifTrue%3A%20%5Bself%20renderLoadedObjectOn%3A%20html%5D%0A%09%09ifFalse%3A%20%5Bself%20renderUnloadedObjectOn%3A%20html%5D.'),
messageSends: ["ifTrue:ifFalse:", "isLoaded", "renderLoadedObjectOn:", "renderUnloadedObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var dropdownContainer=nil;
(dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderObjectOn_", [html]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%7CdropdownContainer%7C%0A%09dropdownContainer%20%3A%3D%20html%20span%0A%09%09class%3A%20%27dropdown%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20showDropdownFor%3A%20dropdownContainer%5D%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderObjectOn%3A%20html.%0A%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D.'),
messageSends: ["class:", "with:", "data:with:", "onClick:", "showDropdownFor:", "renderObjectOn:", "b", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self, "_isDraggable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);})() : (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderDraggableObjectOn_", [html]);}), (function(){return smalltalk.send(self, "_renderObjectContainerOn_", [html]);})]));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09self%20isDraggable%0A%09%09ifTrue%3A%20%5Bself%20renderDraggableObjectOn%3A%20html%5D%0A%09%09ifFalse%3A%20%5Bself%20renderObjectContainerOn%3A%20html%5D.'),
messageSends: ["ifTrue:ifFalse:", "isDraggable", "renderDraggableObjectOn:", "renderObjectContainerOn:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderText_withDropDownOn_'),
smalltalk.method({
selector: unescape('renderText%3AwithDropDownOn%3A'),
category: 'rendering',
fn: function (text, html){
var self=this;
var dropdownContainer=nil;
((($receiver = smalltalk.send(self, "_hasDropDown", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));})() : (function(){return smalltalk.send(html, "_with_", [text]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (dropdownContainer=(function($rec){smalltalk.send($rec, "_class_", ["dropdown"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("dropdown-toggle%20btn%20object-dropdown-toggle")]);smalltalk.send($rec, "_data_with_", ["toggle", "dropdown"]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_showDropdownFor_", [dropdownContainer]);})]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(html, "_with_", [text]);return smalltalk.send(smalltalk.send(html, "_b", []), "_class_", ["caret"]);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", [])));}), (function(){return smalltalk.send(html, "_with_", [text]);})]));
return self;},
args: ["text", "html"],
source: unescape('renderText%3A%20text%20withDropDownOn%3A%20html%0A%09%7CdropdownContainer%7C%0A%09self%20hasDropDown%0A%09%09ifTrue%3A%20%5B%0A%09%09%09dropdownContainer%20%3A%3D%20html%20span%0A%09%09%09%09class%3A%20%27dropdown%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20a%0A%09%09%09%09%09class%3A%20%27dropdown-toggle%20btn%20object-dropdown-toggle%27%3B%0A%09%09%09%09%09data%3A%20%27toggle%27%20with%3A%20%27dropdown%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20showDropdownFor%3A%20dropdownContainer%5D%3B%0A%09%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09%09html%20with%3A%20text.%0A%09%09%09%09%09%09%09html%20b%20class%3A%20%27caret%27%5D%5D%5D%0A%09%09ifFalse%3A%20%5Bhtml%20with%3A%20text%5D.'),
messageSends: ["ifTrue:ifFalse:", "hasDropDown", "class:", "with:", "data:with:", "onClick:", "showDropdownFor:", "b", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var text=nil;
var shorted=nil;
(shorted=false);
(text=smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_copyFrom_to_", [(1), smalltalk.send(self, "_maxInspection", [])]));
((($receiver = ((($receiver = smalltalk.send(text, "_size", [])).klass === smalltalk.Number) ? $receiver <smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", []) : smalltalk.send($receiver, "__lt", [smalltalk.send(smalltalk.send(self['@object'], "_inspection", []), "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(text=smalltalk.send(text, "__comma", ["..."]));(shorted=true);return ((($receiver = smalltalk.send(smalltalk.send(text, "_at_", [(2)]), "__eq", [unescape("%3C")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (text=smalltalk.send(text, "__comma", [unescape("%3E")]));})]));})]));
smalltalk.send(html, "_with_", [(function(){var tooltip=nil;
(tooltip=(function($rec){smalltalk.send($rec, "_data_with_", ["toggle", "tooltip"]);smalltalk.send($rec, "_data_with_", ["placement", "top"]);smalltalk.send($rec, "_data_with_", [unescape("original-title"), smalltalk.send(self['@object'], "_inspection", [])]);return smalltalk.send($rec, "_with_", [text]);})(smalltalk.send(html, "_span", [])));return ((($receiver = shorted).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send(tooltip, "_asJQuery", []), "_tooltip", []);})]));})]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09%7Ctext%20shorted%7C%0A%09shorted%20%3A%3D%20false.%0A%09text%20%3A%3D%20object%20inspection%20copyFrom%3A%201%20to%3A%20self%20maxInspection.%0A%09text%20size%20%3C%20object%20inspection%20size%20ifTrue%3A%20%5B%0A%09%09text%20%3A%3D%20text%2C%20%27...%27.%20%0A%09%09shorted%20%3A%3D%20true.%0A%09%09%28text%20at%3A%202%29%20%3D%20%27%3C%27%20ifTrue%3A%20%5Btext%20%3A%3D%20text%2C%20%27%3E%27%5D%5D.%0A%09html%20with%3A%20%5B%7Ctooltip%7C%0A%09%09tooltip%20%3A%3D%20html%20span%0A%09%09%09data%3A%20%27toggle%27%20with%3A%20%27tooltip%27%3B%0A%09%09%09data%3A%20%27placement%27%20with%3A%20%27top%27%3B%0A%09%09%09data%3A%20%27original-title%27%20with%3A%20object%20inspection%3B%0A%09%09%09with%3A%20text.%0A%09%09shorted%20ifTrue%3A%20%5Btooltip%20asJQuery%20tooltip%5D%5D.'),
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", unescape("%3C"), "size", unescape("%2C"), unescape("%3D"), "at:", "with:", "data:with:", "span", "tooltip", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline);

smalltalk.addMethod(
unescape('_showDropdownFor_'),
smalltalk.method({
selector: unescape('showDropdownFor%3A'),
category: 'interactions',
fn: function (dropdownContainer){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectDropdown || MaglevObjectDropdown), "_instance", []), "_appendToInlineObject_for_", [self, dropdownContainer]);
return self;},
args: ["dropdownContainer"],
source: unescape('showDropdownFor%3A%20dropdownContainer%0A%09MaglevObjectDropdown%20instance%20appendToInlineObject%3A%20self%20for%3A%20dropdownContainer.'),
messageSends: ["appendToInlineObject:for:", "instance"],
referencedClasses: ["MaglevObjectDropdown"]
}),
smalltalk.MaglevObjectInline);


smalltalk.addMethod(
unescape('_newWithDepth_'),
smalltalk.method({
selector: unescape('newWithDepth%3A'),
category: 'instance creation',
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anInteger"],
source: unescape('newWithDepth%3A%20anInteger%0A%09%5E%20self%20basicNew%0A%09%09depth%3A%20anInteger%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["depth:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevObjectInline.klass);


smalltalk.addClass('MaglevArrayInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%202'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
category: 'constants',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('maxElements%0A%09%5E%203'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
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
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20elementsSize.%0A%09self%20renderText%3A%20%27%5B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%281%20to%3A%20showElements%29%20do%3A%20%5B%3Aidx%20%7C%0A%09%09%09%09html%20with%3A%20%28%28self%20object%20at%3A%20idx%29%20inlineViewComponentWithDepth%3A%20self%20depth%20-%201%29.%0A%09%09%09%09%28idx%20%3C%20showElements%20or%3A%20%5Bself%20object%20elementsSize%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20%2C%20%27%5D%5D.%0A%09%09%09self%20object%20elementsSize%20%3E%20maxElements%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%09%5D.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20renderText%3A%20%27%5D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "inlineViewComponentWithDepth:", "at:", unescape("-"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%22Do%20not%20render%20a%20drop%20down%20menu%20around%20the%20whole%20object.%22%0A%09self%20renderObjectOn%3A%20html.'),
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%5D"), html]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09self%20renderText%3A%20%27%5B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27...%27.%0A%09self%20renderText%3A%20%27%5D%27%20withDropDownOn%3A%20html.'),
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
smalltalk.MaglevArrayInline);



smalltalk.addClass('MaglevBooleanInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevBooleanInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevBooleanInline);



smalltalk.addClass('MaglevExceptionInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isTrappable", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Not trappable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Not trappable"])]);})]));
((($receiver = smalltalk.send(self['@object'], "_isResumable", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_playCircle", []), "_caption_", ["Resumable"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_playCircle", []), "_caption_", ["Resumable"])]);})]));
((($receiver = smalltalk.send(self['@object'], "_isDBEHalt", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_flag", []), "_caption_", ["Database Explorer Halt"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_flag", []), "_caption_", ["Database Explorer Halt"])]);})]));
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09object%20isTrappable%0A%09%09ifFalse%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20terminal%0A%09%09%09caption%3A%20%27Not%20trappable%27%29%5D.%0A%09object%20isResumable%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20playCircle%0A%09%09%09caption%3A%20%27Resumable%27%29%5D.%0A%09object%20isDBEHalt%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20flag%0A%09%09%09caption%3A%20%27Database%20Explorer%20Halt%27%29%5D.'),
messageSends: ["ifFalse:", "isTrappable", "with:", "caption:", "terminal", "ifTrue:", "isResumable", "playCircle", "isDBEHalt", "flag"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevExceptionInline);



smalltalk.addClass('MaglevFixnumInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnumInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnumInline);



smalltalk.addClass('MaglevFloatInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloatInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloatInline);



smalltalk.addClass('MaglevHashInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%202'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_maxElements'),
smalltalk.method({
selector: unescape('maxElements'),
category: 'constants',
fn: function (){
var self=this;
return (3);
return self;},
args: [],
source: unescape('maxElements%0A%09%5E%203'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderLoadedObjectOn_'),
smalltalk.method({
selector: unescape('renderLoadedObjectOn%3A'),
category: 'rendering',
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
return self;},
args: ["html"],
source: unescape('renderLoadedObjectOn%3A%20html%0A%09%7CshowElements%20maxElements%7C%0A%09maxElements%20%3A%3D%20self%20maxElements.%0A%09showElements%20%3A%3D%20maxElements%20min%3A%20self%20object%20elementsSize.%0A%09self%20renderText%3A%20%27%7B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20isShort%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%0A%09%09ifFalse%3A%20%5B%0A%09%09%09%281%20to%3A%20showElements%29%20do%3A%20%5B%3Aidx%20%7C%20%7Ckey%20value%7C%0A%09%09%09%09key%20%3A%3D%20%28self%20object%20at%3A%20idx%29%20key.%0A%09%09%09%09value%20%3A%3D%20%28self%20object%20at%3A%20idx%29%20value.%0A%09%09%09%09html%20%0A%09%09%09%09%09with%3A%20%28key%20inlineViewComponentWithDepth%3A%20self%20depth%20+%201%29%3B%0A%09%09%09%09%09with%3A%20%27%3D%3E%27%3B%0A%09%09%09%09%09with%3A%20%28value%20inlineViewComponentWithDepth%3A%20self%20depth%20+%201%29.%0A%09%09%09%09%28idx%20%3C%20showElements%20or%3A%20%5Bself%20object%20elementsSize%20%3E%20maxElements%5D%29%0A%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20%2C%20%27%5D%5D.%0A%09%09%09self%20object%20elementsSize%20%3E%20maxElements%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%27%20...%20%27%5D%5D.%0A%09html%20with%3A%20%27%20%27.%0A%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.'),
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "key", "at:", "value", "inlineViewComponentWithDepth:", unescape("+"), "depth", "ifTrue:", "or:", unescape("%3C"), unescape("%3E")],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderObjectWithDropDownOn_'),
smalltalk.method({
selector: unescape('renderObjectWithDropDownOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderObjectOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderObjectWithDropDownOn%3A%20html%0A%09%22Do%20not%20render%20a%20drop%20down%20menu%20around%20the%20whole%20object.%22%0A%09self%20renderObjectOn%3A%20html.'),
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
smalltalk.MaglevHashInline);

smalltalk.addMethod(
unescape('_renderUnloadedObjectOn_'),
smalltalk.method({
selector: unescape('renderUnloadedObjectOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7B"), html]);
smalltalk.send(html, "_with_", ["..."]);
smalltalk.send(self, "_renderText_withDropDownOn_", [unescape("%7D"), html]);
return self;},
args: ["html"],
source: unescape('renderUnloadedObjectOn%3A%20html%0A%09self%20renderText%3A%20%27%7B%27%20withDropDownOn%3A%20html.%0A%09html%20with%3A%20%27...%27.%0A%09self%20renderText%3A%20%27%7D%27%20withDropDownOn%3A%20html.'),
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
smalltalk.MaglevHashInline);



smalltalk.addClass('MaglevMaglevRecordBaseInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_hdd", []), "_caption_", ["MaglevRecord::Base"])]);
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09html%20with%3A%20%28MaglevIcon%20hdd%20caption%3A%20%27MaglevRecord%3A%3ABase%27%29'),
messageSends: ["with:", "caption:", "hdd"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevMaglevRecordBaseInline);



smalltalk.addClass('MaglevModuleInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleInline);



smalltalk.addClass('MaglevClassInline', smalltalk.MaglevModuleInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxDepth'),
smalltalk.method({
selector: unescape('maxDepth'),
category: 'constants',
fn: function (){
var self=this;
return (1);
return self;},
args: [],
source: unescape('maxDepth%0A%09%5E%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClassInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'constants',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_listAlt", []), "_caption_", ["List class instances"])]);
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09html%20with%3A%20%28MaglevIcon%20listAlt%0A%09%09%09caption%3A%20%27List%20class%20instances%27%29.'),
messageSends: ["with:", "caption:", "listAlt"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevClassInline);



smalltalk.addClass('MaglevNilClassInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClassInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClassInline);



smalltalk.addClass('MaglevRubyWorkspaceInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_terminal", []), "_caption_", ["Workspace"])]);
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09html%20with%3A%20%28MaglevIcon%20terminal%20caption%3A%20%27Workspace%27%29.'),
messageSends: ["with:", "caption:", "terminal"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevRubyWorkspaceInline);



smalltalk.addClass('MaglevStringInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevStringInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevStringInline);



smalltalk.addClass('MaglevSymbolInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_hasDropDownDefault'),
smalltalk.method({
selector: unescape('hasDropDownDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('hasDropDownDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbolInline);

smalltalk.addMethod(
unescape('_isDraggableDefault'),
smalltalk.method({
selector: unescape('isDraggableDefault'),
category: 'constants',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isDraggableDefault%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbolInline);



smalltalk.addClass('MaglevThreadInline', smalltalk.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_maxInspection'),
smalltalk.method({
selector: unescape('maxInspection'),
category: 'constants',
fn: function (){
var self=this;
return (25);
return self;},
args: [],
source: unescape('maxInspection%0A%09%5E%2025'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThreadInline);

smalltalk.addMethod(
unescape('_renderObjectActionsOn_'),
smalltalk.method({
selector: unescape('renderObjectActionsOn%3A'),
category: 'constants',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@object'], "_isRailsThread", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rails", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rails", [])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["sleep"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pause", []), "_caption_", ["Thread status: sleeping"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_pause", []), "_caption_", ["Thread status: sleeping"])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["false"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_stop", []), "_caption_", [unescape("Thread%20status%3A%20stopped%20%28false%29")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_stop", []), "_caption_", [unescape("Thread%20status%3A%20stopped%20%28false%29")])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["run"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_play", []), "_caption_", ["Thread status: running"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_play", []), "_caption_", ["Thread status: running"])]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_status", []), "__eq", ["aborting"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_trash", []), "_caption_", ["Thread status: aborting"])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send(smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_trash", []), "_caption_", ["Thread status: aborting"])]);})]));
return self;},
args: ["html"],
source: unescape('renderObjectActionsOn%3A%20html%0A%09object%20isRailsThread%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20rails%5D.%0A%09object%20status%20%3D%20%27sleep%27%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20pause%0A%09%09%09caption%3A%20%27Thread%20status%3A%20sleeping%27%29%5D.%0A%09object%20status%20%3D%20%27false%27%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20stop%0A%09%09%09caption%3A%20%27Thread%20status%3A%20stopped%20%28false%29%27%29%5D.%0A%09object%20status%20%3D%20%27run%27%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20play%0A%09%09%09caption%3A%20%27Thread%20status%3A%20running%27%29%5D.%0A%09object%20status%20%3D%20%27aborting%27%0A%09%09ifTrue%3A%20%5Bhtml%20with%3A%20%28MaglevIcon%20trash%0A%09%09%09caption%3A%20%27Thread%20status%3A%20aborting%27%29%5D.'),
messageSends: ["ifTrue:", "isRailsThread", "with:", "rails", unescape("%3D"), "status", "caption:", "pause", "stop", "play", "trash"],
referencedClasses: ["MaglevIconImage", "MaglevIcon"]
}),
smalltalk.MaglevThreadInline);



smalltalk.addClass('MaglevObjectInstancesView', smalltalk.Widget, ['object', 'rangeFrom', 'rangeTo', 'instancesWaitBox', 'contentBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_currentInstVarNames'),
smalltalk.method({
selector: unescape('currentInstVarNames'),
category: 'accessing',
fn: function (){
var self=this;
var ivNames=nil;
(ivNames=smalltalk.send((smalltalk.Set || Set), "_new", []));
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(self, "_objectAt_", [idx]));return smalltalk.send(obj, "_instVarsDo_", [(function(key, value){return smalltalk.send(ivNames, "_add_", [smalltalk.send(key, "_string", [])]);})]);})]);
return ivNames;
return self;},
args: [],
source: unescape('currentInstVarNames%0A%09%7CivNames%7C%0A%09ivNames%20%3A%3D%20Set%20new.%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20self%20objectAt%3A%20idx.%0A%09%09obj%20instVarsDo%3A%20%5B%3Akey%20%3Avalue%20%7C%20ivNames%20add%3A%20key%20string%5D%5D.%0A%09%5E%20ivNames'),
messageSends: ["new", "do:", "to:", "rangeFrom", "rangeTo", "objectAt:", "instVarsDo:", "add:", "string"],
referencedClasses: ["Set"]
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver /(10) : smalltalk.send($receiver, "__slash", [(10)])), "_ceiled", []);
return self;},
args: [],
source: unescape('currentPage%0A%09%5E%20%28self%20rangeFrom%20/%2010%29%20ceiled'),
messageSends: ["ceiled", unescape("/"), "rangeFrom"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_objectAt_'),
smalltalk.method({
selector: unescape('objectAt%3A'),
category: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.send(smalltalk.send(self['@object'], "_instances", []), "_at_", [anIndex]);
return self;},
args: ["anIndex"],
source: unescape('objectAt%3A%20anIndex%0A%09%5E%20object%20instances%20at%3A%20anIndex'),
messageSends: ["at:", "instances"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self['@object'], "_instancesSize", [])).klass === smalltalk.Number) ? $receiver /(10) : smalltalk.send($receiver, "__slash", [(10)])), "_ceiled", []);
return self;},
args: [],
source: unescape('pages%0A%09%5E%20%28object%20instancesSize%20/%2010%29%20ceiled'),
messageSends: ["ceiled", unescape("/"), "instancesSize"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;},
args: [],
source: unescape('rangeFrom%0A%09rangeFrom%20ifNil%3A%20%5BrangeFrom%20%3A%3D%201%5D.%0A%09%5E%20rangeFrom'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('rangeFrom%3A%20anInteger%0A%09rangeFrom%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@rangeTo']) == nil || $receiver == undefined) ? (function(){return (self['@rangeTo']=(10));})() : $receiver;
(($receiver = smalltalk.send(self['@object'], "_instancesSize", [])) != nil && $receiver != undefined) ? (function(){return (self['@rangeTo']=smalltalk.send(self['@rangeTo'], "_min_", [smalltalk.send(self['@object'], "_instancesSize", [])]));})() : nil;
return self['@rangeTo'];
return self;},
args: [],
source: unescape('rangeTo%0A%09rangeTo%20ifNil%3A%20%5BrangeTo%20%3A%3D%2010%5D.%0A%09object%20instancesSize%20ifNotNil%3A%20%5BrangeTo%20%3A%3D%20rangeTo%20min%3A%20object%20instancesSize%5D.%0A%09%5E%20rangeTo'),
messageSends: ["ifNil:", "ifNotNil:", "instancesSize", "min:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_rangeTo_'),
smalltalk.method({
selector: unescape('rangeTo%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@rangeTo']=anInteger);
(($receiver = smalltalk.send(self['@object'], "_instancesSize", [])) != nil && $receiver != undefined) ? (function(){return (self['@rangeTo']=smalltalk.send(self['@rangeTo'], "_min_", [smalltalk.send(self['@object'], "_instancesSize", [])]));})() : nil;
return self;},
args: ["anInteger"],
source: unescape('rangeTo%3A%20anInteger%0A%09rangeTo%20%3A%3D%20anInteger.%0A%09object%20instancesSize%20ifNotNil%3A%20%5BrangeTo%20%3A%3D%20rangeTo%20min%3A%20object%20instancesSize%5D.'),
messageSends: ["ifNotNil:", "instancesSize", "min:"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderInstVarTable'),
smalltalk.method({
selector: unescape('renderInstVarTable'),
category: 'rendering',
fn: function (){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@contentBox'], "_asJQuery", [])]));
smalltalk.send(smalltalk.send(self['@contentBox'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@instancesWaitBox'], "_show", []);
smalltalk.send(self['@object'], "_loadInstancesFrom_to_withCallback_", [smalltalk.send(self, "_rangeFrom", []), smalltalk.send(self, "_rangeTo", []), (function(obj){var ivNames=nil;
smalltalk.send(self['@instancesWaitBox'], "_hide", []);(self['@object']=obj);(ivNames=smalltalk.send(self, "_currentInstVarNames", []));(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_thead", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_th", []), "_with_", ["oop"]);smalltalk.send(smalltalk.send(html, "_th", []), "_with_", ["Object"]);return smalltalk.send(ivNames, "_do_", [(function(ivName){return smalltalk.send(smalltalk.send(html, "_th", []), "_with_", [ivName]);})]);})]);})]);return smalltalk.send(smalltalk.send(html, "_tbody", []), "_with_", [(function(){return smalltalk.send(smalltalk.send(self['@object'], "_instances", []), "_do_", [(function(obj){return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_oop", [])]);smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);return smalltalk.send(ivNames, "_do_", [(function(ivName){return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_instVarAt_ifAbsent_", [ivName, smalltalk.send((smalltalk.MaglevInvalidObject || MaglevInvalidObject), "_instance", [])]), "_inlineViewComponent", [])]);})]);})]);})]);})]);})]);})(smalltalk.send(html, "_table", []));smalltalk.send(self, "_renderPaginationOn_", [html]);return smalltalk.send(self['@instancesWaitBox'], "_hide", []);})]);
return self;},
args: [],
source: unescape('renderInstVarTable%0A%09%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20contentBox%20asJQuery.%0A%09contentBox%20asJQuery%20empty.%0A%09instancesWaitBox%20show.%0A%09object%20%0A%09%09loadInstancesFrom%3A%20self%20rangeFrom%20%0A%09%09to%3A%20self%20rangeTo%20%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%7CivNames%7C%0A%09%09%09instancesWaitBox%20hide.%0A%09%09%09object%20%3A%3D%20obj.%0A%09%09%09ivNames%20%3A%3D%20self%20currentInstVarNames.%0A%09%09%09html%20table%0A%09%09%09%09class%3A%20%27table%20table-bordered%27%3B%0A%09%09%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09%09%09with%3A%20%5Bhtml%20thead%20with%3A%20%5B%0A%09%09%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09%09%09html%20th%20with%3A%20%27oop%27.%0A%09%09%09%09%09%09html%20th%20with%3A%20%27Object%27.%0A%09%09%09%09%09%09ivNames%20do%3A%20%5B%3AivName%20%7C%20%0A%09%09%09%09%09%09%09html%20th%20with%3A%20ivName%5D%5D%5D.%0A%09%09%09%09%09html%20tbody%20with%3A%20%5B%0A%09%09%09%09%09%09object%20instances%20do%3A%20%5B%3Aobj%20%7C%0A%09%09%09%09%09%09%09html%20tr%20with%3A%20%5B%0A%09%09%09%09%09%09%09%09html%20td%20with%3A%20obj%20oop.%0A%09%09%09%09%09%09%09%09html%20td%20with%3A%20obj%20inlineViewComponent.%0A%09%09%09%09%09%09%09%09ivNames%20do%3A%20%5B%3AivName%20%7C%0A%09%09%09%09%09%09%09%09%09html%20td%20with%3A%20%28obj%20instVarAt%3A%20ivName%20ifAbsent%3A%20MaglevInvalidObject%20instance%29%20inlineViewComponent%5D%5D%5D%5D%5D.%0A%09%09%09self%20renderPaginationOn%3A%20html.%0A%09%09%09instancesWaitBox%20hide%5D.'),
messageSends: ["onJQuery:", "asJQuery", "empty", "show", "loadInstancesFrom:to:withCallback:", "rangeFrom", "rangeTo", "hide", "currentInstVarNames", "class:", "style:", "with:", "thead", "tr", "th", "do:", "tbody", "instances", "td", "oop", "inlineViewComponent", "instVarAt:ifAbsent:", "instance", "table", "renderPaginationOn:"],
referencedClasses: ["HTMLCanvas", "MaglevInvalidObject"]
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@instancesWaitBox']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@contentBox']=smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderInstVarTable", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09instancesWaitBox%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09%09with%3A%20%27%20loading...%27%5D.%0A%09contentBox%20%3A%3D%20html%20div.%0A%09self%20renderInstVarTable.'),
messageSends: ["with:", "div", "wait", "renderInstVarTable"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectInstancesView);

smalltalk.addMethod(
unescape('_renderPaginationOn_'),
smalltalk.method({
selector: unescape('renderPaginationOn%3A'),
category: 'rendering',
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
return self;},
args: ["html"],
source: unescape('renderPaginationOn%3A%20html%0A%09%7CfirstPage%20lastPage%20currentPage%7C%0A%09currentPage%20%3A%3D%20self%20currentPage.%0A%09firstPage%20%3A%3D%20currentPage%20-%205%20max%3A%201.%0A%09lastPage%20%3A%3D%20firstPage%20+%2010%20min%3A%20self%20pages.%0A%09html%0A%09%09div%0A%09%09style%3A%20%27text-align%3A%20center%3B%27%3B%0A%09%09with%3A%20%5Bhtml%20span%0A%09%09%09%09class%3A%20%27pagination%27%3B%0A%09%09%09%09with%3A%20%5Bhtml%20ul%0A%09%09%09%09%09style%3A%20%27margin-top%3A%2010px%3B%27%3B%0A%09%09%09%09%09with%3A%20%5B%28firstPage%20to%3A%20lastPage%29%20do%3A%20%5B%3Aindex%20%7C%20%7CliClass%7C%0A%09%09%09%09%09%09currentPage%20%3D%20index%0A%09%09%09%09%09%09%09ifTrue%3A%20%5BliClass%20%3A%3D%20%27disabled%27%5D%0A%09%09%09%09%09%09%09ifFalse%3A%20%5BliClass%20%3A%3D%20%27active%27%5D.%0A%09%09%09%09%09%09html%20li%0A%09%09%09%09%09%09%09class%3A%20liClass%3B%0A%09%09%09%09%09%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09%09%09%09%09onClick%3A%20%5B%0A%09%09%09%09%09%09%09%09%09self%20rangeFrom%3A%20%28index%20-%201%29%20*%2010%20+%201.%0A%09%09%09%09%09%09%09%09%09self%20rangeTo%3A%20index%20*%2010.%0A%09%09%09%09%09%09%09%09%09self%20renderInstVarTable%5D%3B%0A%09%09%09%09%09%09%09%09with%3A%20index%20asString%5D%5D%5D%5D%5D.'),
messageSends: ["currentPage", "max:", unescape("-"), "min:", unescape("+"), "pages", "style:", "with:", "class:", "do:", "to:", "ifTrue:ifFalse:", unescape("%3D"), "onClick:", "rangeFrom:", unescape("*"), "rangeTo:", "renderInstVarTable", "asString", "a", "li", "ul", "span", "div"],
referencedClasses: []
}),
smalltalk.MaglevObjectInstancesView);



smalltalk.addClass('MaglevTable', smalltalk.Widget, ['object', 'collectionName', 'rangeFrom', 'rangeTo', 'isAssociationDictionary', 'tableBody', 'currentPage', 'pageListItems', 'pagination'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_collection'),
smalltalk.method({
selector: unescape('collection'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [self['@collectionName']]);
return self;},
args: [],
source: unescape('collection%0A%09%5E%20object%20perform%3A%20collectionName'),
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName'),
smalltalk.method({
selector: unescape('collectionName'),
category: 'accessing',
fn: function (){
var self=this;
return self['@collectionName'];
return self;},
args: [],
source: unescape('collectionName%0A%09%5E%20collectionName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionName_'),
smalltalk.method({
selector: unescape('collectionName%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@collectionName']=aString);
return self;},
args: ["aString"],
source: unescape('collectionName%3A%20aString%0A%09collectionName%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_collectionSize'),
smalltalk.method({
selector: unescape('collectionSize'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@object'], "_perform_", [smalltalk.send(self['@collectionName'], "__comma", ["Size"])]);
return self;},
args: [],
source: unescape('collectionSize%0A%09%5E%20object%20perform%3A%20collectionName%2C%20%27Size%27'),
messageSends: ["perform:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_currentPage'),
smalltalk.method({
selector: unescape('currentPage'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@currentPage']) == nil || $receiver == undefined) ? (function(){return (self['@currentPage']=(1));})() : $receiver;
return self['@currentPage'];
return self;},
args: [],
source: unescape('currentPage%0A%09currentPage%20ifNil%3A%20%5BcurrentPage%20%3A%3D%201%5D.%0A%09%5E%20currentPage'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary'),
smalltalk.method({
selector: unescape('isAssociationDictionary'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@isAssociationDictionary']) == nil || $receiver == undefined) ? (function(){return (self['@isAssociationDictionary']=false);})() : $receiver;
return self['@isAssociationDictionary'];
return self;},
args: [],
source: unescape('isAssociationDictionary%0A%09isAssociationDictionary%20ifNil%3A%20%5BisAssociationDictionary%20%3A%3D%20false%5D.%0A%09%5E%20isAssociationDictionary'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_isAssociationDictionary_'),
smalltalk.method({
selector: unescape('isAssociationDictionary%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@isAssociationDictionary']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('isAssociationDictionary%3A%20aBoolean%0A%09isAssociationDictionary%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pageSize'),
smalltalk.method({
selector: unescape('pageSize'),
category: 'accessing',
fn: function (){
var self=this;
return (10);
return self;},
args: [],
source: unescape('pageSize%0A%09%5E%2010'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_pages'),
smalltalk.method({
selector: unescape('pages'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = smalltalk.send(self, "_collectionSize", [])).klass === smalltalk.Number) ? $receiver /smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__slash", [smalltalk.send(self, "_pageSize", [])])), "_ceiled", []);
return self;},
args: [],
source: unescape('pages%0A%09%5E%20%28self%20collectionSize%20/%20self%20pageSize%29%20ceiled'),
messageSends: ["ceiled", unescape("/"), "collectionSize", "pageSize"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom'),
smalltalk.method({
selector: unescape('rangeFrom'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@rangeFrom']) == nil || $receiver == undefined) ? (function(){return (self['@rangeFrom']=(1));})() : $receiver;
return self['@rangeFrom'];
return self;},
args: [],
source: unescape('rangeFrom%0A%09rangeFrom%20ifNil%3A%20%5BrangeFrom%20%3A%3D%201%5D.%0A%09%5E%20rangeFrom'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeFrom_'),
smalltalk.method({
selector: unescape('rangeFrom%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@rangeFrom']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('rangeFrom%3A%20anInteger%0A%09rangeFrom%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_rangeTo'),
smalltalk.method({
selector: unescape('rangeTo'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(((($receiver = ((($receiver = smalltalk.send(self, "_rangeFrom", [])).klass === smalltalk.Number) ? $receiver +smalltalk.send(self, "_pageSize", []) : smalltalk.send($receiver, "__plus", [smalltalk.send(self, "_pageSize", [])]))).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)])), "_min_", [smalltalk.send(self, "_collectionSize", [])]);
return self;},
args: [],
source: unescape('rangeTo%0A%09%5E%20self%20rangeFrom%20+%20self%20pageSize%20-%201%20min%3A%20self%20collectionSize'),
messageSends: ["min:", unescape("-"), unescape("+"), "rangeFrom", "pageSize", "collectionSize"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociation_to_on_'),
smalltalk.method({
selector: unescape('renderAssociation%3Ato%3Aon%3A'),
category: 'rendering',
fn: function (key, value, html){
var self=this;
smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(key, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(value, "_inlineViewComponent", [])]);})]);
return self;},
args: ["key", "value", "html"],
source: unescape('renderAssociation%3A%20key%20to%3A%20value%20on%3A%20html%0A%09html%20tr%20with%3A%20%5B%0A%09%09html%20td%20with%3A%20key%20inlineViewComponent.%0A%09%09html%20td%20with%3A%20value%20inlineViewComponent%5D.'),
messageSends: ["with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderAssociationDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderAssociationDictionaryBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_key", []), "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(smalltalk.send(obj, "_value", []), "_inlineViewComponent", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderAssociationDictionaryBodyOn%3A%20html%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20self%20collection%20at%3A%20idx.%0A%09%09html%20tr%20with%3A%20%5B%0A%09%09%09html%20td%20with%3A%20obj%20key%20inlineViewComponent.%0A%09%09%09html%20td%20with%3A%20obj%20value%20inlineViewComponent%5D%5D.'),
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent", "key", "value"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderDictionaryBodyOn_'),
smalltalk.method({
selector: unescape('renderDictionaryBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_rangeFrom", []), "_to_", [smalltalk.send(self, "_rangeTo", [])]), "_do_", [(function(idx){var obj=nil;
(obj=smalltalk.send(smalltalk.send(self, "_collection", []), "_at_", [idx]));return smalltalk.send(smalltalk.send(html, "_tr", []), "_with_", [(function(){smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(idx, "_inlineViewComponent", [])]);return smalltalk.send(smalltalk.send(html, "_td", []), "_with_", [smalltalk.send(obj, "_inlineViewComponent", [])]);})]);})]);
return self;},
args: ["html"],
source: unescape('renderDictionaryBodyOn%3A%20html%0A%09%28self%20rangeFrom%20to%3A%20self%20rangeTo%29%20do%3A%20%5B%3Aidx%20%7C%20%7Cobj%7C%0A%09%09obj%20%3A%3D%20self%20collection%20at%3A%20idx.%0A%09%09html%20tr%20with%3A%20%5B%0A%09%09%09html%20td%20with%3A%20idx%20inlineViewComponent.%0A%09%09%09html%20td%20with%3A%20obj%20inlineViewComponent%5D%5D.'),
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var pagClass=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_pages", []), "__eq", [(1)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (pagClass=unescape("display%3A%20none%3B"));})() : (function(){return (pagClass="");})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (pagClass=unescape("display%3A%20none%3B"));}), (function(){return (pagClass="");})]));
(function($rec){smalltalk.send($rec, "_class_", [unescape("table%20table-bordered")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%200px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@tableBody']=smalltalk.send(html, "_tbody", []));})]);})(smalltalk.send(html, "_table", []));
(function($rec){smalltalk.send($rec, "_style_", [unescape("text-align%3A%20center%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@pagination']=(function($rec){smalltalk.send($rec, "_class_", ["pagination"]);return smalltalk.send($rec, "_style_", [pagClass]);})(smalltalk.send(html, "_span", [])));})]);})(smalltalk.send(html, "_div", []));
smalltalk.send(self, "_renderPagination", []);
smalltalk.send(self, "_renderPage_", [(1)]);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%7CpagClass%7C%0A%09self%20pages%20%3D%201%20%0A%09%09ifTrue%3A%20%5BpagClass%20%3A%3D%20%27display%3A%20none%3B%27%5D%0A%09%09ifFalse%3A%20%5BpagClass%20%3A%3D%20%27%27%5D.%0A%09html%20table%0A%09%09class%3A%20%27table%20table-bordered%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%200px%3B%27%3B%0A%09%09with%3A%20%5BtableBody%20%3A%3D%20html%20tbody%5D.%0A%09html%20div%0A%09%09style%3A%20%27text-align%3A%20center%3B%27%3B%0A%09%09with%3A%20%5Bpagination%20%3A%3D%20html%20span%0A%09%09%09class%3A%20%27pagination%27%3B%0A%09%09%09style%3A%20pagClass%5D.%0A%09self%20renderPagination.%0A%09self%20renderPage%3A%201.'),
messageSends: ["ifTrue:ifFalse:", unescape("%3D"), "pages", "class:", "style:", "with:", "tbody", "table", "span", "div", "renderPagination", "renderPage:"],
referencedClasses: []
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPage_'),
smalltalk.method({
selector: unescape('renderPage%3A'),
category: 'rendering',
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
return self;},
args: ["anInteger"],
source: unescape('renderPage%3A%20anInteger%0A%09%7Chtml%7C%0A%09currentPage%20%3A%3D%20anInteger.%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20tableBody%20asJQuery.%0A%09rangeFrom%20%3A%3D%20anInteger%20-%201%20*%20self%20pageSize%20+%201.%0A%09tableBody%20asJQuery%20empty.%0A%09html%20%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27.%0A%09self%20renderPagination.%0A%09object%20%0A%09%09ensureIsLoaded%3A%20collectionName%20%0A%09%09from%3A%20rangeFrom%20%0A%09%09to%3A%20self%20rangeTo%20%0A%09%09withCallback%3A%20%5B%0A%09%09%09tableBody%20asJQuery%20empty.%0A%09%09%09self%20renderTableBodyOn%3A%20%28HTMLCanvas%20onJQuery%3A%20tableBody%20asJQuery%29%5D.'),
messageSends: ["onJQuery:", "asJQuery", unescape("+"), unescape("*"), unescape("-"), "pageSize", "empty", "with:", "wait", "renderPagination", "ensureIsLoaded:from:to:withCallback:", "rangeTo", "renderTableBodyOn:"],
referencedClasses: ["HTMLCanvas", "MaglevIcon"]
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderPagination'),
smalltalk.method({
selector: unescape('renderPagination'),
category: 'rendering',
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
return self;},
args: [],
source: unescape('renderPagination%0A%09%7CfirstPage%20lastPage%20html%7C%0A%09pageListItems%20%3A%3D%20Dictionary%20new.%0A%09firstPage%20%3A%3D%20self%20currentPage%20-%205%20max%3A%201.%0A%09lastPage%20%3A%3D%20firstPage%20+%2010%20min%3A%20self%20pages.%0A%09pagination%20asJQuery%20empty.%0A%09html%20%3A%3D%20%28HTMLCanvas%20onJQuery%3A%20pagination%20asJQuery%29.%0A%09pagination%0A%09%09with%3A%20%5Bhtml%20ul%0A%09%09%09style%3A%20%27margin-top%3A%2010px%3B%27%3B%0A%09%09%09with%3A%20%5B%28firstPage%20to%3A%20lastPage%29%20do%3A%20%5B%3Aindex%20%7C%20%7CliClass%7C%0A%09%09%09%09currentPage%20%3D%20index%0A%09%09%09%09%09ifTrue%3A%20%5BliClass%20%3A%3D%20%27disabled%27%5D%0A%09%09%09%09%09ifFalse%3A%20%5BliClass%20%3A%3D%20%27active%27%5D.%0A%09%09%09%09html%20li%0A%09%09%09%09%09class%3A%20liClass%3B%0A%09%09%09%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09%09%09onClick%3A%20%5Bself%20renderPage%3A%20index%5D%3B%0A%09%09%09%09%09%09with%3A%20index%20asString%5D%5D%5D%5D.'),
messageSends: ["new", "max:", unescape("-"), "currentPage", "min:", unescape("+"), "pages", "empty", "asJQuery", "onJQuery:", "with:", "style:", "do:", "to:", "ifTrue:ifFalse:", unescape("%3D"), "class:", "onClick:", "renderPage:", "asString", "a", "li", "ul"],
referencedClasses: ["Dictionary", "HTMLCanvas"]
}),
smalltalk.MaglevTable);

smalltalk.addMethod(
unescape('_renderTableBodyOn_'),
smalltalk.method({
selector: unescape('renderTableBodyOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
try{((($receiver = smalltalk.send(self, "_isAssociationDictionary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})() : (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self, "_renderAssociationDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();}), (function(){smalltalk.send(self, "_renderDictionaryBodyOn_", [html]);return (function(){throw({name: 'stReturn', selector: '_renderTableBodyOn_', fn: function(){return self}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderTableBodyOn_'){return e.fn()} throw(e)}},
args: ["html"],
source: unescape('renderTableBodyOn%3A%20html%0A%09self%20isAssociationDictionary%20%0A%09%09%09ifTrue%3A%20%5Bself%20renderAssociationDictionaryBodyOn%3A%20html.%20%5E%20self%5D%0A%09%09%09ifFalse%3A%20%5Bself%20renderDictionaryBodyOn%3A%20html.%20%5E%20self%5D.'),
messageSends: ["ifTrue:ifFalse:", "isAssociationDictionary", "renderAssociationDictionaryBodyOn:", "renderDictionaryBodyOn:"],
referencedClasses: []
}),
smalltalk.MaglevTable);


smalltalk.addMethod(
unescape('_newAssociationDictFor_with_'),
smalltalk.method({
selector: unescape('newAssociationDictFor%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_isAssociationDictionary_", [true]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject", "aString"],
source: unescape('newAssociationDictFor%3A%20anObject%20with%3A%20aString%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09collectionName%3A%20aString%3B%0A%09%09isAssociationDictionary%3A%20true%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "collectionName:", "isAssociationDictionary:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevTable.klass);

smalltalk.addMethod(
unescape('_newFor_with_'),
smalltalk.method({
selector: unescape('newFor%3Awith%3A'),
category: 'instance creation',
fn: function (anObject, aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_collectionName_", [aString]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_basicNew", []));
return self;},
args: ["anObject", "aString"],
source: unescape('newFor%3A%20anObject%20with%3A%20aString%0A%09%5E%20self%20basicNew%0A%09%09object%3A%20anObject%3B%0A%09%09collectionName%3A%20aString%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "collectionName:", "initialize", "yourself", "basicNew"],
referencedClasses: []
}),
smalltalk.MaglevTable.klass);


smalltalk.addClass('MaglevWindow', smalltalk.Widget, ['container', 'navigationItem'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_appendToWorkspace'),
smalltalk.method({
selector: unescape('appendToWorkspace'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23workspace"), "_asJQuery", [])])]);
return self;},
args: [],
source: unescape('appendToWorkspace%0A%20%20%20self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20%27%23workspace%27%20asJQuery%29.'),
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: unescape('clear%0A%09container%20asJQuery%20empty.'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_deleteEndpointsFor_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_remove", []);
return self;},
args: [],
source: unescape('closeWindow%0A%09MaglevJsPlumb%20deleteEndpointsFor%3A%20container%20asJQuery.%0A%09container%20asJQuery%20remove.'),
messageSends: ["deleteEndpointsFor:", "asJQuery", "remove"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_as_with_'),
smalltalk.method({
selector: unescape('connectTo%3Aas%3Awith%3A'),
category: 'interactions',
fn: function (aWindow, type, caption){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_as_with_", [self, aWindow, type, caption]);
return self;},
args: ["aWindow", "type", "caption"],
source: unescape('connectTo%3A%20aWindow%20as%3A%20type%20with%3A%20caption%0A%09MaglevJsPlumb%20connectWindow%3A%20self%20to%3A%20aWindow%20as%3A%20type%20with%3A%20caption.'),
messageSends: ["connectWindow:to:as:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_connectTo_with_'),
smalltalk.method({
selector: unescape('connectTo%3Awith%3A'),
category: 'interactions',
fn: function (aWindow, parameters){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_connectWindow_to_with_", [self, aWindow, parameters]);
return self;},
args: ["aWindow", "parameters"],
source: unescape('connectTo%3A%20aWindow%20with%3A%20parameters%0A%09MaglevJsPlumb%20connectWindow%3A%20self%20to%3A%20aWindow%20with%3A%20parameters.'),
messageSends: ["connectWindow:to:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
category: 'accessing',
fn: function (){
var self=this;
return self['@container'];
return self;},
args: [],
source: unescape('container%0A%09%5E%20container'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isWaitingWindow%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_left_'),
smalltalk.method({
selector: unescape('left%3A'),
category: 'attributes',
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_left_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('left%3A%20aValue%0A%09container%20left%3A%20aValue.'),
messageSends: ["left:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_moveToFront'),
smalltalk.method({
selector: unescape('moveToFront'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@container'], "_asJQuery", []), "_css_data_", [unescape("z-index"), ((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "_highestZIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;},
args: [],
source: unescape('moveToFront%0A%09container%20asJQuery%20css%3A%20%27z-index%27%20data%3A%20self%20class%20highestZIndex%20+%201.'),
messageSends: ["css:data:", "asJQuery", unescape("+"), "highestZIndex", "class"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_navigationItem'),
smalltalk.method({
selector: unescape('navigationItem'),
category: 'accessing',
fn: function (){
var self=this;
return self['@navigationItem'];
return self;},
args: [],
source: unescape('navigationItem%0A%09%5E%20navigationItem'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_navigationItem_'),
smalltalk.method({
selector: unescape('navigationItem%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@navigationItem']=anObject);
return self;},
args: ["anObject"],
source: unescape('navigationItem%3A%20anObject%0A%09navigationItem%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.MaglevJsPlumb || MaglevJsPlumb), "_prepareObject_", [smalltalk.send(self['@container'], "_asJQuery", [])]);
(function($rec){smalltalk.send($rec, "_onMouseEnter_", [(function(){return smalltalk.send(self['@container'], "_removeClass_", [unescape("window-mouse-out")]);})]);return smalltalk.send($rec, "_onMouseLeave_", [(function(){return smalltalk.send(self['@container'], "_addClass_", [unescape("window-mouse-out")]);})]);})(self['@container']);
return self;},
args: [],
source: unescape('prepareWindow%0A%09MaglevJsPlumb%20prepareObject%3A%20%28container%20asJQuery%29.%0A%09container%0A%09%09onMouseEnter%3A%20%5Bcontainer%20removeClass%3A%20%27window-mouse-out%27%5D%3B%0A%09%09onMouseLeave%3A%20%5Bcontainer%20addClass%3A%20%27window-mouse-out%27%5D.'),
messageSends: ["prepareObject:", "asJQuery", "onMouseEnter:", "removeClass:", "onMouseLeave:", "addClass:"],
referencedClasses: ["MaglevJsPlumb"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderCloseButtonOn_'),
smalltalk.method({
selector: unescape('renderCloseButtonOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("display-inline-block")]);smalltalk.send($rec, "_style_", [unescape("float%3A%20right%3B%20margin-top%3A%203px%3B%20margin-left%3A%203px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_class_", [unescape("window-close-button")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_closeWindow", []);})]);return smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_remove", [])]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderCloseButtonOn%3A%20html%0A%09html%20span%0A%09%09class%3A%20%27display-inline-block%27%3B%0A%09%09style%3A%20%27float%3A%20right%3B%20margin-top%3A%203px%3B%20margin-left%3A%203px%3B%27%3B%0A%09%09with%3A%20%5Bhtml%20a%0A%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09class%3A%20%27window-close-button%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20closeWindow%5D%3B%0A%09%09%09%09with%3A%20MaglevIcon%20remove%5D.'),
messageSends: ["class:", "style:", "with:", "href:", "onClick:", "closeWindow", "remove", "a", "span"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHeightPlaceholderOn_'),
smalltalk.method({
selector: unescape('renderHeightPlaceholderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_style_", [unescape("visibility%3A%20hidden%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["btn"]);return smalltalk.send($rec, "_with_", ["a"]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_span", []));
return self;},
args: ["html"],
source: unescape('renderHeightPlaceholderOn%3A%20html%0A%09html%20span%0A%09%09style%3A%20%27visibility%3A%20hidden%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09class%3A%20%27btn%27%3B%0A%09%09%09%09with%3A%20%27a%27%5D.'),
messageSends: ["style:", "with:", "class:", "a", "span"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderHorziontalLineOn_'),
smalltalk.method({
selector: unescape('renderHorziontalLineOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_hr", []), "_style_", [unescape("margin%3A%2010px%3B")]);
return self;},
args: ["html"],
source: unescape('renderHorziontalLineOn%3A%20html%0A%09html%20hr%20style%3A%20%27margin%3A%2010px%3B%27.'),
messageSends: ["style:", "hr"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderNavigationOn_'),
smalltalk.method({
selector: unescape('renderNavigationOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["New window"]);
return self;},
args: ["html"],
source: unescape('renderNavigationOn%3A%20html%0A%09html%20with%3A%20%27New%20window%27.'),
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(($receiver = self['@container']) == nil || $receiver == undefined) ? (function(){(self['@container']=smalltalk.send(html, "_div", []));return smalltalk.send(self, "_prepareWindow", []);})() : $receiver;
(function($rec){smalltalk.send($rec, "_class_", ["component window"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["nowrap"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderWindowTitleOn_", [html]);return smalltalk.send(self, "_renderWindowContentOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(self['@container']);
smalltalk.send(self['@container'], "_onMouseDown_", [(function(){return smalltalk.send(self, "_moveToFront", []);})]);
smalltalk.send(self, "_moveToFront", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09container%20ifNil%3A%20%5B%0A%09%09container%20%3A%3D%20html%20div.%0A%09%09self%20prepareWindow%5D.%0A%09container%0A%09%09class%3A%20%27component%20window%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20div%0A%09%09%09%09class%3A%20%27nowrap%27%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09self%20renderWindowTitleOn%3A%20html.%0A%09%09%09%09%09self%20renderWindowContentOn%3A%20html%5D%5D.%0A%09container%20onMouseDown%3A%20%5Bself%20moveToFront%5D.%0A%09self%20moveToFront.'),
messageSends: ["ifNil:", "div", "prepareWindow", "class:", "with:", "renderWindowTitleOn:", "renderWindowContentOn:", "onMouseDown:", "moveToFront"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderReplace'),
smalltalk.method({
selector: unescape('renderReplace'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self, "_renderOn_", [smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@container'], "_asJQuery", [])])]);
return self;},
args: [],
source: unescape('renderReplace%0A%09self%20renderOn%3A%20%28HTMLCanvas%20onJQuery%3A%20container%20asJQuery%29.'),
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", ["A new window"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20%27A%20new%20window%27.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09self%20renderCloseButtonOn%3A%20html.'),
messageSends: ["with:", "renderHeightPlaceholderOn:", "renderCloseButtonOn:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("window-title")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("window-title-content")]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_renderWindowTitleContentOn_", [html]);})]);})(smalltalk.send(html, "_span", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27window-title%27%3B%0A%09%09with%3A%20%5Bhtml%20span%0A%09%09%09%09class%3A%20%27window-title-content%27%3B%0A%09%09%09%09with%3A%20%5Bself%20renderWindowTitleContentOn%3A%20html%5D%5D.'),
messageSends: ["class:", "with:", "renderWindowTitleContentOn:", "span", "div"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(aWindow, "_clear", []);
(self['@container']=smalltalk.send(aWindow, "_container", []));
return self;},
args: ["aWindow"],
source: unescape('replace%3A%20aWindow%0A%09aWindow%20clear.%0A%09container%20%3A%3D%20aWindow%20container.'),
messageSends: ["clear", "container"],
referencedClasses: []
}),
smalltalk.MaglevWindow);

smalltalk.addMethod(
unescape('_top_'),
smalltalk.method({
selector: unescape('top%3A'),
category: 'attributes',
fn: function (aValue){
var self=this;
smalltalk.send(self['@container'], "_top_", [aValue]);
return self;},
args: ["aValue"],
source: unescape('top%3A%20aValue%0A%09container%20top%3A%20aValue.'),
messageSends: ["top:"],
referencedClasses: []
}),
smalltalk.MaglevWindow);


smalltalk.addMethod(
unescape('_highestZIndex'),
smalltalk.method({
selector: unescape('highestZIndex'),
category: 'interactions',
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
return self;},
args: [],
source: unescape('highestZIndex%0A%09%3C%20var%20indexHighest%20%3D%200%3B%0A%09%24%28%27.window%27%29.each%28function%28%29%7B%0A%09%09var%20indexCurrent%20%3D%20parseInt%28%24%28this%29.css%28%22z-index%22%29%2C%2010%29%3B%0A%09%09if%28indexCurrent%20%3E%3E%20indexHighest%29%20%7B%0A%09%09%09indexHighest%20%3D%20indexCurrent%3B%0A%09%09%7D%0A%09%7D%29%3B%0A%09return%20indexHighest%3B%20%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWindow.klass);

smalltalk.addMethod(
unescape('_newReplace_'),
smalltalk.method({
selector: unescape('newReplace%3A'),
category: 'instance creation',
fn: function (aWindow){
var self=this;
return (function($rec){smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWindow"],
source: unescape('newReplace%3A%20aWindow%0A%09%5E%20self%20new%0A%09%09replace%3A%20aWindow%3B%0A%09%09yourself'),
messageSends: ["replace:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevWindow.klass);


smalltalk.addClass('MaglevObjectWindow', smalltalk.MaglevWindow, ['container', 'object', 'classObject', 'tabs', 'captions', 'tabsContainer', 'currentTab'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_captions'),
smalltalk.method({
selector: unescape('captions'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@captions']) == nil || $receiver == undefined) ? (function(){return (self['@captions']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@captions'];
return self;},
args: [],
source: unescape('captions%0A%09captions%20ifNil%3A%20%5Bcaptions%20%3A%3D%20Dictionary%20new%5D.%0A%09%5E%20captions'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self['@object'], "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivValue, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("iv"), smalltalk.send(ivName, "_inspection", [])]);})]));})]);
((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@object'], "_classObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_~~", [smalltalk.send(aWindow, "_object", [])]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("class"), nil]);})]));
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("virtualClass"), nil]);})]));
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09object%20instVarsDo%3A%20%5B%3AivName%20%3AivValue%20%7C%0A%09%09ivValue%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23iv%20with%3A%20ivName%20inspection%5D%5D.%0A%09%28object%20classObject%20%3D%3D%20aWindow%20object%20and%3A%20%5Bobject%20virtualClassObject%20%7E%7E%20aWindow%20object%5D%29%20%0A%09%09ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23class%20with%3A%20nil%5D.%0A%09object%20virtualClassObject%20%3D%3D%20aWindow%20object%20%0A%09%09ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23virtualClass%20with%3A%20nil%5D.'),
messageSends: ["instVarsDo:", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:", "inspection", "and:", "classObject", unescape("%7E%7E"), "virtualClassObject"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_closeWindow'),
smalltalk.method({
selector: unescape('closeWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [self]);
smalltalk.send(self, "_closeWindow", [], smalltalk.MaglevWindow);
return self;},
args: [],
source: unescape('closeWindow%0A%09MaglevObjectSpace%20instance%20unregisterWindow%3A%20self.%0A%09super%20closeWindow.'),
messageSends: ["unregisterWindow:", "instance", "closeWindow"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_container'),
smalltalk.method({
selector: unescape('container'),
category: 'accessing',
fn: function (){
var self=this;
return self['@container'];
return self;},
args: [],
source: unescape('container%0A%09%5E%20container'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasInstVars", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Instance Variables", smalltalk.symbolFor("renderInstanceVariablesOn:")]);})]));
smalltalk.send(smalltalk.send(self['@object'], "_customTabs", []), "_do_", [(function(customTab){var selector=nil;
(selector=smalltalk.send(smalltalk.send("renderCustom", "__comma", [smalltalk.send(customTab, "_at_", [(2)])]), "__comma", ["On:"]));smalltalk.send(smalltalk.send(self, "_class", []), "_compile_", [smalltalk.send(smalltalk.send(selector, "__comma", ["html    "]), "__comma", [smalltalk.send(customTab, "_at_", [(3)])])]);return smalltalk.send(result, "_at_put_", [smalltalk.send(customTab, "_at_", [(1)]), smalltalk.send(selector, "_asSymbol", [])]);})]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20Dictionary%20new.%0A%09self%20object%20hasInstVars%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Instance%20Variables%27%20put%3A%20%23renderInstanceVariablesOn%3A%5D.%0A%09object%20customTabs%20do%3A%20%5B%3AcustomTab%20%7C%20%7Cselector%7C%0A%09%09selector%20%3A%3D%20%27renderCustom%27%2C%20%28customTab%20at%3A%202%29%2C%20%27On%3A%27.%0A%09%09self%20class%20compile%3A%20selector%2C%20%27html%20%20%20%20%27%2C%20%28customTab%20at%3A%203%29.%0A%09%09result%20at%3A%20%28customTab%20at%3A%201%29%20put%3A%20selector%20asSymbol%5D.%0A%09%5E%20result'),
messageSends: ["new", "ifTrue:", "hasInstVars", "object", "at:put:", "do:", "customTabs", unescape("%2C"), "at:", "compile:", "class", "asSymbol"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return nil;
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_makeCurrentTabResizable'),
smalltalk.method({
selector: unescape('makeCurrentTabResizable'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@currentTab'], "_style_", [unescape("overflow%3A%20hidden%3B")]);
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@currentTab'], "_asJQuery", []), "_children", []), "_first", []), "_attr_with_", ["style", unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B")]);
smalltalk.send(smalltalk.send(self['@currentTab'], "_asJQuery", []), "_resizable", []);
return self;},
args: [],
source: unescape('makeCurrentTabResizable%0A%09currentTab%0A%09%09style%3A%20%27overflow%3A%20hidden%3B%27.%0A%09currentTab%20asJQuery%20children%20first%20%0A%09%09attr%3A%20%27style%27%20with%3A%20%27width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B%27.%0A%09currentTab%20asJQuery%20resizable.'),
messageSends: ["style:", "attr:with:", "first", "children", "asJQuery", "resizable"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object'),
smalltalk.method({
selector: unescape('object'),
category: 'accessing',
fn: function (){
var self=this;
return self['@object'];
return self;},
args: [],
source: unescape('object%0A%09%5E%20object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_object_'),
smalltalk.method({
selector: unescape('object%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@object']=anObject);
(self['@classObject']=smalltalk.send(anObject, "_classObject", []));
return self;},
args: ["anObject"],
source: unescape('object%3A%20anObject%0A%09object%20%3A%3D%20anObject.%0A%09classObject%20%3A%3D%20anObject%20classObject.'),
messageSends: ["classObject"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_prepareWindow'),
smalltalk.method({
selector: unescape('prepareWindow'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_prepareWindow", [], smalltalk.MaglevWindow), "_MaglevObjectSpace", []), "_registerWindow_", [self]);
return self;},
args: [],
source: unescape('prepareWindow%0A%09super%20prepareWindow%0A%09MaglevObjectSpace%20registerWindow%3A%20self.'),
messageSends: ["registerWindow:", "MaglevObjectSpace", "prepareWindow"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderInstanceVariablesOn_'),
smalltalk.method({
selector: unescape('renderInstanceVariablesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("instVars")])]);
return self;},
args: ["html"],
source: unescape('renderInstanceVariablesOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23instVars%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderNavigationOn_'),
smalltalk.method({
selector: unescape('renderNavigationOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentNavItem", [])]);
return self;},
args: ["html"],
source: unescape('renderNavigationOn%3A%20html%0A%09html%20with%3A%20object%20inlineViewComponentNavItem.'),
messageSends: ["with:", "inlineViewComponentNavItem"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderVirtualClassAndClassOn_'),
smalltalk.method({
selector: unescape('renderVirtualClassAndClassOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
((($receiver = smalltalk.send(self['@classObject'], "__eq", [smalltalk.send(self['@object'], "_virtualClassObject", [])])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [" : "]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_virtualClassObject", []), "_inlineViewComponent", [])]);})(html);})]));
(function($rec){smalltalk.send($rec, "_with_", [" :: "]);return smalltalk.send($rec, "_with_", [smalltalk.send(self['@classObject'], "_inlineViewComponent", [])]);})(html);
return self;},
args: ["html"],
source: unescape('renderVirtualClassAndClassOn%3A%20html%0A%09classObject%20%3D%20object%20virtualClassObject%20ifFalse%3A%20%5B%0A%09%09html%0A%09%09%09with%3A%20%27%20%3A%20%27%3B%0A%09%09%09with%3A%20object%20virtualClassObject%20inlineViewComponent%5D.%0A%09html%20%0A%09%09with%3A%20%27%20%3A%3A%20%27%3B%0A%09%09with%3A%20classObject%20inlineViewComponent.'),
messageSends: ["ifFalse:", unescape("%3D"), "virtualClassObject", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
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
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09%7CallTabs%20firstCaption%20defaultTab%7C%0A%09allTabs%20%3A%3D%20self%20contentTabs.%0A%09allTabs%20size%20%3E%200%20ifTrue%3A%20%5B%0A%09%09html%20ul%0A%09%09%09class%3A%20%27nav%20nav-tabs%27%3B%0A%09%09%09style%3A%20%27display%3A%20inline-block%3B%20margin-bottom%3A%200px%3B%20margin-top%3A%205px%3B%20width%3A%20100%25%3B%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09html%20li%0A%09%09%09%09%09style%3A%20%27float%3A%20right%3B%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20makeCurrentTabResizable%5D%3B%0A%09%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09%09html%20a%0A%09%09%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09%09%09onClick%3A%20%5Bself%20makeCurrentTabResizable%5D%3B%0A%09%09%09%09%09%09%09with%3A%20MaglevIcon%20resizeSmall%5D.%0A%09%09%09%09self%20contentTabs%20keysAndValuesDo%3A%20%5B%3Acaption%20%3Agenerator%20%7C%20%7CcapEl%7C%0A%09%09%09%09%09firstCaption%20ifNil%3A%20%5BfirstCaption%20%3A%3D%20caption%5D.%0A%09%09%09%09%09capEl%20%3A%3D%20html%20li%20with%3A%20%5B%0A%09%09%09%09%09%09html%20a%0A%09%09%09%09%09%09%09href%3A%20%27%23%27%3B%0A%09%09%09%09%09%09%09onClick%3A%20%5Bself%20showTab%3A%20caption%5D%3B%0A%09%09%09%09%09%09%09with%3A%20caption%5D.%0A%09%09%09%09self%20captions%20at%3A%20caption%20put%3A%20capEl%5D%5D%5D.%0A%09tabsContainer%20%3A%3D%20html%20div.%0A%09defaultTab%20%3A%3D%20self%20defaultTab.%0A%09defaultTab%20%0A%09%09ifNil%3A%20%5BfirstCaption%20ifNotNil%3A%20%5Bself%20showTab%3A%20firstCaption%5D%5D%0A%09%09ifNotNil%3A%20%5Bself%20showTab%3A%20defaultTab%5D.'),
messageSends: ["contentTabs", "ifTrue:", unescape("%3E"), "size", "class:", "style:", "with:", "onClick:", "makeCurrentTabResizable", "href:", "resizeSmall", "a", "li", "keysAndValuesDo:", "ifNil:", "showTab:", "at:put:", "captions", "ul", "div", "defaultTab", "ifNil:ifNotNil:", "ifNotNil:"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-left%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("%3C0x"), "__comma", [smalltalk.send(smalltalk.send(self['@object'], "_oop", []), "_asHexString", [])]), "__comma", [unescape("%3E")])]);})(smalltalk.send(html, "_span", []));})]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20object%20inlineViewComponentShort.%0A%09html%20with%3A%20%5B%0A%09%09html%20span%0A%09%09%09style%3A%20%27margin-left%3A%205px%3B%27%3B%0A%09%09%09with%3A%20%27%3C0x%27%2C%20object%20oop%20asHexString%2C%20%27%3E%27%5D.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09html%20div%0A%09%09class%3A%20%27right-inline-block%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09self%20renderVirtualClassAndClassOn%3A%20html.%0A%09%09%09self%20renderCloseButtonOn%3A%20html%5D.'),
messageSends: ["with:", "inlineViewComponentShort", "style:", unescape("%2C"), "asHexString", "oop", "span", "renderHeightPlaceholderOn:", "class:", "renderVirtualClassAndClassOn:", "renderCloseButtonOn:", "div"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_replace_'),
smalltalk.method({
selector: unescape('replace%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_replace_", [aWindow], smalltalk.MaglevWindow);
((($receiver = smalltalk.send(aWindow, "_isWaitingWindow", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_unregisterWindow_", [aWindow]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_registerWindow_", [self]);
return self;},
args: ["aWindow"],
source: unescape('replace%3A%20aWindow%0A%09super%20replace%3A%20aWindow.%0A%09aWindow%20isWaitingWindow%0A%09%09ifFalse%3A%20%5BMaglevObjectSpace%20instance%20unregisterWindow%3A%20aWindow%5D.%0A%09MaglevObjectSpace%20instance%20registerWindow%3A%20self.'),
messageSends: ["replace:", "ifFalse:", "isWaitingWindow", "unregisterWindow:", "instance", "registerWindow:"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_showTab_'),
smalltalk.method({
selector: unescape('showTab%3A'),
category: 'interactions',
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
return self;},
args: ["caption"],
source: unescape('showTab%3A%20caption%0A%09%7CallTabs%7C%0A%09allTabs%20%3A%3D%20self%20contentTabs.%0A%09%22Lazy%20generate%20new%20tabs.%22%0A%09%28%28self%20tabs%20includesKey%3A%20caption%29%20not%20and%3A%20%5BallTabs%20includesKey%3A%20caption%5D%29%0A%09%09ifTrue%3A%20%5B%20%7Ctab%20html%7C%0A%09%09%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20tabsContainer%20asJQuery.%0A%09%09%09tab%20%3A%3D%20html%20div%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09html%20div%0A%09%09%09%09%09%09with%3A%20%5Bself%20perform%3A%20%28allTabs%20at%3A%20caption%29%20withArguments%3A%20%7Bhtml%7D%5D%5D.%0A%09%09%09self%20tabs%20at%3A%20caption%20put%3A%20tab%5D.%0A%09self%20tabs%20keysAndValuesDo%3A%20%5B%3AtabCaption%20%3Atab%20%7C%20%7CcapEl%7C%0A%09%09capEl%20%3A%3D%20self%20captions%20at%3A%20tabCaption.%0A%09%09caption%20%3D%20tabCaption%0A%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09currentTab%20%3A%3D%20tab.%0A%09%09%09%09tab%20show.%0A%09%09%09%09capEl%20addClass%3A%20%27active%27%5D%0A%09%09%09ifFalse%3A%20%5B%0A%09%09%09%09tab%20hide.%0A%09%09%09%09capEl%20removeClass%3A%20%27active%27%5D%5D.%0A%09%22return%20false%20to%20avoid%20scrolling%20to%20the%20top%22%0A%09%5E%20false'),
messageSends: ["contentTabs", "ifTrue:", "and:", "not", "includesKey:", "tabs", "onJQuery:", "asJQuery", "with:", "div", "perform:withArguments:", "at:", "at:put:", "keysAndValuesDo:", "captions", "ifTrue:ifFalse:", unescape("%3D"), "show", "addClass:", "hide", "removeClass:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevObjectWindow);

smalltalk.addMethod(
unescape('_tabs'),
smalltalk.method({
selector: unescape('tabs'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@tabs']) == nil || $receiver == undefined) ? (function(){return (self['@tabs']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@tabs'];
return self;},
args: [],
source: unescape('tabs%0A%09tabs%20ifNil%3A%20%5Btabs%20%3A%3D%20Dictionary%20new%5D.%0A%09%5E%20tabs'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectWindow);


smalltalk.addMethod(
unescape('_newReplace_with_'),
smalltalk.method({
selector: unescape('newReplace%3Awith%3A'),
category: 'instance creation',
fn: function (aWindow, anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [anObject]);smalltalk.send($rec, "_replace_", [aWindow]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aWindow", "anObject"],
source: unescape('newReplace%3A%20aWindow%20with%3A%20anObject%0A%09%5E%20self%20new%0A%09%09object%3A%20anObject%3B%0A%09%09replace%3A%20aWindow%3B%0A%09%09yourself'),
messageSends: ["object:", "replace:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.MaglevObjectWindow.klass);


smalltalk.addClass('MaglevArrayWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(smalltalk.send(self['@object'], "_elements", []), "_keysAndValuesDo_", [(function(idx, value){return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("arrayElement"), idx]);})]));})]);
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09super%20checkAddConnectionTo%3A%20aWindow.%0A%09object%20elements%20keysAndValuesDo%3A%20%5B%3Aidx%20%3Avalue%20%7C%0A%09%09value%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23arrayElement%20with%3A%20idx%5D%5D.'),
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "elements", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:"],
referencedClasses: []
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Elements", smalltalk.symbolFor("renderArrayElementsOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasElements%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Elements%27%20put%3A%20%23renderArrayElementsOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Elements";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Elements%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArrayWindow);

smalltalk.addMethod(
unescape('_renderArrayElementsOn_'),
smalltalk.method({
selector: unescape('renderArrayElementsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;},
args: ["html"],
source: unescape('renderArrayElementsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20with%3A%20%23elements%29.'),
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
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
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevObjectWindow);
smalltalk.send(self['@object'], "_keysAndValuesDo_", [(function(key, value){((($receiver = smalltalk.send(key, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashKey"), smalltalk.send(unescape("self%5B...%5D%20%3D%20"), "__comma", [smalltalk.send(value, "_shortInspection", [])])]);})]));return ((($receiver = smalltalk.send(value, "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("hashValue"), smalltalk.send(smalltalk.send(unescape("self%5B"), "__comma", [smalltalk.send(key, "_shortInspection", [])]), "__comma", [unescape("%5D%20%3D%20...")])]);})]));})]);
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09super%20checkAddConnectionTo%3A%20aWindow.%0A%09object%20keysAndValuesDo%3A%20%5B%3Akey%20%3Avalue%20%7C%0A%09%09key%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23hashKey%20with%3A%20%27self%5B...%5D%20%3D%20%27%2C%20value%20shortInspection%5D.%0A%09%09value%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23hashValue%20with%3A%20%27self%5B%27%2C%20key%20shortInspection%2C%20%27%5D%20%3D%20...%27%5D%5D.'),
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "ifTrue:", unescape("%3D%3D"), "object", "connectTo:as:with:", unescape("%2C"), "shortInspection"],
referencedClasses: []
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Associations", smalltalk.symbolFor("renderHashElementsOn:")]);})]));
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasElements%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Associations%27%20put%3A%20%23renderHashElementsOn%3A%5D.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Associations";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Associations%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHashWindow);

smalltalk.addMethod(
unescape('_renderHashElementsOn_'),
smalltalk.method({
selector: unescape('renderHashElementsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("elements")])]);
return self;},
args: ["html"],
source: unescape('renderHashElementsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23elements%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevHashWindow);



smalltalk.addClass('MaglevMaglevRecordBaseWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Attributes", smalltalk.symbolFor("renderAttributesOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Attributes%27%20put%3A%20%23renderAttributesOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevMaglevRecordBaseWindow);

smalltalk.addMethod(
unescape('_renderAttributesOn_'),
smalltalk.method({
selector: unescape('renderAttributesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("attributes")])]);
return self;},
args: ["html"],
source: unescape('renderAttributesOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23attributes%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevMaglevRecordBaseWindow);



smalltalk.addClass('MaglevModuleWindow', smalltalk.MaglevObjectWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'methodContainer', 'waitingScreen', 'hierarchyContainer'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasConstants", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Constants", smalltalk.symbolFor("renderConstantsOn:")]);})]));
((($receiver = smalltalk.send(smalltalk.send(self, "_object", []), "_hasIncludedModules", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(result, "_at_put_", ["Included Modules", smalltalk.symbolFor("renderIncludedModulesOn:")]);})]));
smalltalk.send(result, "_at_put_", ["Code", smalltalk.symbolFor("renderCodeTabOn:")]);
smalltalk.send(result, "_at_put_", ["Hierarchy", smalltalk.symbolFor("renderHierarchyOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09self%20object%20hasConstants%20%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Constants%27%20put%3A%20%23renderConstantsOn%3A%5D.%0A%09self%20object%20hasIncludedModules%0A%09%09ifTrue%3A%20%5Bresult%20at%3A%20%27Included%20Modules%27%20put%3A%20%23renderIncludedModulesOn%3A%5D.%0A%09result%20at%3A%20%27Code%27%20put%3A%20%23renderCodeTabOn%3A.%0A%09result%20at%3A%20%27Hierarchy%27%20put%3A%20%23renderHierarchyOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "ifTrue:", "hasConstants", "object", "at:put:", "hasIncludedModules"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Code";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Code%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_initializeTree_'),
smalltalk.method({
selector: unescape('initializeTree%3A'),
category: 'initializing',
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
return self;},
args: ["container"],
source: unescape('initializeTree%3A%20container%0A%09%3C%20container.jstree%28%7B%0A%09%09plugins%3A%20%5B%22crrm%22%2C%20%22html_data%22%2C%20%22themes%22%5D%2C%0A%09%09core%3A%20%7B%0A%09%09%09animation%3A%200%2C%0A%09%09%09open_parents%3A%20true%7D%7D%29%3B%0A%09//%20setTimout%3A%20jstree%20fix%0A%09setTimeout%28function%28%29%7B%0A%09%09container.find%28%27.treeview-replace-me%27%29.each%28function%28index%2C%20el%29%20%7B%0A%09%09%09var%20jqEl%20%3D%20%24%28el%29%3B%0A%09%09%09self._renderInlineViewFor_inside_%28jqEl.data%28%27oop%27%29%2C%20jqEl%29%3B%0A%09%09%09jqEl.removeClass%28%27treeview-replace-me%27%29%3B%0A%09%09%7D%29%3B%7D%2C%200%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderCodeTabOn_'),
smalltalk.method({
selector: unescape('renderCodeTabOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html, "_root", []), "_style_", [unescape("width%3A%20100%25%3B")]);
smalltalk.send(self, "_renderListsOn_", [html]);
(self['@waitingScreen']=smalltalk.send(smalltalk.send(html, "_div", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]));
(self['@methodContainer']=smalltalk.send(smalltalk.send(html, "_div", []), "_style_", [unescape("margin-top%3A%2010px%3B")]));
smalltalk.send(smalltalk.send(self, "_object", []), "_allSelectorsWithCallback_", [(function(obj){(self['@selectors']=obj);smalltalk.send(self, "_renderSelectorCategories", []);smalltalk.send(self['@waitingScreen'], "_hide", []);smalltalk.send(self['@categoryNamesSelect'], "_show", []);return smalltalk.send(self['@selectorsSelect'], "_show", []);})]);
return self;},
args: ["html"],
source: unescape('renderCodeTabOn%3A%20html%0A%09html%20root%0A%09%09style%3A%20%27width%3A%20100%25%3B%27.%0A%09self%20renderListsOn%3A%20html.%0A%09waitingScreen%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09with%3A%20%27%20loading...%27%5D.%0A%09methodContainer%20%3A%3D%20html%20div%0A%09%09style%3A%20%27margin-top%3A%2010px%3B%27.%0A%09self%20object%20allSelectorsWithCallback%3A%20%5B%3Aobj%20%7C%0A%09%09selectors%20%3A%3D%20obj.%0A%09%09self%20renderSelectorCategories.%0A%09%09waitingScreen%20hide.%0A%09%09categoryNamesSelect%20show.%0A%09%09selectorsSelect%20show%5D.'),
messageSends: ["style:", "root", "renderListsOn:", "with:", "div", "wait", "allSelectorsWithCallback:", "object", "renderSelectorCategories", "hide", "show"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderConstantsOn_'),
smalltalk.method({
selector: unescape('renderConstantsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("constants")])]);
return self;},
args: ["html"],
source: unescape('renderConstantsOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23constants%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderHierarchyOn_'),
smalltalk.method({
selector: unescape('renderHierarchyOn%3A'),
category: 'rendering',
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
return self;},
args: ["htmlIn"],
source: unescape('renderHierarchyOn%3A%20htmlIn%0A%09%7CwaitingBox%20hcContainer%7C%0A%09hcContainer%20%3A%3D%20htmlIn%20div%0A%09%09style%3A%20%27height%3A%20300px%3B%20overflow%3A%20hidden%3B%27.%0A%09waitingBox%20%3A%3D%20htmlIn%20div%20with%3A%20%5B%0A%09%09htmlIn%20%0A%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09with%3A%20%27%20loading...%27%5D.%0A%09object%20ensureSuperListLoadedWithCallback%3A%20%5B%20%7CrenderedInlines%20html%7C%0A%09%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20hcContainer%20asJQuery.%0A%09%09renderedInlines%20%3A%3D%20Array%20new.%0A%09%09hierarchyContainer%20%3A%3D%20html%20div%20%0A%09%09%09style%3A%20%27width%3A%20100%25%3B%20height%3A%20100%25%3B%20overflow%3A%20auto%3B%27%3B%0A%09%09%09with%3A%20%5B%20%7ClastUl%7C%0A%09%09%09%09lastUl%20%3A%3D%20html%20ul.%0A%09%09%09%09object%20superList%20do%3A%20%5B%3Acls%20%7C%20%22render%20superclasses%22%0A%09%09%09%09%09lastUl%20with%3A%20%5B%0A%09%09%09%09%09%09html%20li%0A%09%09%09%09%09%09%09data%3A%20%27oop%27%20with%3A%20cls%20oop%20asString%3B%0A%09%09%09%09%09%09%09with%3A%20%5B%7Ccontainer%7C%0A%09%09%09%09%09%09%09%09container%20%3A%3D%20html%20span%20%0A%09%09%09%09%09%09%09%09%09data%3A%20%27oop%27%20with%3A%20cls%20oop%20asString%3B%0A%09%09%09%09%09%09%09%09%09class%3A%20%27treeview-replace-me%27.%0A%09%09%09%09%09%09%09%09renderedInlines%20add%3A%20container%5D%3B%0A%09%09%09%09%09%09%09with%3A%20%5BlastUl%20%3A%3D%20html%20ul%5D%5D%5D%5D.%0A%09%09self%20initializeTree%3A%20hierarchyContainer%20asJQuery.%0A%09%09hcContainer%20asJQuery%20resizable.%0A%09%09waitingBox%20hide%5D.'),
messageSends: ["style:", "div", "with:", "wait", "ensureSuperListLoadedWithCallback:", "onJQuery:", "asJQuery", "new", "ul", "do:", "superList", "data:with:", "asString", "oop", "class:", "span", "add:", "li", "initializeTree:", "resizable", "hide"],
referencedClasses: ["MaglevIcon", "HTMLCanvas", "Array"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderHierarchySubclass_for_'),
smalltalk.method({
selector: unescape('renderHierarchySubclass%3Afor%3A'),
category: 'interactions',
fn: function (cls, oop){
var self=this;
 var ownerLi = self['@hierarchyContainer']._asJQuery().find("[data-oop='" + oop + "']");
	if (ownerLi.find("[data-oop='" + cls._oop() + "']").length == 0) {
		self['@hierarchyContainer']._asJQuery().jstree('create', ownerLi, null, {attr: {'data-oop': cls._oop(), 'data-replace-me': '1'}}, null, true);
	} ;
return self;},
args: ["cls", "oop"],
source: unescape('renderHierarchySubclass%3A%20cls%20for%3A%20oop%0A%09%3C%20var%20ownerLi%20%3D%20self%5B%27@hierarchyContainer%27%5D._asJQuery%28%29.find%28%22%5Bdata-oop%3D%27%22%20+%20oop%20+%20%22%27%5D%22%29%3B%0A%09if%20%28ownerLi.find%28%22%5Bdata-oop%3D%27%22%20+%20cls._oop%28%29%20+%20%22%27%5D%22%29.length%20%3D%3D%200%29%20%7B%0A%09%09self%5B%27@hierarchyContainer%27%5D._asJQuery%28%29.jstree%28%27create%27%2C%20ownerLi%2C%20null%2C%20%7Battr%3A%20%7B%27data-oop%27%3A%20cls._oop%28%29%2C%20%27data-replace-me%27%3A%20%271%27%7D%7D%2C%20null%2C%20true%29%3B%0A%09%7D%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderIncludedModulesOn_'),
smalltalk.method({
selector: unescape('renderIncludedModulesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("includedModules")])]);
return self;},
args: ["html"],
source: unescape('renderIncludedModulesOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newFor%3A%20self%20object%20with%3A%20%23includedModules%29.'),
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderInlineViewFor_inside_'),
smalltalk.method({
selector: unescape('renderInlineViewFor%3Ainside%3A'),
category: 'rendering',
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
return self;},
args: ["oop", "htmlElement"],
source: unescape('renderInlineViewFor%3A%20oop%20inside%3A%20htmlElement%0A%09%7Chtml%20subclassesButton%20waitIcon%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20htmlElement.%0A%09waitIcon%20%3A%3D%20MaglevIcon%20wait.%0A%09html%20with%3A%20waitIcon.%0A%09waitIcon%20hide.%0A%09subclassesButton%20%3A%3D%20MaglevIcon%20codeFork.%0A%09html%20with%3A%20%5Bhtml%20a%20with%3A%20subclassesButton%5D.%0A%09subclassesButton%20onClick%3A%20%5B%20%7Cobj%7C%0A%09%09subclassesButton%20hide.%0A%09%09waitIcon%20show.%0A%09%09obj%20%3A%3D%20MaglevObjectSpace%20instance%20at%3A%20oop.%0A%09%09obj%20ensureSubclassesLoadedWithCallback%3A%20%5B%0A%09%09%09obj%20subclasses%20do%3A%20%5B%3Acls%20%7C%0A%09%09%09%09self%20renderHierarchySubclass%3A%20cls%20for%3A%20oop%5D.%0A%09%09%09self%20replaceHierarchySubclasses.%0A%09%09%09waitIcon%20hide%5D%5D.%0A%09%28MaglevObjectSpace%20instance%20at%3A%20oop%29%20inlineViewComponentFull%20renderOn%3A%20html.'),
messageSends: ["onJQuery:", "wait", "with:", "hide", "codeFork", "a", "onClick:", "show", "at:", "instance", "ensureSubclassesLoadedWithCallback:", "do:", "subclasses", "renderHierarchySubclass:for:", "replaceHierarchySubclasses", "renderOn:", "inlineViewComponentFull"],
referencedClasses: ["HTMLCanvas", "MaglevIcon", "MaglevObjectSpace"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderListsOn_'),
smalltalk.method({
selector: unescape('renderListsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@categoryNamesSelect']=smalltalk.send((smalltalk.MaglevListBox || MaglevListBox), "_new", []));
smalltalk.send(html, "_with_", [self['@categoryNamesSelect']]);
(function($rec){smalltalk.send($rec, "_changedCallback_", [(function(cat, index){return smalltalk.send(self, "_renderSelectors_", [cat]);})]);smalltalk.send($rec, "_height_", [(250)]);smalltalk.send($rec, "_style_", [unescape("float%3A%20left%3B%20width%3A%2050%25%3B%20margin-right%3A%2010px%3B%20margin-left%3A%200px%3B%20display%3A%20inline-block%3B")]);return smalltalk.send($rec, "_hide", []);})(self['@categoryNamesSelect']);
(self['@selectorsSelect']=smalltalk.send((smalltalk.MaglevListBox || MaglevListBox), "_new", []));
smalltalk.send(html, "_with_", [self['@selectorsSelect']]);
(function($rec){smalltalk.send($rec, "_changedCallback_", [(function(sel, index){return smalltalk.send(self, "_renderSourceCode_", [sel]);})]);smalltalk.send($rec, "_height_", [(250)]);smalltalk.send($rec, "_style_", [unescape("display%3A%20inline-block%3B%20width%3A%2050%25%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2010px%3B")]);return smalltalk.send($rec, "_hide", []);})(self['@selectorsSelect']);
return self;},
args: ["html"],
source: unescape('renderListsOn%3A%20html%0A%09categoryNamesSelect%20%3A%3D%20MaglevListBox%20new.%0A%09html%20with%3A%20categoryNamesSelect.%0A%09categoryNamesSelect%0A%09%09changedCallback%3A%20%5B%3Acat%20%3Aindex%20%7C%20self%20renderSelectors%3A%20cat%5D%3B%0A%09%09height%3A%20250%3B%0A%09%09style%3A%20%27float%3A%20left%3B%20width%3A%2050%25%3B%20margin-right%3A%2010px%3B%20margin-left%3A%200px%3B%20display%3A%20inline-block%3B%27%3B%0A%09%09hide.%0A%09selectorsSelect%20%3A%3D%20MaglevListBox%20new.%0A%09html%20with%3A%20selectorsSelect.%0A%09selectorsSelect%0A%09%09changedCallback%3A%20%5B%3Asel%20%3Aindex%20%7C%20self%20renderSourceCode%3A%20sel%5D%3B%0A%09%09height%3A%20250%3B%0A%09%09style%3A%20%27display%3A%20inline-block%3B%20width%3A%2050%25%3B%20box-sizing%3A%20border-box%3B%20-webkit-box-sizing%3A%20border-box%3B%20padding-right%3A%2010px%3B%27%3B%0A%09%09hide.'),
messageSends: ["new", "with:", "changedCallback:", "renderSelectors:", "height:", "style:", "hide", "renderSourceCode:"],
referencedClasses: ["MaglevListBox"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
category: 'rendering',
fn: function (obj){
var self=this;
var methodEditor=nil;
(methodEditor=smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj]));
smalltalk.send(methodEditor, "_classObject_", [self['@object']]);
smalltalk.send(self['@methodContainer'], "_with_", [methodEditor]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;},
args: ["obj"],
source: unescape('renderMethodObject%3A%20obj%0A%09%7CmethodEditor%7C%0A%09methodEditor%20%3A%3D%20MaglevGsNMethodEditor%20for%3A%20obj.%0A%09methodEditor%20classObject%3A%20object.%0A%09methodContainer%20with%3A%20methodEditor.%0A%09waitingScreen%20hide.'),
messageSends: ["for:", "classObject:", "with:", "hide"],
referencedClasses: ["MaglevGsNMethodEditor"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderRubySourceCodeFor_'),
smalltalk.method({
selector: unescape('renderRubySourceCodeFor%3A'),
category: 'rendering',
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_sourceCodeFor_language_withCallback_", [selectorString, "ruby", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;},
args: ["selectorString"],
source: unescape('renderRubySourceCodeFor%3A%20selectorString%0A%09object%20%0A%09%09sourceCodeFor%3A%20selectorString%20%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20self%20renderMethodObject%3A%20obj%5D.'),
messageSends: ["sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectorCategories'),
smalltalk.method({
selector: unescape('renderSelectorCategories'),
category: 'rendering',
fn: function (){
var self=this;
smalltalk.send(self['@categoryNamesSelect'], "_clear", []);
smalltalk.send(self['@selectors'], "_keysAndValuesDo_", [(function(category, catSelectors){return smalltalk.send(self['@categoryNamesSelect'], "_with_data_", [(function(html){((($receiver = smalltalk.send(category, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})() : (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);}), (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})]));return smalltalk.send(html, "_with_", [category]);}), category]);})]);
return self;},
args: [],
source: unescape('renderSelectorCategories%0A%09categoryNamesSelect%20clear.%0A%09selectors%20keysAndValuesDo%3A%20%5B%3Acategory%20%3AcatSelectors%20%7C%0A%09%09categoryNamesSelect%20with%3A%20%5B%3Ahtml%20%7C%0A%09%09%09category%20%3D%20%27%28all%20Ruby%29%27%20%0A%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20ruby%5D%0A%09%09%09%09ifFalse%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20smalltalk%5D.%0A%09%09%09html%20with%3A%20category%5D%0A%09%09%09data%3A%20category%5D.'),
messageSends: ["clear", "keysAndValuesDo:", "with:data:", "ifTrue:ifFalse:", unescape("%3D"), "with:", "ruby", "smalltalk"],
referencedClasses: ["MaglevIconImage"]
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSelectors_'),
smalltalk.method({
selector: unescape('renderSelectors%3A'),
category: 'interactions',
fn: function (selectedCategory){
var self=this;
try{var currentSelectors=nil;
smalltalk.send(self['@selectorsSelect'], "_clear", []);
(currentSelectors=smalltalk.send(self['@selectors'], "_at_", [selectedCategory]));
(($receiver = currentSelectors) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderSelectors_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(currentSelectors, "_do_", [(function(sel){return smalltalk.send(self['@selectorsSelect'], "_with_data_", [(function(html){return smalltalk.send(html, "_with_", [sel]);}), sel]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderSelectors_'){return e.fn()} throw(e)}},
args: ["selectedCategory"],
source: unescape('renderSelectors%3A%20selectedCategory%0A%09%7CcurrentSelectors%7C%0A%09selectorsSelect%20clear.%0A%09currentSelectors%20%3A%3D%20selectors%20at%3A%20selectedCategory.%0A%09currentSelectors%20ifNil%3A%20%5B%5E%20self%5D.%0A%09currentSelectors%20do%3A%20%5B%3Asel%20%7C%0A%09%09selectorsSelect%20%0A%09%09%09with%3A%20%5B%3Ahtml%20%7C%20html%20with%3A%20sel%5D%0A%09%09%09data%3A%20sel%5D.'),
messageSends: ["clear", "at:", "ifNil:", "do:", "with:data:", "with:"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSmalltalkSourceCodeFor_'),
smalltalk.method({
selector: unescape('renderSmalltalkSourceCodeFor%3A'),
category: 'rendering',
fn: function (selectorString){
var self=this;
smalltalk.send(self['@object'], "_sourceCodeFor_language_withCallback_", [selectorString, "smalltalk", (function(obj){return smalltalk.send(self, "_renderMethodObject_", [obj]);})]);
return self;},
args: ["selectorString"],
source: unescape('renderSmalltalkSourceCodeFor%3A%20selectorString%0A%09object%20%0A%09%09sourceCodeFor%3A%20selectorString%20%0A%09%09language%3A%20%27smalltalk%27%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20self%20renderMethodObject%3A%20obj%5D.'),
messageSends: ["sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_renderSourceCode_'),
smalltalk.method({
selector: unescape('renderSourceCode%3A'),
category: 'interactions',
fn: function (selectorString){
var self=this;
try{var selectedCategory=nil;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
(($receiver = selectorString) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_renderSourceCode_', fn: function(){return self}})})();})() : $receiver;
smalltalk.send(self['@waitingScreen'], "_show", []);
(selectedCategory=smalltalk.send(self, "_selectedCategoryString", []));
((($receiver = smalltalk.send(selectedCategory, "__eq", [unescape("%28all%20Ruby%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);})() : (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_renderRubySourceCodeFor_", [selectorString]);}), (function(){return smalltalk.send(self, "_renderSmalltalkSourceCodeFor_", [selectorString]);})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_renderSourceCode_'){return e.fn()} throw(e)}},
args: ["selectorString"],
source: unescape('renderSourceCode%3A%20selectorString%0A%09%7CselectedCategory%7C%0A%09methodContainer%20asJQuery%20empty.%0A%09selectorString%20ifNil%3A%20%5B%5E%20self%5D.%0A%09waitingScreen%20show.%0A%09selectedCategory%20%3A%3D%20self%20selectedCategoryString.%0A%09selectedCategory%20%3D%20%27%28all%20Ruby%29%27%0A%09%09ifTrue%3A%20%5Bself%20renderRubySourceCodeFor%3A%20selectorString%5D%0A%09%09ifFalse%3A%20%5Bself%20renderSmalltalkSourceCodeFor%3A%20selectorString%5D.'),
messageSends: ["empty", "asJQuery", "ifNil:", "show", "selectedCategoryString", "ifTrue:ifFalse:", unescape("%3D"), "renderRubySourceCodeFor:", "renderSmalltalkSourceCodeFor:"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_replaceHierarchySubclasses'),
smalltalk.method({
selector: unescape('replaceHierarchySubclasses'),
category: 'interactions',
fn: function (){
var self=this;
 self['@hierarchyContainer']._asJQuery().find("[data-replace-me='1']").each(function(idx, el) {
		// TODO: jQuery not working here for unknown reasons
		el.getElementsByTagName('a')[0].remove();
		el.removeAttribute('data-replace-me');
		var jqEl = $(el);
		self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
	}); ;
return self;},
args: [],
source: unescape('replaceHierarchySubclasses%0A%09%3C%20self%5B%27@hierarchyContainer%27%5D._asJQuery%28%29.find%28%22%5Bdata-replace-me%3D%271%27%5D%22%29.each%28function%28idx%2C%20el%29%20%7B%0A%09%09//%20TODO%3A%20jQuery%20not%20working%20here%20for%20unknown%20reasons%0A%09%09el.getElementsByTagName%28%27a%27%29%5B0%5D.remove%28%29%3B%0A%09%09el.removeAttribute%28%27data-replace-me%27%29%3B%0A%09%09var%20jqEl%20%3D%20%24%28el%29%3B%0A%09%09self._renderInlineViewFor_inside_%28jqEl.data%28%27oop%27%29%2C%20jqEl%29%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_selectedCategoryString'),
smalltalk.method({
selector: unescape('selectedCategoryString'),
category: 'interactions',
fn: function (){
var self=this;
return smalltalk.send(self['@categoryNamesSelect'], "_selectedData", []);
return self;},
args: [],
source: unescape('selectedCategoryString%0A%09%5E%20categoryNamesSelect%20selectedData'),
messageSends: ["selectedData"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);

smalltalk.addMethod(
unescape('_sortList_'),
smalltalk.method({
selector: unescape('sortList%3A'),
category: 'rendering',
fn: function (aListBox){
var self=this;
var box=nil;
var children=nil;
(box=smalltalk.send(aListBox, "_asJQuery", []));
 children = box.children('option').sort(function (a, b) {return a.innerHTML > b.innerHTML ? 1 : -1}); ;
smalltalk.send(box, "_empty", []);
smalltalk.send(children, "_appendTo_", [box]);
return self;},
args: ["aListBox"],
source: unescape('sortList%3A%20aListBox%0A%09%7Cbox%20children%7C%0A%09box%20%3A%3D%20aListBox%20asJQuery.%0A%09%3C%20children%20%3D%20box.children%28%27option%27%29.sort%28function%20%28a%2C%20b%29%20%7Breturn%20a.innerHTML%20%3E%3E%20b.innerHTML%20%3F%201%20%3A%20-1%7D%29%3B%20%3E.%0A%09box%20empty.%0A%09children%20appendTo%3A%20box.'),
messageSends: ["asJQuery", "empty", "appendTo:"],
referencedClasses: []
}),
smalltalk.MaglevModuleWindow);



smalltalk.addClass('MaglevClassWindow', smalltalk.MaglevModuleWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_checkAddConnectionTo_'),
smalltalk.method({
selector: unescape('checkAddConnectionTo%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_checkAddConnectionTo_", [aWindow], smalltalk.MaglevModuleWindow);
((($receiver = smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "__eq_eq", [smalltalk.send(aWindow, "_object", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_connectTo_as_with_", [aWindow, smalltalk.symbolFor("superclass"), nil]);})]));
return self;},
args: ["aWindow"],
source: unescape('checkAddConnectionTo%3A%20aWindow%0A%09super%20checkAddConnectionTo%3A%20aWindow.%0A%09object%20superclassObject%20%3D%3D%20aWindow%20object%20ifTrue%3A%20%5Bself%20connectTo%3A%20aWindow%20as%3A%20%23superclass%20with%3A%20nil%5D.'),
messageSends: ["checkAddConnectionTo:", "ifTrue:", unescape("%3D%3D"), "superclassObject", "object", "connectTo:as:with:"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevModuleWindow));
smalltalk.send(result, "_at_put_", ["Instances", smalltalk.symbolFor("renderInstancesOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Instances%27%20put%3A%20%23renderInstancesOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderInstancesOn_'),
smalltalk.method({
selector: unescape('renderInstancesOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send(self['@object'], "_instancesViewComponent", [])]);
return self;},
args: ["html"],
source: unescape('renderInstancesOn%3A%20html%0A%09html%20with%3A%20object%20instancesViewComponent.'),
messageSends: ["with:", "instancesViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send(self['@object'], "_inlineViewComponentShort", [])]);smalltalk.send($rec, "_with_", [unescape("%20%3C%20")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(self['@object'], "_superclassObject", []), "_inlineViewComponent", [])]);})(html);
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_style_", [unescape("margin-left%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [smalltalk.send(smalltalk.send(unescape("%3C0x"), "__comma", [smalltalk.send(smalltalk.send(self['@object'], "_oop", []), "_asHexString", [])]), "__comma", [unescape("%3E")])]);})(smalltalk.send(html, "_span", []));})]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
(function($rec){smalltalk.send($rec, "_class_", [unescape("right-inline-block")]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_renderVirtualClassAndClassOn_", [html]);return smalltalk.send(self, "_renderCloseButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20%0A%09%09with%3A%20object%20inlineViewComponentShort%3B%0A%09%09with%3A%20%27%20%3C%20%27%3B%0A%09%09with%3A%20object%20superclassObject%20inlineViewComponent.%0A%09html%20with%3A%20%5B%0A%09%09html%20span%0A%09%09%09style%3A%20%27margin-left%3A%205px%3B%27%3B%0A%09%09%09with%3A%20%27%3C0x%27%2C%20object%20oop%20asHexString%2C%20%27%3E%27%5D.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09html%20div%0A%09%09class%3A%20%27right-inline-block%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09self%20renderVirtualClassAndClassOn%3A%20html.%0A%09%09%09self%20renderCloseButtonOn%3A%20html%5D.'),
messageSends: ["with:", "inlineViewComponentShort", "inlineViewComponent", "superclassObject", "style:", unescape("%2C"), "asHexString", "oop", "span", "renderHeightPlaceholderOn:", "class:", "renderVirtualClassAndClassOn:", "renderCloseButtonOn:", "div"],
referencedClasses: []
}),
smalltalk.MaglevClassWindow);



smalltalk.addClass('MaglevSystemClassWindow', smalltalk.MaglevClassWindow, ['transactionResultBox', 'persistenceModeButton'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_abortTransaction'),
smalltalk.method({
selector: unescape('abortTransaction'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEAbortTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;},
args: [],
source: unescape('abortTransaction%0A%09self%20showTransactionWaitingBox.%0A%09object%20%0A%09%09evaluate%3A%20%27self.__DBEAbortTransaction%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09transactionResultBox%20asJQuery%20empty.%0A%09%09%09transactionResultBox%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-success%27%5D%0A%09%09%09%09ifFalse%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09transactionResultBox%20with%3A%20resultObj%20inlineViewComponent%5D.'),
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_commitTransaction'),
smalltalk.method({
selector: unescape('commitTransaction'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBECommitTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;},
args: [],
source: unescape('commitTransaction%0A%09self%20showTransactionWaitingBox.%0A%09object%20%0A%09%09evaluate%3A%20%27self.__DBECommitTransaction%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09transactionResultBox%20asJQuery%20empty.%0A%09%09%09transactionResultBox%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-success%27%5D%0A%09%09%09%09ifFalse%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09transactionResultBox%20with%3A%20resultObj%20inlineViewComponent%5D.'),
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevClassWindow));
smalltalk.send(result, "_at_put_", ["Stone Version Report", smalltalk.symbolFor("renderStoneVersionReportOn:")]);
smalltalk.send(result, "_at_put_", ["Gem Version Report", smalltalk.symbolFor("renderGemVersionReportOn:")]);
smalltalk.send(result, "_at_put_", ["Control Panel", smalltalk.symbolFor("renderControlPanelOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Stone%20Version%20Report%27%20put%3A%20%23renderStoneVersionReportOn%3A.%0A%09result%20at%3A%20%27Gem%20Version%20Report%27%20put%3A%20%23renderGemVersionReportOn%3A.%0A%09result%20at%3A%20%27Control%20Panel%27%20put%3A%20%23renderControlPanelOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_continueTransaction'),
smalltalk.method({
selector: unescape('continueTransaction'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEContinueTransaction", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;},
args: [],
source: unescape('continueTransaction%0A%09self%20showTransactionWaitingBox.%0A%09object%20%0A%09%09evaluate%3A%20%27self.__DBEContinueTransaction%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09transactionResultBox%20asJQuery%20empty.%0A%09%09%09transactionResultBox%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-success%27%5D%0A%09%09%09%09ifFalse%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09transactionResultBox%20with%3A%20resultObj%20inlineViewComponent%5D.'),
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Control Panel";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Control%20Panel%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderControlPanelOn_'),
smalltalk.method({
selector: unescape('renderControlPanelOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", ["well"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Abort Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_abortTransaction", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Commit Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_commitTransaction", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-warning")]);smalltalk.send($rec, "_value_", ["Continue Transaction"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B%20margin-right%3A%201%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_continueTransaction", []);})]);})(smalltalk.send(html, "_input", []));(self['@persistenceModeButton']=(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", ["btn"]);smalltalk.send($rec, "_value_", ["Persistent Mode"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2022%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_togglePersistentMode", []);})]);})(smalltalk.send(html, "_input", [])));return (self['@transactionResultBox']=(function($rec){smalltalk.send($rec, "_style_", [unescape("margin-top%3A%2010px%3B%20margin-bottom%3A%200px%3B")]);smalltalk.send($rec, "_class_", ["alert"]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));})]);})(smalltalk.send(html, "_div", []));})]);
smalltalk.send(self, "_updatePersistentMode", []);
return self;},
args: ["html"],
source: unescape('renderControlPanelOn%3A%20html%0A%09html%20with%3A%09%5B%0A%09%09html%20div%0A%09%09%09class%3A%20%27well%27%3B%0A%09%09%09with%3A%20%5B%0A%09%09%09%09html%20input%0A%09%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09%09class%3A%20%27btn%20btn-warning%27%3B%0A%09%09%09%09%09value%3A%20%27Abort%20Transaction%27%3B%0A%09%09%09%09%09style%3A%20%27width%3A%2025%25%3B%20margin-right%3A%201%25%3B%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20abortTransaction%5D.%0A%09%09%09%09html%20input%0A%09%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09%09class%3A%20%27btn%20btn-warning%27%3B%0A%09%09%09%09%09value%3A%20%27Commit%20Transaction%27%3B%0A%09%09%09%09%09style%3A%20%27width%3A%2025%25%3B%20margin-right%3A%201%25%3B%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20commitTransaction%5D.%0A%09%09%09%09html%20input%0A%09%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09%09class%3A%20%27btn%20btn-warning%27%3B%0A%09%09%09%09%09value%3A%20%27Continue%20Transaction%27%3B%0A%09%09%09%09%09style%3A%20%27width%3A%2025%25%3B%20margin-right%3A%201%25%3B%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20continueTransaction%5D.%0A%09%09%09%09persistenceModeButton%20%3A%3D%20html%20input%0A%09%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09%09class%3A%20%27btn%27%3B%0A%09%09%09%09%09value%3A%20%27Persistent%20Mode%27%3B%0A%09%09%09%09%09style%3A%20%27width%3A%2022%25%3B%27%3B%0A%09%09%09%09%09onClick%3A%20%5Bself%20togglePersistentMode%5D.%0A%09%09%09%09transactionResultBox%20%3A%3D%20html%20div%0A%09%09%09%09%09style%3A%20%27margin-top%3A%2010px%3B%20margin-bottom%3A%200px%3B%27%3B%0A%09%09%09%09%09class%3A%20%27alert%27%3B%0A%09%09%09%09%09hide%5D%5D.%0A%09self%20updatePersistentMode.'),
messageSends: ["with:", "class:", "type:", "value:", "style:", "onClick:", "abortTransaction", "input", "commitTransaction", "continueTransaction", "togglePersistentMode", "hide", "div", "updatePersistentMode"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderGemVersionReportOn_'),
smalltalk.method({
selector: unescape('renderGemVersionReportOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("gemVersionReport")])]);
return self;},
args: ["html"],
source: unescape('renderGemVersionReportOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23gemVersionReport%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_renderStoneVersionReportOn_'),
smalltalk.method({
selector: unescape('renderStoneVersionReportOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self, "_object", []), smalltalk.symbolFor("stoneVersionReport")])]);
return self;},
args: ["html"],
source: unescape('renderStoneVersionReportOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20self%20object%20with%3A%20%23stoneVersionReport%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_showTransactionWaitingBox'),
smalltalk.method({
selector: unescape('showTransactionWaitingBox'),
category: 'rendering',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_addClass_", [unescape("alert-info")]);smalltalk.send($rec, "_removeClass_", [unescape("alert-success")]);return smalltalk.send($rec, "_removeClass_", [unescape("alert-error")]);})(self['@transactionResultBox']);
smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);smalltalk.send($rec, "_with_", [" loading..."]);return smalltalk.send($rec, "_show", []);})(self['@transactionResultBox']);
return self;},
args: [],
source: unescape('showTransactionWaitingBox%0A%09transactionResultBox%0A%09%09addClass%3A%20%27alert-info%27%3B%0A%09%09removeClass%3A%20%27alert-success%27%3B%0A%09%09removeClass%3A%20%27alert-error%27.%0A%09transactionResultBox%20asJQuery%20empty.%0A%09transactionResultBox%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27%3B%0A%09%09show.'),
messageSends: ["addClass:", "removeClass:", "empty", "asJQuery", "with:", "wait", "show"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_togglePersistentMode'),
smalltalk.method({
selector: unescape('togglePersistentMode'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBETogglePersistenceMode", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;},
args: [],
source: unescape('togglePersistentMode%0A%09self%20showTransactionWaitingBox.%0A%09object%20%0A%09%09evaluate%3A%20%27self.__DBETogglePersistenceMode%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09transactionResultBox%20asJQuery%20empty.%0A%09%09%09transactionResultBox%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09transactionResultBox%20addClass%3A%20%27alert-success%27.%0A%09%09%09%09%09resultObj%20value%20%3D%20true%0A%09%09%09%09%09%09ifTrue%3A%20%5BpersistenceModeButton%20asJQuery%20addClass%3A%20%27active%27%5D%0A%09%09%09%09%09%09ifFalse%3A%20%5BpersistenceModeButton%20asJQuery%20removeClass%3A%20%27active%27%5D.%0A%09%09%09%09%09transactionResultBox%20hide%5D%0A%09%09%09%09ifFalse%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09transactionResultBox%20with%3A%20resultObj%20inlineViewComponent%5D.'),
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", unescape("%3D"), "value", "hide", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);

smalltalk.addMethod(
unescape('_updatePersistentMode'),
smalltalk.method({
selector: unescape('updatePersistentMode'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showTransactionWaitingBox", []);
smalltalk.send(self['@object'], "_evaluate_language_withCallback_", ["self.__DBEPersistenceMode", "ruby", (function(success, resultObj){smalltalk.send(smalltalk.send(self['@transactionResultBox'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@transactionResultBox'], "_removeClass_", [unescape("alert-info")]);((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);})() : (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-success")]);((($receiver = smalltalk.send(smalltalk.send(resultObj, "_value", []), "__eq", [true])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);})() : (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_addClass_", ["active"]);}), (function(){return smalltalk.send(smalltalk.send(self['@persistenceModeButton'], "_asJQuery", []), "_removeClass_", ["active"]);})]));return smalltalk.send(self['@transactionResultBox'], "_hide", []);}), (function(){return smalltalk.send(self['@transactionResultBox'], "_addClass_", [unescape("alert-error")]);})]));return smalltalk.send(self['@transactionResultBox'], "_with_", [smalltalk.send(resultObj, "_inlineViewComponent", [])]);})]);
return self;},
args: [],
source: unescape('updatePersistentMode%0A%09self%20showTransactionWaitingBox.%0A%09object%20%0A%09%09evaluate%3A%20%27self.__DBEPersistenceMode%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%0A%09%09%09transactionResultBox%20asJQuery%20empty.%0A%09%09%09transactionResultBox%20removeClass%3A%20%27alert-info%27.%0A%09%09%09success%0A%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09transactionResultBox%20addClass%3A%20%27alert-success%27.%0A%09%09%09%09%09resultObj%20value%20%3D%20true%0A%09%09%09%09%09%09ifTrue%3A%20%5BpersistenceModeButton%20asJQuery%20addClass%3A%20%27active%27%5D%0A%09%09%09%09%09%09ifFalse%3A%20%5BpersistenceModeButton%20asJQuery%20removeClass%3A%20%27active%27%5D.%0A%09%09%09%09%09transactionResultBox%20hide%5D%0A%09%09%09%09ifFalse%3A%20%5BtransactionResultBox%20addClass%3A%20%27alert-error%27%5D.%0A%09%09%09transactionResultBox%20with%3A%20resultObj%20inlineViewComponent%5D.'),
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", unescape("%3D"), "value", "hide", "with:", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevSystemClassWindow);



smalltalk.addClass('MaglevNilClassWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevRubyWorkspaceWindow', smalltalk.MaglevObjectWindow, ['terminalBox', 'commandBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Workspace", smalltalk.symbolFor("renderWorkspaceOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Workspace%27%20put%3A%20%23renderWorkspaceOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Workspace";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Workspace%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_handleEnter'),
smalltalk.method({
selector: unescape('handleEnter'),
category: 'interactions',
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
return self;},
args: [],
source: unescape('handleEnter%0A%09%7Ccommand%20html%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20terminalBox%20asJQuery.%0A%09command%20%3A%3D%20commandBox%20asJQuery%20val.%0A%09command%20%3A%3D%20command%20replace%3A%20%27%27%27%27%20with%3A%20%27%27%27%27%27%27.%0A%09commandBox%20asJQuery%20prop%3A%20%27disabled%27%20value%3A%20true.%0A%09html%0A%09%09with%3A%20command%3B%0A%09%09with%3A%20html%20br.%0A%09object%20%0A%09%09evaluate%3A%20%27self.evaluate%28%27%27%27%2C%20command%2C%20%27%27%27%29%27%0A%09%09language%3A%20%27ruby%27%0A%09%09withCallback%3A%20%5B%3Asuccess%20%3AresultObj%20%7C%20%7Cclass%7C%0A%09%09%09%28resultObj%20at%3A%201%29%20value%0A%09%09%09%09ifTrue%3A%20%5Bclass%20%3A%3D%20%27alert%20alert-error%27%5D%0A%09%09%09%09ifFalse%3A%20%5Bclass%20%3A%3D%20%27alert%20alert-success%27%5D.%0A%09%09%09terminalBox%20with%3A%20%5Bhtml%20div%0A%09%09%09%09class%3A%20class%3B%0A%09%09%09%09with%3A%20%27%3D%3E%20%27%3B%0A%09%09%09%09with%3A%20%28resultObj%20at%3A%202%29%20inlineViewComponent%3B%0A%09%09%09%09with%3A%20html%20br%5D.%0A%09%09%09self%20scrollToBottom.%0A%09%09%09commandBox%20asJQuery%20prop%3A%20%27disabled%27%20value%3A%20false.%0A%09%09%09commandBox%20asJQuery%20val%3A%20%27%27%5D.'),
messageSends: ["onJQuery:", "asJQuery", "val", "replace:with:", "prop:value:", "with:", "br", "evaluate:language:withCallback:", unescape("%2C"), "ifTrue:ifFalse:", "value", "at:", "class:", "inlineViewComponent", "div", "scrollToBottom", "val:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_mouseFix'),
smalltalk.method({
selector: unescape('mouseFix'),
category: 'rendering',
fn: function (){
var self=this;
 var editor = self['@terminalBox'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self;},
args: [],
source: unescape('mouseFix%0A%09%3C%20var%20editor%20%3D%20self%5B%27@terminalBox%27%5D%3B%0A%09editor._asJQuery%28%29.mousedown%28function%20%28event%29%20%7B%0A%09%09event.preventDefault%28%29%3B%0A%09%09return%20false%3B%0A%09%7D%29%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_renderWorkspaceOn_'),
smalltalk.method({
selector: unescape('renderWorkspaceOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@terminalBox']=smalltalk.send(smalltalk.send(html, "_pre", []), "_style_", [unescape("height%3A%20350px%3B%20overflow-y%3A%20scroll%3B%20overflow-x%3A%20hidden%3B%20color%3A%20%23000000%3B")]));
(self['@commandBox']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2097%25%3B")]);return smalltalk.send($rec, "_onKeyPress_", [(function(evt){return ((($receiver = smalltalk.send(smalltalk.send(evt, "_keyCode", []), "__eq_eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_handleEnter", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_handleEnter", []);})]));})]);})(smalltalk.send(html, "_input", [])));
smalltalk.send(self, "_mouseFix", []);
return self;},
args: ["html"],
source: unescape('renderWorkspaceOn%3A%20html%0A%09terminalBox%20%3A%3D%20html%20pre%0A%09%09style%3A%20%27height%3A%20350px%3B%20overflow-y%3A%20scroll%3B%20overflow-x%3A%20hidden%3B%20color%3A%20%23000000%3B%27.%0A%09commandBox%20%3A%3D%20html%20input%0A%09%09type%3A%20%27text%27%3B%0A%09%09style%3A%20%27width%3A%2097%25%3B%27%3B%0A%09%09onKeyPress%3A%20%5B%3Aevt%20%7C%20evt%20keyCode%20%3D%3D%2013%20%0A%09%09%09ifTrue%3A%20%5Bself%20handleEnter%5D%5D.%0A%09self%20mouseFix.'),
messageSends: ["style:", "pre", "type:", "onKeyPress:", "ifTrue:", unescape("%3D%3D"), "keyCode", "handleEnter", "input", "mouseFix"],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
unescape('_scrollToBottom'),
smalltalk.method({
selector: unescape('scrollToBottom'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@terminalBox'], "_asJQuery", []), "_scrollTop_", [smalltalk.send(smalltalk.send(smalltalk.send(self['@terminalBox'], "_asJQuery", []), "_at_", [(0)]), "_scrollHeight", [])]);
return self;},
args: [],
source: unescape('scrollToBottom%0A%09terminalBox%20asJQuery%20scrollTop%3A%20%28terminalBox%20asJQuery%20at%3A%200%29%20scrollHeight.'),
messageSends: ["scrollTop:", "asJQuery", "scrollHeight", "at:"],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspaceWindow);



smalltalk.addClass('MaglevStringWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevSymbolWindow', smalltalk.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevThreadWindow', smalltalk.MaglevObjectWindow, ['methodSelect', 'methodContainer', 'waitingScreen', 'waitForStackTrace'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_contentTabs'),
smalltalk.method({
selector: unescape('contentTabs'),
category: 'rendering',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self, "_contentTabs", [], smalltalk.MaglevObjectWindow));
smalltalk.send(result, "_at_put_", ["Stack Trace", smalltalk.symbolFor("renderStackTraceOn:")]);
smalltalk.send(result, "_at_put_", ["Thread Local Storage", smalltalk.symbolFor("renderLocalStorageOn:")]);
return result;
return self;},
args: [],
source: unescape('contentTabs%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20super%20contentTabs.%0A%09result%20at%3A%20%27Stack%20Trace%27%20put%3A%20%23renderStackTraceOn%3A.%0A%09result%20at%3A%20%27Thread%20Local%20Storage%27%20put%3A%20%23renderLocalStorageOn%3A.%0A%09%5E%20result'),
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_defaultTab'),
smalltalk.method({
selector: unescape('defaultTab'),
category: 'interactions',
fn: function (){
var self=this;
return "Stack Trace";
return self;},
args: [],
source: unescape('defaultTab%0A%09%5E%20%27Stack%20Trace%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_frameIndex'),
smalltalk.method({
selector: unescape('frameIndex'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@methodSelect'], "_selectedDataIndex", []);
return self;},
args: [],
source: unescape('frameIndex%0A%09%5E%20methodSelect%20selectedDataIndex'),
messageSends: ["selectedDataIndex"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_isMethodUnimportant_'),
smalltalk.method({
selector: unescape('isMethodUnimportant%3A'),
category: 'interactions',
fn: function (aString){
var self=this;
try{var unimportant=nil;
(unimportant=[unescape("AbstractException%20%3E%3E"),"AbstractException class",unescape("GsProcess%20%3E%3E"),"GsProcess class",unescape("ProcessorScheduler%20%3E%3E"),"ProcessorScheduler class","CodeEvaluation class",unescape("RubyCompiler%20%3E%3E"),"RubyCompiler class","onException:do:",unescape("RubyProc%20%3E%3E%20callAndRescue%3A"),"_gsReturnToC",unescape("%3E%3E%20onSynchronous%3Ado%3A"),unescape("ExecBlock%20%3E%3E%20ensure%3A"),unescape("ExecBlock%20%3E%3E%20rubyEnsure%3A")]);
smalltalk.send(unimportant, "_do_", [(function(str){return ((($receiver = smalltalk.send(aString, "_includesSubString_", [str])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_isMethodUnimportant_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_isMethodUnimportant_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('isMethodUnimportant%3A%20aString%0A%09%7Cunimportant%7C%0A%09unimportant%20%3A%3D%20%7B%27AbstractException%20%3E%3E%27.%20%20%27AbstractException%20class%27.%20%27GsProcess%20%3E%3E%27.%20%27GsProcess%20class%27.%20%0A%09%09%09%27ProcessorScheduler%20%3E%3E%27.%20%27ProcessorScheduler%20class%27.%20%27CodeEvaluation%20class%27.%20%27RubyCompiler%20%3E%3E%27.%20%0A%09%09%09%27RubyCompiler%20class%27.%20%27onException%3Ado%3A%27.%20%27RubyProc%20%3E%3E%20callAndRescue%3A%27.%20%27_gsReturnToC%27.%20%0A%09%09%09%27%3E%3E%20onSynchronous%3Ado%3A%27.%20%27ExecBlock%20%3E%3E%20ensure%3A%27.%20%27ExecBlock%20%3E%3E%20rubyEnsure%3A%27%7D.%0A%09unimportant%20do%3A%20%5B%3Astr%20%7C%0A%09%09%28aString%20includesSubString%3A%20str%29%20%0A%09%09%09ifTrue%3A%20%5B%5E%20true%5D%5D.%0A%09%5E%20false'),
messageSends: ["do:", "ifTrue:", "includesSubString:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_proceed'),
smalltalk.method({
selector: unescape('proceed'),
category: 'interactions',
fn: function (){
var self=this;
smalltalk.send(self['@object'], "_proceedWithCallback_", [(function(obj){return smalltalk.send(self['@object'], "_fullReloadWithCallback_", [(function(threadReloaded){return ((($receiver = smalltalk.send(self['@object'], "_isRailsThread", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_closeWindow", []);})() : (function(){return smalltalk.send(smalltalk.send(threadReloaded, "_windowViewComponentReplace_", [self]), "_renderReplace", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_closeWindow", []);}), (function(){return smalltalk.send(smalltalk.send(threadReloaded, "_windowViewComponentReplace_", [self]), "_renderReplace", []);})]));})]);})]);
return self;},
args: [],
source: unescape('proceed%0A%09object%20%0A%09%09proceedWithCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09object%20fullReloadWithCallback%3A%20%5B%3AthreadReloaded%20%7C%0A%09%09%09%09object%20isRailsThread%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20closeWindow%5D%0A%09%09%09%09%09ifFalse%3A%20%5B%28threadReloaded%20windowViewComponentReplace%3A%20self%29%20renderReplace%5D%5D%5D.'),
messageSends: ["proceedWithCallback:", "fullReloadWithCallback:", "ifTrue:ifFalse:", "isRailsThread", "closeWindow", "renderReplace", "windowViewComponentReplace:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_reloadStackWithCallback_'),
smalltalk.method({
selector: unescape('reloadStackWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
var html=nil;
smalltalk.send(self['@waitForStackTrace'], "_show", []);
smalltalk.send(self['@methodSelect'], "_clear", []);
smalltalk.send(self['@object'], "_stackTraceMethodsWithCallback_", [(function(obj){smalltalk.send(obj, "_do_", [(function(method){var isUnimportant=nil;
(isUnimportant=smalltalk.send(self, "_isMethodUnimportant_", [method]));return smalltalk.send(self['@methodSelect'], "_with_darker_", [(function(html){((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%200%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_smalltalk", [])]);})]));((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%201%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_ruby", [])]);})]));((($receiver = smalltalk.send(method, "_includesSubString_", [unescape("%28envId%201b%29")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rubySmalltalkBridge", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIconImage || MaglevIconImage), "_rubySmalltalkBridge", [])]);})]));return smalltalk.send(html, "_with_", [method]);}), isUnimportant]);})]);smalltalk.send(self['@waitForStackTrace'], "_hide", []);return ((($receiver = smalltalk.send(aBlock, "__eq", [nil])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value", []);})]));})]);
return self;},
args: ["aBlock"],
source: unescape('reloadStackWithCallback%3A%20aBlock%0A%09%7Chtml%7C%0A%09waitForStackTrace%20show.%0A%09methodSelect%20clear.%0A%09object%20stackTraceMethodsWithCallback%3A%20%5B%3Aobj%20%7C%0A%09%09obj%20do%3A%20%5B%3Amethod%20%7C%20%7CisUnimportant%7C%0A%09%09%09isUnimportant%20%3A%3D%20self%20isMethodUnimportant%3A%20method.%0A%09%09%09methodSelect%0A%09%09%09%09with%3A%20%5B%3Ahtml%20%7C%20%0A%09%09%09%09%09%28method%20includesSubString%3A%20%27%28envId%200%29%27%29%0A%09%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20smalltalk%5D.%0A%09%09%09%09%09%28method%20includesSubString%3A%20%27%28envId%201%29%27%29%0A%09%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20ruby%5D.%0A%09%09%09%09%09%28method%20includesSubString%3A%20%27%28envId%201b%29%27%29%0A%09%09%09%09%09%09ifTrue%3A%20%5Bhtml%20with%3A%20MaglevIconImage%20rubySmalltalkBridge%5D.%0A%09%09%09%09%09html%20with%3A%20method%5D%20darker%3A%20isUnimportant%5D.%0A%09%09waitForStackTrace%20hide.%0A%09%09aBlock%20%3D%20nil%0A%09%09%09ifFalse%3A%20%5BaBlock%20value%5D%5D.'),
messageSends: ["show", "clear", "stackTraceMethodsWithCallback:", "do:", "isMethodUnimportant:", "with:darker:", "ifTrue:", "includesSubString:", "with:", "smalltalk", "ruby", "rubySmalltalkBridge", "hide", "ifFalse:", unescape("%3D"), "value"],
referencedClasses: ["MaglevIconImage"]
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderButtonsOn_'),
smalltalk.method({
selector: unescape('renderButtonsOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("button-area")]);smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%2010px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Proceed"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_proceed", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Step into"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_stepInto", []);})]);})(smalltalk.send(html, "_input", []));(function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Step over"]);smalltalk.send($rec, "_style_", [unescape("margin-right%3A%201%25%3B%20width%3A%2024%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_stepOver", []);})]);})(smalltalk.send(html, "_input", []));return (function($rec){smalltalk.send($rec, "_type_", ["button"]);smalltalk.send($rec, "_class_", [unescape("btn%20btn-primary")]);smalltalk.send($rec, "_value_", ["Trim stack"]);smalltalk.send($rec, "_style_", [unescape("width%3A%2025%25%3B")]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_trimStack", []);})]);})(smalltalk.send(html, "_input", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderButtonsOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27button-area%27%3B%0A%09%09style%3A%20%27margin-bottom%3A%2010px%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20input%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09%09%09value%3A%20%27Proceed%27%3B%0A%09%09%09%09style%3A%20%27margin-right%3A%201%25%3B%20width%3A%2024%25%3B%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20proceed%5D.%0A%09%09%09html%20input%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09%09%09value%3A%20%27Step%20into%27%3B%0A%09%09%09%09style%3A%20%27margin-right%3A%201%25%3B%20width%3A%2024%25%3B%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20stepInto%5D.%0A%09%09%09html%20input%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09%09%09value%3A%20%27Step%20over%27%3B%0A%09%09%09%09style%3A%20%27margin-right%3A%201%25%3B%20width%3A%2024%25%3B%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20stepOver%5D.%0A%09%09%09html%20input%0A%09%09%09%09type%3A%20%27button%27%3B%0A%09%09%09%09class%3A%20%27btn%20btn-primary%27%3B%0A%09%09%09%09value%3A%20%27Trim%20stack%27%3B%0A%09%09%09%09style%3A%20%27width%3A%2025%25%3B%27%3B%0A%09%09%09%09onClick%3A%20%5Bself%20trimStack%5D%5D.'),
messageSends: ["class:", "style:", "with:", "type:", "value:", "onClick:", "proceed", "input", "stepInto", "stepOver", "trimStack", "div"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderFrame_'),
smalltalk.method({
selector: unescape('renderFrame%3A'),
category: 'rendering',
fn: function (frameIndex){
var self=this;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@waitingScreen'], "_show", []);
((($receiver = ((($receiver = frameIndex).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@object'], "_stackFrame_withCallback_", [frameIndex, (function(obj){smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodDebugEditor || MaglevGsNMethodDebugEditor), "_for_", [obj])]);return smalltalk.send(self['@waitingScreen'], "_hide", []);})]);})() : (function(){return smalltalk.send(self['@waitingScreen'], "_hide", []);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self['@object'], "_stackFrame_withCallback_", [frameIndex, (function(obj){smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodDebugEditor || MaglevGsNMethodDebugEditor), "_for_", [obj])]);return smalltalk.send(self['@waitingScreen'], "_hide", []);})]);}), (function(){return smalltalk.send(self['@waitingScreen'], "_hide", []);})]));
return self;},
args: ["frameIndex"],
source: unescape('renderFrame%3A%20frameIndex%0A%09methodContainer%20asJQuery%20empty.%0A%09waitingScreen%20show.%0A%09frameIndex%20%3E%200%0A%09%09ifTrue%3A%20%5Bobject%0A%09%09%09stackFrame%3A%20frameIndex%20%0A%09%09%09withCallback%3A%20%5B%3Aobj%20%7C%0A%09%09%09%09methodContainer%20asJQuery%20empty.%0A%09%09%09%09methodContainer%20with%3A%20%28MaglevGsNMethodDebugEditor%20for%3A%20obj%29.%0A%09%09%09%09waitingScreen%20hide%5D%5D%0A%09%09ifFalse%3A%20%5BwaitingScreen%20hide%5D.'),
messageSends: ["empty", "asJQuery", "show", "ifTrue:ifFalse:", unescape("%3E"), "stackFrame:withCallback:", "with:", "for:", "hide"],
referencedClasses: ["MaglevGsNMethodDebugEditor"]
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderLocalStorageOn_'),
smalltalk.method({
selector: unescape('renderLocalStorageOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevTable || MaglevTable), "_newAssociationDictFor_with_", [smalltalk.send(self['@object'], "_localStorage", []), smalltalk.symbolFor("elements")])]);
return self;},
args: ["html"],
source: unescape('renderLocalStorageOn%3A%20html%0A%09html%20with%3A%20%28MaglevTable%20newAssociationDictFor%3A%20object%20localStorage%20with%3A%20%23elements%29.'),
messageSends: ["with:", "newAssociationDictFor:with:", "localStorage"],
referencedClasses: ["MaglevTable"]
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_renderStackTraceOn_'),
smalltalk.method({
selector: unescape('renderStackTraceOn%3A'),
category: 'rendering',
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
return self;},
args: ["html"],
source: unescape('renderStackTraceOn%3A%20html%0A%09waitForStackTrace%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09%09with%3A%20%27%20loading...%27%5D.%0A%09methodSelect%20%3A%3D%20MaglevListBox%20new.%0A%09html%20with%3A%20methodSelect.%0A%09methodSelect%0A%09%09changedCallback%3A%20%5B%3Atext%20%3Aindex%20%7C%20self%20renderFrame%3A%20index%5D%3B%0A%09%09height%3A%20250%3B%0A%09%09style%3A%20%27width%3A%20100%25%3B%27.%0A%09self%20renderButtonsOn%3A%20html.%0A%09waitingScreen%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09with%3A%20%27%20loading...%27%5D%3B%0A%09%09hide.%0A%09methodContainer%20%3A%3D%20html%20div.%0A%09self%20reloadStackWithCallback%3A%20nil.'),
messageSends: ["with:", "div", "wait", "new", "changedCallback:", "renderFrame:", "height:", "style:", "renderButtonsOn:", "hide", "reloadStackWithCallback:"],
referencedClasses: ["MaglevIcon", "MaglevListBox"]
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_selectStackFrame_'),
smalltalk.method({
selector: unescape('selectStackFrame%3A'),
category: 'interactions',
fn: function (anInteger){
var self=this;
 self['@methodSelect']._asJQuery()[0].selectedIndex = anInteger - 1; ;
smalltalk.send(self, "_renderFrame_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('selectStackFrame%3A%20anInteger%0A%09%3C%20self%5B%27@methodSelect%27%5D._asJQuery%28%29%5B0%5D.selectedIndex%20%3D%20anInteger%20-%201%3B%20%3E.%0A%09self%20renderFrame%3A%20anInteger.'),
messageSends: ["renderFrame:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_stepInto'),
smalltalk.method({
selector: unescape('stepInto'),
category: 'interactions',
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_stepInto_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;},
args: [],
source: unescape('stepInto%0A%09%7CframeIndex%7C%0A%09frameIndex%20%3A%3D%20self%20frameIndex.%0A%09object%20%0A%09%09stepInto%3A%20frameIndex%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09self%20reloadStackWithCallback%3A%20%5B%0A%09%09%09%09self%20selectStackFrame%3A%20frameIndex%5D%5D.'),
messageSends: ["frameIndex", "stepInto:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_stepOver'),
smalltalk.method({
selector: unescape('stepOver'),
category: 'interactions',
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_stepOver_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;},
args: [],
source: unescape('stepOver%0A%09%7CframeIndex%7C%0A%09frameIndex%20%3A%3D%20self%20frameIndex.%0A%09object%20%0A%09%09stepOver%3A%20frameIndex%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20self%20reloadStackWithCallback%3A%20%5B%0A%09%09%09self%20selectStackFrame%3A%20frameIndex%5D%5D.'),
messageSends: ["frameIndex", "stepOver:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);

smalltalk.addMethod(
unescape('_trimStack'),
smalltalk.method({
selector: unescape('trimStack'),
category: 'interactions',
fn: function (){
var self=this;
var frameIndex=nil;
(frameIndex=smalltalk.send(self, "_frameIndex", []));
smalltalk.send(self['@object'], "_trimTo_withCallback_", [frameIndex, (function(obj){return smalltalk.send(self, "_reloadStackWithCallback_", [(function(){return smalltalk.send(self, "_selectStackFrame_", [frameIndex]);})]);})]);
return self;},
args: [],
source: unescape('trimStack%0A%09%7CframeIndex%7C%0A%09frameIndex%20%3A%3D%20self%20frameIndex.%0A%09object%20%0A%09%09trimTo%3A%20frameIndex%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20self%20reloadStackWithCallback%3A%20%5B%0A%09%09%09self%20selectStackFrame%3A%20frameIndex%5D%5D.'),
messageSends: ["frameIndex", "trimTo:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
smalltalk.MaglevThreadWindow);



smalltalk.addClass('MaglevSearchWindow', smalltalk.MaglevWindow, ['maglev', 'selectBox', 'waitForResult', 'listContents', 'methodContainer', 'waitingScreen'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_listIndex'),
smalltalk.method({
selector: unescape('listIndex'),
category: 'not yet classified',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(self['@selectBox'], "_asJQuery", []), "_at_", [(0)]), "_selectedIndex", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('listIndex%0A%09%5E%20%28selectBox%20asJQuery%20at%3A%200%29%20selectedIndex%20+%201'),
messageSends: [unescape("+"), "selectedIndex", "at:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_maglev'),
smalltalk.method({
selector: unescape('maglev'),
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@maglev']) == nil || $receiver == undefined) ? (function(){return (self['@maglev']=smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []));})() : $receiver;
return self['@maglev'];
return self;},
args: [],
source: unescape('maglev%0A%09maglev%20ifNil%3A%20%5Bmaglev%20%3A%3D%20Maglev%20instance%5D.%0A%09%5Emaglev'),
messageSends: ["ifNil:", "instance"],
referencedClasses: ["Maglev"]
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderClass'),
smalltalk.method({
selector: unescape('renderClass'),
category: 'not yet classified',
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
return self;},
args: [],
source: unescape('renderClass%0A%09%7ClistElement%20cls%20selector%20envId%7C%0A%09waitingScreen%20show.%0A%09listElement%20%3A%3D%20listContents%20at%3A%20self%20listIndex.%0A%09cls%20%3A%3D%20%28listElement%20at%3A%201%29%20at%3A1.%0A%09envId%20%3A%3D%20%20%28%28listElement%20at%3A%201%29%20at%3A2%29%20inspection%20asNumber.%0A%09selector%20%3A%3D%20listElement%20at%3A%202.%0A%09envId%20%3D%200%20ifTrue%3A%5B%0A%09%09cls%20sourceCodeFor%3A%20selector%20language%3A%20%27smalltalk%27%20withCallback%3A%20%5B%3Aobj%7C%20%0A%09%09%09self%20renderMethodObject%3A%20obj.%5D%09%09%09%0A%09%5D%0A%09ifFalse%3A%5B%0A%09%09cls%20sourceCodeFor%3A%20selector%20language%3A%20%27ruby%27%20withCallback%3A%20%5B%3Aobj%7C%0A%09%09%09self%20renderMethodObject%3A%20obj%5D%0A%09%5D'),
messageSends: ["show", "at:", "listIndex", "asNumber", "inspection", "ifTrue:ifFalse:", unescape("%3D"), "sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderListOf_'),
smalltalk.method({
selector: unescape('renderListOf%3A'),
category: 'not yet classified',
fn: function (selectors){
var self=this;
var html=nil;
(html=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(self['@selectBox'], "_asJQuery", [])]));
smalltalk.send(smalltalk.send(self['@selectBox'], "_asJQuery", []), "_empty", []);
(self['@listContents']=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(selectors, "_do_", [(function(selector){return smalltalk.send(smalltalk.send(self, "_maglev", []), "_implementersOf_withCallback_", [selector, (function(success, obj){((($receiver = smalltalk.send(obj, "_hasElements", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(obj, "_do_", [(function(cls){smalltalk.send(self['@listContents'], "_add_", [[cls,selector]]);return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(cls, "_at_", [(1)]), "_inspection", []), "__comma", [unescape("%3E%3E")]), "__comma", [selector])]);})]);})]);smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_show", []);})(self['@selectBox']);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(obj, "_do_", [(function(cls){smalltalk.send(self['@listContents'], "_add_", [[cls,selector]]);return smalltalk.send(smalltalk.send(html, "_option", []), "_with_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(cls, "_at_", [(1)]), "_inspection", []), "__comma", [unescape("%3E%3E")]), "__comma", [selector])]);})]);})]);smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_show", []);})(self['@selectBox']);})]));return smalltalk.send(self['@waitForResult'], "_hide", []);})]);})]);
return self;},
args: ["selectors"],
source: unescape('renderListOf%3A%20selectors%0A%09%7Chtml%7C%0A%09html%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20selectBox%20asJQuery.%0A%09selectBox%20asJQuery%20empty.%0A%09listContents%20%3A%3D%20Array%20new.%0A%09selectors%20do%3A%5B%3Aselector%7C%20%0A%09%09self%20maglev%20implementersOf%3A%20selector%20withCallback%3A%5B%3Asuccess%20%3Aobj%7C%0A%09%09%09obj%20hasElements%20ifTrue%3A%5B%0A%09%09%09%09selectBox%0A%09%09%09%09with%3A%20%5Bobj%20do%3A%20%5B%3Acls%20%7C%0A%09%09%09%09%09listContents%20add%3A%20%7Bcls.%20selector%7D.%0A%09%09%09%09%09html%20option%20with%3A%20%28cls%20at%3A1%29%20inspection%2C%20%27%3E%3E%27%20%2C%20selector%5D%5D%3B%0A%09%09%09%09size%3A%2010%3B%0A%09%09%09%09style%3A%20%27width%3A%20100%25%3B%27%3B%0A%09%09%09%09show%0A%09%09%09%09%22onChange%3A%20%5Bself%20renderClass%5D%22%0A%09%09%09%5D.%0A%09%09%09waitForResult%20hide.%0A%09%09%5D%0A%09%5D'),
messageSends: ["onJQuery:", "asJQuery", "empty", "new", "do:", "implementersOf:withCallback:", "maglev", "ifTrue:", "hasElements", "with:", "add:", "option", unescape("%2C"), "inspection", "at:", "size:", "style:", "show", "hide"],
referencedClasses: ["HTMLCanvas", "Array"]
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderMethodObject_'),
smalltalk.method({
selector: unescape('renderMethodObject%3A'),
category: 'not yet classified',
fn: function (obj){
var self=this;
smalltalk.send(smalltalk.send(self['@methodContainer'], "_asJQuery", []), "_empty", []);
smalltalk.send(self['@methodContainer'], "_with_", [smalltalk.send((smalltalk.MaglevGsNMethodEditor || MaglevGsNMethodEditor), "_for_", [obj])]);
smalltalk.send(self['@waitingScreen'], "_hide", []);
return self;},
args: ["obj"],
source: unescape('renderMethodObject%3A%20obj%0A%09methodContainer%20asJQuery%20empty.%0A%09methodContainer%20with%3A%20%28MaglevGsNMethodEditor%20for%3A%20obj%29.%0A%09waitingScreen%20hide.'),
messageSends: ["empty", "asJQuery", "with:", "for:", "hide"],
referencedClasses: ["MaglevGsNMethodEditor"]
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", [unescape("maglev-search")]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("search-form")]);smalltalk.send($rec, "_onSubmit_", [(function(e){smalltalk.send(e, "_preventDefault", []);return smalltalk.send(self, "_searchSelectorsAndClasses", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(smalltalk.send(html, "_input", []), "_class_", [unescape("search-input")]);})]);})(smalltalk.send(html, "_form", []));})]);})(smalltalk.send(html, "_div", []));
(self['@selectBox']=(function($rec){smalltalk.send($rec, "_size_", [(10)]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);smalltalk.send($rec, "_onChange_", [(function(){return smalltalk.send(self, "_renderClass", []);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_select", [])));
(self['@waitForResult']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
(self['@waitingScreen']=(function($rec){smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);})]);return smalltalk.send($rec, "_hide", []);})(smalltalk.send(html, "_div", [])));
(self['@methodContainer']=smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09html%20div%0A%09%09class%3A%20%27maglev-search%27%3B%20%0A%09%09with%3A%20%5B%0A%09%09html%20form%0A%09%09%09class%3A%20%27search-form%27%3B%0A%09%09%09onSubmit%3A%20%5B%3Ae%7Ce%20preventDefault.%20self%20searchSelectorsAndClasses.%5D%3B%20%0A%09%09%09with%3A%5B%0A%09%09%09html%20input%0A%09%09%09%09class%3A%20%27search-input%27%0A%09%09%09%5D%0A%09%09%5D.%0A%09selectBox%20%3A%3D%20html%20select%0A%09%09%09size%3A%2010%3B%0A%09%09%09style%3A%20%27width%3A%20100%25%3B%27%3B%0A%09%09%09onChange%3A%20%5Bself%20renderClass%5D%3B%0A%09%09%09hide.%0A%09waitForResult%20%3A%3D%20html%20div%0A%09%09with%3A%20%5Bhtml%0A%09%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09%09with%3A%20%27%20loading...%27%5D%3B%0A%09%09hide.%0A%09waitingScreen%20%3A%3D%20html%20div%0A%09%09%09with%3A%20%5Bhtml%0A%09%09%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09%09%09with%3A%20%27%20loading...%27%5D%3B%0A%09%09%09hide.%0A%09methodContainer%20%3A%3D%20html%20div.'),
messageSends: ["class:", "with:", "onSubmit:", "preventDefault", "searchSelectorsAndClasses", "input", "form", "div", "size:", "style:", "onChange:", "renderClass", "hide", "select", "wait"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevSearchWindow);

smalltalk.addMethod(
unescape('_searchSelectorsAndClasses'),
smalltalk.method({
selector: unescape('searchSelectorsAndClasses'),
category: 'not yet classified',
fn: function (){
var self=this;
var input=nil;
var maglev=nil;
var selectors=nil;
(input=smalltalk.send(smalltalk.send(unescape(".search-input"), "_asJQuery", []), "_val", []));
(selectors=smalltalk.send((smalltalk.Array || Array), "_new", []));
smalltalk.send(self['@waitForResult'], "_show", []);
smalltalk.send(smalltalk.send(self, "_maglev", []), "_findMethodNamesMatching_with_", [input, (function(success, obj){return ((($receiver = success).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(obj, "_string", []), "_tokenize_", [" "])]);return smalltalk.send(self, "_renderListOf_", [selectors]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(selectors, "_addAll_", [smalltalk.send(smalltalk.send(obj, "_string", []), "_tokenize_", [" "])]);return smalltalk.send(self, "_renderListOf_", [selectors]);})]));})]);
return self;},
args: [],
source: unescape('searchSelectorsAndClasses%0A%09%7Cinput%20maglev%20selectors%7C%0A%09input%20%3A%3D%20%27.search-input%27%20asJQuery%20val.%0A%09selectors%20%3A%3D%20Array%20new.%0A%09waitForResult%20show.%0A%09self%20maglev%20findMethodNamesMatching%3A%20input%20with%3A%5B%3Asuccess%20%3Aobj%7C%20%0A%09%09success%20ifTrue%3A%20%5Bselectors%20addAll%3A%20%28obj%20string%20tokenize%3A%20%27%20%27%29.%0A%09%09self%20renderListOf%3A%20selectors%5D.%20%0A%09%09%0A%09%5D.'),
messageSends: ["val", "asJQuery", "new", "show", "findMethodNamesMatching:with:", "maglev", "ifTrue:", "addAll:", "tokenize:", "string", "renderListOf:"],
referencedClasses: ["Array"]
}),
smalltalk.MaglevSearchWindow);



smalltalk.addClass('MaglevWaitingWindow', smalltalk.MaglevWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_isWaitingWindow'),
smalltalk.method({
selector: unescape('isWaitingWindow'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isWaitingWindow%0A%20%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;

return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWaitingWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_wait", [])]);return smalltalk.send($rec, "_with_", [" loading..."]);})(html);
return self;},
args: ["html"],
source: unescape('renderWindowTitleOn%3A%20html%0A%09html%0A%09%09with%3A%20MaglevIcon%20wait%3B%0A%09%09with%3A%20%27%20loading...%27.'),
messageSends: ["with:", "wait"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevWaitingWindow);



smalltalk.addClass('MaglevWebBrowserWindow', smalltalk.MaglevWindow, ['url', 'inputUrl', 'iframe'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
unescape('_renderWindowContentOn_'),
smalltalk.method({
selector: unescape('renderWindowContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
var iframeContainer=nil;
(function($rec){smalltalk.send($rec, "_class_", [unescape("input-prepend")]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20margin-top%3A%2010px%3B%20box-sizing%3A%20border-box%3B%20padding-right%3A%2051px%3B%20margin-bottom%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("add-on")]);return smalltalk.send($rec, "_with_", ["URL"]);})(smalltalk.send(html, "_span", []));return (self['@inputUrl']=(function($rec){smalltalk.send($rec, "_type_", ["text"]);smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B")]);return smalltalk.send($rec, "_onKeyPress_", [(function(evt){return ((($receiver = smalltalk.send(smalltalk.send(evt, "_which", []), "__eq", [(13)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_url_", [smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_val", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_url_", [smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_val", [])]);})]));})]);})(smalltalk.send(html, "_input", [])));})]);})(smalltalk.send(html, "_div", []));
(iframeContainer=(function($rec){smalltalk.send($rec, "_style_", [unescape("margin-bottom%3A%205px%3B%20margin-right%3A%205px%3B")]);return smalltalk.send($rec, "_with_", [(function(){return (self['@iframe']=(function($rec){smalltalk.send($rec, "_style_", [unescape("width%3A%20100%25%3B%20height%3A%20100%25%3B%20border%3A%201px%20solid%20%23ccc%3B")]);smalltalk.send($rec, "_frameborder_", ["0"]);return smalltalk.send($rec, "_src_", ["about:blank"]);})(smalltalk.send(html, "_iframe", [])));})]);})(smalltalk.send(html, "_div", [])));
smalltalk.send(smalltalk.send(iframeContainer, "_asJQuery", []), "_resizable", []);
return self;},
args: ["html"],
source: unescape('renderWindowContentOn%3A%20html%0A%09%7CiframeContainer%7C%0A%09html%20div%0A%09%09class%3A%20%27input-prepend%27%3B%0A%09%09style%3A%20%27width%3A%20100%25%3B%20margin-top%3A%2010px%3B%20box-sizing%3A%20border-box%3B%20padding-right%3A%2051px%3B%20margin-bottom%3A%205px%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20span%20%0A%09%09%09%09class%3A%20%27add-on%27%3B%0A%09%09%09%09with%3A%20%27URL%27.%0A%09%09%09inputUrl%20%3A%3D%20html%20input%09%0A%09%09%09%09type%3A%20%27text%27%3B%0A%09%09%09%09style%3A%20%27width%3A%20100%25%3B%27%3B%0A%09%09%09%09onKeyPress%3A%20%5B%3Aevt%20%7C%20evt%20which%20%3D%2013%0A%09%09%09%09%09ifTrue%3A%20%5Bself%20url%3A%20inputUrl%20asJQuery%20val%5D%5D%5D.%0A%09iframeContainer%20%3A%3D%20html%20div%20%0A%09%09style%3A%20%27margin-bottom%3A%205px%3B%20margin-right%3A%205px%3B%27%3B%0A%09%09with%3A%20%5B%0A%09%09%09iframe%20%3A%3D%20html%20iframe%0A%09%09%09%09style%3A%20%27width%3A%20100%25%3B%20height%3A%20100%25%3B%20border%3A%201px%20solid%20%23ccc%3B%27%3B%0A%09%09%09%09frameborder%3A%20%270%27%3B%0A%09%09%09%09src%3A%20%27about%3Ablank%27%5D.%0A%09iframeContainer%20asJQuery%20resizable.'),
messageSends: ["class:", "style:", "with:", "span", "type:", "onKeyPress:", "ifTrue:", unescape("%3D"), "which", "url:", "val", "asJQuery", "input", "div", "frameborder:", "src:", "iframe", "resizable"],
referencedClasses: []
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_renderWindowTitleContentOn_'),
smalltalk.method({
selector: unescape('renderWindowTitleContentOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send((smalltalk.MaglevIcon || MaglevIcon), "_globe", [])]);
smalltalk.send(html, "_with_", ["Web Browser"]);
smalltalk.send(self, "_renderHeightPlaceholderOn_", [html]);
smalltalk.send(self, "_renderCloseButtonOn_", [html]);
return self;},
args: ["html"],
source: unescape('renderWindowTitleContentOn%3A%20html%0A%09html%20with%3A%20MaglevIcon%20globe.%0A%09html%20with%3A%20%27Web%20Browser%27.%0A%09self%20renderHeightPlaceholderOn%3A%20html.%0A%09self%20renderCloseButtonOn%3A%20html.'),
messageSends: ["with:", "globe", "renderHeightPlaceholderOn:", "renderCloseButtonOn:"],
referencedClasses: ["MaglevIcon"]
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return self['@url'];
return self;},
args: [],
source: unescape('url%0A%09%5E%20url'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWebBrowserWindow);

smalltalk.addMethod(
unescape('_url_'),
smalltalk.method({
selector: unescape('url%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@url']=aString);
smalltalk.send(smalltalk.send(self['@inputUrl'], "_asJQuery", []), "_attr_with_", ["value", aString]);
smalltalk.send(smalltalk.send(self['@iframe'], "_asJQuery", []), "_attr_with_", ["src", aString]);
return self;},
args: ["aString"],
source: unescape('url%3A%20aString%0A%09url%20%3A%3D%20aString.%0A%09inputUrl%20asJQuery%20attr%3A%20%27value%27%20with%3A%20aString.%0A%09iframe%20asJQuery%20attr%3A%20%27src%27%20with%3A%20aString.'),
messageSends: ["attr:with:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MaglevWebBrowserWindow);


smalltalk.addMethod(
unescape('_defaultUrl'),
smalltalk.method({
selector: unescape('defaultUrl'),
category: 'instance creation',
fn: function (){
var self=this;
 var port = parseInt(window.location.host.split(':')[1]) - 1;
	return window.location.protocol + '//' + window.location.host.split(':')[0] + ':' + port + '/'; ;
return self;},
args: [],
source: unescape('defaultUrl%0A%09%3C%20var%20port%20%3D%20parseInt%28window.location.host.split%28%27%3A%27%29%5B1%5D%29%20-%201%3B%0A%09return%20window.location.protocol%20+%20%27//%27%20+%20window.location.host.split%28%27%3A%27%29%5B0%5D%20+%20%27%3A%27%20+%20port%20+%20%27/%27%3B%20%3E'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevWebBrowserWindow.klass);

smalltalk.addMethod(
unescape('_showNew'),
smalltalk.method({
selector: unescape('showNew'),
category: 'instance creation',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_appendToWorkspace", []);return smalltalk.send($rec, "_url_", [smalltalk.send(self, "_defaultUrl", [])]);})(smalltalk.send(self, "_new", []));
return self;},
args: [],
source: unescape('showNew%0A%09%5E%20self%20new%0A%09%09appendToWorkspace%3B%0A%09%09url%3A%20self%20defaultUrl.'),
messageSends: ["appendToWorkspace", "url:", "defaultUrl", "new"],
referencedClasses: []
}),
smalltalk.MaglevWebBrowserWindow.klass);


