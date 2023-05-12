import * as React from 'react';
import Svg, {SvgProps, Rect, Circle, Path} from 'react-native-svg';
const ToggleImage = (props: SvgProps) => {
  const originalWidth = 24;
  const originalHeight = 24;
  const width = 48;
  const height = 28;
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="-2.5 0 40 26"
      {...props}>
      <Rect width={28} height={18} x={3} y={3} rx={2} ry={2} />
      <Circle cx={8.5} cy={8.5} r={1.5} />
      <Path d="m21 15-5-5L5 21" />
    </Svg>
  );
};
export default ToggleImage;
