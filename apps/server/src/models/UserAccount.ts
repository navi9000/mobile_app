import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize) => {
  class UserAccount extends Model {}

  UserAccount.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user_account",
    },
  )

  return UserAccount
}
