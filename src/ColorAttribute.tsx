import * as React from 'react';
import { createUseStyles } from 'react-jss';

import ColorWheel from './ColorWheel';

const useStyles = createUseStyles({
  root: (props: ColorAttributeProps) => {
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

interface ColorAttributeProps {
  colors: string[];
  id: string;
  size?: number;
  selected?: boolean;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  onClick?: Function;
}

const ColorAttribute = ({
  colors = [],
  selected = false,
  size = 32,
  id,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ColorAttributeProps): JSX.Element => {
  const classes = useStyles({ size, selected, onMouseEnter });

  return (
    <div
      className={classes.root}
      onMouseEnter={onMouseEnter ? () => onMouseEnter(id) : undefined}
      onMouseLeave={onMouseLeave ? () => onMouseLeave(id) : undefined}
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <ColorWheel colors={colors} size={size} />
    </div>
  );
};

export default ColorAttribute;
