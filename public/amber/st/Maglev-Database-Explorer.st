Smalltalk current createPackage: 'Maglev-Database-Explorer' properties: #{}!
Widget subclass: #MaglevDraggableObject
	instanceVariableNames: 'content'
	package: 'Maglev-Database-Explorer'!

!MaglevDraggableObject methodsFor: 'accessing'!

content
	^ content
!

content: anObject
	content := anObject.
! !

!MaglevDraggableObject methodsFor: 'rendering'!

renderOn: html
	html div
		class: 'draggable-new-object-container'
		with: [
			html div
				class: 'ui-widget-content ui-draggable draggable-new-object';
				with: [
					html div
						class: 'object-drag-dummy';
						style: 'display: none;';
						with: MaglevIcon move;
						with: content.
					html div
						class: 'object-iv-name';
						with: content]].
! !

!MaglevDraggableObject class methodsFor: 'not yet classified'!

with: anObject
	^ self basicNew
		content: anObject;
		initialize;
		yourself
! !

Widget subclass: #MaglevGsNMethodEditor
	instanceVariableNames: 'object editorContainer errorBox rubyIcon stIcon envIdContainer sourceLocationContainer editor editorHeight editorWidth classObject'
	package: 'Maglev-Database-Explorer'!

!MaglevGsNMethodEditor methodsFor: 'accessing'!

classObject
	^ MaglevObject newObjectWithoutUpdate: (self methodObject at: 5)
!

classObject: anObject
	classObject := anObject.
!

envId
	^ self methodObject at: 2
!

filename
	^ (self methodObject at: 4) at: 1
!

lineInFile
	^ (self methodObject at: 4) at: 2
!

methodObject
	^ object
!

object
	^ object
!

object: anObject
	object := anObject
!

sourceOffset
	^ -1
!

sourceString
	^ self methodObject at: 1
! !

!MaglevGsNMethodEditor methodsFor: 'initializing'!

initializeEditor
	|params extraKeys|
	extraKeys := Object new
		basicAt: 'Ctrl-S' put: [self commandSave];
		yourself.
	params := Object new
		basicAt: 'mode' put: 'text/x-ruby';
		basicAt: 'styleActiveLine' put: true;
		basicAt: 'lineNumbers' put: true;
		basicAt: 'matchBrackets' put: true;
		basicAt: 'extraKeys' put: extraKeys;
		yourself. 
	editor := CodeMirror value: (editorContainer asJQuery at: 0) value: params.
	editor setValue: ''.
	self mouseFix.
	self makeEditorResizable.
!

makeEditorResizable
	< self['@editorContainer']._asJQuery().find('.CodeMirror').resizable({
		resize: function() {	
			self['@editor'].setSize($(this).width(), $(this).height());	
		}
	}); >
!

mouseFix
	< var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); >
! !

!MaglevGsNMethodEditor methodsFor: 'interactions'!

commandSave
	|selectedCategory|
	errorBox hide.
	errorBox asJQuery empty.
	self envId = 1
		ifTrue: [self classObject
			compileRubySourceCode: (editor getValue replace: '⚡' with: '')
			withCallback: [:success :obj |
				success
					ifTrue: [self signalSuccess]
					ifFalse: [self signalFailure: obj]]]
		ifFalse: [self classObject 
			compileSmalltalkSourceCode: (editor getValue replace: '⚡' with: '')
			withCallback: [:success :obj |
				success
					ifTrue: [self signalSuccess]
					ifFalse: [self signalFailure: obj]]].
!

signalFailure: aDescription
	|html|
	html := HTMLCanvas onJQuery: errorBox asJQuery.
	html with: aDescription inlineViewComponent.
	errorBox show.
	editorContainer asJQuery css: 'background-color' with: '#ff0039'.
	editorContainer asJQuery animate: (Object new basicAt: 'backgroundColor' put: '#ffffff'; yourself) timeout: 250.
!

signalSuccess
	editorContainer asJQuery css: 'background-color' with: '#3fb618'.
	editorContainer asJQuery animate: (Object new basicAt: 'backgroundColor' put: '#ffffff'; yourself) timeout: 250.
! !

!MaglevGsNMethodEditor methodsFor: 'rendering'!

renderEditorOn: html
	editorContainer := html span
		class: 'pull-left code-area'.
	html div style: 'clear: both;'.
	errorBox := html div
		class: 'alert alert-error';
		style: 'margin-bottom: 0px;';
		hide.
	self initializeEditor.
!

renderMethodObject
	|envId|
	editor setValue: self sourceString. 
	editorContainer show.
	envId := self envId.
	envIdContainer asJQuery empty.
	envIdContainer with: envId.
	sourceLocationContainer empty.
	envId = 1 
		ifTrue: [
			sourceLocationContainer with: self filename.
			stIcon hide. rubyIcon show.
			editor setOption: 'mode' data: 'text/x-ruby'.]
		ifFalse: [sourceLocationContainer with: 'n/a'].
	envId = 0 ifTrue: [
		stIcon show. rubyIcon hide.
		editor setOption: 'mode' data: 'text/x-stsrc'].
	envId > 1
		ifTrue: [stIcon hide. rubyIcon hide].
!

renderOn: html
	self renderEditorOn: html.
	self renderStatusBarOn: html.
	self renderMethodObject.
!

renderStatusBarOn: html
	html table
		class: 'table-bordered';
		style: 'margin-top: 5px; width: 100%;';
		with: [html tbody with: [
			html tr with: [
				html td with: [
					rubyIcon := MaglevIconImage ruby hide; yourself.
					stIcon := MaglevIconImage smalltalk hide; yourself.
					html with: rubyIcon.
					html with: stIcon.
					envIdContainer := html span with: 'Environment ID'];
					style: 'width: 1px;'.
				html td with: [
					sourceLocationContainer := html span with: 'Source location']]]].
! !

!MaglevGsNMethodEditor class methodsFor: 'instance creation'!

for: anObject
	^ self basicNew
		object: anObject;
		initialize;
		yourself
! !

MaglevGsNMethodEditor subclass: #MaglevGsNMethodDebugEditor
	instanceVariableNames: 'argValueBox argSelect'
	package: 'Maglev-Database-Explorer'!
!MaglevGsNMethodDebugEditor commentStamp!
Copied from _frameContentsAt:

"Private.  Returns an Array describing the specified level in the receiver. 
 aLevel == 1 is top of stack.  If aLevel is less than 1 or greater than
 stackDepth, returns nil.  

 The result Array contains:
 offset item
 -----  -----
   1    gsMethod  (a GsNMethod)
   2    ipOffset    (zero-based relative to first named instance variable in portable code;
                     negative means a stack breakpoint is present)
   3    frameOffset (zero-based)
   4    varContext
   5    saveProtectedMode
   6    markerOrException
   7    nil    (not used)
   8    self   (possibly nil in a ComplexBlock)
   9    argAndTempNames   (an Array of Symbols or Strings)
  10    receiver
  11    arguments and temps, if any"!

!MaglevGsNMethodDebugEditor methodsFor: 'accessing'!

argAndTempNames
	^ object at: 9
!

argOrTempValue: anInteger
	^ MaglevObject newObject: ((object at: 11) at: anInteger)
!

methodObject
	^ object at: 1
!

ownerSelf
	^ MaglevObject newObject: (object at: 8)
!

receiver
	^ MaglevObject newObject: (object at: 10)
!

sourceOffset
	^ object at: 12
!

sourceOffsetX
	^ (object at: 13) at: 1
!

sourceOffsetY
	^ (object at: 13) at: 2
! !

!MaglevGsNMethodDebugEditor methodsFor: 'rendering'!

renderArg
	|argIndex argValue|
	argIndex := (argSelect asJQuery at: 0) selectedIndex - 1.
	argIndex = -1 
		ifTrue: [argValue := self ownerSelf].
	argIndex = 0
		ifTrue: [argValue := self receiver].
	argIndex  > 0
		ifTrue: [argValue := self argOrTempValue: argIndex].
	argValueBox asJQuery empty.
	argValueBox with: argValue inlineViewComponent.
!

renderArgsOn: html
	html table with: [
		html tbody with: [
			html tr with: [
				html td with: [
					argSelect := html select
						with: [html option with: '(self)'];
						with: [html option with: '(receiver)'];
						with: [self argAndTempNames do: [:arg |
							html option with: arg]];
						style: 'margin-bottom: 0px;';
						onChange: [self renderArg].
					argValueBox := html div].
				html td 
					with: [argValueBox := html div];
					style: 'padding-left: 5px;']]];
	style: 'margin-top: 5px;'.
	self renderArg.
!

renderMethodObject
	|rangeFrom rangeTo|
	super renderMethodObject.
	< self['@editor'].setSelection(
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}, 
		{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}); >.
	editor replaceSelection: '⚡'.
!

renderOn: html
	self renderEditorOn: html.
	self renderArgsOn: html.
	self renderStatusBarOn: html.
	self renderMethodObject.
! !

Object subclass: #MaglevHaltedThreadListener
	instanceVariableNames: 'container interval timer renderedOops html navbar'
	package: 'Maglev-Database-Explorer'!

!MaglevHaltedThreadListener methodsFor: 'accessing'!

interval
	interval ifNil: [interval := 2500].
	^ interval
!

interval: aNumber
	interval := aNumber.
	< clearInterval(self['@timer']); >.
	self startPolling.
! !

!MaglevHaltedThreadListener methodsFor: 'initializing'!

initialize
	container := '#halted-threads-navigation' asJQuery.
	navbar := '#halted-threads-navbar' asJQuery.
	navbar hide.
	html := HTMLCanvas onJQuery: container.
	renderedOops := Dictionary new.
!

start
	timer := self startPolling.
!

startPolling
	< return setInterval(function() {self._refresh();}, self._interval()); >
! !

!MaglevHaltedThreadListener methodsFor: 'polling'!

