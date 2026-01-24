import { FC, PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"
import { Svg, Rect, Mask, G, Path } from "react-native-svg"

const styles = StyleSheet.create({
  container: {
    position: "relative",
    minWidth: 320,
    maxWidth: 740,
  },
  svg: {
    position: "absolute",
    height: "auto",
    width: "auto",
    top: 0,
    left: 0,
  },
})

const MainBackground: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg
        width="750"
        height="1334"
        viewBox="0 0 750 1334"
        fill="none"
        style={styles.svg}
      >
        <Rect width="750" height="1334" fill="#00A0FF" />
        <Mask
          id="mask0_0_3706"
          maskType="luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="750"
          height="1334"
        >
          <rect width="750" height="1334" fill="white" />
        </Mask>
        <G mask="url(#mask0_0_3706)">
          <Path
            opacity="0.1"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 43L750 793H0V43Z"
            fill="black"
          />
          <Rect opacity="0.1" y="793" width="750" height="540" fill="black" />
        </G>
      </Svg>
      {children}
    </View>
  )
}

export default MainBackground
