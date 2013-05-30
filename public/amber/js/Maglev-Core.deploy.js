smalltalk.addPackage('Maglev-Core', {});
smalltalk.addClass('Maglev', smalltalk.Object, ['objectSpace', 'windows', 'bottomNavHtml'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_addWindow_'),
smalltalk.method({
selector: unescape('addWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self, "_renderNavigationItemFor_", [aWindow]);
smalltalk.send(self['@windows'], "_add_", [aWindow]);
smalltalk.send(self, "_showConnectionsFor_", [aWindow]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_with_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3Awith%3AwithCallback%3A'),
fn: function (code, aString, additionalParams, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);smalltalk.send($rec, "_addAll_", [additionalParams]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [unescape("object/evaluate/20"), params, (function(obj){var parsedObj=nil;
(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [obj]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(smalltalk.send(parsedObj, "_isException", []), "_not", []), parsedObj]);})]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_findClassNamesMatching_with_'),
smalltalk.method({
selector: unescape('findClassNamesMatching%3Awith%3A'),
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(unescape("%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findClassNamesMatching%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27.")]), "smalltalk", aBlock]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_findMethodNamesMatching_with_'),
smalltalk.method({
selector: unescape('findMethodNamesMatching%3Awith%3A'),
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(unescape("%7Corganizer%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20organizer%20findMethodNamesMatching%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27.")]), "smalltalk", aBlock]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_implementersOf_withCallback_'),
smalltalk.method({
selector: unescape('implementersOf%3AwithCallback%3A'),
fn: function (aSelector, aBlock){
var self=this;
((($receiver = smalltalk.send(aSelector, "_isString", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_error_", ["The selector should be a string"]);})]));
smalltalk.send(smalltalk.send((smalltalk.MaglevNilClass || MaglevNilClass), "_instance", []), "_evaluateWithoutUpdate_language_withCallback_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("%7Corganizer%20dict%20ruby%20smalltalk%7C%20organizer%20%3A%3D%20ClassOrganizer%20new.%20dict%20%3A%3D%20Array%20new.%20smalltalk%20%3A%3D%20organizer%20implementorsOf%3A%27"), "__comma", [aSelector]), "__comma", [unescape("%27%20asSymbol.%20smalltalk%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%200.%7D%5D.%20ruby%20%3A%3D%20organizer%20rubyImplementorsOf%3A%27")]), "__comma", [aSelector]), "__comma", [unescape("%27%20asSymbol.%20ruby%20do%3A%5B%3Acls%7C%20dict%20addLast%3A%7Bcls.%201.%7D%5D.%201%20to%3A%20dict%20size%20do%3A%5B%3Ai%7C%7Ccls%7C%20cls%3A%3D%20%28dict%20at%3A%20i%29%20at%3A1.%20%28cls%20class%20%3D%3D%20GsNMethod%29%20ifTrue%3A%5B%28dict%20at%3Ai%29%20at%3A1%20put%3A%20cls%20inClass%5D%5D.%20dict")]), "smalltalk", aBlock]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@windows']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@bottomNavHtml']=smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [smalltalk.send(unescape("%23windows-navigation"), "_asJQuery", [])]));
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_objectSpace'),
smalltalk.method({
selector: unescape('objectSpace'),
fn: function (){
var self=this;
(($receiver = self['@objectSpace']) == nil || $receiver == undefined) ? (function(){return (self['@objectSpace']=smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []));})() : $receiver;
return self['@objectSpace'];
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_removeWindow_'),
smalltalk.method({
selector: unescape('removeWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(aWindow, "_navigationItem", []), "_asJQuery", []), "_remove", []);
smalltalk.send(self['@windows'], "_remove_", [aWindow]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_renderNavigationItemFor_'),
smalltalk.method({
selector: unescape('renderNavigationItemFor%3A'),
fn: function (aWindow){
var self=this;
var navItem=nil;
(navItem=smalltalk.send(smalltalk.send(self['@bottomNavHtml'], "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_class_", [unescape("btn%20btn-info%20window-navigation-item")]);smalltalk.send($rec, "_style_", [unescape("padding%3A%204px%202px%202px%204px%3B%20margin-top%3A%205px%3B")]);smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(aWindow, "_moveToFront", []);})]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(aWindow, "_renderNavigationOn_", [self['@bottomNavHtml']]);})]);})(smalltalk.send(self['@bottomNavHtml'], "_a", []));})]));
smalltalk.send(aWindow, "_navigationItem_", [navItem]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showConnectionsFor_'),
smalltalk.method({
selector: unescape('showConnectionsFor%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(self['@windows'], "_do_", [(function(window){smalltalk.send(window, "_checkAddConnectionTo_", [aWindow]);return smalltalk.send(aWindow, "_checkAddConnectionTo_", [window]);})]);
return self;}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showObjectWindow_'),
smalltalk.method({
selector: unescape('showObjectWindow%3A'),
fn: function (oop){
var self=this;
try{var window=nil;
((($receiver = smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_hasLoadedOop_", [oop])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return smalltalk.send(self, "_showReloadObjectWindow_", [oop])}})})();})]));
(window=smalltalk.send(smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_at_", [oop]), "_windowViewComponent", []));
smalltalk.send(window, "_appendToWorkspace", []);
(function(){throw({name: 'stReturn', selector: '_showObjectWindow_', fn: function(){return window}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_showObjectWindow_'){return e.fn()} throw(e)}}
}),
smalltalk.Maglev);

smalltalk.addMethod(
unescape('_showReloadObjectWindow_'),
smalltalk.method({
selector: unescape('showReloadObjectWindow%3A'),
fn: function (oop){
var self=this;
var window=nil;
(window=smalltalk.send((smalltalk.MaglevWaitingWindow || MaglevWaitingWindow), "_new", []));
smalltalk.send(window, "_appendToWorkspace", []);
smalltalk.send(smalltalk.send(self, "_objectSpace", []), "_reloadObject_withCallback_", [oop, (function(object){var objWindow=nil;
(objWindow=smalltalk.send(object, "_windowViewComponentReplace_", [window]));return smalltalk.send(objWindow, "_renderReplace", []);})]);
return window;
return self;}
}),
smalltalk.Maglev);


smalltalk.Maglev.klass.iVarNames = ['instance','defaultWorkspaceId','persistentRootId','maglevSystemId','evalObjectId'];
smalltalk.addMethod(
unescape('_defaultWorkspaceId'),
smalltalk.method({
selector: unescape('defaultWorkspaceId'),
fn: function (){
var self=this;
return self['@defaultWorkspaceId'];
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_defaultWorkspaceId_'),
smalltalk.method({
selector: unescape('defaultWorkspaceId%3A'),
fn: function (anInteger){
var self=this;
(self['@defaultWorkspaceId']=anInteger);
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_evalObjectId'),
smalltalk.method({
selector: unescape('evalObjectId'),
fn: function (){
var self=this;
return self['@evalObjectId'];
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_evalObjectId_'),
smalltalk.method({
selector: unescape('evalObjectId%3A'),
fn: function (anInteger){
var self=this;
(self['@evalObjectId']=anInteger);
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send((smalltalk.Maglev || Maglev), "_new", []));})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_maglevSystemId'),
smalltalk.method({
selector: unescape('maglevSystemId'),
fn: function (){
var self=this;
return self['@maglevSystemId'];
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_maglevSystemId_'),
smalltalk.method({
selector: unescape('maglevSystemId%3A'),
fn: function (anInteger){
var self=this;
(self['@maglevSystemId']=anInteger);
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_openWindow_'),
smalltalk.method({
selector: unescape('openWindow%3A'),
fn: function (anInteger){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_showObjectWindow_", [anInteger]);
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_persistentRootId'),
smalltalk.method({
selector: unescape('persistentRootId'),
fn: function (){
var self=this;
return self['@persistentRootId'];
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_persistentRootId_'),
smalltalk.method({
selector: unescape('persistentRootId%3A'),
fn: function (anInteger){
var self=this;
(self['@persistentRootId']=anInteger);
return self;}
}),
smalltalk.Maglev.klass);

smalltalk.addMethod(
unescape('_ready'),
smalltalk.method({
selector: unescape('ready'),
fn: function (){
var self=this;
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_defaultWorkspaceId", [])]);
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_persistentRootId", [])]);
smalltalk.send(self, "_openWindow_", [smalltalk.send(self, "_maglevSystemId", [])]);
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_evalObject_", [smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_", [smalltalk.send(self, "_evalObjectId", [])])]);
smalltalk.send((smalltalk.MaglevHaltedThreadListener || MaglevHaltedThreadListener), "_start", []);
smalltalk.send((smalltalk.MaglevWebBrowserWindow || MaglevWebBrowserWindow), "_showNew", []);
return self;}
}),
smalltalk.Maglev.klass);


smalltalk.addClass('MaglevObject', smalltalk.Object, ['oop', 'instVars', 'instVarsSize', 'virtualClassObject', 'classObject', 'inspection', 'isLoaded', 'isException', 'windows', 'customTabs'], 'Maglev-Core');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_oop", []), "__eq", [smalltalk.send(anObject, "_oop", [])]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('__eq_eq'),
smalltalk.method({
selector: unescape('%3D%3D'),
fn: function (anObject){
var self=this;
return smalltalk.send(smalltalk.send(self, "_oop", []), "__eq_eq", [smalltalk.send(anObject, "_oop", [])]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_addWindow_'),
smalltalk.method({
selector: unescape('addWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_add_", [aWindow]);
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_addWindow_", [aWindow]);
return aWindow;
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_classObject'),
smalltalk.method({
selector: unescape('classObject'),
fn: function (){
var self=this;
return self['@classObject'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_customTabs'),
smalltalk.method({
selector: unescape('customTabs'),
fn: function (){
var self=this;
return self['@customTabs'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ensureIsLoaded_from_to_'),
smalltalk.method({
selector: unescape('ensureIsLoaded%3Afrom%3Ato%3A'),
fn: function (collectionName, from, to){
var self=this;
try{var obj=nil;
var params=nil;
((($receiver = smalltalk.send(self, "_isLoaded_from_to_", [collectionName, from, to])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_', fn: function(){return self}})})();})]));
(params=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_from"]), from]);smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_to"]), to]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params]));
smalltalk.send(self, "_parseJSON_", [obj]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_ensureIsLoaded_from_to_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ensureIsLoaded_from_to_withCallback_'),
smalltalk.method({
selector: unescape('ensureIsLoaded%3Afrom%3Ato%3AwithCallback%3A'),
fn: function (collectionName, from, to, aBlock){
var self=this;
try{var params=nil;
((($receiver = smalltalk.send(self, "_isLoaded_from_to_", [collectionName, from, to])).klass === smalltalk.Boolean) ? ($receiver ? (function(){smalltalk.send(aBlock, "_value", []);return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_withCallback_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){smalltalk.send(aBlock, "_value", []);return (function(){throw({name: 'stReturn', selector: '_ensureIsLoaded_from_to_withCallback_', fn: function(){return self}})})();})]));
(params=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_from"]), from]);smalltalk.send($rec, "_at_put_", [smalltalk.send(smalltalk.send("range_", "__comma", [smalltalk.send(collectionName, "_asString", [])]), "__comma", ["_to"]), to]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params, (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_ensureIsLoaded_from_to_withCallback_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluate_language_withCallback_'),
smalltalk.method({
selector: unescape('evaluate%3Alanguage%3AwithCallback%3A'),
fn: function (code, aString, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_with_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3Awith%3AwithCallback%3A'),
fn: function (code, aString, additionalParams, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);smalltalk.send($rec, "_addAll_", [additionalParams]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_evaluateWithoutUpdate_language_withCallback_'),
smalltalk.method({
selector: unescape('evaluateWithoutUpdate%3Alanguage%3AwithCallback%3A'),
fn: function (code, aString, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", aString]);smalltalk.send($rec, "_at_put_", ["code", code]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/evaluate/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, (function(obj){var isException=nil;
var parsedObj=nil;
(self['@isException']=smalltalk.send(obj, "_at_", [(1)]));(parsedObj=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_at_", [(2)])]));return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(self['@isException'], "_not", []), parsedObj]);})]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_fullReloadWithCallback_'),
smalltalk.method({
selector: unescape('fullReloadWithCallback%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_withCallback_", [self['@oop'], aBlock]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_hasInstVar_'),
smalltalk.method({
selector: unescape('hasInstVar%3A'),
fn: function (instVarName){
var self=this;
try{smalltalk.send(self, "_instVarsDo_", [(function(ivName, ivValue){return ((($receiver = smalltalk.send(ivName, "__eq", [instVarName])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_hasInstVar_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_hasInstVar_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_hasInstVars'),
smalltalk.method({
selector: unescape('hasInstVars'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self['@instVars'], "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_ifNotMaglevNil_'),
smalltalk.method({
selector: unescape('ifNotMaglevNil%3A'),
fn: function (aBlock){
var self=this;
return smalltalk.send(aBlock, "_value", []);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponent'),
smalltalk.method({
selector: unescape('inlineViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentFull'),
smalltalk.method({
selector: unescape('inlineViewComponentFull'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_fullInspection_", [true]);smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentNavItem'),
smalltalk.method({
selector: unescape('inlineViewComponentNavItem'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);smalltalk.send($rec, "_hasDropDown_", [false]);smalltalk.send($rec, "_isDraggable_", [false]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentShort'),
smalltalk.method({
selector: unescape('inlineViewComponentShort'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_isShort_", [true]);smalltalk.send($rec, "_isDraggable_", [false]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_inlineViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inlineViewComponentWithDepth_'),
smalltalk.method({
selector: unescape('inlineViewComponentWithDepth%3A'),
fn: function (anInteger){
var self=this;
return (function($rec){smalltalk.send($rec, "_depth_", [anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_inlineViewComponent", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_inspection'),
smalltalk.method({
selector: unescape('inspection'),
fn: function (){
var self=this;
return self['@inspection'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarAt_'),
smalltalk.method({
selector: unescape('instVarAt%3A'),
fn: function (aString){
var self=this;
try{smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", [smalltalk.send("instVar not found in forwarder object: ", "__comma", [aString])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_instVarAt_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarAt_ifAbsent_'),
smalltalk.method({
selector: unescape('instVarAt%3AifAbsent%3A'),
fn: function (aString, anObject){
var self=this;
try{smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_instVarAt_ifAbsent_', fn: function(){return anObject}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_instVarAt_ifAbsent_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVars'),
smalltalk.method({
selector: unescape('instVars'),
fn: function (){
var self=this;
return self['@instVars'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarsDo_'),
smalltalk.method({
selector: unescape('instVarsDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@instVars'], "_keysAndValuesDo_", [(function(index, iv){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(iv, "_key", []), smalltalk.send(iv, "_value", [])]);})]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instVarsSize'),
smalltalk.method({
selector: unescape('instVarsSize'),
fn: function (){
var self=this;
return self['@instVarsSize'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_instancesViewComponent'),
smalltalk.method({
selector: unescape('instancesViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_instancesViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isException'),
smalltalk.method({
selector: unescape('isException'),
fn: function (){
var self=this;
return self['@isException'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isGsNMethod'),
smalltalk.method({
selector: unescape('isGsNMethod'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
fn: function (){
var self=this;
return self['@isLoaded'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isLoaded_from_to_'),
smalltalk.method({
selector: unescape('isLoaded%3Afrom%3Ato%3A'),
fn: function (collectionName, from, to){
var self=this;
try{var collection=nil;
(collection=smalltalk.send(self, "_perform_", [collectionName]));
smalltalk.send(smalltalk.send(from, "_to_", [to]), "_do_", [(function(index){return ((($receiver = smalltalk.send(collection, "_includesKey_", [index])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return false}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_isLoaded_from_to_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_isLoaded_from_to_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_isMaglevNil'),
smalltalk.method({
selector: unescape('isMaglevNil'),
fn: function (){
var self=this;
return false;
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_oop'),
smalltalk.method({
selector: unescape('oop'),
fn: function (){
var self=this;
return self['@oop'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsAllElements'),
smalltalk.method({
selector: unescape('paramsAllElements'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsFullString'),
smalltalk.method({
selector: unescape('paramsFullString'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["fullString", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsFullStringAndElements'),
smalltalk.method({
selector: unescape('paramsFullStringAndElements'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["fullString", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_paramsThreadFrame'),
smalltalk.method({
selector: unescape('paramsThreadFrame'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["allElements", true]);smalltalk.send($rec, "_at_put_", ["fullString", true]);smalltalk.send($rec, "_at_put_", ["fullMethod", true]);smalltalk.send($rec, "_at_put_", ["noBehavior", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
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
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
(($receiver = smalltalk.send(self, "_isLoaded", [])) == nil || $receiver == undefined) ? (function(){return (self['@isLoaded']=false);})() : $receiver;
(self['@oop']=smalltalk.send(obj, "_oop", []));
(self['@inspection']=smalltalk.send(obj, "_inspection", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_removeWindow_'),
smalltalk.method({
selector: unescape('removeWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self, "_windows", []), "_remove_", [aWindow]);
smalltalk.send(smalltalk.send((smalltalk.Maglev || Maglev), "_instance", []), "_removeWindow_", [aWindow]);
return aWindow;
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_shortInspection'),
smalltalk.method({
selector: unescape('shortInspection'),
fn: function (){
var self=this;
try{((($receiver = ((($receiver = smalltalk.send(self['@inspection'], "_size", [])).klass === smalltalk.Number) ? $receiver >(10) : smalltalk.send($receiver, "__gt", [(10)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return smalltalk.send(smalltalk.send(self['@inspection'], "_copyFrom_to_", [(1), (10)]), "__comma", ["..."])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return self['@inspection']}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return smalltalk.send(smalltalk.send(self['@inspection'], "_copyFrom_to_", [(1), (10)]), "__comma", ["..."])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_shortInspection', fn: function(){return self['@inspection']}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_shortInspection'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_virtualClassObject'),
smalltalk.method({
selector: unescape('virtualClassObject'),
fn: function (){
var self=this;
return self['@virtualClassObject'];
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponent'),
smalltalk.method({
selector: unescape('windowViewComponent'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_object_", [self]);smalltalk.send($rec, "_initialize", []);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_basicNew", []));
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windowViewComponentReplace_'),
smalltalk.method({
selector: unescape('windowViewComponentReplace%3A'),
fn: function (aWindow){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_windowViewClass", []), "_newReplace_with_", [aWindow, self]);
return self;}
}),
smalltalk.MaglevObject);

smalltalk.addMethod(
unescape('_windows'),
smalltalk.method({
selector: unescape('windows'),
fn: function (){
var self=this;
(($receiver = self['@windows']) == nil || $receiver == undefined) ? (function(){return (self['@windows']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self['@windows'];
return self;}
}),
smalltalk.MaglevObject);


smalltalk.MaglevObject.klass.iVarNames = ['basetypes','doesUpdateObjectSpace'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("object");
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_basetypes'),
smalltalk.method({
selector: unescape('basetypes'),
fn: function (){
var self=this;
return self['@basetypes'];
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_doesUpdateObjectSpace'),
smalltalk.method({
selector: unescape('doesUpdateObjectSpace'),
fn: function (){
var self=this;
(($receiver = self['@doesUpdateObjectSpace']) == nil || $receiver == undefined) ? (function(){return (self['@doesUpdateObjectSpace']=true);})() : $receiver;
return self['@doesUpdateObjectSpace'];
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_doesUpdateObjectSpace_'),
smalltalk.method({
selector: unescape('doesUpdateObjectSpace%3A'),
fn: function (aBoolean){
var self=this;
(self['@doesUpdateObjectSpace']=aBoolean);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initializeBasetypes", []);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_initializeBasetypes'),
smalltalk.method({
selector: unescape('initializeBasetypes'),
fn: function (){
var self=this;
(self['@basetypes']=(function($rec){smalltalk.send($rec, "_at_put_", [smalltalk.send(self, "_basetype", []), self]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send(smalltalk.send(self, "_allSubclasses", []), "_do_", [(function(cls){return smalltalk.send(self['@basetypes'], "_at_put_", [smalltalk.send(cls, "_basetype", []), cls]);})]);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInline || MaglevObjectInline);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_instancesViewClass'),
smalltalk.method({
selector: unescape('instancesViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevObjectInstancesView || MaglevObjectInstancesView);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newFor_'),
smalltalk.method({
selector: unescape('newFor%3A'),
fn: function (aBaseType){
var self=this;
var cls=nil;
(cls=smalltalk.send(smalltalk.send(self, "_basetypes", []), "_at_ifAbsent_", [smalltalk.send(aBaseType, "_asSymbol", []), (function(){return smalltalk.send(self, "_error_", [smalltalk.send("Could not create forwarder object for invalid base type ", "__comma", [aBaseType])]);})]));
return smalltalk.send(cls, "_new", []);
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObject_'),
smalltalk.method({
selector: unescape('newObject%3A'),
fn: function (obj){
var self=this;
var object=nil;
(object=smalltalk.send(self, "_parseJSON_", [obj]));
((($receiver = smalltalk.send(self, "_doesUpdateObjectSpace", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_updateObject_", [object]);})]));
return object;
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_newObjectWithoutUpdate_'),
smalltalk.method({
selector: unescape('newObjectWithoutUpdate%3A'),
fn: function (obj){
var self=this;
var before=nil;
var result=nil;
(before=smalltalk.send(self, "_doesUpdateObjectSpace", []));
(result=smalltalk.send(self, "_newObject_", [obj]));
(self['@doesUpdateObjectSpace']=before);
return result;
return self;}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
try{var object=nil;
(object=smalltalk.send(self, "_newFor_", [smalltalk.send(obj, "_basetype", [])]));
((($receiver = smalltalk.send(obj, "_loaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSON_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_parseJSON_', fn: function(){return (function($rec){smalltalk.send($rec, "_parseJSONNotLoaded_", [obj]);return smalltalk.send($rec, "_yourself", []);})(object)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_parseJSON_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevObject.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevObjectWindow || MaglevObjectWindow);
return self;}
}),
smalltalk.MaglevObject.klass);


smalltalk.addClass('MaglevArray', smalltalk.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elements", []), "_at_", [anInteger]);
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_do_'),
smalltalk.method({
selector: unescape('do%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [aBlock]);
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
fn: function (){
var self=this;
return self['@elements'];
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_elementsSize'),
smalltalk.method({
selector: unescape('elementsSize'),
fn: function (){
var self=this;
return self['@elementsSize'];
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_hasElements'),
smalltalk.method({
selector: unescape('hasElements'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementsSize", []), "__eq_eq", [smalltalk.send(smalltalk.send(self, "_elements", []), "_size", [])]);
return self;}
}),
smalltalk.MaglevArray);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(self['@elementsSize']=smalltalk.send(obj, "_elementsSize", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(index, element){return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);
return self;}
}),
smalltalk.MaglevArray);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("array");
return self;}
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevArrayInline || MaglevArrayInline);
return self;}
}),
smalltalk.MaglevArray.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevArrayWindow || MaglevArrayWindow);
return self;}
}),
smalltalk.MaglevArray.klass);


smalltalk.addClass('MaglevBoolean', smalltalk.MaglevObject, ['value'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@value']=smalltalk.send(obj, "_value", []));
return self;}
}),
smalltalk.MaglevBoolean);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@value']=smalltalk.send(obj, "_value", []));
return self;}
}),
smalltalk.MaglevBoolean);

smalltalk.addMethod(
unescape('_value'),
smalltalk.method({
selector: unescape('value'),
fn: function (){
var self=this;
return self['@value'];
return self;}
}),
smalltalk.MaglevBoolean);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("boolean");
return self;}
}),
smalltalk.MaglevBoolean.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevBooleanInline || MaglevBooleanInline);
return self;}
}),
smalltalk.MaglevBoolean.klass);


smalltalk.addClass('MaglevDictionary', smalltalk.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anInteger){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elements", []), "_at_", [anInteger]);
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKey_'),
smalltalk.method({
selector: unescape('atKey%3A'),
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(assoc, "_key", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKey_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKey_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKey_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKeyInspection_'),
smalltalk.method({
selector: unescape('atKeyInspection%3A'),
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(smalltalk.send(assoc, "_key", []), "_inspection", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKeyInspection_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKeyInspection_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKeyInspection_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_atKeyString_'),
smalltalk.method({
selector: unescape('atKeyString%3A'),
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(smalltalk.send(assoc, "_key", []), "_string", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_atKeyString_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_atKeyString_', fn: function(){return smalltalk.send(assoc, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", ["Object is not in the collection"]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_atKeyString_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_elements'),
smalltalk.method({
selector: unescape('elements'),
fn: function (){
var self=this;
return self['@elements'];
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_elementsSize'),
smalltalk.method({
selector: unescape('elementsSize'),
fn: function (){
var self=this;
return self['@elementsSize'];
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_hasElements'),
smalltalk.method({
selector: unescape('hasElements'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_elementsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_includesKey_'),
smalltalk.method({
selector: unescape('includesKey%3A'),
fn: function (anObject){
var self=this;
try{smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return ((($receiver = smalltalk.send(anObject, "__eq", [smalltalk.send(assoc, "_key", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return true}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return true}})})();})]));})]);
(function(){throw({name: 'stReturn', selector: '_includesKey_', fn: function(){return false}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_includesKey_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_isFullyLoaded'),
smalltalk.method({
selector: unescape('isFullyLoaded'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_elementsSize", []), "__eq_eq", [smalltalk.send(smalltalk.send(self, "_elements", []), "_size", [])]);
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_keysAndValuesDo_'),
smalltalk.method({
selector: unescape('keysAndValuesDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@elements'], "_keysAndValuesDo_", [(function(index, kv){return smalltalk.send(aBlock, "_value_value_", [smalltalk.send(kv, "_key", []), smalltalk.send(kv, "_value", [])]);})]);
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = self['@elements']) == nil || $receiver == undefined) ? (function(){return (self['@elements']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
(self['@elementsSize']=smalltalk.send(obj, "_elementsSize", []));
smalltalk.send(smalltalk.send(obj, "_elements", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@elements'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);
return self;}
}),
smalltalk.MaglevDictionary);

smalltalk.addMethod(
unescape('_valuesDo_'),
smalltalk.method({
selector: unescape('valuesDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_elements", []), "_do_", [(function(assoc){return smalltalk.send(aBlock, "_value_", [smalltalk.send(assoc, "_value", [])]);})]);
return self;}
}),
smalltalk.MaglevDictionary);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("dictionary");
return self;}
}),
smalltalk.MaglevDictionary.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevHashInline || MaglevHashInline);
return self;}
}),
smalltalk.MaglevDictionary.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevHashWindow || MaglevHashWindow);
return self;}
}),
smalltalk.MaglevDictionary.klass);


smalltalk.addClass('MaglevHash', smalltalk.MaglevDictionary, ['elements', 'elementsSize'], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("hash");
return self;}
}),
smalltalk.MaglevHash.klass);


smalltalk.addClass('MaglevException', smalltalk.MaglevObject, ['gsResumable', 'gsTrappable', 'gsNumber', 'isDBEHalt'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_isDBEHalt'),
smalltalk.method({
selector: unescape('isDBEHalt'),
fn: function (){
var self=this;
return self['@isDBEHalt'];
return self;}
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_isResumable'),
smalltalk.method({
selector: unescape('isResumable'),
fn: function (){
var self=this;
return self['@gsResumable'];
return self;}
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_isTrappable'),
smalltalk.method({
selector: unescape('isTrappable'),
fn: function (){
var self=this;
return self['@gsTrappable'];
return self;}
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
fn: function (){
var self=this;
return self['@gsNumber'];
return self;}
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@gsTrappable']=smalltalk.send(obj, "_gsTrappable", []));
(self['@gsResumable']=smalltalk.send(obj, "_gsResumable", []));
(self['@gsNumber']=smalltalk.send(obj, "_at_", ["gsNumber"]));
(self['@isDBEHalt']=smalltalk.send(obj, "_isDBEHalt", []));
return self;}
}),
smalltalk.MaglevException);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@gsTrappable']=smalltalk.send(obj, "_gsTrappable", []));
(self['@gsResumable']=smalltalk.send(obj, "_gsResumable", []));
(self['@gsNumber']=smalltalk.send(obj, "_at_", ["gsNumber"]));
(self['@isDBEHalt']=smalltalk.send(obj, "_isDBEHalt", []));
return self;}
}),
smalltalk.MaglevException);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("exception");
return self;}
}),
smalltalk.MaglevException.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevExceptionInline || MaglevExceptionInline);
return self;}
}),
smalltalk.MaglevException.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevExceptionWindow || MaglevExceptionWindow);
return self;}
}),
smalltalk.MaglevException.klass);


smalltalk.addClass('MaglevFixnum', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
fn: function (){
var self=this;
return smalltalk.send(self['@inspection'], "_asNumber", []);
return self;}
}),
smalltalk.MaglevFixnum);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("fixnum");
return self;}
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumInline || MaglevFixnumInline);
return self;}
}),
smalltalk.MaglevFixnum.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevFixnumWindow || MaglevFixnumWindow);
return self;}
}),
smalltalk.MaglevFixnum.klass);


smalltalk.addClass('MaglevFloat', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
fn: function (){
var self=this;
return smalltalk.send(self['@inspection'], "_asNumber", []);
return self;}
}),
smalltalk.MaglevFloat);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("float");
return self;}
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevFloatInline || MaglevFloatInline);
return self;}
}),
smalltalk.MaglevFloat.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevFloatWindow || MaglevFloatWindow);
return self;}
}),
smalltalk.MaglevFloat.klass);


smalltalk.addClass('MaglevGsNMethod', smalltalk.MaglevObject, ['selectorString', 'argsAndTemps', 'descrForStack'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_argsAndTemps'),
smalltalk.method({
selector: unescape('argsAndTemps'),
fn: function (){
var self=this;
return self['@argsAndTemps'];
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_compileRubySourceCode_withCallback_'),
smalltalk.method({
selector: unescape('compileRubySourceCode%3AwithCallback%3A'),
fn: function (sourceCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_inClass", []), "_evaluateWithoutUpdate_language_with_withCallback_", [sourceCode, "rubyClass", smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_compileSmalltalkSourceCode_withCallback_'),
smalltalk.method({
selector: unescape('compileSmalltalkSourceCode%3AwithCallback%3A'),
fn: function (sourceCode, aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_inClass", []), "_evaluateWithoutUpdate_language_with_withCallback_", [smalltalk.send(smalltalk.send(unescape("self%20compile%3A%20%27"), "__comma", [smalltalk.send(sourceCode, "_escapedString", [])]), "__comma", [unescape("%27.")]), "smalltalk", smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfo'),
smalltalk.method({
selector: unescape('debugInfo'),
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_debugInfo")]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfoFileNameOffset'),
smalltalk.method({
selector: unescape('debugInfoFileNameOffset'),
fn: function (){
var self=this;
return (4);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_debugInfoSourceOffset'),
smalltalk.method({
selector: unescape('debugInfoSourceOffset'),
fn: function (){
var self=this;
return (2);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_descrForStack'),
smalltalk.method({
selector: unescape('descrForStack'),
fn: function (){
var self=this;
return self['@descrForStack'];
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_environmentId'),
smalltalk.method({
selector: unescape('environmentId'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_selector", []), "_number", []), "_bitShift_", [(0) - smalltalk.send(self, "_siSelectorIdEnvShift", [])]), "_bitAnd_", [smalltalk.send(self, "_selectorIdEnvMask", [])]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_filename'),
smalltalk.method({
selector: unescape('filename'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_debugInfo", []), "_at_", [smalltalk.send(self, "_debugInfoFileNameOffset", [])]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_fullReloadWithCallback_'),
smalltalk.method({
selector: unescape('fullReloadWithCallback%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_withCallback_params_", [self['@oop'], aBlock, smalltalk.send(self, "_paramsFullString", [])]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_inClass'),
smalltalk.method({
selector: unescape('inClass'),
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_inClass")]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_isGsNMethod'),
smalltalk.method({
selector: unescape('isGsNMethod'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@selectorString']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_selectorString", [])]));
(self['@argsAndTemps']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_argsAndTemps", [])]));
(self['@descrForStack']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_descrForStack", [])]));
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@selectorString']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_selectorString", [])]));
(self['@descrForStack']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_descrForStack", [])]));
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_rubyFullName'),
smalltalk.method({
selector: unescape('rubyFullName'),
fn: function (){
var self=this;
return "a GsNMethod";
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selector'),
smalltalk.method({
selector: unescape('selector'),
fn: function (){
var self=this;
return smalltalk.send(self, "_instVarAt_", [unescape("@_st_selector")]);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selectorIdEnvMask'),
smalltalk.method({
selector: unescape('selectorIdEnvMask'),
fn: function (){
var self=this;
return (255);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_selectorString'),
smalltalk.method({
selector: unescape('selectorString'),
fn: function (){
var self=this;
return self['@selectorString'];
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_siSelectorIdEnvShift'),
smalltalk.method({
selector: unescape('siSelectorIdEnvShift'),
fn: function (){
var self=this;
return (53);
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_smalltalkFullName'),
smalltalk.method({
selector: unescape('smalltalkFullName'),
fn: function (){
var self=this;
return "a GsNMethod";
return self;}
}),
smalltalk.MaglevGsNMethod);

smalltalk.addMethod(
unescape('_sourceString'),
smalltalk.method({
selector: unescape('sourceString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_debugInfo", []), "_at_", [smalltalk.send(self, "_debugInfoSourceOffset", [])]), "_string", []);
return self;}
}),
smalltalk.MaglevGsNMethod);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("gsnmethod");
return self;}
}),
smalltalk.MaglevGsNMethod.klass);


smalltalk.addClass('MaglevInvalidObject', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.MaglevInvalidObject.klass.iVarNames = ['instance'];
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
smalltalk.MaglevInvalidObject.klass);


smalltalk.addClass('MaglevMaglevRecordBase', smalltalk.MaglevObject, ['attributes', 'attributesSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_attributeAt_'),
smalltalk.method({
selector: unescape('attributeAt%3A'),
fn: function (aString){
var self=this;
try{smalltalk.send(self['@attributes'], "_keysAndValuesDo_", [(function(index, iv){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(iv, "_key", []), "_string", []), "__eq", [smalltalk.send(aString, "_asString", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_attributeAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_attributeAt_', fn: function(){return smalltalk.send(iv, "_value", [])}})})();})]));})]);
smalltalk.send(self, "_error_", [smalltalk.send("attribute not found in forwarder object: ", "__comma", [aString])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_attributeAt_'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_attributes'),
smalltalk.method({
selector: unescape('attributes'),
fn: function (){
var self=this;
return self['@attributes'];
return self;}
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_attributesSize'),
smalltalk.method({
selector: unescape('attributesSize'),
fn: function (){
var self=this;
return self['@attributesSize'];
return self;}
}),
smalltalk.MaglevMaglevRecordBase);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(($receiver = smalltalk.send(obj, "_at_", ["attributes"])) != nil && $receiver != undefined) ? (function(){(($receiver = self['@attributes']) == nil || $receiver == undefined) ? (function(){return (self['@attributes']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;(self['@attributesSize']=smalltalk.send(obj, "_attributesSize", []));return smalltalk.send(smalltalk.send(obj, "_attributes", []), "_keysAndValuesDo_", [(function(index, assoc){var key=nil;
var value=nil;
(key=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(1)])]));(value=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(assoc, "_at_", [(2)])]));return smalltalk.send(self['@attributes'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send(key, "__minus_gt", [value])]);})]);})() : nil;
return self;}
}),
smalltalk.MaglevMaglevRecordBase);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("maglevRecordBase");
return self;}
}),
smalltalk.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevMaglevRecordBaseInline || MaglevMaglevRecordBaseInline);
return self;}
}),
smalltalk.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevMaglevRecordBaseWindow || MaglevMaglevRecordBaseWindow);
return self;}
}),
smalltalk.MaglevMaglevRecordBase.klass);


smalltalk.addClass('MaglevModule', smalltalk.MaglevObject, ['includedModules', 'includedModulesSize', 'constants', 'constantsSize', 'rubyFullName', 'smalltalkFullName', 'superList'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_allSelectorsWithCallback_'),
smalltalk.method({
selector: unescape('allSelectorsWithCallback%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/selectors/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_constants'),
smalltalk.method({
selector: unescape('constants'),
fn: function (){
var self=this;
return self['@constants'];
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_constantsSize'),
smalltalk.method({
selector: unescape('constantsSize'),
fn: function (){
var self=this;
return self['@constantsSize'];
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_ensureSuperListLoadedWithCallback_'),
smalltalk.method({
selector: unescape('ensureSuperListLoadedWithCallback%3A'),
fn: function (aBlock){
var self=this;
(($receiver = self['@superList']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), smalltalk.send(self, "_paramsSuperList", []), (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);})() : (function(){return smalltalk.send(aBlock, "_value", []);})();
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_hasConstants'),
smalltalk.method({
selector: unescape('hasConstants'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_constantsSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_hasIncludedModules'),
smalltalk.method({
selector: unescape('hasIncludedModules'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_includedModulesSize", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]));
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_includedModules'),
smalltalk.method({
selector: unescape('includedModules'),
fn: function (){
var self=this;
return self['@includedModules'];
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_includedModulesSize'),
smalltalk.method({
selector: unescape('includedModulesSize'),
fn: function (){
var self=this;
return self['@includedModulesSize'];
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_paramsSuperList'),
smalltalk.method({
selector: unescape('paramsSuperList'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["superList", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
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
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_rubyFullName'),
smalltalk.method({
selector: unescape('rubyFullName'),
fn: function (){
var self=this;
return smalltalk.send(self['@rubyFullName'], "_string", []);
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_smalltalkFullName'),
smalltalk.method({
selector: unescape('smalltalkFullName'),
fn: function (){
var self=this;
return smalltalk.send(self['@smalltalkFullName'], "_string", []);
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_sourceCodeFor_language_withCallback_'),
smalltalk.method({
selector: unescape('sourceCodeFor%3Alanguage%3AwithCallback%3A'),
fn: function (selectorString, lang, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["language", lang]);smalltalk.send($rec, "_at_put_", ["selector", selectorString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/code/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;}
}),
smalltalk.MaglevModule);

smalltalk.addMethod(
unescape('_superList'),
smalltalk.method({
selector: unescape('superList'),
fn: function (){
var self=this;
return self['@superList'];
return self;}
}),
smalltalk.MaglevModule);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("module");
return self;}
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevModuleInline || MaglevModuleInline);
return self;}
}),
smalltalk.MaglevModule.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevModuleWindow || MaglevModuleWindow);
return self;}
}),
smalltalk.MaglevModule.klass);


smalltalk.addClass('MaglevClass', smalltalk.MaglevModule, ['superclassObject', 'size', 'subclasses', 'instances', 'instancesSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_ensureSubclassesLoadedWithCallback_'),
smalltalk.method({
selector: unescape('ensureSubclassesLoadedWithCallback%3A'),
fn: function (aBlock){
var self=this;
(($receiver = self['@subclasses']) == nil || $receiver == undefined) ? (function(){return smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), smalltalk.send(self, "_paramsSubclasses", []), (function(obj){smalltalk.send(self, "_parseJSON_", [obj]);return smalltalk.send(aBlock, "_value", []);})]);})() : (function(){return smalltalk.send(aBlock, "_value", []);})();
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_instances'),
smalltalk.method({
selector: unescape('instances'),
fn: function (){
var self=this;
return self['@instances'];
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_instancesSize'),
smalltalk.method({
selector: unescape('instancesSize'),
fn: function (){
var self=this;
return self['@instancesSize'];
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_loadInstancesFrom_to_withCallback_'),
smalltalk.method({
selector: unescape('loadInstancesFrom%3Ato%3AwithCallback%3A'),
fn: function (from, to, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["range_instances_from", from]);smalltalk.send($rec, "_at_put_", ["range_instances_to", to]);smalltalk.send($rec, "_at_put_", ["instances", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(self, "_oop", [])]), params, (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObjectWithoutUpdate_", [obj])]);})]);
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_paramsSubclasses'),
smalltalk.method({
selector: unescape('paramsSubclasses'),
fn: function (){
var self=this;
return (function($rec){smalltalk.send($rec, "_at_put_", ["subclasses", true]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevModule);
(($receiver = smalltalk.send(obj, "_at_", ["superclassObject"])) != nil && $receiver != undefined) ? (function(){return (self['@superclassObject']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_superclassObject", [])]));})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["subclasses"])) != nil && $receiver != undefined) ? (function(){return (self['@subclasses']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_subclasses", [])]));})() : nil;
(($receiver = smalltalk.send(obj, "_at_", ["instancesSize"])) != nil && $receiver != undefined) ? (function(){(($receiver = self['@instances']) == nil || $receiver == undefined) ? (function(){return (self['@instances']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;(self['@instancesSize']=smalltalk.send(obj, "_instancesSize", []));return smalltalk.send(smalltalk.send(obj, "_instances", []), "_keysAndValuesDo_", [(function(index, element){return smalltalk.send(self['@instances'], "_at_put_", [smalltalk.send(index, "_asNumber", []), smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [element])]);})]);})() : nil;
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_subclasses'),
smalltalk.method({
selector: unescape('subclasses'),
fn: function (){
var self=this;
return self['@subclasses'];
return self;}
}),
smalltalk.MaglevClass);

smalltalk.addMethod(
unescape('_superclassObject'),
smalltalk.method({
selector: unescape('superclassObject'),
fn: function (){
var self=this;
return self['@superclassObject'];
return self;}
}),
smalltalk.MaglevClass);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("class");
return self;}
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevClassInline || MaglevClassInline);
return self;}
}),
smalltalk.MaglevClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevClassWindow || MaglevClassWindow);
return self;}
}),
smalltalk.MaglevClass.klass);


smalltalk.addClass('MaglevSystemClass', smalltalk.MaglevClass, ['gemVersionReport', 'gemVersionReportSize', 'stoneVersionReport', 'stoneVersionReportSize'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_gemVersionReport'),
smalltalk.method({
selector: unescape('gemVersionReport'),
fn: function (){
var self=this;
return self['@gemVersionReport'];
return self;}
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_gemVersionReportSize'),
smalltalk.method({
selector: unescape('gemVersionReportSize'),
fn: function (){
var self=this;
return self['@gemVersionReportSize'];
return self;}
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevClass);
(self['@gemVersionReport']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_gemVersionReport", [])]));
(self['@gemVersionReportSize']=smalltalk.send(obj, "_gemVersionReportSize", []));
(self['@stoneVersionReport']=smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [smalltalk.send(obj, "_stoneVersionReport", [])]));
(self['@stoneVersionReportSize']=smalltalk.send(obj, "_stoneVersionReportSize", []));
return self;}
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_stoneVersionReport'),
smalltalk.method({
selector: unescape('stoneVersionReport'),
fn: function (){
var self=this;
return self['@stoneVersionReport'];
return self;}
}),
smalltalk.MaglevSystemClass);

smalltalk.addMethod(
unescape('_stoneVersionReportSize'),
smalltalk.method({
selector: unescape('stoneVersionReportSize'),
fn: function (){
var self=this;
return self['@stoneVersionReportSize'];
return self;}
}),
smalltalk.MaglevSystemClass);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("systemClass");
return self;}
}),
smalltalk.MaglevSystemClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevSystemClassWindow || MaglevSystemClassWindow);
return self;}
}),
smalltalk.MaglevSystemClass.klass);


smalltalk.addClass('MaglevNilClass', smalltalk.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
unescape('_ifNotMaglevNil_'),
smalltalk.method({
selector: unescape('ifNotMaglevNil%3A'),
fn: function (aBlock){
var self=this;
return self;
return self;}
}),
smalltalk.MaglevNilClass);

smalltalk.addMethod(
unescape('_isMaglevNil'),
smalltalk.method({
selector: unescape('isMaglevNil'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.MaglevNilClass);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
fn: function (){
var self=this;
return unescape("%28nil%29");
return self;}
}),
smalltalk.MaglevNilClass);


smalltalk.MaglevNilClass.klass.iVarNames = ['instance'];
smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("nilclass");
return self;}
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassInline || MaglevNilClassInline);
return self;}
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_instance'),
smalltalk.method({
selector: unescape('instance'),
fn: function (){
var self=this;
(($receiver = self['@instance']) == nil || $receiver == undefined) ? (function(){return (self['@instance']=smalltalk.send(smalltalk.send((smalltalk.MaglevObjectSpace || MaglevObjectSpace), "_instance", []), "_reloadObject_", [(20)]));})() : $receiver;
return self['@instance'];
return self;}
}),
smalltalk.MaglevNilClass.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevNilClassWindow || MaglevNilClassWindow);
return self;}
}),
smalltalk.MaglevNilClass.klass);


smalltalk.addClass('MaglevRubyWorkspace', smalltalk.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("rubyWorkspace");
return self;}
}),
smalltalk.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevRubyWorkspaceInline || MaglevRubyWorkspaceInline);
return self;}
}),
smalltalk.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevRubyWorkspaceWindow || MaglevRubyWorkspaceWindow);
return self;}
}),
smalltalk.MaglevRubyWorkspace.klass);


smalltalk.addClass('MaglevString', smalltalk.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;}
}),
smalltalk.MaglevString);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;}
}),
smalltalk.MaglevString);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
fn: function (){
var self=this;
return self['@string'];
return self;}
}),
smalltalk.MaglevString);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("string");
return self;}
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevStringInline || MaglevStringInline);
return self;}
}),
smalltalk.MaglevString.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevStringWindow || MaglevStringWindow);
return self;}
}),
smalltalk.MaglevString.klass);


smalltalk.addClass('MaglevSymbol', smalltalk.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSON_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;}
}),
smalltalk.MaglevSymbol);

smalltalk.addMethod(
unescape('_parseJSONNotLoaded_'),
smalltalk.method({
selector: unescape('parseJSONNotLoaded%3A'),
fn: function (obj){
var self=this;
smalltalk.send(self, "_parseJSONNotLoaded_", [obj], smalltalk.MaglevObject);
(self['@string']=smalltalk.send(obj, "_string", []));
(self['@isStringComplete']=smalltalk.send(obj, "_stringComplete", []));
return self;}
}),
smalltalk.MaglevSymbol);

smalltalk.addMethod(
unescape('_string'),
smalltalk.method({
selector: unescape('string'),
fn: function (){
var self=this;
return self['@string'];
return self;}
}),
smalltalk.MaglevSymbol);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("symbol");
return self;}
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolInline || MaglevSymbolInline);
return self;}
}),
smalltalk.MaglevSymbol.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevSymbolWindow || MaglevSymbolWindow);
return self;}
}),
smalltalk.MaglevSymbol.klass);


smalltalk.addClass('MaglevThread', smalltalk.MaglevObject, ['exception', 'localStorage', 'localStorageSize', 'status', 'isRailsThread'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_exception'),
smalltalk.method({
selector: unescape('exception'),
fn: function (){
var self=this;
return self['@exception'];
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_hasException'),
smalltalk.method({
selector: unescape('hasException'),
fn: function (){
var self=this;
try{(($receiver = self['@exception']) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_hasException', fn: function(){return false}})})();})() : $receiver;
(function(){throw({name: 'stReturn', selector: '_hasException', fn: function(){return smalltalk.send(smalltalk.send(self['@exception'], "_isMaglevNil", []), "_not", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_hasException'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_inspection'),
smalltalk.method({
selector: unescape('inspection'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_hasException", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(smalltalk.send(unescape("%23%3CGsProcess%5B"), "__comma", [smalltalk.send(self['@exception'], "_inspection", [])]), "__comma", [unescape("%5D%3E")])}})})();})() : (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(self, "_inspection", [], smalltalk.MaglevObject)}})})();})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(smalltalk.send(unescape("%23%3CGsProcess%5B"), "__comma", [smalltalk.send(self['@exception'], "_inspection", [])]), "__comma", [unescape("%5D%3E")])}})})();}), (function(){return (function(){throw({name: 'stReturn', selector: '_inspection', fn: function(){return smalltalk.send(self, "_inspection", [], smalltalk.MaglevObject)}})})();})]));
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_inspection'){return e.fn()} throw(e)}}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_isRailsThread'),
smalltalk.method({
selector: unescape('isRailsThread'),
fn: function (){
var self=this;
return smalltalk.send(self['@isRailsThread'], "__eq", [true]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_localStorage'),
smalltalk.method({
selector: unescape('localStorage'),
fn: function (){
var self=this;
return self['@localStorage'];
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_localStorageSize'),
smalltalk.method({
selector: unescape('localStorageSize'),
fn: function (){
var self=this;
return self['@localStorageSize'];
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_parseJSON_'),
smalltalk.method({
selector: unescape('parseJSON%3A'),
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
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_proceedWithCallback_'),
smalltalk.method({
selector: unescape('proceedWithCallback%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/proceed/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stackFrame_withCallback_'),
smalltalk.method({
selector: unescape('stackFrame%3AwithCallback%3A'),
fn: function (anInteger, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", anInteger]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/frame/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stackTraceMethodsWithCallback_'),
smalltalk.method({
selector: unescape('stackTraceMethodsWithCallback%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/frames/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), aBlock]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_status'),
smalltalk.method({
selector: unescape('status'),
fn: function (){
var self=this;
return self['@status'];
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stepInto_withCallback_'),
smalltalk.method({
selector: unescape('stepInto%3AwithCallback%3A'),
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/stepInto/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_stepOver_withCallback_'),
smalltalk.method({
selector: unescape('stepOver%3AwithCallback%3A'),
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/stepOver/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;}
}),
smalltalk.MaglevThread);

smalltalk.addMethod(
unescape('_trimTo_withCallback_'),
smalltalk.method({
selector: unescape('trimTo%3AwithCallback%3A'),
fn: function (frameIndex, aBlock){
var self=this;
var params=nil;
(params=(function($rec){smalltalk.send($rec, "_at_put_", ["index", frameIndex]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])));
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("code/trim/"), "__comma", [smalltalk.send(self['@oop'], "_asString", [])]), params, aBlock]);
return self;}
}),
smalltalk.MaglevThread);


smalltalk.addMethod(
unescape('_basetype'),
smalltalk.method({
selector: unescape('basetype'),
fn: function (){
var self=this;
return smalltalk.symbolFor("thread");
return self;}
}),
smalltalk.MaglevThread.klass);

smalltalk.addMethod(
unescape('_inlineViewClass'),
smalltalk.method({
selector: unescape('inlineViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevThreadInline || MaglevThreadInline);
return self;}
}),
smalltalk.MaglevThread.klass);

smalltalk.addMethod(
unescape('_windowViewClass'),
smalltalk.method({
selector: unescape('windowViewClass'),
fn: function (){
var self=this;
return (smalltalk.MaglevThreadWindow || MaglevThreadWindow);
return self;}
}),
smalltalk.MaglevThread.klass);


smalltalk.addClass('MaglevObjectSpace', smalltalk.Object, ['objects', 'evalObject'], 'Maglev-Core');
smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (anOop){
var self=this;
return smalltalk.send(self['@objects'], "_at_ifAbsent_", [anOop, (function(){return smalltalk.send(self, "_reloadObject_", [anOop]);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_at_withCallback_'),
smalltalk.method({
selector: unescape('at%3AwithCallback%3A'),
fn: function (anOop, aBlock){
var self=this;
((($receiver = smalltalk.send(self['@objects'], "_includesKey_", [anOop])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);})() : (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(aBlock, "_value_", [smalltalk.send(self['@objects'], "_at_", [anOop])]);}), (function(){return smalltalk.send(self, "_reloadObject_withCallback_", [anOop, aBlock]);})]));
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_evalObject'),
smalltalk.method({
selector: unescape('evalObject'),
fn: function (){
var self=this;
return self['@evalObject'];
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_evalObject_'),
smalltalk.method({
selector: unescape('evalObject%3A'),
fn: function (anObject){
var self=this;
(self['@evalObject']=anObject);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_hasLoadedOop_'),
smalltalk.method({
selector: unescape('hasLoadedOop%3A'),
fn: function (oop){
var self=this;
return smalltalk.send(smalltalk.send(self['@objects'], "_includesKey_", [oop]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@objects'], "_at_", [oop]), "_isLoaded", []);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_hasOop_'),
smalltalk.method({
selector: unescape('hasOop%3A'),
fn: function (oop){
var self=this;
return smalltalk.send(self['@objects'], "_includesKey_", [oop]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@objects']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_registerWindow_'),
smalltalk.method({
selector: unescape('registerWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self['@objects'], "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_addWindow_", [aWindow]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_'),
smalltalk.method({
selector: unescape('reloadObject%3A'),
fn: function (anOop){
var self=this;
var obj=nil;
(obj=smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", [])]));
return smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3A'),
fn: function (anOop, aBlock){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []), (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_reloadObject_withCallback_params_'),
smalltalk.method({
selector: unescape('reloadObject%3AwithCallback%3Aparams%3A'),
fn: function (anOop, aBlock, aParamsDict){
var self=this;
smalltalk.send((smalltalk.MaglevAjax || MaglevAjax), "_ajax_data_withCallback_", [smalltalk.send(unescape("object/index/"), "__comma", [smalltalk.send(anOop, "_asString", [])]), aParamsDict, (function(obj){return smalltalk.send(aBlock, "_value_", [smalltalk.send((smalltalk.MaglevObject || MaglevObject), "_newObject_", [obj])]);})]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_unregisterWindow_'),
smalltalk.method({
selector: unescape('unregisterWindow%3A'),
fn: function (aWindow){
var self=this;
smalltalk.send(smalltalk.send(self['@objects'], "_at_", [smalltalk.send(smalltalk.send(aWindow, "_object", []), "_oop", [])]), "_removeWindow_", [aWindow]);
return self;}
}),
smalltalk.MaglevObjectSpace);

smalltalk.addMethod(
unescape('_updateObject_'),
smalltalk.method({
selector: unescape('updateObject%3A'),
fn: function (anObject){
var self=this;
((($receiver = smalltalk.send(anObject, "_isLoaded", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self['@objects'], "_at_put_", [smalltalk.send(anObject, "_oop", []), anObject]);})]));
return self;}
}),
smalltalk.MaglevObjectSpace);


smalltalk.MaglevObjectSpace.klass.iVarNames = ['instance'];
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
smalltalk.MaglevObjectSpace.klass);


