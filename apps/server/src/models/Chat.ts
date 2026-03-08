import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize) => {
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

  return Chat
}
