# WshUtil

WSH (Windows Script Host) utility library (similar to Node.js-Util, Lodash) and the core module for tuckn/Wsh series.

## tuckn/Wsh series dependency

[WshModeJs](https://github.com/tuckn/WshModeJs)  
└─ [WshZLIB](https://github.com/tuckn/WshZLIB)  
&emsp;└─ [WshNet](https://github.com/tuckn/WshNet)  
&emsp;&emsp;└─ [WshChildProcess](https://github.com/tuckn/WshChildProcess)  
&emsp;&emsp;&emsp;└─ [WshProcess](https://github.com/tuckn/WshProcess)  
&emsp;&emsp;&emsp;&emsp;└─ [WshFileSystem](https://github.com/tuckn/WshFileSystem)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ [WshOS](https://github.com/tuckn/WshOS)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ [WshPath](https://github.com/tuckn/WshPath)  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ WshUtil - This repository  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;└─ [WshPolyfill](https://github.com/tuckn/WshPolyfill)

The upper layer module can use all the functions of the lower layer module.

## Operating environment

Works on JScript in Windows.

## Installation

(1) Create a directory of your WSH project.

```console
D:\> mkdir MyWshProject
D:\> cd MyWshProject
```

(2) Download this ZIP and unzip or Use the following `git` command.

```console
> git clone https://github.com/tuckn/WshUtil.git ./WshModules/WshUtil
or
> git submodule add https://github.com/tuckn/WshUtil.git ./WshModules/WshUtil
```

(3) Create your JScript (.js) file. For Example,

```console
D:\MyWshProject\
├─ MyScript.js <- Your JScript code will be written in this.
└─ WshModules\
    └─ WshUtil\
        └─ dist\
          └─ bundle.js
```

I recommend JScript (.js) file encoding to be UTF-8 [BOM, CRLF].

(4) Create your WSF packaging scripts file (.wsf).

```console
D:\MyWshProject\
├─ Run.wsf <- WSH entry file
├─ MyScript.js
└─ WshModules\
    └─ WshUtil\
        └─ dist\
          └─ bundle.js
```

And you should include _.../dist/bundle.js_ into the WSF file.
For Example, The content of the above _Run.wsf_ is

```xml
<package>
  <job id = "run">
    <script language="JScript" src="./WshModules/WshUtil/dist/bundle.js"></script>
    <script language="JScript" src="./MyScript.js"></script>
  </job>
</package>
```

I recommend this WSH file (.wsf) encoding to be UTF-8 [BOM, CRLF].

Awesome! This WSH configuration allows you to use the following functions in JScript (_.\\MyScript.js_).

## Usage

Now you can use `Wsh` object in _.\\MyScript.js_ (JScript).
for example,

```js
var _ = Wsh.Util; // Shorthand

// Checks deep strict equality
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
_.isEmpty('3'); // false
_.isEmpty(3); // true
_.isEmpty(undefined); // true - Because non enumerable object
_.isEmpty(null); // true
_.isEmpty(true); // true

// Gets a value from a object
var obj = { a: 1, b: { B: 2 }, c: [3, 4] };
_.get(obj, 'a'); // 1
_.get(obj, 'Z'); // undefined
_.get(obj, 'Z', 'defVal'); // 'defVal'
_.get(obj, 'b.B'); // 2
_.get(obj, ['b', 'B']); // 2
_.get(obj, 'c.1'); // 4

// Creates a unique ID
_.uuidv4(); // '9f1e53ba-3f08-4c9d-91c7-ad4226312f40'

// Creates a date string
_.createDateString(); // '20200528T065424+0900'
_.createDateString('yyyy-MM'); // '2020-05'

// Parses the date template literal to a date string.
_.parseDateLiteral('#{yyyy-MM-ddTHH:mm:ss}'); // '2020-01-02T15:04:05'
_.parseDateLiteral('#{yyyy/M/d H:m:s}'); // '2020/1/2 15:4:5'
_.parseDateLiteral('C:\\MyData\\#{yyyy-MM-dd}.txt'); // 'C:\MyData\2020-01-02.txt'
_.parseDateLiteral('\\\\MyNas\\#{yyyy}\\#{MM}\\#{dd}'); // '\\MyNas\2020\01\02'
_.parseDateLiteral('#{yyyy-[MM - 1]-dd}'); // '2019-12-02'
_.parseDateLiteral('#{yy[MM * 4]}'); // '2004'

// Converts a value to formatted string.
_.inspect(undefined); // 'undefined'
_.inspect(null); // 'null'
_.inspect(true); // 'true'
_.inspect(NaN); // 'NaN'
_.inspect('Foo'); // '"Foo"'
_.inspect('  '); // '"  "'

_.inspect([1, NaN, '3']);
// '[
//    0: 1,
//    1: NaN,
//    2: "3",
// ]'

_.inspect({ a: [1, 2], b: true, o: { c: 'C' } });
// '{
//   a: [
//     0: 1,
//     1: 2
//   ],
//   b: true,
//   o: {
//     c: "C"
//   }
// }'

// Converts a schema object to a string
var schema = { comp: 'MYPC1234', share: 'C$', file: 'cache.db' };
_.parseTemplateLiteral('cp \\\\${comp}\\${share}\\${file} .\\tmp', schema);
// Returns: 'cp \\MYPC1234\C$\cache.db .\tmp'

// 半角カナを全角に変換
_.toZenkakuKana('もぅﾏﾁﾞ無理。'); // 'もぅマヂ無理'

// and so on...
```

Many other functions will be added.
See the [documentation](https://tuckn.net/docs/WshUtil/) for more details.

And you can also use all [WshPolyfill](https://github.com/tuckn/WshPolyfill) functions.
For example,

```js
var array1 = [1, 4, 9, 16];
var map1 = array1.map(function(x) {
  return x * 2;
});

console.dir(map1);
// Outputs: [2, 8, 18, 32]

var strJson = JSON.stringify({ from: array1, to: map1 });
console.log(strJson);
// Outputs: '{"from":[1,4,9,16],"to":[2,8,18,32]}'

// and so on...
```

### Dependency Modules

You can also use the following helper functions in your JScript (_.\\MyScript.js_).

- [tuckn/WshPolyfill](https://github.com/tuckn/WshPolyfill)

## Documentation

See all specifications [here](https://tuckn.net/docs/WshUtil/) and also below.

- [WshPolyfill](https://tuckn.net/docs/WshPolyfill/)

## License

MIT

Copyright (c) 2020 [Tuckn](https://github.com/tuckn)