refresh
	|params|
	params := Dictionary new
		at: 'allElements' put: true;
		at: 'noBehavior' put: true;
		yourself.
	MaglevObjectSpace instance evalObject 
		evaluateWithoutUpdate: 'MaglevDatabaseExplorer.halted_threads' 
		language: 'ruby'
		with: params 
		withCallback: [:success :obj | |currentOops|
			success ifTrue:[
			currentOops := Set new.
			obj do: [:el | 
				(renderedOops includesKey: el oop)
					ifFalse: [self renderObject: el oop with: el inlineViewComponent].
				currentOops add: el oop].
			renderedOops keysAndValuesDo: [:oop :comp |
				(currentOops includes: oop)
					ifFalse: [self removeObject: oop with: comp]].
			renderedOops size = 0
				ifTrue: [navbar hide]
				ifFalse: [navbar show]]].
!

removeObject: oop with: component
	component asJQuery remove.
	renderedOops removeKey: oop.
!

renderObject: oop with: component
	|inlineContainer|
	inlineContainer := html span 
		style: 'padding: 4px 2px 2px 4px;';
		with: component.
	renderedOops at: oop put: inlineContainer.
! !

MaglevHaltedThreadListener class instanceVariableNames: 'instance'!

!MaglevHaltedThreadListener class methodsFor: 'instance creation'!

instance
	instance ifNil: [instance := self new].
	^ instance
!

start
	self instance start.
! !

Widget subclass: #MaglevIcon
	instanceVariableNames: 'b icon spin caption'
	package: 'Maglev-Database-Explorer'!

!MaglevIcon methodsFor: 'accessing'!

caption
	^ caption
!

caption: aString
	caption := aString.
!

icon
	icon ifNil: [icon := 'star'].
	^ icon
!

icon: aString
	icon := aString.
!

onClick: aBlock
	b onClick: aBlock.
!

spin
	spin ifNil: [spin := false].
	^ spin
!

spin: aBoolean
	spin := aBoolean.
! !

!MaglevIcon methodsFor: 'interactions'!

hide
	b hide.
!

show
	b show.
! !

!MaglevIcon methodsFor: 'rendering'!

renderOn: html
	|cssClass|
	cssClass := 'icon-', self icon.
	self spin 
		ifTrue: [cssClass := cssClass, ' icon-spin'].
	caption 
		ifNil: [b := html b
				class: cssClass;
				yourself]
		ifNotNil: [b := html b
				class: cssClass;
				data: 'toggle' with: 'tooltip';
				data: 'placement' with: 'top';
				data: 'original-title' with: caption;
				yourself.
			b asJQuery tooltip].
! !

!MaglevIcon class methodsFor: 'instance creation'!

codeFork
	^ self new
		icon: 'code-fork';
		yourself
!

flag
	^ self new
		icon: 'flag';
		yourself
!

globe
	^ self new
		icon: 'globe';
		yourself
!

hdd
	^ self new
		icon: 'hdd';
		yourself
!

listAlt
	^ self new
		icon: 'list-alt';
		yourself
!

move
	^ self new
		icon: 'move';
		yourself
!

pause
	^ self new
		icon: 'pause';
		yourself
!

pencil
	^ self new
		icon: 'pencil';
		yourself
!

play
	^ self new
		icon: 'play';
		yourself
!

playCircle
	^ self new
		icon: 'play-circle';
		yourself
!

remove
	^ self new
		icon: 'remove';
		yourself
!

resizeSmall
	^ self new
		icon: 'resize-small';
		yourself
!

search
	^ self new
		icon: 'search';
		yourself
!

star
	^ self new
		icon: 'star';
		yourself
!

stop
	^ self new
		icon: 'stop';
		yourself
!

terminal
	^ self new
		icon: 'terminal';
		yourself
!

trash
	^ self new
		icon: 'trash';
		yourself
!

wait
	^ self new
		icon: 'refresh';
		spin: true;
		caption: 'Loading...';
		yourself
! !

Widget subclass: #MaglevIconImage
	instanceVariableNames: 'src cssClass image hidden'
	package: 'Maglev-Database-Explorer'!

!MaglevIconImage methodsFor: 'accessing'!

cssClass: aString
	cssClass := aString.
!

hidden
	hidden ifNil: [hidden := false].
	^ hidden
!

src: aString
	src := aString.
! !

!MaglevIconImage methodsFor: 'interactions'!

hide
	hidden := true.
	image ifNotNil: [image hide].
!

show
	hidden := false.
	image ifNotNil: [image show].
! !

!MaglevIconImage methodsFor: 'rendering'!

renderOn: html
	image := html img
		src: src;
		class: cssClass.
	self hidden ifTrue: [image hide].
! !

!MaglevIconImage class methodsFor: 'instance creation'!

rails
	^ self new
		src: 'images/rails_tiny.png';
		yourself
!

ruby
	^ self new
		src: 'images/ruby.png';
		cssClass: 'icon-language';
		yourself
!

rubySmalltalkBridge
	^ self new
		src: 'images/ruby_smalltalk_bridge.png';
		cssClass: 'icon-language';
		yourself
!

smalltalk
	^ self new
		src: 'images/smalltalk.png';
		cssClass: 'icon-language';
		yourself
! !

Widget subclass: #MaglevListBox
	instanceVariableNames: 'list changedCallback htmlIv divContainer height searchbox searchInput olContainer olHeightBeforeSearch'
	package: 'Maglev-Database-Explorer'!

!MaglevListBox methodsFor: 'accessing'!

changedCallback: aBlock
	changedCallback := aBlock.
!

height
	^ olContainer asJQuery height
!

height: anInteger
	|searchboxHeight|
	(searchbox asJQuery is: ':visible')
		ifTrue: [searchboxHeight := searchbox asJQuery height + 2]
		ifFalse: [searchboxHeight := 0].
	height := anInteger.
	olContainer asJQuery css: 'height' data: (anInteger - searchboxHeight) asString, 'px'.
!

selectedData
	^ (list asJQuery find: '.ui-selected') data: 'data'
!

selectedDataIndex
	^ (list asJQuery find: '.ui-selected') index + 1
!

selectedDataVisibleIndex
	^ ((list asJQuery find: 'li:visible') index: (list asJQuery find: 'li.ui-selected')) + 1
!

size
	^ (list asJQuery find: 'li') length
!

sizeVisible
	^ (list asJQuery find: 'li:visible') length
!

style: aString
	divContainer style: aString.
! !

!MaglevListBox methodsFor: 'interactions'!

bindEvents
	< self['@list']._asJQuery().selectable({
		stop: function() {self._selectionChanged();},
		tolerance: 'fit'}); >
!

clear
	list asJQuery empty.
!

commandFind
	olHeightBeforeSearch := self height.
	searchbox show.
	self height: self height.
	searchInput asJQuery focus.
!

filterResults
	|text|
	text := searchInput asJQuery val.
	(list asJQuery find: 'li') each: [:idx :htmlEl | |el|
		< el = $(htmlEl); >.
		(el text includesSubString: text)
			ifTrue: [el show]
			ifFalse: [el hide]].
	self hideSearchBox.
!

focus
	list asJQuery focus.
!

hide
	list hide.
!

hideSearchBox
	searchbox hide.
	self height: olHeightBeforeSearch.
	list asJQuery focus.
!

moveSelectionDown
	|newIndex|
	newIndex := self selectedDataVisibleIndex + 1 - 1.
	newIndex = self sizeVisible ifTrue: [newIndex := 0].
	self unselectAll.
	(list asJQuery find: 'li:visible:eq(', newIndex asString, ')') addClass: 'ui-selected'.
	self selectionChanged.
!

moveSelectionUp
	|newIndex|
	newIndex := self selectedDataVisibleIndex - 1 - 1.
	newIndex < 0 ifTrue: [newIndex := self sizeVisible - 1].
	self unselectAll.
	(list asJQuery find: 'li:visible:eq(', newIndex asString, ')') addClass: 'ui-selected'.
	self selectionChanged.
!

selectionChanged
	self focus.
	changedCallback value: self selectedData value: self selectedDataIndex.
!

show
	list show.
!

unselectAll
	(list asJQuery find: 'li') removeClass: 'ui-selected'.
! !

!MaglevListBox methodsFor: 'rendering'!

makeResizable
	< self['@olContainer']._asJQuery().resizable({handles: 's'}); >
!

renderOn: html
	divContainer := html div with: [
		self renderSearchBoxOn: html.
		olContainer := html div 
			style: 'overflow: hidden; border: 1px solid #aaaaaa';
			with: [
				list := html ol
					style: 'width: 100%; height: 100%; overflow: auto; border: none; outline: none;';
					at: 'tabindex' put: '1';
					onKeyDown: [:e | 
						e preventDefault. 
						e keyCode = 40 ifTrue: [self moveSelectionDown].
						e keyCode = 38 ifTrue: [self moveSelectionUp].
						(e keyCode = 70 and: [e ctrlKey]) ifTrue: [self commandFind]];
					onClick: [self focus]].
		self makeResizable.
		htmlIv := html].
	self bindEvents.
!

renderSearchBoxOn: html
	searchbox := html div
		class: 'input-prepend';
		style: 'margin-bottom: 2px; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 52px; width: 100%;';
		with: [
			html span 
				class: 'add-on';
				 with: 'find'.
			searchInput := html input
				type: 'text';
				class: 'span2';
				style: 'width: 100%;';
				onChange: [self filterResults];
				onFocusOut: [self hideSearchBox]];
		hide.
!

with: content
	self with: content data: '' darker: false.
!

with: content darker: aBoolean
	self with: content data: '' darker: aBoolean.
!

with: content data: dataString
	"|html|
	html := HTMLCanvas onJQuery: list asJQuery."
	list with: [
		htmlIv li
			class: 'ui-widget-content';
			data: 'data' with: dataString;
			with: [content value: htmlIv]].
!

