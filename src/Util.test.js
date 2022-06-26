/* globals Wsh: false */

/* globals describe: false */
/* globals test: false */
/* globals expect: false */

// Shorthand
var util = Wsh.Util;

var _cb = function (fn/* , args */) {
  var args = Array.from(arguments).slice(1);
  return function () { fn.apply(null, args); };
};
var noneStrVals = [true, false, undefined, null, 0, 1, NaN, Infinity, [], {}];
var _allTypes = [
  { type: 'undefined', val: undefined },
  { type: 'null', val: null },
  { type: 'Boolean', val: true },
  { type: 'Boolean', val: false },
  { type: 'Number', val: NaN },
  { type: 'Number', val: Infinity },
  { type: 'Number', val: 0 },
  { type: 'Number', val: 27 },
  { type: 'Number', val: 3.17 },
  { type: 'Number', val: -1 },
  { type: 'String', val: '0' },
  { type: 'String', val: '' },
  { type: 'String', val: ' ' },
  { type: 'String', val: 'Hello world!' },
  { type: 'String', val: 'こんにちは！' },
  { type: 'Array', val: [] },
  { type: 'Array', val: [1, 2, 3] },
  { type: 'Object', val: (function () { return arguments; })() },
  { type: 'Object', val: {} },
  { type: 'Object', val: { a: 'A', b: 'B' } },
  { type: 'Function', val: function () { return; } },
  { type: 'Error', val: new Error() },
  { type: 'Date', val: new Date() },
  { type: 'RegExp', val: new RegExp('') },
  { type: 'RegExp', val: new RegExp('\\.js$') }
];

describe('types', function () {
  test('types.protoTypeOf', function () {
    var protoTypeOf = util.types.protoTypeOf;

    _allTypes.forEach(function (o) {
      expect(protoTypeOf(o.val)).toBe(o.type);
    });
  });

  test('types.isDate', function () {
    var isDate = util.types.isDate;

    _allTypes.forEach(function (o) {
      if (o.type === 'Date') {
        expect(isDate(o.val)).toBe(true);
      } else {
        expect(isDate(o.val)).toBe(false);
      }
    });
  });

  test('types.isRegExp', function () {
    var isRegExp = util.types.isRegExp;

    _allTypes.forEach(function (o) {
      if (o.type === 'RegExp') {
        expect(isRegExp(o.val)).toBe(true);
      } else {
        expect(isRegExp(o.val)).toBe(false);
      }
    });
  });
});

describe('Using ScriptControl', function () {
  test('vbsTypeOf Not working. FIXME', function () {
    var vbsTypeOf = util.vbsTypeOf;
    expect(vbsTypeOf([1, 2])).toBe(null); // Error オートメーション サーバーはオブジェクトを作成できません。
  });

  test('convToVBArray Not working. FIXME', function () {
    var vbsTypeOf = util.vbsTypeOf;
    expect(vbsTypeOf([1, 2])).toBe('VBArray'); // Error オートメーション サーバーはオブジェクトを作成できません。
  });
});

