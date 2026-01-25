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
      <Typography color="theme" size="tiny" bold>
        {title.toUpperCase()}
      </Typography>
      <Input {...inputProps} />
    </View>
  )
}

export default FormInput
