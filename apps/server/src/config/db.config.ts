import { Sequelize } from "sequelize"
import { env } from "../utils/env"
import loadChat from "../models/Chat"
import loadChatMessage from "../models/ChatMessage"
import loadChatParticipant from "../models/ChatParticipant"
import loadUserAccount from "../models/UserAccount"
import loadUserProfile from "../models/UserProfile"

const sequelize = new Sequelize(
  env("DB_NAME"),
  env("DB_USER"),
  env("DB_PASS"),
  {
    host: env("DB_HOST"),
    port: +env("DB_PORT"),
    dialect: "postgres",
  },
)

// models
const UserAccount = loadUserAccount(sequelize)
const UserProfile = loadUserProfile(sequelize, { UserAccount })
const Chat = loadChat(sequelize)
const ChatParticipant = loadChatParticipant(sequelize, { Chat, UserAccount })
const ChatMessage = loadChatMessage(sequelize, { Chat, UserAccount })

const models = { UserAccount, UserProfile, Chat, ChatParticipant, ChatMessage }

export { sequelize, models }
