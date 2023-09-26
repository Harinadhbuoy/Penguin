module.exports = (sequelize, DataTypes) => {
    const complaints = sequelize.define("complaints", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      complaint_category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      complaint_reason: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
    //   tour_discount_price: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: false
    //   },
    //   user_email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   },
    },
    {
      timestamps:false,
      createdAt:false,
      updatedAt:false
    }
    
);

    return complaints;
  };