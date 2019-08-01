'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

var _ColorWheel = _interopRequireDefault(require('./ColorWheel'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var useStyles = (0, _reactJss.createUseStyles)({
  root: function root(props) {
    var rootStyles = {
      display: 'inline-block',
      padding: 3,
      margin: 3,
      borderRadius: '50%',
      height: props.size,
      boxShadow: props.selected ? '0 0 0 1.5px #00A7E1' : 'none',
    };

    if (props.onMouseEnter && !props.selected) {
      Object.assign(rootStyles, {
        '&:hover': {
          boxShadow: '0 0 0 1.5px lightgrey',
        },
      });
    }

    return rootStyles;
  },
});

var ColorAttribute = function ColorAttribute(_ref) {
  var colors = _ref.colors,
    selected = _ref.selected,
    size = _ref.size,
    id = _ref.id,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onClick = _ref.onClick;
  var classes = useStyles({
    size: size,
    selected: selected,
    onMouseEnter: onMouseEnter,
  });
  return _react['default'].createElement(
    'div',
    {
      className: classes.root,
      onMouseEnter: onMouseEnter
        ? function() {
            return onMouseEnter(id);
          }
        : undefined,
      onMouseLeave: onMouseLeave
        ? function() {
            return onMouseLeave(id);
          }
        : undefined,
      onClick: onClick
        ? function() {
            return onClick(id);
          }
        : undefined,
    },
    _react['default'].createElement(_ColorWheel['default'], {
      colors: colors,
      size: size,
      onClick: onClick,
    })
  );
};

ColorAttribute.defaultProps = {
  size: 32,
};
var _default = ColorAttribute;
exports['default'] = _default;
