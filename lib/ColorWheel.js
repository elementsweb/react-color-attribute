'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _reactJss = require('react-jss');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var useStyles = (0, _reactJss.createUseStyles)({
  root: function root(_ref) {
    var size = _ref.size;
    return {
      width: size,
      height: size,
      position: 'relative',
      '&:after': {
        content: '""',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 1px inset',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        display: 'block',
      },
    };
  },
  svg: {
    display: 'block',
    position: 'relative',
    transform: 'rotate(-0.25turn)',
  },
});

var ColorWheel = function ColorWheel(_ref2) {
  var colors = _ref2.colors,
    size = _ref2.size;
  var classes = useStyles({
    size: size,
  });
  var numberOfSlices = colors.length;
  var percentPerSlice = 1 / numberOfSlices;
  var cumulativeRadians = 0;
  var calculatedColors = colors.map(function(colour) {
    var startX = Math.cos(cumulativeRadians);
    var startY = Math.sin(cumulativeRadians);
    cumulativeRadians += 2 * Math.PI * percentPerSlice;
    var endX = Math.cos(cumulativeRadians);
    var endY = Math.sin(cumulativeRadians);
    var largeArcFlag = percentPerSlice > 0.5 ? 1 : 0;
    return {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      largeArcFlag: largeArcFlag,
      colour: colour,
    };
  });
  return _react['default'].createElement(
    'div',
    {
      className: classes.root,
    },
    _react['default'].createElement(
      'svg',
      {
        height: size,
        width: size,
        viewBox: '-1 -1 2 2',
        className: classes.svg,
      },
      calculatedColors.map(function(slice) {
        return _react['default'].createElement('path', {
          d: 'M '
            .concat(slice.startX, ' ')
            .concat(slice.startY, ' A 1 1 0 ')
            .concat(slice.largeArcFlag, ' 1 ')
            .concat(slice.endX, ' ')
            .concat(slice.endY, ' L 0 0'),
          fill: slice.colour,
          key: slice.colour,
        });
      })
    )
  );
};

ColorWheel.defaultProps = {
  size: 32,
};
var _default = ColorWheel;
exports['default'] = _default;
