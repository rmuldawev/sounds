import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const PlayIcon = (props: SvgProps) => (
  <Svg
    width={54}
    height={54}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{borderRadius: 27, overflow: 'hidden'}}
    {...props}>
    <Path d="m5 3 14 9-14 9V3z" />
  </Svg>
);
export default PlayIcon;
