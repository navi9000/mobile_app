import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.config"
import UserAccount from "./UserAccount"
import Chat from "./Chat"

class ChatParticipant extends Model {}

ChatParticipant.init(
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
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Chat,
        key: "id",
      },
    },
    is_owner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "chat_participant" },
)

export default ChatParticipant
