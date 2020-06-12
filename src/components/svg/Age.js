import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Age(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#fff"
        d="M16.565 18.087H14.61V8.304a.652.652 0 00-.652-.652h-1.305v-.547a1.958 1.958 0 001.044-2.82l-1.131-1.96a.653.653 0 00-1.13 0l-1.13 1.96a1.957 1.957 0 001.043 2.82v.547h-1.305a.652.652 0 00-.652.652 1.959 1.959 0 01-1.956 1.957.652.652 0 00-.653.652v2.608c0 .36.292.653.653.653H9.39v3.913H7.435a.652.652 0 00-.653.652v2.609c0 .36.292.652.653.652h9.13c.36 0 .652-.292.652-.652v-2.609a.652.652 0 00-.652-.652zm-5.13-13.15l.565-.98.566.98a.653.653 0 11-1.132 0zm4.478 15.759H8.087V19.39h1.956c.36 0 .653-.292.653-.652v-5.217a.652.652 0 00-.653-.653H8.087V11.5a3.271 3.271 0 002.543-2.543h2.674v9.783c0 .36.292.652.653.652h1.956v1.305z"
      />
    </Svg>
  )
}

export default Age
