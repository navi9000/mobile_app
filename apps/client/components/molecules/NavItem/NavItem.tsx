import { LinkProps, usePathname } from "expo-router"
import { FC } from "react"
import Animated, { SlideInLeft } from "react-native-reanimated"
import { Link } from "expo-router"
import { Resolve } from "@/utils/types"
import Typography from "@/components/atoms/Typography/Typography"

type Props = {
  href: LinkProps["href"]
  onPress: LinkProps["onPress"]
  title: string
  index: number
}

const NavItem: FC<Resolve<Props>> = ({ href, onPress, title, index }) => {
  const currentPathname = usePathname()
  const isActive = currentPathname === href

  return (
    <Animated.View entering={SlideInLeft.duration(500).delay(index * 100)}>
      <Link
        href={href}
        onPress={isActive ? undefined : onPress}
        disabled={isActive}
      >
        <Typography size="header" color={isActive ? "theme" : "white"}>
          {title}
        </Typography>
      </Link>
    </Animated.View>
  )
}

export default NavItem
