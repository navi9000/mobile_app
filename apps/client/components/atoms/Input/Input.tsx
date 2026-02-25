import type { FC } from "react"
import { StyleSheet, TextInput, type TextInputProps } from "react-native"

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    paddingBlock: 14,
    borderRadius: 0,
    borderColor: "transparent",
    borderBottomColor: "#000",
    borderWidth: 1,
    width: "100%",
  },
})

const Input: FC<TextInputProps> = ({ style, ...rest }) => {
  return <TextInput style={[styles.input, style]} {...rest} />
}

export default Input
