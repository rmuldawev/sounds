import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Play = (props: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 48 48" {...props}>
    <Path d="M9 23.6c0 16.1.3 20.5 1.2 20.1 2.8-1 28.3-18.9 28.3-19.7 0-1-27.4-21-28.7-21-.5 0-.8 9.3-.8 20.6zm19.2-5.4c9 6.5 9.7 5-6.4 15.7L11 41V5.8l4.8 3.5c2.6 1.9 8.2 5.9 12.4 8.9z" />
  </Svg>
);
export default Play;
