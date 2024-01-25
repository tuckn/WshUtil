/* globals Wsh: false */

(function () {
  if (Wsh && Wsh.Util) return;

  /**
   * WSH (Windows Script Host) utility library (similar to Node.js-Util, Lodash).
   *
   * @namespace Util
   * @memberof Wsh
   * @requires {@link https://github.com/tuckn/WshPolyfill|WshPolyfill}
   * @requires ./ConstJScript.js
   */
  Wsh.Util = {};

  var util = Wsh.Util;

  /** @constant {string} */
  var MODULE_TITLE = 'WshUtil/Util.js';

  // util.inspect {{{
  /**
   * Converts a value to formatted string.
   *
   * @example
   * var util = Wsh.Util; // Shorthand
   *
   * util.inspect(undefined); // 'undefined'
   * util.inspect(null); // 'null'
   * util.inspect(true); // 'true'
   * util.inspect(NaN); // 'NaN'
   * util.inspect('Foo'); // '"Foo"'
   * util.inspect('  '); // '"  "'
   *
   * util.inspect([1, NaN, '3']);
   * // '[
   * //    0: 1,
   * //    1: NaN,
   * //    2: "3",
   * // ]'
   *
   * util.inspect({ a: [1, 2], b: true, o: { c: 'C' } });
   * // '{
   * //   a: [
   * //     0: 1,
   * //     1: 2
   * //   ],
   * //   b: true,
   * //   o: {
   * //     c: "C"
   * //   }
   * // }'
   * @function inspect
   * @memberof Wsh.Util
   * @param {any} val - The value to format.
   * @returns {string} - A formatted string.
   */
  util.inspect = console._toDirString;
  // }}}
  var _insp = util.inspect; // Shorthand

  var _protoTypeOf = console._protoTypeOf;

  // util.throwValueError {{{
  /**
   * Throws an Error that caused by an invalid value of argument.
   *
   * @example
   * var throwValueError = Wsh.Util.throwValueError; // Shorthand
   *
   * var myFunc = function (val) {
   *   if (!val) return throwValueError('val', 'Example.js', 'myFunc', val);
   *   // ...
   * };
   *
   * myFunc('');
   * // Throws a Error:
   * // 'TypeError [ERR_INVALID_ARG_VALUE]: The argument `val` cannot be ""
   * //    at myFunc (Example.js)'
   * @function throwValueError
   * @memberof Wsh.Util
   * @param {string} argName - An argument name
   * @param {string} moduleTitle - The module name where the error occurred.
   * @param {string} functionName - The function name where the error occurred.
   * @param {any} errVal - The value that caused the error.
   * @throws {Error} - Throws an Error with the invalid value message.
   */
  util.throwValueError = function (argName, moduleTitle, functionName, errVal) {
    throw new Error(
      'TypeError [ERR_INVALID_ARG_VALUE]: The argument `' + argName + '` cannot be ' + _insp(errVal) + '\n'
      + '  at ' + functionName + ' (' + moduleTitle + ')');
  }; // }}}

  // util.throwTypeError {{{
  /**
   * Throws an Error that caused by an invalid type of argument.
   *
   * @example
   * var throwTypeError = Wsh.Util.throwTypeError; // Shorthand
   *
   * var myFunc = function (val) {
   *   if (typeof val !== 'string') {
   *     return throwTypeError('String', 'Example.js', 'myFunc', val);
   *   }
   *
   *   // ...
   * };
   *
   * myFunc(1);
   * // Throws a Error:
   * // 'TypeError [ERR_INVALID_ARG_TYPE]: The argument must be one of type String
   * //    at myFunc (Example.js)
   * //    value: 1'
   * @function throwTypeError
   * @memberof Wsh.Util
   * @param {string} trueType - The type of expected.
   * @param {string} moduleTitle - The module name where the error occurred.
   * @param {string} functionName - The function name where the error occurred.
   * @param {any} errVal - The value that caused the error.
   * @throws {Error}
   */
  util.throwTypeError = function (trueType, moduleTitle, functionName, errVal) {
    throw new Error(
      'TypeError [ERR_INVALID_ARG_TYPE]: The argument must be one of type ' + trueType + '\n'
      + '  at ' + functionName + ' (' + moduleTitle + ')\n'
      + '  value: ' + _insp(errVal));
  }; // }}}

  var throwErrNonArray = function (functionName, typeErrVal) {
    util.throwTypeError('array', MODULE_TITLE, functionName, typeErrVal);
  };

  var throwErrNonStr = function (functionName, typeErrVal) {
    util.throwTypeError('string', MODULE_TITLE, functionName, typeErrVal);
  };

  // util.isArray {{{
  /**
   * Checks if a value is classified as an Array object.
   *
   * @example
   * var isArray = Wsh.Util.isArray; // Shorthand
   *
   * // true
   * isArray([]);
   * isArray([1, 2, 3]);
   *
   * // false
   * isArray(undefined);
   * isArray('foo bar');
   * isArray({ a: 'A', b: 'B' });
   * isArray((function () { return arguments; })());
   * @function isArray
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is an Array, else false.
   */
  util.isArray = function (val) {
    return _protoTypeOf(val) === 'Array';
  };
  var _isArray = util.isArray; // Shorthand
  // }}}

  // util.isBoolean {{{
  /**
   * Checks if a value is classified as a Boolean object.
   *
   * @example
   * var isBoolean = Wsh.Util.isBoolean; // Shorthand
   *
   * // true
   * isBoolean(true);
   * isBoolean(false);
   *
   * // false
   * isBoolean(undefined);
   * isBoolean(null);
   * isBoolean(1);
   * @function isBoolean
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a Boolean, else false.
   */
  util.isBoolean = function (val) {
    return _protoTypeOf(val) === 'Boolean';
  }; // }}}

  // util.isError {{{
  /**
   * Checks if a value is classified as an Error object.
   *
   * @example
   * var isError = Wsh.Util.isError; // Shorthand
   *
   * isError(new Error()); // true
   * isError(undefined); // false
   * @function isError
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is an Error, else false.
   */
  util.isError = function (val) {
    return _protoTypeOf(val) === 'Error';
  }; // }}}

  // util.isFunction {{{
  /**
   * Checks if a value is classified as a Function object.
   *
   * @example
   * var isFunction = Wsh.Util.isFunction; // Shorthand
   *
   * isFunction(function (a) { return a * a; }); // true
   * isFunction({ a: 'A', b: 'B' }); // false
   * @function isFunction
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a Function, else false.
   */
  util.isFunction = function (val) {
    return _protoTypeOf(val) === 'Function';
  }; // }}}

  // util.isNumber {{{
  /**
   * Checks if a value is classified as a Number object.
   *
   * @example
   * var isNumber = Wsh.Util.isNumber; // Shorthand
   *
   * // true
   * isNumber(3);
   * isNumber(3.14);
   * isNumber(-1);
   * isNumber(NaN);
   * isNumber(Infinity);
   *
   * // false
   * isNumber('3');
   * isNumber(true);
   * @function isNumber
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a Number, else false.
   */
  util.isNumber = function (val) {
    return _protoTypeOf(val) === 'Number';
  };
  var _isNumber = util.isNumber; // Shorthand
  // }}}

  // util.isPureNumber {{{
  /**
   * Checks if a value is classified as a Number object and not NaN or Infinity.
   *
   * @example
   * var isPureNumber = Wsh.Util.isPureNumber; // Shorthand
   *
   * // true
   * isPureNumber(3);
   * isPureNumber(3.14);
   * isPureNumber(-1);
   *
   * // false
   * isPureNumber(NaN);
   * isPureNumber(Infinity);
   * isPureNumber('3');
   * isPureNumber(true);
   * @function isPureNumber
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a Number, else false.
   */
  util.isPureNumber = function (val) {
    return util.isNumber(val) && !isNaN(val) && val !== Infinity;
  };
  // var _isPureNumber = util.isPureNumber; // Shorthand
  // }}}

  // util.isObject {{{
  /**
   * Checks if a value is classified as an Object.
   *
   * @example
   * var isObject = Wsh.Util.isObject; // Shorthand
   *
   * // true
   * isObject({});
   * isObject({ a: 'A', b: 'B' });
   * isObject([1, 2, 3]);
   * isObject(function (a) { return a * a; });
   * isObject((function () { return arguments; })());
   * isObject(new Error());
   * isObject(new Date());
   * isObject(new RegExp('\\.js$'));
   *
   * // false
   * isObject(undefined);
   * isObject(true);
   * isObject(0);
   * isObject('Foo Bar');
   * @function isObject
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is JS-language type of Object.
   */
  util.isObject = function (val) {
    var type = typeof val;
    return val != null && (type == 'object' || type == 'function');
  };
  var _isObject = util.isObject; // Shorthand
  // }}}

  // util.isObjectLike {{{
  /**
   * Checks if a value is classified as an Object and not Function.
   *
   * @example
   * var isObjectLike = Wsh.Util.isObjectLike; // Shorthand
   *
   * // true
   * isObjectLike({});
   * isObjectLike({ a: 'A', b: 'B' });
   * isObjectLike([1, 2, 3]);
   * isObjectLike((function () { return arguments; })());
   * isObjectLike(new Error());
   * isObjectLike(new Date());
   * isObjectLike(new RegExp('\\.js$'));
   *
   * // false
   * isObjectLike(function (a) { return a * a; });
   * isObjectLike(undefined);
   * isObjectLike(true);
   * isObjectLike(0);
   * isObjectLike('Foo Bar');
   * @function isObjectLike
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if value is Object like.
   */
  util.isObjectLike = function (val) {
    return val !== null && typeof val === 'object';
  };
  var _isObjectLike = util.isObjectLike; // Shorthand
  // }}}

  // util.isPlainObject {{{
  /**
   * Checks if a value is classified as a plain Object.
   *
   * @example
   * var isPlainObject = Wsh.Util.isPlainObject; // Shorthand
   *
   * // true
   * isPlainObject({});
   * isPlainObject({ a: 'A', b: 'B' });
   * isPlainObject((function () { return arguments; })());
   *
   * // false
   * isPlainObject([1, 2, 3]);
   * isPlainObject(new Error());
   * isPlainObject(new Date());
   * isPlainObject(new RegExp('\\.js$'));
   * isPlainObject(function (a) { return a * a; });
   * isPlainObject(undefined);
   * isPlainObject(true);
   * isPlainObject(0);
   * isPlainObject('Foo Bar');
   * @function isPlainObject
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if value is a plain Object.
   */
  util.isPlainObject = function (val) {
    return _protoTypeOf(val) === 'Object';
  };
  var _isPlainObject = util.isPlainObject; // Shorthand
  // }}}

  // util.isString {{{
  /**
   * Checks if a value is classified as a String object.
   *
   * @example
   * var isString = Wsh.Util.isString; // Shorthand
   *
   * // true
   * isString('');
   * isString('  ');
   * isString('Hello world!');
   *
   * // false
   * isString(3);
   * isString(true);
   * isString(['foo', 'bar']);
   * @function isString
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a String, else false.
   */
  util.isString = function (val) {
    return _protoTypeOf(val) === 'String';
  };
  var _isString = util.isString; // Shorthand
  // }}}

  // util.isSolidArray {{{
  /**
   * Checks if a value is classified as an Array object and length > 0.
   *
   * @example
   * var isSolidArray = Wsh.Util.isSolidArray; // Shorthand
   *
   * // true
   * isSolidArray([1, 2, 3]);
   *
   * // false
   * isSolidArray([]);
   * isSolidArray(undefined);
   * isSolidArray('foo bar');
   * isSolidArray({ a: 'A', b: 'B' });
   * isSolidArray((function () { return arguments; })());
   * @function isSolidArray
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is an Array and length > 0, else false.
   */
  util.isSolidArray = function (val) {
    return _isArray(val) && val.length > 0;
  };
  var _isSolidArray = util.isSolidArray; // Shorthand
  // }}}

  // util.isSolidObject {{{
  /**
   * Checks if a value is classified as a plain Object and not empty.
   *
   * @example
   * var isSolidObject = Wsh.Util.isSolidObject; // Shorthand
   *
   * // true
   * isSolidObject({ a: 'A', b: 'B' });
   * isSolidObject((function () { return arguments; })());
   *
   * // false
   * isSolidObject({});
   * isSolidObject([1, 2, 3]);
   * isSolidObject(function (a) { return a * a; });
   * isSolidObject(new Error());
   * isSolidObject(new Date());
   * isSolidObject(new RegExp('\\.js$'));
   * isSolidObject(undefined);
   * isSolidObject(true);
   * isSolidObject(0);
   * isSolidObject('Foo Bar');
   * @function isSolidObject
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a plain Object and not empty.
   */
  util.isSolidObject = function (val) {
    return _isPlainObject(val) && Object.keys(val).length > 0;
  }; // }}}

  // util.isSolidString {{{
  /**
   * Checks if a value is classified as a String object and not empty.
   *
   * @example
   * var isSolidString = Wsh.Util.isSolidString; // Shorthand
   *
   * // true
   * isSolidString('  ');
   * isSolidString('Hello world!');
   *
   * // false
   * isSolidString('');
   * isSolidString(3);
   * isSolidString(true);
   * isSolidString(['foo', 'bar']);
   * @function isSolidString
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a String and not empty, else false.
   */
  util.isSolidString = function (val) {
    return _isString(val) && val !== '';
  };
  var _isSolidString = util.isSolidString; // Shorthand
  // }}}

  // util.toPlainString {{{
  /**
   * Converts a value to a String.
   *
   * @example
   * var toPlainString = Wsh.Util.toPlainString; // Shorthand
   *
   * toPlainString(undefined); // ''
   * toPlainString(null); // ''
   * toPlainString(true); // 'true'
   * toPlainString(false); // 'false'
   * toPlainString(NaN); // 'NaN'
   * toPlainString(Infinity); // 'Infinity'
   * toPlainString('Hello world!'); // 'Hello world!'
   * toPlainString('  '); // '  '
   * toPlainString([1, NaN, '3']); // '1,NaN,3'
   * toPlainString([1, [2, [3]], 4]); // '1,2,3,4'
   * toPlainString({ a: 'A', b: { c: 'BC' } }); // 'ABC'
   * @function toPlainString
   * @memberof Wsh.Util
   * @param {any} val - The value to convert.
   * @returns {string} - A Coverted string
   */
  util.toPlainString = function (val) {
    var pType = _protoTypeOf(val);

    if (pType === 'Boolean') return String(val);
    if (pType === 'Number') return isNaN(val) ? 'NaN' : String(val);
    if (pType === 'Array' && val.length > 0) return val.join(',');
    if (pType === 'String' && val !== '') return val;
    if (pType === 'Object') {
      return Object.values(val).reduce(function (acc, v) {
        return acc + util.toPlainString(v);
      }, '');
    }
    return '';
  }; // }}}

  // util.hasContent {{{
  /**
   * Checks if a value is not empty.
   *
   * @example
   * var hasContent = Wsh.Util.hasContent; // Shorthand
   *
   * // true
   * hasContent(true);
   * hasContent(false);
   * hasContent(NaN);
   * hasContent(Infinity);
   * hasContent(0);
   * hasContent([1]);
   * hasContent({ a: 'A' });
   * hasContent('a');
   * hasContent(new Error());
   * hasContent(new Date());
   * hasContent(/^regExp$/);
   *
   * // false
   * hasContent(undefined);
   * hasContent(null);
   * hasContent([]);
   * hasContent({});
   * hasContent('');
   * @function hasContent
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Return true if a value is not empty. else false.
   */
  util.hasContent = function (val) {
    if (val === undefined || val === null) return false;
    if (val === Infinity) return true;

    var pType = _protoTypeOf(val);

    if (pType === 'Array') {
      if (val.length === 0) return false;
      return true;
    }

    if (pType === 'Boolean') return true;
    if (pType === 'Date') return true;
    if (pType === 'Error') return true;
    if (pType === 'Function') return true;
    if (pType === 'Number') return true;

    if (pType === 'Object') {
      if (Object.keys(val).length === 0) return false;
      return true;
    }

    if (pType === 'RegExp') return true;

    if (pType === 'String') {
      if (val === '') return false;
      return true;
    }

    return val;
  };
  var _hasContent = util.hasContent;
  // }}}

  /**
   * @namespace types
   * @memberof Wsh.Util
   */
  Wsh.Util.types = {};

  // util.types.protoTypeOf {{{
  /**
   * Returns an Object.prototype of a value.
   *
   * @example
   * var protoTypeOf = Wsh.Util.types.protoTypeOf; // Shorthand
   *
   * console.log(typeof null); // object
   * console.log(protoTypeOf(null)); // null
   *
   * console.log(typeof [1, 2, 3]); // object
   * console.log(protoTypeOf([1, 2, 3])); // Array
   *
   * console.log(typeof new Date()); // object
   * console.log(protoTypeOf(new Date())); // Date
   *
   * console.log(typeof /^regexp$/i); // object
   * console.log(protoTypeOf(/^regexp$/i)); // RegExp
   * @function protoTypeOf
   * @memberof Wsh.Util.types
   * @returns {string}
   */
  util.types.protoTypeOf = _protoTypeOf;
  // }}}

  // util.types.isDate {{{
  /**
   * Checks if a value is classified as a Date object.
   *
   * @example
   * var isDate = Wsh.Util.types.isDate; // Shorthand
   *
   * isDate(new Date()); // true
   * isDate(undefined); // false
   * @function isDate
   * @memberof Wsh.Util.types
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is a Date, else false.
   */
  util.types.isDate = function (val) {
    return _protoTypeOf(val) === 'Date';
  }; // }}}

  // util.types.isRegExp {{{
  /**
   * Checks if a value is classified as an RegExp object.
   *
   * @example
   * var isRegExp = Wsh.Util.types.isRegExp; // Shorthand
   *
   * isRegExp(new RegExp('\\.js$')); // true
   * isRegExp(undefined); // false
   * @function isRegExp
   * @memberof Wsh.Util.types
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is an RegExp, else false.
   */
  util.types.isRegExp = function (val) {
    return _protoTypeOf(val) === 'RegExp';
  }; // }}}

  // Lang

  // util.vbsTypeOf {{{
  /**
   * Returns a VBS type of a value using TypeName Function. @FIXME ScriptControl does not work on Windows 64bit
   *
   * @function vbsTypeOf
   * @memberof Wsh.Util
   * @param {string} val
   * @returns {string} - VBScript TypeName
   */
  util.vbsTypeOf = function (val) {
    var sc = new ActiveXObject('ScriptControl');

    sc.Language = 'VBScript';
    sc.AddCode('Function GetTypeName(obj)'
      + ': GetTypeName = TypeName(obj): End Function');

    return sc.Run('GetTypeName', val);
  }; // }}}

  // util.isEmpty {{{
  /**
   * Checks if a value is an empty enumerable object or non enumerable object.
   *
   * @example
   * var isEmpty = Wsh.Util.isEmpty; // Shorthand
   *
   * // true
   * isEmpty([]);
   * isEmpty({});
   * isEmpty('');
   * // true - Because non enumerable object
   * isEmpty(undefined);
   * isEmpty(null);
   * isEmpty(true);
   * isEmpty(false);
   * isEmpty(NaN);
   * isEmpty(Infinity);
   * isEmpty(0);
   * isEmpty(99);
   * isEmpty(new Error());
   * isEmpty(new Date());
   * isEmpty(new RegExp(''));
   *
   * // false
   * isEmpty([1]);
   * isEmpty({ a: 'A' });
   * isEmpty('a');
   * @function isEmpty
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if value is an empty enumerable object, else false
   */
  util.isEmpty = function (val) {
    if (val === undefined || val === null) return true;
    if (val === true || val === false) return true;
    if (val === Infinity) return true;

    var pType = _protoTypeOf(val);

    if (pType === 'Array') {
      if (val.length === 0) return true;
      return false;
    }

    if (pType === 'Date') return true;
    if (pType === 'Error') return true;
    if (pType === 'Function') return true;
    if (pType === 'Number') return true;

    if (pType === 'Object') {
      if (Object.keys(val).length === 0) return true;
      return false;
    }

    if (pType === 'RegExp') return true;

    if (pType === 'String') {
      if (val === '') return true;
      return false;
    }

    return true;
  };
  var _isEmpty = util.isEmpty; // Shorthand
  // }}}

  // util.isDeepStrictEqual {{{
  /**
   * Check if there is deep strict equality between valA and valB. Note that if a property of the value has a function, returns false.
   *
   * @example
   * var isEqual = Wsh.Util.isDeepStrictEqual; // Shorthand
   *
   * isEqual(0, 0); // true
   * isEqual(NaN, NaN); // true
   * isEqual('foo', 'foo'); // true
   * isEqual([1, 2, 3], [1, 2, 3]); // true
   *
   * var objA = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: 2 } } };
   * var objB = { s: 's', a: [1, [2, 3]], o: { nA: 1, nB: { o2: 2 } } };
   * isEqual(objA, objB); // true
   *
   * isEqual(0, 3); // false
   * isEqual([1, 2, 3], [1, 2]); // false
   *
   * var objFnA = { val: 'value', func: function () { return 1; } };
   * var objFnB = { val: 'value', func: function () { return 1; } };
   * isEqual(objFnA, objFnB); // false
   * @function isDeepStrictEqual
   * @memberof Wsh.Util
   * @param {any} valA - The value to check.
   * @param {any} valB - The value to check.
   * @returns {boolean} - Returns true if there is deep strict equality between valA and valB. Otherwise, returns false.
   */
  util.isDeepStrictEqual = function (valA, valB) {
    if (valA === valB) return true;

    var isNotEq;
    var valApType = _protoTypeOf(valA);
    var valBpType = _protoTypeOf(valB);

    if (valApType === 'Array' || valBpType === 'Array') {
      if (valApType !== 'Array' || valBpType !== 'Array') {
        return false;
      }

      var lenA = valA.length;
      var lenB = valB.length;

      if (lenA !== lenB) return false;
      if (lenA === 0 && lenB === 0) return true;

      isNotEq = valA.some(function (a, i) {
        return !_isEqual(a, valB[i]);
      });

      return !isNotEq;
    }

    if (valApType === 'Number' || valBpType === 'Number') {
      if (valApType !== 'Number' || valBpType !== 'Number') {
        return false;
      }
      return valA !== valA && valB !== valB; // `NaN !== NaN` is true
    }

    if (valApType === 'String' || valBpType === 'String') {
      if (valApType !== 'String' || valBpType !== 'String') {
        return false;
      }

      return valA === valB;
    }

    if (_isObjectLike(valA) || _isObjectLike(valB)) {
      if (!_isObjectLike(valA) || !_isObjectLike(valB)) {
        return false;
      }

      if (valApType !== valBpType) return false;

      var aKeys = Object.keys(valA);
      var bKeys = Object.keys(valB);

      if (aKeys.length !== bKeys.length) return false;

      if (aKeys.length === 0 && bKeys.length === 0) {
        if (valA.toString() === valB.toString()) return true;
        return false;
      }

      isNotEq = aKeys.some(function (aKey) {
        var matched = bKeys.some(function (bKey) {
          if (aKey === bKey) return _isEqual(valA[aKey], valB[bKey]);
        });

        if (!matched) return true; // unmatched
      });

      return !isNotEq;
    }

    return false;
  };
  var _isEqual = util.isDeepStrictEqual;
  // }}}

  // util.isEqual {{{
  /**
   * Another name of {@link Wsh.Util.isDeepStrictEqual}
   *
   * @function isEqual
   * @memberof Wsh.Util
   * @see {@link Wsh.Util.isDeepStrictEqual}
   */
  util.isEqual = _isEqual;
  // }}}

  // util.isFalseLike {{{
  /**
   * Checks if a value is false-like.
   *
   * @example
   * var isFalseLike = Wsh.Util.isFalseLike; // Shorthand
   *
   * // true
   * isFalseLike(false);
   * isFalseLike(undefined);
   * isFalseLike(null);
   * isFalseLike(0);
   * isFalseLike(NaN);
   * isFalseLike('');
   * isFalseLike('false');
   * isFalseLike('FALSE');
   *
   * // false
   * isFalseLike(true);
   * isFalseLike([]);
   * isFalseLike({});
   * isFalseLike('a');
   * isFalseLike(99);
   * isFalseLike(Infinity);
   * @function isFalseLike
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is false-like.
   */
  util.isFalseLike = function (val) {
    if (!val) return true;
    if (_isSolidString(val) && val.toUpperCase() === 'FALSE') return true;
    return false;
  }; // }}}

  // util.isTrueLike {{{
  /**
   * Checks if a value is not false-like.
   *
   * @example
   * var isTrueLike = Wsh.Util.isTrueLike; // Shorthand
   *
   * // true
   * isTrueLike(true);
   * isTrueLike([]);
   * isTrueLike({});
   * isTrueLike('a');
   * isTrueLike(99);
   * isTrueLike(Infinity);
   *
   * // false
   * isTrueLike(false);
   * isTrueLike(undefined);
   * isTrueLike(null);
   * isTrueLike(0);
   * isTrueLike(NaN);
   * isTrueLike('');
   * isTrueLike('false');
   * isTrueLike('FALSE');
   * @function isTrueLike
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is true-like.
   */
  util.isTrueLike = function (val) {
    return !util.isFalseLike(val);
  }; // }}}

  // String

  // util.startsWith {{{
  /**
   * Checks if string starts with the given target string.
   *
   * @example
   * var startsWith = Wsh.Util.startsWith; // Shorthand
   *
   * // true
   * startsWith('abc', 'a');
   * startsWith('abc', 'ab');
   * startsWith('abc', 'b', 1);
   * startsWith('abc', 'aB', 'i');
   * startsWith('abc', 'aB', null, 'i');
   *
   * // false
   * startsWith('abc', 'b');
   * startsWith('abc', 'aB');
   *
   * // Note: If the second argument is '', returns true.
   * startsWith('abc', ''); // ture
   * startsWith([1], ''); // true
   * @function startsWith
   * @memberof Wsh.Util
   * @param {string} val - The string to inspect.
   * @param {string} target - The stiring to search for.
   * @param {(number|'i')} [position=0] - The position to search from.
   * @param {(boolean|'i')} [ignoresCase=false] - To Specify true or 'i' will be case insensitive.
   * @returns {boolean} - Returns true if string starts with target, else false.
   */
  util.startsWith = function (val, target, position, ignoresCase) {
    if (target === '') return true;
    if (val === '') return false;
    if (val === undefined || val === null) return false;

    var str = String(_isArray(val) ? val[0] : val);
    var targetStr = String(_isArray(target) ? target[0] : target);

    var pos = 0;
    var iCase = false;
    if (position === 'i') {
      iCase = true;
    } else {
      if (_hasContent(position)) pos = Number(position);
      if (ignoresCase === true || ignoresCase === 'i') iCase = true;
    }

    var idx;
    if (iCase) {
      idx = str.toUpperCase().indexOf(targetStr.toUpperCase());
    } else {
      idx = str.indexOf(targetStr);
    }

    return idx === pos;
  }; // }}}

  // util.endsWith {{{
  /**
   * Checks if string ends with the given target string.
   *
   * @example
   * var endsWith = Wsh.Util.endsWith; // Shorthand
   *
   * // true
   * endsWith('abc', 'c');
   * endsWith('abc', 'bc');
   * endsWith('abc', 'b', 2);
   * endsWith('abc', 'Bc', 'i');
   * endsWith('abc', 'Bc', null, 'i');
   *
   * // false
   * endsWith('abc', 'b');
   * endsWith('abc', 'Bc');
   *
   * // Note: If the second argument is '', returns true.
   * endsWith('abc', ''); // ture
   * endsWith([1], ''); // true
   * @function endsWith
   * @memberof Wsh.Util
   * @param {string} val - The string to inspect.
   * @param {string} target - The stiring to search for.
   * @param {(number|'i')} [position=0] - The position to search from.
   * @param {(boolean|'i')} [ignoresCase=false] - To Specify true or 'i' will be case insensitive.
   * @returns {boolean} - Returns true if string ends with target, else false.
   */
  util.endsWith = function (val, target, position, ignoresCase) {
    if (target === '') return true;
    if (val === '') return false;
    if (val === undefined || val === null) return false;

    var str = String(_isArray(val) ? util.last(val) : val);
    var targetStr = String(_isArray(target) ? target[0] : target);

    var pos = str.length;
    var iCase = false;
    if (position === 'i') {
      iCase = true;
    } else {
      if (_hasContent(position)) pos = Number(position);
      if (ignoresCase === true || ignoresCase === 'i') iCase = true;
    }

    str = str.slice(0, pos);
    str = str.slice(-targetStr.length);

    if (iCase) return str.toUpperCase() === targetStr.toUpperCase();
    return str === targetStr;
  }; // }}}

  // util.createDateString {{{
  /**
   * Create a date string.
   *
   * @example
   * var dateParser = Wsh.Util.createDateString; // Shorthand
   *
   * dateParser(); // Equal with dateParser('yyyyMMddTHHmmss+hhmm')
   * // Returns: '20150204T065424+0900'
   *
   * dateParser('yyyy-MM'); // '2015-02'
   * dateParser('yy/MM/dd'); // '15/02/04'
   * dateParser('HH:mm:ss'); // '06:54:24'
   * @function createDateString
   * @memberof Wsh.Util
   * @param {string} [fmt='yyyyMMddTHHmmss+hhmm'] - The date format.
   * @param {Date} [dateObj=new Date()] - The Data object to parse.
   * @returns {string} - Created a date string.
   */
  util.createDateString = function (fmt, dateObj) {
    var dataStr = _isSolidString(fmt) ? fmt : 'yyyyMMddTHHmmss+hhmm';
    var dt = util.types.isDate(dateObj) ? dateObj : new Date();

    // Replaces the string with Time offsets from UTC.
    if (/\+hh?:?mm?$/i.test(dataStr)) {
      var eqtTime = (new Date().getTimezoneOffset() / 60) * -1;
      var eqtTimeH = Number(eqtTime);
      var eqtTimeM = eqtTime - eqtTimeH;
      var eqtTimeHHStr = String(eqtTimeH);
      var eqtTimeMMStr = String(eqtTimeM);

      if (eqtTimeHHStr.length === 1 && /\+hh:?mm?$/i.test(dataStr)) {
        eqtTimeHHStr = '0' + eqtTimeHHStr;
      }

      if (eqtTimeMMStr.length === 1 && /\+hh?:?mm$/i.test(dataStr)) {
        eqtTimeMMStr = '0' + eqtTimeMMStr;
      }

      dataStr = dataStr
        .replace(/\+(hh?)(:?mm?)$/i, '+' + eqtTimeHHStr + '$2')
        .replace(/(\+\d+:?)(mm?)$/i, '$1' + eqtTimeMMStr);
    }

    // Replaces the string with the Date.
    /*
     * @note 日付文字列の生成
     * 01,12,20,などのゼロパディング(2桁表示)を行うため
     * '0'を加えて文字列にし、sliceで右から2桁目のみを取得している
     */
    dataStr = dataStr
      .replace(/yyyy/i, String(dt.getFullYear()))
      .replace(/yy/i, String(dt.getFullYear()).slice(-2))
      // @note The fucking function getMonth returns 0-11.
      .replace(/MM/, ('0' + (dt.getMonth() + 1)).slice(-2))
      .replace(/M/, String(dt.getMonth() + 1))
      .replace(/dd/, ('0' + dt.getDate()).slice(-2))
      .replace(/d/, String(dt.getDate()))
      .replace(/HH/, ('0' + dt.getHours()).slice(-2))
      .replace(/H/, String(dt.getHours()))
      .replace(/mm/, ('0' + dt.getMinutes()).slice(-2))
      .replace(/m/, String(dt.getMinutes()))
      .replace(/ss/, ('0' + dt.getSeconds()).slice(-2))
      .replace(/s/, String(dt.getSeconds()));

    return dataStr;
  }; // }}}

  // util.parseTemplateLiteral {{{
  /**
   * Converts a schema object to a string.
   *
   * @example
   * var parser = Wsh.Util.parseTemplateLiteral; // Shorthand
   *
   * var schema = { comp: 'MYPC1234', share: 'C$', file: 'cache.db' };
   * parser('cp \\\\${comp}\\${share}\\${file} .\\tmp', schema);
   * // Returns: cp \\MYPC1234\C$\cache.db .\tmp
   *
   * parser('No Template Literal', schema));
   * // Returns: 'No Template Literal'
   * @function parseTemplateLiteral
   * @memberof Wsh.Util
   * @param {string} str - The string with embedded expressions. Ex. ${valName}
   * @param {object} schema - Ex. { valName: 'val' }
   * @returns {string} - The parsed string.
   */
  util.parseTemplateLiteral = function (str, schema) {
    var functionName = 'util.parseTemplateLiteral';
    if (!_isString(str)) throwErrNonStr(functionName, str);

    /*
     * @note String.match() won't return groups if the /.../g flag is set.
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
     */
    var matches = str.match(/\$\{[^{}]+\}/g); // g flag ignore groups (..)
    if (matches === null) return str;

    var parsedStr = str;
    matches.forEach(function (template) {
      var varName = template.match(/\$\{([^{}]+)\}/)[1];
      parsedStr = parsedStr.replace(template, schema[varName]);
    });

    return parsedStr;
  }; // }}}

  // util.parseDateSchema {{{
  var _reDateCal = new RegExp('\\[([yMdHms]+)\\s*([*+-])\\s*([0-9]+)\\]');

  /**
   * Parses the date schema to a date string.
   *
   * @example
   * var parser = Wsh.Util.parseDateSchema; // Shorthand
   * var dt = new Date(2020, 0, 2, 15, 4, 5);
   *
   * parse('yyyyMMdd', dt); // '20200102'
   * parse('yyyy-MM-dd', dt); // '2020-01-02'
   * parse('yyyy-MM', dt); // '2020-01'
   * parse('yyyy-MM-1', dt); // '2020-01-1'
   * parse('yyyy-[MM - 1]', dt); // '2019-12'
   * parse('yyyy-[MM-1]', dt); // '2019-12'
   * parse('[yyyy + 4]-MM', dt); // '2024-01'
   * parse('yy[MM * 4]', dt); // '2004'
   * parse('yy/M/d', dt); // '20/1/2'
   * parse('yyyy-MM-ddTHH:mm:ss', dt); // '2020-01-02T15:04:05'
   * parse('yyyy/M/d H:m:s', dt); // '2020/1/2 15:4:5'
   * parse('yyyyMMddTHHmmss+hhmm', dt)).toMatch(new RegExp('20200102T150405\\+\\d{4}')
   * parse('\\yyyy\\MM\\dd', dt); // '\\2020\\01\\02'
   * @function parseDateSchema
   * @memberof Wsh.Util
   * @param {string} dateSchema - The string of Date literal.
   * @param {Date} [dateObj=new Date()] - The Data object to parse.
   * @returns {string} - The parsed string.
   */
  util.parseDateSchema = function (dateSchema, dateObj) {
    var FN = '_parseDateSchema';
    if (!_isString(dateSchema)) throwErrNonStr(FN, dateSchema);

    var dt = util.types.isDate(dateObj) ? new Date(dateObj) : new Date();

    var dtCalcs = dateSchema.match(_reDateCal);
    if (dtCalcs && dtCalcs.length > 3) {
      var dtChar = dtCalcs[1];
      var op = dtCalcs[2];
      var num = parseInt(dtCalcs[3], 10);
      var dtSetName;
      var dtGetName;

      if (dtChar === 'yyyy' || dtChar === 'yy') {
        dtSetName = 'setFullYear';
        dtGetName = 'getFullYear';
      } else if (dtChar === 'MM' || dtChar === 'M') {
        dtSetName = 'setMonth';
        dtGetName = 'getMonth';
      } else if (dtChar === 'dd' || dtChar === 'd') {
        dtSetName = 'setDate';
        dtGetName = 'getDate';
      } else if (dtChar === 'HH' || dtChar === 'H') {
        dtSetName = 'setHours';
        dtGetName = 'getHours';
      } else if (dtChar === 'mm' || dtChar === 'm') {
        dtSetName = 'setMinutes';
        dtGetName = 'getMinutes';
      } else if (dtChar === 'ss' || dtChar === 's') {
        dtSetName = 'setSeconds';
        dtGetName = 'getSeconds';
      }

      if (dtSetName && dtGetName) {
        if (op === '+') {
          dt[dtSetName](dt[dtGetName]() + num);
          dateSchema = dateSchema.replace(_reDateCal, dtChar);
        } else if (op === '-') {
          dt[dtSetName](dt[dtGetName]() - num);
          dateSchema = dateSchema.replace(_reDateCal, dtChar);
        } else if (op === '*') {
          var dtNum = dt[dtGetName]();
          if (dtChar === 'MM' || dtChar === 'M') dtNum += 1;

          if (dtChar === 'yyyy' || dtChar === 'MM' || dtChar === 'dd'
              || dtChar === 'HH' || dtChar === 'mm' || dtChar === 'ss') {
            dateSchema = dateSchema.replace(
              _reDateCal, ('0' + dtNum * num).slice(-2));
          } else if (dtChar === 'yy' || dtChar === 'M' || dtChar === 'd'
              || dtChar === 'H' || dtChar === 'm' || dtChar === 's') {
            dateSchema = dateSchema.replace(_reDateCal, String(dtNum * num));
          }
        }
      }
    }

    return util.createDateString(dateSchema, dt);
  }; // }}}

  // util.parseDateLiteral {{{
  var _reDateLiterals = new RegExp('#\\{[^{}]+\\}', 'g');
  var _reDateLiteral = new RegExp('#\\{([^{}]+)\\}'); // g flag ignores groups (..)

  /**
   * Parses the date template literal to a date string.
   *
   * @example
   * var parse = Wsh.Util.parseDateLiteral; // Shorthand
   *
   * // If the current date is 2020/1/2 15:4:5
   * parse('#{yyyyMMdd}'); // '20200102'
   * parse('#{yyyy-MM-dd}'); // '2020-01-02'
   * parse('#{yyyy}-#{MM}-#{dd}');  // '2020-01-02'
   * parse('#{yyyy-MM-ddTHH:mm:ss}');  // '2020-01-02T15:04:05'
   * parse('#{yyyyMMddTHHmmss+hhmm}'); // '20200102T150405+0900
   *
   * parse('C:\\My Data\\#{yyyy-MM-dd}.txt');
   * // Returns: 'C:\My Data\2020-01-02.txt'
   *
   * parse('\\\\MyNas\\#{yyyy}\\#{MM}\\#{dd}');
   * // Returns: '\\MyNas\2020\01\02'
   *
   * // Calculation with square brackets `[]`
   * parse('#{yyyy-MM-1-dd}'); // '2020-01-1-02'
   * parse('#{yyyy-[MM - 1]-dd}'); // '2019-12-02'
   * parse('#{yyyy}-#{[MM-1]}-#{dd}'); // '2020-12-02'
   * parse('#{yy/M/[d - 2]}'); // '19/12/31'
   * parse('#{yy}#{[MM * 4]}'); // '2004'
   * parse('#{[yyyy + 4]}-#{MM}'); // '2024-01'
   * @function parseDateLiteral
   * @memberof Wsh.Util
   * @param {string} str - The string with embedded expressions.
   * @param {Date} [dateObj=new Date()] - The Data object to parse.
   * @returns {string} - The parsed string.
   */
  util.parseDateLiteral = function (str, dateObj) {
    if (!_isString(str)) throwErrNonStr('util.parseDateLiteral', str);

    var dateLiterals = str.match(_reDateLiterals);
    if (dateLiterals === null) return str;

    return dateLiterals.reduce(function (acc, dateLiteral) {
      var dateSchema = dateLiteral.match(_reDateLiteral)[1];
      var dateStr = util.parseDateSchema(dateSchema, dateObj);

      return acc.replace(_reDateLiteral, dateStr);
    }, str);
  }; // }}}

  // util.isASCII {{{
  /**
   * Checks if a value is composed of ASCII code only.
   *
   * @example
   * var isASCII = Wsh.Util.isASCII; // Shorthand
   *
   * // true
   * isASCII('0123456789');
   * isASCII('abcdefghijklmnopqrstuvwxyz');
   * isASCII('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
   * isASCII('\t\n\r ');
   *
   * // false
   * isASCII('abシーd');
   * isASCII('偽');
   * isASCII(0);
   * isASCII(true);
   * isASCII([1, 2, 3]);
   * @function isASCII
   * @memberof Wsh.Util
   * @param {any} val - The value to check.
   * @returns {boolean} - Returns true if the value is composed of ASCII code only.
   */
  util.isASCII = function (val) {
    if (!_isSolidString(val)) return false;

    var chars = Array.from(val);
    var isNotASCII = chars.some(function (char) {
      var code = char.charCodeAt(0);

      /**
       * @note ASCII char code
       *   Unicode: 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
       *   Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
       */
      return !((code >= 0x0 && code < 0x81)
          || (code == 0xf8f0)
          || (code >= 0xff61 && code < 0xffa0)
          || (code >= 0xf8f1 && code < 0xf8f4));
    });

    return !isNotASCII;
  }; // }}}

  // util.isSameMeaning {{{
  /**
   * Check if two values are the same meaning.
   *
   * @example
   * var isSameMeaning = Wsh.Util.isSameMeaning; // Shorthand
   *
   * // true
   * isSameMeaning('', '');
   * isSameMeaning('abc', 'abc');
   * isSameMeaning('abc', 'ABC');
   * isSameMeaning('真', '真');
   * isSameMeaning('\t\n\r', '\t\n\r');
   * isSameMeaning(0, 0);
   * isSameMeaning('0', 0);
   *
   * // false
   * isSameMeaning('', ' ');
   * isSameMeaning('abc', 'abd');
   * isSameMeaning('偽', '真');
   * isSameMeaning([], []);
   * isSameMeaning([1], [1]);
   * @function isSameMeaning
   * @memberof Wsh.Util
   * @param {(number|string)} valA - The value to check.
   * @param {(number|string)} valB - The value to check.
   * @returns {boolean} - Returns true If the two values are the same meaning.
   */
  util.isSameMeaning = function (valA, valB) {
    if (_isString(valA) && _isString(valB)) {
      return valA.toUpperCase() === valB.toUpperCase();
    }

    if (_isNumber(valA) && _isNumber(valB)) {
      return valA == valB;
    }

    if ((_isString(valA) && _isNumber(valB))
        || (_isNumber(valA) && _isString(valB))) {
      return valA == valB;
    }

    return false;
  }; // }}}

  // util.isMailAddress {{{
  /**
   * Check if a value is the string of mail-address.
   *
   * @example
   * var isMailAddress = Wsh.Util.isMailAddress; // Shorthand
   *
   * // true
   * isMailAddress('tuckn333@gmail.com');
   * isMailAddress('tuckn333@gmail.com');
   * isMailAddress('tuckn333@[11.22.33.44]');
   *
   * // false
   * isEmpty('tuckn333.github.gmail.com');
   * @function isMailAddress
   * @memberof Wsh.Util
   * @param {string} val - The value to check.
   * @returns {boolean} - Returns true if value is the string of mail-address.
   */
  util.isMailAddress = function (val) {
    if (!_isSolidString(val)) return false;
    return /[\x00-\x7f]+@[\x00-\x7f]+/i.test(val);
  }; // }}}

  // util.isPhoneNumberInJapan  [W.I.P] {{{
  /**
   * [W.I.P] 日本国内の電話番号（携帯番号も含む）か判定する
   *
   * @function isPhoneNumberInJapan
   * @memberof Wsh.Util
   * @param {string} val - The value to check.
   * @returns {boolean}
   */
  util.isPhoneNumberInJapan = function (val) {
    if (!_isSolidString(val)) return false;

    var numOnly = val.replace(/[-－‐]/g, '');

    if (/^0120/.test(numOnly)) return /^0120\d{6}$/.test(numOnly);

    return /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/i.test(numOnly);
  }; // }}}

  // util.isPhoneNumberLikeInJapan [W.I.P] {{{
  /**
   * [W.I.P] 最後の一桁足りないけど、おそらく日本国内の電話番号
   *
   * @function isPhoneNumberLikeInJapan
   * @memberof Wsh.Util
   * @param {string} str - The string to check.
   * @returns {boolean}
   */
  util.isPhoneNumberLikeInJapan = function (val) {
    if (!_isSolidString(val)) return false;
    return /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{3}|0[789]0-?\d{4}-?\d{3}|050-?\d{4}-?\d{3})\d?$/i.test(val);
  }; // }}}

  // util.isJapaneseLike [W.I.P] {{{
  /**
   * [W.I.P] Check if a name is like Japanese.
   *
   * @function isJapaneseLike
   * @memberof Wsh.Util
   * @param {string} str - The string to check.
   * @returns {boolean}
   */
  util.isJapaneseLike = function (val) {
    if (!_isSolidString(val)) return false;
    // すべて全角文字で２文字以上
    if (/^[^\x00-\x7F]+[(\p{blank})\s]*[^\x00-\x7F]+$/.test(val)) return true;
    // 全部英字の場合なら、
    return (/^[a-z]+\s*[a-z]+$/i.test(val)
      // ローマ字にない特定の英字を含まない
      && /^[^lqvx]+$/i.test(val)
      // 子音が連続しない
      && /[^(bb|cc|dd|ff|gg|hh|jj|kk|ll|pp|rr|ss|tt|ww|yy|xx)]/i.test(val)
      // 母音→母音か子音→母音を含む（ヘボン式
      && /([aiueonkstnhfmyrwngzjdbp]|sh|ch|ts|ky|sh|ch|ny|hy|my|ry|gy|by|py)[aiueonmh]$/i.test(val));
  }; // }}}

  // util.isPlaneTextFileExt [W.I.P] {{{
  /**
   * [W.I.P] Check if a file is plane text.
   *
   * @function isPlaneTextFileExt
   * @memberof Wsh.Util
   * @param {string} str - The string to check.
   * @returns {boolean}
   */
  util.isPlaneTextFileExt = function (val) {
    if (!_isSolidString(val)) return false;
    return /\.(ahk|bat|c|com|cs|cls|cmd|css|dic|js|h|htm|html|ini|java|json|log|txt|ps1|py|reg|vbs|wsf|xml)$/i.test(val);
  }; // }}}

  // util.toHalfWidthEN {{{
  /**
   * 全角英数字文字列を半角文字列に変換する
   *
   * @example
   * var toHalfWidthEN = Wsh.Util.toHalfWidthEN; // Shorthand
   *
   * toHalfWidthEN('０１２３４５６７８９');
   * // Returns: '0123456789'
   *
   * toHalfWidthEN('abcdefghijklmnopqrstuvwxyz');
   * // Returns: 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ'
   *
   * toHalfWidthEN('！”＃＄％＆’（）＊＋，－．／：；＜＝＞？＠［￥］＾＿‘｛｜｝￣');
   * // Returns: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
   * @function toHalfWidthEN
   * @memberof Wsh.Util
   * @param {string} str - The string to convert.
   * @returns {string} - The converted string.
   */
  util.toHalfWidthEN = function (str) {
    if (!_isString(str)) throwErrNonStr('util.toHalfWidthEN', str);

    str = str.replace(/”/g, '"').replace(/￥/g, '\\')
        .replace(/’/g, '\'').replace(/￣/g, '~').replace(/‘/g, '`');

    return str.replace(/[Ａ-Ｚａ-ｚ０-９！＃＄％＆（）＊＋，－．／：；＜＝＞？＠［］＾＿｛｜｝]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
  }; // }}}

  // util.toDoubleByteEN {{{
  /**
   * 半角英数字文字列を全角文字列に変換する
   *
   * @example
   * var toDoubleByteEN = Wsh.Util.toDoubleByteEN; // Shorthand
   *
   * toDoubleByteEN('0123456789');
   * // Returns: '０１２３４５６７８９'
   *
   * toDoubleByteEN('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ');
   * // Returns: 'abcdefghijklmnopqrstuvwxyz'
   *
   * toDoubleByteEN('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
   * // Returns: '！”＃＄％＆’（）＊＋，－．／：；＜＝＞？＠［￥］＾＿‘｛｜｝￣'
   * @function toDoubleByteEN
   * @memberof Wsh.Util
   * @param {string} str - The string to convert.
   * @returns {string}
   */
  util.toDoubleByteEN = function (str) {
    if (!_isString(str)) throwErrNonStr('util.toDoubleByteEN', str);

    str = str.replace(/"/g, '”').replace(/\\/g, '￥')
        .replace(/'/g, '’').replace(/~/g, '￣').replace(/`/g, '‘');

    return str.replace(/[A-Za-z0-9!#$%&()*+,-./:;<=>?@[\]^_{|}]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
  }; // }}}

  // util.toZenkakuKana {{{
  /**
   * 半角カナを全角に変換する
   *
   * @example
   * var toZenkakuKana = Wsh.Util.toZenkakuKana; // Shorthand
   *
   * toZenkakuKana('ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｳﾞﾜﾞｦﾞｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｯｬｭｮ｡､ｰ｢｣･');
   * // Returns: 'ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴヷヺアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョ。、ー「」・'
   * @function toZenkakuKana
   * @memberof Wsh.Util
   * @param {string} str - The string to convert.
   * @returns {string}
   */
  util.toZenkakuKana = function (str) {
    if (!_isString(str)) throwErrNonStr('util.toZenkakuKana', str);

    var kanaMap = {
      'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
      'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
      'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
      'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
      'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
      'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
      'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
      'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
      'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
      'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
      'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
      'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
      'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
      'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
      'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
      'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
      'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
      'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
      '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
    };
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');

    return str.replace(reg, function (match) {
      return kanaMap[match];
    }).replace(/ﾞ/g, '゛').replace(/ﾟ/g, '゜');
  }; // }}}

  // util.toRegExpStr [W.I.P] {{{
  /**
   * [W.I.P] Insert back-slashs to a string for RegExp. I was tired to escape RegExp chars.
   *
   * @function toRegExpStr
   * @memberof Wsh.Util
   * @param {string} str - The string to convert.
   * @returns {string}
   */
  util.toRegExpStr = function (str) {
    if (!_isString(str)) throwErrNonStr('util.toRegExpStr', str);

    var r = str.replace(/([\\/*+.?{}()[\]^$|])/g, '\\$1');
    return r;
  }; // }}}

  // Object

  // util.hasOwnProp {{{
  /**
   * Check if the Object has a property. Point: No going up the prototype chain. Note the difference from {@link Wsh.Util.hasInObj}.
   *
   * @example
   * var hasOwnProp = Wsh.Util.hasOwnProp; // Shorthand
   *
   * var objDeep = { a: { b: { c: 'C' } } };
   * hasOwnProp(objDeep, 'a'); // true
   * hasOwnProp(objDeep, 'b'); // false
   *
   * // No going up the prototype chain
   * var Constractor = function () { this.a = 'A'; };
   * Constractor.prototype.myProto = 'val';
   *
   * var instance = new Constractor();
   * hasOwnProp(instance, 'a'); // true
   * hasOwnProp(instance, 'myProto'); // false (prototype)
   * hasOwnProp(instance, 'prototype'); // false
   * hasOwnProp(instance, 'hasOwnProperty'); // false (prototype)
   * hasOwnProp(instance, 'toString'); // false (prototype)
   * @function hasOwnProp
   * @memberof Wsh.Util
   * @param {object} obj
   * @param {string} prop
   * @returns {boolean}
   */
  util.hasOwnProp = function (obj, prop) {
    return obj && Object.prototype.hasOwnProperty.call(obj, prop);
  }; // }}}

  // util.hasInObj {{{
  /**
   * Check if the Object has a property. Point: Going up the prototype chain. Note the difference from {@link Wsh.Util.hasOwnProp}
   *
   * @example
   * var hasInObj = Wsh.Util.hasInObj; // Shorthand
   *
   * var objDeep = { a: { b: { c: 'C' } } };
   * hasInObj(objDeep, 'a'); // true
   * hasInObj(objDeep, 'b'); // false
   *
   * // Going up the prototype chain
   * var Constractor = function () { this.a = 'A'; };
   * Constractor.prototype.myProto = 'val';
   *
   * var instance = new Constractor();
   * hasInObj(instance, 'a'); // true
   * hasInObj(instance, 'myProto'); // true (prototype)
   * hasInObj(instance, 'prototype'); // false
   * hasInObj(instance, 'hasOwnProperty'); // true (prototype)
   * hasInObj(instance, 'toString'); // true (prototype)
   * @function hasInObj
   * @memberof Wsh.Util
   * @param {object} obj
   * @param {string} prop
   * @returns {boolean}
   */
  util.hasInObj = function (obj, prop) {
    return obj && prop in Object(obj);
  }; // }}}

  // util.hasIn {{{
  /**
   * Checks if the object has the properties.
   *
   * @example
   * var hasIn = Wsh.Util.hasIn; // Shorthand
   *
   * var objDeep = { a: { b: { c: 'C' } } };
   * hasIn(objDeep, 'a'); // true
   * hasIn(objDeep, 'b'); // false
   * hasIn(objDeep, 'a.b'); // true
   * hasIn(objDeep, 'a.B'); // false
   * hasIn(objDeep, ['a', 'b']); // true
   * hasIn(objDeep, 'a.b.c'); // true
   *
   * // Going up the prototype chain
   * var Constractor = function () { this.a = 'A'; };
   * Constractor.prototype.myProto = 'val';
   *
   * var instance = new Constractor();
   * hasInObj(instance, 'a'); // true
   * hasInObj(instance, 'myProto'); // true
   * hasInObj(instance, 'prototype'); // false
   * hasInObj(instance, 'prototype.myProto'); // false
   * hasInObj(instance, 'hasOwnProperty'); // true
   * hasInObj(instance, 'toString'); // true
   * @function hasIn
   * @memberof Wsh.Util
   * @param {object} obj - The object to query.
   * @param {(array|string)} propertiesNames - The path to check.
   * @returns {boolean}
   */
  util.hasIn = function (obj, propertiesNames) {
    if (_isEmpty(obj) || _isEmpty(propertiesNames)) return false;

    var propNames = propertiesNames;
    if (_isString(propertiesNames)) {
      propNames = String(propertiesNames).replace(/\[(\d+)\]/gi, '.$1'); // a[0] -> a.0
      propNames = propNames.split('.');
    }

    if (!_isSolidArray(propNames)) return false;

    var objPointer = obj;
    var notHas = Array.from(propNames).some(function (propName) {
      if (!util.hasInObj(objPointer, propName)) return true;
      objPointer = objPointer[propName];
      return false;
    });

    return !notHas;
  }; // }}}

  // _merge {{{
  /**
   * description Inherited enumerable string keyed properties of source objects into the destination object
   *
   * @private
   * @param {boolean} isDeep Recursively merges own
   * @param {object} target
   * @param {...object} [sources]
   * @returns {object} - The mutated target
   */
  function _merge (/* [isDeep, ]target, sources */) {
    if (arguments.length < 2) return {};

    var isDeep = arguments[0];
    var target = arguments[1];
    if (!_isObject(target)) target = Object(target);

    if (arguments.length === 2) return target;

    if (_isString(target)) return target;

    var source;

    for (var i = 2, I = arguments.length; i < I; i++) {
      source = arguments[i];
      if (!_hasContent(source)) continue;

      if (!_isObjectLike(source)) source = Array.from(source);
      if (!_hasContent(source)) continue;

      Object.keys(source).forEach(function (key) {
        if (_isObjectLike(source[key])) {
          if (isDeep) {
            target[key] = _merge(isDeep, target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        } else {
          target[key] = source[key];
        }
      });
    }

    return target;
  } // }}}

  // util.merge {{{
  /**
   * Deep merge (recursively merge). Note the difference from {@link Wsh.Util.extend}
   *
   * @example
   * var merge = Wsh.Util.merge; // Shorthand
   *
   * var objTarget = { a: 'A1', b: { p: 'Bp1', q: 'Bq1' } };
   * var objSource = { a: 'A2', b: { p: 'Bp2' } };
   * var mergedObj = merge(objTarget, objSource);
   * // Returns: { a: 'A2', b: { p: 'Bp2', q: 'Bq1' } };
   *
   * console.dir(objTarget === mergedObj); // true
   * // The target Object is mutated
   * @function merge
   * @memberof Wsh.Util
   * @param {...object} objects
   * @returns {object} A merged object that is the 1st Object of the arguments
   */
  util.merge = function () {
    var args = [true].concat(Array.from(arguments));
    return _merge.apply(null, args);
  }; // }}}

  // util.extend {{{
  /**
   * Shallow merge. Note the difference from {@link Wsh.Util.merge}
   *
   * @function extend
   * @memberof Wsh.Util
   * @param {...object} objects
   * @returns {object} A merged object that is the 1st Object of the arguments
   */
  util.extend = function () {
    var args = [false].concat(Array.from(arguments));
    return _merge.apply(null, args);
  }; // }}}

  // util.cloneDeep {{{
  /**
   * Creates a deep clone (recursively clone) of value.
   *
   * @example
   * var cloneDeep = Wsh.Util.cloneDeep; // Shorthand
   *
   * var objSource = {
   *   s: 's',
   *   a: [1, [2, 3]],
   *   o: { nA: 1, nB: { o2: 2 } }
   * };
   *
   * var objCloned = cloneDeep(objSource);
   * console.dir(objCloned);
   * // Returns: {
   * //   s: 's',
   * //   a: [1, [2, 3]],
   * //   o: { nA: 1, nB: { o2: 2 } } }
   *
   * console.dir(objSource === objCloned); // false
   * @function cloneDeep
   * @memberof Wsh.Util
   * @param {any} val - The value
   * @returns {any}
   */
  util.cloneDeep = function (val) {
    if (val === undefined || val === null) return val;
    if (val === true || val === false) return val;
    if (val === Infinity) return val;

    var type = _protoTypeOf(val);

    if (type === 'Array') {
      if (val.length === 0) return [];

      return val.map(function (val) { return _cloneDeep(val); });
    }

    if (type === 'Number' && type === 'String') return val;

    if (typeof val === 'object') {
      var rtnObj = Object.assign({}, val);

      Object.keys(val).forEach(function (key) {
        if (typeof val[key] === 'object') rtnObj[key] = _cloneDeep(val[key]);
      });

      return rtnObj;
    }

    return val;
  };
  var _cloneDeep = util.cloneDeep; // Shorthand
  // }}}

  // util.set {{{
  /**
   * Sets the value at path of object. If a portion of path doesn't exist, it's created.
   *
   * @example
   * var set = Wsh.Util.set; // Shorthand
   *
   * var obj = { a: 1, b: 'B' };
   * set(obj, 'a', 'A'); // Returns: { a: 'A', b: 'B' }
   * // obj is modified. { a: 'A', b: 'B' }
   *
   * var obj = { a: [{ B: 2 }, { C: 3 }] };
   * set(obj, 'a.1.C', 99); // Returns: { a: [{ B: 2 }, { C: 99 }] }
   * // obj is modified. { a: [{ B: 2 }, { C: 99 }] }
   *
   * set(obj, ['a', 0], 'foo'); // Returns: { a: ['foo', { C: 99 }] }
   * // obj is modified. { a: ['foo', { C: 99 }] }
   * @function set
   * @memberof Wsh.Util
   * @param {object} obj - The object to modify.
   * @param {(string[]|string)} propPath - The path of the property to set.
   * @param {any} [value] - The value to set.
   * @returns {object} - The modified obj.
   */
  util.set = function (obj, propPath, value) {
    if (!_isObject(obj)) return obj;

    var propNames = propPath;
    if (_isString(propPath)) {
      propNames = String(propPath).replace(/\[(\d+)\]/gi, '.$1'); // a[0] -> a.0
      propNames = propNames.split('.');
    }

    if (!_isSolidArray(propNames)) {
      obj[String(propPath)] = value;
      return obj;
    }

    var objPointer = obj;

    // Skip the last
    for (var i = 0, len = propNames.length - 1; i < len; i++) {
      if (!util.hasInObj(objPointer, propNames[i])) {
        objPointer[propNames[i]] = {};
      }
      objPointer = objPointer[propNames[i]];
    }

    objPointer[propNames[propNames.length - 1]] = value;

    return obj;
  }; // }}}

  // util.get {{{
  /**
   * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
   *
   * @example
   * var util = Wsh.Util; // Shorthand
   *
   * var src = { a: 1, b: { B: 2 }, c: [3, 4] };
   * util.get(src, 'a'); // 1
   * util.get(src, 'A'); // undefined
   * util.get(src, 'A', 'defVal'); // 'defVal'
   *
   * util.get(src, 'b'); // { B: 2 }
   * util.get(src, 'b.B'); // 2
   * util.get(src, ['b', 'B']); // 2
   *
   * // If the result is Object or Array, it's called by reference.
   * var getVal = util.get(src, 'b');
   * if (getVal === src.b) // true
   *
   * util.get(src, 'c'); // [3, 4]
   * util.get(src, 'c.1') // 4
   *
   * util.get({ empArray: [], empObj: {} }, 'empArray', 'def') // []
   * util.get({ empArray: [], empObj: {} }, 'empObj', 'def') // {}
   *
   * // Notice: When a prop name includes period
   * var src = { '.git directory': 'C:\\repos\\My Code\\.git' };
   * util.get(src, '.git directory'); // null
   * @function get
   * @memberof Wsh.Util
   * @param {object} obj - The object to query.
   * @param {(string[]|string)} propPath - The path of the property to get.
   * @param {any} [defaultValue] - The value returned for undefined resolved values.
   * @returns {any} - A extracted value.
   */
  util.get = function (obj, propPath, defaultValue) {
    if (!_hasContent(obj)) return defaultValue;

    var propNames = propPath;
    if (!_isArray(propNames)) {
      propNames = String(propNames).replace(/\[(\d+)\]/gi, '.$1'); // a[0] -> a.0
      propNames = propNames.split('.');
    }

    if (!_isSolidArray(propNames)) return defaultValue;

    var objPointer = obj;

    var notHas = propNames.some(function (propName) {
      if (!util.hasInObj(objPointer, propName)) return true;
      objPointer = objPointer[propName];
    });

    if (notHas) return defaultValue;

    if (objPointer === undefined) return defaultValue;
    return objPointer;
  }; // }}}

  // util.unset {{{
  /**
   * Removes the property ato path of object.
   *
   * @example
   * var unset = Wsh.Util.unset; // Shorthand
   *
   * var obj = { a: 1, b: { B: 2 } };
   * unset(obj, 'a'); // obj is { b: { B: 2 } }
   * unset(obj, 'b.B'); // obj is { b: {} }
   * unset(obj, 'b'); // obj is {}
   *
   * var obj = { a: 1, b: [{ B: 2 }, { C: 3 }] };
   * unset(objMock, ['b', 1, 'C']); // obj is { a: 1, b: [{ B: 2 }, {}] }
   * unset(objMock, 'b.0'); // obj is { a: 1, b: [undefined, {}] }
   * @function unset
   * @memberof Wsh.Util
   * @param {object} obj - The object to query.
   * @param {(string[]|string)} propPath - The path of the property to get.
   * @returns {boolean} Returns true if the property is deleted, else false.
   */
  util.unset = function (obj, propPath) {
    if (!_hasContent(obj)) return true;

    var propNames = propPath;
    if (!_isArray(propNames)) {
      propNames = String(propNames).replace(/\[(\d+)\]/gi, '.$1'); // a[0] -> a.0
      propNames = propNames.split('.');
    }

    if (!_isSolidArray(propNames)) return true;

    var objPointer = obj;

    // SKip the last
    for (var i = 0, len = propNames.length - 1; i < len; i++) {
      if (!util.hasInObj(objPointer, propNames[i])) return true;
      objPointer = objPointer[propNames[i]];
    }

    if (objPointer === undefined) return true;

    return delete objPointer[propNames[propNames.length - 1]];
  }; // }}}

  // util.obtainPropVal {{{
  /**
   * Note that it's almost the same as {@link Wsh.Util.get}, but treats defaultValue differently
   *
   * @example
   * var obtain = Wsh.Util.obtainPropVal; // Shorthand
   *
   * var src = { a: 1, b: { B: 2 }, c: [3, 4] };
   * obtain(src, 'a'); // 1
   * obtain(src, 'A'); // undefined
   * obtain(src, 'A', 'defVal'); // 'defVal'
   *
   * obtain(src, 'b'); // { B: 2 }
   * obtain(src, 'b.B'); // 2
   * obtain(src, ['b', 'B']); // 2
   *
   * obtain(src, 'c'); // [3, 4]
   * obtain(src, 'c.1') // 4
   *
   * obtain({ empArray: [], empObj: {} }, 'empArray', 'def') // 'def'
   * obtain({ empArray: [], empObj: {} }, 'empObj', 'def') // 'def'
   * @function obtainPropVal
   * @memberof Wsh.Util
   * @param {object} obj - The object to query.
   * @param {(string[]|string)} propertiesNames - The path of the property to get.
   * @param {any} [defaultValue] - The value returned for undefined resolved values.
   * @returns {any} - A extracted value.
   */
  util.obtainPropVal = function (obj, propertiesNames, defaultValue) {
    var returnValue = util.get(obj, propertiesNames, defaultValue);

    if (_hasContent(returnValue)) return returnValue;
    return defaultValue;
  };
  var _obtain = util.obtainPropVal;
  // }}}

  // util.objToStr [W.I.P] {{{
  /**
   * [W.I.P] convert a Object to string
   *
   * @function objToStr
   * @memberof Wsh.Util
   * @param {object} obj
   * @param {string} [prefix='  ']
   * @param {string} [postfix=\r\n]
   * @returns {string}
   */
  util.objToStr = function (obj, prefix, postfix) {
    prefix = _isString(prefix) ? prefix : '  ';
    postfix = _isString(postfix) ? postfix : '\r\n';

    return Object.keys(obj).reduce(function (acc, val) {
      return acc + prefix + val + ': ' + obj[val] + postfix;
    }, '');
  }; // }}}

  // Collection

  // util.includes {{{
  /**
   * Checks if value is in collection (Array, Object, String).
   *
   * @example
   * var includes = Wsh.Util.includes; // Shorthand
   *
   * includes('abcd', 'bc'); // true
   * includes('abcd', 'Bc'); // false
   * includes('abcd', 'Bc', 'i'); // true
   * includes('abcd', 'Bc', null, 'i'); // true
   *
   * includes([1, 2, 3, 4], 3); // true
   * includes({ a: 1, b: 'B' }, 'B'); // true
   * includes({ a: 1, b: 'B' }, 'b'); // false
   *
   * includes([1, 2, { c: 'C' }], { c: 'C' }); // false <- Note this
   *
   * var objC = { c: 'C' };
   * includes([1, 2, objC], objC); // true
   * @function includes
   * @memberof Wsh.Util
   * @param {(array|Object|string)} collection - The collection to inspect.
   * @param {any} val - The value to inspect.
   * @param {number|'i'} [fromIndex=0] - The index to search from.
   * @param {(boolean|'i')} [ignoresCase=false] - To Specify true or 'i' will be case insensitive.
   * @returns {boolean}
   */
  util.includes = function (collection, val, fromIndex, ignoresCase) {
    var fromIdx = 0;
    var iCase = false;
    if (fromIndex === 'i') {
      iCase = true;
    } else {
      if (ignoresCase === true || ignoresCase === 'i') iCase = true;
      if (_hasContent(fromIndex)) fromIdx = fromIndex;
    }

    var pType = _protoTypeOf(collection);

    if (pType === 'String') {
      if (iCase && _isString(val)) {
        return (
          collection.toUpperCase().indexOf(val.toUpperCase(), fromIdx) !== -1
        );
      } else {
        return collection.indexOf(val, fromIdx) !== -1;
      }
    }

    if (_isEmpty(collection)) return false;

    var idx;

    if (pType === 'Array') {
      idx = collection.findIndex(function (v, i) {
        if (i < fromIdx) return false;

        if (iCase && _isString(v) && _isString(val)) {
          return v.toUpperCase() === val.toUpperCase();
        } else if (v === val) {
          return true;
        }
        return v !== v && val !== val;
      });

      return idx !== -1;
    }

    if (_isObjectLike(collection)) {
      idx = Object.keys(collection).findIndex(function (key, i) {
        if (i < fromIdx) return false;

        if (iCase && _isString(collection[key]) && _isString(val)) {
          return collection[key].toUpperCase() === val.toUpperCase();
        } else if (collection[key] === val) {
          return true;
        }
        return collection[key] !== collection[key] && val !== val;
      });

      return idx !== -1;
    }

    if (collection === val) return true;
    return collection !== collection && val !== val;
  }; // }}}

  // Array

  // util.concat {{{
  /**
   * Creates a new array concatenating array with any additional arrays and/or values.
   *
   * @example
   * var concat = Wsh.Util.concat; // Shorthand
   *
   * concat([1, 2], [3, 4], 5); // [1, 2, 3, 4, 5]
   *
   * var srcArray = [1];
   *
   * concat(srcArray, 2, [3], [[4]]); // [1, 2, 3, [4]]
   * console.dir(srcArray); // [1] The source array is not changed
   * @function concat
   * @memberof Wsh.Util
   * @param {Array} array - The array to concatenate
   * @param {...any} [values] - The values to concatenate
   * @returns {Array} Returns the new concatenated array
   */
  util.concat = function (array/* ,values */) {
    var newArray = _cloneDeep(array);
    var argVal;

    for (var i = 1, I = arguments.length; i < I; ++i) {
      argVal = arguments[i];

      if (_isArray(argVal)) {
        argVal.forEach(function (val) { newArray.push(val); });
      } else {
        newArray.push(argVal);
      }
    }

    return newArray;
  }; // }}}

  // util.inArray {{{
  /**
   * Gets the index at which the first occurrence of value is found.
   *
   * @example
   * var inArray = Wsh.Util.inArray; // Shorthand
   *
   * inArray('A', ['A', 'B', 'C']); // 0
   * inArray('B', ['A', 'B', 'C']); // 1
   * inArray('C', ['A', 'B', 'C']); // 2
   * inArray('B', ['A', 'B', 'A', 'B']); // 1
   * inArray('B', ['A', 'B', 'A', 'B'], 2); // 3
   * inArray({ b: 'B' }, ['A', { b: 'B' }, 'C']); // 1
   * @function inArray
   * @memberof Wsh.Util
   * @param {any} value - The value of search for.
   * @param {Array} array - The array to check.
   * @param {number} [fromIndex=0] - The index of search from.
   * @returns {number} A index number of array. If no matching, return -1.
   */
  util.inArray = function (value, array, fromIndex) {
    if (!_isSolidArray(array)) return -1;
    if (!_isNumber(fromIndex)) fromIndex = 0;

    var foundIdx = array.findIndex(function (val, i) {
      return i >= fromIndex && _isEqual(val, value);
    });

    return foundIdx;
  }; // }}}

  // util.indexOf {{{
  /**
   * Gets the index at which the first occurrence of value is found. Note that only the arguments order is different from {@link Wsh.Util.inArray}.
   *
   * @example
   * var indexOf = Wsh.Util.indexOf; // Shorthand
   *
   * indexOf(['A', 'B', 'C'], 'A'); // 0
   * indexOf(['A', 'B', 'C'], 'B'); // 1
   * indexOf(['A', 'B', 'C'], 'C'); // 2
   * indexOf(['A', 'B', 'A', 'B'], 'B'); // 1
   * indexOf(['A', 'B', 'A', 'B'], 'B', 2); // 3
   * indexOf(['A', { b: 'B' }, 'C'], { b: 'B' }); // 1
   * @function indexOf
   * @memberof Wsh.Util
   * @param {Array} array - The array to check.
   * @param {any} value - The value of search for.
   * @param {number} [fromIndex=0] - The index of search from.
   * @returns {number} A index number of array. If no matching, return -1.
   */
  util.indexOf = function (array, value, fromIndex) {
    return util.inArray(value, array, fromIndex);
  }; // }}}

  // util.last {{{
  /**
   * Gets the last element of an array.
   *
   * @example
   * var last = Wsh.Util.last; // Shorthand
   *
   * last([1, 2, 3, 4]); // 4
   * last(['a', 'b', 'c', 'd']); // 'd'
   * last([]); // undefined
   * last('Foo Bar'); // undefined
   * last({ a: 'A', b: 'B' }); // undefined
   * @function last
   * @memberof Wsh.Util
   * @param {Array} array - The Array to ckeck.
   * @returns {any} - A element of array.
   */
  util.last = function (array) {
    if (!_isSolidArray(array)) return undefined;

    return array[array.length - 1];
  }; // }}}

  // util.lastIndexOf {{{
  /**
   * Gets the index at which the last occurrence of value is found in array.
   *
   * @example
   * var lastIndexOf = Wsh.Util.lastIndexOf; // Shorthand
   *
   * lastIndexOf(['A', 'B', 'C'], 'C'); // 2
   * lastIndexOf(['A', 'B', 'C'], 'B'); // 1
   * lastIndexOf(['A', 'B', 'C'], 'A'); // 0
   * lastIndexOf(['A', 'B', 'A', 'B'], 'B'); // 3
   * lastIndexOf(['A', 'B', 'A', 'B'], 'B', 2); // 1
   * lastIndexOf(['A', { b: 'B' }, 'C'], { b: 'B' }); // 1
   * @function lastIndexOf
   * @memberof Wsh.Util
   * @param {Array} array - The Array to ckeck.
   * @param {any} [value] - The value of search for.
   * @param {number} [fromIndex=array.length - 1] - The index to search from.
   * @returns {number} A index of the matched value, else -1.
   */
  util.lastIndexOf = function (array, value, fromIndex) {
    if (!_isSolidArray(array)) return -1;

    if (!_isNumber(fromIndex) || fromIndex > array.length - 1) {
      fromIndex = array.length - 1;
    }

    if (!_hasContent(value)) return fromIndex;

    for (var i = fromIndex; i >= 0; i--) {
      if (_isEqual(array[i], value)) return i;
    }

    return -1;
  }; // }}}

  // util.convToVBArray {{{
  /**
   * Converts VBArray to JS-Array. @FIXME ScriptControl does not work on Windows 64bit
   *
   * @function convToVBArray
   * @memberof Wsh.Util
   * @param {array} arr - The array to convert.
   * @returns {VBArray} - A VBArray
   */
  util.convToVBArray = function (arr) {
    var sc = new ActiveXObject('ScriptControl');

    sc.Language = 'VBScript';
    sc.AddCode('Function makeArray\n'
      + 'makeArray = Array(' + arr + ')\n'
      + 'End Function\n');
    return sc.Run('makeArray');
  }; // }}}

  // util.conv2DArrayToObj {{{
  /**
   * Options Schema of Wsh.Util.conv2DArrayToObj
   *
   * @typedef {object} typeConv2DArrayToObjOptions
   * @property {number} [beginRow=1] beginRow is convert to the property names
   * @property {number} [beginColumn=1]
   * @property {number} [endRow=arrays.length]
   * @property {number} [endColumn=arrays[beginRow].length]
   * @property {boolean} [autoParse=false]] @TODO Parse Number, Date
   */

  /**
   * Converts a 2D-array to a associative-array.
   *
   * @example
   * var conv2DArrayToObj = Wsh.Util.conv2DArrayToObj; // Shorthand
   *
   * var srcArray = [
   *   'This CSV was output from Tuckn Hoge system',
   *   ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'], // to be header
   *   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
   *   [true, false, null, undefined, NaN, Infinity, ''],
   *   ['=SUM(X1:Y10)', '=TODAY()', '2020/1/1', '\'007', '日本語'],
   *   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
   * ];
   *
   * conv2DArrayToObj(srcArray, { beginRow: 2 });
   * // Returns: [
   * //   {
   * //      A: 0,
   * //      B: 1,
   * //      C: 2,
   * //      D: 3,
   * //      E: 4,
   * //      F: 5,
   * //      G: 6,
   * //      H: 7,
   * //      I: 8,
   * //      J: 9,
   * //      K: 10,
   * //      L: 11 },
   * //   {
   * //      A: true,
   * //      B: false,
   * //      C: null,
   * //      D: undefined,
   * //      E: NaN,
   * //      F: Infinity,
   * //      G: '',
   * //      H: undefined,
   * //      I: undefined,
   * //      J: undefined,
   * //      K: undefined,
   * //      L: undefined },
   * //   {
   * //      A: '=SUM(X1:Y10)',
   * //      B: '=TODAY()',
   * //      C: '2020/1/1',
   * //      D: '\'007',
   * //      E: '日本語',
   * //      F: undefined,
   * //      G: undefined,
   * //      H: undefined,
   * //      I: undefined,
   * //      J: undefined,
   * //      K: undefined,
   * //      L: undefined },
   * //   {
   * //      A: 'a',
   * //      B: 'b',
   * //      C: 'c',
   * //      D: 'd',
   * //      E: 'e',
   * //      F: 'f',
   * //      G: 'g',
   * //      H: 'h',
   * //      I: 'i',
   * //      J: 'j',
   * //      K: 'k',
   * //      L: 'l' } ];
   * @function conv2DArrayToObj
   * @memberof Wsh.Util
   * @param {array} arrays - The 2D-Array to convert.
   * @param {typeConv2DArrayToObjOptions} [options] - Optional parameters.
   * @returns {object} - A converted object.
   */
  util.conv2DArrayToObj = function (arrays, options) {
    var functionName = 'util.conv2DArrayToObj';
    if (!_isSolidArray(arrays)) throwErrNonArray(functionName, arrays);

    var beginRowIdx = _obtain(options, 'beginRow', 1) - 1;
    var beginColIdx = _obtain(options, 'beginColumn', 1) - 1;
    var endRowIdx = _obtain(options, 'endRow', arrays.length);
    var endColIdx = _obtain(options, 'endColumn', arrays[beginRowIdx].length);

    // Set propaties
    var propNames = [];
    var propName = '';

    for (var col = beginColIdx; col < endColIdx; col++) {
      propName = String(arrays[beginRowIdx][col]).trim();

      if (propName === '') {
        propNames.push('empty' + col);
      } else if (propNames.indexOf(propName) === -1) {
        propNames.push(propName);
      } else {
        propNames.push(propName + col);
      }
    }

    // Set values
    var output = [];
    var tmpAry = [];
    var tmpObj = {};

    for (var row = beginRowIdx + 1; row < endRowIdx; row++) {
      tmpAry = arrays[row];
      tmpObj = {}; // Clear

      for (var col1 = 0, Col1 = propNames.length; col1 < Col1; col1++) {
        if (beginColIdx + col1 < tmpAry.length) {
          tmpObj[propNames[col1]] = tmpAry[beginColIdx + col1];
        } else {
          tmpObj[propNames[col1]] = undefined;
        }
      }

      output.push(tmpObj);
    }

    return output;
  }; // }}}

  // util.stringify2DArrayToCsv {{{
  /**
   * Options Schema of Wsh.Util.stringify2DArrayToCsv
   *
   * @typedef {object} typeStringify2DArrayToCsvOptions
   * @property {string} [delimiter=","] The Splitting Character
   * @property {string} [lineEnding="\r\n"] The LineBreak Character
   * @property {string} [escapesExcelFunc=false]
   */

  /**
   * Converts a 2D-Array to a CSV text (CSV.stringify).
   *
   * @example
   * var stringify2DArrayToCsv = Wsh.Util.stringify2DArrayToCsv; // Shorthand
   *
   * var array2D = [
   *   ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
   *   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
   *   [true, false, null, undefined, NaN, Infinity, ''],
   *   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
   * ];
   *
   * stringify2DArrayToCsv(array2D);
   * // Returns: 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
   * //   + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
   * //   + 'true,false,,NaN,Infinity,\r\n' // null to empty, undefined is ignored
   * //   + 'a,b,c,d,e,f,g,h,i,j,k,l\r\n'
   * @function stringify2DArrayToCsv
   * @memberof Wsh.Util
   * @param {array} arrays - The 2D-Array to convert.
   * @param {typeStringify2DArrayToCsvOptions} [options] - Optional parameters.
   * @returns {string} - A converted string.
   */
  util.stringify2DArrayToCsv = function (arrays, options) {
    var functionName = 'util.stringify2DArrayToCsv';
    if (!_isSolidArray(arrays)) throwErrNonArray(functionName, arrays);

    var delimiter = _obtain(options, 'delimiter', ',');
    var lineEnding = _obtain(options, 'lineEnding', '\r\n');
    var escapesExcelFunc = _obtain(options, 'escapesExcelFunc', false);

    var stringified = '';

    arrays.forEach(function (vals) {
      var stringifiedVals = [];

      vals.forEach(function (val) {
        var stringifiedVal;

        if (!_hasContent(val)) {
          stringifiedVal = '';
        } else if (_isObject(val)) {
          stringifiedVal = _insp(val);
        } else if (escapesExcelFunc && util.startsWith(stringifiedVal, '=')) {
          stringifiedVal = val;
        } else {
          stringifiedVal = String(val);
        }

        if (stringifiedVal.indexOf('"') !== -1) {
          if (escapesExcelFunc && util.startsWith(stringifiedVal, '=')) {
            //
          } else {
            stringifiedVal = '"' + stringifiedVal.replace(/"/g, '""') + '"';
          }
        }

        if (stringifiedVal.indexOf(delimiter) !== -1
            || /[\t\r\n]/.test(stringifiedVal)) {
          stringifiedVal = '"' + stringifiedVal + '"';
        }

        stringifiedVals.push(stringifiedVal);
      });

      stringified += stringifiedVals.join(delimiter) + lineEnding;
    });

    return stringified;
  }; // }}}

  // util.parseCsvTo2DArray {{{
  /**
   * Options Schema of Wsh.Util.parseCsvTo2DArray
   *
   * @typedef {object} typeParseCsvTo2DArrayOptions
   * @property {string} [delimiter=","] - If parse the TSV. Specify '\t'.
   * @property {string} [lineEnding="\r\n"] - The character of line-ending.
   * @property {boolean} [addsEmptyRow=false] - Ignores empty lines or not.
   */

  /**
   * Parses a CSV text to Two dimensions array.
   *
   * @example
   * var parseCsvTo2DArray = Wsh.Util.parseCsvTo2DArray; // Shorthand
   *
   * var csvTxt = 'This CSV was output from Tuckn Hoge system\r\n'
   *   + 'A,B,C,D,E,F,G,H,I,J,K,L\r\n'
   *   + '0,1,2,3,4,5,6,7,8,9,10,11\r\n'
   *   + 'a,b,c,d,e,f,g,h,i,j,k,l\r\n'
   *   + '\r\n'
   *   + 'true,false,null,undefined,NaN,Infinity\r\n'
   *   + '=SUM(X1:Y10),=TODAY(),2020/1/1,\'007,Has Space,日本語,I say "Yes!","Line\r\n'
   *   + 'Break"'
   *
   * parseCsvTo2DArray(csvTxt);
   * // Returns: [
   * //   ['This CSV was output from Tuckn Hoge system'],
   * //   ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
   * //   ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
   * //   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
   * //   [''],
   * //   ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
   * //   ['=SUM(X1:Y10)',
   * //     '=TODAY()',
   * //     '2020/1/1',
   * //     '\'007',
   * //     'Has Space',
   * //     '日本語',
   * //     'I say "Yes!"',
   * //     '"Line\r\nBreak"' ]]
   * @function parseCsvTo2DArray
   * @memberof Wsh.Util
   * @param {string} csvText - The CSV-format string to parse.
   * @param {typeParseCsvTo2DArrayOptions} [options] - Optional parameters
   * @returns {Array} - A parsed array
   */
  util.parseCsvTo2DArray = function (csvText, options) {
    var functionName = 'util.parseCsvTo2DArray';
    if (!_isSolidString(csvText)) throwErrNonStr(functionName, csvText);

    var lineEnding = _obtain(options, 'lineEnding', '\r\n');
    var delimiter = _obtain(options, 'delimiter', ',');
    var addsEmptyRow = _obtain(options, 'addsEmptyRow', false);

    var parseStr = function (str) { // {{{
      str = String(str);

      // Pattern 1: As empty
      if (str === '' || str === '""') return '';

      // Pattern 2: None included Double Quotation
      if (str.indexOf('"') === -1) return str;

      // Pattern 3: The str surrounded with Double Quotations
      if (/^"([\s\S]+)"$/.test(str)) {
        // Remove the Double Quotations and re-parse
        return parseStr(str.replace(/^"([\s\S]+)"$/, '$1'));
      }

      // Pattern 4: Include Double Quotation
      return str.replace(/""/g, '"');
    }; // }}}

    var convLineToArray = function (rowStr, opt) { // {{{
      var splitdVals = rowStr.split(delimiter);
      var cells = _obtain(opt, 'resolved', []);
      var isPending = _obtain(opt, 'isPending', false);
      var cell = _obtain(opt, 'pendingCell', '');
      var matchedDQ;

      splitdVals.forEach(function (val) {
        matchedDQ = val.match(/"/g);

        if (!isPending && !matchedDQ) {
          cells.push(parseStr(val));
          return;
        } else if (!isPending && matchedDQ.length % 2 === 0) {
          cells.push(parseStr(val));
          return;
        } else if (!isPending) { // Lonely Double Quotation
          cell = val;
          isPending = true;
          return;
        } else if (val.indexOf('"') === -1) {
          cell += delimiter + val;
          return;
        } else if (matchedDQ.length % 2 === 0) {
          // The lonely Double Quotation found the partner
          cell += delimiter + val;
          return;
        }

        cell += delimiter + val;
        cells.push(parseStr(cell));
        isPending = false;
      });

      return { resolved: cells, pendingCell: cell, isPending: isPending };
    }; // }}}

    var rowStrs = csvText.split(lineEnding);
    if (!_isSolidArray(rowStrs)) throwErrNonArray(functionName, rowStrs);

    var arrays = [];
    var resolvedCells = [];
    var pendingCell = '';
    var isPending = false;

    rowStrs.forEach(function (rowStr) {
      if (isPending) pendingCell += lineEnding;
      // Row Pattern 1: A empty line
      if (rowStr === '') {
        if (addsEmptyRow) arrays.push(['']);
        return;
      }

      // Row Pattern 2: The delimiter character is not existing
      if (rowStr.indexOf(delimiter) === -1) {
        if (isPending) {
          pendingCell += rowStr;

          var mtchDQ = rowStr.match(/"/g);
          if (mtchDQ && mtchDQ.length % 2 === 1) {
            resolvedCells.push(pendingCell);
            arrays.push(resolvedCells);
            isPending = false;
            resolvedCells = [];
            pendingCell = '';
          }
        } else {
          arrays.push([parseStr(rowStr)]);
        }
        return;
      }

      // Row Pattern 3:
      // Ex1: hoge, yen, 2,900, foo, => ['hoge', 'yen', '2', '900', 'foo']
      // Ex2: hoge, "yen, 2,900", foo, => ['hoge', 'yen, 2,900', 'foo']
      // Ex3: "hoge", ""foo"", b"ar => [hoge, "foo", b!!Parse Error
      var rtnObj = convLineToArray(rowStr, {
        resolvedCells: resolvedCells,
        pendingCell: pendingCell,
        isPending: isPending
      });

      if (!rtnObj.isPending) {
        arrays.push(rtnObj.resolved);
        isPending = false;
        resolvedCells = [];
        pendingCell = '';
      } else {
        isPending = true;
        resolvedCells = rtnObj.resolved;
        pendingCell = rtnObj.pendingCell;
      }
    });

    if (isPending) {
      throw new Error('Error: [Faild to parse]\n'
        + '  at ' + functionName + ' (' + MODULE_TITLE + ')\n'
        + '  resolvedCells: ' + _insp(resolvedCells) + '\n'
        + '  pendingCell: ' + pendingCell + '\n'
        + '  arrays: ' + _insp(arrays));
    }

    return arrays;
  }; // }}}

  // Util

  // util.uuidv4 {{{
  /**
   * Generates a unique ID (RFC4122 version 4).
   *
   * @example
   * var uuidv4 = Wsh.Util.uuidv4; // Shorthand
   *
   * console.log(uuidv4()); // 9f1e53ba-3f08-4c9d-91c7-ad4226312f40
   * console.log(uuidv4()); // 50b1f801-15b6-42f3-afb2-093142cb07b7
   * console.log(uuidv4()); // 3a1d4289-6e78-4873-b63a-4a66a22a46ee
   * console.log(uuidv4()); // 5db0936a-e3ef-456f-8666-e3d2d9b087aa
   * console.log(uuidv4()); // f7184766-168b-4fcb-8250-11b1b6c788ec
   * console.log(uuidv4()); // f7c97128-938c-4ca7-b726-c07b2193a447
   * @function uuidv4
   * @memberof Wsh.Util
   * @returns {string} - Returns a unique ID (RFC4122 version 4).
   */
  util.uuidv4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }; // }}}
})();

// vim:set foldmethod=marker commentstring=//%s :
