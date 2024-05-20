import { apiSwaggerDoc } from "./swaggerDoc";
import { Config } from "@src/config/config.index";
import { SwaggerDefinition } from "swagger-jsdoc";

export const swaggerDefinition: SwaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "My NodeJS API",
		version: "1.0.0",
		description: "NodeJS, Express, Swagger",
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
				in: "header",
				scheme: "bearer",
				bearerFormat: "JWT",
				name: "Authorizatiom",
			},
			ApiKeyAuth: {
				type: "apiKey",
				in: "header",
				name: "X-API-KEY",
			},
		},
		responses: {
			200: {
				description: "OK",
			},
			401: {
				description: "Access token is missing or invalid",
			},
			404: {
				description: "Not found",
			},
			500: {
				description: "Internal server",
			},
		},
	},
	host: `localhost:${Config.PORT}`,
	secuirty: {
		bearerAuth: [],
		ApiKeyAuth: [],
	},
	...apiSwaggerDoc,
};
