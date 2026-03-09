import { Sequelize } from "sequelize"
import { env } from "../utils/env"
import loadChat from "../models/Chat"
import loadChatMessage from "../models/ChatMessage"
import loadChatParticipant from "../models/ChatParticipant"
import loadUserAccount from "../models/UserAccount"
import loadUserProfile from "../models/UserProfile"
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./env"

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
})

// models
const UserAccount = loadUserAccount(sequelize)
const UserProfile = loadUserProfile(sequelize, { UserAccount })
const Chat = loadChat(sequelize)
const ChatParticipant = loadChatParticipant(sequelize, { Chat, UserAccount })
const ChatMessage = loadChatMessage(sequelize, { Chat, UserAccount })

UserAccount.hasOne(UserProfile, { foreignKey: "id" })
UserProfile.belongsTo(UserAccount, { foreignKey: "id" })

const models = { UserAccount, UserProfile, Chat, ChatParticipant, ChatMessage }

export { sequelize, models }
