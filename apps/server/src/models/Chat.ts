import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.config"

class Chat extends Model {}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { sequelize, modelName: "chat" },
)

export default Chat
