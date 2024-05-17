import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import bearerToken from "express-bearer-token";
import mailer from "express-mailer";
import multer from "multer";
import path, { dirname } from "path";
import { Config, EmailConfig } from "@src/config/config.index";
import LoginRouter from "./router/login.router";
import { fileURLToPath } from "url";
import { swaggerSpec } from "./swagger";
import swaggerUI from "swagger-ui-express";
import expressOasGenerator from "express-oas-generator";

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

dotenv.config();

const corsOptions = {
	optionsSuccessStatus: 200,
	origin: "*",
};

export const server = app.listen(Config.PORT, () =>
	console.log("App listening on port " + Config.PORT)
);

/** Config API Request */
app.use(cors(corsOptions));
app.use(bearerToken());
app.use(bodyParser.json({ limit: "150mb" }));
app.use(bodyParser.urlencoded({ limit: "150mb", extended: true }));
app.use(express.json());

/** Public image path */
app.use(express.static("../image"));
app.use(multer({ dest: "./public/uploads/" }).single("file"));
app.use("../../../image", express.static(__dirname + Config.DIR));

/** Config Webview */
app.get("/", (req, res) => {
	res.sendFile(path.resolve() + "/src/web/index.html");
});
app.set("views", __dirname + "../web/views");

/** Config Email */
app.set("view engine", "jade");
app.get("/jade", (req, res) => {
	res.render("email", { option: "value" });
});
mailer.extend(app, EmailConfig);

/** API Router */
app.use("/", LoginRouter);

/** Swagger */
app.use(
	"/api-docs",
	swaggerUI.serve,
	swaggerUI.setup(swaggerSpec, {
		explorer: true,
		customCssUrl:
			"https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
	})
);

expressOasGenerator.init(app, {});

export default {
	app,
	server,
};
