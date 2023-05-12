import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RepeatOn = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    stroke="yellow"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0.5 0 24 24"
    {...props}>
    <Path d="m17 1 4 4-4 4" />
    <Path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" />
    <Path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </Svg>
);
export default RepeatOn;
