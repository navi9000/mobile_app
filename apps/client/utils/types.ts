import { LinkProps } from "expo-router"
import { ImageSourcePropType } from "react-native"

export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }

export type Message = {
  author: string
  authorImage: string
  text: string
  timePassed: string
}

export interface UserProfile {
  id: number
  first_name: string
  last_name: string
  location: string | null
  occupation: string | null
  user_photo: string | null
}

export type NavigationItem = {
  title: string
  href: LinkProps["href"]
}
