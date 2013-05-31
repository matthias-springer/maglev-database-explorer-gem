Smalltalk current createPackage: 'Maglev-Core' properties: #{}!
Object subclass: #Maglev
	instanceVariableNames: 'objectSpace windows bottomNavHtml'
	package: 'Maglev-Core'!

!Maglev methodsFor: 'accessing'!

objectSpace
	objectSpace ifNil: [objectSpace := MaglevObjectSpace instance].
	^ objectSpace
! !

!Maglev methodsFor: 'initializing'!

initialize
	windows := OrderedCollection new.
	bottomNavHtml := HTMLCanvas onJQuery: '#windows-navigation' asJQuery.
! !

!Maglev methodsFor: 'interactions'!

addWindow: aWindow
	self renderNavigationItemFor: aWindow.
	windows add: aWindow.
	self showConnectionsFor: aWindow.
!

evaluateWithoutUpdate: code language: aString with: additionalParams withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'language' put: aString;
		at: 'code' put: code;
		addAll: additionalParams;
		yourself.
	MaglevAjax 
		ajax: 'object/evaluate/20'
		data: params
		withCallback: [:obj | |parsedObj|
			parsedObj := MaglevObject newObjectWithoutUpdate: obj.
			aBlock value: parsedObj isException not value: parsedObj].
!