with: content data: dataString darker: aBoolean
	list with: [ |li|
		li := htmlIv li
			class: 'ui-widget-content';
			data: 'data' with: dataString;
			with: [content value: htmlIv].
		aBoolean ifTrue: [li asJQuery addClass: 'list-darker']].
! !

Widget subclass: #MaglevObjectDropdown
	instanceVariableNames: 'container resultContainer editor editorElement rubyButton smalltalkButton object'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectDropdown methodsFor: 'accessing'!

code
	^ editor getValue
!

language
	self isRuby
		ifTrue: [^ 'ruby']
		ifFalse: [^ 'smalltalk']
! !

!MaglevObjectDropdown methodsFor: 'initializing'!

initializeEditor
	|params extraKeys|
	extraKeys := Object new
		basicAt: 'Ctrl-D' put: [self evalPrintIt];
		basicAt: 'Ctrl-P' put: [self evalPrintIt];
		basicAt: 'Ctrl-S' put: [self evalPrintIt];
		yourself.
	params := Object new
		basicAt: 'mode' put: 'text/x-ruby';
		basicAt: 'styleActiveLine' put: true;
		basicAt: 'lineNumbers' put: true;
		basicAt: 'matchBrackets' put: true;
		basicAt: 'extraKeys' put: extraKeys;
		yourself. 
	editor := CodeMirror value: (editorElement asJQuery at: 0) value: params.
	editor setValue: ''.
!

mouseFix
	< var menu = self['@container'];
	var editor = self['@editorElement'];
	menu._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	});
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); >
! !

!MaglevObjectDropdown methodsFor: 'interactions'!

appendToInlineObject: anObject for: dropdownContainer
	object := anObject object.
	container asJQuery appendTo: dropdownContainer asJQuery.
!

evalDoIt
!

evalInspectIt
!

evalPrintIt
	self executeWithCallback: [:success :resultObj | 
		success
			ifTrue: [resultContainer with: resultObj inlineViewComponent]
			ifFalse: [resultContainer with: resultObj inlineViewComponent]].
!

executeWithCallback: aBlock
	resultContainer
		addClass: 'alert-info';
		removeClass: 'alert-success';
		removeClass: 'alert-error'.
	resultContainer asJQuery empty.
	resultContainer
		with: MaglevIcon wait;
		with: ' loading...';
		show.
	object 
		evaluate: self code 
		language: self language 
		withCallback: [:success :resultObj |
			resultContainer asJQuery empty.
			resultContainer removeClass: 'alert-info'.
			success
				ifTrue: [resultContainer addClass: 'alert-success']
				ifFalse: [resultContainer addClass: 'alert-error'].
			aBlock value: success value: resultObj]
!

languageChanged
	self isRuby
		ifFalse: [editor setOption: 'mode' data: 'text/x-ruby']
		ifTrue: [editor setOption: 'mode' data: 'text/x-stsrc'].
! !

!MaglevObjectDropdown methodsFor: 'rendering'!

renderButtonsOn: html
	"html button
		class: 'btn btn-primary';
		type: 'button';
		with: 'Do it';
		onClick: [self evalDoIt]."
	html button
		class: 'btn btn-primary';
		type: 'button';
		style: 'margin-right: 10px;';
		with: 'Print it';
		onClick: [self evalPrintIt].
	"html button
		class: 'btn btn-primary';
		type: 'button';
		with: 'Inspect it';
		onClick: [self evalInspectIt]."
	html div
		class: 'btn-group';
		style: 'float: right;';
		data: 'toggle' with: 'buttons-radio';
		with: [
			rubyButton := html button
				class: 'btn active';
				data: 'toggle' with: 'buttons-checkbox';
				onClick: [self languageChanged];
				type: 'button';
				with: 'Ruby'.
			smalltalkButton := html button
				class: 'btn';
				data: 'toggle' with: 'buttons-checkbox';
				onClick: [self languageChanged];
				type: 'button';
				with: 'Smalltalk'].
!

renderFormOn: html
	html form
		style: 'margin: 0px;';
		with: [
			editorElement := html div
				class: 'pull-left code-area'.
			html div style: 'clear: both;'.
			resultContainer := html div
				class: 'alert';
				hide.
			html div
				class: 'button-area';
				with: [self renderButtonsOn: html]].
!

renderOn: html
	container := html div
		class: 'dropdown-menu';
		with: [html fieldset
				class: 'textbox';
				style: 'padding: 10px';
				with: [self renderFormOn: html]].
	self initializeEditor.
	self mouseFix.
! !

!MaglevObjectDropdown methodsFor: 'testing'!

isRuby
	^ rubyButton asJQuery hasClass: 'active'
!

isSmalltalk
	^ smalltalkButton asJQuery hasClass: 'active'
! !

MaglevObjectDropdown class instanceVariableNames: 'instance'!

!MaglevObjectDropdown class methodsFor: 'singleton'!

instance
	instance ifNil: [
		instance := self new.
		instance appendToJQuery: '#temporary-rendering-area' asJQuery].
	^ instance
! !

Widget subclass: #MaglevObjectInline
	instanceVariableNames: 'object hasDropDown isDraggable depth isShort dragContent dragDummy dragObject fullInspection'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectInline methodsFor: 'accessing'!

depth
	depth ifNil: [depth := 1].
	^ depth
!

depth: anInteger
	depth := anInteger.
!

fullInspection
	fullInspection ifNil: [fullInspection := false].
	^ fullInspection
!

fullInspection: aBoolean
	fullInspection := aBoolean.
!

hasDropDown
	hasDropDown ifNil: [hasDropDown := self hasDropDownDefault].
	^ hasDropDown
!

hasDropDown: aBoolean
	hasDropDown := aBoolean.
!

isDraggable
	isDraggable ifNil: [isDraggable := self isDraggableDefault].
	^ isDraggable
!

isDraggable: aBoolean
	isDraggable := aBoolean.
!

isShort
	isShort ifNil: [isShort := false].
	^ isShort
!

isShort: aBoolean
	isShort := aBoolean.
!

object
	^ object
!

object: anObject
	object := anObject.
! !

!MaglevObjectInline methodsFor: 'constants'!

hasDropDownDefault
	^ true
!

isDraggableDefault
	^ true
!

maxDepth
	^ 1
!

maxInspection
	self fullInspection
		ifTrue: [^ 1000]
		ifFalse: [^ 15].
! !

!MaglevObjectInline methodsFor: 'interactions'!

bindDraggable
	|options cursorPos|
	cursorPos := Object new
		basicAt: 'left' put: 0;
		basicAt: 'top' put: 0;
		yourself.
	options := Object new
		basicAt: 'create' put: [:event :ui | ];
		basicAt: 'cursorPos' put: cursorPos;
		basicAt: 'start' put: [:event :ui | self dragStart: event a: ui];
		basicAt: 'stop' put: [:event :ui | self dragStop: event a: ui];
		yourself.
	dragObject asJQuery draggable: options.
!

dragStart: event a: ui
	dragContent hide.
	dragDummy show.
!

dragStop: event a: ui
	|position window|
	position := dragObject asJQuery offset.
	window := Maglev instance showReloadObjectWindow: object oop.
	window left: position left - (dragObject width / 2).
	window top: position top - (dragObject height / 2).
	dragObject left: 0.
	dragObject top: 0.
	dragDummy hide.
	dragContent show.
!

showDropdownFor: dropdownContainer
	MaglevObjectDropdown instance appendToInlineObject: self for: dropdownContainer.
! !

!MaglevObjectInline methodsFor: 'rendering'!

renderDraggableObjectOn: html
	html div
		class: 'draggable-new-object-container';
		with: [
			dragObject := html div
				class: 'ui-widget-content ui-draggable draggable-new-object';
				with: [
					dragDummy := html div
						class: 'object-drag-dummy';
						style: 'display: none;';
						with: MaglevIcon move;
						with: [self renderObjectContainerOn: html].
					dragContent := html div
						class: 'object-iv-name';
						with: [self renderObjectContainerOn: html]]].
	self bindDraggable.
!

renderLoadedObjectOn: html
	|text shorted|
	shorted := false.
	text := object inspection copyFrom: 1 to: self maxInspection.
	text size < object inspection size ifTrue: [
		text := text, '...'. 
		shorted := true.
		(text at: 2) = '<' ifTrue: [text := text, '>']].
	html with: [|tooltip|
		tooltip := html span
			data: 'toggle' with: 'tooltip';
			data: 'placement' with: 'top';
			data: 'original-title' with: object inspection;
			with: text.
		shorted ifTrue: [tooltip asJQuery tooltip]].
!

renderObjectActionsOn: html
"	html
		with: MaglevIcon search;
		with: MaglevIcon pencil."
!

renderObjectContainerOn: html
	html span
		class: 'object-inline-view-view';
		with: [
			self renderObjectActionsOn: html.
			html span
				class: 'object-inline-typed-view';
				with: [
					self hasDropDown
						ifTrue: [self renderObjectWithDropDownOn: html]
						ifFalse: [self renderObjectOn: html]]].
!

renderObjectOn: html
	object isLoaded
		ifTrue: [self renderLoadedObjectOn: html]
		ifFalse: [self renderUnloadedObjectOn: html].
!

renderObjectWithDropDownOn: html
	|dropdownContainer|
	dropdownContainer := html span
		class: 'dropdown';
		with: [
			html a
				class: 'dropdown-toggle btn object-dropdown-toggle';
				data: 'toggle' with: 'dropdown';
				onClick: [self showDropdownFor: dropdownContainer];
				with: [
					self renderObjectOn: html.
					html b class: 'caret']].
!

renderOn: html
	self isDraggable
		ifTrue: [self renderDraggableObjectOn: html]
		ifFalse: [self renderObjectContainerOn: html].
!

