import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
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
    <Path
      d="M7.103 9.067C7.131 7.82 8.118 6.785 9.25 6.384c1.192-.396 2.595-.308 3.654.403 1.034.664 1.516 2.145.894 3.24-.422.765-1.17 1.261-1.783 1.86-.371.31-.661.727-.722 1.217-.018.498-.421 1.02-.954.923-.513-.014-.826-.58-.767-1.054-.018-.778.388-1.5.963-2 .497-.524 1.167-.905 1.514-1.557.35-.706-.18-1.584-.92-1.738-.645-.152-1.457-.018-1.802.612-.32.422-.344.995-.686 1.398-.464.502-1.397.197-1.52-.464l-.013-.078Zm3.4 7.637c-.543.024-1.074-.423-1.057-.985-.068-.65.585-1.21 1.217-1.088.632.065 1.032.777.835 1.364-.117.427-.561.715-.994.709z"
      transform="scale(1.03897 .96249)"
      aria-label="?"
      style={{
        fill: "black",
        fillOpacity:0.25,
        strokeWidth: 1.3379,
      }}
    />
    </Svg>
  </View>
);

export default Dice0