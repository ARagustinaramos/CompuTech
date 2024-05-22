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
			deliveryAddress: {
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
			shippingStatus: {
				type: DataTypes.STRING,
				allowNull: false
			},
			orderQuantity: {
				type: DataTypes.INTEGER,
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