renderText: text withDropDownOn: html
	|dropdownContainer|
	self hasDropDown
		ifTrue: [
			dropdownContainer := html span
				class: 'dropdown';
				with: [
					html a
					class: 'dropdown-toggle btn object-dropdown-toggle';
					data: 'toggle' with: 'dropdown';
					onClick: [self showDropdownFor: dropdownContainer];
						with: [
							html with: text.
							html b class: 'caret']]]
		ifFalse: [html with: text].
!

renderUnloadedObjectOn: html
	|text shorted|
	shorted := false.
	text := object inspection copyFrom: 1 to: self maxInspection.
	text size < object inspection size ifTrue: [
		text := text, '...'. 
		shorted := true.
		(text at: 2) = '<' ifTrue: [text := text, '>']].
	html with: [|tooltip|
		tooltip := html span
			data: 'toggle' with: 'tooltip';
			data: 'placement' with: 'top';
			data: 'original-title' with: object inspection;
			with: text.
		shorted ifTrue: [tooltip asJQuery tooltip]].
! !

!MaglevObjectInline class methodsFor: 'instance creation'!

newWithDepth: anInteger
	^ self basicNew
		depth: anInteger;
		initialize;
		yourself
! !

MaglevObjectInline subclass: #MaglevArrayInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevArrayInline methodsFor: 'constants'!

maxDepth
	^ 2
!

maxElements
	^ 3
! !

!MaglevArrayInline methodsFor: 'rendering'!

renderLoadedObjectOn: html
	|showElements maxElements|
	maxElements := self maxElements.
	showElements := maxElements min: self object elementsSize.
	self renderText: '[' withDropDownOn: html.
	html with: ' '.
	self isShort
		ifTrue: [html with: ' ... ']
		ifFalse: [
			(1 to: showElements) do: [:idx |
				html with: ((self object at: idx) inlineViewComponentWithDepth: self depth - 1).
				(idx < showElements or: [self object elementsSize > maxElements])
					ifTrue: [html with: ' , ']].
			self object elementsSize > maxElements
				ifTrue: [html with: ' ... ']	].
	html with: ' '.
	self renderText: ']' withDropDownOn: html.
!

renderObjectWithDropDownOn: html
	"Do not render a drop down menu around the whole object."
	self renderObjectOn: html.
!

renderUnloadedObjectOn: html
	self renderText: '[' withDropDownOn: html.
	html with: '...'.
	self renderText: ']' withDropDownOn: html.
! !

MaglevObjectInline subclass: #MaglevBooleanInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevBooleanInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevExceptionInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevExceptionInline methodsFor: 'rendering'!

renderObjectActionsOn: html
	object isTrappable
		ifFalse: [html with: (MaglevIcon terminal
			caption: 'Not trappable')].
	object isResumable
		ifTrue: [html with: (MaglevIcon playCircle
			caption: 'Resumable')].
	object isDBEHalt
		ifTrue: [html with: (MaglevIcon flag
			caption: 'Database Explorer Halt')].
! !

MaglevObjectInline subclass: #MaglevFixnumInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevFixnumInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

!MaglevFixnumInline methodsFor: 'rendering'!

renderObjectActionsOn: html
! !

MaglevObjectInline subclass: #MaglevFloatInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevFloatInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

!MaglevFloatInline methodsFor: 'rendering'!

renderObjectActionsOn: html
! !

MaglevObjectInline subclass: #MaglevHashInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevHashInline methodsFor: 'constants'!

maxDepth
	^ 2
!

maxElements
	^ 3
! !

!MaglevHashInline methodsFor: 'rendering'!

renderLoadedObjectOn: html
	|showElements maxElements|
	maxElements := self maxElements.
	showElements := maxElements min: self object elementsSize.
	self renderText: '{' withDropDownOn: html.
	html with: ' '.
	self isShort
		ifTrue: [html with: ' ... ']
		ifFalse: [
			(1 to: showElements) do: [:idx | |key value|
				key := (self object at: idx) key.
				value := (self object at: idx) value.
				html 
					with: (key inlineViewComponentWithDepth: self depth + 1);
					with: '=>';
					with: (value inlineViewComponentWithDepth: self depth + 1).
				(idx < showElements or: [self object elementsSize > maxElements])
					ifTrue: [html with: ' , ']].
			self object elementsSize > maxElements
				ifTrue: [html with: ' ... ']].
	html with: ' '.
	self renderText: '}' withDropDownOn: html.
!

renderObjectWithDropDownOn: html
	"Do not render a drop down menu around the whole object."
	self renderObjectOn: html.
!

renderUnloadedObjectOn: html
	self renderText: '{' withDropDownOn: html.
	html with: '...'.
	self renderText: '}' withDropDownOn: html.
! !

MaglevObjectInline subclass: #MaglevMaglevRecordBaseInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevMaglevRecordBaseInline methodsFor: 'rendering'!

renderObjectActionsOn: html
	html with: (MaglevIcon hdd caption: 'MaglevRecord::Base')
! !

MaglevObjectInline subclass: #MaglevModuleInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevModuleInline methodsFor: 'constants'!

maxDepth
	^ 1
! !

MaglevModuleInline subclass: #MaglevClassInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevClassInline methodsFor: 'constants'!

maxDepth
	^ 1
!

renderObjectActionsOn: html
	html with: (MaglevIcon listAlt
			caption: 'List class instances').
! !

MaglevObjectInline subclass: #MaglevNilClassInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevNilClassInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevRubyWorkspaceInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevRubyWorkspaceInline methodsFor: 'rendering'!

renderObjectActionsOn: html
	html with: (MaglevIcon terminal caption: 'Workspace').
! !

MaglevObjectInline subclass: #MaglevStringInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevStringInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevSymbolInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevSymbolInline methodsFor: 'constants'!

hasDropDownDefault
	^ false
!

isDraggableDefault
	^ false
! !

MaglevObjectInline subclass: #MaglevThreadInline
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevThreadInline methodsFor: 'constants'!

maxInspection
	^ 25
!

renderObjectActionsOn: html
	object isRailsThread
		ifTrue: [html with: MaglevIconImage rails].
	object status = 'sleep'
		ifTrue: [html with: (MaglevIcon pause
			caption: 'Thread status: sleeping')].
	object status = 'false'
		ifTrue: [html with: (MaglevIcon stop
			caption: 'Thread status: stopped (false)')].
	object status = 'run'
		ifTrue: [html with: (MaglevIcon play
			caption: 'Thread status: running')].
	object status = 'aborting'
		ifTrue: [html with: (MaglevIcon trash
			caption: 'Thread status: aborting')].
! !

Widget subclass: #MaglevObjectInstancesView
	instanceVariableNames: 'object rangeFrom rangeTo instancesWaitBox contentBox'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectInstancesView methodsFor: 'accessing'!

currentInstVarNames
	|ivNames|
	ivNames := Set new.
	(self rangeFrom to: self rangeTo) do: [:idx | |obj|
		obj := self objectAt: idx.
		obj instVarsDo: [:key :value | ivNames add: key string]].
	^ ivNames
!

object
	^ object
!

object: anObject
	object := anObject.
!

objectAt: anIndex
	^ object instances at: anIndex
!

rangeFrom
	rangeFrom ifNil: [rangeFrom := 1].
	^ rangeFrom
!

rangeFrom: anInteger
	rangeFrom := anInteger.
!

rangeTo
	rangeTo ifNil: [rangeTo := 10].
	object instancesSize ifNotNil: [rangeTo := rangeTo min: object instancesSize].
	^ rangeTo
!

rangeTo: anInteger
	rangeTo := anInteger.
	object instancesSize ifNotNil: [rangeTo := rangeTo min: object instancesSize].
! !

!MaglevObjectInstancesView methodsFor: 'interactions'!

currentPage
	^ (self rangeFrom / 10) ceiled
!

pages
	^ (object instancesSize / 10) ceiled
! !

!MaglevObjectInstancesView methodsFor: 'rendering'!

renderInstVarTable
	|html|
	html := HTMLCanvas onJQuery: contentBox asJQuery.
	contentBox asJQuery empty.
	instancesWaitBox show.
	object 
		loadInstancesFrom: self rangeFrom 
		to: self rangeTo 
		withCallback: [:obj | |ivNames|
			instancesWaitBox hide.
			object := obj.
			ivNames := self currentInstVarNames.
			html table
				class: 'table table-bordered';
				style: 'margin-bottom: 0px;';
				with: [html thead with: [
					html tr with: [
						html th with: 'oop'.
						html th with: 'Object'.
						ivNames do: [:ivName | 
							html th with: ivName]]].
					html tbody with: [
						object instances do: [:obj |
							html tr with: [
								html td with: obj oop.
								html td with: obj inlineViewComponent.
								ivNames do: [:ivName |
									html td with: (obj instVarAt: ivName ifAbsent: MaglevInvalidObject instance) inlineViewComponent]]]]].
			self renderPaginationOn: html.
			instancesWaitBox hide].
!

renderOn: html
	instancesWaitBox := html div
		with: [html
				with: MaglevIcon wait;
				with: ' loading...'].
	contentBox := html div.
	self renderInstVarTable.
!

renderPaginationOn: html
	|firstPage lastPage currentPage|
	currentPage := self currentPage.
	firstPage := currentPage - 5 max: 1.
	lastPage := firstPage + 10 min: self pages.
	html
		div
		style: 'text-align: center;';
		with: [html span
				class: 'pagination';
				with: [html ul
					style: 'margin-top: 10px;';
					with: [(firstPage to: lastPage) do: [:index | |liClass|
						currentPage = index
							ifTrue: [liClass := 'disabled']
							ifFalse: [liClass := 'active'].
						html li
							class: liClass;
							with: [html a
								onClick: [
									self rangeFrom: (index - 1) * 10 + 1.
									self rangeTo: index * 10.
									self renderInstVarTable];
								with: index asString]]]]].
! !

Widget subclass: #MaglevTable
	instanceVariableNames: 'object collectionName rangeFrom rangeTo isAssociationDictionary tableBody currentPage pageListItems pagination'
	package: 'Maglev-Database-Explorer'!

