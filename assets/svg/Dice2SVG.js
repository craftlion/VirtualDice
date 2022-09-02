import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { View } from "react-native";

const Dice2 = (props) => (
  <View style={{ flex:1}}>
    <Svg width="100%"
      height="100%"
      viewBox={'0 0 22 22'}
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect
      style={{
        fill: "white",
        fillOpacity: 1,
        stroke: "white",
        strokeWidth: 0,
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        strokeMiterlimit: 0,
        strokeDasharray: "none",
        paintOrder: "markers fill stroke",
      }}
      width={19.838}
      height={19.396}
      x={0.979}
      y={1.302}
      rx={0}
      ry={0}
    />
    <Path
      d="M16.2 13.943a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4.055 6.055a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 0a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm16 2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      fill="black"
    />
    </Svg>
    </View>
);

export default Dice2