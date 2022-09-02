import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { View } from "react-native";

const Dice1 = (props) => (
  <View style={{ flex:1}}>
    <Svg width="100%"
      height="100%"
      viewBox={'0 0 24 24'}
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
      x={1.979}
      y={2.2}
      rx={0}
      ry={0}
    />
    <Path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="black" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.273A3.273 3.273 0 0 1 3.273 0h17.454A3.273 3.273 0 0 1 24 3.273v17.454A3.273 3.273 0 0 1 20.727 24H3.273A3.273 3.273 0 0 1 0 20.727Zm3.273-1.091h17.454c.603 0 1.091.488 1.091 1.09v17.455a1.09 1.09 0 0 1-1.09 1.091H3.272a1.09 1.09 0 0 1-1.091-1.09V3.272c0-.603.488-1.091 1.09-1.091z"
      fill="black"
      style={{
        strokeWidth: 1.09089,
      }}
    />
    </Svg>
    </View>
);

export default Dice1