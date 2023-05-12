import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ShuffleOff = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    stroke="#ffffff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="2 0 24 24"
    {...props}>
    <Path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </Svg>
);
export default ShuffleOff;