describe('Lang', function () {
  test('isArray', function () {
    var isArray = util.isArray;

    _allTypes.forEach(function (o) {
      if (o.type === 'Array') {
        expect(isArray(o.val)).toBe(true);
      } else {
        expect(isArray(o.val)).toBe(false);
      }
    });
  });

  test('isBoolean', function () {
    var isBoolean = util.isBoolean;

    _allTypes.forEach(function (o) {
      if (o.type === 'Boolean') {
        expect(isBoolean(o.val)).toBe(true);
      } else {
        expect(isBoolean(o.val)).toBe(false);
      }
    });
  });

  test('isFunction', function () {
    var isFunction = util.isFunction;

    _allTypes.forEach(function (o) {
      if (o.type === 'Function') {
        expect(isFunction(o.val)).toBe(true);
      } else {
        expect(isFunction(o.val)).toBe(false);
      }
    });
  });

  test('isNumber', function () {
    var isNumber = util.isNumber;

    _allTypes.forEach(function (o) {
      if (o.type === 'Number') {
        expect(isNumber(o.val)).toBe(true);
      } else {
        expect(isNumber(o.val)).toBe(false);
      }
    });
  });

  test('isPureNumber', function () {
    var isPureNumber = util.isPureNumber;

    _allTypes.forEach(function (o) {
      if (o.type === 'Number') {
        if (isNaN(o.val) || o.val === Infinity) {
          expect(isPureNumber(o.val)).toBe(false);
        } else {
          expect(isPureNumber(o.val)).toBe(true);
        }
      } else {
        expect(isPureNumber(o.val)).toBe(false);
      }
    });
  });

  test('isObject', function () {
    var isObject = util.isObject;

    _allTypes.forEach(function (o) {
      if (o.type === 'Array' || o.type === 'Object' || o.type === 'Function'
          || o.type === 'Error' || o.type === 'Date' || o.type === 'RegExp') {
        expect(isObject(o.val)).toBe(true);
      } else {
        expect(isObject(o.val)).toBe(false);
      }
    });
  });

  test('isObjectLike', function () {
    var isObjectLike = util.isObjectLike;

    _allTypes.forEach(function (o) {
      if (o.type === 'Array' || o.type === 'Object'
          || o.type === 'Error' || o.type === 'Date' || o.type === 'RegExp') {
        expect(isObjectLike(o.val)).toBe(true);
      } else {
        expect(isObjectLike(o.val)).toBe(false);
      }
    });
  });

  test('isPlainObject', function () {
    var isPlainObject = util.isPlainObject;

    _allTypes.forEach(function (o) {
      if (o.type === 'Object') {
        expect(isPlainObject(o.val)).toBe(true);
      } else {
        expect(isPlainObject(o.val)).toBe(false);
      }
    });
  });

  test('isString', function () {
    var isString = util.isString;

    _allTypes.forEach(function (o) {
      if (o.type === 'String') {
        expect(isString(o.val)).toBe(true);
      } else {
        expect(isString(o.val)).toBe(false);
      }
    });
  });

  test('isSolidArray', function () {
    var isSolidArray = util.isSolidArray;

    expect(isSolidArray([1])).toBe(true);
    expect(isSolidArray([])).toBe(false);

    _allTypes.forEach(function (o) {
      if (o.type === 'Array') {
        if (o.val.length > 0) {
          expect(isSolidArray(o.val)).toBe(true);
        } else {
          expect(isSolidArray(o.val)).toBe(false);
        }
      } else {
        expect(isSolidArray(o.val)).toBe(false);
      }
    });
  });

  test('isSolidObject', function () {
    var isSolidObject = util.isSolidObject;

    expect(isSolidObject({ a: 'A' })).toBe(true);
    expect(isSolidObject({})).toBe(false);

    _allTypes.forEach(function (o) {
      if (o.type === 'Object') {
        if (Object.keys(o.val).length > 0) {
          expect(isSolidObject(o.val)).toBe(true);
        } else {
          expect(isSolidObject(o.val)).toBe(false);
        }
      } else {
        expect(isSolidObject(o.val)).toBe(false);
      }
    });
  });

  test('isSolidString', function () {
    var isSolidString = util.isSolidString;

    expect(isSolidString('a')).toBe(true);
    expect(isSolidString('')).toBe(false);

    _allTypes.forEach(function (o) {
      if (o.type === 'String') {
        if (o.val !== '') {
          expect(isSolidString(o.val)).toBe(true);
        } else {
          expect(isSolidString(o.val)).toBe(false);
        }
      } else {
        expect(isSolidString(o.val)).toBe(false);
      }
    });
  });

  test('hasContent', function () {
    var hasContent = util.hasContent;

    // true
    expect(hasContent(true)).toBe(true);
    expect(hasContent(false)).toBe(true);
    expect(hasContent(NaN)).toBe(true);
    expect(hasContent(Infinity)).toBe(true);
    expect(hasContent(0)).toBe(true);
    expect(hasContent([1])).toBe(true);
    expect(hasContent({ a: 'A' })).toBe(true);
    expect(hasContent('a')).toBe(true);
    expect(hasContent(new Error())).toBe(true);
    expect(hasContent(new Date())).toBe(true);
    expect(hasContent(/^regExp$/)).toBe(true);
    // false
    expect(hasContent(undefined)).toBe(false);
    expect(hasContent(null)).toBe(false);
    expect(hasContent([])).toBe(false);
    expect(hasContent({})).toBe(false);
    expect(hasContent('')).toBe(false);
  });

  test('isEmpty', function () {
    // isEmpty: Checks if a value is an empty enumerable object
    var isEmpty = util.isEmpty;

    // true
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty(Infinity)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(99)).toBe(true);
    expect(isEmpty(new Error())).toBe(true);
    expect(isEmpty(new Date())).toBe(true);
    expect(isEmpty(new RegExp(''))).toBe(true);
    // false
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ a: 'A' })).toBe(false);
    expect(isEmpty('a')).toBe(false);
    expect(isEmpty('2')).toBe(false);
  });

  test('isEqual isDeepStrictEqual', function () {
    var isEqual = util.isEqual;

    // Number, String
    // true
    expect(isEqual(0, 0)).toBe(true);
    expect(isEqual(3, 3)).toBe(true);
    expect(isEqual(NaN, NaN)).toBe(true);
    expect(isEqual(Infinity, Infinity)).toBe(true);
    expect(isEqual('str', 'str')).toBe(true);
    // false
    expect(isEqual(0, 3)).toBe(false);
    expect(isEqual('str', 'Str')).toBe(false);

    // Array
    expect(isEqual([], [])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
    expect(isEqual([1, 2], [1, 2, 3])).toBe(false);


    // Object comparison
    var obj1 = { n: 1, s: 'str', N: null, u: undefined, na: NaN };
    var obj2 = { n: 1, s: 'str', N: null, u: undefined, na: NaN };
    expect(obj1 === obj1).toBe(true);
    expect(obj1 === obj2).toBe(false);
    expect(isEqual(obj1, obj1)).toBe(true);
    expect(isEqual(obj1, obj2)).toBe(true);

    // including function -> Return false
    var objFnA = { val: 'value', func: function () { return 1; } };
    var objFnB = { val: 'value', func: function () { return 1; } };
    expect(isEqual(objFnA, objFnB)).toBe(false);

    expect(isEqual(new Error(), new Error())).toBe(true);
    expect(isEqual(new Date(2006, 0, 2, 15, 4, 5), new Date(2006, 0, 2, 15, 4, 5))).toBe(true);
    expect(isEqual(new RegExp(''), new RegExp(''))).toBe(true);

    // Deep comparison
    var objA = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: 2 } } };
    var objB = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: 2 } } };
    var objC = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: '2' } } };
    var objD = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { O2: 2 } } };
    var objE = { s: 's', a: [1, [2, '3']], o: { nA: 1, nB: { o2: 2 } } };
    var objF = { s: 's', a: [1, [2, 3]], o: { nA: 1 } };
    expect(isEqual(objA, objB)).toBe(true);
    expect(isEqual(objA, objC)).toBe(false);
    expect(isEqual(objA, objD)).toBe(false);
    expect(isEqual(objA, objE)).toBe(false);
    expect(isEqual(objA, objF)).toBe(false);

    var vals = [
      true, false, undefined, null,
      NaN, Infinity, 0, 1, 0.1, 99,
      [], [1], [2], [1, 2], [1, 1], [1, 2, 3],
      {}, { a: 1 }, { a: 1, b: 2 }, { A: 1, b: 2 }, { a: 1, b: 2, c: 3 },
      new Date(2006, 0, 2, 15, 4, 5), new Date(2020, 0, 2, 15, 4, 5),
      new RegExp('^regexp$'), new RegExp('^regexp$', 'i'),
      new Error('Parse Error'), new Error('Type Error'),
      '', 'a', 'b', 'ab', 'a b', 'A', 'B', 'AB'
    ];

    vals.forEach(function (valA, iA) {
      vals.forEach(function (valB, iB) {
        if (iA === iB) expect(isEqual(valA, valB)).toBe(true);
        else expect(isEqual(valA, valB)).toBe(false);
      });
    });

  });

  var falsyVals = [false, undefined, null, 0, NaN, '', 'false', 'FALSE'];
  var truthyVals = [true, [], {}, [1], { a: 'A' }, 'a', 99, Infinity,
    new Error(), new Date(), new RegExp('')];

  test('isFalseLike', function () {
    var isFalseLike = util.isFalseLike;

    falsyVals.forEach(function (val) {
      expect(isFalseLike(val)).toBe(true);
    });

    truthyVals.forEach(function (val) {
      expect(isFalseLike(val)).toBe(false);
    });
  });

  test('isTrueLike', function () {
    var isTrueLike = util.isTrueLike;

    truthyVals.forEach(function (val) {
      expect(isTrueLike(val)).toBe(true);
    });

    falsyVals.forEach(function (val) {
      expect(isTrueLike(val)).toBe(false);
    });
  });

  test('inspect', function () {
    var insp = util.inspect;

    expect(insp(undefined)).toBe('undefined');
    expect(insp(null)).toBe('null');
    expect(insp(true)).toBe('true');
    expect(insp(false)).toBe('false');
    expect(insp(NaN)).toBe('NaN');
    expect(insp(Infinity)).toBe('Infinity');
    expect(insp('Hello world!')).toBe('"Hello world!"');
    expect(insp('  ')).toBe('"  "');
    expect(insp([1, NaN, '3'])).toBe('[\n'
      + '  0: 1,\n'
      + '  1: NaN,\n'
      + '  2: "3"\n'
      + ']');
    expect(insp({ a: [1, 2], b: true, o: { c: 'C' } })).toBe('{\n'
      + '  a: [\n'
      + '    0: 1,\n'
      + '    1: 2\n'
      + '  ],\n'
      + '  b: true,\n'
      + '  o: {\n'
      + '    c: "C"\n'
      + '  }\n'
      + '}');
  });

  test('toPlainString', function () {
    var toPlainString = util.toPlainString;

    expect(toPlainString(undefined)).toBe('');
    expect(toPlainString(null)).toBe('');
    expect(toPlainString(true)).toBe('true');
    expect(toPlainString(false)).toBe('false');
    expect(toPlainString(NaN)).toBe('NaN');
    expect(toPlainString(Infinity)).toBe('Infinity');
    expect(toPlainString('Hello world!')).toBe('Hello world!');
    expect(toPlainString('  ')).toBe('  ');
    expect(toPlainString([1, NaN, '3'])).toBe('1,NaN,3');
    expect(toPlainString([1, [2, [3]], 4])).toBe('1,2,3,4');
    expect(toPlainString({ a: 'A', b: { c: 'BC' } })).toBe('ABC');
  });
});

