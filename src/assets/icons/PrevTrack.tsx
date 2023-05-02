import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PrevTrack({props}: any) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 18l-6-6 6-6"
        stroke="#a3ccf5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PrevTrack;
