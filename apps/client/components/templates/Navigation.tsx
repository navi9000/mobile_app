import { FC } from "react"
import { GestureResponderEvent, StyleSheet, View } from "react-native"
import NavItem from "../molecules/NavItem/NavItem"
import LogoutButton from "../molecules/LogoutButton/LogoutButton"
import { NavigationItem, Resolve } from "@/utils/types"

type Props = {
  navigationItems: NavigationItem[]
  user: {
    fullName: string
    avatar: string
  }
  logout: (event: GestureResponderEvent) => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },
})

const NavigationTemplate: FC<Resolve<Props>> = ({
  navigationItems,
  user,
  logout,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {navigationItems.map((item, index) => (
          <NavItem key={index} index={index} {...item} />
        ))}
      </View>
      <LogoutButton
        source={user.avatar}
        name={user.fullName}
        onPress={logout}
      />
    </View>
  )
}

export default NavigationTemplate
