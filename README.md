Angular Directive Seed
======================

[![Build Status](https://travis-ci.org/Jimdo/angular-directive-seed.png)](https://travis-ci.org/Jimdo/angular-directive-seed)

Basically a clone of [angular seed](https://github.com/angular/angular-seed)  
We striped out things we don't use and added Grunt


Initialize
----------

	bower install
	npm install
	grunt


Start demo & test environment
-----------------------------

	./node_modules/protractor/bin/webdriver-manager update --standalone
	./node_modules/protractor/bin/webdriver-manager start
	node-dev scripts/web-server.js


Play around in demo
-------------------

[http://localhost:8000/demo/index.html](http://localhost:8000/demo/index.html)



Make it yours
-------------

#### Update bower and package infos

You want to look at name, description, homepage, author, keywords, main and repository

	├ bower.json
	├ package.json


#### Remove sample dist files from

	├ dist/


#### Do something awesome in the source files

	├ src/


#### And reflect your source files for build and test tasks!

	├ tasks/
	│ ├ files.js (source and sourceStyle)


#### Set your module name to ngtemplates task

	├ tasks/options/ngtemplates.js


#### Write tests

	├ test/


#### Adjust the demo and end to end environment to your module and directive names

	├ demo/
	│ ├ index.html
	│ ├ app.js
	├ test/
	│ ├ e2e/
	│ │ ├ env/
	│ │	│ ├ index.html
	│ │ │ ├ app.js


Grunt Tasks
-----------

 * `grunt`: Execute tests and build dist
 * `grunt test`: Just test
 * `grunt watch:start`: Watch source and test files and run karma on change
 * `grunt build`: Just build
 * `grunt test:e2e`: Just test end to end
 * `grunt dist`: Test, build, bump patch version, commit, add version tag and push


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