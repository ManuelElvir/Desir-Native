import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SvgComponent({ width = 200, height = 200, color = 'white' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 99.79 107.42">
      <Path d="M100,109H0C16.63,108.64,91.66,93.7,99.79,1.55Z" transform="translate(0 -1.55)" fill={color}/>
    </Svg>
  );
}


