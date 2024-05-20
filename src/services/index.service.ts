import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import bearerToken from "express-bearer-token";
import mailer from "express-mailer";
import multer from "multer";
import path from "path";
import { Config, EmailConfig } from "@src/config/config.index";
import LoginRouter from "./router/login.router";
import { swaggerSpec } from "./swagger";
import swaggerUI from "swagger-ui-express";
import expressOasGenerator from "express-oas-generator";
import UserRouter from "./router/user.router";

export const app = express();

export const __dirname = path.resolve();

dotenv.config();

const corsOptions = {
	optionsSuccessStatus: 200,
	origin: "*",
};

export const server = app.listen(Config.PORT, () =>
	console.log("\x1b[32m", "App listening on port " + Config.PORT)
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
app.use("/", UserRouter);

/** Swagger */
app.use(
	"/api",
	swaggerUI.serve,
	swaggerUI.setup(swaggerSpec, {
		explorer: true,
	})
);

expressOasGenerator.init(app, {});

export default {
	app,
	server,
};
