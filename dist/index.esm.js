import React from 'react';

function Button(_ref) {
  var text = _ref.text,
      color = _ref.color;
  return /*#__PURE__*/React.createElement("button", {
    color: color
  }, text);
}

export { Button };
