import * as React from "react"
import Svg, { Rect, Path, Text, TSpan } from "react-native-svg"
import { View } from "react-native";

const Dice0 = (props) => (
  <View style={{ flex: 1 }}>
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
        x={1.081}
        y={1.302}
        rx={0}
        ry={0}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3Zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
        fill="black"
      />
      <Text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "14.2707px",
          fontFamily: "Arial Rounded MT Bold",
          fill: "black",
          strokeWidth: 1.3379,
        }}
        x={6.476}
        y={16.543}
        transform="scale(1.03897 .96249)"
      >
        <TSpan
          x={6.476}
          y={16.543}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontFamily: "Arial Rounded MT Bold",
            strokeWidth: 1.3379,
          }}
        >
          {"?"}
        </TSpan>
      </Text>
    </Svg>
  </View>
);

export default Dice0