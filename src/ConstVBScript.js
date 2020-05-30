/**
 * @updated 2019/11/23
 * @file VBScript constant values
 * @fileencoding UTF-8[BOM, dos]
 * @requirements wscript.exe/cscript.exe
 * @license MIT
 * @links https://github.com/tuckn/WshModeJs
 * @author Tuckn
 * @email tuckn333+github@gmail.com
 */

/* eslint no-unused-vars:off */

// Global Values

// File Attributes -> used to GetFolder {{{
// https://docs.microsoft.com/en-us/previous-versions//ee332330(v=vs.85)
var FILE_ATTRIBUTE_ARCHIVE = 32; // Shortcut?
var FILE_ATTRIBUTE_COMPRESSED = 2048;
var FILE_ATTRIBUTE_DEVICE = 64;
var FILE_ATTRIBUTE_DIRECTORY = 16;
var FILE_ATTRIBUTE_FILE = 17; // Winodows 10?
var FILE_ATTRIBUTE_ENCRYPTED = 16384;
var FILE_ATTRIBUTE_HIDDEN = 2;
var FILE_ATTRIBUTE_NORMAL = 128;
var FILE_ATTRIBUTE_NOT_CONTENT_INDEXED = 8192;
var FILE_ATTRIBUTE_OFFLINE = 4096;
var FILE_ATTRIBUTE_READONLY = 1;
var FILE_ATTRIBUTE_REPARSE_POINT = 1024;
var FILE_ATTRIBUTE_SYMLINKD_DIR = 1040; // ? Windows 10
var FILE_ATTRIBUTE_SYMLINKD_FILE = 1056; // ? Windows 10
var FILE_ATTRIBUTE_SPARSE_FILE = 512;
var FILE_ATTRIBUTE_SYSTEM = 4;
var FILE_ATTRIBUTE_TEMPORARY = 256;
var FILE_ATTRIBUTE_VIRTUAL = 65536;
// }}}

// @const MsgBox argument settings
// @link https://docs.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/msgbox-function
var vbOKOnly = 0; // [OK]
var vbOKCancel = 1; // [OK] [Cancel]
var vbAbortRetryIgnore = 2; // [Abort] [Retry] [Ignore]
var vbYesNoCancel = 3; // [Yes] [No] [Cancel]
var vbYesNo = 4; // [Yes] [No]
var vbRetryCancel = 5; // [Retry] [Cancel]

// Icons
var vbCritical = 16; // [Stop] Critical
var vbQuestion = 32; // [?] Question
var vbExclamation = 48; // [!] Warning
var vbInformation = 64; // [i] Information

// Return
var vbOk = 1; // [OK] Button
var vbCancel = 2; // [Cancel] Button
var vbAbort = 3; // [Abort] Button
var vbRetry = 4; // [Retry] Button
var vbIgnore = 5; // [Ignore] Button
var vbYes = 6; // [Yes] Button
var vbNo = 7; // [No] Button

// @const Color constants
// @link https://docs.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/color-constants
var vbBlack = 0x0; // Black
var vbRed = 0xff; // Red
var vbGreen = 0xff00; // Green
var vbYellow = 0xffff; // Yellow
var vbBlue = 0xff0000; // Blue
var vbMagenta = 0xff00ff; // Magenta
var vbCyan = 0xffff00; // Cyan
var vbWhite = 0xffffff; // White

// vim:set foldmethod=marker commentstring=//%s :