!MaglevTable methodsFor: 'accessing'!

collection
	^ object perform: collectionName
!

collectionName
	^ collectionName
!

collectionName: aString
	collectionName := aString
!

collectionSize
	^ object perform: collectionName, 'Size'
!

currentPage
	currentPage ifNil: [currentPage := 1].
	^ currentPage
!

isAssociationDictionary
	isAssociationDictionary ifNil: [isAssociationDictionary := false].
	^ isAssociationDictionary
!

isAssociationDictionary: aBoolean
	isAssociationDictionary := aBoolean.
!

object
	^ object
!

object: anObject
	object := anObject.
!

pageSize
	^ 10
!

pages
	^ (self collectionSize / self pageSize) ceiled
!

rangeFrom
	rangeFrom ifNil: [rangeFrom := 1].
	^ rangeFrom
!

rangeFrom: anInteger
	rangeFrom := anInteger.
!

rangeTo
	^ self rangeFrom + self pageSize - 1 min: self collectionSize
! !

!MaglevTable methodsFor: 'rendering'!

renderAssociation: key to: value on: html
	html tr with: [
		html td with: key inlineViewComponent.
		html td with: value inlineViewComponent].
!

renderAssociationDictionaryBodyOn: html
	(self rangeFrom to: self rangeTo) do: [:idx | |obj|
		obj := self collection at: idx.
		html tr with: [
			html td with: obj key inlineViewComponent.
			html td with: obj value inlineViewComponent]].
!

renderDictionaryBodyOn: html
	(self rangeFrom to: self rangeTo) do: [:idx | |obj|
		obj := self collection at: idx.
		html tr with: [
			html td with: idx inlineViewComponent.
			html td with: obj inlineViewComponent]].
!

renderOn: html
	|pagClass|
	self pages = 1 
		ifTrue: [pagClass := 'display: none;']
		ifFalse: [pagClass := ''].
	html table
		class: 'table table-bordered';
		style: 'margin-bottom: 0px;';
		with: [tableBody := html tbody].
	html div
		style: 'text-align: center;';
		with: [pagination := html span
			class: 'pagination';
			style: pagClass].
	self renderPagination.
	self renderPage: 1.
!

renderPage: anInteger
	|html|
	currentPage := anInteger.
	html := HTMLCanvas onJQuery: tableBody asJQuery.
	rangeFrom := anInteger - 1 * self pageSize + 1.
	tableBody asJQuery empty.
	html 
		with: MaglevIcon wait;
		with: ' loading...'.
	self renderPagination.
	object 
		ensureIsLoaded: collectionName 
		from: rangeFrom 
		to: self rangeTo 
		withCallback: [
			tableBody asJQuery empty.
			self renderTableBodyOn: (HTMLCanvas onJQuery: tableBody asJQuery)].
!

renderPagination
	|firstPage lastPage html|
	pageListItems := Dictionary new.
	firstPage := self currentPage - 5 max: 1.
	lastPage := firstPage + 10 min: self pages.
	pagination asJQuery empty.
	html := (HTMLCanvas onJQuery: pagination asJQuery).
	pagination
		with: [html ul
			style: 'margin-top: 10px;';
			with: [(firstPage to: lastPage) do: [:index | |liClass|
				currentPage = index
					ifTrue: [liClass := 'disabled']
					ifFalse: [liClass := 'active'].
				html li
					class: liClass;
					with: [html a
						onClick: [self renderPage: index];
						with: index asString]]]].
!

renderTableBodyOn: html
	self isAssociationDictionary 
			ifTrue: [self renderAssociationDictionaryBodyOn: html. ^ self]
			ifFalse: [self renderDictionaryBodyOn: html. ^ self].
! !

!MaglevTable class methodsFor: 'instance creation'!

newAssociationDictFor: anObject with: aString
	^ self basicNew
		object: anObject;
		collectionName: aString;
		isAssociationDictionary: true;
		initialize;
		yourself
!

newFor: anObject with: aString
	^ self basicNew
		object: anObject;
		collectionName: aString;
		initialize;
		yourself
! !

Widget subclass: #MaglevWindow
	instanceVariableNames: 'container navigationItem'
	package: 'Maglev-Database-Explorer'!

!MaglevWindow methodsFor: 'accessing'!

container
	^ container
!

navigationItem
	^ navigationItem
!

navigationItem: anObject
	navigationItem := anObject.
! !

!MaglevWindow methodsFor: 'attributes'!

left: aValue
	container left: aValue.
!

top: aValue
	container top: aValue.
! !

!MaglevWindow methodsFor: 'interactions'!

clear
	container asJQuery empty.
!

closeWindow
	MaglevJsPlumb deleteEndpointsFor: container asJQuery.
	container asJQuery remove.
!

connectTo: aWindow as: type with: caption
	MaglevJsPlumb connectWindow: self to: aWindow as: type with: caption.
!

connectTo: aWindow with: parameters
	MaglevJsPlumb connectWindow: self to: aWindow with: parameters.
!

moveToFront
	container asJQuery css: 'z-index' data: self class highestZIndex + 1.
!

prepareWindow
	MaglevJsPlumb prepareObject: (container asJQuery).
	container
		onMouseEnter: [container removeClass: 'window-mouse-out'];
		onMouseLeave: [container addClass: 'window-mouse-out'].
!

replace: aWindow
	aWindow clear.
	container := aWindow container.
! !

!MaglevWindow methodsFor: 'rendering'!

appendToWorkspace
   self renderOn: (HTMLCanvas onJQuery: '#workspace' asJQuery).
!

renderCloseButtonOn: html
	html span
		class: 'display-inline-block';
		style: 'float: right; margin-top: 3px; margin-left: 3px;';
		with: [html a
				href: '#';
				class: 'window-close-button';
				onClick: [self closeWindow];
				with: MaglevIcon remove].
!

renderHeightPlaceholderOn: html
	html span
		style: 'visibility: hidden;';
		with: [
			html a
				class: 'btn';
				with: 'a'].
!

renderHorziontalLineOn: html
	html hr style: 'margin: 10px;'.
!

renderNavigationOn: html
	html with: 'New window'.
!

renderOn: html
	container ifNil: [
		container := html div.
		self prepareWindow].
	container
		class: 'component window';
		with: [
			html div
				class: 'nowrap';
				with: [
					self renderWindowTitleOn: html.
					self renderWindowContentOn: html]].
	container onMouseDown: [self moveToFront].
	self moveToFront.
!

renderReplace
	self renderOn: (HTMLCanvas onJQuery: container asJQuery).
!

renderWindowContentOn: html
!

renderWindowTitleContentOn: html
	html with: 'A new window'.
	self renderHeightPlaceholderOn: html.
	self renderCloseButtonOn: html.
!

renderWindowTitleOn: html
	html div
		class: 'window-title';
		with: [html span
				class: 'window-title-content';
				with: [self renderWindowTitleContentOn: html]].
! !

!MaglevWindow methodsFor: 'testing'!

isWaitingWindow
	^ false
! !

!MaglevWindow class methodsFor: 'instance creation'!

newReplace: aWindow
	^ self new
		replace: aWindow;
		yourself
! !

!MaglevWindow class methodsFor: 'interactions'!

highestZIndex
	< var indexHighest = 0;
	$('.window').each(function(){
		var indexCurrent = parseInt($(this).css("z-index"), 10);
		if(indexCurrent >> indexHighest) {
			indexHighest = indexCurrent;
		}
	});
	return indexHighest; >.
! !

MaglevWindow subclass: #MaglevObjectWindow
	instanceVariableNames: 'container object classObject tabs captions tabsContainer currentTab'
	package: 'Maglev-Database-Explorer'!

!MaglevObjectWindow methodsFor: 'accessing'!

captions
	captions ifNil: [captions := Dictionary new].
	^ captions
!

container
	^ container
!

object
	^ object
!

object: anObject
	object := anObject.
	classObject := anObject classObject.
!

tabs
	tabs ifNil: [tabs := Dictionary new].
	^ tabs
! !

!MaglevObjectWindow methodsFor: 'interactions'!

closeWindow
	MaglevObjectSpace instance unregisterWindow: self.
	super closeWindow.
!

defaultTab
	^ nil
!

makeCurrentTabResizable
	currentTab
		style: 'overflow: hidden;'.
	currentTab asJQuery children first 
		attr: 'style' with: 'width: 100%; height: 100%; overflow: auto;'.
	currentTab asJQuery resizable.
!

prepareWindow
	super prepareWindow
	MaglevObjectSpace registerWindow: self.
!

replace: aWindow
	super replace: aWindow.
	aWindow isWaitingWindow
		ifFalse: [MaglevObjectSpace instance unregisterWindow: aWindow].
	MaglevObjectSpace instance registerWindow: self.
!

showTab: caption
	|allTabs|
	allTabs := self contentTabs.
	"Lazy generate new tabs."
	((self tabs includesKey: caption) not and: [allTabs includesKey: caption])
		ifTrue: [ |tab html|
			html := HTMLCanvas onJQuery: tabsContainer asJQuery.
			tab := html div
				with: [
					html div
						with: [self perform: (allTabs at: caption) withArguments: {html}]].
			self tabs at: caption put: tab].
	self tabs keysAndValuesDo: [:tabCaption :tab | |capEl|
		capEl := self captions at: tabCaption.
		caption = tabCaption
			ifTrue: [
				currentTab := tab.
				tab show.
				capEl addClass: 'active']
			ifFalse: [
				tab hide.
				capEl removeClass: 'active']].
	"return false to avoid scrolling to the top"
	^ false
! !

!MaglevObjectWindow methodsFor: 'rendering'!

