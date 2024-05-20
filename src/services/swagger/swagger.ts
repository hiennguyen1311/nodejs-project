import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import fs from "fs";
import { swaggerDefinition } from "./swagger.defininition";
export { default as swaggerOutputFile } from "../docs/swagger-output.json";

const options = {
	definition: swaggerDefinition,
	apis: [],
};
const outputFile = path.resolve() + "/src/services/docs/swagger-output.json";

export const swaggerSpec = swaggerJSDoc(options);

export function runSwaggerDoc() {
	fs.writeFile(outputFile, JSON.stringify(swaggerSpec, null, 2), () => {
		console.log("\x1b[36m%s\x1b[0m", "Auto Swagger Gen");
	});
}

runSwaggerDoc();
