import { Model, DataTypes, Sequelize } from "sequelize"

export default (sequelize: Sequelize) => {
  class UserProfile extends Model {}

  UserProfile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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

  return UserProfile
}
