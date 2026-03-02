import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.config"

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

export default UserAccount
