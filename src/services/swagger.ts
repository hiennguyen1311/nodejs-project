import { Config } from "@src/config/config.index";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerAutogen from "swagger-autogen";
export { default as swaggerOutputFile } from "./docs/swagger-output.json";

const swaggerDefinition = {
	openapi: "3.1.0",
	info: {
		title: "My API",
		version: "1.0.0",
		description: "My API Description 123",
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
			url: `http://localhost:${Config.PORT}`,
		},
	],
	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
				bearerFormat: "JWT",
			},
		},
	},
	security: [
		{
			bearerAuth: [],
		},
	],
};

const options = {
	definition: swaggerDefinition,
	apis: [path.resolve() + "/src/services/router/*.ts"],
};
const outputFile = path.resolve() + "/src/services/docs/swagger-output.json";
const routes = [path.resolve() + "/src/services/router/*.ts"];

export const swaggerSpec = swaggerJSDoc(options);

swaggerAutogen()(outputFile, routes, swaggerSpec);
