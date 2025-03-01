'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Button(_ref) {
  var text = _ref.text,
      color = _ref.color;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    color: color
  }, text);
}

exports.Button = Button;
