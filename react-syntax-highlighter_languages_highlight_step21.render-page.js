exports.ids = ["react-syntax-highlighter_languages_highlight_step21"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  var STEP21_KEYWORDS = {
    keyword: 'HEADER ENDSEC DATA'
  };
  var STEP21_START = {
    className: 'meta',
    begin: 'ISO-10303-21;',
    relevance: 10
  };
  var STEP21_CLOSE = {
    className: 'meta',
    begin: 'END-ISO-10303-21;',
    relevance: 10
  };

  return {
    aliases: ['p21', 'step', 'stp'],
    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
    lexemes: STEP21_IDENT_RE,
    keywords: STEP21_KEYWORDS,
    contains: [
      STEP21_START,
      STEP21_CLOSE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT('/\\*\\*!', '\\*/'),
      hljs.C_NUMBER_MODE,
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'string',
        begin: "'", end: "'"
      },
      {
        className: 'symbol',
        variants: [
          {
            begin: '#', end: '\\d+',
            illegal: '\\W'
          }
        ]
      }
    ]
  };
};

/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_step21.render-page.js.map