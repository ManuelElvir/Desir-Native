import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SvgComponent({ width = 200, height = 200, color = 'white' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 99.79 107.42">
      <Path d="M0,109H100C83.37,108.64,8.34,93.7.21,1.55Z" transform="translate(0 -1.55)" fill={color}/>
    </Svg>
  );
}


