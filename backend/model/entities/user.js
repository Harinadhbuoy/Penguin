module.exports = (sequelize, DataTypes) => {
  const signup = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  return signup;
};