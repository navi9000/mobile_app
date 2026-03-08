import { FC, useState } from "react"
import Container from "../atoms/Container/Container"
import { StyleSheet, View } from "react-native"
import Avatar from "../atoms/Avatar/Avatar"
import Typography from "../atoms/Typography/Typography"
import FormInput from "../molecules/FormInput/FormInput"
import useUserProfile from "@/features/userProfile/useUserProfile"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    paddingBottom: 0,
  },
  inlay: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  firstBlock: {
    flex: 1,
  },
  avatarSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  updatePhotoContainer: {
    width: "auto",
    paddingBlock: 17,
    justifyContent: "center",
  },
  textInputSection: {
    gap: 34,
  },

  blackBackground: {
    position: "absolute",
    height: "67%",
    width: "100%",
    left: 0,
    bottom: 0,
    backgroundColor: "#000000",
    zIndex: -1,
  },
})

const SettingsTemplate: FC = () => {
  const { id, first_name, last_name } = useUserProfile()
  const source = require("@/assets/images/provided_avatar.png")

  const [firstNameInput, setFirstNameInput] = useState(first_name)
  const [lastNameInput, setLastNameInput] = useState(last_name)
  return (
    <Container variant="default" style={styles.screen}>
      <View style={styles.inlay}>
        <View style={styles.firstBlock}>
          <View style={styles.avatarSection}>
            <Avatar source={source} size="md" />
            <Container variant="form" style={styles.updatePhotoContainer}>
              <Typography>Update photo</Typography>
            </Container>
          </View>
          <Container variant="form" style={styles.textInputSection}>
            <FormInput
              title="First name"
              value={firstNameInput}
              onChangeText={setFirstNameInput}
            />
            <FormInput
              title="Last name"
              value={lastNameInput}
              onChangeText={setLastNameInput}
            />
          </Container>
        </View>
      </View>

      <View style={styles.blackBackground} />
    </Container>
  )
}

export default SettingsTemplate
