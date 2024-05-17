"use strict";
exports.__esModule = true;
exports.swaggerSpec = void 0;
var path_1 = require("path");
var swagger_jsdoc_1 = require("swagger-jsdoc");
var swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "My API",
        version: "1.0.0",
        description: "My API Description",
        license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html"
        },
        contact: {
            name: "LogRocket",
            url: "https://logrocket.com",
            email: "info@email.com"
        }
    },
    servers: [
        {
            url: "http://localhost:7000"
        },
    ]
};
var options = {
    definition: swaggerDefinition,
    apis: [path_1["default"].resolve() + "/src/services/router/*.ts"]
};
exports.swaggerSpec = swagger_jsdoc_1["default"](options);
