import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import ColorWheel from './ColorWheel';

const useStyles = createUseStyles({
  root: (props) => {
    const rootStyles = {
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

const ColorAttribute = ({
  colors,
  selected,
  size,
  id,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const classes = useStyles({ size, selected, onMouseEnter });

  return (
    <div
      className={classes.root}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(id) : undefined}
      onMouseLeave={onMouseLeave ? () => onMouseLeave(id) : undefined}
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <ColorWheel colors={colors} size={size} onClick={onClick} />
    </div>
  );
};

ColorAttribute.defaultProps = {
  size: 32,
  colors: [],
  selected: false,
};

ColorAttribute.propTypes = {
  /**
   * Valid CSS color to render in color attribute
   */
  colors: PropTypes.arrayOf(PropTypes.string),

  /**
   * Unique identifier for the color attribute
   */
  id: PropTypes.string,

  /**
   * Determines if the component should render in a selected state
   */
  selected: PropTypes.bool,

  /**
   * Callback to fire when mouse enters component
   */
  onMouseEnter: PropTypes.func,

  /**
   * Callback to fire when mouse leaves component
   */
  onMouseLeave: PropTypes.func,

  /**
   * Callback to fire when component is clicked
   */
  onMouseClick: PropTypes.func,
};

export default ColorAttribute;
