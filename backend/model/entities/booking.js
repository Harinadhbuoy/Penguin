module.exports = (sequelize, DataTypes) => {
    const bookings = sequelize.define("tour_bookings", {
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
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false
        }

    );

    return bookings;
};