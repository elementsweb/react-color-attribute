import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ColorAttribute from '../src/ColorAttribute';

const MultipleColorAttributes = () => {
  const [colour, setColor] = useState('orange');

  return (
    <>
      <ColorAttribute
        colors={['#FF8C42']}
        id="orange"
        selected={colour === 'orange'}
        onMouseEnter={action('mouseEnter')}
        onClick={(id) => setColor(id)}
      />
      <ColorAttribute
        colors={['#FF3C38']}
        id="red"
        selected={colour === 'red'}
        onMouseEnter={action('mouseEnter')}
        onClick={(id) => setColor(id)}
      />
      <ColorAttribute
        colors={['#A23E48']}
        id="brown"
        selected={colour === 'brown'}
        onMouseEnter={action('mouseEnter')}
        onClick={(id) => setColor(id)}
      />
      <ColorAttribute
        colors={['#276FBF', '#183059']}
        id="darkblue-blue"
        selected={colour === 'darkblue-blue'}
        onMouseEnter={action('mouseEnter')}
        onClick={(id) => setColor(id)}
      />
      <ColorAttribute
        colors={['#F03A47', '#F6F4F3', '#276FBF']}
        id="red-white-blue"
        selected={colour === 'red-white-blue'}
        onMouseEnter={action('mouseEnter')}
        onClick={(id) => setColor(id)}
      />

      <p>Color selected: {colour}</p>
    </>
  );
};

storiesOf('ColorAttribute', module)
  .add('multiple', () => <MultipleColorAttributes />)
  .add('single colour', () => (
    <ColorAttribute colors={['#F2FF49']} id="yellow" />
  ))
  .add('two colors', () => (
    <ColorAttribute colors={['#FFF', '#DA627D']} id="pink-white" />
  ))
  .add('three colors', () => (
    <ColorAttribute
      colors={['#094D92', '#68B684', '#95E06C']}
      id="blue-seagreen-limegreen"
    />
  ))
  .add('with mouse events', () => (
    <ColorAttribute
      colors={['#FFF', '#DA627D']}
      onClick={action('click')}
      onMouseEnter={action('mouseEnter')}
      onMouseLeave={action('mouseLeave')}
      id="pink-white"
    />
  ))
  .add('selected', () => (
    <>
      <ColorAttribute colors={['#FFF', '#DA627D']} selected />
    </>
  ))
  .add('mini', () => (
    <>
      <ColorAttribute colors={['#FFF', '#DA627D']} size={18} />
    </>
  ));
