import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Svg1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M17 8V5a1 1 0 00-1-1H6a2 2 0 000 4h12a1 1 0 011 1v3m0 4v3a1 1 0 01-1 1H6a2 2 0 01-2-2V6" />
      <Path d="M20 12v4h-4a2 2 0 010-4h4" />
    </Svg>
  )
}

export default Svg1
