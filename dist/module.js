﻿var Wsh=Wsh||{};!function(){var CD;Wsh&&Wsh.Constants||(Wsh.Constants={},(CD=Wsh.Constants).nonAutoClosing=0,CD.defDisplayingSec=10,CD.waits={yes:!0,no:!1,def:!0},CD.runs={ok:0,err:1},CD.windowStyles={hidden:0,activeDef:1,activeMin:2,activeMax:3,nonActive:4,active:5,nonActiveMinNextActive:6,nonActiveMin:7,current:8,restore:9,stateOfProgram:10},CD.logLevels={success:0,error:1,warning:2,information:4,auditSuccess:8,auditFailure:16},CD.buttonTypes={ok:0,okCancel:1,stopRetryDisregard:2,yesNoCancel:3,yesNo:4,retryCancel:5},CD.iconTypes={stop:16,question:32,excl:48,infomaiton:64},CD.enterCodes={ok:1,cancel:2,stop:3,retry:4,disregard:5,yes:6,no:7,not:-1},CD.fso={creates:{yes:!0,no:!1,def:!0},ioModes:{forReading:1,forWriting:2,forAppending:8},formats:{def:-2,unicode:-1,ascii:0},overwrites:{yes:!0,no:!1,def:!0},force:{yes:!0,no:!1,def:!1}},CD.ado={types:{binary:1,text:2},reads:{all:-1,line:-2},writes:{"char":0,line:1},saveCreates:{notExist:1,overWrite:2},charset:{latin1:"iso-8859-1",utf8:"utf-8",utf16:"Unicode",sjis:"shift_jis"}},CD.stdTypes={input:0,out:1,err:2},CD.folderSpecs={windows:0,system:1,temporary:2},CD.driveTypes={unknown:0,removable:1,fixed:2,network:3,cdrom:4,ramDisk:5},CD.codePageIdentifiers={"037":"IBM037",437:"IBM437",500:"IBM500",708:"ASMO-708",720:"DOS-720",737:"ibm737",775:"ibm775",850:"ibm850",852:"ibm852",855:"IBM855",857:"ibm857",858:"IBM00858",860:"IBM860",861:"ibm861",862:"DOS-862",863:"IBM863",864:"IBM864",865:"IBM865",866:"cp866",869:"ibm869",870:"IBM870",874:"windows-874",875:"cp875",932:"shift_jis",936:"gb2312",949:"ks_c_5601-1987",950:"big5",1026:"IBM1026",1047:"IBM01047",1140:"IBM01140",1141:"IBM01141",1142:"IBM01142",1143:"IBM01143",1144:"IBM01144",1145:"IBM01145",1146:"IBM01146",1147:"IBM01147",1148:"IBM01148",1149:"IBM01149",1200:"utf-16",1201:"unicodeFFFE",1250:"windows-1250",1251:"windows-1251",1252:"windows-1252",1253:"windows-1253",1254:"windows-1254",1255:"windows-1255",1256:"windows-1256",1257:"windows-1257",1258:"windows-1258",1361:"Johab",1e4:"macintosh",10001:"x-mac-japanese",10002:"x-mac-chinesetrad",10003:"x-mac-korean",10004:"x-mac-arabic",10005:"x-mac-hebrew",10006:"x-mac-greek",10007:"x-mac-cyrillic",10008:"x-mac-chinesesimp",10010:"x-mac-romanian",10017:"x-mac-ukrainian",10021:"x-mac-thai",10029:"x-mac-ce",10079:"x-mac-icelandic",10081:"x-mac-turkish",10082:"x-mac-croatian",12e3:"utf-32",12001:"utf-32BE",2e4:"x-Chinese_CNS",20001:"x-cp20001",20002:"x_Chinese-Eten",20003:"x-cp20003",20004:"x-cp20004",20005:"x-cp20005",20105:"x-IA5",20106:"x-IA5-German",20107:"x-IA5-Swedish",20108:"x-IA5-Norwegian",20127:"us-ascii",20261:"x-cp20261",20269:"x-cp20269",20273:"IBM273",20277:"IBM277",20278:"IBM278",20280:"IBM280",20284:"IBM284",20285:"IBM285",20290:"IBM290",20297:"IBM297",20420:"IBM420",20423:"IBM423",20424:"IBM424",20833:"x-EBCDIC-KoreanExtended",20838:"IBM-Thai",20866:"koi8-r",20871:"IBM871",20880:"IBM880",20905:"IBM905",20924:"IBM00924",20932:"EUC-JP",20936:"x-cp20936",20949:"x-cp20949",21025:"cp1025",21866:"koi8-u",28591:"iso-8859-1",28592:"iso-8859-2",28593:"iso-8859-3",28594:"iso-8859-4",28595:"iso-8859-5",28596:"iso-8859-6",28597:"iso-8859-7",28598:"iso-8859-8",28599:"iso-8859-9",28603:"iso-8859-13",28605:"iso-8859-15",29001:"x-Europa",38598:"iso-8859-8-i",50220:"iso-2022-jp",50221:"csISO2022JP",50222:"iso-2022-jp",50225:"iso-2022-kr",50227:"x-cp50227",51932:"euc-jp",51936:"EUC-CN",51949:"euc-kr",52936:"hz-gb-2312",54936:"GB18030",57002:"x-iscii-de",57003:"x-iscii-be",57004:"x-iscii-ta",57005:"x-iscii-te",57006:"x-iscii-as",57007:"x-iscii-or",57008:"x-iscii-ka",57009:"x-iscii-ma",57010:"x-iscii-gu",57011:"x-iscii-pa",65e3:"utf-7",65001:"utf-8"})}();
var FILE_ATTRIBUTE_ARCHIVE=FILE_ATTRIBUTE_ARCHIVE||32,FILE_ATTRIBUTE_COMPRESSED=FILE_ATTRIBUTE_COMPRESSED||2048,FILE_ATTRIBUTE_DEVICE=FILE_ATTRIBUTE_DEVICE||64,FILE_ATTRIBUTE_DIRECTORY=FILE_ATTRIBUTE_DIRECTORY||16,FILE_ATTRIBUTE_FILE=FILE_ATTRIBUTE_FILE||17,FILE_ATTRIBUTE_ENCRYPTED=FILE_ATTRIBUTE_ENCRYPTED||16384,FILE_ATTRIBUTE_HIDDEN=FILE_ATTRIBUTE_HIDDEN||2,FILE_ATTRIBUTE_NORMAL=FILE_ATTRIBUTE_NORMAL||128,FILE_ATTRIBUTE_NOT_CONTENT_INDEXED=FILE_ATTRIBUTE_NOT_CONTENT_INDEXED||8192,FILE_ATTRIBUTE_OFFLINE=FILE_ATTRIBUTE_OFFLINE||4096,FILE_ATTRIBUTE_READONLY=FILE_ATTRIBUTE_READONLY||1,FILE_ATTRIBUTE_REPARSE_POINT=FILE_ATTRIBUTE_REPARSE_POINT||1024,FILE_ATTRIBUTE_SYMLINKD_DIR=FILE_ATTRIBUTE_SYMLINKD_DIR||1040,FILE_ATTRIBUTE_SYMLINKD_FILE=FILE_ATTRIBUTE_SYMLINKD_FILE||1056,FILE_ATTRIBUTE_SPARSE_FILE=FILE_ATTRIBUTE_SPARSE_FILE||512,FILE_ATTRIBUTE_SYSTEM=FILE_ATTRIBUTE_SYSTEM||4,FILE_ATTRIBUTE_TEMPORARY=FILE_ATTRIBUTE_TEMPORARY||256,FILE_ATTRIBUTE_VIRTUAL=FILE_ATTRIBUTE_VIRTUAL||65536,vbOKOnly=vbOKOnly||0,vbOKCancel=vbOKCancel||1,vbAbortRetryIgnore=vbAbortRetryIgnore||2,vbYesNoCancel=vbYesNoCancel||3,vbYesNo=vbYesNo||4,vbRetryCancel=vbRetryCancel||5,vbCritical=vbCritical||16,vbQuestion=vbQuestion||32,vbExclamation=vbExclamation||48,vbInformation=vbInformation||64,vbOk=vbOk||1,vbCancel=vbCancel||2,vbAbort=vbAbort||3,vbRetry=vbRetry||4,vbIgnore=vbIgnore||5,vbYes=vbYes||6,vbNo=vbNo||7,vbBlack=vbBlack||0,vbRed=vbRed||255,vbGreen=vbGreen||65280,vbYellow=vbYellow||65535,vbBlue=vbBlue||16711680,vbMagenta=vbMagenta||16711935,vbCyan=vbCyan||16776960,vbWhite=vbWhite||16777215;
!function(){var util,_insp,_protoTypeOf,throwErrNonArray,throwErrNonStr,_isArray,_isNumber,_isObject,_isObjectLike,_isPlainObject,_isString,_isSolidArray,_isSolidString,_hasContent,_isEmpty,_isEqual,_cloneDeep,_obtain;function _merge(){if(arguments.length<2)return{};var source,isDeep=arguments[0],target=arguments[1];if(_isObject(target)||(target=Object(target)),2===arguments.length)return target;if(_isString(target))return target;for(var i=2,I=arguments.length;i<I;i++)_hasContent(source=arguments[i])&&(_isObjectLike(source)||(source=Array.from(source)),_hasContent(source)&&Object.keys(source).forEach(function(key){_isObjectLike(source[key])?target[key]=isDeep?_merge(isDeep,target[key],source[key]):source[key]:target[key]=source[key]}));return target}Wsh&&Wsh.Util||(Wsh.Util={},util=Wsh.Util,util.inspect=console._toDirString,_insp=util.inspect,_protoTypeOf=console._protoTypeOf,util.throwValueError=function(argName,moduleTitle,functionName,errVal){throw new Error("TypeError [ERR_INVALID_ARG_VALUE]: The argument `"+argName+"` cannot be "+_insp(errVal)+"\n  at "+functionName+" ("+moduleTitle+")")},util.throwTypeError=function(trueType,moduleTitle,functionName,errVal){throw new Error("TypeError [ERR_INVALID_ARG_TYPE]: The argument must be one of type "+trueType+"\n  at "+functionName+" ("+moduleTitle+")\n  value: "+_insp(errVal))},throwErrNonArray=function(functionName,typeErrVal){util.throwTypeError("array","WshUtil/Util.js",functionName,typeErrVal)},throwErrNonStr=function(functionName,typeErrVal){util.throwTypeError("string","WshUtil/Util.js",functionName,typeErrVal)},util.isArray=function(val){return"Array"===_protoTypeOf(val)},_isArray=util.isArray,util.isBoolean=function(val){return"Boolean"===_protoTypeOf(val)},util.isError=function(val){return"Error"===_protoTypeOf(val)},util.isFunction=function(val){return"Function"===_protoTypeOf(val)},util.isNumber=function(val){return"Number"===_protoTypeOf(val)},_isNumber=util.isNumber,util.isPureNumber=function(val){return util.isNumber(val)&&!isNaN(val)&&val!==Infinity},util.isObject=function(val){var type=typeof val;return null!=val&&("object"==type||"function"==type)},_isObject=util.isObject,util.isObjectLike=function(val){return null!==val&&"object"==typeof val},_isObjectLike=util.isObjectLike,util.isPlainObject=function(val){return"Object"===_protoTypeOf(val)},_isPlainObject=util.isPlainObject,util.isString=function(val){return"String"===_protoTypeOf(val)},_isString=util.isString,util.isSolidArray=function(val){return _isArray(val)&&0<val.length},_isSolidArray=util.isSolidArray,util.isSolidObject=function(val){return _isPlainObject(val)&&0<Object.keys(val).length},util.isSolidString=function(val){return _isString(val)&&""!==val},_isSolidString=util.isSolidString,util.toPlainString=function(val){var pType=_protoTypeOf(val);return"Boolean"===pType?String(val):"Number"===pType?isNaN(val)?"NaN":String(val):"Array"===pType&&0<val.length?val.join(","):"String"===pType&&""!==val?val:"Object"===pType?Object.values(val).reduce(function(acc,v){return acc+util.toPlainString(v)},""):""},util.hasContent=function(val){if(val===undefined||null===val)return!1;if(val===Infinity)return!0;var pType=_protoTypeOf(val);return"Array"===pType?0!==val.length:"Boolean"===pType||("Date"===pType||("Error"===pType||("Function"===pType||("Number"===pType||("Object"===pType?0!==Object.keys(val).length:"RegExp"===pType||("String"===pType?""!==val:val))))))},_hasContent=util.hasContent,Wsh.Util.types={},util.types.protoTypeOf=_protoTypeOf,util.types.isDate=function(val){return"Date"===_protoTypeOf(val)},util.types.isRegExp=function(val){return"RegExp"===_protoTypeOf(val)},util.vbsTypeOf=function(val){var sc=new ActiveXObject("ScriptControl");return sc.Language="VBScript",sc.AddCode("Function GetTypeName(obj): GetTypeName = TypeName(obj): End Function"),sc.Run("GetTypeName",val)},util.isEmpty=function(val){if(val===undefined||null===val)return!0;if(!0===val||!1===val)return!0;if(val===Infinity)return!0;var pType=_protoTypeOf(val);return"Array"===pType?0===val.length:"Date"===pType||("Error"===pType||("Function"===pType||("Number"===pType||("Object"===pType?0===Object.keys(val).length:"RegExp"===pType||("String"!==pType||""===val)))))},_isEmpty=util.isEmpty,util.isDeepStrictEqual=function(valA,valB){if(valA===valB)return!0;var valApType=_protoTypeOf(valA),valBpType=_protoTypeOf(valB);if("Array"===valApType||"Array"===valBpType){if("Array"!==valApType||"Array"!==valBpType)return!1;var lenA=valA.length,lenB=valB.length;return lenA!==lenB?!1:0===lenA&&0===lenB||!valA.some(function(a,i){return!_isEqual(a,valB[i])})}if("Number"===valApType||"Number"===valBpType)return"Number"===valApType&&"Number"===valBpType&&(valA!=valA&&valB!=valB);if("String"===valApType||"String"===valBpType)return"String"===valApType&&"String"===valBpType&&valA===valB;if(_isObjectLike(valA)||_isObjectLike(valB)){if(!_isObjectLike(valA)||!_isObjectLike(valB))return!1;if(valApType!==valBpType)return!1;var aKeys=Object.keys(valA),bKeys=Object.keys(valB);return aKeys.length!==bKeys.length?!1:0===aKeys.length&&0===bKeys.length?valA.toString()===valB.toString():!aKeys.some(function(aKey){if(!bKeys.some(function(bKey){if(aKey===bKey)return _isEqual(valA[aKey],valB[bKey])}))return!0})}return!1},_isEqual=util.isDeepStrictEqual,util.isEqual=_isEqual,util.isFalseLike=function(val){return!val||!(!_isSolidString(val)||"FALSE"!==val.toUpperCase())},util.isTrueLike=function(val){return!util.isFalseLike(val)},util.startsWith=function(val,target,position,ignoresCase){if(""===target)return!0;if(""===val)return!1;if(val===undefined||null===val)return!1;var str=String(_isArray(val)?val[0]:val),targetStr=String(_isArray(target)?target[0]:target),pos=0,iCase=!1;return"i"===position?iCase=!0:(_hasContent(position)&&(pos=Number(position)),!0!==ignoresCase&&"i"!==ignoresCase||(iCase=!0)),(iCase?str.toUpperCase().indexOf(targetStr.toUpperCase()):str.indexOf(targetStr))===pos},util.endsWith=function(val,target,position,ignoresCase){if(""===target)return!0;if(""===val)return!1;if(val===undefined||null===val)return!1;var str=String(_isArray(val)?util.last(val):val),targetStr=String(_isArray(target)?target[0]:target),pos=str.length,iCase=!1;return"i"===position?iCase=!0:(_hasContent(position)&&(pos=Number(position)),!0!==ignoresCase&&"i"!==ignoresCase||(iCase=!0)),str=(str=str.slice(0,pos)).slice(-targetStr.length),iCase?str.toUpperCase()===targetStr.toUpperCase():str===targetStr},util.createDateString=function(fmt,dateObj){var eqtTime,eqtTimeH,eqtTimeM,eqtTimeHHStr,eqtTimeMMStr,dataStr=_isSolidString(fmt)?fmt:"yyyyMMddTHHmmss+hhmm",srcDate=util.types.isDate(dateObj)?dateObj:new Date,dataStr=dataStr.replace(/yyyy/i,String(srcDate.getFullYear())).replace(/yy/i,String(srcDate.getFullYear()).slice(-2)).replace(/MM/,("0"+(srcDate.getMonth()+1)).slice(-2)).replace(/dd/,("0"+srcDate.getDate()).slice(-2)).replace(/HH/,("0"+srcDate.getHours()).slice(-2)).replace(/mm/,("0"+srcDate.getMinutes()).slice(-2)).replace(/ss/,("0"+srcDate.getSeconds()).slice(-2));return/\+hh:?mm$/i.test(dataStr)&&(eqtTimeM=(eqtTime=(new Date).getTimezoneOffset()/60*-1)-(eqtTimeH=Number(eqtTime)),eqtTimeHHStr=String(eqtTimeH),eqtTimeMMStr=String(eqtTimeM),1===eqtTimeHHStr.length&&(eqtTimeHHStr="0"+eqtTimeHHStr),1===eqtTimeMMStr.length&&(eqtTimeMMStr="0"+eqtTimeMMStr),dataStr=dataStr.replace(/\+(hh)/i,"+"+eqtTimeHHStr).replace(/mm$/i,eqtTimeMMStr)),dataStr},util.parseTemplateLiteral=function(str,schema){_isString(str)||throwErrNonStr("util.parseTemplateLiteral",str);var matches=str.match(/\$\{[^{}]+\}/g);if(null===matches)return str;var parsedStr=str;return matches.forEach(function(template){var varName=template.match(/\$\{([^{}]+)\}/)[1];parsedStr=parsedStr.replace(template,schema[varName])}),parsedStr},util.parseDatecode=function(str,dateObj){_isString(str)||throwErrNonStr("util.parseDatecode",str);var datecodes=str.match(/\$\{[^{}]+\}/g);return null===datecodes?str:datecodes.reduce(function(acc,datecode){var dateFormat=datecode.match(/\$\{([^{}]+)\}/)[1];return acc.replace(datecode,util.createDateString(dateFormat,dateObj))},str)},util.isASCII=function(val){return!!_isSolidString(val)&&!Array.from(val).some(function(char){var code=char.charCodeAt(0);return!(0<=code&&code<129||63728==code||65377<=code&&code<65440||63729<=code&&code<63732)})},util.isSameMeaning=function(valA,valB){return _isString(valA)&&_isString(valB)?valA.toUpperCase()===valB.toUpperCase():(_isNumber(valA)&&_isNumber(valB)||!!(_isString(valA)&&_isNumber(valB)||_isNumber(valA)&&_isString(valB)))&&valA==valB},util.isMailAddress=function(val){return!!_isSolidString(val)&&/[\x00-\x7f]+@[\x00-\x7f]+/i.test(val)},util.isPhoneNumberInJapan=function(val){if(!_isSolidString(val))return!1;var numOnly=val.replace(/[-－‐]/g,"");return/^0120/.test(numOnly)?/^0120\d{6}$/.test(numOnly):/^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/i.test(numOnly)},util.isPhoneNumberLikeInJapan=function(val){return!!_isSolidString(val)&&/^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{3}|0[789]0-?\d{4}-?\d{3}|050-?\d{4}-?\d{3})\d?$/i.test(val)},util.isJapaneseLike=function(val){return!!_isSolidString(val)&&(!!/^[^\x00-\x7F]+[(\p{blank})\s]*[^\x00-\x7F]+$/.test(val)||/^[a-z]+\s*[a-z]+$/i.test(val)&&/^[^lqvx]+$/i.test(val)&&/[^(bb|cc|dd|ff|gg|hh|jj|kk|ll|pp|rr|ss|tt|ww|yy|xx)]/i.test(val)&&/([aiueonkstnhfmyrwngzjdbp]|sh|ch|ts|ky|sh|ch|ny|hy|my|ry|gy|by|py)[aiueonmh]$/i.test(val))},util.isPlaneTextFileExt=function(val){return!!_isSolidString(val)&&/\.(ahk|bat|c|com|cs|cls|cmd|css|dic|js|h|htm|html|ini|java|json|log|txt|ps1|py|reg|vbs|wsf|xml)$/i.test(val)},util.toHalfWidthEN=function(str){return _isString(str)||throwErrNonStr("util.toHalfWidthEN",str),(str=str.replace(/”/g,'"').replace(/￥/g,"\\").replace(/’/g,"'").replace(/￣/g,"~").replace(/‘/g,"`")).replace(/[Ａ-Ｚａ-ｚ０-９！＃＄％＆（）＊＋，－．／：；＜＝＞？＠［］＾＿｛｜｝]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-65248)})},util.toDoubleByteEN=function(str){return _isString(str)||throwErrNonStr("util.toDoubleByteEN",str),(str=str.replace(/"/g,"”").replace(/\\/g,"￥").replace(/'/g,"’").replace(/~/g,"￣").replace(/`/g,"‘")).replace(/[A-Za-z0-9!#$%&()*+,-./:;<=>?@[\]^_{|}]/g,function(s){return String.fromCharCode(s.charCodeAt(0)+65248)})},util.toZenkakuKana=function(str){_isString(str)||throwErrNonStr("util.toZenkakuKana",str);var kanaMap={"ｶﾞ":"ガ","ｷﾞ":"ギ","ｸﾞ":"グ","ｹﾞ":"ゲ","ｺﾞ":"ゴ","ｻﾞ":"ザ","ｼﾞ":"ジ","ｽﾞ":"ズ","ｾﾞ":"ゼ","ｿﾞ":"ゾ","ﾀﾞ":"ダ","ﾁﾞ":"ヂ","ﾂﾞ":"ヅ","ﾃﾞ":"デ","ﾄﾞ":"ド","ﾊﾞ":"バ","ﾋﾞ":"ビ","ﾌﾞ":"ブ","ﾍﾞ":"ベ","ﾎﾞ":"ボ","ﾊﾟ":"パ","ﾋﾟ":"ピ","ﾌﾟ":"プ","ﾍﾟ":"ペ","ﾎﾟ":"ポ","ｳﾞ":"ヴ","ﾜﾞ":"ヷ","ｦﾞ":"ヺ","ｱ":"ア","ｲ":"イ","ｳ":"ウ","ｴ":"エ","ｵ":"オ","ｶ":"カ","ｷ":"キ","ｸ":"ク","ｹ":"ケ","ｺ":"コ","ｻ":"サ","ｼ":"シ","ｽ":"ス","ｾ":"セ","ｿ":"ソ","ﾀ":"タ","ﾁ":"チ","ﾂ":"ツ","ﾃ":"テ","ﾄ":"ト","ﾅ":"ナ","ﾆ":"ニ","ﾇ":"ヌ","ﾈ":"ネ","ﾉ":"ノ","ﾊ":"ハ","ﾋ":"ヒ","ﾌ":"フ","ﾍ":"ヘ","ﾎ":"ホ","ﾏ":"マ","ﾐ":"ミ","ﾑ":"ム","ﾒ":"メ","ﾓ":"モ","ﾔ":"ヤ","ﾕ":"ユ","ﾖ":"ヨ","ﾗ":"ラ","ﾘ":"リ","ﾙ":"ル","ﾚ":"レ","ﾛ":"ロ","ﾜ":"ワ","ｦ":"ヲ","ﾝ":"ン","ｧ":"ァ","ｨ":"ィ","ｩ":"ゥ","ｪ":"ェ","ｫ":"ォ","ｯ":"ッ","ｬ":"ャ","ｭ":"ュ","ｮ":"ョ","｡":"。","､":"、","ｰ":"ー","｢":"「","｣":"」","･":"・"},reg=new RegExp("("+Object.keys(kanaMap).join("|")+")","g");return str.replace(reg,function(match){return kanaMap[match]}).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜")},util.toRegExpStr=function(str){return _isString(str)||throwErrNonStr("util.toRegExpStr",str),str.replace(/([\\/*+.?{}()[\]^$|])/g,"\\$1")},util.hasOwnProp=function(obj,prop){return obj&&Object.prototype.hasOwnProperty.call(obj,prop)},util.hasInObj=function(obj,prop){return obj&&prop in Object(obj)},util.hasIn=function(obj,propertiesNames){if(_isEmpty(obj)||_isEmpty(propertiesNames))return!1;var propNames=propertiesNames;if(_isString(propertiesNames)&&(propNames=(propNames=String(propertiesNames).replace(/\[(\d+)\]/gi,".$1")).split(".")),!_isSolidArray(propNames))return!1;var objPointer=obj;return!Array.from(propNames).some(function(propName){return!util.hasInObj(objPointer,propName)||(objPointer=objPointer[propName],!1)})},util.merge=function(){var args=[!0].concat(Array.from(arguments));return _merge.apply(null,args)},util.extend=function(){var args=[!1].concat(Array.from(arguments));return _merge.apply(null,args)},util.cloneDeep=function(val){if(val===undefined||null===val)return val;if(!0===val||!1===val)return val;if(val===Infinity)return val;var type=_protoTypeOf(val);if("Array"===type)return 0===val.length?[]:val.map(function(val){return _cloneDeep(val)});if("Number"===type&&"String"===type)return val;if("object"!=typeof val)return val;var rtnObj=Object.assign({},val);return Object.keys(val).forEach(function(key){"object"==typeof val[key]&&(rtnObj[key]=_cloneDeep(val[key]))}),rtnObj},_cloneDeep=util.cloneDeep,util.set=function(obj,propPath,value){if(!_isObject(obj))return obj;var propNames=propPath;if(_isString(propPath)&&(propNames=(propNames=String(propPath).replace(/\[(\d+)\]/gi,".$1")).split(".")),!_isSolidArray(propNames))return obj[String(propPath)]=value,obj;for(var objPointer=obj,i=0,len=propNames.length-1;i<len;i++)util.hasInObj(objPointer,propNames[i])||(objPointer[propNames[i]]={}),objPointer=objPointer[propNames[i]];return objPointer[propNames[propNames.length-1]]=value,obj},util.get=function(obj,propPath,defaultValue){if(!_hasContent(obj))return defaultValue;var propNames=propPath;if(_isArray(propNames)||(propNames=(propNames=String(propNames).replace(/\[(\d+)\]/gi,".$1")).split(".")),!_isSolidArray(propNames))return defaultValue;var objPointer=obj;return propNames.some(function(propName){if(!util.hasInObj(objPointer,propName))return!0;objPointer=objPointer[propName]})||objPointer===undefined?defaultValue:objPointer},util.unset=function(obj,propPath){if(!_hasContent(obj))return!0;var propNames=propPath;if(_isArray(propNames)||(propNames=(propNames=String(propNames).replace(/\[(\d+)\]/gi,".$1")).split(".")),!_isSolidArray(propNames))return!0;for(var objPointer=obj,i=0,len=propNames.length-1;i<len;i++){if(!util.hasInObj(objPointer,propNames[i]))return!0;objPointer=objPointer[propNames[i]]}return objPointer===undefined||delete objPointer[propNames[propNames.length-1]]},util.obtainPropVal=function(obj,propertiesNames,defaultValue){var returnValue=util.get(obj,propertiesNames,defaultValue);return _hasContent(returnValue)?returnValue:defaultValue},_obtain=util.obtainPropVal,util.objToStr=function(obj,prefix,postfix){return prefix=_isString(prefix)?prefix:"  ",postfix=_isString(postfix)?postfix:"\r\n",Object.keys(obj).reduce(function(acc,val){return acc+prefix+val+": "+obj[val]+postfix},"")},util.includes=function(collection,val,fromIndex,ignoresCase){var fromIdx=0,iCase=!1;"i"===fromIndex?iCase=!0:(!0!==ignoresCase&&"i"!==ignoresCase||(iCase=!0),_hasContent(fromIndex)&&(fromIdx=fromIndex));var pType=_protoTypeOf(collection);return"String"===pType?iCase&&_isString(val)?-1!==collection.toUpperCase().indexOf(val.toUpperCase(),fromIdx):-1!==collection.indexOf(val,fromIdx):!_isEmpty(collection)&&("Array"===pType?-1!==collection.findIndex(function(v,i){return!(i<fromIdx)&&(iCase&&_isString(v)&&_isString(val)?v.toUpperCase()===val.toUpperCase():v===val||v!=v&&val!=val)}):_isObjectLike(collection)?-1!==Object.keys(collection).findIndex(function(key,i){return!(i<fromIdx)&&(iCase&&_isString(collection[key])&&_isString(val)?collection[key].toUpperCase()===val.toUpperCase():collection[key]===val||collection[key]!=collection[key]&&val!=val)}):collection===val||collection!=collection&&val!=val)},util.concat=function(array){for(var argVal,newArray=_cloneDeep(array),i=1,I=arguments.length;i<I;++i)_isArray(argVal=arguments[i])?argVal.forEach(function(val){newArray.push(val)}):newArray.push(argVal);return newArray},util.inArray=function(value,array,fromIndex){return _isSolidArray(array)?(_isNumber(fromIndex)||(fromIndex=0),array.findIndex(function(val,i){return fromIndex<=i&&_isEqual(val,value)})):-1},util.indexOf=function(array,value,fromIndex){return util.inArray(value,array,fromIndex)},util.last=function(array){return _isSolidArray(array)?array[array.length-1]:undefined},util.lastIndexOf=function(array,value,fromIndex){if(!_isSolidArray(array))return-1;if((!_isNumber(fromIndex)||fromIndex>array.length-1)&&(fromIndex=array.length-1),!_hasContent(value))return fromIndex;for(var i=fromIndex;0<=i;i--)if(_isEqual(array[i],value))return i;return-1},util.convToVBArray=function(arr){var sc=new ActiveXObject("ScriptControl");return sc.Language="VBScript",sc.AddCode("Function makeArray\nmakeArray = Array("+arr+")\nEnd Function\n"),sc.Run("makeArray")},util.conv2DArrayToObj=function(arrays,options){_isSolidArray(arrays)||throwErrNonArray("util.conv2DArrayToObj",arrays);for(var beginRowIdx=_obtain(options,"beginRow",1)-1,beginColIdx=_obtain(options,"beginColumn",1)-1,endRowIdx=_obtain(options,"endRow",arrays.length),endColIdx=_obtain(options,"endColumn",arrays[beginRowIdx].length),propNames=[],propName="",col=beginColIdx;col<endColIdx;col++)""===(propName=String(arrays[beginRowIdx][col]).trim())?propNames.push("empty"+col):-1===propNames.indexOf(propName)?propNames.push(propName):propNames.push(propName+col);for(var output=[],tmpAry=[],tmpObj={},row=1+beginRowIdx;row<endRowIdx;row++){tmpAry=arrays[row],tmpObj={};for(var col1=0,Col1=propNames.length;col1<Col1;col1++)beginColIdx+col1<tmpAry.length?tmpObj[propNames[col1]]=tmpAry[beginColIdx+col1]:tmpObj[propNames[col1]]=undefined;output.push(tmpObj)}return output},util.stringify2DArrayToCsv=function(arrays,options){_isSolidArray(arrays)||throwErrNonArray("util.stringify2DArrayToCsv",arrays);var delimiter=_obtain(options,"delimiter",","),lineEnding=_obtain(options,"lineEnding","\r\n"),escapesExcelFunc=_obtain(options,"escapesExcelFunc",!1),stringified="";return arrays.forEach(function(vals){var stringifiedVals=[];vals.forEach(function(val){var stringifiedVal=_hasContent(val)?_isObject(val)?_insp(val):escapesExcelFunc&&util.startsWith(stringifiedVal,"=")?val:String(val):"";-1!==stringifiedVal.indexOf('"')&&(escapesExcelFunc&&util.startsWith(stringifiedVal,"=")||(stringifiedVal='"'+stringifiedVal.replace(/"/g,'""')+'"')),-1===stringifiedVal.indexOf(delimiter)&&!/[\t\r\n]/.test(stringifiedVal)||(stringifiedVal='"'+stringifiedVal+'"'),stringifiedVals.push(stringifiedVal)}),stringified+=stringifiedVals.join(delimiter)+lineEnding}),stringified},util.parseCsvTo2DArray=function(csvText,options){_isSolidString(csvText)||throwErrNonStr("util.parseCsvTo2DArray",csvText);var lineEnding=_obtain(options,"lineEnding","\r\n"),delimiter=_obtain(options,"delimiter",","),addsEmptyRow=_obtain(options,"addsEmptyRow",!1),parseStr=function(str){return""===(str=String(str))||'""'===str?"":-1===str.indexOf('"')?str:/^"([\s\S]+)"$/.test(str)?parseStr(str.replace(/^"([\s\S]+)"$/,"$1")):str.replace(/""/g,'"')},rowStrs=csvText.split(lineEnding);_isSolidArray(rowStrs)||throwErrNonArray("util.parseCsvTo2DArray",rowStrs);var arrays=[],resolvedCells=[],pendingCell="",isPending=!1;if(rowStrs.forEach(function(rowStr){var rtnObj,mtchDQ;isPending&&(pendingCell+=lineEnding),""!==rowStr?-1!==rowStr.indexOf(delimiter)?(rtnObj=function(rowStr,opt){var matchedDQ,splitdVals=rowStr.split(delimiter),cells=_obtain(opt,"resolved",[]),isPending=_obtain(opt,"isPending",!1),cell=_obtain(opt,"pendingCell","");return splitdVals.forEach(function(val){if(matchedDQ=val.match(/"/g),isPending||matchedDQ){if(isPending||matchedDQ.length%2!=0)return isPending?void(-1!==val.indexOf('"')&&matchedDQ.length%2!=0?(cell+=delimiter+val,cells.push(parseStr(cell)),isPending=!1):cell+=delimiter+val):(cell=val,void(isPending=!0));cells.push(parseStr(val))}else cells.push(parseStr(val))}),{resolved:cells,pendingCell:cell,isPending:isPending}}(rowStr,{resolvedCells:resolvedCells,pendingCell:pendingCell,isPending:isPending}),pendingCell=rtnObj.isPending?(isPending=!0,resolvedCells=rtnObj.resolved,rtnObj.pendingCell):(arrays.push(rtnObj.resolved),isPending=!1,resolvedCells=[],"")):isPending?(pendingCell+=rowStr,(mtchDQ=rowStr.match(/"/g))&&mtchDQ.length%2==1&&(resolvedCells.push(pendingCell),arrays.push(resolvedCells),isPending=!1,resolvedCells=[],pendingCell="")):arrays.push([parseStr(rowStr)]):addsEmptyRow&&arrays.push([""])}),isPending)throw new Error("Error: [Faild to parse]\n  at util.parseCsvTo2DArray (WshUtil/Util.js)\n  resolvedCells: "+_insp(resolvedCells)+"\n  pendingCell: "+pendingCell+"\n  arrays: "+_insp(arrays));return arrays},util.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=16*Math.random()|0;return("x"==c?r:3&r|8).toString(16)})})}();
