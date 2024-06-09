const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"User",
		{
			id_User: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			mail: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: true
			},
			image: {
				type: DataTypes.STRING,
				allowNull: true
			},
			address: {
				type: DataTypes.STRING,
				allowNull: true
			},
			active: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: true
			},
			rol: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			shoppingCart: {
				type: DataTypes.JSONB,
				allowNull: true
			},
			recurringPayment: {
				type: DataTypes.JSONB,
				allowNull: true
			}
		},
		{ timestamps: false }
	);
};