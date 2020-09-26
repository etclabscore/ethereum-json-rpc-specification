exports.ids = ["react-syntax-highlighter_languages_highlight_nix"];
exports.modules = {

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NIX_KEYWORDS = {
    keyword:
      'rec with let in inherit assert if else then',
    literal:
      'true false or and null',
    built_in:
      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
      'toString derivation'
  };
  var ANTIQUOTE = {
    className: 'subst',
    begin: /\$\{/,
    end: /}/,
    keywords: NIX_KEYWORDS
  };
  var ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: /\S+/
      }
    ]
  };
  var STRING = {
    className: 'string',
    contains: [ANTIQUOTE],
    variants: [
      {begin: "''", end: "''"},
      {begin: '"', end: '"'}
    ]
  };
  var EXPRESSIONS = [
    hljs.NUMBER_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING,
    ATTRS
  ];
  ANTIQUOTE.contains = EXPRESSIONS;
  return {
    aliases: ["nixos"],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
  };
};

/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nix.render-page.js.map