findClassNamesMatching: aSelector with: aBlock
	aSelector isString ifFalse:[self error: 'The selector should be a string'].

	MaglevNilClass instance 
		evaluateWithoutUpdate: '|organizer| organizer := ClassOrganizer new. organizer findClassNamesMatching:''', aSelector, '''.' 
		language: 'smalltalk'
		withCallback: aBlock.
!

findMethodNamesMatching: aSelector with: aBlock
	aSelector isString ifFalse:[self error: 'The selector should be a string'].

	MaglevNilClass instance 
		evaluateWithoutUpdate: '|organizer| organizer := ClassOrganizer new. organizer findMethodNamesMatching:''', aSelector, '''.' 
		language: 'smalltalk'
		withCallback: aBlock.
!

implementersOf: aSelector withCallback: aBlock
	aSelector isString ifFalse:[self error: 'The selector should be a string'].
	MaglevNilClass instance
		evaluateWithoutUpdate: '|organizer dict ruby smalltalk| organizer := ClassOrganizer new. dict := Array new. smalltalk := organizer implementorsOf:''', aSelector, ''' asSymbol. smalltalk do:[:cls| dict addLast:{cls. 0.}]. ruby := organizer rubyImplementorsOf:''', aSelector, ''' asSymbol. ruby do:[:cls| dict addLast:{cls. 1.}]. 1 to: dict size do:[:i||cls| cls:= (dict at: i) at:1. (cls class == GsNMethod) ifTrue:[(dict at:i) at:1 put: cls inClass]]. dict' 
		language: 'smalltalk'
		withCallback: aBlock.
!

removeWindow: aWindow
	aWindow navigationItem asJQuery remove.
	windows remove: aWindow.
! !

!Maglev methodsFor: 'rendering'!

renderNavigationItemFor: aWindow
	|navItem|
	navItem := bottomNavHtml li
		with: [
			bottomNavHtml a
				class: 'btn btn-info window-navigation-item';
				style: 'padding: 4px 2px 2px 4px; margin-top: 5px;';
				onClick: [aWindow moveToFront];
				with: [aWindow renderNavigationOn: bottomNavHtml]].
	aWindow navigationItem: navItem.
!

showConnectionsFor: aWindow
	windows do: [:window | 
		window checkAddConnectionTo: aWindow.
		aWindow checkAddConnectionTo: window].
!

showObjectWindow: oop
	|window|
	(self objectSpace hasLoadedOop: oop)
		ifFalse: [^ self showReloadObjectWindow: oop].
	window := (self objectSpace at: oop) windowViewComponent.
	window appendToWorkspace.
	^ window
!

showReloadObjectWindow: oop
	|window|
	window := MaglevWaitingWindow new.
	window appendToWorkspace.
	self objectSpace
		reloadObject: oop
		withCallback: [:object | |objWindow|
			objWindow := object windowViewComponentReplace: window.
			objWindow renderReplace].
	^ window
! !

Maglev class instanceVariableNames: 'instance defaultWorkspaceId persistentRootId maglevSystemId evalObjectId swatchDesign'!

!Maglev class methodsFor: 'accessing'!

defaultWorkspaceId
	^ defaultWorkspaceId
!

defaultWorkspaceId: anInteger
	"Called from JavaScript initializer."
	defaultWorkspaceId := anInteger.
!

evalObjectId
	^ evalObjectId
!

evalObjectId: anInteger
	evalObjectId := anInteger.
!

maglevSystemId
	^ maglevSystemId
!

maglevSystemId: anInteger
	"Called from JavaScript initializer."
	maglevSystemId := anInteger.
!

persistentRootId
	^ persistentRootId
!

persistentRootId: anInteger
	"Called from JavaScript initializer."
	persistentRootId := anInteger.
! !

!Maglev class methodsFor: 'initializing'!

openWindow: anInteger
	Maglev instance showObjectWindow: anInteger.
!

ready
	self openWindow: self defaultWorkspaceId.
	self openWindow: self persistentRootId.
	self openWindow: self maglevSystemId.
	MaglevObjectSpace instance 
		evalObject: (MaglevObjectSpace instance reloadObject: self evalObjectId).
	MaglevHaltedThreadListener start.
	MaglevWebBrowserWindow showNew.
! !

!Maglev class methodsFor: 'rendering'!

swatchDesign
	swatchDesign 
		ifNil: [ |html|
			html := HTMLCanvas onJQuery: 'head' asJQuery.
			swatchDesign := html link 
				href: 'themes/geo-bootstrap/swatch/bootstrap.css';
				rel: 'stylesheet']
		ifNotNil: [
			swatchDesign asJQuery remove.
			swatchDesign := nil].
! !

!Maglev class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := Maglev new].
	^ instance
! !

Object subclass: #MaglevObject
	instanceVariableNames: 'oop instVars instVarsSize virtualClassObject classObject inspection isLoaded isException windows customTabs'
	package: 'Maglev-Core'!

!MaglevObject methodsFor: 'accessing'!

classObject
	^ classObject
!

customTabs
	^ customTabs
!

hasInstVar: instVarName
	self instVarsDo: [:ivName :ivValue |
		ivName = instVarName ifTrue: [^ true]].
	^ false
!

inspection
	^ inspection
!

instVarAt: aString
	instVars keysAndValuesDo: [:index :iv | 
		iv key string = aString asString
			ifTrue: [^ iv value]].
	self error: 'instVar not found in forwarder object: ', aString.
!

instVarAt: aString ifAbsent: anObject
	instVars keysAndValuesDo: [:index :iv | 
		iv key string = aString asString
			ifTrue: [^ iv value]].
	^ anObject
!

instVars
	^ instVars
!

instVarsDo: aBlock
	instVars keysAndValuesDo: [:index :iv | aBlock value: iv key value: iv value].
!

instVarsSize
	^ instVarsSize
!

isException
	^ isException
!

oop
	^ oop
!

shortInspection
	inspection size > 10 
		ifTrue: [^ (inspection copyFrom: 1 to: 10), '...']
		ifFalse: [^ inspection].
!

virtualClassObject
	^ virtualClassObject
!

windows
	windows ifNil: [windows := OrderedCollection new].
	^ windows
! !

!MaglevObject methodsFor: 'comparing'!

= anObject
	^ self oop = anObject oop
!

== anObject
	^ self oop == anObject oop
! !

!MaglevObject methodsFor: 'instance creation'!

parseJSON: obj
	isLoaded := true.
	instVars ifNil: [instVars := Dictionary new].
	oop := obj oop.
	isException := obj exception.
	classObject := MaglevObject newObject: obj classObject.
	virtualClassObject := MaglevObject newObject: obj virtualClassObject.
	inspection := obj inspection.
	instVarsSize := obj instVarsSize.
	obj instVars keysAndValuesDo: [:index :assoc | |key value|
		key := MaglevObject newObject: (assoc at: 1).
		value := MaglevObject newObject: (assoc at: 2).
		instVars at: index asNumber put: key -> value].
	customTabs := obj customTabs.
!

parseJSONNotLoaded: obj
	self isLoaded 
		ifNil: [isLoaded := false].
	oop := obj oop.
	inspection := obj inspection.
! !

!MaglevObject methodsFor: 'interactions'!

addWindow: aWindow
	self windows add: aWindow.
	Maglev instance addWindow: aWindow.
	^ aWindow
!

evaluate: code language: aString withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'language' put: aString;
		at: 'code' put: code;
		yourself.
	MaglevAjax 
		ajax: 'object/evaluate/', oop asString
		data: params
		withCallback: [:obj | |isException parsedObj|
			isException := obj at: 1.
			parsedObj := MaglevObject newObject: (obj at: 2).
			aBlock value: isException not value: parsedObj].
!

evaluateWithoutUpdate: code language: aString with: additionalParams withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'language' put: aString;
		at: 'code' put: code;
		addAll: additionalParams;
		yourself.
	MaglevAjax 
		ajax: 'object/evaluate/', oop asString
		data: params
		withCallback: [:obj | |isException parsedObj|
			isException := obj at: 1.
			parsedObj := MaglevObject newObjectWithoutUpdate: (obj at: 2).
			aBlock value: isException not value: parsedObj].
!

evaluateWithoutUpdate: code language: aString withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'language' put: aString;
		at: 'code' put: code;
		yourself.
	MaglevAjax 
		ajax: 'object/evaluate/', oop asString
		data: params
		withCallback: [:obj | |isException parsedObj|
			isException := obj at: 1.
			parsedObj := MaglevObject newObject: (obj at: 2).
			aBlock value: isException not value: parsedObj].
!

fullReloadWithCallback: aBlock
	MaglevObjectSpace instance
		reloadObject: oop withCallback: aBlock.
!

paramsAllElements
	^ Dictionary new
		at: 'allElements' put: true;
		yourself
!

paramsFullString
	^ Dictionary new
		at: 'fullString' put: true;
		yourself
!

paramsFullStringAndElements
	^ Dictionary new
		at: 'allElements' put: true;
		at: 'fullString' put: true;
		yourself
!

paramsThreadFrame
	^ Dictionary new
		at: 'allElements' put: true;
		at: 'fullString' put: true;
		at: 'fullMethod' put: true;
		at: 'noBehavior' put: true;
		yourself
!

removeWindow: aWindow
	self windows remove: aWindow.
	Maglev instance removeWindow: aWindow.
	^ aWindow
! !

!MaglevObject methodsFor: 'reloading'!

ensureIsLoaded: collectionName from: from to: to
	|obj params|
	(self isLoaded: collectionName from: from to: to) ifTrue: [^ self].
	params := Dictionary new
		at: 'range_', collectionName asString, '_from' put: from;
		at: 'range_', collectionName asString, '_to' put: to;
		yourself.
	obj := MaglevAjax 
		ajax: 'object/index/', self oop
		data: params.
	self parseJSON: obj.
!

ensureIsLoaded: collectionName from: from to: to withCallback: aBlock
	|params|
	(self isLoaded: collectionName from: from to: to) ifTrue: [aBlock value. ^ self].
	params := Dictionary new
		at: 'range_', collectionName asString, '_from' put: from;
		at: 'range_', collectionName asString, '_to' put: to;
		yourself.
	MaglevAjax 
		ajax: 'object/index/', self oop
		data: params
		withCallback: [:obj | 
			self parseJSON: obj.
			aBlock value].
! !

!MaglevObject methodsFor: 'rendering'!

inlineViewComponent
	^ self class inlineViewClass basicNew
		object: self;
		initialize;
		yourself
!

inlineViewComponentFull
	^ self class inlineViewClass basicNew
		fullInspection: true;
		object: self;
		initialize;
		yourself
!

inlineViewComponentNavItem
	^ self class inlineViewClass basicNew
		object: self;
		isShort: true;
		hasDropDown: false;
		isDraggable: false;
		yourself
!

inlineViewComponentShort
	^ self class inlineViewClass basicNew
		object: self;
		isShort: true;
		isDraggable: false;
		yourself
!

inlineViewComponentWithDepth: anInteger
	^ self inlineViewComponent
		depth: anInteger;
		yourself
!

instancesViewComponent
	^ self class instancesViewClass basicNew
		object: self;
		initialize;
		yourself
!

windowViewComponent
	^ self class windowViewClass basicNew
		object: self;
		initialize;
		yourself
!

windowViewComponentReplace: aWindow
	^ self class windowViewClass newReplace: aWindow with: self
! !

!MaglevObject methodsFor: 'testing'!

hasInstVars
	^ instVars size > 0
!

ifNotMaglevNil: aBlock
	^ aBlock value
!

isGsNMethod
	^ false
!

isLoaded
	^ isLoaded
!

isLoaded: collectionName from: from to: to
	|collection|
	collection := self perform: collectionName.
	(from to: to) do: [:index |
		(collection includesKey: index) ifFalse: [^ false]].
	^ true
!

isMaglevNil
	^ false
! !

MaglevObject class instanceVariableNames: 'basetypes doesUpdateObjectSpace'!

!MaglevObject class methodsFor: 'accessing'!

basetypes
	^ basetypes
!

doesUpdateObjectSpace
	doesUpdateObjectSpace ifNil: [doesUpdateObjectSpace := true].
	^ doesUpdateObjectSpace
!

doesUpdateObjectSpace: aBoolean
	doesUpdateObjectSpace := aBoolean.
! !

!MaglevObject class methodsFor: 'constants'!

basetype
	^ #object
!

inlineViewClass
	^ MaglevObjectInline
!

instancesViewClass
	^ MaglevObjectInstancesView
!

windowViewClass
	^ MaglevObjectWindow
! !

!MaglevObject class methodsFor: 'initializing'!

initialize
	self initializeBasetypes.
!

initializeBasetypes
	basetypes := Dictionary new
		at: self basetype put: self;
		yourself.
	self allSubclasses do: [:cls |
		basetypes at: cls basetype put: cls].
! !

!MaglevObject class methodsFor: 'instance creation'!

newFor: aBaseType
	|cls|
	cls := self basetypes 
		at: aBaseType asSymbol
		ifAbsent: [self error: 'Could not create forwarder object for invalid base type ', aBaseType].
	^ cls new
!

newObject: obj
	|object|
	object := self parseJSON: obj.
	self doesUpdateObjectSpace 
		ifTrue: [MaglevObjectSpace instance updateObject: object].
	^ object
!

newObjectWithoutUpdate: obj
	|before result|
	before := self doesUpdateObjectSpace.
	result := self newObject: obj.
	doesUpdateObjectSpace := before.
	^ result
!

parseJSON: obj
	|object|
	object := self newFor: obj basetype.
	obj loaded
		ifTrue: [^ object parseJSON: obj; yourself]
		ifFalse: [^ object parseJSONNotLoaded: obj; yourself].
! !

MaglevObject subclass: #MaglevArray
	instanceVariableNames: 'elements elementsSize'
	package: 'Maglev-Core'!

!MaglevArray methodsFor: 'accessing'!

at: anInteger
	^ self elements at: anInteger
!

do: aBlock
	self elements do: aBlock.
!

elements
	^ elements
!

elementsSize
	^ elementsSize
! !

!MaglevArray methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	elements ifNil: [elements := Dictionary new].
	elementsSize := obj elementsSize.
	obj elements keysAndValuesDo: [:index :element |
		elements at: index asNumber put: (MaglevObject newObject: element)].
! !

!MaglevArray methodsFor: 'testing'!

hasElements
	^ self elementsSize > 0
!

isFullyLoaded
	^ self elementsSize == self elements size
! !

!MaglevArray class methodsFor: 'constants'!

basetype
	^ #array
!

inlineViewClass
	^ MaglevArrayInline
!

windowViewClass
	^ MaglevArrayWindow
! !

MaglevObject subclass: #MaglevBoolean
	instanceVariableNames: 'value'
	package: 'Maglev-Core'!

!MaglevBoolean methodsFor: 'accessing'!

value
	^ value
! !

!MaglevBoolean methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	value := obj value.
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
	value := obj value.
! !

!MaglevBoolean class methodsFor: 'constants'!

basetype
	^ #boolean
!

inlineViewClass
	^ MaglevBooleanInline
! !

MaglevObject subclass: #MaglevDictionary
	instanceVariableNames: 'elements elementsSize'
	package: 'Maglev-Core'!

!MaglevDictionary methodsFor: 'accessing'!

at: anInteger
	^ self elements at: anInteger
!

atKey: anObject
	self elements do: [:assoc |
		anObject = assoc key
			ifTrue: [^ assoc value]].
	self error: 'Object is not in the collection'.
!

atKeyInspection: anObject
	self elements do: [:assoc |
		anObject = assoc key inspection
			ifTrue: [^ assoc value]].
	self error: 'Object is not in the collection'.
!

atKeyString: anObject
	self elements do: [:assoc |
		anObject = assoc key string
			ifTrue: [^ assoc value]].
	self error: 'Object is not in the collection'.
!

elements
	^ elements
!

elementsSize
	^ elementsSize
!

includesKey: anObject
	self elements do: [:assoc |
		anObject = assoc key
			ifTrue: [^ true]].
	^ false
!

keysAndValuesDo: aBlock
	elements keysAndValuesDo: [:index :kv | aBlock value: kv key value: kv value].
!

valuesDo: aBlock
	self elements do: [:assoc |
		aBlock value: assoc value].
! !

!MaglevDictionary methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	elements ifNil: [elements := Dictionary new].
	elementsSize := obj elementsSize.
	obj elements keysAndValuesDo: [:index :assoc | |key value|
		key := MaglevObject newObject: (assoc at: 1).
		value := MaglevObject newObject: (assoc at: 2).
		elements at: index asNumber put: key -> value].
! !

!MaglevDictionary methodsFor: 'testing'!

hasElements
	^ self elementsSize > 0
!

isFullyLoaded
	^ self elementsSize == self elements size
! !

!MaglevDictionary class methodsFor: 'constants'!

basetype
	^ #dictionary
!

inlineViewClass
	^ MaglevHashInline
!

windowViewClass
	^ MaglevHashWindow
! !

MaglevDictionary subclass: #MaglevHash
	instanceVariableNames: 'elements elementsSize'
	package: 'Maglev-Core'!

!MaglevHash class methodsFor: 'constants'!

basetype
	^ #hash
! !

MaglevObject subclass: #MaglevException
	instanceVariableNames: 'gsResumable gsTrappable gsNumber isDBEHalt'
	package: 'Maglev-Core'!

!MaglevException methodsFor: 'accessing'!

isResumable
	^ gsResumable
!

isTrappable
	^ gsTrappable
!

number
	^ gsNumber
! !

!MaglevException methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	gsTrappable := obj gsTrappable.
	gsResumable := obj gsResumable.
	gsNumber := obj at: 'gsNumber'. "gsNumber might be nil"
	isDBEHalt := obj isDBEHalt.
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
	gsTrappable := obj gsTrappable.
	gsResumable := obj gsResumable.
	gsNumber := obj at: 'gsNumber'. "gsNumber might be nil"
	isDBEHalt := obj isDBEHalt.
! !

!MaglevException methodsFor: 'testing'!

isDBEHalt
	^ isDBEHalt
! !

!MaglevException class methodsFor: 'constants'!

basetype
	^ #exception
!

inlineViewClass
	^ MaglevExceptionInline
!

windowViewClass
	^ MaglevExceptionWindow
! !

MaglevObject subclass: #MaglevFixnum
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevFixnum methodsFor: 'accessing'!

number
	^ inspection asNumber
! !

!MaglevFixnum class methodsFor: 'constants'!

basetype
	^ #fixnum
!

inlineViewClass
	^ MaglevFixnumInline
!

windowViewClass
	^ MaglevFixnumWindow
! !

MaglevObject subclass: #MaglevFloat
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevFloat methodsFor: 'accessing'!

number
	^ inspection asNumber
! !

!MaglevFloat class methodsFor: 'constants'!

basetype
	^ #float
!

inlineViewClass
	^ MaglevFloatInline
!

windowViewClass
	^ MaglevFloatWindow
! !

MaglevObject subclass: #MaglevGsNMethod
	instanceVariableNames: 'selectorString argsAndTemps descrForStack'
	package: 'Maglev-Core'!

!MaglevGsNMethod methodsFor: 'accessing'!

argsAndTemps
	^ argsAndTemps
!

debugInfo
	^ self instVarAt: '@_st_debugInfo'
!

descrForStack
	^ descrForStack
!

environmentId
	^ (self selector number bitShift: 0 - self siSelectorIdEnvShift) bitAnd: self selectorIdEnvMask
!

filename
	^ self debugInfo at: self debugInfoFileNameOffset
!

inClass
	^ self instVarAt: '@_st_inClass'
!

rubyFullName
	^ 'a GsNMethod'
!

selector
	^ self instVarAt: '@_st_selector'
!

selectorString
	^ selectorString
!

smalltalkFullName
	^ 'a GsNMethod'
!

sourceString
	^ (self debugInfo at: self debugInfoSourceOffset) string
! !

!MaglevGsNMethod methodsFor: 'constants'!

debugInfoFileNameOffset
	^ 4
!

debugInfoSourceOffset
	^ 2
!

selectorIdEnvMask
	^ 255
!

siSelectorIdEnvShift
	^ 53
! !

!MaglevGsNMethod methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	selectorString := MaglevObject newObject: obj selectorString.
	argsAndTemps := MaglevObject newObject: obj argsAndTemps.
	descrForStack := MaglevObject newObject: obj descrForStack.
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
	selectorString := MaglevObject newObject: obj selectorString.
	descrForStack := MaglevObject newObject: obj descrForStack.
! !

!MaglevGsNMethod methodsFor: 'interactions'!

compileRubySourceCode: sourceCode withCallback: aBlock
	self inClass
		evaluateWithoutUpdate: sourceCode
		language: 'rubyClass'
		with: Dictionary new
		withCallback: aBlock.
!

compileSmalltalkSourceCode: sourceCode withCallback: aBlock
	self inClass
		evaluateWithoutUpdate: 'self compile: ''', sourceCode escapedString, '''.'
		language: 'smalltalk'
		with: Dictionary new
		withCallback: aBlock.
!

fullReloadWithCallback: aBlock
	MaglevObjectSpace instance
		reloadObject: oop 
		withCallback: aBlock 
		params: self paramsFullString.
! !

!MaglevGsNMethod methodsFor: 'testing'!

isGsNMethod
	^ true
! !

!MaglevGsNMethod class methodsFor: 'constants'!

basetype
	^ #gsnmethod
! !

MaglevObject subclass: #MaglevInvalidObject
	instanceVariableNames: ''
	package: 'Maglev-Core'!

MaglevInvalidObject class instanceVariableNames: 'instance'!

!MaglevInvalidObject class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

MaglevObject subclass: #MaglevMaglevRecordBase
	instanceVariableNames: 'attributes attributesSize'
	package: 'Maglev-Core'!

!MaglevMaglevRecordBase methodsFor: 'accessing'!

attributeAt: aString
	attributes keysAndValuesDo: [:index :iv | 
		iv key string = aString asString
			ifTrue: [^ iv value]].
	self error: 'attribute not found in forwarder object: ', aString.
!

attributes
	^ attributes
!

attributesSize
	^ attributesSize
! !

!MaglevMaglevRecordBase methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	(obj at: 'attributes') ifNotNil: [
		attributes ifNil: [attributes := Dictionary new].
		attributesSize := obj attributesSize.
		obj attributes keysAndValuesDo: [:index :assoc | |key value|
			key := MaglevObject newObject: (assoc at: 1).
			value := MaglevObject newObject: (assoc at: 2).
			attributes at: index asNumber put: key -> value]].
! !

!MaglevMaglevRecordBase class methodsFor: 'constants'!

basetype
	^ #maglevRecordBase
!

inlineViewClass
	^ MaglevMaglevRecordBaseInline
!

windowViewClass
	^ MaglevMaglevRecordBaseWindow
! !

MaglevObject subclass: #MaglevModule
	instanceVariableNames: 'includedModules includedModulesSize constants constantsSize rubyFullName smalltalkFullName superList'
	package: 'Maglev-Core'!

!MaglevModule methodsFor: 'accessing'!

constants
	^ constants
!

constantsSize
	^ constantsSize
!

includedModules
	^ includedModules
!

includedModulesSize
	^ includedModulesSize
!

rubyFullName
	^ rubyFullName string
!

smalltalkFullName
	^ smalltalkFullName string
!

superList
	^ superList
! !

!MaglevModule methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	includedModules ifNil: [includedModules := Dictionary new].
	constants ifNil: [constants := Dictionary new].
	(obj at: 'includedModulesSize') ifNotNil: [
		includedModulesSize := obj includedModulesSize.
		obj includedModules keysAndValuesDo: [:index :value |
			includedModules at: index asNumber put: (MaglevObject newObject: value)]].
	(obj at: 'constantsSize') ifNotNil: [
		constantsSize := obj constantsSize.
		obj constants keysAndValuesDo: [:index :assoc | |key value|
			key := MaglevObject newObject: (assoc at: 1).
			value := MaglevObject newObject: (assoc at: 2).
			constants at: index asNumber put: key -> value]].
	(obj at: 'superList') ifNotNil: [
		superList := MaglevObject newObject: obj superList].
	(obj at: 'rubyFullName') ifNotNil: [
		rubyFullName := MaglevObject newObject: obj rubyFullName.
		smalltalkFullName := MaglevObject newObject: obj smalltalkFullName].
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
! !

!MaglevModule methodsFor: 'interactions'!

allSelectorsWithCallback: aBlock
	MaglevAjax 
		ajax: 'code/selectors/', oop asString
		data: Dictionary new
		withCallback: aBlock.
!

compileRubySourceCode: sourceCode withCallback: aBlock
	self 
		evaluateWithoutUpdate: sourceCode
		language: 'rubyClass'
		with: Dictionary new
		withCallback: aBlock.
!

compileSmalltalkSourceCode: sourceCode withCallback: aBlock
	self 
		evaluateWithoutUpdate: 'self compile: ''', sourceCode escapedString, '''.'
		language: 'smalltalk'
		with: Dictionary new
		withCallback: aBlock.
!

ensureSuperListLoadedWithCallback: aBlock
	superList 
		ifNil: [MaglevAjax 
			ajax: 'object/index/', self oop
			data: self paramsSuperList
				withCallback: [:obj | 
					self parseJSON: obj.
					aBlock value]]
		ifNotNil: [aBlock value].
!

paramsSuperList
	^ Dictionary new
		at: 'superList' put: true;
		yourself
!

sourceCodeFor: selectorString language: lang withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'language' put: lang;
		at: 'selector' put: selectorString;
		yourself.
	MaglevAjax 
		ajax: 'code/code/', oop asString
		data: params
		withCallback: aBlock.
! !

!MaglevModule methodsFor: 'testing'!

hasConstants
	^ self constantsSize > 0
!

hasIncludedModules
	^ self includedModulesSize > 0
! !

!MaglevModule class methodsFor: 'constants'!

basetype
	^ #module
!

inlineViewClass
	^ MaglevModuleInline
!

windowViewClass
	^ MaglevModuleWindow
! !

MaglevModule subclass: #MaglevClass
	instanceVariableNames: 'superclassObject size subclasses instances instancesSize'
	package: 'Maglev-Core'!

!MaglevClass methodsFor: 'accessing'!

instances
	^ instances
!

instancesSize
	^ instancesSize
!

subclasses
	^ subclasses
!

superclassObject
	^ superclassObject
! !

!MaglevClass methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	(obj at: 'superclassObject') ifNotNil: [
		superclassObject := MaglevObject newObject: obj superclassObject].
	(obj at: 'subclasses') ifNotNil: [
		subclasses := MaglevObject newObject: obj subclasses].
	(obj at: 'instancesSize') ifNotNil: [
		instances ifNil: [instances := Dictionary new].
		instancesSize := obj instancesSize.
		obj instances keysAndValuesDo: [:index :element |
			instances at: index asNumber put: (MaglevObject newObject: element)]].
! !

!MaglevClass methodsFor: 'interactions'!

ensureSubclassesLoadedWithCallback: aBlock
	subclasses 
		ifNil: [MaglevAjax 
			ajax: 'object/index/', self oop
			data: self paramsSubclasses
				withCallback: [:obj | 
					self parseJSON: obj.
					aBlock value]]
		ifNotNil: [aBlock value].
!

loadInstancesFrom: from to: to withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'range_instances_from' put: from;
		at: 'range_instances_to' put: to;
		at: 'instances' put: true;
		yourself.
	MaglevAjax 
		ajax: 'object/index/', self oop
		data: params
		withCallback: [:obj |
			"Create new object instead of merging results to self. This way 
			we can separate instances with different filters and don't
			pollute MaglevObjectSpace with masses of objects."
			aBlock value: (MaglevObject newObjectWithoutUpdate: obj)].
!

paramsSubclasses
	^ Dictionary new
		at: 'subclasses' put: true;
		yourself
! !

!MaglevClass class methodsFor: 'constants'!

basetype
	^ #class
!

inlineViewClass
	^ MaglevClassInline
!

windowViewClass
	^ MaglevClassWindow
! !

MaglevClass subclass: #MaglevSystemClass
	instanceVariableNames: 'gemVersionReport gemVersionReportSize stoneVersionReport stoneVersionReportSize'
	package: 'Maglev-Core'!

!MaglevSystemClass methodsFor: 'accessing'!

gemVersionReport
	^ gemVersionReport
!

gemVersionReportSize
	^ gemVersionReportSize
!

stoneVersionReport
	^ stoneVersionReport
!

stoneVersionReportSize
	^ stoneVersionReportSize
! !

!MaglevSystemClass methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	gemVersionReport := MaglevObject newObject: obj gemVersionReport.
	gemVersionReportSize := obj gemVersionReportSize.
	stoneVersionReport := MaglevObject newObject: obj stoneVersionReport.
	stoneVersionReportSize := obj stoneVersionReportSize.
! !

!MaglevSystemClass class methodsFor: 'constants'!

basetype
	^ #systemClass
!

windowViewClass
	^ MaglevSystemClassWindow
! !

MaglevObject subclass: #MaglevNilClass
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevNilClass methodsFor: 'accessing'!

string
	^ '(nil)'
! !

!MaglevNilClass methodsFor: 'testing'!

ifNotMaglevNil: aBlock
	^ self
!

isMaglevNil
	^ true
! !

MaglevNilClass class instanceVariableNames: 'instance'!

!MaglevNilClass class methodsFor: 'constants'!

basetype
	^ #nilclass
!

inlineViewClass
	^ MaglevNilClassInline
!

windowViewClass
	^ MaglevNilClassWindow
! !

!MaglevNilClass class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := MaglevObjectSpace instance reloadObject: 20].
	^ instance
! !

MaglevObject subclass: #MaglevRubyWorkspace
	instanceVariableNames: ''
	package: 'Maglev-Core'!

!MaglevRubyWorkspace class methodsFor: 'constants'!

basetype
	^ #rubyWorkspace
!

inlineViewClass
	^ MaglevRubyWorkspaceInline
!

windowViewClass
	^ MaglevRubyWorkspaceWindow
! !

MaglevObject subclass: #MaglevString
	instanceVariableNames: 'string isStringComplete'
	package: 'Maglev-Core'!

!MaglevString methodsFor: 'accessing'!

string
	^ string
! !

!MaglevString methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	string := obj string.
	isStringComplete := obj stringComplete.
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
	string := obj string.
	isStringComplete := obj stringComplete.
! !

!MaglevString class methodsFor: 'constants'!

basetype
	^ #string
!

inlineViewClass
	^ MaglevStringInline
!

windowViewClass
	^ MaglevStringWindow
! !

MaglevObject subclass: #MaglevSymbol
	instanceVariableNames: 'string isStringComplete'
	package: 'Maglev-Core'!

!MaglevSymbol methodsFor: 'accessing'!

string
	^ string
! !

!MaglevSymbol methodsFor: 'instance creation'!

parseJSON: obj
	super parseJSON: obj.
	string := obj string.
	isStringComplete := obj stringComplete.
!

parseJSONNotLoaded: obj
	super parseJSONNotLoaded: obj.
	string := obj string.
	isStringComplete := obj stringComplete.
! !

!MaglevSymbol class methodsFor: 'constants'!

basetype
	^ #symbol
!

inlineViewClass
	^ MaglevSymbolInline
!

windowViewClass
	^ MaglevSymbolWindow
! !

MaglevObject subclass: #MaglevThread
	instanceVariableNames: 'exception localStorage localStorageSize status isRailsThread'
	package: 'Maglev-Core'!

!MaglevThread methodsFor: 'accessing'!

exception
	^ exception
!

inspection
	self hasException 
		ifTrue: [^ '#<GsProcess[', exception inspection, ']>']
		ifFalse: [^ super inspection].
!

isRailsThread
	^ isRailsThread = true
!

localStorage
	^ localStorage
!

localStorageSize
	^ localStorageSize
!

status
	^ status
! !

!MaglevThread methodsFor: 'instance creation'!

parseJSON: obj
	|objException|
	super parseJSON: obj.
	objException := obj at: 'exception'.
	objException ifNotNil: [exception := MaglevObject newObject: objException].
	localStorage := MaglevObject newObject: obj threadLocalStorage.
	localStorageSize := obj threadLocalStorageSize.
	status := obj status.
	isRailsThread := obj isRailsThread.
! !

!MaglevThread methodsFor: 'interactions'!

proceedWithCallback: aBlock
	MaglevAjax 
		ajax: 'code/proceed/', oop asString
		data: Dictionary new
		withCallback: aBlock.
!

stackFrame: anInteger withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'index' put: anInteger;
		yourself.
	MaglevAjax 
		ajax: 'code/frame/', oop asString
		data: params
		withCallback: aBlock.
!

stackTraceMethodsWithCallback: aBlock
	MaglevAjax 
		ajax: 'code/frames/', oop asString
		data: Dictionary new
		withCallback: aBlock.
!

stepInto: frameIndex withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'index' put: frameIndex;
		yourself.
	MaglevAjax 
		ajax: 'code/stepInto/', oop asString
		data: params
		withCallback: aBlock.
!

stepOver: frameIndex withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'index' put: frameIndex;
		yourself.
	MaglevAjax 
		ajax: 'code/stepOver/', oop asString
		data: params
		withCallback: aBlock.
!

trimTo: frameIndex withCallback: aBlock
	|params|
	params := Dictionary new
		at: 'index' put: frameIndex;
		yourself.
	MaglevAjax 
		ajax: 'code/trim/', oop asString
		data: params
		withCallback: aBlock.
! !

!MaglevThread methodsFor: 'testing'!

hasException
	exception ifNil: [^ false].
	^ exception isMaglevNil not
! !

!MaglevThread class methodsFor: 'constants'!

basetype
	^ #thread
!

inlineViewClass
	^ MaglevThreadInline
!

windowViewClass
	^ MaglevThreadWindow
! !

Object subclass: #MaglevObjectSpace
	instanceVariableNames: 'objects evalObject'
	package: 'Maglev-Core'!

!MaglevObjectSpace methodsFor: 'accessing'!

evalObject
	^ evalObject
!

evalObject: anObject
	evalObject := anObject.
! !

!MaglevObjectSpace methodsFor: 'initializing'!

initialize
	objects := Dictionary new.
! !

!MaglevObjectSpace methodsFor: 'interactions'!

registerWindow: aWindow
	(objects at: aWindow object oop)
		addWindow: aWindow.
!

unregisterWindow: aWindow
	(objects at: aWindow object oop)
		removeWindow: aWindow.
! !

!MaglevObjectSpace methodsFor: 'objects'!

at: anOop
	^ objects 
		at: anOop
		ifAbsent: [self reloadObject: anOop]
!

at: anOop withCallback: aBlock
	(objects includesKey: anOop)
		ifTrue: [aBlock value: (objects at: anOop)]
		ifFalse: [self reloadObject: anOop withCallback: aBlock].
!

hasLoadedOop: oop
	^ (objects includesKey: oop) and: [(objects at: oop) isLoaded]
!

hasOop: oop
	^ objects includesKey: oop
!

reloadObject: anOop
	|obj|
	obj := MaglevAjax 
		ajax: 'object/index/', anOop asString
		data: Dictionary new.
	^ MaglevObject newObject: obj.
!

reloadObject: anOop withCallback: aBlock
	MaglevAjax 
		ajax: 'object/index/', anOop asString
		data: Dictionary new
		withCallback: [:obj | 
			aBlock value: (MaglevObject newObject: obj)].
!

reloadObject: anOop withCallback: aBlock params: aParamsDict
	MaglevAjax 
		ajax: 'object/index/', anOop asString
		data: aParamsDict
		withCallback: [:obj | 
			aBlock value: (MaglevObject newObject: obj)].
!

updateObject: anObject
	anObject isLoaded
		ifTrue: [objects at: anObject oop put: anObject].
! !

MaglevObjectSpace class instanceVariableNames: 'instance'!

!MaglevObjectSpace class methodsFor: 'singleton'!

instance
	instance ifNil: [instance := self new].
	^ instance
! !

