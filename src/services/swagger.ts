import { Config } from "@src/config/config.index";
import path from "path";
import swaggerJSDoc, { SwaggerDefinition } from "swagger-jsdoc";
import swaggerAutogen from "swagger-autogen";
import fs from "fs";

const swaggerDefinition: SwaggerDefinition = {
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
				name: " Bearer Token",
			},
			apiKeyAuth: {
				type: "apiKey",
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
		apiKeyAuth: [],
	},
};

const options = {
	definition: swaggerDefinition,
	apis: [path.resolve() + "/src/services/router/*.ts"],
};
const outputFile = path.resolve() + "/src/services/docs/swagger-output.json";
const routes = [path.resolve() + "/src/services/router/*.ts"];

export const swaggerSpec = swaggerJSDoc(options);

export function runSwaggerDoc() {
	fs.writeFile(outputFile, JSON.stringify(swaggerSpec, null, 2), () => {
		console.log("\x1b[36m%s\x1b[0m", "Auto Swagger Gen");
	});
}

runSwaggerDoc();
