This package is discontinued. Active maintenance is stopped and the package is as-is still available on npmjs.org. For details check out ticket [CRE-1204](https://jimplan.atlassian.net/browse/CRE-1204).

Angular Draggabilly directive - drag and drop for Angular
======================

[![Build Status](https://travis-ci.org/Jimdo/angular-draggabilly.png)](https://travis-ci.org/Jimdo/angular-draggabilly)
[![Coverage Status](https://coveralls.io/repos/Jimdo/angular-draggabilly/badge.png?branch=master)](https://coveralls.io/r/Jimdo/angular-draggabilly?branch=master)
[![devDependency Status](https://david-dm.org/Jimdo/angular-draggabilly/dev-status.svg)](https://david-dm.org/Jimdo/angular-draggabilly#info=devDependencies)

This is an angular wrapper to [Draggabilly](https://github.com/desandro/draggabilly).

Does not create its own scope and does not pollute the parent scope.

And for all the ones that are curious about whether this one needs jquery-ui:
> look ma, no jQuery!

Usage
-----
* The simplest form (just a draggable element)
```html
<div draggabilly>Drag me</div>
```

### Dependencies
Angular Draggabilly needs the Draggabilly library and its dependencies.
* You can either install everything via bower (and if your package management resolves transitive packages you are good to go)
* or you can use the [packaged version of Draggabilly](http://draggabilly.desandro.com/draggabilly.pkgd.min.js) and the [dist version of Angular Draggabilly](https://raw.githubusercontent.com/Jimdo/angular-draggabilly/master/dist/angular-draggabilly.min.js).
* or in the case of manual install, just add:
```javascript
'bower_components/classie/classie.js',
'bower_components/eventEmitter/EventEmitter.js',
'bower_components/eventie/eventie.js',
'bower_components/get-style-property/get-style-property.js',
'bower_components/get-size/get-size.js',
'bower_components/draggabilly/draggabilly.js',
'bower_components/angular-draggabilly/dist/angular-draggabilly.js'
```

### Options
* locking to axes
```html
<div draggabilly draggie-axis="y">Drag me vertically</div>
<div draggabilly draggie-axis="x">Drag me horizontally</div>
```
* containment in other elements
```html
<div id="container" style="width: 200px; height: 200px; background-color: red;">
	<div draggabilly draggie-containment="'#container'">x</div>
	<div draggabilly draggie-containment="true">o</div>
</div>
```
* snapping to grid
```html
<div draggabilly draggie-grid="[20, 20]">Snap me to a grid</div>
```
* dragging by handle
```html
<div draggabilly draggie-handle="#handle" style="background-color: blue; width: 100px; height: 100px;">
	<div id="handle" style="background-color: red; width: 20px; height: 20px; position: relative; left: 40px; top: 40px;"></div>
</div>
```

### Events
```javascript
var handler = function($event, instance, originalEvent, pointer) {
	console.log('The element', instance.element, 'is now at', instance.position.x, instance.position.y);
};
$rootScope.$on('draggie.start', handler);
$rootScope.$on('draggie.move', handler);
$rootScope.$on('draggie.end', handler);
```
By default, all events are emitted, however eventing can be disabled (and should be if not used, because it saves quite a few digest cycles) by adding `draggie-events=""` or selectively enabled by using `start`, `move` and `end`, e.g. `draggie-events="start,end"`.

Demo
----
You can start a demo server with `grunt demo` and go to [localhost:8000/demo](http://localhost:8000/demo/) to test the directive.

Grunt Tasks
-----------
Initialize with

```console
npm install
```
and then use the various tasks:

 * `grunt`: Execute tests
 * `grunt coverage`: Serve coverage report on port 7000
 * `grunt test`: Just test
 * `grunt test:e2e`: Just test end to end
 * `grunt test:unit`: Just test unit
 * `grunt tdd`: Watch source and test files and run tests
 * `grunt tdd:e2e`: Watch and test just end to end
 * `grunt tdd:unit`: Watch and test just unit
 * `grunt build`: Just build
 * `grunt release`: Test, build, bump patch version, commit, add version tag and push

 `test` tasks have a `--browsers` option to specify the browsers you want to use

 Browsers can also be set by the following environment-variables
 ```
   PROTRACTOR_BROWSERS=Firefox,Chrome
   KARMA_BROWSERS=Firefox,PhantomJS
 ```

_See Gruntfile.js and tasks/options for all task details._


LICENSE
-------

> The MIT License
>
> Copyright (c) 2014 Jimdo GmbH http://jimdo.com
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
