import { ImageSourcePropType } from "react-native"

export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }

export type Message = {
  author: string
  authorImage: ImageSourcePropType
  text: string
  timePassed: string
}
