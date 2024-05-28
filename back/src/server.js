const express = require("express");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});
server.use(
	cors({
		origin: "*" // Reemplaza esto con el dominio de tu frontend
	})
);

// Configuración de JWT y autenticación
const authConfig = {
	domain: "dev-y3wtga4i20zjum82.us.auth0.com", // Reemplaza "tu-domino" con tu dominio Auth0
	audience: "https://dev-y3wtga4i20zjum82.us.auth0.com/api/v2/" // Reemplaza "tuservidor.com" con el dominio de tu servidor
};

const checkJwt = jwt.expressjwt({
	// Dynamically provide a signing key based on the kid in the header
	// and the signing keys provided by the JWKS endpoint.
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
	}),

	// Validate the audience and the issuer.
	audience: authConfig.audience,
	issuer: `https://${authConfig.domain}/`,
	algorithms: ["RS256"]
});

server.use("/", router);
server.use(checkJwt);

server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.log(err);
	res.status(status).send(message);
});

module.exports = { server, checkJwt };
