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
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false
			},
			active: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			},
			rol: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			},
			shoppingCart: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false
			},
			recurringPayment: {
				type: DataTypes.JSONB,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