describe('String', function () {
  test('startsWith', function () {
    var startsWith = util.startsWith;

    expect(startsWith('abc', 'a')).toBe(true);
    expect(startsWith('abc', 'b')).toBe(false);
    expect(startsWith('abc', 'b', 1)).toBe(true);
    expect(startsWith('abc', 'ab')).toBe(true);
    expect(startsWith('abc', 'aB')).toBe(false);
    expect(startsWith('abc', 'aB', 'i')).toBe(true);
    expect(startsWith('abc', 'aB', null, 'i')).toBe(true);
    expect(startsWith(['abc', 'de'], 'ab')).toBe(true);
    expect(startsWith(['abc', 'de'], 'ac')).toBe(false);

    // If target is '' return true
    expect(startsWith('abc', '')).toBe(true);
    expect(startsWith('', '')).toBe(true);
    expect(startsWith([1], '')).toBe(true);
    expect(startsWith(1, '')).toBe(true);
    expect(startsWith(undefined, '')).toBe(true);
    expect(startsWith(null, '')).toBe(true);

    // Out of specification
    expect(startsWith(undefined, undefined)).toBe(false);
    expect(startsWith(null, null)).toBe(false);
    expect(startsWith(false, false)).toBe(true);
    expect(startsWith(NaN, NaN)).toBe(true);
    expect(startsWith(100, 1)).toBe(true);
    expect(startsWith(200, 1)).toBe(false);
  });

  test('endsWith', function () {
    var endsWith = util.endsWith;

    expect(endsWith('abc', 'c')).toBe(true);
    expect(endsWith('abc', 'b')).toBe(false);
    expect(endsWith('abc', 'b', 2)).toBe(true);
    expect(endsWith('abc', 'bc')).toBe(true);
    expect(endsWith('abc', 'Bc')).toBe(false);
    expect(endsWith('abc', 'Bc', 'i')).toBe(true);
    expect(endsWith('abc', 'Bc', null, 'i')).toBe(true);
    expect(endsWith(['abc', 'de'], 'de')).toBe(true);
    expect(endsWith(['abc', 'de'], 'ce')).toBe(false);

    // If target is '' return true
    expect(endsWith('abc', '')).toBe(true);
    expect(endsWith('', '')).toBe(true);
    expect(endsWith([1], '')).toBe(true);
    expect(endsWith(1, '')).toBe(true);
    expect(endsWith(undefined, '')).toBe(true);
    expect(endsWith(null, '')).toBe(true);

    // Out of specification
    expect(endsWith(undefined, undefined)).toBe(false);
    expect(endsWith(null, null)).toBe(false);
    expect(endsWith(false, false)).toBe(true);
    expect(endsWith(NaN, NaN)).toBe(true);
    expect(endsWith(109, 9)).toBe(true);
    expect(endsWith(100, 9)).toBe(false);
  });

  test('createDateString', function () {
    var createDateStr = util.createDateString;
    var dateObj = new Date(2020, 0, 2, 15, 4, 5); // @note 0 -> January

    // console.log(dateObj);
    // dateObj.setFullYear(new Date().getFullYear() + 4);
    // console.log(dateObj);

    expect(createDateStr(null, dateObj)).toMatch(/20200102T150405\+\d{4}/);
    expect(createDateStr('yyyy-MM', dateObj)).toBe('2020-01');
    expect(createDateStr('yyyy/MM/dd', dateObj)).toBe('2020/01/02');
    expect(createDateStr('yyyy/M/d', dateObj)).toBe('2020/1/2');
    expect(createDateStr('yy/MM/dd', dateObj)).toBe('20/01/02');
    expect(createDateStr('HH:mm:ss', dateObj)).toBe('15:04:05');
    expect(createDateStr('H:m:s', dateObj)).toBe('15:4:5');
    expect(createDateStr('yyyyMMddTHHmmss', dateObj)).toBe('20200102T150405');
    expect(createDateStr('yyyy/M/d H:m:s', dateObj)).toBe('2020/1/2 15:4:5');
  });

  test('parseTemplateLiteral', function () {
    var tmpParser = util.parseTemplateLiteral;
    var vals;

    vals = { yyyy: '2020', MM: '02', dd: '09' };
    expect(tmpParser('${yyyy-MM-dd}', vals)).toBe('undefined');
    expect(tmpParser('${yyyy}-${MM}-${dd}', vals)).toBe('2020-02-09');
    expect(tmpParser('${yyyy}-${MM}-${dd}T${hh}:${mm}', vals))
        .toBe('2020-02-09Tundefined:undefined');

    expect(tmpParser('No Template Literal', vals)).toBe('No Template Literal');

    vals = { comp: 'MYPC1234', share: 'C$', file: 'cache.db' };
    expect(tmpParser('cp \\\\${comp}\\${share}\\${file} .\\tmp', vals))
        .toBe('cp \\\\MYPC1234\\C$\\cache.db .\\tmp');

    noneStrVals.forEach(function (val) {
      expect(_cb(tmpParser, val)).toThrowError();
    });
  });

  test('parseDateSchema', function () {
    var parse = util.parseDateSchema;

    noneStrVals.forEach(function (val) {
      expect(_cb(parse, val)).toThrowError();
    });

    var dt = new Date(2020, 0, 2, 15, 4, 5); // @note 0 -> January

    expect(parse('yyyyMMdd', dt)).toBe('20200102');
    expect(parse('yyyy-MM-dd', dt)).toBe('2020-01-02');
    expect(parse('yyyy-MM', dt)).toBe('2020-01');
    expect(parse('yyyy-MM-1', dt)).toBe('2020-01-1');
    expect(parse('yyyy-[MM - 1]', dt)).toBe('2019-12');
    expect(parse('yyyy-[MM-1]', dt)).toBe('2019-12');
    expect(parse('[yyyy + 4]-MM', dt)).toBe('2024-01');
    expect(parse('yy[MM * 4]', dt)).toBe('2004');
    expect(parse('yy/M/d', dt)).toBe('20/1/2');
    expect(parse('yyyy-MM-ddTHH:mm:ss', dt)).toBe('2020-01-02T15:04:05');
    expect(parse('yyyy/M/d H:m:s', dt)).toBe('2020/1/2 15:4:5');
    expect(parse('yyyyMMddTHHmmss+hhmm', dt))
        .toMatch(new RegExp('20200102T150405\\+\\d{4}'));
    expect(parse('\\yyyy\\MM\\dd', dt)).toBe('\\2020\\01\\02');
  });

  test('parseDateLiteral', function () {
    var parse = util.parseDateLiteral;

    noneStrVals.forEach(function (val) {
      expect(_cb(parse, val)).toThrowError();
    });

    var dt = new Date(2020, 0, 2, 15, 4, 5); // @note 0 -> January

    expect(parse('#{yyyyMMdd}', dt)).toBe('20200102');
    expect(parse('#{yyyy-MM-dd}', dt)).toBe('2020-01-02');
    expect(parse('#{yyyy-MM-ddTHH:mm:ss}', dt)).toBe('2020-01-02T15:04:05');
    expect(parse('#{yyyyMMddTHHmmss+hhmm}', dt))
        .toMatch(new RegExp('20200102T150405\\+\\d{4}'));
    expect(parse('C:\\My Data\\#{yyyy-MM-dd}.txt', dt)).toBe('C:\\My Data\\2020-01-02.txt');
    expect(parse('\\\\MyNas\\#{yyyy}\\#{MM}\\#{dd}', dt)).toBe('\\\\MyNas\\2020\\01\\02');
    // Calculation
    expect(parse('#{yyyy-MM-1-dd}', dt)).toBe('2020-01-1-02');
    expect(parse('#{yyyy-[MM - 1]-dd}', dt)).toBe('2019-12-02');
    expect(parse('#{yyyy-[MM - 11]-dd}', dt)).toBe('2019-02-02');
    expect(parse('#{yyyy}-#{[MM-1]}-#{dd}', dt)).toBe('2020-12-02');
    expect(parse('#{yy/M/[d - 2]}', dt)).toBe('19/12/31');
    expect(parse('#{yy}#{[MM * 4]}', dt)).toBe('2004');
    expect(parse('#{[yyyy + 4]}-#{MM}', dt)).toBe('2024-01');
    expect(parse('D:\\#{yyyy}\\#{[MM - 1]}', dt)).toBe('D:\\2020\\12');
    expect(parse('D:\\#{yyyy\\[MM - 1]}', dt)).toBe('D:\\2019\\12');
  });

  var numsStr = '0123456789';
  var lowerEnStr = 'abcdefghijklmnopqrstuvwxyz';
  var upperEnStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var symbolsStr = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var zenNumsStr = '０１２３４５６７８９';
  var zenLowerEnStr = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ';
  var zenUpperEnStr = 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ';
  var zenSymbolsStr = '！”＃＄％＆’（）＊＋，－．／：；＜＝＞？＠［￥］＾＿‘｛｜｝￣';

  test('isASCII', function () {
    var isASCII = util.isASCII;
    // true
    expect(isASCII(numsStr)).toBe(true);
    expect(isASCII(lowerEnStr)).toBe(true);
    expect(isASCII(upperEnStr)).toBe(true);
    expect(isASCII(symbolsStr)).toBe(true);
    expect(isASCII('\t\n\r ')).toBe(true);
    expect(isASCII('0')).toBe(true);
    // false
    expect(isASCII(zenNumsStr)).toBe(false);
    expect(isASCII(zenLowerEnStr)).toBe(false);
    expect(isASCII(zenUpperEnStr)).toBe(false);
    expect(isASCII(zenSymbolsStr)).toBe(false);
    expect(isASCII(0)).toBe(false);
    expect(isASCII(true)).toBe(false);
    expect(isASCII(['a', 'b', 'c'])).toBe(false);
    expect(isASCII('abうde')).toBe(false);
    expect(isASCII('偽')).toBe(false);
  });

  test('isSameMeaning', function () {
    var isSameMeaning = util.isSameMeaning;
    // true
    expect(isSameMeaning('', '')).toBe(true);
    expect(isSameMeaning('abc', 'abc')).toBe(true);
    expect(isSameMeaning('abc', 'ABC')).toBe(true);
    expect(isSameMeaning('真', '真')).toBe(true);
    expect(isSameMeaning('\t\n\r', '\t\n\r')).toBe(true);
    expect(isSameMeaning('0', 0)).toBe(true);
    expect(isSameMeaning(0, 0)).toBe(true);
    // false
    expect(isSameMeaning('', ' ')).toBe(false);
    expect(isSameMeaning('abc', 'abd')).toBe(false);
    expect(isSameMeaning('偽', '真')).toBe(false);
    expect(isSameMeaning([], [])).toBe(false);
    expect(isSameMeaning([1], [1])).toBe(false);
  });

  test('isMailAddress [Exprimental]', function () {
    var isMailAddress = util.isMailAddress;

    expect(isMailAddress('tuckn333@gmail.com')).toBe(true);
    expect(isMailAddress('tuckn333+github@gmail.com')).toBe(true);
    expect(isMailAddress('tuckn333@[11.22.33.44]')).toBe(true);

    expect(isMailAddress('tuckn333.github.gmail.com')).toBe(false);
  });

  test('isPhoneNumberInJapan [W.I.P]', function () {
    var isPhoneNum = util.isPhoneNumberInJapan;

    expect(isPhoneNum('090-1234-5678')).toBe(true);
    expect(isPhoneNum('09012345678')).toBe(true);
    expect(isPhoneNum('070-1234-5678')).toBe(true);
    expect(isPhoneNum('07012345678')).toBe(true);
    expect(isPhoneNum('050-1234-5678')).toBe(true);
    expect(isPhoneNum('05012345678')).toBe(true);
    expect(isPhoneNum('0120-456-789')).toBe(true);
    expect(isPhoneNum('0120456789')).toBe(true);
    expect(isPhoneNum('0800-123-4567')).toBe(true);
    expect(isPhoneNum('03-456-7890')).toBe(true);
    expect(isPhoneNum('110')).toBe(true);
  });

  test('isPhoneNumberLikeInJapan [W.I.P]', function () {
    var isPhoneNumLike = util.isPhoneNumberLikeInJapan;

    expect(isPhoneNumLike('090-1234-5678')).toBe(true);
    expect(isPhoneNumLike('070-1234-5678')).toBe(true);
    expect(isPhoneNumLike('050-1234-5678')).toBe(true);
    expect(isPhoneNumLike('0120-456-789')).toBe(true);
    expect(isPhoneNumLike('0800-123-4567')).toBe(true);
    expect(isPhoneNumLike('03-456-7890')).toBe(true);
    expect(isPhoneNumLike('110')).toBe(true);
  });

  test('isJapaneseLike [W.I.P]', function () {
    var isJapaneseLike = util.isJapaneseLike;

    expect(isJapaneseLike('山田　太郎')).toBe(true);
    expect(isJapaneseLike('山田 太郎')).toBe(true);
    expect(isJapaneseLike('山田太郎')).toBe(true);
    expect(isJapaneseLike('Yamada Taro')).toBe(true);
    expect(isJapaneseLike('TARO YAMADA')).toBe(true);
    expect(isJapaneseLike('Pink Floyd')).toBe(false);
    expect(isJapaneseLike('Quincy Jones')).toBe(false);
    expect(isJapaneseLike('007')).toBe(false);
    expect(isJapaneseLike('天照大御神')).toBe(true);
    expect(isJapaneseLike('！？')).toBe(false);
    expect(isJapaneseLike('NIKE')).toBe(false);
  });

  test('isPlaneTextFileExt [W.I.P]', function () {
    var isPlaneTextFileExt = util.isPlaneTextFileExt;

    expect(isPlaneTextFileExt('bat')).toBe(false);
    expect(isPlaneTextFileExt('.bat')).toBe(true);

    expect(isPlaneTextFileExt('.c')).toBe(true);
    expect(isPlaneTextFileExt('.js')).toBe(true);
    expect(isPlaneTextFileExt('.json')).toBe(true);
    expect(isPlaneTextFileExt('.xml')).toBe(true);

    expect(isPlaneTextFileExt('.bmp')).toBe(false);
    expect(isPlaneTextFileExt('.jpg')).toBe(false);
    expect(isPlaneTextFileExt('.xlsm')).toBe(false);
    expect(isPlaneTextFileExt('.xlsx')).toBe(false);
  });

  test('toHalfWidthEN', function () {
    var toHalfWidthEN = util.toHalfWidthEN;

    expect(toHalfWidthEN(zenNumsStr)).toBe(numsStr);
    expect(toHalfWidthEN(zenLowerEnStr)).toBe(lowerEnStr);
    expect(toHalfWidthEN(zenUpperEnStr)).toBe(upperEnStr);
    expect(toHalfWidthEN(zenSymbolsStr)).toBe(symbolsStr);

    noneStrVals.forEach(function (val) {
      expect(_cb(toHalfWidthEN, val)).toThrowError();
    });

    // The following is not changed
    expect(toHalfWidthEN(numsStr)).toBe(numsStr);
    expect(toHalfWidthEN(lowerEnStr)).toBe(lowerEnStr);
    expect(toHalfWidthEN(upperEnStr)).toBe(upperEnStr);
    expect(toHalfWidthEN(symbolsStr)).toBe(symbolsStr);
  });

  test('toDoubleByteEN', function () {
    var toDoubleByteEN = util.toDoubleByteEN;

    expect(toDoubleByteEN(numsStr)).toBe(zenNumsStr);
    expect(toDoubleByteEN(lowerEnStr)).toBe(zenLowerEnStr);
    expect(toDoubleByteEN(upperEnStr)).toBe(zenUpperEnStr);
    expect(toDoubleByteEN(symbolsStr)).toBe(zenSymbolsStr);

    noneStrVals.forEach(function (val) {
      expect(_cb(toDoubleByteEN, val)).toThrowError();
    });

    // The following is not changed
    expect(toDoubleByteEN(zenNumsStr)).toBe(zenNumsStr);
    expect(toDoubleByteEN(zenLowerEnStr)).toBe(zenLowerEnStr);
    expect(toDoubleByteEN(zenUpperEnStr)).toBe(zenUpperEnStr);
    expect(toDoubleByteEN(zenSymbolsStr)).toBe(zenSymbolsStr);
  });

  var hanKanaStr = 'ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｳﾞﾜﾞｦﾞｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｯｬｭｮ｡､ｰ｢｣･';
  var zenKanaStr = 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴヷヺアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョ。、ー「」・';

  test('toZenkakuKana', function () {
    var toZenkakuKana = util.toZenkakuKana;
    expect(toZenkakuKana(hanKanaStr)).toBe(zenKanaStr);

    noneStrVals.forEach(function (val) {
      expect(_cb(toZenkakuKana, val)).toThrowError();
    });

    // The following is not changed
    expect(toZenkakuKana(numsStr)).toBe(numsStr);
    expect(toZenkakuKana(lowerEnStr)).toBe(lowerEnStr);
    expect(toZenkakuKana(upperEnStr)).toBe(upperEnStr);
    expect(toZenkakuKana(symbolsStr)).toBe(symbolsStr);

    expect(toZenkakuKana(zenNumsStr)).toBe(zenNumsStr);
    expect(toZenkakuKana(zenLowerEnStr)).toBe(zenLowerEnStr);
    expect(toZenkakuKana(zenUpperEnStr)).toBe(zenUpperEnStr);
    expect(toZenkakuKana(zenSymbolsStr)).toBe(zenSymbolsStr);
  });

  test('toRegExpStr [W.I.P]', function () {
    var toRegExpStr = util.toRegExpStr;

    expect(toRegExpStr('3.14(a*(x+y))/b=z^2')).toBe('3\\.14\\(a\\*\\(x\\+y\\)\\)\\/b=z\\^2');
    expect(toRegExpStr('C:\\Program Files')).toBe('C:\\\\Program Files');
    expect(toRegExpStr('tag=R&B')).toBe('tag=R&B');
    expect(toRegExpStr('')).toBe('');

    noneStrVals.forEach(function (val) {
      expect(_cb(toRegExpStr, val)).toThrowError();
    });
  });
});

