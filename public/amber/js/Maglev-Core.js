smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, ['objectSpace', 'windows', 'bottomNavHtml'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_addWindow_'),
smalltalk.method({
selector: unescape('addWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_renderNavigationItemFor_", [aWindow]);
smalltalk.send(self['@windows'], "_add_", [aWindow]);
smalltalk.send(self, "_showConnectionsFor_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('addWindow%3A%20aWindow%0A%09self%20renderNavigationItemFor%3A%20aWindow.%0A%09windows%20add%3A%20aWindow.%0A%09self%20showConnectionsFor%3A%20aWindow.'),
messageSends: ["renderNavigationItemFor:", "add:", "showConnectionsFor:"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_with_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3Awith%3AwithCallback%3A'),
category: 'interactions',
fn: function (code, aString, additionalParams, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);smalltalk.send($rec, "_addAll_", [additionalParams]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [unescape("object/evaluate/20"), params, (function(obj){var parsedObj=nil;
(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [obj]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(smalltalk.send(parsedObj, "_isException", []), "_not", []), parsedObj]);})]);
return self;},
args: ["code", "aString", "additionalParams", "aBlock"],
source: unescape('evaluateWithoutUpdate%3A%20code%20language%3A%20aString%20with%3A%20additionalParams%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27language%27%20put%3A%20aString%3B%0A%09%09at%3A%20%27code%27%20put%3A%20code%3B%0A%09%09addAll%3A%20additionalParams%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/evaluate/20%27%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%7CparsedObj%7C%0A%09%09%09parsedObj%20%3A%3D%20MaglevObject%20newObjectWithoutUpdate%3A%20obj.%0A%09%09%09aBlock%20value%3A%20parsedObj%20isException%20not%20value%3A%20parsedObj%5D.'),
messageSends: ["at:put:", "addAll:", "yourself", "new", "ajax:data:withCallback:", "newObjectWithoutUpdate:", "value:value:", "not", "isException"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_findClassNamesMatching_with_'),
smalltalk.method({
selector: unescape('findClassNamesMatching%3Awith%3A'),
category: 'interactions',
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(unescape("%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findClassNamesMatching%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27.")]), "smalltalk", aBlock]);
return self;},
args: ["aSelector", "aBlock"],
source: unescape('findClassNamesMatching%3A%20aSelector%20with%3A%20aBlock%0A%09aSelector%20isString%20ifFalse%3A%5Bself%20error%3A%20%27The%20selector%20should%20be%20a%20string%27%5D.%0A%0A%09MaglevNilClass%20instance%20%0A%09%09evaluateWithoutUpdate%3A%20%27%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findClassNamesMatching%3A%27%27%27%2C%20aSelector%2C%20%27%27%27.%27%20%0A%09%09language%3A%20%27smalltalk%27%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", unescape("%2C")],
referencedClasses: ["MaglevNilClass"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_findMethodNamesMatching_with_'),
smalltalk.method({
selector: unescape('findMethodNamesMatching%3Awith%3A'),
category: 'interactions',
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(unescape("%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findMethodNamesMatching%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27.")]), "smalltalk", aBlock]);
return self;},
args: ["aSelector", "aBlock"],
source: unescape('findMethodNamesMatching%3A%20aSelector%20with%3A%20aBlock%0A%09aSelector%20isString%20ifFalse%3A%5Bself%20error%3A%20%27The%20selector%20should%20be%20a%20string%27%5D.%0A%0A%09MaglevNilClass%20instance%20%0A%09%09evaluateWithoutUpdate%3A%20%27%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findMethodNamesMatching%3A%27%27%27%2C%20aSelector%2C%20%27%27%27.%27%20%0A%09%09language%3A%20%27smalltalk%27%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", unescape("%2C")],
referencedClasses: ["MaglevNilClass"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_implementersOf_withCallback_'),
smalltalk.method({
selector: unescape('implementersOf%3AwithCallback%3A'),
category: 'interactions',
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%7Corganizer%20dict%20ruby%20smalltalk%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20dict%20%3A%3D%20Array%20new.%20smalltalk%20%3A%3D%20organizer%20implementorsOf%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27%20asSymbol.%20smalltalk%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%200.%7D%5D.%20ruby%20%3A%3D%20organizer%20rubyImplementorsOf%3A%27")]), "__comma", [aSelector]), "__comma", [unescape("%27%20asSymbol.%20ruby%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%201.%7D%5D.%201%20to%3A%20dict%20size%20do%3A%5B%3Ai%7C%7Ccls%7C%20cls%3A%3D%20%28dict%20at%3A%20i%29%20at%3A1.%20%28cls%20class%20%3D%3D%20GsNMethod%29%20ifTrue%3A%5B%28dict%20at%3Ai%29%20at%3A1%20put%3A%20cls%20inClass%5D%5D.%20dict")]), "smalltalk", aBlock]);
return self;},
args: ["aSelector", "aBlock"],
source: unescape('implementersOf%3A%20aSelector%20withCallback%3A%20aBlock%0A%09aSelector%20isString%20ifFalse%3A%5Bself%20error%3A%20%27The%20selector%20should%20be%20a%20string%27%5D.%0A%09MaglevNilClass%20instance%0A%09%09evaluateWithoutUpdate%3A%20%27%7Corganizer%20dict%20ruby%20smalltalk%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20dict%20%3A%3D%20Array%20new.%20smalltalk%20%3A%3D%20organizer%20implementorsOf%3A%27%27%27%2C%20aSelector%2C%20%27%27%27%20asSymbol.%20smalltalk%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%200.%7D%5D.%20ruby%20%3A%3D%20organizer%20rubyImplementorsOf%3A%27%27%27%2C%20aSelector%2C%20%27%27%27%20asSymbol.%20ruby%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%201.%7D%5D.%201%20to%3A%20dict%20size%20do%3A%5B%3Ai%7C%7Ccls%7C%20cls%3A%3D%20%28dict%20at%3A%20i%29%20at%3A1.%20%28cls%20class%20%3D%3D%20GsNMethod%29%20ifTrue%3A%5B%28dict%20at%3Ai%29%20at%3A1%20put%3A%20cls%20inClass%5D%5D.%20dict%27%20%0A%09%09language%3A%20%27smalltalk%27%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", unescape("%2C")],
referencedClasses: ["MaglevNilClass"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
(self['@windows']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@bottomNavHtml']=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23windows-navigation"), "_asJQuery", [])]));
return self;},
args: [],
source: unescape('initialize%0A%09windows%20%3A%3D%20OrderedCollection%20new.%0A%09bottomNavHtml%20%3A%3D%20HTMLCanvas%20onJQuery%3A%20%27%23windows-navigation%27%20asJQuery.'),
messageSends: ["new", "onJQuery:", "asJQuery"],
referencedClasses: ["OrderedCollection", "HTMLCanvas"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_objectSpace'),
smalltalk.method({
selector: unescape('objectSpace'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@objectSpace']) == nil || $receiver == undefined) ? (function(){return (self['@objectSpace']=smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []));})() : $receiver;
return self['@objectSpace'];
return self;},
args: [],
source: unescape('objectSpace%0A%09objectSpace%20ifNil%3A%20%5BobjectSpace%20%3A%3D%20MaglevObjectSpace%20instance%5D.%0A%09%5E%20objectSpace'),
messageSends: ["ifNil:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_removeWindow_'),
smalltalk.method({
selector: unescape('removeWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aWindow, "_navigationItem", []), "_asJQuery", []), "_remove", []);
smalltalk.send(self['@windows'], "_remove_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('removeWindow%3A%20aWindow%0A%09aWindow%20navigationItem%20asJQuery%20remove.%0A%09windows%20remove%3A%20aWindow.'),
messageSends: ["remove", "asJQuery", "navigationItem", "remove:"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_renderNavigationItemFor_'),
smalltalk.method({
selector: unescape('renderNavigationItemFor%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
var navItem=nil;
(navItem=smalltalk.send(smalltalk.send(self['@bottomNavHtml'], "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-info%20window-navigation-item")]);smalltalk.send($rec, "_style_", [unescape("padding%3A%204px%202px%202px%204px%3B%20margin-top%3A%205px%3B")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(aWindow, "_moveToFront", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(aWindow, "_renderNavigationOn_", [self['@bottomNavHtml']]);})]);})(smalltalk.send(self['@bottomNavHtml'], "_a", []));})]));
smalltalk.send(aWindow, "_navigationItem_", [navItem]);
return self;},
args: ["aWindow"],
source: unescape('renderNavigationItemFor%3A%20aWindow%0A%09%7CnavItem%7C%0A%09navItem%20%3A%3D%20bottomNavHtml%20li%0A%09%09with%3A%20%5B%0A%09%09%09bottomNavHtml%20a%0A%09%09%09%09class%3A%20%27btn%20btn-info%20window-navigation-item%27%3B%0A%09%09%09%09style%3A%20%27padding%3A%204px%202px%202px%204px%3B%20margin-top%3A%205px%3B%27%3B%0A%09%09%09%09onClick%3A%20%5BaWindow%20moveToFront%5D%3B%0A%09%09%09%09with%3A%20%5BaWindow%20renderNavigationOn%3A%20bottomNavHtml%5D%5D.%0A%09aWindow%20navigationItem%3A%20navItem.'),
messageSends: ["with:", "li", "class:", "style:", "onClick:", "moveToFront", "renderNavigationOn:", "a", "navigationItem:"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showConnectionsFor_'),
smalltalk.method({
selector: unescape('showConnectionsFor%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
smalltalk.send(self['@windows'], "_do_", [(function(window){smalltalk.send(window, "_checkAddConnectionTo_", [aWindow]);return smalltalk.send(aWindow, "_checkAddConnectionTo_", [window]);})]);
return self;},
args: ["aWindow"],
source: unescape('showConnectionsFor%3A%20aWindow%0A%09windows%20do%3A%20%5B%3Awindow%20%7C%20%0A%09%09window%20checkAddConnectionTo%3A%20aWindow.%0A%09%09aWindow%20checkAddConnectionTo%3A%20window%5D.'),
messageSends: ["do:", "checkAddConnectionTo:"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showObjectWindow_'),
smalltalk.method({
selector: unescape('showObjectWindow%3A'),
category: 'rendering',
fn: function (oop){
var self=this;
try{var window=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_hasLoadedOop_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})]));
(window=smalltalk.send(smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_at_", [oop]), "_windowViewComponent", []));
smalltalk.send(window, "_appendToWorkspace", []);
(function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return window}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_showObjectWindow_'){return e.fn()} throw(e)}},
args: ["oop"],
source: unescape('showObjectWindow%3A%20oop%0A%09%7Cwindow%7C%0A%09%28self%20objectSpace%20hasLoadedOop%3A%20oop%29%0A%09%09ifFalse%3A%20%5B%5E%20self%20showReloadObjectWindow%3A%20oop%5D.%0A%09window%20%3A%3D%20%28self%20objectSpace%20at%3A%20oop%29%20windowViewComponent.%0A%09window%20appendToWorkspace.%0A%09%5E%20window'),
messageSends: ["ifFalse:", "hasLoadedOop:", "objectSpace", "showReloadObjectWindow:", "windowViewComponent", "at:", "appendToWorkspace"],
referencedClasses: []
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showReloadObjectWindow_'),
smalltalk.method({
selector: unescape('showReloadObjectWindow%3A'),
category: 'rendering',
fn: function (oop){
var self=this;
var window=nil;
(window=smalltalk.send((smalltalk.MaglevWaitingWindow || MaglevWaitingWindow), "_new", []));
smalltalk.send(window, "_appendToWorkspace", []);
smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_reloadObject_withCallback_", [oop, (function(object){var objWindow=nil;
(objWindow=smalltalk.send(object, "_windowViewComponentReplace_", [window]));return smalltalk.send(objWindow, "_renderReplace", []);})]);
return window;
return self;},
args: ["oop"],
source: unescape('showReloadObjectWindow%3A%20oop%0A%09%7Cwindow%7C%0A%09window%20%3A%3D%20MaglevWaitingWindow%20new.%0A%09window%20appendToWorkspace.%0A%09self%20objectSpace%0A%09%09reloadObject%3A%20oop%0A%09%09withCallback%3A%20%5B%3Aobject%20%7C%20%7CobjWindow%7C%0A%09%09%09objWindow%20%3A%3D%20object%20windowViewComponentReplace%3A%20window.%0A%09%09%09objWindow%20renderReplace%5D.%0A%09%5E%20window'),
messageSends: ["new", "appendToWorkspace", "reloadObject:withCallback:", "objectSpace", "windowViewComponentReplace:", "renderReplace"],
referencedClasses: ["MaglevWaitingWindow"]
}),
smalltalk.Maglev);


smalltalk.Maglev.klass.iVarNames = ['instance','defaultWorkspaceId','persistentRootId','maglevSystemId','evalObjectId'];
smalltalk.addMethod(
unescape('_defaultWorkspaceId'),
smalltalk.method({
selector: unescape('defaultWorkspaceId'),
category: 'accessing',
fn: function (){
var self=this;
return self['@defaultWorkspaceId'];
return self;},
args: [],
source: unescape('defaultWorkspaceId%0A%09%5E%20defaultWorkspaceId'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_defaultWorkspaceId_'),
smalltalk.method({
selector: unescape('defaultWorkspaceId%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@defaultWorkspaceId']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('defaultWorkspaceId%3A%20anInteger%0A%09%22Called%20from%20JavaScript%20initializer.%22%0A%09defaultWorkspaceId%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_evalObjectId'),
smalltalk.method({
selector: unescape('evalObjectId'),
category: 'accessing',
fn: function (){
var self=this;
return self['@evalObjectId'];
return self;},
args: [],
source: unescape('evalObjectId%0A%09%5E%20evalObjectId'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_evalObjectId_'),
smalltalk.method({
selector: unescape('evalObjectId%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@evalObjectId']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('evalObjectId%3A%20anInteger%0A%09evalObjectId%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send((smalltalk.Maglev || Maglev), "_new", []));})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5Binstance%20%3A%3D%20Maglev%20new%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Maglev"]
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_maglevSystemId'),
smalltalk.method({
selector: unescape('maglevSystemId'),
category: 'accessing',
fn: function (){
var self=this;
return self['@maglevSystemId'];
return self;},
args: [],
source: unescape('maglevSystemId%0A%09%5E%20maglevSystemId'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_maglevSystemId_'),
smalltalk.method({
selector: unescape('maglevSystemId%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@maglevSystemId']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('maglevSystemId%3A%20anInteger%0A%09%22Called%20from%20JavaScript%20initializer.%22%0A%09maglevSystemId%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_openWindow_'),
smalltalk.method({
selector: unescape('openWindow%3A'),
category: 'initializing',
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_showObjectWindow_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('openWindow%3A%20anInteger%0A%09Maglev%20instance%20showObjectWindow%3A%20anInteger.'),
messageSends: ["showObjectWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_persistentRootId'),
smalltalk.method({
selector: unescape('persistentRootId'),
category: 'accessing',
fn: function (){
var self=this;
return self['@persistentRootId'];
return self;},
args: [],
source: unescape('persistentRootId%0A%09%5E%20persistentRootId'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_persistentRootId_'),
smalltalk.method({
selector: unescape('persistentRootId%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@persistentRootId']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('persistentRootId%3A%20anInteger%0A%09%22Called%20from%20JavaScript%20initializer.%22%0A%09persistentRootId%20%3A%3D%20anInteger.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_ready'),
smalltalk.method({
selector: unescape('ready'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_defaultWorkspaceId", [])]);
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_persistentRootId", [])]);
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_maglevSystemId", [])]);
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_evalObject_", [smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_", [smalltalk.send(self, "_evalObjectId", [])])]);
smalltalk.send((smalltalk.MaglevHaltedThreadListener || MaglevHaltedThreadListener), "_start", []);
smalltalk.send((smalltalk.MaglevWebBrowserWindow || MaglevWebBrowserWindow), "_showNew", []);
return self;},
args: [],
source: unescape('ready%0A%09self%20openWindow%3A%20self%20defaultWorkspaceId.%0A%09self%20openWindow%3A%20self%20persistentRootId.%0A%09self%20openWindow%3A%20self%20maglevSystemId.%0A%09MaglevObjectSpace%20instance%20%0A%09%09evalObject%3A%20%28MaglevObjectSpace%20instance%20reloadObject%3A%20self%20evalObjectId%29.%0A%09MaglevHaltedThreadListener%20start.%0A%09MaglevWebBrowserWindow%20showNew.'),
messageSends: ["openWindow:", "defaultWorkspaceId", "persistentRootId", "maglevSystemId", "evalObject:", "instance", "reloadObject:", "evalObjectId", "start", "showNew"],
referencedClasses: ["MaglevObjectSpace", "MaglevHaltedThreadListener", "MaglevWebBrowserWindow"]
}),
smalltalk.Maglev.klass);


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'instVarsSize', 'virtualClassObject', 'classObject', 'inspection', 'isLoaded', 'isException', 'windows', 'customTabs'], 'Maglev-Core');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_oop", []), "__eq", [smalltalk.send(anObject, "_oop", [])]);
return self;},
args: ["anObject"],
source: unescape('%3D%20anObject%0A%09%5E%20self%20oop%20%3D%20anObject%20oop'),
messageSends: [unescape("%3D"), "oop"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
category: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_oop", []), "__eq_eq", [smalltalk.send(anObject, "_oop", [])]);
return self;},
args: ["anObject"],
source: unescape('%3D%3D%20anObject%0A%09%5E%20self%20oop%20%3D%3D%20anObject%20oop'),
messageSends: [unescape("%3D%3D"), "oop"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_addWindow_'),
smalltalk.method({
selector: unescape('addWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_add_", [aWindow]);
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_addWindow_", [aWindow]);
return aWindow;
return self;},
args: ["aWindow"],
source: unescape('addWindow%3A%20aWindow%0A%09self%20windows%20add%3A%20aWindow.%0A%09Maglev%20instance%20addWindow%3A%20aWindow.%0A%09%5E%20aWindow'),
messageSends: ["add:", "windows", "addWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@classObject'];
return self;},
args: [],
source: unescape('classObject%0A%09%5E%20classObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_customTabs'),
smalltalk.method({
selector: unescape('customTabs'),
category: 'accessing',
fn: function (){
var self=this;
return self['@customTabs'];
return self;},
args: [],
source: unescape('customTabs%0A%09%5E%20customTabs'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ensureIsLoaded_from_to_'),
smalltalk.method({
selector: unescape('ensureIsLoaded%3Afrom%3Ato%3A'),
category: 'reloading',
fn: function (collectionName, from, to){
var self=this;
try{var obj=nil;
var params=nil;
((($receiver = smalltalk.send(self, "_isLoaded_from_to_", [collectionName, from, to])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_', fn: function(){return self}})})();})]));
(params=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_from"]), from]);smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_to"]), to]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params]));
smalltalk.send(self, "_parseJSON_", [obj]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_ensureIsLoaded_from_to_'){return e.fn()} throw(e)}},
args: ["collectionName", "from", "to"],
source: unescape('ensureIsLoaded%3A%20collectionName%20from%3A%20from%20to%3A%20to%0A%09%7Cobj%20params%7C%0A%09%28self%20isLoaded%3A%20collectionName%20from%3A%20from%20to%3A%20to%29%20ifTrue%3A%20%5B%5E%20self%5D.%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27range_%27%2C%20collectionName%20asString%2C%20%27_from%27%20put%3A%20from%3B%0A%09%09at%3A%20%27range_%27%2C%20collectionName%20asString%2C%20%27_to%27%20put%3A%20to%3B%0A%09%09yourself.%0A%09obj%20%3A%3D%20MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20self%20oop%0A%09%09data%3A%20params.%0A%09self%20parseJSON%3A%20obj.'),
messageSends: ["ifTrue:", "isLoaded:from:to:", "at:put:", unescape("%2C"), "asString", "yourself", "new", "ajax:data:", "oop", "parseJSON:"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ensureIsLoaded_from_to_withCallback_'),
smalltalk.method({
selector: unescape('ensureIsLoaded%3Afrom%3Ato%3AwithCallback%3A'),
category: 'reloading',
fn: function (collectionName, from, to, aBlock){
var self=this;
try{var params=nil;
((($receiver = smalltalk.send(self, "_isLoaded_from_to_", [collectionName, from, to])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value", []);return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_withCallback_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value", []);return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_withCallback_', fn: function(){return self}})})();})]));
(params=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_from"]), from]);smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_to"]), to]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params, (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_ensureIsLoaded_from_to_withCallback_'){return e.fn()} throw(e)}},
args: ["collectionName", "from", "to", "aBlock"],
source: unescape('ensureIsLoaded%3A%20collectionName%20from%3A%20from%20to%3A%20to%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09%28self%20isLoaded%3A%20collectionName%20from%3A%20from%20to%3A%20to%29%20ifTrue%3A%20%5BaBlock%20value.%20%5E%20self%5D.%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27range_%27%2C%20collectionName%20asString%2C%20%27_from%27%20put%3A%20from%3B%0A%09%09at%3A%20%27range_%27%2C%20collectionName%20asString%2C%20%27_to%27%20put%3A%20to%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20self%20oop%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09self%20parseJSON%3A%20obj.%0A%09%09%09aBlock%20value%5D.'),
messageSends: ["ifTrue:", "isLoaded:from:to:", "value", "at:put:", unescape("%2C"), "asString", "yourself", "new", "ajax:data:withCallback:", "oop", "parseJSON:"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluate_language_withCallback_'),
smalltalk.method({
selector: unescape('evaluate%3Alanguage%3AwithCallback%3A'),
category: 'interactions',
fn: function (code, aString, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;},
args: ["code", "aString", "aBlock"],
source: unescape('evaluate%3A%20code%20language%3A%20aString%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27language%27%20put%3A%20aString%3B%0A%09%09at%3A%20%27code%27%20put%3A%20code%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/evaluate/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%7CisException%20parsedObj%7C%0A%09%09%09isException%20%3A%3D%20obj%20at%3A%201.%0A%09%09%09parsedObj%20%3A%3D%20MaglevObject%20newObject%3A%20%28obj%20at%3A%202%29.%0A%09%09%09aBlock%20value%3A%20isException%20not%20value%3A%20parsedObj%5D.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString", "at:", "newObject:", "value:value:", "not"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_with_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3Awith%3AwithCallback%3A'),
category: 'interactions',
fn: function (code, aString, additionalParams, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);smalltalk.send($rec, "_addAll_", [additionalParams]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;},
args: ["code", "aString", "additionalParams", "aBlock"],
source: unescape('evaluateWithoutUpdate%3A%20code%20language%3A%20aString%20with%3A%20additionalParams%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27language%27%20put%3A%20aString%3B%0A%09%09at%3A%20%27code%27%20put%3A%20code%3B%0A%09%09addAll%3A%20additionalParams%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/evaluate/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%7CisException%20parsedObj%7C%0A%09%09%09isException%20%3A%3D%20obj%20at%3A%201.%0A%09%09%09parsedObj%20%3A%3D%20MaglevObject%20newObjectWithoutUpdate%3A%20%28obj%20at%3A%202%29.%0A%09%09%09aBlock%20value%3A%20isException%20not%20value%3A%20parsedObj%5D.'),
messageSends: ["at:put:", "addAll:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString", "at:", "newObjectWithoutUpdate:", "value:value:", "not"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3AwithCallback%3A'),
category: 'interactions',
fn: function (code, aString, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;},
args: ["code", "aString", "aBlock"],
source: unescape('evaluateWithoutUpdate%3A%20code%20language%3A%20aString%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27language%27%20put%3A%20aString%3B%0A%09%09at%3A%20%27code%27%20put%3A%20code%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/evaluate/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%7CisException%20parsedObj%7C%0A%09%09%09isException%20%3A%3D%20obj%20at%3A%201.%0A%09%09%09parsedObj%20%3A%3D%20MaglevObject%20newObject%3A%20%28obj%20at%3A%202%29.%0A%09%09%09aBlock%20value%3A%20isException%20not%20value%3A%20parsedObj%5D.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString", "at:", "newObject:", "value:value:", "not"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_fullReloadWithCallback_'),
smalltalk.method({
selector: unescape('fullReloadWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_withCallback_", [self['@oop'], aBlock]);
return self;},
args: ["aBlock"],
source: unescape('fullReloadWithCallback%3A%20aBlock%0A%09MaglevObjectSpace%20instance%0A%09%09reloadObject%3A%20oop%20withCallback%3A%20aBlock.'),
messageSends: ["reloadObject:withCallback:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_hasInstVar_'),
smalltalk.method({
selector: unescape('hasInstVar%3A'),
category: 'accessing',
fn: function (instVarName){
var self=this;
try{smalltalk.send(self, "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivName, "__eq", [instVarName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_hasInstVar_'){return e.fn()} throw(e)}},
args: ["instVarName"],
source: unescape('hasInstVar%3A%20instVarName%0A%09self%20instVarsDo%3A%20%5B%3AivName%20%3AivValue%20%7C%0A%09%09ivName%20%3D%20instVarName%20ifTrue%3A%20%5B%5E%20true%5D%5D.%0A%09%5E%20false'),
messageSends: ["instVarsDo:", "ifTrue:", unescape("%3D")],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_hasInstVars'),
smalltalk.method({
selector: unescape('hasInstVars'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@instVars'], "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;},
args: [],
source: unescape('hasInstVars%0A%09%5E%20instVars%20size%20%3E%200'),
messageSends: [unescape("%3E"), "size"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ifNotMaglevNil_'),
smalltalk.method({
selector: unescape('ifNotMaglevNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;},
args: ["aBlock"],
source: unescape('ifNotMaglevNil%3A%20aBlock%0A%09%5E%20aBlock%20value'),
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponent%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentFull'),
smalltalk.method({
selector: unescape('inlineViewComponentFull'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_fullInspection_", [true]);smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponentFull%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09fullInspection%3A%20true%3B%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["fullInspection:", "object:", "initialize", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentNavItem'),
smalltalk.method({
selector: unescape('inlineViewComponentNavItem'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);smalltalk.send($rec, "_hasDropDown_", [false]);smalltalk.send($rec, "_isDraggable_", [false]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponentNavItem%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09isShort%3A%20true%3B%0A%09%09hasDropDown%3A%20false%3B%0A%09%09isDraggable%3A%20false%3B%0A%09%09yourself'),
messageSends: ["object:", "isShort:", "hasDropDown:", "isDraggable:", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentShort'),
smalltalk.method({
selector: unescape('inlineViewComponentShort'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);smalltalk.send($rec, "_isDraggable_", [false]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('inlineViewComponentShort%0A%09%5E%20self%20class%20inlineViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09isShort%3A%20true%3B%0A%09%09isDraggable%3A%20false%3B%0A%09%09yourself'),
messageSends: ["object:", "isShort:", "isDraggable:", "yourself", "basicNew", "inlineViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentWithDepth_'),
smalltalk.method({
selector: unescape('inlineViewComponentWithDepth%3A'),
category: 'rendering',
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlineViewComponent", []));
return self;},
args: ["anInteger"],
source: unescape('inlineViewComponentWithDepth%3A%20anInteger%0A%09%5E%20self%20inlineViewComponent%0A%09%09depth%3A%20anInteger%3B%0A%09%09yourself'),
messageSends: ["depth:", "yourself", "inlineViewComponent"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inspection'),
smalltalk.method({
selector: unescape('inspection'),
category: 'accessing',
fn: function (){
var self=this;
return self['@inspection'];
return self;},
args: [],
source: unescape('inspection%0A%09%5E%20inspection'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarAt_'),
smalltalk.method({
selector: unescape('instVarAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
try{smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", [smalltalk.send("instVar not found in forwarder object: ", "__comma", [aString])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_instVarAt_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('instVarAt%3A%20aString%0A%09instVars%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aiv%20%7C%20%0A%09%09iv%20key%20string%20%3D%20aString%20asString%0A%09%09%09ifTrue%3A%20%5B%5E%20iv%20value%5D%5D.%0A%09self%20error%3A%20%27instVar%20not%20found%20in%20forwarder%20object%3A%20%27%2C%20aString.'),
messageSends: ["keysAndValuesDo:", "ifTrue:", unescape("%3D"), "string", "key", "asString", "value", "error:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarAt_ifAbsent_'),
smalltalk.method({
selector: unescape('instVarAt%3AifAbsent%3A'),
category: 'accessing',
fn: function (aString, anObject){
var self=this;
try{smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return anObject}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_instVarAt_ifAbsent_'){return e.fn()} throw(e)}},
args: ["aString", "anObject"],
source: unescape('instVarAt%3A%20aString%20ifAbsent%3A%20anObject%0A%09instVars%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aiv%20%7C%20%0A%09%09iv%20key%20string%20%3D%20aString%20asString%0A%09%09%09ifTrue%3A%20%5B%5E%20iv%20value%5D%5D.%0A%09%5E%20anObject'),
messageSends: ["keysAndValuesDo:", "ifTrue:", unescape("%3D"), "string", "key", "asString", "value"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVars'),
smalltalk.method({
selector: unescape('instVars'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instVars'];
return self;},
args: [],
source: unescape('instVars%0A%09%5E%20instVars'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarsDo_'),
smalltalk.method({
selector: unescape('instVarsDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(iv, "_key", []), smalltalk.send(iv, "_value", [])]);})]);
return self;},
args: ["aBlock"],
source: unescape('instVarsDo%3A%20aBlock%0A%09instVars%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aiv%20%7C%20aBlock%20value%3A%20iv%20key%20value%3A%20iv%20value%5D.'),
messageSends: ["keysAndValuesDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarsSize'),
smalltalk.method({
selector: unescape('instVarsSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instVarsSize'];
return self;},
args: [],
source: unescape('instVarsSize%0A%09%5E%20instVarsSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instancesViewComponent'),
smalltalk.method({
selector: unescape('instancesViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instancesViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('instancesViewComponent%0A%09%5E%20self%20class%20instancesViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "instancesViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isException'),
smalltalk.method({
selector: unescape('isException'),
category: 'accessing',
fn: function (){
var self=this;
return self['@isException'];
return self;},
args: [],
source: unescape('isException%0A%09%5E%20isException'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isGsNMethod'),
smalltalk.method({
selector: unescape('isGsNMethod'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isGsNMethod%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
category: 'testing',
fn: function (){
var self=this;
return self['@isLoaded'];
return self;},
args: [],
source: unescape('isLoaded%0A%09%5E%20isLoaded'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isLoaded_from_to_'),
smalltalk.method({
selector: unescape('isLoaded%3Afrom%3Ato%3A'),
category: 'testing',
fn: function (collectionName, from, to){
var self=this;
try{var collection=nil;
(collection=smalltalk.send(self, "_perform_", [collectionName]));
smalltalk.send(smalltalk.send(from, "_to_", [to]), "_do_", [(function(index){return ((($receiver = smalltalk.send(collection, "_includesKey_", [index])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_isLoaded_from_to_'){return e.fn()} throw(e)}},
args: ["collectionName", "from", "to"],
source: unescape('isLoaded%3A%20collectionName%20from%3A%20from%20to%3A%20to%0A%09%7Ccollection%7C%0A%09collection%20%3A%3D%20self%20perform%3A%20collectionName.%0A%09%28from%20to%3A%20to%29%20do%3A%20%5B%3Aindex%20%7C%0A%09%09%28collection%20includesKey%3A%20index%29%20ifFalse%3A%20%5B%5E%20false%5D%5D.%0A%09%5E%20true'),
messageSends: ["perform:", "do:", "to:", "ifFalse:", "includesKey:"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isMaglevNil'),
smalltalk.method({
selector: unescape('isMaglevNil'),
category: 'testing',
fn: function (){
var self=this;
return false;
return self;},
args: [],
source: unescape('isMaglevNil%0A%09%5E%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_oop'),
smalltalk.method({
selector: unescape('oop'),
category: 'accessing',
fn: function (){
var self=this;
return self['@oop'];
return self;},
args: [],
source: unescape('oop%0A%09%5E%20oop'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsAllElements'),
smalltalk.method({
selector: unescape('paramsAllElements'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsAllElements%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27allElements%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsFullString'),
smalltalk.method({
selector: unescape('paramsFullString'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["fullString", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsFullString%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27fullString%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsFullStringAndElements'),
smalltalk.method({
selector: unescape('paramsFullStringAndElements'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["fullString", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsFullStringAndElements%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27allElements%27%20put%3A%20true%3B%0A%09%09at%3A%20%27fullString%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsThreadFrame'),
smalltalk.method({
selector: unescape('paramsThreadFrame'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["fullString", true]);smalltalk.send($rec, "_at_put_", ["fullMethod", true]);smalltalk.send($rec, "_at_put_", ["noBehavior", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsThreadFrame%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27allElements%27%20put%3A%20true%3B%0A%09%09at%3A%20%27fullString%27%20put%3A%20true%3B%0A%09%09at%3A%20%27fullMethod%27%20put%3A%20true%3B%0A%09%09at%3A%20%27noBehavior%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
(self['@isLoaded']=true);
(($receiver = self['@instVars']) == nil || $receiver == undefined) ? (function(){return (self['@instVars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@isException']=smalltalk.send(obj, "_exception", []));
(self['@classObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_classObject", [])]));
(self['@virtualClassObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_virtualClassObject", [])]));
(self['@inspection']=smalltalk.send(obj, "_inspection", []));
(self['@instVarsSize']=smalltalk.send(obj, "_instVarsSize", []));
smalltalk.send(smalltalk.send(obj, "_instVars", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@instVars'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);
(self['@customTabs']=smalltalk.send(obj, "_customTabs", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09isLoaded%20%3A%3D%20true.%0A%09instVars%20ifNil%3A%20%5BinstVars%20%3A%3D%20Dictionary%20new%5D.%0A%09oop%20%3A%3D%20obj%20oop.%0A%09isException%20%3A%3D%20obj%20exception.%0A%09classObject%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20classObject.%0A%09virtualClassObject%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20virtualClassObject.%0A%09inspection%20%3A%3D%20obj%20inspection.%0A%09instVarsSize%20%3A%3D%20obj%20instVarsSize.%0A%09obj%20instVars%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aassoc%20%7C%20%7Ckey%20value%7C%0A%09%09key%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%201%29.%0A%09%09value%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%202%29.%0A%09%09instVars%20at%3A%20index%20asNumber%20put%3A%20key%20-%3E%20value%5D.%0A%09customTabs%20%3A%3D%20obj%20customTabs.'),
messageSends: ["ifNil:", "new", "oop", "exception", "newObject:", "classObject", "virtualClassObject", "inspection", "instVarsSize", "keysAndValuesDo:", "instVars", "at:", "at:put:", "asNumber", unescape("-%3E"), "customTabs"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
(($receiver = smalltalk.send(self, "_isLoaded", [])) == nil || $receiver == undefined) ? (function(){return (self['@isLoaded']=false);})() : $receiver;
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@inspection']=smalltalk.send(obj, "_inspection", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09self%20isLoaded%20%0A%09%09ifNil%3A%20%5BisLoaded%20%3A%3D%20false%5D.%0A%09oop%20%3A%3D%20obj%20oop.%0A%09inspection%20%3A%3D%20obj%20inspection.'),
messageSends: ["ifNil:", "isLoaded", "oop", "inspection"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_removeWindow_'),
smalltalk.method({
selector: unescape('removeWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_remove_", [aWindow]);
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_removeWindow_", [aWindow]);
return aWindow;
return self;},
args: ["aWindow"],
source: unescape('removeWindow%3A%20aWindow%0A%09self%20windows%20remove%3A%20aWindow.%0A%09Maglev%20instance%20removeWindow%3A%20aWindow.%0A%09%5E%20aWindow'),
messageSends: ["remove:", "windows", "removeWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_shortInspection'),
smalltalk.method({
selector: unescape('shortInspection'),
category: 'accessing',
fn: function (){
var self=this;
try{((($receiver = ((($receiver = smalltalk.send(self['@inspection'], "_size", [])).klass === smalltalk.Number) ? $receiver >(10) : smalltalk.send($receiver, "__gt", [(10)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return smalltalk.send(smalltalk.send(self['@inspection'], "_copyFrom_to_", [(1), (10)]), "__comma", ["..."])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return self['@inspection']}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return smalltalk.send(smalltalk.send(self['@inspection'], "_copyFrom_to_", [(1), (10)]), "__comma", ["..."])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return self['@inspection']}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_shortInspection'){return e.fn()} throw(e)}},
args: [],
source: unescape('shortInspection%0A%09inspection%20size%20%3E%2010%20%0A%09%09ifTrue%3A%20%5B%5E%20%28inspection%20copyFrom%3A%201%20to%3A%2010%29%2C%20%27...%27%5D%0A%09%09ifFalse%3A%20%5B%5E%20inspection%5D.'),
messageSends: ["ifTrue:ifFalse:", unescape("%3E"), "size", unescape("%2C"), "copyFrom:to:"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_virtualClassObject'),
smalltalk.method({
selector: unescape('virtualClassObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@virtualClassObject'];
return self;},
args: [],
source: unescape('virtualClassObject%0A%09%5E%20virtualClassObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponent'),
smalltalk.method({
selector: unescape('windowViewComponent'),
category: 'rendering',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_basicNew", []));
return self;},
args: [],
source: unescape('windowViewComponent%0A%09%5E%20self%20class%20windowViewClass%20basicNew%0A%09%09object%3A%20self%3B%0A%09%09initialize%3B%0A%09%09yourself'),
messageSends: ["object:", "initialize", "yourself", "basicNew", "windowViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponentReplace_'),
smalltalk.method({
selector: unescape('windowViewComponentReplace%3A'),
category: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_newReplace_with_", [aWindow, self]);
return self;},
args: ["aWindow"],
source: unescape('windowViewComponentReplace%3A%20aWindow%0A%09%5E%20self%20class%20windowViewClass%20newReplace%3A%20aWindow%20with%3A%20self'),
messageSends: ["newReplace:with:", "windowViewClass", "class"],
referencedClasses: []
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windows'),
smalltalk.method({
selector: unescape('windows'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@windows']) == nil || $receiver == undefined) ? (function(){return (self['@windows']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self['@windows'];
return self;},
args: [],
source: unescape('windows%0A%09windows%20ifNil%3A%20%5Bwindows%20%3A%3D%20OrderedCollection%20new%5D.%0A%09%5E%20windows'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.MaglevObject);


smalltalk.MaglevObject.klass.iVarNames = ['basetypes','doesUpdateObjectSpace'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("object");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23object'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_basetypes'),
smalltalk.method({
selector: unescape('basetypes'),
category: 'accessing',
fn: function (){
var self=this;
return self['@basetypes'];
return self;},
args: [],
source: unescape('basetypes%0A%09%5E%20basetypes'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_doesUpdateObjectSpace'),
smalltalk.method({
selector: unescape('doesUpdateObjectSpace'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@doesUpdateObjectSpace']) == nil || $receiver == undefined) ? (function(){return (self['@doesUpdateObjectSpace']=true);})() : $receiver;
return self['@doesUpdateObjectSpace'];
return self;},
args: [],
source: unescape('doesUpdateObjectSpace%0A%09doesUpdateObjectSpace%20ifNil%3A%20%5BdoesUpdateObjectSpace%20%3A%3D%20true%5D.%0A%09%5E%20doesUpdateObjectSpace'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_doesUpdateObjectSpace_'),
smalltalk.method({
selector: unescape('doesUpdateObjectSpace%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(self['@doesUpdateObjectSpace']=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('doesUpdateObjectSpace%3A%20aBoolean%0A%09doesUpdateObjectSpace%20%3A%3D%20aBoolean.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
smalltalk.send(self, "_initializeBasetypes", []);
return self;},
args: [],
source: unescape('initialize%0A%09self%20initializeBasetypes.'),
messageSends: ["initializeBasetypes"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initializeBasetypes'),
smalltalk.method({
selector: unescape('initializeBasetypes'),
category: 'initializing',
fn: function (){
var self=this;
(self['@basetypes']=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(self, "_basetype", []), self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_do_", [(function(cls){return smalltalk.send(self['@basetypes'], "_at_put_", [smalltalk.send(cls, "_basetype", []), cls]);})]);
return self;},
args: [],
source: unescape('initializeBasetypes%0A%09basetypes%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20self%20basetype%20put%3A%20self%3B%0A%09%09yourself.%0A%09self%20allSubclasses%20do%3A%20%5B%3Acls%20%7C%0A%09%09basetypes%20at%3A%20cls%20basetype%20put%3A%20cls%5D.'),
messageSends: ["at:put:", "basetype", "yourself", "new", "do:", "allSubclasses"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInline || MaglevObjectInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevObjectInline'),
messageSends: [],
referencedClasses: ["MaglevObjectInline"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_instancesViewClass'),
smalltalk.method({
selector: unescape('instancesViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInstancesView || MaglevObjectInstancesView);
return self;},
args: [],
source: unescape('instancesViewClass%0A%09%5E%20MaglevObjectInstancesView'),
messageSends: [],
referencedClasses: ["MaglevObjectInstancesView"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newFor_'),
smalltalk.method({
selector: unescape('newFor%3A'),
category: 'instance creation',
fn: function (aBaseType){
var self=this;
var cls=nil;
(cls=smalltalk.send(smalltalk.send(self, "_basetypes", []), "_at_ifAbsent_", [smalltalk.send(aBaseType, "_asSymbol", []), (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Could not create forwarder object for invalid base type ", "__comma", [aBaseType])]);})]));
return smalltalk.send(cls, "_new", []);
return self;},
args: ["aBaseType"],
source: unescape('newFor%3A%20aBaseType%0A%09%7Ccls%7C%0A%09cls%20%3A%3D%20self%20basetypes%20%0A%09%09at%3A%20aBaseType%20asSymbol%0A%09%09ifAbsent%3A%20%5Bself%20error%3A%20%27Could%20not%20create%20forwarder%20object%20for%20invalid%20base%20type%20%27%2C%20aBaseType%5D.%0A%09%5E%20cls%20new'),
messageSends: ["at:ifAbsent:", "basetypes", "asSymbol", "error:", unescape("%2C"), "new"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObject_'),
smalltalk.method({
selector: unescape('newObject%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
var object=nil;
(object=smalltalk.send(self, "_parseJSON_", [obj]));
((($receiver = smalltalk.send(self, "_doesUpdateObjectSpace", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);})]));
return object;
return self;},
args: ["obj"],
source: unescape('newObject%3A%20obj%0A%09%7Cobject%7C%0A%09object%20%3A%3D%20self%20parseJSON%3A%20obj.%0A%09self%20doesUpdateObjectSpace%20%0A%09%09ifTrue%3A%20%5BMaglevObjectSpace%20instance%20updateObject%3A%20object%5D.%0A%09%5E%20object'),
messageSends: ["parseJSON:", "ifTrue:", "doesUpdateObjectSpace", "updateObject:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObjectWithoutUpdate_'),
smalltalk.method({
selector: unescape('newObjectWithoutUpdate%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
var before=nil;
var result=nil;
(before=smalltalk.send(self, "_doesUpdateObjectSpace", []));
(result=smalltalk.send(self, "_newObject_", [obj]));
(self['@doesUpdateObjectSpace']=before);
return result;
return self;},
args: ["obj"],
source: unescape('newObjectWithoutUpdate%3A%20obj%0A%09%7Cbefore%20result%7C%0A%09before%20%3A%3D%20self%20doesUpdateObjectSpace.%0A%09result%20%3A%3D%20self%20newObject%3A%20obj.%0A%09doesUpdateObjectSpace%20%3A%3D%20before.%0A%09%5E%20result'),
messageSends: ["doesUpdateObjectSpace", "newObject:"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
try{var object=nil;
(object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));
((($receiver = smalltalk.send(obj, "_loaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_parseJSON_'){return e.fn()} throw(e)}},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09%7Cobject%7C%0A%09object%20%3A%3D%20self%20newFor%3A%20obj%20basetype.%0A%09obj%20loaded%0A%09%09ifTrue%3A%20%5B%5E%20object%20parseJSON%3A%20obj%3B%20yourself%5D%0A%09%09ifFalse%3A%20%5B%5E%20object%20parseJSONNotLoaded%3A%20obj%3B%20yourself%5D.'),
messageSends: ["newFor:", "basetype", "ifTrue:ifFalse:", "loaded", "parseJSON:", "yourself", "parseJSONNotLoaded:"],
referencedClasses: []
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevObjectWindow || MaglevObjectWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevObjectWindow'),
messageSends: [],
referencedClasses: ["MaglevObjectWindow"]
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elements", []), "_at_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('at%3A%20anInteger%0A%09%5E%20self%20elements%20at%3A%20anInteger'),
messageSends: ["at:", "elements"],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('do%3A%20aBlock%0A%09self%20elements%20do%3A%20aBlock.'),
messageSends: ["do:", "elements"],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elements'];
return self;},
args: [],
source: unescape('elements%0A%09%5E%20elements'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_elementsSize'),
smalltalk.method({
selector: unescape('elementsSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elementsSize'];
return self;},
args: [],
source: unescape('elementsSize%0A%09%5E%20elementsSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_hasElements'),
smalltalk.method({
selector: unescape('hasElements'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;},
args: [],
source: unescape('hasElements%0A%09%5E%20self%20elementsSize%20%3E%200'),
messageSends: [unescape("%3E"), "elementsSize"],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementsSize", []), "__eq_eq", [smalltalk.send(smalltalk.send(self, "_elements", []), "_size", [])]);
return self;},
args: [],
source: unescape('isFullyLoaded%0A%09%5E%20self%20elementsSize%20%3D%3D%20self%20elements%20size'),
messageSends: [unescape("%3D%3D"), "elementsSize", "size", "elements"],
referencedClasses: []
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(self['@elementsSize']=smalltalk.send(obj, "_elementsSize", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(index, element){return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09elements%20ifNil%3A%20%5Belements%20%3A%3D%20Dictionary%20new%5D.%0A%09elementsSize%20%3A%3D%20obj%20elementsSize.%0A%09obj%20elements%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aelement%20%7C%0A%09%09elements%20at%3A%20index%20asNumber%20put%3A%20%28MaglevObject%20newObject%3A%20element%29%5D.'),
messageSends: ["parseJSON:", "ifNil:", "new", "elementsSize", "keysAndValuesDo:", "elements", "at:put:", "asNumber", "newObject:"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevArray);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("array");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23array'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevArrayInline || MaglevArrayInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevArrayInline'),
messageSends: [],
referencedClasses: ["MaglevArrayInline"]
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevArrayWindow || MaglevArrayWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevArrayWindow'),
messageSends: [],
referencedClasses: ["MaglevArrayWindow"]
}),
smalltalk.MaglevArray.klass);


smalltalk.addClass('MaglevBoolean', smalltalk.MaglevObject, ['value'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@value']=smalltalk.send(obj, "_value", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09value%20%3A%3D%20obj%20value.'),
messageSends: ["parseJSON:", "value"],
referencedClasses: []
}),
smalltalk.MaglevBoolean);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@value']=smalltalk.send(obj, "_value", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.%0A%09value%20%3A%3D%20obj%20value.'),
messageSends: ["parseJSONNotLoaded:", "value"],
referencedClasses: []
}),
smalltalk.MaglevBoolean);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
category: 'accessing',
fn: function (){
var self=this;
return self['@value'];
return self;},
args: [],
source: unescape('value%0A%09%5E%20value'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevBoolean);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("boolean");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23boolean'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevBoolean.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevBooleanInline || MaglevBooleanInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevBooleanInline'),
messageSends: [],
referencedClasses: ["MaglevBooleanInline"]
}),
smalltalk.MaglevBoolean.klass);


smalltalk.addClass('MaglevDictionary', smalltalk.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elements", []), "_at_", [anInteger]);
return self;},
args: ["anInteger"],
source: unescape('at%3A%20anInteger%0A%09%5E%20self%20elements%20at%3A%20anInteger'),
messageSends: ["at:", "elements"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKey_'),
smalltalk.method({
selector: unescape('atKey%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(assoc, "_key", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKey_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKey_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKey_'){return e.fn()} throw(e)}},
args: ["anObject"],
source: unescape('atKey%3A%20anObject%0A%09self%20elements%20do%3A%20%5B%3Aassoc%20%7C%0A%09%09anObject%20%3D%20assoc%20key%0A%09%09%09ifTrue%3A%20%5B%5E%20assoc%20value%5D%5D.%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27.'),
messageSends: ["do:", "elements", "ifTrue:", unescape("%3D"), "key", "value", "error:"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKeyInspection_'),
smalltalk.method({
selector: unescape('atKeyInspection%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(smalltalk.send(assoc, "_key", []), "_inspection", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKeyInspection_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKeyInspection_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKeyInspection_'){return e.fn()} throw(e)}},
args: ["anObject"],
source: unescape('atKeyInspection%3A%20anObject%0A%09self%20elements%20do%3A%20%5B%3Aassoc%20%7C%0A%09%09anObject%20%3D%20assoc%20key%20inspection%0A%09%09%09ifTrue%3A%20%5B%5E%20assoc%20value%5D%5D.%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27.'),
messageSends: ["do:", "elements", "ifTrue:", unescape("%3D"), "inspection", "key", "value", "error:"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKeyString_'),
smalltalk.method({
selector: unescape('atKeyString%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(smalltalk.send(assoc, "_key", []), "_string", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKeyString_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKeyString_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKeyString_'){return e.fn()} throw(e)}},
args: ["anObject"],
source: unescape('atKeyString%3A%20anObject%0A%09self%20elements%20do%3A%20%5B%3Aassoc%20%7C%0A%09%09anObject%20%3D%20assoc%20key%20string%0A%09%09%09ifTrue%3A%20%5B%5E%20assoc%20value%5D%5D.%0A%09self%20error%3A%20%27Object%20is%20not%20in%20the%20collection%27.'),
messageSends: ["do:", "elements", "ifTrue:", unescape("%3D"), "string", "key", "value", "error:"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elements'];
return self;},
args: [],
source: unescape('elements%0A%09%5E%20elements'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_elementsSize'),
smalltalk.method({
selector: unescape('elementsSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@elementsSize'];
return self;},
args: [],
source: unescape('elementsSize%0A%09%5E%20elementsSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_hasElements'),
smalltalk.method({
selector: unescape('hasElements'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;},
args: [],
source: unescape('hasElements%0A%09%5E%20self%20elementsSize%20%3E%200'),
messageSends: [unescape("%3E"), "elementsSize"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(assoc, "_key", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_includesKey_'){return e.fn()} throw(e)}},
args: ["anObject"],
source: unescape('includesKey%3A%20anObject%0A%09self%20elements%20do%3A%20%5B%3Aassoc%20%7C%0A%09%09anObject%20%3D%20assoc%20key%0A%09%09%09ifTrue%3A%20%5B%5E%20true%5D%5D.%0A%09%5E%20false'),
messageSends: ["do:", "elements", "ifTrue:", unescape("%3D"), "key"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementsSize", []), "__eq_eq", [smalltalk.send(smalltalk.send(self, "_elements", []), "_size", [])]);
return self;},
args: [],
source: unescape('isFullyLoaded%0A%09%5E%20self%20elementsSize%20%3D%3D%20self%20elements%20size'),
messageSends: [unescape("%3D%3D"), "elementsSize", "size", "elements"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_keysAndValuesDo_", [(function(index, kv){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(kv, "_key", []), smalltalk.send(kv, "_value", [])]);})]);
return self;},
args: ["aBlock"],
source: unescape('keysAndValuesDo%3A%20aBlock%0A%09elements%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Akv%20%7C%20aBlock%20value%3A%20kv%20key%20value%3A%20kv%20value%5D.'),
messageSends: ["keysAndValuesDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(self['@elementsSize']=smalltalk.send(obj, "_elementsSize", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09elements%20ifNil%3A%20%5Belements%20%3A%3D%20Dictionary%20new%5D.%0A%09elementsSize%20%3A%3D%20obj%20elementsSize.%0A%09obj%20elements%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aassoc%20%7C%20%7Ckey%20value%7C%0A%09%09key%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%201%29.%0A%09%09value%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%202%29.%0A%09%09elements%20at%3A%20index%20asNumber%20put%3A%20key%20-%3E%20value%5D.'),
messageSends: ["parseJSON:", "ifNil:", "new", "elementsSize", "keysAndValuesDo:", "elements", "newObject:", "at:", "at:put:", "asNumber", unescape("-%3E")],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_valuesDo_'),
smalltalk.method({
selector: unescape('valuesDo%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return smalltalk.send(aBlock, "_value_", [smalltalk.send(assoc, "_value", [])]);})]);
return self;},
args: ["aBlock"],
source: unescape('valuesDo%3A%20aBlock%0A%09self%20elements%20do%3A%20%5B%3Aassoc%20%7C%0A%09%09aBlock%20value%3A%20assoc%20value%5D.'),
messageSends: ["do:", "elements", "value:", "value"],
referencedClasses: []
}),
smalltalk.MaglevDictionary);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("dictionary");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23dictionary'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevDictionary.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevHashInline || MaglevHashInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevHashInline'),
messageSends: [],
referencedClasses: ["MaglevHashInline"]
}),
smalltalk.MaglevDictionary.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevHashWindow || MaglevHashWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevHashWindow'),
messageSends: [],
referencedClasses: ["MaglevHashWindow"]
}),
smalltalk.MaglevDictionary.klass);


smalltalk.addClass('MaglevHash', smalltalk.MaglevDictionary, ['elements', 'elementsSize'], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("hash");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23hash'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevHash.klass);


smalltalk.addClass('MaglevException', smalltalk.MaglevObject, ['gsResumable', 'gsTrappable', 'gsNumber', 'isDBEHalt'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isDBEHalt'),
smalltalk.method({
selector: unescape('isDBEHalt'),
category: 'testing',
fn: function (){
var self=this;
return self['@isDBEHalt'];
return self;},
args: [],
source: unescape('isDBEHalt%0A%09%5E%20isDBEHalt'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_isResumable'),
smalltalk.method({
selector: unescape('isResumable'),
category: 'accessing',
fn: function (){
var self=this;
return self['@gsResumable'];
return self;},
args: [],
source: unescape('isResumable%0A%09%5E%20gsResumable'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_isTrappable'),
smalltalk.method({
selector: unescape('isTrappable'),
category: 'accessing',
fn: function (){
var self=this;
return self['@gsTrappable'];
return self;},
args: [],
source: unescape('isTrappable%0A%09%5E%20gsTrappable'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
category: 'accessing',
fn: function (){
var self=this;
return self['@gsNumber'];
return self;},
args: [],
source: unescape('number%0A%09%5E%20gsNumber'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@gsTrappable']=smalltalk.send(obj, "_gsTrappable", []));
(self['@gsResumable']=smalltalk.send(obj, "_gsResumable", []));
(self['@gsNumber']=smalltalk.send(obj, "_at_", ["gsNumber"]));
(self['@isDBEHalt']=smalltalk.send(obj, "_isDBEHalt", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09gsTrappable%20%3A%3D%20obj%20gsTrappable.%0A%09gsResumable%20%3A%3D%20obj%20gsResumable.%0A%09gsNumber%20%3A%3D%20obj%20at%3A%20%27gsNumber%27.%20%22gsNumber%20might%20be%20nil%22%0A%09isDBEHalt%20%3A%3D%20obj%20isDBEHalt.'),
messageSends: ["parseJSON:", "gsTrappable", "gsResumable", "at:", "isDBEHalt"],
referencedClasses: []
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@gsTrappable']=smalltalk.send(obj, "_gsTrappable", []));
(self['@gsResumable']=smalltalk.send(obj, "_gsResumable", []));
(self['@gsNumber']=smalltalk.send(obj, "_at_", ["gsNumber"]));
(self['@isDBEHalt']=smalltalk.send(obj, "_isDBEHalt", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.%0A%09gsTrappable%20%3A%3D%20obj%20gsTrappable.%0A%09gsResumable%20%3A%3D%20obj%20gsResumable.%0A%09gsNumber%20%3A%3D%20obj%20at%3A%20%27gsNumber%27.%20%22gsNumber%20might%20be%20nil%22%0A%09isDBEHalt%20%3A%3D%20obj%20isDBEHalt.'),
messageSends: ["parseJSONNotLoaded:", "gsTrappable", "gsResumable", "at:", "isDBEHalt"],
referencedClasses: []
}),
smalltalk.MaglevException);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("exception");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23exception'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevException.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevExceptionInline || MaglevExceptionInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevExceptionInline'),
messageSends: [],
referencedClasses: ["MaglevExceptionInline"]
}),
smalltalk.MaglevException.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevExceptionWindow || MaglevExceptionWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevExceptionWindow'),
messageSends: [],
referencedClasses: ["MaglevExceptionWindow"]
}),
smalltalk.MaglevException.klass);


smalltalk.addClass('MaglevFixnum', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@inspection'], "_asNumber", []);
return self;},
args: [],
source: unescape('number%0A%09%5E%20inspection%20asNumber'),
messageSends: ["asNumber"],
referencedClasses: []
}),
smalltalk.MaglevFixnum);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("fixnum");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23fixnum'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumInline || MaglevFixnumInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevFixnumInline'),
messageSends: [],
referencedClasses: ["MaglevFixnumInline"]
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumWindow || MaglevFixnumWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevFixnumWindow'),
messageSends: [],
referencedClasses: ["MaglevFixnumWindow"]
}),
smalltalk.MaglevFixnum.klass);


smalltalk.addClass('MaglevFloat', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@inspection'], "_asNumber", []);
return self;},
args: [],
source: unescape('number%0A%09%5E%20inspection%20asNumber'),
messageSends: ["asNumber"],
referencedClasses: []
}),
smalltalk.MaglevFloat);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("float");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23float'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFloatInline || MaglevFloatInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevFloatInline'),
messageSends: [],
referencedClasses: ["MaglevFloatInline"]
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevFloatWindow || MaglevFloatWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevFloatWindow'),
messageSends: [],
referencedClasses: ["MaglevFloatWindow"]
}),
smalltalk.MaglevFloat.klass);


smalltalk.addClass('MaglevGsNMethod', smalltalk.MaglevObject, ['selectorString', 'argsAndTemps', 'descrForStack'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_argsAndTemps'),
smalltalk.method({
selector: unescape('argsAndTemps'),
category: 'accessing',
fn: function (){
var self=this;
return self['@argsAndTemps'];
return self;},
args: [],
source: unescape('argsAndTemps%0A%09%5E%20argsAndTemps'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_compileRubySourceCode_withCallback_'),
smalltalk.method({
selector: unescape('compileRubySourceCode%3AwithCallback%3A'),
category: 'interactions',
fn: function (sourceCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_inClass", []), "_evaluateWithoutUpdate_language_with_withCallback_", [sourceCode, "rubyClass", smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;},
args: ["sourceCode", "aBlock"],
source: unescape('compileRubySourceCode%3A%20sourceCode%20withCallback%3A%20aBlock%0A%09self%20inClass%0A%09%09evaluateWithoutUpdate%3A%20sourceCode%0A%09%09language%3A%20%27rubyClass%27%0A%09%09with%3A%20Dictionary%20new%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", "inClass", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_compileSmalltalkSourceCode_withCallback_'),
smalltalk.method({
selector: unescape('compileSmalltalkSourceCode%3AwithCallback%3A'),
category: 'interactions',
fn: function (sourceCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_inClass", []), "_evaluateWithoutUpdate_language_with_withCallback_", [smalltalk.send(smalltalk.send(unescape("self%20compile%3A%20%27"), "__comma", [smalltalk.send(sourceCode, "_escapedString", [])]), "__comma", [unescape("%27.")]), "smalltalk", smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;},
args: ["sourceCode", "aBlock"],
source: unescape('compileSmalltalkSourceCode%3A%20sourceCode%20withCallback%3A%20aBlock%0A%09self%20inClass%0A%09%09evaluateWithoutUpdate%3A%20%27self%20compile%3A%20%27%27%27%2C%20sourceCode%20escapedString%2C%20%27%27%27.%27%0A%09%09language%3A%20%27smalltalk%27%0A%09%09with%3A%20Dictionary%20new%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", "inClass", unescape("%2C"), "escapedString", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfo'),
smalltalk.method({
selector: unescape('debugInfo'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_debugInfo")]);
return self;},
args: [],
source: unescape('debugInfo%0A%09%5E%20self%20instVarAt%3A%20%27@_st_debugInfo%27'),
messageSends: ["instVarAt:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfoFileNameOffset'),
smalltalk.method({
selector: unescape('debugInfoFileNameOffset'),
category: 'constants',
fn: function (){
var self=this;
return (4);
return self;},
args: [],
source: unescape('debugInfoFileNameOffset%0A%09%5E%204'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfoSourceOffset'),
smalltalk.method({
selector: unescape('debugInfoSourceOffset'),
category: 'constants',
fn: function (){
var self=this;
return (2);
return self;},
args: [],
source: unescape('debugInfoSourceOffset%0A%09%5E%202'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_descrForStack'),
smalltalk.method({
selector: unescape('descrForStack'),
category: 'accessing',
fn: function (){
var self=this;
return self['@descrForStack'];
return self;},
args: [],
source: unescape('descrForStack%0A%09%5E%20descrForStack'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_environmentId'),
smalltalk.method({
selector: unescape('environmentId'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_selector", []), "_number", []), "_bitShift_", [(0) - smalltalk.send(self, "_siSelectorIdEnvShift", [])]), "_bitAnd_", [smalltalk.send(self, "_selectorIdEnvMask", [])]);
return self;},
args: [],
source: unescape('environmentId%0A%09%5E%20%28self%20selector%20number%20bitShift%3A%200%20-%20self%20siSelectorIdEnvShift%29%20bitAnd%3A%20self%20selectorIdEnvMask'),
messageSends: ["bitAnd:", "bitShift:", "number", "selector", unescape("-"), "siSelectorIdEnvShift", "selectorIdEnvMask"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_filename'),
smalltalk.method({
selector: unescape('filename'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_debugInfo", []), "_at_", [smalltalk.send(self, "_debugInfoFileNameOffset", [])]);
return self;},
args: [],
source: unescape('filename%0A%09%5E%20self%20debugInfo%20at%3A%20self%20debugInfoFileNameOffset'),
messageSends: ["at:", "debugInfo", "debugInfoFileNameOffset"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_fullReloadWithCallback_'),
smalltalk.method({
selector: unescape('fullReloadWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_withCallback_params_", [self['@oop'], aBlock, smalltalk.send(self, "_paramsFullString", [])]);
return self;},
args: ["aBlock"],
source: unescape('fullReloadWithCallback%3A%20aBlock%0A%09MaglevObjectSpace%20instance%0A%09%09reloadObject%3A%20oop%20%0A%09%09withCallback%3A%20aBlock%20%0A%09%09params%3A%20self%20paramsFullString.'),
messageSends: ["reloadObject:withCallback:params:", "instance", "paramsFullString"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_inClass'),
smalltalk.method({
selector: unescape('inClass'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_inClass")]);
return self;},
args: [],
source: unescape('inClass%0A%09%5E%20self%20instVarAt%3A%20%27@_st_inClass%27'),
messageSends: ["instVarAt:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_isGsNMethod'),
smalltalk.method({
selector: unescape('isGsNMethod'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isGsNMethod%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@selectorString']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_selectorString", [])]));
(self['@argsAndTemps']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_argsAndTemps", [])]));
(self['@descrForStack']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_descrForStack", [])]));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09selectorString%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20selectorString.%0A%09argsAndTemps%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20argsAndTemps.%0A%09descrForStack%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20descrForStack.'),
messageSends: ["parseJSON:", "newObject:", "selectorString", "argsAndTemps", "descrForStack"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@selectorString']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_selectorString", [])]));
(self['@descrForStack']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_descrForStack", [])]));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.%0A%09selectorString%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20selectorString.%0A%09descrForStack%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20descrForStack.'),
messageSends: ["parseJSONNotLoaded:", "newObject:", "selectorString", "descrForStack"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_rubyFullName'),
smalltalk.method({
selector: unescape('rubyFullName'),
category: 'accessing',
fn: function (){
var self=this;
return "a GsNMethod";
return self;},
args: [],
source: unescape('rubyFullName%0A%09%5E%20%27a%20GsNMethod%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_selector")]);
return self;},
args: [],
source: unescape('selector%0A%09%5E%20self%20instVarAt%3A%20%27@_st_selector%27'),
messageSends: ["instVarAt:"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selectorIdEnvMask'),
smalltalk.method({
selector: unescape('selectorIdEnvMask'),
category: 'constants',
fn: function (){
var self=this;
return (255);
return self;},
args: [],
source: unescape('selectorIdEnvMask%0A%09%5E%20255'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selectorString'),
smalltalk.method({
selector: unescape('selectorString'),
category: 'accessing',
fn: function (){
var self=this;
return self['@selectorString'];
return self;},
args: [],
source: unescape('selectorString%0A%09%5E%20selectorString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_siSelectorIdEnvShift'),
smalltalk.method({
selector: unescape('siSelectorIdEnvShift'),
category: 'constants',
fn: function (){
var self=this;
return (53);
return self;},
args: [],
source: unescape('siSelectorIdEnvShift%0A%09%5E%2053'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_smalltalkFullName'),
smalltalk.method({
selector: unescape('smalltalkFullName'),
category: 'accessing',
fn: function (){
var self=this;
return "a GsNMethod";
return self;},
args: [],
source: unescape('smalltalkFullName%0A%09%5E%20%27a%20GsNMethod%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_sourceString'),
smalltalk.method({
selector: unescape('sourceString'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_debugInfo", []), "_at_", [smalltalk.send(self, "_debugInfoSourceOffset", [])]), "_string", []);
return self;},
args: [],
source: unescape('sourceString%0A%09%5E%20%28self%20debugInfo%20at%3A%20self%20debugInfoSourceOffset%29%20string'),
messageSends: ["string", "at:", "debugInfo", "debugInfoSourceOffset"],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("gsnmethod");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23gsnmethod'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevGsNMethod.klass);


smalltalk.addClass('MaglevInvalidObject', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.MaglevInvalidObject.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
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
smalltalk.MaglevInvalidObject.klass);


smalltalk.addClass('MaglevMaglevRecordBase', smalltalk.MaglevObject, ['attributes', 'attributesSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_attributeAt_'),
smalltalk.method({
selector: unescape('attributeAt%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
try{smalltalk.send(self['@attributes'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_attributeAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_attributeAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", [smalltalk.send("attribute not found in forwarder object: ", "__comma", [aString])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_attributeAt_'){return e.fn()} throw(e)}},
args: ["aString"],
source: unescape('attributeAt%3A%20aString%0A%09attributes%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aiv%20%7C%20%0A%09%09iv%20key%20string%20%3D%20aString%20asString%0A%09%09%09ifTrue%3A%20%5B%5E%20iv%20value%5D%5D.%0A%09self%20error%3A%20%27attribute%20not%20found%20in%20forwarder%20object%3A%20%27%2C%20aString.'),
messageSends: ["keysAndValuesDo:", "ifTrue:", unescape("%3D"), "string", "key", "asString", "value", "error:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_attributes'),
smalltalk.method({
selector: unescape('attributes'),
category: 'accessing',
fn: function (){
var self=this;
return self['@attributes'];
return self;},
args: [],
source: unescape('attributes%0A%09%5E%20attributes'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_attributesSize'),
smalltalk.method({
selector: unescape('attributesSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@attributesSize'];
return self;},
args: [],
source: unescape('attributesSize%0A%09%5E%20attributesSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = smalltalk.send(obj, "_at_", ["attributes"])) != nil && $receiver != undefined) ? (function(){(($receiver = self['@attributes']) == nil || $receiver == undefined) ? (function(){return (self['@attributes']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;(self['@attributesSize']=smalltalk.send(obj, "_attributesSize", []));return smalltalk.send(smalltalk.send(obj, "_attributes", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@attributes'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);})() : nil;
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09%28obj%20at%3A%20%27attributes%27%29%20ifNotNil%3A%20%5B%0A%09%09attributes%20ifNil%3A%20%5Battributes%20%3A%3D%20Dictionary%20new%5D.%0A%09%09attributesSize%20%3A%3D%20obj%20attributesSize.%0A%09%09obj%20attributes%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aassoc%20%7C%20%7Ckey%20value%7C%0A%09%09%09key%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%201%29.%0A%09%09%09value%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%202%29.%0A%09%09%09attributes%20at%3A%20index%20asNumber%20put%3A%20key%20-%3E%20value%5D%5D.'),
messageSends: ["parseJSON:", "ifNotNil:", "at:", "ifNil:", "new", "attributesSize", "keysAndValuesDo:", "attributes", "newObject:", "at:put:", "asNumber", unescape("-%3E")],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevMaglevRecordBase);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("maglevRecordBase");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23maglevRecordBase'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevMaglevRecordBaseInline || MaglevMaglevRecordBaseInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevMaglevRecordBaseInline'),
messageSends: [],
referencedClasses: ["MaglevMaglevRecordBaseInline"]
}),
smalltalk.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevMaglevRecordBaseWindow || MaglevMaglevRecordBaseWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevMaglevRecordBaseWindow'),
messageSends: [],
referencedClasses: ["MaglevMaglevRecordBaseWindow"]
}),
smalltalk.MaglevMaglevRecordBase.klass);


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules', 'includedModulesSize', 'constants', 'constantsSize', 'rubyFullName', 'smalltalkFullName', 'superList'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_allSelectorsWithCallback_'),
smalltalk.method({
selector: unescape('allSelectorsWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/selectors/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('allSelectorsWithCallback%3A%20aBlock%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/selectors/%27%2C%20oop%20asString%0A%09%09data%3A%20Dictionary%20new%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_constants'),
smalltalk.method({
selector: unescape('constants'),
category: 'accessing',
fn: function (){
var self=this;
return self['@constants'];
return self;},
args: [],
source: unescape('constants%0A%09%5E%20constants'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_constantsSize'),
smalltalk.method({
selector: unescape('constantsSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@constantsSize'];
return self;},
args: [],
source: unescape('constantsSize%0A%09%5E%20constantsSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_ensureSuperListLoadedWithCallback_'),
smalltalk.method({
selector: unescape('ensureSuperListLoadedWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
(($receiver = self['@superList']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), smalltalk.send(self, "_paramsSuperList", []), (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);})() : (function(){return smalltalk.send(aBlock, "_value", []);})();
return self;},
args: ["aBlock"],
source: unescape('ensureSuperListLoadedWithCallback%3A%20aBlock%0A%09superList%20%0A%09%09ifNil%3A%20%5BMaglevAjax%20%0A%09%09%09ajax%3A%20%27object/index/%27%2C%20self%20oop%0A%09%09%09data%3A%20self%20paramsSuperList%0A%09%09%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09%09%09self%20parseJSON%3A%20obj.%0A%09%09%09%09%09aBlock%20value%5D%5D%0A%09%09ifNotNil%3A%20%5BaBlock%20value%5D.'),
messageSends: ["ifNil:ifNotNil:", "ajax:data:withCallback:", unescape("%2C"), "oop", "paramsSuperList", "parseJSON:", "value"],
referencedClasses: ["MaglevAjax"]
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_hasConstants'),
smalltalk.method({
selector: unescape('hasConstants'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_constantsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;},
args: [],
source: unescape('hasConstants%0A%09%5E%20self%20constantsSize%20%3E%200'),
messageSends: [unescape("%3E"), "constantsSize"],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_hasIncludedModules'),
smalltalk.method({
selector: unescape('hasIncludedModules'),
category: 'testing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_includedModulesSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;},
args: [],
source: unescape('hasIncludedModules%0A%09%5E%20self%20includedModulesSize%20%3E%200'),
messageSends: [unescape("%3E"), "includedModulesSize"],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_includedModules'),
smalltalk.method({
selector: unescape('includedModules'),
category: 'accessing',
fn: function (){
var self=this;
return self['@includedModules'];
return self;},
args: [],
source: unescape('includedModules%0A%09%5E%20includedModules'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_includedModulesSize'),
smalltalk.method({
selector: unescape('includedModulesSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@includedModulesSize'];
return self;},
args: [],
source: unescape('includedModulesSize%0A%09%5E%20includedModulesSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_paramsSuperList'),
smalltalk.method({
selector: unescape('paramsSuperList'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["superList", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsSuperList%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27superList%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = self['@includedModules']) == nil || $receiver == undefined) ? (function(){return (self['@includedModules']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(($receiver = self['@constants']) == nil || $receiver == undefined) ? (function(){return (self['@constants']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(($receiver = smalltalk.send(obj, "_at_", ["includedModulesSize"])) != nil && $receiver != undefined) ? (function(){(self['@includedModulesSize']=smalltalk.send(obj, "_includedModulesSize", []));return smalltalk.send(smalltalk.send(obj, "_includedModules", []), "_keysAndValuesDo_", [(function(index, value){return smalltalk.send(self['@includedModules'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [value])]);})]);})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["constantsSize"])) != nil && $receiver != undefined) ? (function(){(self['@constantsSize']=smalltalk.send(obj, "_constantsSize", []));return smalltalk.send(smalltalk.send(obj, "_constants", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@constants'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["superList"])) != nil && $receiver != undefined) ? (function(){return (self['@superList']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_superList", [])]));})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["rubyFullName"])) != nil && $receiver != undefined) ? (function(){(self['@rubyFullName']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_rubyFullName", [])]));return (self['@smalltalkFullName']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_smalltalkFullName", [])]));})() : nil;
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09includedModules%20ifNil%3A%20%5BincludedModules%20%3A%3D%20Dictionary%20new%5D.%0A%09constants%20ifNil%3A%20%5Bconstants%20%3A%3D%20Dictionary%20new%5D.%0A%09%28obj%20at%3A%20%27includedModulesSize%27%29%20ifNotNil%3A%20%5B%0A%09%09includedModulesSize%20%3A%3D%20obj%20includedModulesSize.%0A%09%09obj%20includedModules%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Avalue%20%7C%0A%09%09%09includedModules%20at%3A%20index%20asNumber%20put%3A%20%28MaglevObject%20newObject%3A%20value%29%5D%5D.%0A%09%28obj%20at%3A%20%27constantsSize%27%29%20ifNotNil%3A%20%5B%0A%09%09constantsSize%20%3A%3D%20obj%20constantsSize.%0A%09%09obj%20constants%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aassoc%20%7C%20%7Ckey%20value%7C%0A%09%09%09key%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%201%29.%0A%09%09%09value%20%3A%3D%20MaglevObject%20newObject%3A%20%28assoc%20at%3A%202%29.%0A%09%09%09constants%20at%3A%20index%20asNumber%20put%3A%20key%20-%3E%20value%5D%5D.%0A%09%28obj%20at%3A%20%27superList%27%29%20ifNotNil%3A%20%5B%0A%09%09superList%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20superList%5D.%0A%09%28obj%20at%3A%20%27rubyFullName%27%29%20ifNotNil%3A%20%5B%0A%09%09rubyFullName%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20rubyFullName.%0A%09%09smalltalkFullName%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20smalltalkFullName%5D.'),
messageSends: ["parseJSON:", "ifNil:", "new", "ifNotNil:", "at:", "includedModulesSize", "keysAndValuesDo:", "includedModules", "at:put:", "asNumber", "newObject:", "constantsSize", "constants", unescape("-%3E"), "superList", "rubyFullName", "smalltalkFullName"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.'),
messageSends: ["parseJSONNotLoaded:"],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_rubyFullName'),
smalltalk.method({
selector: unescape('rubyFullName'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@rubyFullName'], "_string", []);
return self;},
args: [],
source: unescape('rubyFullName%0A%09%5E%20rubyFullName%20string'),
messageSends: ["string"],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_smalltalkFullName'),
smalltalk.method({
selector: unescape('smalltalkFullName'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@smalltalkFullName'], "_string", []);
return self;},
args: [],
source: unescape('smalltalkFullName%0A%09%5E%20smalltalkFullName%20string'),
messageSends: ["string"],
referencedClasses: []
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_sourceCodeFor_language_withCallback_'),
smalltalk.method({
selector: unescape('sourceCodeFor%3Alanguage%3AwithCallback%3A'),
category: 'interactions',
fn: function (selectorString, lang, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", lang]);smalltalk.send($rec, "_at_put_", ["selector", selectorString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/code/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;},
args: ["selectorString", "lang", "aBlock"],
source: unescape('sourceCodeFor%3A%20selectorString%20language%3A%20lang%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27language%27%20put%3A%20lang%3B%0A%09%09at%3A%20%27selector%27%20put%3A%20selectorString%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/code/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_superList'),
smalltalk.method({
selector: unescape('superList'),
category: 'accessing',
fn: function (){
var self=this;
return self['@superList'];
return self;},
args: [],
source: unescape('superList%0A%09%5E%20superList'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("module");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23module'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevModuleInline || MaglevModuleInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevModuleInline'),
messageSends: [],
referencedClasses: ["MaglevModuleInline"]
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevModuleWindow || MaglevModuleWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevModuleWindow'),
messageSends: [],
referencedClasses: ["MaglevModuleWindow"]
}),
smalltalk.MaglevModule.klass);


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclassObject', 'size', 'subclasses', 'instances', 'instancesSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_ensureSubclassesLoadedWithCallback_'),
smalltalk.method({
selector: unescape('ensureSubclassesLoadedWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
(($receiver = self['@subclasses']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), smalltalk.send(self, "_paramsSubclasses", []), (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);})() : (function(){return smalltalk.send(aBlock, "_value", []);})();
return self;},
args: ["aBlock"],
source: unescape('ensureSubclassesLoadedWithCallback%3A%20aBlock%0A%09subclasses%20%0A%09%09ifNil%3A%20%5BMaglevAjax%20%0A%09%09%09ajax%3A%20%27object/index/%27%2C%20self%20oop%0A%09%09%09data%3A%20self%20paramsSubclasses%0A%09%09%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09%09%09self%20parseJSON%3A%20obj.%0A%09%09%09%09%09aBlock%20value%5D%5D%0A%09%09ifNotNil%3A%20%5BaBlock%20value%5D.'),
messageSends: ["ifNil:ifNotNil:", "ajax:data:withCallback:", unescape("%2C"), "oop", "paramsSubclasses", "parseJSON:", "value"],
referencedClasses: ["MaglevAjax"]
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_instances'),
smalltalk.method({
selector: unescape('instances'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instances'];
return self;},
args: [],
source: unescape('instances%0A%09%5E%20instances'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_instancesSize'),
smalltalk.method({
selector: unescape('instancesSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@instancesSize'];
return self;},
args: [],
source: unescape('instancesSize%0A%09%5E%20instancesSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_loadInstancesFrom_to_withCallback_'),
smalltalk.method({
selector: unescape('loadInstancesFrom%3Ato%3AwithCallback%3A'),
category: 'interactions',
fn: function (from, to, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["range_instances_from", from]);smalltalk.send($rec, "_at_put_", ["range_instances_to", to]);smalltalk.send($rec, "_at_put_", ["instances", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params, (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [obj])]);})]);
return self;},
args: ["from", "to", "aBlock"],
source: unescape('loadInstancesFrom%3A%20from%20to%3A%20to%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27range_instances_from%27%20put%3A%20from%3B%0A%09%09at%3A%20%27range_instances_to%27%20put%3A%20to%3B%0A%09%09at%3A%20%27instances%27%20put%3A%20true%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20self%20oop%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%0A%09%09%09%22Create%20new%20object%20instead%20of%20merging%20results%20to%20self.%20This%20way%20%0A%09%09%09we%20can%20separate%20instances%20with%20different%20filters%20and%20don%27t%0A%09%09%09pollute%20MaglevObjectSpace%20with%20masses%20of%20objects.%22%0A%09%09%09aBlock%20value%3A%20%28MaglevObject%20newObjectWithoutUpdate%3A%20obj%29%5D.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "oop", "value:", "newObjectWithoutUpdate:"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_paramsSubclasses'),
smalltalk.method({
selector: unescape('paramsSubclasses'),
category: 'interactions',
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["subclasses", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('paramsSubclasses%0A%09%5E%20Dictionary%20new%0A%09%09at%3A%20%27subclasses%27%20put%3A%20true%3B%0A%09%09yourself'),
messageSends: ["at:put:", "yourself", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevModule);
(($receiver = smalltalk.send(obj, "_at_", ["superclassObject"])) != nil && $receiver != undefined) ? (function(){return (self['@superclassObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_superclassObject", [])]));})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["subclasses"])) != nil && $receiver != undefined) ? (function(){return (self['@subclasses']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_subclasses", [])]));})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["instancesSize"])) != nil && $receiver != undefined) ? (function(){(($receiver = self['@instances']) == nil || $receiver == undefined) ? (function(){return (self['@instances']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;(self['@instancesSize']=smalltalk.send(obj, "_instancesSize", []));return smalltalk.send(smalltalk.send(obj, "_instances", []), "_keysAndValuesDo_", [(function(index, element){return smalltalk.send(self['@instances'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);})() : nil;
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09%28obj%20at%3A%20%27superclassObject%27%29%20ifNotNil%3A%20%5B%0A%09%09superclassObject%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20superclassObject%5D.%0A%09%28obj%20at%3A%20%27subclasses%27%29%20ifNotNil%3A%20%5B%0A%09%09subclasses%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20subclasses%5D.%0A%09%28obj%20at%3A%20%27instancesSize%27%29%20ifNotNil%3A%20%5B%0A%09%09instances%20ifNil%3A%20%5Binstances%20%3A%3D%20Dictionary%20new%5D.%0A%09%09instancesSize%20%3A%3D%20obj%20instancesSize.%0A%09%09obj%20instances%20keysAndValuesDo%3A%20%5B%3Aindex%20%3Aelement%20%7C%0A%09%09%09instances%20at%3A%20index%20asNumber%20put%3A%20%28MaglevObject%20newObject%3A%20element%29%5D%5D.'),
messageSends: ["parseJSON:", "ifNotNil:", "at:", "newObject:", "superclassObject", "subclasses", "ifNil:", "new", "instancesSize", "keysAndValuesDo:", "instances", "at:put:", "asNumber"],
referencedClasses: ["MaglevObject", "Dictionary"]
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_subclasses'),
smalltalk.method({
selector: unescape('subclasses'),
category: 'accessing',
fn: function (){
var self=this;
return self['@subclasses'];
return self;},
args: [],
source: unescape('subclasses%0A%09%5E%20subclasses'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_superclassObject'),
smalltalk.method({
selector: unescape('superclassObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@superclassObject'];
return self;},
args: [],
source: unescape('superclassObject%0A%09%5E%20superclassObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("class");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23class'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevClassInline || MaglevClassInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevClassInline'),
messageSends: [],
referencedClasses: ["MaglevClassInline"]
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevClassWindow || MaglevClassWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevClassWindow'),
messageSends: [],
referencedClasses: ["MaglevClassWindow"]
}),
smalltalk.MaglevClass.klass);


smalltalk.addClass('MaglevSystemClass', smalltalk.MaglevClass, ['gemVersionReport', 'gemVersionReportSize', 'stoneVersionReport', 'stoneVersionReportSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_gemVersionReport'),
smalltalk.method({
selector: unescape('gemVersionReport'),
category: 'accessing',
fn: function (){
var self=this;
return self['@gemVersionReport'];
return self;},
args: [],
source: unescape('gemVersionReport%0A%09%5E%20gemVersionReport'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_gemVersionReportSize'),
smalltalk.method({
selector: unescape('gemVersionReportSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@gemVersionReportSize'];
return self;},
args: [],
source: unescape('gemVersionReportSize%0A%09%5E%20gemVersionReportSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevClass);
(self['@gemVersionReport']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_gemVersionReport", [])]));
(self['@gemVersionReportSize']=smalltalk.send(obj, "_gemVersionReportSize", []));
(self['@stoneVersionReport']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_stoneVersionReport", [])]));
(self['@stoneVersionReportSize']=smalltalk.send(obj, "_stoneVersionReportSize", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09gemVersionReport%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20gemVersionReport.%0A%09gemVersionReportSize%20%3A%3D%20obj%20gemVersionReportSize.%0A%09stoneVersionReport%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20stoneVersionReport.%0A%09stoneVersionReportSize%20%3A%3D%20obj%20stoneVersionReportSize.'),
messageSends: ["parseJSON:", "newObject:", "gemVersionReport", "gemVersionReportSize", "stoneVersionReport", "stoneVersionReportSize"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_stoneVersionReport'),
smalltalk.method({
selector: unescape('stoneVersionReport'),
category: 'accessing',
fn: function (){
var self=this;
return self['@stoneVersionReport'];
return self;},
args: [],
source: unescape('stoneVersionReport%0A%09%5E%20stoneVersionReport'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_stoneVersionReportSize'),
smalltalk.method({
selector: unescape('stoneVersionReportSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@stoneVersionReportSize'];
return self;},
args: [],
source: unescape('stoneVersionReportSize%0A%09%5E%20stoneVersionReportSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClass);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("systemClass");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23systemClass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSystemClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevSystemClassWindow || MaglevSystemClassWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevSystemClassWindow'),
messageSends: [],
referencedClasses: ["MaglevSystemClassWindow"]
}),
smalltalk.MaglevSystemClass.klass);


smalltalk.addClass('MaglevNilClass', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_ifNotMaglevNil_'),
smalltalk.method({
selector: unescape('ifNotMaglevNil%3A'),
category: 'testing',
fn: function (aBlock){
var self=this;
return self;
return self;},
args: ["aBlock"],
source: unescape('ifNotMaglevNil%3A%20aBlock%0A%09%5E%20self'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClass);

smalltalk.addMethod(
unescape('_isMaglevNil'),
smalltalk.method({
selector: unescape('isMaglevNil'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isMaglevNil%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClass);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
category: 'accessing',
fn: function (){
var self=this;
return unescape("%28nil%29");
return self;},
args: [],
source: unescape('string%0A%09%5E%20%27%28nil%29%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClass);


smalltalk.MaglevNilClass.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("nilclass");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23nilclass'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassInline || MaglevNilClassInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevNilClassInline'),
messageSends: [],
referencedClasses: ["MaglevNilClassInline"]
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_", [(20)]));})() : $receiver;
return self['@instance'];
return self;},
args: [],
source: unescape('instance%0A%09instance%20ifNil%3A%20%5Binstance%20%3A%3D%20MaglevObjectSpace%20instance%20reloadObject%3A%2020%5D.%0A%09%5E%20instance'),
messageSends: ["ifNil:", "reloadObject:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassWindow || MaglevNilClassWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevNilClassWindow'),
messageSends: [],
referencedClasses: ["MaglevNilClassWindow"]
}),
smalltalk.MaglevNilClass.klass);


smalltalk.addClass('MaglevRubyWorkspace', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("rubyWorkspace");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23rubyWorkspace'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevRubyWorkspaceInline || MaglevRubyWorkspaceInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevRubyWorkspaceInline'),
messageSends: [],
referencedClasses: ["MaglevRubyWorkspaceInline"]
}),
smalltalk.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevRubyWorkspaceWindow || MaglevRubyWorkspaceWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevRubyWorkspaceWindow'),
messageSends: [],
referencedClasses: ["MaglevRubyWorkspaceWindow"]
}),
smalltalk.MaglevRubyWorkspace.klass);


smalltalk.addClass('MaglevString', smalltalk.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09string%20%3A%3D%20obj%20string.%0A%09isStringComplete%20%3A%3D%20obj%20stringComplete.'),
messageSends: ["parseJSON:", "string", "stringComplete"],
referencedClasses: []
}),
smalltalk.MaglevString);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.%0A%09string%20%3A%3D%20obj%20string.%0A%09isStringComplete%20%3A%3D%20obj%20stringComplete.'),
messageSends: ["parseJSONNotLoaded:", "string", "stringComplete"],
referencedClasses: []
}),
smalltalk.MaglevString);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
category: 'accessing',
fn: function (){
var self=this;
return self['@string'];
return self;},
args: [],
source: unescape('string%0A%09%5E%20string'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevString);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("string");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23string'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevStringInline || MaglevStringInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevStringInline'),
messageSends: [],
referencedClasses: ["MaglevStringInline"]
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevStringWindow || MaglevStringWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevStringWindow'),
messageSends: [],
referencedClasses: ["MaglevStringWindow"]
}),
smalltalk.MaglevString.klass);


smalltalk.addClass('MaglevSymbol', smalltalk.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09super%20parseJSON%3A%20obj.%0A%09string%20%3A%3D%20obj%20string.%0A%09isStringComplete%20%3A%3D%20obj%20stringComplete.'),
messageSends: ["parseJSON:", "string", "stringComplete"],
referencedClasses: []
}),
smalltalk.MaglevSymbol);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;},
args: ["obj"],
source: unescape('parseJSONNotLoaded%3A%20obj%0A%09super%20parseJSONNotLoaded%3A%20obj.%0A%09string%20%3A%3D%20obj%20string.%0A%09isStringComplete%20%3A%3D%20obj%20stringComplete.'),
messageSends: ["parseJSONNotLoaded:", "string", "stringComplete"],
referencedClasses: []
}),
smalltalk.MaglevSymbol);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
category: 'accessing',
fn: function (){
var self=this;
return self['@string'];
return self;},
args: [],
source: unescape('string%0A%09%5E%20string'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbol);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("symbol");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23symbol'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolInline || MaglevSymbolInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevSymbolInline'),
messageSends: [],
referencedClasses: ["MaglevSymbolInline"]
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolWindow || MaglevSymbolWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevSymbolWindow'),
messageSends: [],
referencedClasses: ["MaglevSymbolWindow"]
}),
smalltalk.MaglevSymbol.klass);


smalltalk.addClass('MaglevThread', smalltalk.MaglevObject, ['exception', 'localStorage', 'localStorageSize', 'status', 'isRailsThread'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_exception'),
smalltalk.method({
selector: unescape('exception'),
category: 'accessing',
fn: function (){
var self=this;
return self['@exception'];
return self;},
args: [],
source: unescape('exception%0A%09%5E%20exception'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_hasException'),
smalltalk.method({
selector: unescape('hasException'),
category: 'testing',
fn: function (){
var self=this;
try{(($receiver = self['@exception']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_hasException', fn: function(){return false}})})();})() : $receiver;
(function(){throw({name: 'stReturn', selector: '_hasException', fn: function(){return smalltalk.send(smalltalk.send(self['@exception'], "_isMaglevNil", []), "_not", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_hasException'){return e.fn()} throw(e)}},
args: [],
source: unescape('hasException%0A%09exception%20ifNil%3A%20%5B%5E%20false%5D.%0A%09%5E%20exception%20isMaglevNil%20not'),
messageSends: ["ifNil:", "not", "isMaglevNil"],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_inspection'),
smalltalk.method({
selector: unescape('inspection'),
category: 'accessing',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_hasException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(smalltalk.send(unescape("%23%3CGsProcess%5B"), "__comma", [smalltalk.send(self['@exception'], "_inspection", [])]), "__comma", [unescape("%5D%3E")])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(self, "_inspection", [], smalltalk.MaglevObject)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(smalltalk.send(unescape("%23%3CGsProcess%5B"), "__comma", [smalltalk.send(self['@exception'], "_inspection", [])]), "__comma", [unescape("%5D%3E")])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(self, "_inspection", [], smalltalk.MaglevObject)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_inspection'){return e.fn()} throw(e)}},
args: [],
source: unescape('inspection%0A%09self%20hasException%20%0A%09%09ifTrue%3A%20%5B%5E%20%27%23%3CGsProcess%5B%27%2C%20exception%20inspection%2C%20%27%5D%3E%27%5D%0A%09%09ifFalse%3A%20%5B%5E%20super%20inspection%5D.'),
messageSends: ["ifTrue:ifFalse:", "hasException", unescape("%2C"), "inspection"],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_isRailsThread'),
smalltalk.method({
selector: unescape('isRailsThread'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@isRailsThread'], "__eq", [true]);
return self;},
args: [],
source: unescape('isRailsThread%0A%09%5E%20isRailsThread%20%3D%20true'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_localStorage'),
smalltalk.method({
selector: unescape('localStorage'),
category: 'accessing',
fn: function (){
var self=this;
return self['@localStorage'];
return self;},
args: [],
source: unescape('localStorage%0A%09%5E%20localStorage'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_localStorageSize'),
smalltalk.method({
selector: unescape('localStorageSize'),
category: 'accessing',
fn: function (){
var self=this;
return self['@localStorageSize'];
return self;},
args: [],
source: unescape('localStorageSize%0A%09%5E%20localStorageSize'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
category: 'instance creation',
fn: function (obj){
var self=this;
var objException=nil;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(objException=smalltalk.send(obj, "_at_", ["exception"]));
(($receiver = objException) != nil && $receiver != undefined) ? (function(){return (self['@exception']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [objException]));})() : nil;
(self['@localStorage']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_threadLocalStorage", [])]));
(self['@localStorageSize']=smalltalk.send(obj, "_threadLocalStorageSize", []));
(self['@status']=smalltalk.send(obj, "_status", []));
(self['@isRailsThread']=smalltalk.send(obj, "_isRailsThread", []));
return self;},
args: ["obj"],
source: unescape('parseJSON%3A%20obj%0A%09%7CobjException%7C%0A%09super%20parseJSON%3A%20obj.%0A%09objException%20%3A%3D%20obj%20at%3A%20%27exception%27.%0A%09objException%20ifNotNil%3A%20%5Bexception%20%3A%3D%20MaglevObject%20newObject%3A%20objException%5D.%0A%09localStorage%20%3A%3D%20MaglevObject%20newObject%3A%20obj%20threadLocalStorage.%0A%09localStorageSize%20%3A%3D%20obj%20threadLocalStorageSize.%0A%09status%20%3A%3D%20obj%20status.%0A%09isRailsThread%20%3A%3D%20obj%20isRailsThread.'),
messageSends: ["parseJSON:", "at:", "ifNotNil:", "newObject:", "threadLocalStorage", "threadLocalStorageSize", "status", "isRailsThread"],
referencedClasses: ["MaglevObject"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_proceedWithCallback_'),
smalltalk.method({
selector: unescape('proceedWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/proceed/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('proceedWithCallback%3A%20aBlock%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/proceed/%27%2C%20oop%20asString%0A%09%09data%3A%20Dictionary%20new%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stackFrame_withCallback_'),
smalltalk.method({
selector: unescape('stackFrame%3AwithCallback%3A'),
category: 'interactions',
fn: function (anInteger, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/frame/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;},
args: ["anInteger", "aBlock"],
source: unescape('stackFrame%3A%20anInteger%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27index%27%20put%3A%20anInteger%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/frame/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stackTraceMethodsWithCallback_'),
smalltalk.method({
selector: unescape('stackTraceMethodsWithCallback%3A'),
category: 'interactions',
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/frames/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('stackTraceMethodsWithCallback%3A%20aBlock%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/frames/%27%2C%20oop%20asString%0A%09%09data%3A%20Dictionary%20new%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_status'),
smalltalk.method({
selector: unescape('status'),
category: 'accessing',
fn: function (){
var self=this;
return self['@status'];
return self;},
args: [],
source: unescape('status%0A%09%5E%20status'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stepInto_withCallback_'),
smalltalk.method({
selector: unescape('stepInto%3AwithCallback%3A'),
category: 'interactions',
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/stepInto/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;},
args: ["frameIndex", "aBlock"],
source: unescape('stepInto%3A%20frameIndex%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27index%27%20put%3A%20frameIndex%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/stepInto/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stepOver_withCallback_'),
smalltalk.method({
selector: unescape('stepOver%3AwithCallback%3A'),
category: 'interactions',
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/stepOver/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;},
args: ["frameIndex", "aBlock"],
source: unescape('stepOver%3A%20frameIndex%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27index%27%20put%3A%20frameIndex%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/stepOver/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_trimTo_withCallback_'),
smalltalk.method({
selector: unescape('trimTo%3AwithCallback%3A'),
category: 'interactions',
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/trim/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;},
args: ["frameIndex", "aBlock"],
source: unescape('trimTo%3A%20frameIndex%20withCallback%3A%20aBlock%0A%09%7Cparams%7C%0A%09params%20%3A%3D%20Dictionary%20new%0A%09%09at%3A%20%27index%27%20put%3A%20frameIndex%3B%0A%09%09yourself.%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27code/trim/%27%2C%20oop%20asString%0A%09%09data%3A%20params%0A%09%09withCallback%3A%20aBlock.'),
messageSends: ["at:put:", "yourself", "new", "ajax:data:withCallback:", unescape("%2C"), "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
smalltalk.MaglevThread);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
category: 'constants',
fn: function (){
var self=this;
return smalltalk.symbolFor("thread");
return self;},
args: [],
source: unescape('basetype%0A%09%5E%20%23thread'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevThread.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevThreadInline || MaglevThreadInline);
return self;},
args: [],
source: unescape('inlineViewClass%0A%09%5E%20MaglevThreadInline'),
messageSends: [],
referencedClasses: ["MaglevThreadInline"]
}),
smalltalk.MaglevThread.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
category: 'constants',
fn: function (){
var self=this;
return (smalltalk.MaglevThreadWindow || MaglevThreadWindow);
return self;},
args: [],
source: unescape('windowViewClass%0A%09%5E%20MaglevThreadWindow'),
messageSends: [],
referencedClasses: ["MaglevThreadWindow"]
}),
smalltalk.MaglevThread.klass);


smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects', 'evalObject'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'objects',
fn: function (anOop){
var self=this;
return smalltalk.send(self['@objects'], "_at_ifAbsent_", [anOop, (function(){return smalltalk.send(self, "_reloadObject_", [anOop]);})]);
return self;},
args: ["anOop"],
source: unescape('at%3A%20anOop%0A%09%5E%20objects%20%0A%09%09at%3A%20anOop%0A%09%09ifAbsent%3A%20%5Bself%20reloadObject%3A%20anOop%5D'),
messageSends: ["at:ifAbsent:", "reloadObject:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_at_withCallback_'),
smalltalk.method({
selector: unescape('at%3AwithCallback%3A'),
category: 'objects',
fn: function (anOop, aBlock){
var self=this;
((($receiver = smalltalk.send(self['@objects'], "_includesKey_", [anOop])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);})() : (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);}), (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})]));
return self;},
args: ["anOop", "aBlock"],
source: unescape('at%3A%20anOop%20withCallback%3A%20aBlock%0A%09%28objects%20includesKey%3A%20anOop%29%0A%09%09ifTrue%3A%20%5BaBlock%20value%3A%20%28objects%20at%3A%20anOop%29%5D%0A%09%09ifFalse%3A%20%5Bself%20reloadObject%3A%20anOop%20withCallback%3A%20aBlock%5D.'),
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "reloadObject:withCallback:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_evalObject'),
smalltalk.method({
selector: unescape('evalObject'),
category: 'accessing',
fn: function (){
var self=this;
return self['@evalObject'];
return self;},
args: [],
source: unescape('evalObject%0A%09%5E%20evalObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_evalObject_'),
smalltalk.method({
selector: unescape('evalObject%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@evalObject']=anObject);
return self;},
args: ["anObject"],
source: unescape('evalObject%3A%20anObject%0A%09evalObject%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_hasLoadedOop_'),
smalltalk.method({
selector: unescape('hasLoadedOop%3A'),
category: 'objects',
fn: function (oop){
var self=this;
return smalltalk.send(smalltalk.send(self['@objects'], "_includesKey_", [oop]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@objects'], "_at_", [oop]), "_isLoaded", []);})]);
return self;},
args: ["oop"],
source: unescape('hasLoadedOop%3A%20oop%0A%09%5E%20%28objects%20includesKey%3A%20oop%29%20and%3A%20%5B%28objects%20at%3A%20oop%29%20isLoaded%5D'),
messageSends: ["and:", "includesKey:", "isLoaded", "at:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_hasOop_'),
smalltalk.method({
selector: unescape('hasOop%3A'),
category: 'objects',
fn: function (oop){
var self=this;
return smalltalk.send(self['@objects'], "_includesKey_", [oop]);
return self;},
args: ["oop"],
source: unescape('hasOop%3A%20oop%0A%09%5E%20objects%20includesKey%3A%20oop'),
messageSends: ["includesKey:"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializing',
fn: function (){
var self=this;
(self['@objects']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%09objects%20%3A%3D%20Dictionary%20new.'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_registerWindow_'),
smalltalk.method({
selector: unescape('registerWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self['@objects'], "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_addWindow_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('registerWindow%3A%20aWindow%0A%09%28objects%20at%3A%20aWindow%20object%20oop%29%0A%09%09addWindow%3A%20aWindow.'),
messageSends: ["addWindow:", "at:", "oop", "object"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_'),
smalltalk.method({
selector: unescape('reloadObject%3A'),
category: 'objects',
fn: function (anOop){
var self=this;
var obj=nil;
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]));
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj]);
return self;},
args: ["anOop"],
source: unescape('reloadObject%3A%20anOop%0A%09%7Cobj%7C%0A%09obj%20%3A%3D%20MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20anOop%20asString%0A%09%09data%3A%20Dictionary%20new.%0A%09%5E%20MaglevObject%20newObject%3A%20obj.'),
messageSends: ["ajax:data:", unescape("%2C"), "asString", "new", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3A'),
category: 'objects',
fn: function (anOop, aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;},
args: ["anOop", "aBlock"],
source: unescape('reloadObject%3A%20anOop%20withCallback%3A%20aBlock%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20anOop%20asString%0A%09%09data%3A%20Dictionary%20new%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09aBlock%20value%3A%20%28MaglevObject%20newObject%3A%20obj%29%5D.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "new", "value:", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_params_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3Aparams%3A'),
category: 'objects',
fn: function (anOop, aBlock, aParamsDict){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), aParamsDict, (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;},
args: ["anOop", "aBlock", "aParamsDict"],
source: unescape('reloadObject%3A%20anOop%20withCallback%3A%20aBlock%20params%3A%20aParamsDict%0A%09MaglevAjax%20%0A%09%09ajax%3A%20%27object/index/%27%2C%20anOop%20asString%0A%09%09data%3A%20aParamsDict%0A%09%09withCallback%3A%20%5B%3Aobj%20%7C%20%0A%09%09%09aBlock%20value%3A%20%28MaglevObject%20newObject%3A%20obj%29%5D.'),
messageSends: ["ajax:data:withCallback:", unescape("%2C"), "asString", "value:", "newObject:"],
referencedClasses: ["MaglevAjax", "MaglevObject"]
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_unregisterWindow_'),
smalltalk.method({
selector: unescape('unregisterWindow%3A'),
category: 'interactions',
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self['@objects'], "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_removeWindow_", [aWindow]);
return self;},
args: ["aWindow"],
source: unescape('unregisterWindow%3A%20aWindow%0A%09%28objects%20at%3A%20aWindow%20object%20oop%29%0A%09%09removeWindow%3A%20aWindow.'),
messageSends: ["removeWindow:", "at:", "oop", "object"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_updateObject_'),
smalltalk.method({
selector: unescape('updateObject%3A'),
category: 'objects',
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(anObject, "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})]));
return self;},
args: ["anObject"],
source: unescape('updateObject%3A%20anObject%0A%09anObject%20isLoaded%0A%09%09ifTrue%3A%20%5Bobjects%20at%3A%20anObject%20oop%20put%3A%20anObject%5D.'),
messageSends: ["ifTrue:", "isLoaded", "at:put:", "oop"],
referencedClasses: []
}),
smalltalk.MaglevObjectSpace);


smalltalk.MaglevObjectSpace.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
category: 'singleton',
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
smalltalk.MaglevObjectSpace.klass);


