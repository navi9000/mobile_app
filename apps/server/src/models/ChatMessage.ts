import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.config"
import UserAccount from "./UserAccount"

class ChatMessage extends Model {}

ChatMessage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserAccount,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "chat_message" },
)

export default ChatMessage
