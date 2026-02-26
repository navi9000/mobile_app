import ProfilePageTemplate from "@/components/templates/Profile"
import { FC } from "react"

const Profile: FC = () => {
  const personalInfo = {
    firstName: "Andrea",
    lastName: "Johnson",
    avatar: require("@/assets/images/provided_avatar.png"),
    location: "San Francisco",
    occupation: "Event Manager",
    followers: 145234,
    following: 56304,
    likes: 1690,
  }

  return <ProfilePageTemplate {...personalInfo} />
}

export default Profile
