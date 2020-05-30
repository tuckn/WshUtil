/**
 * The wrapper object for @tuckn/WshXxxx modules.
 *
 * @global
 * @namespace
 * @type {object}
 */
var Wsh = {};

/* eslint no-unused-vars:off */

/**
 * The constant values for @tuckn/WshXxxx modules.
 *
 * @memberof Wsh
 * @namespace Constants
 */
Wsh.Constants = {};

(function () {
  var CD = Wsh.Constants;

  CD.nonAutoClosing = 0;
  CD.defDisplayingSec = 10;

  /**
   * Whether to wait the application terminated. Used to {@link https://docs.microsoft.com/ja-jp/previous-versions/windows/scripting/cc364421%28v%3dmsdn.10%29|Wsh.Shell.Run}.
   *
   * @namespace waits
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.waits */
  CD.waits = {
    /** @constant {boolean} */
    yes: true,
    /** @constant {boolean} */
    no: false,
    /** @constant {boolean} */
    def: true // @NOTE Defining `default:` occures JScript Error
  };

  /**
   * The application exit code. Used to {@link https://docs.microsoft.com/ja-jp/previous-versions/windows/scripting/cc364421%28v%3dmsdn.10%29|Wsh.Shell.Run and so on}. Note that the applications do not always follow this rule. I have seen that a few applications always return 1.
   *
   * @namespace runs
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.runs */
  CD.runs = {
    /** @constant {number} */
    ok: 0,
    /** @constant {number} */
    err: 1
  };

  /**
   * A recommendation as to how the application window should be displayed initially. Used to {@link https://docs.microsoft.com/en-us/windows/win32/shell/shell-shellexecute|Shell.ShellExecute and Wsh.Shell.Run}. Note that the application can ignore this recommendation.
   *
   * @namespace windowStyles
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.windowStyles */
  CD.windowStyles = {
    /**
     * Hides the window and activates another window.
     *
     * @constant {number}
     */
    hidden: 0,

    /**
     * Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag when displaying the window for the first time.
     *
     * @constant {number}
     */
    activeDef: 1,

    /**
     * Activates the window and displays it as a minimized window.
     *
     * @constant {number}
     */
    activeMin: 2,

    /**
     * Activates the window and displays it as a maximized window.
     *
     * @constant {number}
     */
    activeMax: 3,

    /**
     * Displays a window in its most recent size and position. The active window remains active.
     *
     * @constant {number}
     */
    nonActive: 4,

    /**
     * Activates the window and displays it in its current size and position.
     *
     * @constant {number}
     */
    active: 5,

    /**
     * Minimizes the specified window and activates the next top-level window in the Z order.
     *
     * @constant {number}
     */
    nonActiveMinNextActive: 6,

    /**
     * Displays the window as a minimized window. The active window remains active.
     *
     * @constant {number}
     */
    nonActiveMin: 7,

    /**
     * Displays the window in its current state. The active window remains active.
     *
     * @constant {number}
     */
    current: 8,

    /**
     * Activates and displays the window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag when restoring a minimized window.
     *
     * @constant {number}
     */
    restore: 9,

    /**
     * Sets the show-state based on the state of the program that started the application.
     *
     * @constant {number}
     */
    stateOfProgram: 10
  };

  /**
   * Events of Windows Event Log. Used to {@link Wsh.OS.writeLogEvent}({@link Wsh.Shell.logLevels}).
   *
   * @namespace logLevels
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.logLevels */
  CD.logLevels = {
    /** @constant {number} */
    success: 0,
    /** @constant {number} */
    error: 1,
    /** @constant {number} */
    warning: 2,
    /** @constant {number} */
    information: 4,
    /** @constant {number} */
    auditSuccess: 8,
    /** @constant {number} */
    auditFailure: 16
  };

  /**
   * Button types. Used to {@link console.popup}({@link WScript.Shell Popup}). {@link https://msdn.microsoft.com/ja-jp/library/cc364421.aspx|Microsoft}
   *
   * @namespace buttonTypes
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.buttonTypes */
  CD.buttonTypes = {
    /** @constant {number} */
    ok: 0,
    /** @constant {number} */
    okCancel: 1,
    /** @constant {number} */
    stopRetryDisregard: 2,
    /** @constant {number} */
    yesNoCancel: 3,
    /** @constant {number} */
    yesNo: 4,
    /** @constant {number} */
    retryCancel: 5
  };

  /**
   * Icon types. Used to {@link console.popup}({@link WScript.Shell Popup}). {@link https://msdn.microsoft.com/ja-jp/library/cc364421.aspx|Microsoft}
   *
   * @namespace iconTypes
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.iconTypes */
  CD.iconTypes = {
    /** @constant {number} */
    stop: 16,
    /** @constant {number} */
    question: 32,
    /** @constant {number} */
    excl: 48,
    /** @constant {number} */
    infomaiton: 64
  };

  /**
   * Enter codes. Used to {@link console.popup}({@link WScript.Shell Popup}). {@link https://msdn.microsoft.com/ja-jp/library/cc364421.aspx|Microsoft}
   *
   * @namespace enterCodes
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.enterCodes */
  CD.enterCodes = {
    /** @constant {number} */
    ok: 1,
    /** @constant {number} */
    cancel: 2,
    /** @constant {number} */
    stop: 3,
    /** @constant {number} */
    retry: 4,
    /** @constant {number} */
    disregard: 5,
    /** @constant {number} */
    yes: 6,
    /** @constant {number} */
    no: 7,

    /**
     * If a user does not click a button before nSecondsToWait
     *
     * @constant {number}
     */
    not: -1
  };

  /**
   * Constants for {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/filesystemobject-object|FileSystemObject object (FSO)}.
   *
   * @namespace fso
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.fso */
  CD.fso = {
    /**
     * Indicates whether a new file can be created if the specified filename doesn't exist. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method|OpenTextFile method}.
     *
     * @namespace creates
     * @memberof Wsh.Constants.fso
     */
    /** @lends Wsh.Constants.fso.creates */
    creates: {
      /** @constant {boolean} */
      yes: true,
      /** @constant {boolean} */
      no: false,
      /** @constant {boolean} */
      def: true
    },

    /**
     * Indicates input/output mode. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method|OpenTextFile method}.
     *
     * @namespace ioModes
     * @memberof Wsh.Constants.fso
     */
    /** @lends Wsh.Constants.fso.ioModes */
    ioModes: {
      /** @constant {number} */
      forReading: 1,
      /** @constant {number} */
      forWriting: 2,
      /** @constant {number} */
      forAppending: 8
    },

    /**
     * indicates the format of the opened file. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method|OpenTextFile method}.
     *
     * @namespace formats
     * @memberof Wsh.Constants.fso
     */
    /** @lends Wsh.Constants.fso.formats */
    formats: {
      /** @constant {number} */
      def: -2,
      /** @constant {number} */
      unicode: -1,
      /** @constant {number} */
      ascii: 0
    },

    /**
     * Indicates if existing files are to be overwritten. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/copyfile-method|CoyFile method} and so on.
     *
     * @namespace overwrites
     * @memberof Wsh.Constants.fso
     */
    /** @lends Wsh.Constants.fso.overwrites */
    overwrites: {
      /** @constant {boolean} */
      yes: true,
      /** @constant {boolean} */
      no: false,
      /** @constant {boolean} */
      def: true
    },

    /**
     * Indicates that files with read-only attribute set are to be deleted. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/deletefile-method|DeleteFile method} and so on.
     *
     * @namespace force
     * @memberof Wsh.Constants.fso
     */
    /** @lends Wsh.Constants.fso.force */
    force: {
      /** @constant {boolean} */
      yes: true,
      /** @constant {boolean} */
      no: false,
      /** @constant {boolean} */
      def: false
    }
  };

  /**
   * Constants for {@link https://docs.microsoft.com/en-us/sql/ado/microsoft-activex-data-objects-ado?view=sql-server-ver15|Microsoft ActiveX Data Objects (ADO)}.
   *
   * @namespace ado
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.ado */
  CD.ado = {
    /**
     * The types of data stored in a Stream object. {@link https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/streamtypeenum|StreamTypeEnum}.
     *
     * @namespace types
     * @memberof Wsh.Constants.ado
     */
    /** @lends Wsh.Constants.ado.types */
    types: {
      /** @constant {number} */
      binary: 1,
      /** @constant {number} */
      text: 2
    },

    /**
     * Whether the shole stream or the next line shoud be read from a Stream object. {@link https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/streamreadenum|StreamReadEnum}.
     *
     * @namespace reads
     * @memberof Wsh.Constants.ado
     */
    /** @lends Wsh.Constants.ado.reads */
    reads: {
      /** @constant {number} */
      all: -1,
      /** @constant {number} */
      line: -2
    },

    /**
     * Whether a line separator is appended to the string written to a Stream object.. {@link https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/streamwriteenum|StreamWriteEnum}.
     *
     * @namespace writes
     * @memberof Wsh.Constants.ado
     */
    /** @lends Wsh.Constants.ado.writes */
    writes: {
      /** @constant {number} */
      char: 0,
      /** @constant {number} */
      line: 1
    },

    /**
     * Whether a file should be created or overwritten when saving from a Stream object. {@link https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/saveoptionsenum|SaveOptionsEnum}.
     *
     * @namespace saveCreates
     * @memberof Wsh.Constants.ado
     */
    /** @lends Wsh.Constants.ado.saveCreates */
    saveCreates: {
      /** @constant {number} */
      notExist: 1,
      /** @constant {number} */
      overWrite: 2
    },

    /**
     * {@link https://docs.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/charset-property-ado|Charset}. All Charset -> HKEY_CLASSES_ROOT\Mime\Database\Charset\
     *
     * @namespace charset
     * @memberof Wsh.Constants.ado
     */
    /** @lends Wsh.Constants.ado.charset */
    charset: {
      /** @constant {string} */
      latin1: 'iso-8859-1', // 1 Byte character
      /** @constant {string} */
      utf8: 'utf-8',
      /** @constant {string} */
      utf16: 'Unicode',
      /** @constant {string} */
      sjis: 'shift_jis'
    }
  };

  /**
   * The standardStreamTypes. Used to {@link https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/windows-scripting/y6hbz9es(v=vs.84)?redirectedfrom=MSDN|GetStandardStream method}.
   *
   * @namespace stdTypes
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.stdTypes */
  CD.stdTypes = {
    /** @constant {number} */
    input: 0, // @NOTE Defining `in:` occures JScript Error
    /** @constant {number} */
    out: 1,
    /** @constant {number} */
    err: 2
  };

  /**
   * The folder specs. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/getspecialfolder-method|GetSpecialFolder method}.
   *
   * @namespace folderSpecs
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.folderSpecs */
  CD.folderSpecs = {
    /** @constant {number} */
    windows: 0,
    /** @constant {number} */
    system: 1,
    /** @constant {number} */
    temporary: 2
  };

  /**
   * Drive types {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/drivetype-property|Microsoft}. Used to {@link https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/drivetype-property|Drives property}.
   *
   * @namespace driveTypes
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.driveTypes */
  CD.driveTypes = {
    /** @constant {number} */
    unknown: 0,
    /** @constant {number} */
    removable: 1,
    /** @constant {number} */
    fixed: 2,
    /** @constant {number} */
    network: 3,
    /** @constant {number} */
    cdrom: 4,
    /** @constant {number} */
    ramDisk: 5
  };

  /**
   * Code Page Identifiers. {@link https://docs.microsoft.com/en-us/windows/win32/intl/code-page-identifiers|Microsoft Docs}
   *
   * @namespace codePageIdentifiers
   * @memberof Wsh.Constants
   */
  /** @lends Wsh.Constants.codePageIdentifiers */
  CD.codePageIdentifiers = {
    '037': 'IBM037', // IBM EBCDIC US-Canada
    '437': 'IBM437', // OEM United States
    '500': 'IBM500', // IBM EBCDIC International
    '708': 'ASMO-708', // Arabic (ASMO 708)
    '720': 'DOS-720', // Arabic (Transparent ASMO); Arabic (DOS)
    '737': 'ibm737', // OEM Greek (formerly 437G); Greek (DOS)
    '775': 'ibm775', // OEM Baltic; Baltic (DOS)
    '850': 'ibm850', // OEM Multilingual Latin 1; Western European (DOS)
    '852': 'ibm852', // OEM Latin 2; Central European (DOS)
    '855': 'IBM855', // OEM Cyrillic (primarily Russian)
    '857': 'ibm857', // OEM Turkish; Turkish (DOS)
    '858': 'IBM00858', // OEM Multilingual Latin 1 + Euro symbol
    '860': 'IBM860', // OEM Portuguese; Portuguese (DOS)
    '861': 'ibm861', // OEM Icelandic; Icelandic (DOS)
    '862': 'DOS-862', // OEM Hebrew; Hebrew (DOS)
    '863': 'IBM863', // OEM French Canadian; French Canadian (DOS)
    '864': 'IBM864', // OEM Arabic; Arabic (864)
    '865': 'IBM865', // OEM Nordic; Nordic (DOS)
    '866': 'cp866', // OEM Russian; Cyrillic (DOS)
    '869': 'ibm869', // OEM Modern Greek; Greek, Modern (DOS)
    '870': 'IBM870', // IBM EBCDIC Multilingual/ROECE (Latin 2); IBM EBCDIC Multilingual Latin 2
    '874': 'windows-874', // ANSI/OEM Thai (ISO 8859-11); Thai (Windows)
    '875': 'cp875', // IBM EBCDIC Greek Modern
    '932': 'shift_jis', // ANSI/OEM Japanese; Japanese (Shift-JIS)
    '936': 'gb2312', // ANSI/OEM Simplified Chinese (PRC, Singapore); Chinese Simplified (GB2312)
    '949': 'ks_c_5601-1987', // ANSI/OEM Korean (Unified Hangul Code)
    '950': 'big5', // ANSI/OEM Traditional Chinese (Taiwan; Hong Kong SAR, PRC); Chinese Traditional (Big5)
    '1026': 'IBM1026', // IBM EBCDIC Turkish (Latin 5)
    '1047': 'IBM01047', // IBM EBCDIC Latin 1/Open System
    '1140': 'IBM01140', // IBM EBCDIC US-Canada (037 + Euro symbol); IBM EBCDIC (US-Canada-Euro)
    '1141': 'IBM01141', // IBM EBCDIC Germany (20273 + Euro symbol); IBM EBCDIC (Germany-Euro)
    '1142': 'IBM01142', // IBM EBCDIC Denmark-Norway (20277 + Euro symbol); IBM EBCDIC (Denmark-Norway-Euro)
    '1143': 'IBM01143', // IBM EBCDIC Finland-Sweden (20278 + Euro symbol); IBM EBCDIC (Finland-Sweden-Euro)
    '1144': 'IBM01144', // IBM EBCDIC Italy (20280 + Euro symbol); IBM EBCDIC (Italy-Euro)
    '1145': 'IBM01145', // IBM EBCDIC Latin America-Spain (20284 + Euro symbol); IBM EBCDIC (Spain-Euro)
    '1146': 'IBM01146', // IBM EBCDIC United Kingdom (20285 + Euro symbol); IBM EBCDIC (UK-Euro)
    '1147': 'IBM01147', // IBM EBCDIC France (20297 + Euro symbol); IBM EBCDIC (France-Euro)
    '1148': 'IBM01148', // IBM EBCDIC International (500 + Euro symbol); IBM EBCDIC (International-Euro)
    '1149': 'IBM01149', // IBM EBCDIC Icelandic (20871 + Euro symbol); IBM EBCDIC (Icelandic-Euro)
    '1200': 'utf-16', // Unicode UTF-16, little endian byte order (BMP of ISO 10646); available only to managed applications
    '1201': 'unicodeFFFE', // Unicode UTF-16, big endian byte order; available only to managed applications
    '1250': 'windows-1250', // ANSI Central European; Central European (Windows)
    '1251': 'windows-1251', // ANSI Cyrillic; Cyrillic (Windows)
    '1252': 'windows-1252', // ANSI Latin 1; Western European (Windows)
    '1253': 'windows-1253', // ANSI Greek; Greek (Windows)
    '1254': 'windows-1254', // ANSI Turkish; Turkish (Windows)
    '1255': 'windows-1255', // ANSI Hebrew; Hebrew (Windows)
    '1256': 'windows-1256', // ANSI Arabic; Arabic (Windows)
    '1257': 'windows-1257', // ANSI Baltic; Baltic (Windows)
    '1258': 'windows-1258', // ANSI/OEM Vietnamese; Vietnamese (Windows)
    '1361': 'Johab', // Korean (Johab)
    '10000': 'macintosh', // MAC Roman; Western European (Mac)
    '10001': 'x-mac-japanese', // Japanese (Mac)
    '10002': 'x-mac-chinesetrad', // MAC Traditional Chinese (Big5); Chinese Traditional (Mac)
    '10003': 'x-mac-korean', // Korean (Mac)
    '10004': 'x-mac-arabic', // Arabic (Mac)
    '10005': 'x-mac-hebrew', // Hebrew (Mac)
    '10006': 'x-mac-greek', // Greek (Mac)
    '10007': 'x-mac-cyrillic', // Cyrillic (Mac)
    '10008': 'x-mac-chinesesimp', // MAC Simplified Chinese (GB 2312); Chinese Simplified (Mac)
    '10010': 'x-mac-romanian', // Romanian (Mac)
    '10017': 'x-mac-ukrainian', // Ukrainian (Mac)
    '10021': 'x-mac-thai', // Thai (Mac)
    '10029': 'x-mac-ce', // MAC Latin 2; Central European (Mac)
    '10079': 'x-mac-icelandic', // Icelandic (Mac)
    '10081': 'x-mac-turkish', // Turkish (Mac)
    '10082': 'x-mac-croatian', // Croatian (Mac)
    '12000': 'utf-32', // Unicode UTF-32, little endian byte order; available only to managed applications
    '12001': 'utf-32BE', // Unicode UTF-32, big endian byte order; available only to managed applications
    '20000': 'x-Chinese_CNS', // CNS Taiwan; Chinese Traditional (CNS)
    '20001': 'x-cp20001', // TCA Taiwan
    '20002': 'x_Chinese-Eten', // Eten Taiwan; Chinese Traditional (Eten)
    '20003': 'x-cp20003', // IBM5550 Taiwan
    '20004': 'x-cp20004', // TeleText Taiwan
    '20005': 'x-cp20005', // Wang Taiwan
    '20105': 'x-IA5', // IA5 (IRV International Alphabet No. 5, 7-bit); Western European (IA5)
    '20106': 'x-IA5-German', // IA5 German (7-bit)
    '20107': 'x-IA5-Swedish', // IA5 Swedish (7-bit)
    '20108': 'x-IA5-Norwegian', // IA5 Norwegian (7-bit)
    '20127': 'us-ascii', // US-ASCII (7-bit)
    '20261': 'x-cp20261', // T.61
    '20269': 'x-cp20269', // ISO 6937 Non-Spacing Accent
    '20273': 'IBM273', // IBM EBCDIC Germany
    '20277': 'IBM277', // IBM EBCDIC Denmark-Norway
    '20278': 'IBM278', // IBM EBCDIC Finland-Sweden
    '20280': 'IBM280', // IBM EBCDIC Italy
    '20284': 'IBM284', // IBM EBCDIC Latin America-Spain
    '20285': 'IBM285', // IBM EBCDIC United Kingdom
    '20290': 'IBM290', // IBM EBCDIC Japanese Katakana Extended
    '20297': 'IBM297', // IBM EBCDIC France
    '20420': 'IBM420', // IBM EBCDIC Arabic
    '20423': 'IBM423', // IBM EBCDIC Greek
    '20424': 'IBM424', // IBM EBCDIC Hebrew
    '20833': 'x-EBCDIC-KoreanExtended', // IBM EBCDIC Korean Extended
    '20838': 'IBM-Thai', // IBM EBCDIC Thai
    '20866': 'koi8-r', // Russian (KOI8-R); Cyrillic (KOI8-R)
    '20871': 'IBM871', // IBM EBCDIC Icelandic
    '20880': 'IBM880', // IBM EBCDIC Cyrillic Russian
    '20905': 'IBM905', // IBM EBCDIC Turkish
    '20924': 'IBM00924', // IBM EBCDIC Latin 1/Open System (1047 + Euro symbol)
    '20932': 'EUC-JP', // Japanese (JIS 0208-1990 and 0212-1990)
    '20936': 'x-cp20936', // Simplified Chinese (GB2312); Chinese Simplified (GB2312-80)
    '20949': 'x-cp20949', // Korean Wansung
    '21025': 'cp1025', // IBM EBCDIC Cyrillic Serbian-Bulgarian
    '21866': 'koi8-u', // Ukrainian (KOI8-U); Cyrillic (KOI8-U)
    '28591': 'iso-8859-1', // ISO 8859-1 Latin 1; Western European (ISO)
    '28592': 'iso-8859-2', // ISO 8859-2 Central European; Central European (ISO)
    '28593': 'iso-8859-3', // ISO 8859-3 Latin 3
    '28594': 'iso-8859-4', // ISO 8859-4 Baltic
    '28595': 'iso-8859-5', // ISO 8859-5 Cyrillic
    '28596': 'iso-8859-6', // ISO 8859-6 Arabic
    '28597': 'iso-8859-7', // ISO 8859-7 Greek
    '28598': 'iso-8859-8', // ISO 8859-8 Hebrew; Hebrew (ISO-Visual)
    '28599': 'iso-8859-9', // ISO 8859-9 Turkish
    '28603': 'iso-8859-13', // ISO 8859-13 Estonian
    '28605': 'iso-8859-15', // ISO 8859-15 Latin 9
    '29001': 'x-Europa', // Europa 3
    '38598': 'iso-8859-8-i', // ISO 8859-8 Hebrew; Hebrew (ISO-Logical)
    '50220': 'iso-2022-jp', // ISO 2022 Japanese with no halfwidth Katakana; Japanese (JIS)
    '50221': 'csISO2022JP', // ISO 2022 Japanese with halfwidth Katakana; Japanese (JIS-Allow 1 byte Kana)
    '50222': 'iso-2022-jp', // ISO 2022 Japanese JIS X 0201-1989; Japanese (JIS-Allow 1 byte Kana - SO/SI)
    '50225': 'iso-2022-kr', // ISO 2022 Korean
    '50227': 'x-cp50227', // ISO 2022 Simplified Chinese; Chinese Simplified (ISO 2022)
    '51932': 'euc-jp', // EUC Japanese
    '51936': 'EUC-CN', // EUC Simplified Chinese; Chinese Simplified (EUC)
    '51949': 'euc-kr', // EUC Korean
    '52936': 'hz-gb-2312', // HZ-GB2312 Simplified Chinese; Chinese Simplified (HZ)
    '54936': 'GB18030', // Windows XP and later: GB18030 Simplified Chinese (4 byte); Chinese Simplified (GB18030)
    '57002': 'x-iscii-de', // ISCII Devanagari
    '57003': 'x-iscii-be', // ISCII Bangla
    '57004': 'x-iscii-ta', // ISCII Tamil
    '57005': 'x-iscii-te', // ISCII Telugu
    '57006': 'x-iscii-as', // ISCII Assamese
    '57007': 'x-iscii-or', // ISCII Odia
    '57008': 'x-iscii-ka', // ISCII Kannada
    '57009': 'x-iscii-ma', // ISCII Malayalam
    '57010': 'x-iscii-gu', // ISCII Gujarati
    '57011': 'x-iscii-pa', // ISCII Punjabi
    '65000': 'utf-7', // Unicode (UTF-7)
    '65001': 'utf-8' // Unicode (UTF-8)
  };
})();
