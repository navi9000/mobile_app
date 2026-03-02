import { Model, DataTypes } from "sequelize"
import sequelize from "../config/db.config"
import UserAccount from "./UserAccount"

class UserProfile extends Model {}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: UserAccount,
        key: "id",
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    user_photo: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "user_profile" },
)

export default UserProfile
