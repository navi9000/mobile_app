import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize, { Chat, UserAccount }: any) => {
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

  return ChatParticipant
}
