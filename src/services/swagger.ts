import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "My API",
		version: "1.0.0",
		description: "My API Description",
		license: {
			name: "MIT",
			url: "https://spdx.org/licenses/MIT.html",
		},
		contact: {
			name: "LogRocket",
			url: "https://logrocket.com",
			email: "info@email.com",
		},
	},
	servers: [
		{
			url: "http://localhost:7000",
		},
	],
};

const options = {
	definition: swaggerDefinition,
	apis: [path.resolve() + "/src/services/router/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
