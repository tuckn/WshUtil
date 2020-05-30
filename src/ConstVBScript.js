/* eslint no-unused-vars:off */

/**
 * VBScript constant values
 */

// File Attributes -> used to GetFolder {{{
// https://docs.microsoft.com/en-us/previous-versions//ee332330(v=vs.85)
if (!FILE_ATTRIBUTE_ARCHIVE) var FILE_ATTRIBUTE_ARCHIVE = 32; // Shortcut?
if (!FILE_ATTRIBUTE_COMPRESSED) var FILE_ATTRIBUTE_COMPRESSED = 2048;
if (!FILE_ATTRIBUTE_DEVICE) var FILE_ATTRIBUTE_DEVICE = 64;
if (!FILE_ATTRIBUTE_DIRECTORY) var FILE_ATTRIBUTE_DIRECTORY = 16;
if (!FILE_ATTRIBUTE_FILE) var FILE_ATTRIBUTE_FILE = 17; // Winodows 10?
if (!FILE_ATTRIBUTE_ENCRYPTED) var FILE_ATTRIBUTE_ENCRYPTED = 16384;
if (!FILE_ATTRIBUTE_HIDDEN) var FILE_ATTRIBUTE_HIDDEN = 2;
if (!FILE_ATTRIBUTE_NORMAL) var FILE_ATTRIBUTE_NORMAL = 128;
if (!FILE_ATTRIBUTE_NOT_CONTENT_INDEXED) var FILE_ATTRIBUTE_NOT_CONTENT_INDEXED = 8192;
if (!FILE_ATTRIBUTE_OFFLINE) var FILE_ATTRIBUTE_OFFLINE = 4096;
if (!FILE_ATTRIBUTE_READONLY) var FILE_ATTRIBUTE_READONLY = 1;
if (!FILE_ATTRIBUTE_REPARSE_POINT) var FILE_ATTRIBUTE_REPARSE_POINT = 1024;
if (!FILE_ATTRIBUTE_SYMLINKD_DIR) var FILE_ATTRIBUTE_SYMLINKD_DIR = 1040; // ? Windows 10
if (!FILE_ATTRIBUTE_SYMLINKD_FILE) var FILE_ATTRIBUTE_SYMLINKD_FILE = 1056; // ? Windows 10
if (!FILE_ATTRIBUTE_SPARSE_FILE) var FILE_ATTRIBUTE_SPARSE_FILE = 512;
if (!FILE_ATTRIBUTE_SYSTEM) var FILE_ATTRIBUTE_SYSTEM = 4;
if (!FILE_ATTRIBUTE_TEMPORARY) var FILE_ATTRIBUTE_TEMPORARY = 256;
if (!FILE_ATTRIBUTE_VIRTUAL) var FILE_ATTRIBUTE_VIRTUAL = 65536;
// }}}

// @const MsgBox argument settings
// @link https://docs.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/msgbox-function
if (!vbOKOnly) var vbOKOnly = 0; // [OK]
if (!vbOKCancel) var vbOKCancel = 1; // [OK] [Cancel]
if (!vbAbortRetryIgnore) var vbAbortRetryIgnore = 2; // [Abort] [Retry] [Ignore]
if (!vbYesNoCancel) var vbYesNoCancel = 3; // [Yes] [No] [Cancel]
if (!vbYesNo) var vbYesNo = 4; // [Yes] [No]
if (!vbRetryCancel) var vbRetryCancel = 5; // [Retry] [Cancel]

// Icons
if (!vbCritical) var vbCritical = 16; // [Stop] Critical
if (!vbQuestion) var vbQuestion = 32; // [?] Question
if (!vbExclamation) var vbExclamation = 48; // [!] Warning
if (!vbInformation) var vbInformation = 64; // [i] Information

// Return
if (!vbOk) var vbOk = 1; // [OK] Button
if (!vbCancel) var vbCancel = 2; // [Cancel] Button
if (!vbAbort) var vbAbort = 3; // [Abort] Button
if (!vbRetry) var vbRetry = 4; // [Retry] Button
if (!vbIgnore) var vbIgnore = 5; // [Ignore] Button
if (!vbYes) var vbYes = 6; // [Yes] Button
if (!vbNo) var vbNo = 7; // [No] Button

// @const Color constants
// @link https://docs.microsoft.com/ja-jp/office/vba/language/reference/user-interface-help/color-constants
if (!vbBlack) var vbBlack = 0x0; // Black
if (!vbRed) var vbRed = 0xff; // Red
if (!vbGreen) var vbGreen = 0xff00; // Green
if (!vbYellow) var vbYellow = 0xffff; // Yellow
if (!vbBlue) var vbBlue = 0xff0000; // Blue
if (!vbMagenta) var vbMagenta = 0xff00ff; // Magenta
if (!vbCyan) var vbCyan = 0xffff00; // Cyan
if (!vbWhite) var vbWhite = 0xffffff; // White

// vim:set foldmethod=marker commentstring=//%s :
