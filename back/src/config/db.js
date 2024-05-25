const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local';
require('dotenv').config({ path: path.resolve(process.cwd(), envFile) });

const { DB_URL } = process.env;

if (!DB_URL) {
	throw new Error("Por favor define la variable de entorno DB_URL dentro del archivo .env");
}

const sequelizeOptions = new Sequelize(DB_URL, {
	logging: false,
	native: false
});

if (process.env.NODE_ENV === 'production') {
    sequelizeOptions.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false // Puedes ajustar esto según tus necesidades de seguridad
        }
    };
}

const sequelize = new Sequelize(DB_URL, sequelizeOptions);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "..", "models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "..", "models", file)));
	});

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1]
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Product, Order, Review, Categories, Brand } = sequelize.models;

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Categories.hasMany(Product);
Product.belongsTo(Categories);

module.exports = {
	...sequelize.models,
	sequelize
};
