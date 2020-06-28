# WshUtil

WSH (Windows Script Host) utility library (similar to Node.js-Util, Lodash) and the core module for tuckn/Wsh series.

## tuckn/Wsh series dependency

[WshModeJs](https://github.com/tuckn/WshModeJs)  
└─ [WshProcess](https://github.com/tuckn/WshProcess)  
&emsp;&emsp;└─ [WshFileSystem](https://github.com/tuckn/WshFileSystem)  
&emsp;&emsp;&emsp;&emsp;└─ [WshOS](https://github.com/tuckn/WshOS)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ [WshPath](https://github.com/tuckn/WshPath)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ WshUtil - This repository  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ [WshPolyfill](https://github.com/tuckn/WshPolyfill)  

The upper layer module can use all the functions of the lower layer module.

## Operating environment

Works on JScript in Windows.

## Installation

(1) Create a directory of your WSH project.

```console
D:\> mkdir MyWshProject
D:\> cd MyWshProject
```

(2) Download this ZIP and unzipping or Use bellowing `git` command.

```console
> git clone https://github.com/tuckn/WshUtil.git ./WshModules/WshUtil
or
> git submodule add https://github.com/tuckn/WshUtil.git ./WshModules/WshUtil
```

(3) Include _.\WshUtil\dist\bundle.js_ into your .wsf file.
For Example, if your file structure is

```console
D:\MyWshProject\
├─ Run.wsf
├─ MyScript.js
└─ WshModules\
    └─ WshUtil\
        └─ dist\
          └─ bundle.js
```

The content of above _Run.wsf_ is

```xml
<package>
  <job id = "run">
    <script language="JScript" src="./WshModules/WshUtil/dist/bundle.js"></script>
    <script language="JScript" src="./MyScript.js"></script>
  </job>
</package>
```

I recommend this .wsf file encoding to be UTF-8 [BOM, CRLF].
This allows the following functions to be used in _.\MyScript.js_.

## Usage

Now _.\MyScript.js_ (JScript ) can use the useful functions.
for example,

```js
var _ = Wsh.Util; // Shorthand

// Check deep strict equality
_.isEqual([1, 2, 3], [1, 2, 3]); // true
_.isEqual([1, 2, 3], [1, 2]); // false
_.isEqual({ a: 'A', b: ['B'] }, { a: 'A', b: ['B'] }); // true
_.isEqual({ a: 'A', b: ['B'] }, { a: 'A', b: ['b'] }); // false

// Checks if a value is an empty enumerable object or non enumerable
_.isEmpty([]); // true
_.isEmpty([1]); // false
_.isEmpty({}); // true
_.isEmpty({ a: 'A' }); // false
_.isEmpty(''); // true
_.isEmpty('a'); // false
_.isEmpty(undefined); // true - Because non enumerable object
_.isEmpty(null); // true
_.isEmpty(true); // true

// Get a value from a object
var obj = { a: 1, b: { B: 2 }, c: [3, 4] };
_.get(obj, 'a'); // 1
_.get(obj, 'Z'); // undefined
_.get(obj, 'Z', 'defVal'); // 'defVal'
_.get(obj, 'b.B'); // 2
_.get(obj, ['b', 'B']); // 2
_.get(obj, 'c.1'); // 4

// Create a unique ID
_.uuidv4(); // '9f1e53ba-3f08-4c9d-91c7-ad4226312f40'

// Create a date string
_.createDateString(); // '20200528T065424+0900'
_.createDateString('yyyy-MM'); // '2020-05'

// Parses a date schema string
_.parseDatecode('${yyyy-MM-ddTHH:mm:ss}'); // '2020-01-02T15:04:05'
_.parseDatecode('C:\\MyData\\${yyyy-MM-dd}.txt'); // 'C:\MyData\2020-01-02.txt'
_.parseDatecode('\\\\MyNas\\${yyyy}\\${MM}\\${dd}'); // '\\MyNas\2020\01\02'

// Converts a schema object to a string
var schema = { comp: 'MYPC1234', share: 'C$', file: 'cache.db' };
_.parseTemplateLiteral('cp \\\\${comp}\\${share}\\${file} .\\tmp', schema);
// Returns: 'cp \\MYPC1234\C$\cache.db .\tmp'

// 半角カナを全角に変換
_.toZenkakuKana('もぅﾏﾁﾞ無理。'); // 'もぅマヂ無理'
```

Many other functions are added.
See the [documentation](https://docs.tuckn.net/WshUtil) for more details.

And you can also use all [WshPolyfill](https://github.com/tuckn/WshPolyfill) functions.
for example,

```js
var array1 = [1, 4, 9, 16];
var map1 = array1.map(function(x) {
  return x * 2;
});

console.dir(map1);
// Output: [2, 8, 18, 32]

var strJson = JSON.stringify({ from: array1, to: map1 });
console.log(strJson);
// Output: '{"from":[1,4,9,16],"to":[2,8,18,32]}'

// and so on...
```

## Documentation

See all specifications [here](https://docs.tuckn.net/WshUtil)
and also [WshPolyfill](https://docs.tuckn.net/WshPolyfill).

## License

MIT

Copyright (c) 2020 [Tuckn](https://github.com/tuckn)
