import { use } from "react"
import UserProfileContext from "./UserProfileContext"

export default function useUserProfile() {
  const context = use(UserProfileContext)
  if (!context) {
    throw "No user profile."
  }

  return context
}
