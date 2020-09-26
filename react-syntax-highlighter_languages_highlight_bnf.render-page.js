exports.ids = ["react-syntax-highlighter_languages_highlight_bnf"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bnf.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/bnf.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs){
  return {
    contains: [
      // Attribute
      {
        className: 'attribute',
        begin: /</, end: />/
      },
      // Specific
      {
        begin: /::=/,
        starts: {
          end: /$/,
          contains: [
            {
              begin: /</, end: />/
            },
            // Common
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ]
  };
};

/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_bnf.render-page.js.map