describe('Object', function () {
  test('hasOwnProp', function () {
    var hasOwnProp = util.hasOwnProp;

    var obj = { num: 3, N: null, ud: undefined, str: 'Str', ary: [], obj: {} };
    expect(hasOwnProp(obj, 'num')).toBe(true);
    expect(hasOwnProp(obj, 'N')).toBe(true);
    expect(hasOwnProp(obj, 'ud')).toBe(true);
    expect(hasOwnProp(obj, 'UD')).toBe(false);
    expect(hasOwnProp(obj, 'str')).toBe(true);
    expect(hasOwnProp(obj, 'ary')).toBe(true);
    expect(hasOwnProp(obj, 'obj')).toBe(true);

    // function
    var objFunc = { func: function () { return 1; } };
    expect(hasOwnProp(objFunc, 'func')).toBe(true);

    // Deep object
    var objDeep = { o1: { o2: { o3: 'o3' } } };
    expect(hasOwnProp(objDeep, 'o1')).toBe(true);
    expect(hasOwnProp(objDeep, 'o2')).toBe(false);
    expect(hasOwnProp(objDeep, 'o3')).toBe(false);

    // prototype
    var Constractor = function () { this.a = 'A'; };
    Constractor.prototype.protoVal = 'val';

    var instance = new Constractor();
    expect(hasOwnProp(instance, 'a')).toBe(true);
    // @note No going up the prototype chain
    expect(hasOwnProp(instance, 'protoVal')).toBe(false);
    expect(hasOwnProp(instance, 'prototype')).toBe(false);
    expect(hasOwnProp(instance, 'hasOwnProperty')).toBe(false);
    expect(hasOwnProp(instance, 'toString')).toBe(false);
  });

  test('hasInObj', function () {
    var hasInObj = util.hasInObj;

    var obj = { num: 3, N: null, ud: undefined, str: 'Str', ary: [], obj: {} };
    expect(hasInObj(obj, 'num')).toBe(true);
    expect(hasInObj(obj, 'N')).toBe(true);
    expect(hasInObj(obj, 'ud')).toBe(true);
    expect(hasInObj(obj, 'UD')).toBe(false);
    expect(hasInObj(obj, 'str')).toBe(true);
    expect(hasInObj(obj, 'ary')).toBe(true);
    expect(hasInObj(obj, 'obj')).toBe(true);

    // function
    var objFunc = { func: function () { return 1; } };
    expect(hasInObj(objFunc, 'func')).toBe(true);

    // Deep object
    var objDeep = { o1: { o2: { o3: 'o3' } } };
    expect(hasInObj(objDeep, 'o1')).toBe(true);
    expect(hasInObj(objDeep, 'o2')).toBe(false);
    expect(hasInObj(objDeep, 'o3')).toBe(false);

    // prototype
    var Constractor = function () { this.a = 'A'; };
    Constractor.prototype.protoVal = 'val';

    var instance = new Constractor();
    expect(hasInObj(instance, 'a')).toBe(true);
    // @note Going up the prototype chain
    expect(hasInObj(instance, 'protoVal')).toBe(true);
    expect(hasInObj(instance, 'prototype')).toBe(false); // <- false
    expect(hasInObj(instance, 'hasOwnProperty')).toBe(true);
    expect(hasInObj(instance, 'toString')).toBe(true);
  });

  test('hasIn', function () {
    var hasIn = util.hasIn;

    var obj = { num: 3, N: null, ud: undefined, str: 'Str', ary: [], obj: {} };
    expect(hasIn(obj, 'num')).toBe(true);
    expect(hasIn(obj, 'N')).toBe(true);
    expect(hasIn(obj, 'ud')).toBe(true);
    expect(hasIn(obj, 'UD')).toBe(false);
    expect(hasIn(obj, 'str')).toBe(true);
    expect(hasIn(obj, 'ary')).toBe(true);
    expect(hasIn(obj, 'obj')).toBe(true);

    // Empty param
    expect(hasIn(obj, '')).toBe(false);
    expect(hasIn(obj, [])).toBe(false);
    // Invaild param
    noneStrVals.forEach(function (val) {
      expect(hasIn(val)).toBe(false);
    });

    // function
    var objFunc = { func: function () { return 1; } };
    expect(hasIn(objFunc, 'func')).toBe(true);

    // Deep object
    var objDeep = { a: { b: { c: 'c' } } };
    expect(hasIn(objDeep, 'a')).toBe(true);
    expect(hasIn(objDeep, 'b')).toBe(false);
    expect(hasIn(objDeep, 'c')).toBe(false);
    expect(hasIn(objDeep, 'a.b')).toBe(true);
    expect(hasIn(objDeep, 'a.B')).toBe(false);
    expect(hasIn(objDeep, ['a', 'b'])).toBe(true);
    expect(hasIn(objDeep, 'a.b.c')).toBe(true);
    expect(hasIn(objDeep, ['a', 'b', 'c'])).toBe(true);
    expect(hasIn(objDeep, 'a.b.c.d')).toBe(false);
    expect(hasIn(objDeep, ['a', 'b', 'c', 'd'])).toBe(false);
    expect(hasIn(objDeep, 'a.c')).toBe(false);
    expect(hasIn(objDeep, 'b.c')).toBe(false);
    expect(hasIn(objDeep, ['b', 'c'])).toBe(false);

    // prototype
    var Constractor = function () { this.a = 'A'; };
    Constractor.prototype.protoVal = 'val';

    var instance = new Constractor();
    expect(hasIn(instance, 'a')).toBe(true);
    // @note Going up the prototype chain
    expect(hasIn(instance, 'protoVal')).toBe(true);
    expect(hasIn(instance, 'prototype.protoVal')).toBe(false);
    expect(hasIn(instance, 'prototype')).toBe(false); // <- false
    expect(hasIn(instance, 'hasOwnProperty')).toBe(true);
    expect(hasIn(instance, 'toString')).toBe(true);
  });

  test('merge', function () {
    var merge = util.merge;

    var objTarget = { a: { aa: 'AA1', ab: 'AB' }, b: 'B' };
    var objSource = { a: { aa: 'AA2' }, c: 'C' };
    var objMerged = { a: { aa: 'AA2', ab: 'AB' }, b: 'B', c: 'C' };
    var objReturned = merge(objTarget, objSource);

    expect(objReturned).toEqual(objMerged);
    expect(objTarget).toEqual(objMerged);  // The target is changed
    expect(objTarget === objReturned).toBe(true); // Strictly equal
    // The source in not changed
    expect(objSource).toEqual({ a: { aa: 'AA2' }, c: 'C' });
  });

  test('extend', function () {
    var extend = util.extend;

    var objTarget = { a: { aa: 'AA1', ab: 'AB' }, b: 'B' };
    var objSource = { a: { aa: 'AA2' }, c: 'C' };
    var objMerged = { a: { aa: 'AA2' }, b: 'B', c: 'C' };
    var objReturned = extend(objTarget, objSource);

    expect(objReturned).toEqual(objMerged);
    expect(objTarget).toEqual(objMerged);  // The target is changed
    expect(objTarget === objReturned).toBe(true); // Strictly equal
    // The source in not changed
    expect(objSource).toEqual({ a: { aa: 'AA2' }, c: 'C' });
  });

  test('cloneDeep', function () {
    var cloneDeep = util.cloneDeep;

    var objSource = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: 2 } } };
    var objCloned = cloneDeep(objSource);

    expect(objCloned).toEqual(objSource);
    expect(objSource === objCloned).toBe(false);
  });

  test('get', function () {
    var objSource = { a: 1, b: { B: 2 }, c: [3, 4] };
    expect(util.get(objSource, 'a')).toBe(1);
    expect(util.get(objSource, 'A')).toBe(undefined);
    expect(util.get(objSource, 'A', 'defVal')).toBe('defVal');
    expect(util.get(objSource, 'b')).toEqual({ B: 2 });
    expect(util.get(objSource, 'b.B')).toBe(2);
    expect(util.get(objSource, ['b', 'B'])).toBe(2);
    expect(util.get(objSource, 'c')).toEqual([3, 4]);
    expect(util.get(objSource, 'c.1')).toEqual(4);

    var objEmpLike = { u: undefined, n: null, f: false, t: true, z: 0, o: {}, a: [], s: '' };
    expect(util.get(objEmpLike, 'u', 'defVal')).toBe('defVal');
    expect(util.get(objEmpLike, 'n', 'defVal')).toBe(null);
    expect(util.get(objEmpLike, 'f', 'defVal')).toBe(false);
    expect(util.get(objEmpLike, 't', 'defVal')).toBe(true);
    expect(util.get(objEmpLike, 'z', 'defVal')).toBe(0);
    expect(util.get(objEmpLike, 'o', 'defVal')).toEqual({});
    expect(util.get(objEmpLike, 'a', 'defVal')).toEqual([]);
    expect(util.get(objEmpLike, '', 'defVal')).toEqual('defVal');
  });

  test('set', function () {
    var set = util.set;

    var objMock, objEspected;

    objMock = { a: 1, b: { B: 2 } };
    objEspected = { a: 'A', b: { B: 2 } };
    expect(set(objMock, 'a', 'A')).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objEspected = { a: 'A', b: { B: 'C' } };
    expect(set(objMock, 'b.B', 'C')).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objEspected = { a: 'A', b: [1, 2, 3] };
    expect(set(objMock, ['b'], [1, 2, 3])).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objMock = {
      a: 1,
      b: [{ B: 2 }, { C: 3 }]
    };
    objEspected = {
      a: 1,
      b: [{ B: 2 }, { C: 99 }]
    };
    expect(set(objMock, ['b', 1, 'C'], 99)).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objEspected = {
      a: 1,
      b: [{ newB: 22 }, { C: 99 }]
    };
    expect(set(objMock, 'b.0', { newB: 22 })).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objEspected = {
      a: 1,
      b: [{ newB: 22 }, { C: 33 }]
    };
    expect(set(objMock, 'b.1.C', 33)).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    objEspected = {
      a: 1,
      b: [{ newB: 22 }, { C: 33 }],
      d: { e: { f: 'Val' } }
    };
    expect(set(objMock, 'd.e.f', 'Val')).toEqual(objEspected);
    expect(objMock).toEqual(objEspected);

    expect(_cb(set, objMock, 'a.b.c', 'Val')).toThrowError();

    var noObjvals = [false, undefined, null, 0, ''];
    noObjvals.forEach(function (val) {
      expect(set(val)).toBe(val);
    });
  });

  test('unset', function () {
    var unset = util.unset;

    // var objSrc = { a: 1, b: { B: 2 }, c: [3, 4], d: [{ D: 5 }] };
    var objMock;

    objMock = { a: 1, b: { B: 2 } };
    expect(unset(objMock, 'a')).toBe(true);
    expect(objMock).toEqual({ b: { B: 2 } });

    expect(unset(objMock, 'b.B')).toBe(true);
    expect(objMock).toEqual({ b: {} });

    expect(unset(objMock, ['b'])).toBe(true);
    expect(objMock).toEqual({});

    objMock = { a: 1, b: [{ B: 2 }, { C: 3 }] };
    expect(unset(objMock, ['b', 1, 'C'])).toBe(true);
    expect(objMock).toEqual({ a: 1, b: [{ B: 2 }, {}] });

    expect(unset(objMock, 'b.0')).toBe(true);
    expect(objMock).toEqual({ a: 1, b: [undefined, {}] });

    expect(unset(objMock, 'b')).toBe(true);
    expect(objMock).toEqual({ a: 1 });

    var toTrueVals = [false, undefined, null, 0, NaN, '', [], {}, { a: 1 }];
    toTrueVals.forEach(function (val) {
      expect(unset({ a: 'A' }, val)).toBe(true);
      expect(unset(val, 'prop.name')).toBe(true);
    });
  });

  test('obtainPropVal', function () {
    var obtain = util.obtainPropVal;
    var objSource = { a: 1, b: { B: 2 }, c: [3, 4] };
    expect(obtain(objSource, 'a')).toBe(1);
    expect(obtain(objSource, 'A')).toBe(undefined);
    expect(obtain(objSource, 'A', 'defVal')).toBe('defVal');
    expect(obtain(objSource, 'b')).toEqual({ B: 2 });
    expect(obtain(objSource, 'b.B')).toBe(2);
    expect(obtain(objSource, ['b', 'B'])).toBe(2);
    expect(obtain(objSource, 'c')).toEqual([3, 4]);
    expect(obtain(objSource, 'c.1')).toEqual(4);

    var objEmpLike = { u: undefined, n: null, f: false, t: true, z: 0, o: {}, a: [], s: '' };
    expect(obtain(objEmpLike, 'u', 'defVal')).toBe('defVal');
    expect(obtain(objEmpLike, 'n', 'defVal')).toBe('defVal');
    expect(obtain(objEmpLike, 'f', 'defVal')).toBe(false);
    expect(obtain(objEmpLike, 't', 'defVal')).toBe(true);
    expect(obtain(objEmpLike, 'z', 'defVal')).toBe(0);
    expect(obtain(objEmpLike, 'o', 'defVal')).toEqual('defVal');
    expect(obtain(objEmpLike, 'a', 'defVal')).toEqual('defVal');
    expect(obtain(objEmpLike, '', 'defVal')).toEqual('defVal');
  });

  test('objToStr [W.I.P]', function () {
    var objToStr = util.objToStr;
    expect(objToStr([1, 2, 3], '', '')).toBe('[1,2,3]');
    expect(objToStr({ a: 'A', b: 'B', c: 'C' }, '', '')).toBe('{a:"A",b:"B",c:"C"}');
  });
});

