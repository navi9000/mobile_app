import AsyncStorage from "@react-native-async-storage/async-storage"
import { UserProfile } from "./types"

export class Auth {
  static async isAuth() {
    const id = await AsyncStorage.getItem("id")
    return !!id
  }

  static async clear() {
    await AsyncStorage.clear()
  }

  static async setUserProfile(userProfile: UserProfile) {
    await AsyncStorage.multiSet([
      ["id", userProfile.id.toString()],
      ["first_name", userProfile.first_name],
      ["last_name", userProfile.last_name],
      ["location", userProfile.location ?? ""],
      ["occupation", userProfile.occupation ?? ""],
      ["user_photo", userProfile.user_photo ?? ""],
    ])
  }

  static async getUserProfile() {
    const data = await AsyncStorage.multiGet([
      "id",
      "first_name",
      "last_name",
      "location",
      "occupation",
      "user_photo",
    ])
    return {
      id: Number(data[0][1]),
      first_name: data[1][1]!,
      last_name: data[2][1]!,
      location: data[3][1] ?? null,
      occupation: data[4][1] ?? null,
      user_photo: data[5][1]?.replace(".png", ".avif") ?? null,
    }
  }
}
