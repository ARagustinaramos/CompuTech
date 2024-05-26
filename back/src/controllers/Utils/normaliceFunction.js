const normaliceFunction = (texto) => {
	return texto
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase();
};

module.exports = normaliceFunction;