describe('Collection', function () {
  test('includes', function () {
    var includes = util.includes;

    // String
    var str = 'abcd';
    expect(includes(str, 'bc')).toBe(true);
    expect(includes(str, 'Bc')).toBe(false);
    expect(includes(str, 'Bc', 'i')).toBe(true);
    expect(includes(str, 'Bc', null, 'i')).toBe(true);

    str = 'ab cd';
    expect(includes(str, ' ')).toBe(true);
    expect(includes(str, 'B c')).toBe(false);
    expect(includes(str, 'B c', 'i')).toBe(true);
    expect(includes(str, 'B c', null, 'i')).toBe(true);

    // Array of Values
    var array = [1, 2, 3, 'four', [5]];
    expect(includes(array, 1)).toBe(true);
    expect(includes(array, 3)).toBe(true);
    expect(includes(array, 1, 2)).toBe(false);
    expect(includes([1, 2, 3, 1], 1, 2)).toBe(true);
    expect(includes(array, 'four')).toBe(true);
    expect(includes(array, 'Four')).toBe(false);
    expect(includes(array, 'Four', 'i')).toBe(true);
    expect(includes(array, [5])).toBe(false);
    expect(includes(array, [5], 'i')).toBe(false);

    // Object
    var obj = { a: 1, b: 'B' };
    expect(includes(obj, 1)).toBe(true);
    expect(includes(obj, 'B')).toBe(true);
    expect(includes(obj, 'b')).toBe(false);
    expect(includes(obj, 'b', 'i')).toBe(true);
    expect(includes(obj, 3)).toBe(false);

    // Objects in Array
    var objA = { a: 1 };
    var objs = [objA, { b: 'B' }, { c: 3 }];
    // true
    expect(includes(objs, objA)).toBe(true);
    // false
    expect(includes(objs, { a: 1 })).toBe(false);
    expect(includes(objs, { b: 'B' })).toBe(false);

    // Objects in Object
    var objA1 = { A: 1 };
    var objInObj = { a: objA1, b: { B: 2 } };
    // true
    expect(includes(objInObj, objA1)).toBe(true);
    // false
    expect(includes(objInObj, { A: 1 })).toBe(false);
    expect(includes(objInObj, { B: 2 })).toBe(false);
    expect(includes(objInObj, 1)).toBe(false);
    expect(includes(objInObj, { A: 2 })).toBe(false);
    expect(includes(objInObj, [{ A: 2 }])).toBe(false);

    var falsyArray = [false, undefined, null, 0, NaN, ''];
    falsyArray.forEach(function (val) {
      expect(includes(falsyArray, val)).toBe(true);
    });

    var truthyArray = [true, [], {}, [1], { a: 'A' }, 'a', 99, Infinity];
    truthyArray.forEach(function (val) {
      expect(includes(truthyArray, val)).toBe(true);
    });

    truthyArray.forEach(function (val) {
      expect(includes(falsyArray, val)).toBe(false);
    });
  });
});

