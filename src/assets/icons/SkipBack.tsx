import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SkipBack = (props: SvgProps) => (
  <Svg
    width={54} // изменяем ширину на 48
    height={54} // изменяем высоту на 48
    fill="none"
    stroke="#ffffff"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M19 20 9 12l10-8v16zM5 19V5" />
  </Svg>
);
export default SkipBack;
