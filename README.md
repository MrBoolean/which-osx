which-osx
=========
[![Code Climate](https://codeclimate.com/github/MrBoolean/which-osx/badges/gpa.svg)](https://codeclimate.com/github/MrBoolean/which-osx) [![Test Coverage](https://codeclimate.com/github/MrBoolean/which-osx/badges/coverage.svg)](https://codeclimate.com/github/MrBoolean/which-osx) [![Build Status](https://travis-ci.org/MrBoolean/which-osx.svg?branch=master)](https://travis-ci.org/MrBoolean/which-osx) [![Dependency Status](https://gemnasium.com/MrBoolean/which-osx.svg)](https://gemnasium.com/MrBoolean/which-osx) [![npm](https://img.shields.io/npm/v/which-osx.svg)](https://npmjs.org/which-osx)

A simple module to determine the osx version.

# Install
```
npm i --save which-osx
```

# Usage
```javascript
var wosx = require('which-osx');

wosx(); // use the current os.release()
wosx('15.0.0'); // uses 15.0.0 as release
```

**Note**, that this function can also return an array of releases.

# License
The MIT License (MIT)

Copyright (c) 2015 Marc Binder <marcandrebinder@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
