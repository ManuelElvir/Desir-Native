import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SvgComponent({ width = 200, height = 200, color = 'white' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 99.79 107.42">
      <Path d="M.21.16,100-.18C83.37.16,8.34,15.1.21,107.24Z" transform="translate(-0.21 0.18)" fill={color}/>
    </Svg>
  );
}


