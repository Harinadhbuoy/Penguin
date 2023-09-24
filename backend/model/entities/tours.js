module.exports = (sequelize, DataTypes) => {
    const tours = sequelize.define("tours", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tour_name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      tour_original_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      },
      tour_discount_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      }
    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
);

    return tours;
  };