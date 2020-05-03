import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: ({ size }: ColorWheelProps) => ({
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
  }),

  svg: {
    display: 'block',
    position: 'relative',
    transform: 'rotate(-0.25turn)',
  },
});

interface ColorWheelProps {
  colors: string[];
  size: number;
}

const ColorWheel = ({ colors, size = 32 }: ColorWheelProps): JSX.Element => {
  const classes = useStyles({ size });

  const numberOfSlices = colors.length;
  const percentPerSlice = 1 / numberOfSlices;

  let cumulativeRadians = 0;

  const calculatedColors = colors.map((colour) => {
    const startX = Math.cos(cumulativeRadians);
    const startY = Math.sin(cumulativeRadians);

    cumulativeRadians += 2 * Math.PI * percentPerSlice;

    const endX = Math.cos(cumulativeRadians);
    const endY = Math.sin(cumulativeRadians);

    const largeArcFlag = percentPerSlice > 0.5 ? 1 : 0;

    return {
      startX,
      startY,
      endX,
      endY,
      largeArcFlag,
      colour,
    };
  });

  return (
    <div className={classes.root}>
      <svg
        height={size}
        width={size}
        viewBox="-1 -1 2 2"
        className={classes.svg}
      >
        {calculatedColors.map((slice) => (
          <path
            d={`M ${slice.startX} ${slice.startY} A 1 1 0 ${
              slice.largeArcFlag
            } 1 ${slice.endX} ${slice.endY} L 0 0`}
            fill={slice.colour}
            key={slice.colour}
          />
        ))}
      </svg>
    </div>
  );
};

export default ColorWheel;