checkAddConnectionTo: aWindow
	object instVarsDo: [:ivName :ivValue |
		ivValue == aWindow object ifTrue: [self connectTo: aWindow as: #iv with: ivName inspection]].
	(object classObject == aWindow object and: [object virtualClassObject ~~ aWindow object]) 
		ifTrue: [self connectTo: aWindow as: #class with: nil].
	object virtualClassObject == aWindow object 
		ifTrue: [self connectTo: aWindow as: #virtualClass with: nil].
!

contentTabs
	|result|
	result := Dictionary new.
	self object hasInstVars 
		ifTrue: [result at: 'Instance Variables' put: #renderInstanceVariablesOn:].
	object customTabs do: [:customTab | |selector|
		selector := 'renderCustom', (customTab at: 2), 'On:'.
		self class compile: selector, 'html    ', (customTab at: 3).
		result at: (customTab at: 1) put: selector asSymbol].
	^ result
!

renderInstanceVariablesOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #instVars).
!

renderNavigationOn: html
	html with: object inlineViewComponentNavItem.
!

renderVirtualClassAndClassOn: html
	classObject = object virtualClassObject ifFalse: [
		html
			with: ' : ';
			with: object virtualClassObject inlineViewComponent].
	html 
		with: ' :: ';
		with: classObject inlineViewComponent.
!

renderWindowContentOn: html
	|allTabs firstCaption defaultTab|
	allTabs := self contentTabs.
	allTabs size > 0 ifTrue: [
		html ul
			class: 'nav nav-tabs';
			style: 'display: inline-block; margin-bottom: 0px; margin-top: 5px; width: 100%;';
			with: [
				html li
					style: 'float: right;';
					onClick: [self makeCurrentTabResizable];
					with: [
						html a
							href: '#';
							onClick: [self makeCurrentTabResizable];
							with: MaglevIcon resizeSmall].
				self contentTabs keysAndValuesDo: [:caption :generator | |capEl|
					firstCaption ifNil: [firstCaption := caption].
					capEl := html li with: [
						html a
							href: '#';
							onClick: [self showTab: caption];
							with: caption].
				self captions at: caption put: capEl]]].
	tabsContainer := html div.
	defaultTab := self defaultTab.
	defaultTab 
		ifNil: [firstCaption ifNotNil: [self showTab: firstCaption]]
		ifNotNil: [self showTab: defaultTab].
!

renderWindowTitleContentOn: html
	html with: object inlineViewComponentShort.
	html with: [
		html span
			style: 'margin-left: 5px;';
			with: '<0x', object oop asHexString, '>'].
	self renderHeightPlaceholderOn: html.
	html div
		class: 'right-inline-block';
		with: [
			self renderVirtualClassAndClassOn: html.
			self renderCloseButtonOn: html].
! !

!MaglevObjectWindow class methodsFor: 'instance creation'!

newReplace: aWindow with: anObject
	^ self new
		object: anObject;
		replace: aWindow;
		yourself
! !

MaglevObjectWindow subclass: #MaglevArrayWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevArrayWindow methodsFor: 'interactions'!

defaultTab
	^ 'Elements'
! !

!MaglevArrayWindow methodsFor: 'rendering'!

checkAddConnectionTo: aWindow
	super checkAddConnectionTo: aWindow.
	object elements keysAndValuesDo: [:idx :value |
		value == aWindow object ifTrue: [self connectTo: aWindow as: #arrayElement with: idx]].
!

contentTabs
	|result|
	result := super contentTabs.
	self object hasElements 
		ifTrue: [result at: 'Elements' put: #renderArrayElementsOn:].
	^ result
!

renderArrayElementsOn: html
	html with: (MaglevTable newFor: self object with: #elements).
! !

MaglevObjectWindow subclass: #MaglevExceptionWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevFixnumWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevFloatWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevHashWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevHashWindow methodsFor: 'interactions'!

defaultTab
	^ 'Associations'
! !

!MaglevHashWindow methodsFor: 'rendering'!

checkAddConnectionTo: aWindow
	super checkAddConnectionTo: aWindow.
	object keysAndValuesDo: [:key :value |
		key == aWindow object ifTrue: [self connectTo: aWindow as: #hashKey with: 'self[...] = ', value shortInspection].
		value == aWindow object ifTrue: [self connectTo: aWindow as: #hashValue with: 'self[', key shortInspection, '] = ...']].
!

contentTabs
	|result|
	result := super contentTabs.
	self object hasElements 
		ifTrue: [result at: 'Associations' put: #renderHashElementsOn:].
	^ result
!

renderHashElementsOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #elements).
! !

MaglevObjectWindow subclass: #MaglevMaglevRecordBaseWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevMaglevRecordBaseWindow methodsFor: 'rendering'!

contentTabs
	|result|
	result := super contentTabs.
	result at: 'Attributes' put: #renderAttributesOn:.
	^ result
!

renderAttributesOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #attributes).
! !

MaglevObjectWindow subclass: #MaglevModuleWindow
	instanceVariableNames: 'categoryNamesSelect selectorsSelect selectors rubySelectors methodContainer waitingScreen hierarchyContainer'
	package: 'Maglev-Database-Explorer'!

!MaglevModuleWindow methodsFor: 'initializing'!

initializeTree: container
	< container.jstree({
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
		});}, 0); >
! !

!MaglevModuleWindow methodsFor: 'interactions'!

defaultTab
	^ 'Code'
!

renderHierarchySubclass: cls for: oop
	< var ownerLi = self['@hierarchyContainer']._asJQuery().find("[data-oop='" + oop + "']");
	if (ownerLi.find("[data-oop='" + cls._oop() + "']").length == 0) {
		self['@hierarchyContainer']._asJQuery().jstree('create', ownerLi, null, {attr: {'data-oop': cls._oop(), 'data-replace-me': '1'}}, null, true);
	} >
!

renderSelectors: selectedCategory
	|currentSelectors|
	selectorsSelect clear.
	currentSelectors := selectors at: selectedCategory.
	currentSelectors ifNil: [^ self].
	currentSelectors do: [:sel |
		selectorsSelect 
			with: [:html | html with: sel]
			data: sel].
!

renderSourceCode: selectorString
	|selectedCategory|
	methodContainer asJQuery empty.
	selectorString ifNil: [^ self].
	waitingScreen show.
	selectedCategory := self selectedCategoryString.
	selectedCategory = '(all Ruby)'
		ifTrue: [self renderRubySourceCodeFor: selectorString]
		ifFalse: [self renderSmalltalkSourceCodeFor: selectorString].
!

replaceHierarchySubclasses
	< self['@hierarchyContainer']._asJQuery().find("[data-replace-me='1']").each(function(idx, el) {
		// TODO: jQuery not working here for unknown reasons
		el.getElementsByTagName('a')[0].remove();
		el.removeAttribute('data-replace-me');
		var jqEl = $(el);
		self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
	}); >
!

selectedCategoryString
	^ categoryNamesSelect selectedData
! !

!MaglevModuleWindow methodsFor: 'rendering'!

contentTabs
	|result|
	result := super contentTabs.
	self object hasConstants 
		ifTrue: [result at: 'Constants' put: #renderConstantsOn:].
	self object hasIncludedModules
		ifTrue: [result at: 'Included Modules' put: #renderIncludedModulesOn:].
	result at: 'Code' put: #renderCodeTabOn:.
	result at: 'Hierarchy' put: #renderHierarchyOn:.
	^ result
!

renderCodeTabOn: html
	html root
		style: 'width: 100%;'.
	self renderListsOn: html.
	waitingScreen := html div
		with: [html
			with: MaglevIcon wait;
			with: ' loading...'].
	methodContainer := html div
		style: 'margin-top: 10px;'.
	self object allSelectorsWithCallback: [:obj |
		selectors := obj.
		self renderSelectorCategories.
		waitingScreen hide.
		categoryNamesSelect show.
		selectorsSelect show].
!

renderConstantsOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #constants).
!

renderHierarchyOn: htmlIn
	|waitingBox hcContainer|
	hcContainer := htmlIn div
		style: 'height: 300px; overflow: hidden;'.
	waitingBox := htmlIn div with: [
		htmlIn 
			with: MaglevIcon wait;
			with: ' loading...'].
	object ensureSuperListLoadedWithCallback: [ |renderedInlines html|
		html := HTMLCanvas onJQuery: hcContainer asJQuery.
		renderedInlines := Array new.
		hierarchyContainer := html div 
			style: 'width: 100%; height: 100%; overflow: auto;';
			with: [ |lastUl|
				lastUl := html ul.
				object superList do: [:cls | "render superclasses"
					lastUl with: [
						html li
							data: 'oop' with: cls oop asString;
							with: [|container|
								container := html span 
									data: 'oop' with: cls oop asString;
									class: 'treeview-replace-me'.
								renderedInlines add: container];
							with: [lastUl := html ul]]]].
		self initializeTree: hierarchyContainer asJQuery.
		hcContainer asJQuery resizable.
		waitingBox hide].
!

renderIncludedModulesOn: html
	html with: (MaglevTable newFor: self object with: #includedModules).
!

renderInlineViewFor: oop inside: htmlElement
	|html subclassesButton waitIcon|
	html := HTMLCanvas onJQuery: htmlElement.
	waitIcon := MaglevIcon wait.
	html with: waitIcon.
	waitIcon hide.
	subclassesButton := MaglevIcon codeFork.
	html with: [html a with: subclassesButton].
	subclassesButton onClick: [ |obj|
		subclassesButton hide.
		waitIcon show.
		obj := MaglevObjectSpace instance at: oop.
		obj ensureSubclassesLoadedWithCallback: [
			obj subclasses do: [:cls |
				self renderHierarchySubclass: cls for: oop].
			self replaceHierarchySubclasses.
			waitIcon hide]].
	(MaglevObjectSpace instance at: oop) inlineViewComponentFull renderOn: html.
!

renderListsOn: html
	categoryNamesSelect := MaglevListBox new.
	html with: categoryNamesSelect.
	categoryNamesSelect
		changedCallback: [:cat :index | self renderSelectors: cat];
		height: 250;
		style: 'float: left; width: 50%; margin-right: 10px; margin-left: 0px; display: inline-block;';
		hide.
	selectorsSelect := MaglevListBox new.
	html with: selectorsSelect.
	selectorsSelect
		changedCallback: [:sel :index | self renderSourceCode: sel];
		height: 250;
		style: 'display: inline-block; width: 50%; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 10px;';
		hide.
!

renderMethodObject: obj
	|methodEditor|
	methodEditor := MaglevGsNMethodEditor for: obj.
	methodEditor classObject: object.
	methodContainer with: methodEditor.
	waitingScreen hide.
!

renderRubySourceCodeFor: selectorString
	object 
		sourceCodeFor: selectorString 
		language: 'ruby'
		withCallback: [:obj | self renderMethodObject: obj].
!

renderSelectorCategories
	categoryNamesSelect clear.
	selectors keysAndValuesDo: [:category :catSelectors |
		categoryNamesSelect with: [:html |
			category = '(all Ruby)' 
				ifTrue: [html with: MaglevIconImage ruby]
				ifFalse: [html with: MaglevIconImage smalltalk].
			html with: category]
			data: category].
!

renderSmalltalkSourceCodeFor: selectorString
	object 
		sourceCodeFor: selectorString 
		language: 'smalltalk'
		withCallback: [:obj | self renderMethodObject: obj].
!

sortList: aListBox
	|box children|
	box := aListBox asJQuery.
	< children = box.children('option').sort(function (a, b) {return a.innerHTML >> b.innerHTML ? 1 : -1}); >.
	box empty.
	children appendTo: box.
! !

MaglevModuleWindow subclass: #MaglevClassWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevClassWindow methodsFor: 'rendering'!

checkAddConnectionTo: aWindow
	super checkAddConnectionTo: aWindow.
	object superclassObject == aWindow object ifTrue: [self connectTo: aWindow as: #superclass with: nil].
!

contentTabs
	|result|
	result := super contentTabs.
	result at: 'Instances' put: #renderInstancesOn:.
	^ result
!

renderInstancesOn: html
	html with: object instancesViewComponent.
!

renderWindowTitleContentOn: html
	html 
		with: object inlineViewComponentShort;
		with: ' < ';
		with: object superclassObject inlineViewComponent.
	html with: [
		html span
			style: 'margin-left: 5px;';
			with: '<0x', object oop asHexString, '>'].
	self renderHeightPlaceholderOn: html.
	html div
		class: 'right-inline-block';
		with: [
			self renderVirtualClassAndClassOn: html.
			self renderCloseButtonOn: html].
! !

MaglevClassWindow subclass: #MaglevSystemClassWindow
	instanceVariableNames: 'transactionResultBox persistenceModeButton'
	package: 'Maglev-Database-Explorer'!

!MaglevSystemClassWindow methodsFor: 'interactions'!

abortTransaction
	self showTransactionWaitingBox.
	object 
		evaluate: 'self.__DBEAbortTransaction'
		language: 'ruby'
		withCallback: [:success :resultObj |
			transactionResultBox asJQuery empty.
			transactionResultBox removeClass: 'alert-info'.
			success
				ifTrue: [transactionResultBox addClass: 'alert-success']
				ifFalse: [transactionResultBox addClass: 'alert-error'].
			transactionResultBox with: resultObj inlineViewComponent].
!

commitTransaction
	self showTransactionWaitingBox.
	object 
		evaluate: 'self.__DBECommitTransaction'
		language: 'ruby'
		withCallback: [:success :resultObj |
			transactionResultBox asJQuery empty.
			transactionResultBox removeClass: 'alert-info'.
			success
				ifTrue: [transactionResultBox addClass: 'alert-success']
				ifFalse: [transactionResultBox addClass: 'alert-error'].
			transactionResultBox with: resultObj inlineViewComponent].
!

continueTransaction
	self showTransactionWaitingBox.
	object 
		evaluate: 'self.__DBEContinueTransaction'
		language: 'ruby'
		withCallback: [:success :resultObj |
			transactionResultBox asJQuery empty.
			transactionResultBox removeClass: 'alert-info'.
			success
				ifTrue: [transactionResultBox addClass: 'alert-success']
				ifFalse: [transactionResultBox addClass: 'alert-error'].
			transactionResultBox with: resultObj inlineViewComponent].
!

defaultTab
	^ 'Control Panel'
!

togglePersistentMode
	self showTransactionWaitingBox.
	object 
		evaluate: 'self.__DBETogglePersistenceMode'
		language: 'ruby'
		withCallback: [:success :resultObj |
			transactionResultBox asJQuery empty.
			transactionResultBox removeClass: 'alert-info'.
			success
				ifTrue: [
					transactionResultBox addClass: 'alert-success'.
					resultObj value = true
						ifTrue: [persistenceModeButton asJQuery addClass: 'active']
						ifFalse: [persistenceModeButton asJQuery removeClass: 'active'].
					transactionResultBox hide]
				ifFalse: [transactionResultBox addClass: 'alert-error'].
			transactionResultBox with: resultObj inlineViewComponent].
!

updatePersistentMode
	self showTransactionWaitingBox.
	object 
		evaluate: 'self.__DBEPersistenceMode'
		language: 'ruby'
		withCallback: [:success :resultObj |
			transactionResultBox asJQuery empty.
			transactionResultBox removeClass: 'alert-info'.
			success
				ifTrue: [
					transactionResultBox addClass: 'alert-success'.
					resultObj value = true
						ifTrue: [persistenceModeButton asJQuery addClass: 'active']
						ifFalse: [persistenceModeButton asJQuery removeClass: 'active'].
					transactionResultBox hide]
				ifFalse: [transactionResultBox addClass: 'alert-error'].
			transactionResultBox with: resultObj inlineViewComponent].
! !

!MaglevSystemClassWindow methodsFor: 'rendering'!

contentTabs
	|result|
	result := super contentTabs.
	result at: 'Stone Version Report' put: #renderStoneVersionReportOn:.
	result at: 'Gem Version Report' put: #renderGemVersionReportOn:.
	result at: 'Control Panel' put: #renderControlPanelOn:.
	^ result
!

renderControlPanelOn: html
	html with:	[
		html div
			class: 'well';
			with: [
				html input
					type: 'button';
					class: 'btn btn-warning';
					value: 'Abort Transaction';
					style: 'width: 25%; margin-right: 1%;';
					onClick: [self abortTransaction].
				html input
					type: 'button';
					class: 'btn btn-warning';
					value: 'Commit Transaction';
					style: 'width: 25%; margin-right: 1%;';
					onClick: [self commitTransaction].
				html input
					type: 'button';
					class: 'btn btn-warning';
					value: 'Continue Transaction';
					style: 'width: 25%; margin-right: 1%;';
					onClick: [self continueTransaction].
				persistenceModeButton := html input
					type: 'button';
					class: 'btn';
					value: 'Persistent Mode';
					style: 'width: 22%;';
					onClick: [self togglePersistentMode].
				transactionResultBox := html div
					style: 'margin-top: 10px; margin-bottom: 0px;';
					class: 'alert';
					hide]].
	self updatePersistentMode.
!

renderGemVersionReportOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #gemVersionReport).
!

renderStoneVersionReportOn: html
	html with: (MaglevTable newAssociationDictFor: self object with: #stoneVersionReport).
!

showTransactionWaitingBox
	transactionResultBox
		addClass: 'alert-info';
		removeClass: 'alert-success';
		removeClass: 'alert-error'.
	transactionResultBox asJQuery empty.
	transactionResultBox
		with: MaglevIcon wait;
		with: ' loading...';
		show.
! !

MaglevObjectWindow subclass: #MaglevNilClassWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevRubyWorkspaceWindow
	instanceVariableNames: 'terminalBox commandBox'
	package: 'Maglev-Database-Explorer'!

!MaglevRubyWorkspaceWindow methodsFor: 'interactions'!

defaultTab
	^ 'Workspace'
!

handleEnter
	|command html|
	html := HTMLCanvas onJQuery: terminalBox asJQuery.
	command := commandBox asJQuery val.
	command := command replace: '''' with: ''''''.
	commandBox asJQuery prop: 'disabled' value: true.
	html
		with: command;
		with: html br.
	object 
		evaluate: 'self.evaluate(''', command, ''')'
		language: 'ruby'
		withCallback: [:success :resultObj | |class|
			(resultObj at: 1) value
				ifTrue: [class := 'alert alert-error']
				ifFalse: [class := 'alert alert-success'].
			terminalBox with: [html div
				class: class;
				with: '=> ';
				with: (resultObj at: 2) inlineViewComponent;
				with: html br].
			self scrollToBottom.
			commandBox asJQuery prop: 'disabled' value: false.
			commandBox asJQuery val: ''].
!

scrollToBottom
	terminalBox asJQuery scrollTop: (terminalBox asJQuery at: 0) scrollHeight.
! !

!MaglevRubyWorkspaceWindow methodsFor: 'rendering'!

contentTabs
	|result|
	result := super contentTabs.
	result at: 'Workspace' put: #renderWorkspaceOn:.
	^ result
!

mouseFix
	< var editor = self['@terminalBox'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); >
!

renderWorkspaceOn: html
	terminalBox := html pre
		style: 'height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;'.
	commandBox := html input
		type: 'text';
		style: 'width: 97%;';
		onKeyPress: [:evt | evt keyCode == 13 
			ifTrue: [self handleEnter]].
	self mouseFix.
! !

MaglevObjectWindow subclass: #MaglevStringWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevSymbolWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

MaglevObjectWindow subclass: #MaglevThreadWindow
	instanceVariableNames: 'methodSelect methodContainer waitingScreen waitForStackTrace'
	package: 'Maglev-Database-Explorer'!

!MaglevThreadWindow methodsFor: 'accessing'!

frameIndex
	^ methodSelect selectedDataIndex
! !

!MaglevThreadWindow methodsFor: 'interactions'!

defaultTab
	^ 'Stack Trace'
!

isMethodUnimportant: aString
	|unimportant|
	unimportant := {'AbstractException >>'.  'AbstractException class'. 'GsProcess >>'. 'GsProcess class'. 
			'ProcessorScheduler >>'. 'ProcessorScheduler class'. 'CodeEvaluation class'. 'RubyCompiler >>'. 
			'RubyCompiler class'. 'onException:do:'. 'RubyProc >> callAndRescue:'. '_gsReturnToC'. 
			'>> onSynchronous:do:'. 'ExecBlock >> ensure:'. 'ExecBlock >> rubyEnsure:'}.
	unimportant do: [:str |
		(aString includesSubString: str) 
			ifTrue: [^ true]].
	^ false
!

proceed
	object 
		proceedWithCallback: [:obj | 
			object fullReloadWithCallback: [:threadReloaded |
				object isRailsThread
					ifTrue: [self closeWindow]
					ifFalse: [(threadReloaded windowViewComponentReplace: self) renderReplace]]].
!

reloadStackWithCallback: aBlock
	|html|
	waitForStackTrace show.
	methodSelect clear.
	object stackTraceMethodsWithCallback: [:obj |
		obj do: [:method | |isUnimportant|
			isUnimportant := self isMethodUnimportant: method.
			methodSelect
				with: [:html | 
					(method includesSubString: '(envId 0)')
						ifTrue: [html with: MaglevIconImage smalltalk].
					(method includesSubString: '(envId 1)')
						ifTrue: [html with: MaglevIconImage ruby].
					(method includesSubString: '(envId 1b)')
						ifTrue: [html with: MaglevIconImage rubySmalltalkBridge].
					html with: method] darker: isUnimportant].
		waitForStackTrace hide.
		aBlock = nil
			ifFalse: [aBlock value]].
!

selectStackFrame: anInteger
	< self['@methodSelect']._asJQuery()[0].selectedIndex = anInteger - 1; >.
	self renderFrame: anInteger.
!

stepInto
	|frameIndex|
	frameIndex := self frameIndex.
	object 
		stepInto: frameIndex
		withCallback: [:obj | 
			self reloadStackWithCallback: [
				self selectStackFrame: frameIndex]].
!

stepOver
	|frameIndex|
	frameIndex := self frameIndex.
	object 
		stepOver: frameIndex
		withCallback: [:obj | self reloadStackWithCallback: [
			self selectStackFrame: frameIndex]].
!

trimStack
	|frameIndex|
	frameIndex := self frameIndex.
	object 
		trimTo: frameIndex
		withCallback: [:obj | self reloadStackWithCallback: [
			self selectStackFrame: frameIndex]].
! !

!MaglevThreadWindow methodsFor: 'rendering'!

contentTabs
	|result|
	result := super contentTabs.
	result at: 'Stack Trace' put: #renderStackTraceOn:.
	result at: 'Thread Local Storage' put: #renderLocalStorageOn:.
	^ result
!

renderButtonsOn: html
	html div
		class: 'button-area';
		style: 'margin-bottom: 10px;';
		with: [
			html input
				type: 'button';
				class: 'btn btn-primary';
				value: 'Proceed';
				style: 'margin-right: 1%; width: 24%;';
				onClick: [self proceed].
			html input
				type: 'button';
				class: 'btn btn-primary';
				value: 'Step into';
				style: 'margin-right: 1%; width: 24%;';
				onClick: [self stepInto].
			html input
				type: 'button';
				class: 'btn btn-primary';
				value: 'Step over';
				style: 'margin-right: 1%; width: 24%;';
				onClick: [self stepOver].
			html input
				type: 'button';
				class: 'btn btn-primary';
				value: 'Trim stack';
				style: 'width: 25%;';
				onClick: [self trimStack]].
!

renderFrame: frameIndex
	methodContainer asJQuery empty.
	waitingScreen show.
	frameIndex > 0
		ifTrue: [object
			stackFrame: frameIndex 
			withCallback: [:obj |
				methodContainer asJQuery empty.
				methodContainer with: (MaglevGsNMethodDebugEditor for: obj).
				waitingScreen hide]]
		ifFalse: [waitingScreen hide].
!

renderLocalStorageOn: html
	html with: (MaglevTable newAssociationDictFor: object localStorage with: #elements).
!

renderStackTraceOn: html
	waitForStackTrace := html div
		with: [html
				with: MaglevIcon wait;
				with: ' loading...'].
	methodSelect := MaglevListBox new.
	html with: methodSelect.
	methodSelect
		changedCallback: [:text :index | self renderFrame: index];
		height: 250;
		style: 'width: 100%;'.
	self renderButtonsOn: html.
	waitingScreen := html div
		with: [html
			with: MaglevIcon wait;
			with: ' loading...'];
		hide.
	methodContainer := html div.
	self reloadStackWithCallback: nil.
! !

MaglevWindow subclass: #MaglevSearchWindow
	instanceVariableNames: 'maglev selectBox waitForResult listContents methodContainer waitingScreen'
	package: 'Maglev-Database-Explorer'!

!MaglevSearchWindow methodsFor: 'not yet classified'!

listIndex
	^ (selectBox asJQuery at: 0) selectedIndex + 1
!

maglev
	maglev ifNil: [maglev := Maglev instance].
	^maglev
!

renderClass
	|listElement cls selector envId|
	waitingScreen show.
	listElement := listContents at: self listIndex.
	cls := (listElement at: 1) at:1.
	envId :=  ((listElement at: 1) at:2) inspection asNumber.
	selector := listElement at: 2.
	envId = 0 ifTrue:[
		cls sourceCodeFor: selector language: 'smalltalk' withCallback: [:obj| 
			self renderMethodObject: obj.]			
	]
	ifFalse:[
		cls sourceCodeFor: selector language: 'ruby' withCallback: [:obj|
			self renderMethodObject: obj]
	]
!

renderListOf: selectors
	|html|
	html := HTMLCanvas onJQuery: selectBox asJQuery.
	selectBox asJQuery empty.
	listContents := Array new.
	selectors do:[:selector| 
		self maglev implementersOf: selector withCallback:[:success :obj|
			obj hasElements ifTrue:[
				selectBox
				with: [obj do: [:cls |
					listContents add: {cls. selector}.
					html option with: (cls at:1) inspection, '>>' , selector]];
				size: 10;
				style: 'width: 100%;';
				show
				"onChange: [self renderClass]"
			].
			waitForResult hide.
		]
	]
!

renderMethodObject: obj
	methodContainer asJQuery empty.
	methodContainer with: (MaglevGsNMethodEditor for: obj).
	waitingScreen hide.
!

renderWindowContentOn: html
	html div
		class: 'maglev-search'; 
		with: [
		html form
			class: 'search-form';
			onSubmit: [:e|e preventDefault. self searchSelectorsAndClasses.]; 
			with:[
			html input
				class: 'search-input'
			]
		].
	selectBox := html select
			size: 10;
			style: 'width: 100%;';
			onChange: [self renderClass];
			hide.
	waitForResult := html div
		with: [html
				with: MaglevIcon wait;
				with: ' loading...'];
		hide.
	waitingScreen := html div
			with: [html
				with: MaglevIcon wait;
				with: ' loading...'];
			hide.
	methodContainer := html div.
!

searchSelectorsAndClasses
	|input maglev selectors|
	input := '.search-input' asJQuery val.
	selectors := Array new.
	waitForResult show.
	self maglev findMethodNamesMatching: input with:[:success :obj| 
		success ifTrue: [selectors addAll: (obj string tokenize: ' ').
		self renderListOf: selectors]. 
		
	].
! !

MaglevWindow subclass: #MaglevWaitingWindow
	instanceVariableNames: ''
	package: 'Maglev-Database-Explorer'!

!MaglevWaitingWindow methodsFor: 'rendering'!

renderWindowContentOn: html
!

renderWindowTitleOn: html
	html
		with: MaglevIcon wait;
		with: ' loading...'.
! !

!MaglevWaitingWindow methodsFor: 'testing'!

isWaitingWindow
 	^ true
! !

MaglevWindow subclass: #MaglevWebBrowserWindow
	instanceVariableNames: 'url inputUrl iframe'
	package: 'Maglev-Database-Explorer'!

!MaglevWebBrowserWindow methodsFor: 'accessing'!

url
	^ url
!

url: aString
	url := aString.
	inputUrl asJQuery attr: 'value' with: aString.
	iframe asJQuery attr: 'src' with: aString.
! !

!MaglevWebBrowserWindow methodsFor: 'rendering'!

renderWindowContentOn: html
	|iframeContainer|
	html div
		class: 'input-prepend';
		style: 'width: 100%; margin-top: 10px; box-sizing: border-box; padding-right: 51px; margin-bottom: 5px;';
		with: [
			html span 
				class: 'add-on';
				with: 'URL'.
			inputUrl := html input	
				type: 'text';
				style: 'width: 100%;';
				onKeyPress: [:evt | evt which = 13
					ifTrue: [self url: inputUrl asJQuery val]]].
	iframeContainer := html div 
		style: 'margin-bottom: 5px; margin-right: 5px;';
		with: [
			iframe := html iframe
				style: 'width: 100%; height: 100%; border: 1px solid #ccc;';
				frameborder: '0';
				src: 'about:blank'].
	iframeContainer asJQuery resizable.
!

renderWindowTitleContentOn: html
	html with: MaglevIcon globe.
	html with: 'Web Browser'.
	self renderHeightPlaceholderOn: html.
	self renderCloseButtonOn: html.
! !

!MaglevWebBrowserWindow class methodsFor: 'instance creation'!

defaultUrl
	< var port = parseInt(window.location.host.split(':')[1]) - 1;
	return window.location.protocol + '//' + window.location.host.split(':')[0] + ':' + port + '/'; >
!

showNew
	^ self new
		appendToWorkspace;
		url: self defaultUrl.
! !

