import { UserProfile } from "@/utils/types"
import { createContext } from "react"

export default createContext<UserProfile | null>(null)
