import Input from "@/components/atoms/Input/Input"
import Typography from "@/components/atoms/Typography/Typography"
import { Resolve } from "@/utils/types"
import { ComponentProps, FC } from "react"
import { View } from "react-native"

type Props = {
  title: string
}

const FormInput: FC<Resolve<Props> & ComponentProps<typeof Input>> = ({
  title,
  ...inputProps
}) => {
  return (
    <View>
      <Typography color="theme" fontSize={10} letterSpacing={1} bold>
        {title.toUpperCase()}
      </Typography>
      <Input {...inputProps} />
    </View>
  )
}

export default FormInput
