import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize, { Chat, UserAccount }: any) => {
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
      chat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Chat,
          key: "id",
        },
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize, modelName: "chat_message" },
  )

  return ChatMessage
}
