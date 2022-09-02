import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { View } from "react-native";

const Dice0 = (props) => (
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
        x={1}
        y={1}
        rx={0}
        ry={0}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3Zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
        fill="black"
        style={{
          fill: "#000",
          fillOpacity: 1,
        }}
      />
    </Svg>
    </View>
);

export default Dice0