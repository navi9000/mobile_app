import ProfilePageTemplate from "@/components/templates/Profile"
import { FC } from "react"

const Profile: FC = () => {
  const personalInfo = {
    followers: 145234,
    following: 56304,
    likes: 1690,
  }

  return <ProfilePageTemplate {...personalInfo} />
}

export default Profile
