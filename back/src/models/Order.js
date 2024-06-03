const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Order",
		{
			id_Order: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4
			},
			userInformation: {
				type: DataTypes.JSONB,
				allowNull: false
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false
			},
			paymentMethod: {
				type: DataTypes.STRING,
				allowNull: false
			},
			paymentInformation: {
				type: DataTypes.JSONB,
				allowNull: false
			},
			paymentStatus: {
				type: DataTypes.STRING,
				allowNull: false
			},
			date: {
				type: DataTypes.STRING,
				allowNull: false
			},
			total: {
				type: DataTypes.DECIMAL,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