describe('Array', function () {
  test('concat', function () {
    var concat = util.concat;
    var srcArray = [1];
    var concatenatedArray = concat(srcArray, 2, [3], [[4]]);
    expect(concatenatedArray).toEqual([1, 2, 3, [4]]);
    expect(srcArray).toEqual([1]); // The source array is not changed

    expect(concat([1, 2], [3, 4], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('inArray', function () {
    var inArray = util.inArray;

    var falsyArray = [false, undefined, null, 0, NaN, '', 'false', 'FALSE'];
    falsyArray.forEach(function (val, i) {
      expect(inArray(val, falsyArray)).toBe(i);
    });

    var truthyArray = [true, [], {}, [1], { a: 'A' }, 'a', 99, Infinity];
    truthyArray.forEach(function (val, i) {
      expect(inArray(val, truthyArray)).toBe(i);
    });

    truthyArray.forEach(function (val) {
      expect(inArray(val, falsyArray)).toBe(-1);
    });

    expect(inArray(true, truthyArray, 0)).toBe(0);
    expect(inArray(true, truthyArray, 1)).toBe(-1);
    expect(inArray(99, truthyArray, 6)).toBe(6);
    expect(inArray(99, truthyArray, 7)).toBe(-1);
  });

  test('last', function () {
    var last = util.last;

    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([1])).toBe(1);

    var toUndefVals = [false, undefined, null, 0, NaN, '', [], {}, { a: 1 }];
    toUndefVals.forEach(function (val) {
      expect(last(val, val)).toBe(undefined);
    });
  });

  test('lastIndexOf', function () {
    var lastIndexOf = util.lastIndexOf;

    expect(lastIndexOf(['A', 'B', 'C', 'D'])).toBe(3);
    expect(lastIndexOf(['A', 'B', 'C'])).toBe(2);
    expect(lastIndexOf(['A'])).toBe(0);

    expect(lastIndexOf(['A', 'B', 'C', 'D'], 'C')).toBe(2);
    expect(lastIndexOf(['A', 'B', 'C', 'D'], 'B')).toBe(1);
    expect(lastIndexOf(['A', 'B', 'C', 'D'], 'A')).toBe(0);
    expect(lastIndexOf(['A', { b: 'B' }, 'C', 'D'], { b: 'B' })).toBe(1);

    expect(lastIndexOf(['A', 'B', 'A', 'B'], 'B', 2)).toBe(1);
    expect(lastIndexOf(['A', 'B', 'A', 'B'], 'B', 99)).toBe(3);
    expect(lastIndexOf(['A', 'B', 'A', 'B'], 'B', 'val')).toBe(3);

    var toUndefVals = [false, undefined, null, 0, NaN, '', [], {}, { a: 1 }];
    toUndefVals.forEach(function (val) {
      expect(lastIndexOf(val, val)).toBe(-1);
    });
  });

  test('conv2DArrayToObj', function () {
    var conv2dToObj = util.conv2DArrayToObj;
    var srcArray = [
      'This CSV was output from Tuckn Hoge system',
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [true, false, null, undefined, NaN, Infinity, ''],
      ['=SUM(X1:Y10)', '=TODAY()', '2020/1/1', '\'007', '日本語'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
    ];
    var destArray = [
      {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        I: 8,
        J: 9,
        K: 10,
        L: 11
      }, {
        A: true,
        B: false,
        C: null,
        D: undefined,
        E: NaN,
        F: Infinity,
        G: '',
        H: undefined,
        I: undefined,
        J: undefined,
        K: undefined,
        L: undefined
      }, {
        A: '=SUM(X1:Y10)',
        B: '=TODAY()',
        C: '2020/1/1',
        D: '\'007',
        E: '日本語',
        F: undefined,
        G: undefined,
        H: undefined,
        I: undefined,
        J: undefined,
        K: undefined,
        L: undefined
      }, {
        A: 'a',
        B: 'b',
        C: 'c',
        D: 'd',
        E: 'e',
        F: 'f',
        G: 'g',
        H: 'h',
        I: 'i',
        J: 'j',
        K: 'k',
        L: 'l'
      }
    ];
    // console.dir(conv2dToObj(srcArray));
    expect(conv2dToObj(srcArray, { beginRow: 2 })).toEqual(destArray);

    var errVals = [undefined, null, false, [], {}, 'a', 99, NaN, Infinity];
    errVals.forEach(function (val) {
      expect(_cb(conv2dToObj, val)).toThrowError();
    });
  });

  test('stringify2DArrayToCsv', function () {
    var stringifyCSV = util.stringify2DArrayToCsv;
    var srcArray, csvStr;

    srcArray = [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [true, false, null, undefined, NaN, Infinity, ''],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
    ];

    // CSV
    csvStr = stringifyCSV(srcArray);
    expect(csvStr).toBe(''
      + 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
      + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
      + 'true,false,,NaN,Infinity,\r\n' // null to empty, undefined is ignored
      + 'a,b,c,d,e,f,g,h,i,j,k,l\r\n'
    );

    // TSV
    csvStr = stringifyCSV(srcArray, { delimiter: '\t' });
    expect(csvStr).toBe(''
      + 'A\tB\tC\tD\tE\tF\tG\tH\tI\tJ\tK\tL\r\n'
      + '0\t1\t2\t3\t4\t5\t6\t7\t8\t9\t10\t11\r\n'
      + 'true\tfalse\t\tNaN\tInfinity\t\r\n'
      + 'a\tb\tc\td\te\tf\tg\th\ti\tj\tk\tl\r\n'
    );

    csvStr = stringifyCSV(srcArray, { lineEnding: '\n' });
    expect(csvStr).toBe(''
      + 'A,B,C,D,E,F,G,H,I,J,K,L\n'
      + '0,1,2,3,4,5,6,7,8,9,10,11\n'
      + 'true,false,,NaN,Infinity,\n'
      + 'a,b,c,d,e,f,g,h,i,j,k,l\n'
    );

    // Special vals
    srcArray = [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      ['2020/1/1', '\'007', 'Has Space', '日本語', 'I say "Yes!"', 'Line\nBreak', 'Foo,Bar,Baz']
    ];

    csvStr = stringifyCSV(srcArray);
    expect(csvStr).toBe(''
      + 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
      + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
      + '2020/1/1,\'007,Has Space,日本語,"I say ""Yes!""","Line\nBreak","Foo,Bar,Baz"\r\n'
    );

    // Excel Functions
    srcArray = [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      ['=C10', '="val is " & K2', '=SUM(A2:L2)', '=TODAY()']
    ];

    csvStr = stringifyCSV(srcArray);
    expect(csvStr).toBe(''
      + 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
      + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
      + '=C10,"=""val is "" & K2",=SUM(A2:L2),=TODAY()\r\n'
    );

    csvStr = stringifyCSV(srcArray, { escapesExcelFunc: true });
    expect(csvStr).toBe(''
      + 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
      + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
      + '=C10,="val is " & K2,=SUM(A2:L2),=TODAY()\r\n'
    );

    var errVals = [undefined, null, false, [], {}, 'a', 99, NaN, Infinity];
    errVals.forEach(function (val) {
      expect(_cb(stringifyCSV, val)).toThrowError();
    });
  });

  test('parseCsvTo2DArray', function () {
    var parseCSV = util.parseCsvTo2DArray;
    var linesSet = [
      'This CSV was output from Tuckn Hoge system',
      'A,B,C,D,E,F,G,H,I,J,K,L',
      '0,1,2,3,4,5,6,7,8,9,10,11',
      'a,b,c,d,e,f,g,h,i,j,k,l',
      '',
      'true,false,null,undefined,NaN,Infinity',
      '=SUM(X1:Y10),=TODAY(),2020/1/1,\'007,Has Space,日本語,I say "Yes!","Line',
      'Break"'
    ];
    var parsed;

    var csvStrCRLF = linesSet.join('\r\n');
    parsed = parseCSV(csvStrCRLF);

    expect(parsed).toEqual([
      ['This CSV was output from Tuckn Hoge system'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      [
        '=SUM(X1:Y10)',
        '=TODAY()',
        '2020/1/1',
        '\'007',
        'Has Space',
        '日本語',
        'I say "Yes!"',
        '"Line\r\nBreak"'
      ]
    ]);

    var tsvStrCRLF = csvStrCRLF.replace(/,/g, '\t');
    parsed = parseCSV(tsvStrCRLF, { delimiter: '\t' });

    expect(parsed).toEqual([
      ['This CSV was output from Tuckn Hoge system'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      [
        '=SUM(X1:Y10)',
        '=TODAY()',
        '2020/1/1',
        '\'007',
        'Has Space',
        '日本語',
        'I say "Yes!"',
        '"Line\r\nBreak"'
      ]
    ]);

    var csvStrLF = linesSet.join('\n');
    parsed = parseCSV(csvStrLF, { lineEnding: '\n' });

    expect(parsed).toEqual([
      ['This CSV was output from Tuckn Hoge system'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      [
        '=SUM(X1:Y10)',
        '=TODAY()',
        '2020/1/1',
        '\'007',
        'Has Space',
        '日本語',
        'I say "Yes!"',
        '"Line\nBreak"'
      ]
    ]);

    parsed = parseCSV(csvStrLF, { lineEnding: '\n', addsEmptyRow: true });

    expect(parsed).toEqual([
      ['This CSV was output from Tuckn Hoge system'],
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      [''],
      ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
      [
        '=SUM(X1:Y10)',
        '=TODAY()',
        '2020/1/1',
        '\'007',
        'Has Space',
        '日本語',
        'I say "Yes!"',
        '"Line\nBreak"'
      ]
    ]);

    var errVals = [undefined, null, false, [], {}, ['a'], 99, NaN, Infinity];
    errVals.forEach(function (val) {
      expect(_cb(parseCSV, val)).toThrowError();
    });
  });
});

describe('Util', function () {
  test('uuidv4', function () {
    var uuidv4 = util.uuidv4; // Shorthand
    var uuidv4RE = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
    var newId1 = uuidv4();
    expect(uuidv4RE.test(newId1)).toBe(true);

    var newId2 = uuidv4();
    expect(uuidv4RE.test(newId2)).toBe(true);
    expect(newId2).not.toBe(newId1);

    var newId3 = uuidv4();
    expect(uuidv4RE.test(newId3)).toBe(true);
    expect(newId3).not.toBe(newId2);
    expect(newId3).not.toBe(newId1);

    var newId4 = uuidv4();
    expect(uuidv4RE.test(newId4)).toBe(true);
    expect(newId4).not.toBe(newId3);
    expect(newId4).not.toBe(newId2);
    expect(newId4).not.toBe(newId1);
  });
});
