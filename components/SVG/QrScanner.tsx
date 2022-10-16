import * as React from 'react';
import Svg, { Path} from 'react-native-svg';

export default function SvgComponent({width = 200, height = 200, color = 'white'}) {
  return (
    <Svg width={width} height={height} viewBox="-35 -35 400 600">
       <Path d="M358.3,498.11v25.17a24.5,24.5,0,0,1-24.49,24.49H316.69" transform="translate(-38.18 -40.4)" stroke={color} stroke-miterlimit="8" strokeWidth="5"/>
        <Path d="M326.09,42.4h7.72A24.5,24.5,0,0,1,358.3,66.9V84.68" transform="translate(-38.18 -40.4)" stroke={color} stroke-miterlimit="8" strokeWidth="5"/>
        <Path d="M40.18,74v-7a24.5,24.5,0,0,1,24.5-24.5H81.79" transform="translate(-38.18 -40.4)" stroke={color} stroke-miterlimit="8" strokeWidth="5"/>
        <Path d="M87.16,547.77H64.68a24.5,24.5,0,0,1-24.5-24.49V506.83" transform="translate(-38.18 -40.4)" stroke={color} stroke-miterlimit="8" strokeWidth="5"/>
      
    </Svg>
  );
}


