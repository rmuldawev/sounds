import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const Stop = (props: SvgProps) => (
  <Svg
    width={54}
    height={54}
    fill="none"
    stroke="#ffffff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M9 9h6v6H9z" />
  </Svg>
);
export default Stop;
