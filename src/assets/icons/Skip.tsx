import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Skip = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    stroke="#ffffff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <Path d="m5 4 10 8-10 8V4zM19 5v14" />
  </Svg>
);
export default Skip;
