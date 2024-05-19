import { Config } from "@src/config/config.index";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

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
			url: `http://localhost:${Config.PORT}`,
		},
	],
};

const options = {
	definition: swaggerDefinition,
	apis: [path.resolve() + "/src/services/router/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app: Express) {
	// Swagger Page
	app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	// Documentation in JSON format
	app.get("/docs.json", (req, res) => {
		res.setHeader("Content-Type", "application/json");
		res.send(swaggerSpec);
	});
}
