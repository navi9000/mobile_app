import { FC, PropsWithChildren } from "react"
import UserProfileContext from "./UserProfileContext"
import { UserProfile } from "@/utils/types"

const UserProfileProvider: FC<
  PropsWithChildren<{ userProfile: UserProfile }>
> = ({ userProfile, children }) => {
  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  )
}

export default UserProfileProvider
