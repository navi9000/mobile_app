import { LinkProps, useLocalSearchParams } from "expo-router"
import { FC } from "react"
import Animated, { SlideInLeft } from "react-native-reanimated"
import { Link } from "expo-router"
import { Resolve } from "@/utils/types"
import Typography from "@/components/atoms/Typography/Typography"

type Props = {
  href: LinkProps["href"]
  title: string
  index: number
}

const NavItem: FC<Resolve<Props>> = ({ href, title, index }) => {
  const { activePathname } = useLocalSearchParams()
  const isActive = activePathname === href

  return (
    <Animated.View entering={SlideInLeft.duration(500).delay(index * 100)}>
      <Link
        href={href}
        style={isActive ? { pointerEvents: "none" } : undefined}
      >
        <Typography
          fontSize={35}
          letterSpacing={-0.5}
          bold
          color={isActive ? "theme10" : "white"}
        >
          {title}
        </Typography>
      </Link>
    </Animated.View>
  )
}

export default NavItem
