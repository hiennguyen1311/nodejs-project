"use strict";
exports.__esModule = true;
exports.server = exports.app = void 0;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var express_bearer_token_1 = require("express-bearer-token");
var express_mailer_1 = require("express-mailer");
var multer_1 = require("multer");
var path_1 = require("path");
var config_index_1 = require("@src/config/config.index");
var login_router_1 = require("./router/login.router");
var url_1 = require("url");
var swagger_1 = require("./swagger");
var swagger_ui_express_1 = require("swagger-ui-express");
var express_oas_generator_1 = require("express-oas-generator");
exports.app = express_1["default"]();
var __filename = url_1.fileURLToPath(import.meta.url);
var __dirname = path_1["default"].resolve();
dotenv_1["default"].config();
var corsOptions = {
    optionsSuccessStatus: 200,
    origin: "*"
};
exports.server = exports.app.listen(config_index_1.Config.PORT, function () {
    return console.log("App listening on port " + config_index_1.Config.PORT);
});
/** Config API Request */
exports.app.use(cors_1["default"](corsOptions));
exports.app.use(express_bearer_token_1["default"]());
exports.app.use(body_parser_1["default"].json({ limit: "150mb" }));
exports.app.use(body_parser_1["default"].urlencoded({ limit: "150mb", extended: true }));
exports.app.use(express_1["default"].json());
/** Public image path */
exports.app.use(express_1["default"].static("../image"));
exports.app.use(multer_1["default"]({ dest: "./public/uploads/" }).single("file"));
exports.app.use("../../../image", express_1["default"].static(__dirname + config_index_1.Config.DIR));
/** Config Webview */
exports.app.get("/", function (req, res) {
    res.sendFile(path_1["default"].resolve() + "/src/web/index.html");
});
exports.app.set("views", __dirname + "../web/views");
/** Config Email */
exports.app.set("view engine", "jade");
exports.app.get("/jade", function (req, res) {
    res.render("email", { option: "value" });
});
express_mailer_1["default"].extend(exports.app, config_index_1.EmailConfig);
/** API Router */
exports.app.use("/", login_router_1["default"]);
/** Swagger */
exports.app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_1.swaggerSpec, {
    explorer: true
}));
express_oas_generator_1["default"].init(exports.app, {});
exports["default"] = {
    app: exports.app,
    server: exports.server
};
