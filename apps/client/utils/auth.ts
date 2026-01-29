import AsyncStorage from "@react-native-async-storage/async-storage"

export async function isAuth() {
  const username = await AsyncStorage.getItem("username")
  return !!username
}

export class Auth {
  static #KEY = "username"

  static async isAuth() {
    const username = await AsyncStorage.getItem(this.#KEY)
    return !!username
  }

  static async clear() {
    await AsyncStorage.clear()
  }

  static async setAuth(username: string) {
    await AsyncStorage.setItem(this.#KEY, username)
  }

  static getUsername() {
    return AsyncStorage.getItem(this.#KEY)
  }
}
