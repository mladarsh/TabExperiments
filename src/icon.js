import React from 'react'
import Svg, { G, Path, Ellipse } from 'react-native-svg'

const IconNavDrive = props => (
  <Svg width={42} height={33} {...props}>
    <G
      transform="translate(1 1)"
      fillRule="nonzero"
      stroke="#FFF"
      strokeWidth={2}
      fill="none"
    >
      <Path
        d="M6.857 28.13L3.43 30.426C.762 26.599-.191 21.815.57 16.074 1.714 7.463 9.143 0 20 0s17.714 8.324 18.857 16.074c.762 5.167.19 9.95-1.714 14.352l-4-2.296"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx={19.429} cy={19.519} rx={2.286} ry={2.296} />
      <Path
        d="M14.286 28.13h11.428M21.714 18.37l7.429-5.166"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 .574v4.593M9.714 3.444L12 6.89M2.857 10.907l4 2.297M.571 20.093h4.572M29.143 3.444L26.857 6.89M36 9.76l-4 2.87M33.714 20.093h4.572"
        strokeLinecap="round"
      />
    </G>
  </Svg>
)

export default IconNavDrive;